"""Create WebP display variants while retaining original PNGs for full-size links."""
from pathlib import Path
from PIL import Image
from concurrent.futures import ThreadPoolExecutor
import json
ROOT=Path(__file__).resolve().parents[1]
def convert(path):
    with Image.open(path) as source:
        source.load()
        variants={}
        for suffix,width in [('.webp',1440),('.small.webp',640),('.preview.webp',640)]:
            if 'title-letters' in path.parts: width=256
            dest=path.with_suffix(suffix)
            im=source.copy()
            if im.width>width: im=im.resize((width,round(im.height*width/im.width)),Image.Resampling.LANCZOS)
            im.save(dest,'WEBP',quality=84,method=6)
            variants[suffix]={'width':im.width,'height':im.height,'bytes':dest.stat().st_size}
        return str(path.relative_to(ROOT)),{'original':path.stat().st_size,**variants}
if __name__=='__main__':
    paths=list((ROOT/'assets').rglob('*.png'))
    with ThreadPoolExecutor(max_workers=4) as pool: result=dict(pool.map(convert,paths))
    (ROOT/'assets/image-manifest.json').write_text(json.dumps(result,ensure_ascii=False,indent=2))
    print(json.dumps({'files':len(result),'originalBytes':sum(x['original'] for x in result.values()),'webpBytes':sum(x['.webp']['bytes'] for x in result.values())}),flush=True)
