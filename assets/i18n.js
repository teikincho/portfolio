(()=>{
  const pageName=location.pathname.split('/').pop()||'index.html';
  const home=pageName==='index.html';
  const homeText={
    '.hero .intro':'Zhang Dijin, a bachelor’s graduate with 9 years of design experience. I work across UI/UX, brand, campaigns, packaging, and AI—connecting products, brands, and people through cohesive design systems.',
    '.hero-side':'<strong>Currently</strong><br>UI Designer · Shanghai Yingmeng Technology<br><br><strong>Focus</strong><br>Product / Brand / AI<br><br><strong>Available for</strong><br>Full-stack Designer / Product Design / UI&UX',
    '.works article.card p':'AIGC visual exploration, AI-assisted ideation, and more efficient design workflows—supported by team learning and workshops.',
    '#about .about p:first-child':'I have 9 years of experience across digital products, brand and campaign design. My work spans apps, mini programs, H5, web, enterprise systems, marketing campaigns, and offline materials.',
    '#about .about p:last-child':'I contribute across the full design process, from requirements and user research to interaction, visual design, delivery, and quality review. I also explore how generative AI can support creative development and design workflows.',
    '#work .section-title':'Selected Works','#about .section-title':'About','#experience .section-title':'Experience',
    '.contact .kicker':'LET’S WORK TOGETHER'
  };
  const cards={
    'calvin-klein.html':['Calvin Klein Campaign Design','Mobile campaign pages and interactive tasks for student verification, seasonal promotions, styling events, rewards, and membership benefits.'],
    'meilixiuxing.html':['Meili Xiuxing × Douyin Beauty Awards','A black-and-gold awards identity extended across app launch screens, in-app messages, and feed banners.'],
    'meilixiuxing-skin-personality.html':['Skincare Personality Test','An eight-question skincare quiz that turns user preferences into a shareable personalized result.'],
    'meilixiuxing-medals.html':['Meili Xiuxing Achievement Badges','A cohesive enamel and metal badge system, from sketches and color studies to in-app collection screens.'],
    'meilixiuxing-b5-challenge.html':['B5 Essence Community Challenge','A campaign system connecting app placements, editorial content, community participation, and rewards.'],
    'meilixiuxing-routine.html':['3-Minute Skincare Routine','A mobile experience for collecting ingredients, combining a routine, and unlocking rewards.'],
    'meilixiuxing-annual.html':['2023 Meili Xiuxing Beauty Rankings','An H5 ranking experience with category browsing, product details, recommendations, and sharing.'],
    'meilixiuxing-christmas.html':['Christmas Mystery: The Missing Files','A festive interactive story built around identity checks, missions, clue cards, a draw, and sharing.'],
    'meilixiuxing-first-live.html':['Meili Xiuxing First E-commerce Livestream','A campaign journey from countdown posters and livestream entry to creator content, offers, and product discovery.'],
    'meilixiuxing-1111-ranking.html':['Double 11 Beauty Popularity Rankings','A voting campaign connecting product rankings, tasks, points, prize draws, and reward management.'],
    'meilixiuxing-scent-partners.html':['Scent Journey · Shanghai Recruitment','A garden-inspired recruitment campaign adapted for launch screens, messages, feeds, and community content.'],
    'shanqu-business-card.html':['Shanqu Technology Business Cards','A restrained black identity with iridescent light, balancing clear contact information with a distinctive brand expression.'],
    'changqingten-huawei.html':['Changqing Dad × Huawei Course Campaign','A Huawei-exclusive offer journey connecting coupons, course selection, purchase rewards, and recommendations.'],
    'changqingten-english.html':['Changqing Dad 3D English Course','A limited-time course campaign combining course information, purchase incentives, and 3D learning visuals.'],
    'changqingten-ip.html':['Changqing Dad Mascot · Xiaoxiao Chang','A series of character illustrations exploring space, games, nature, reading, and everyday adventures.'],
    'kk-show.html':['KK Show Launch Campaign','A pre-launch campaign connecting reservations, limited gifts, beta access, and launch reminders.'],
    'kk-keyboard-ip.html':['KK Keyboard IP Character Design','A friendly screen-based robot character developed into a reusable visual system with orthographic views and color rules.'],
    'weshine-anniversary.html':['Weshine Anniversary IP Collection','A shared anniversary world bringing multiple characters together across illustration and 3D scenes.'],
    'oatly-earth.html':['OATLY × Dayuanzi · Protect the Earth','A playful sustainability collaboration across campaign graphics, character illustration, and packaging.'],
    'alipay-nana.html':['Nana × Alipay Transit Code','Character illustration and scan-to-ride visuals combining a friendly mascot with a practical transit flow.'],
    'alipay-egg.html':['Egg Yolk × Alipay Transit Code','A character-led transit code visual system with clear scan guidance and a playful tone.']
  };
  const pageContent={
    'alipay-egg.html':{title:'Egg Yolk × Alipay Transit Code',intro:'A character-led visual for Alipay transit codes, combining a clear scan entry point with Egg Yolk’s playful personality for everyday journeys.'},
    'alipay-nana.html':{title:'Nana × Alipay Transit Code',intro:'Transit-code illustrations and scan guidance featuring Nana, bringing character personality into a convenient everyday travel scenario.'},
    'calvin-klein.html':{title:'Calvin Klein Campaign Design',intro:'Mobile campaign pages and interactive tasks for student verification, seasonal promotions, styling events, rewards, and membership benefits. A consistent structure and flexible visual language connect the campaign series.'},
    'changqingten-english.html':{title:'Changqing Dad · 3D English Course',intro:'A limited-time course campaign for Huawei users. “Learn for ¥0 by checking in” anchors the experience, supported by course details, purchase rewards, and learning content.'},
    'changqingten-huawei.html':{title:'Changqing Dad × Huawei Course Campaign',intro:'A course campaign for Huawei users. Limited-time coupons lower the first-purchase barrier, while purchase rewards and recommendations guide users from claiming an offer to enrolling.'},
    'changqingten-ip.html':{title:'Changqing Dad Mascot · Xiaoxiao Chang',intro:'A character illustration series for Changqing Dad’s mascot Xiaoxiao Chang. Space, games, nature, and reading themes build a curious, energetic character across varied scenes.'},
    'kk-keyboard-ip.html':{title:'KK Keyboard IP Character Design',intro:'A friendly robot character designed for KK Keyboard. The concept develops from a compact screen-shaped body into rounded displays, expressive lights, and a reusable character specification.'},
    'kk-show.html':{title:'KK Show Launch Campaign',intro:'A pre-launch campaign for KK Show. The message “Create a new look and enjoy trying on styles” is supported by limited gifts, beta access, and launch reminders.'},
    'meilixiuxing-1111-ranking.html':{title:'Double 11 Beauty Popularity Rankings',intro:'A campaign journey connecting product voting, point-earning tasks, prize draws, and ranking announcements, with rewards that encourage continued participation.'},
    'meilixiuxing-annual.html':{title:'2023 Meili Xiuxing Beauty Rankings',intro:'A complete H5 experience for annual beauty rankings, from the campaign entry and category lists to product details, recommendations, and sharing—extended across in-app placements.'},
    'meilixiuxing-b5-challenge.html':{title:'B5 Essence Community Challenge',intro:'A campaign for “B5 Use-It-Your-Way,” spanning launch screens, app entry points, feeds, messages, editorial content, and community topics to connect awareness with participation and rewards.'},
    'meilixiuxing-christmas.html':{title:'Christmas Mystery · The Missing Files',intro:'A festive interactive story built around identity verification, missions, five clue cards, a final draw, and a shareable certificate. Friend invitations extend participation.'},
    'meilixiuxing-first-live.html':{title:'Meili Xiuxing First E-commerce Livestream',intro:'A campaign journey from countdown posters and livestream entry to a full event page. Creator content, offers, and ingredient-led product discovery support the first livestream.'},
    'meilixiuxing-medals.html':{title:'Meili Xiuxing Achievement Badge System',intro:'An achievement badge system using metallic outlines, enamel colors, and botanical details, developed from sketches to finished designs and in-app collection screens.'},
    'meilixiuxing-routine.html':{title:'3-Minute Skincare Routine',intro:'A mobile interaction centered on building a personalized skincare routine, connecting product discovery, ingredient collection, routine synthesis, and rewards.'},
    'meilixiuxing-scent-partners.html':{title:'Scent Journey · Shanghai Recruitment',intro:'A co-creation recruitment campaign inspired by a garden and fragrance journey. The visual system extends across launch screens, messages, feeds, profile entry points, and community content.'},
    'meilixiuxing-skin-personality.html':{title:'Skincare Personality Test',intro:'Eight skincare questions connect users’ knowledge, needs, and preferences to a personalized, shareable result. Hand-drawn characters and a vivid purple-yellow palette make the test approachable.'},
    'meilixiuxing.html':{title:'2023 Douyin Beauty Awards',intro:'Campaign visuals and in-app placements for the 2023 Douyin Beauty Awards. A black-and-gold palette, trophy, and ceremonial stage create a consistent awards identity.'},
    'oatly-earth.html':{title:'OATLY × Dayuanzi · Protect the Earth',intro:'A sustainability collaboration combining Dayuanzi characters with OATLY’s visual language across campaign graphics, illustrated packaging, and product applications.'},
    'shanqu-business-card.html':{title:'Shanqu Technology Business Cards',intro:'A restrained black identity with iridescent light. The front presents identity; the reverse organizes contact details into a clear, cohesive offline brand touchpoint.'},
    'weshine-anniversary.html':{title:'Weshine Anniversary IP Collection',intro:'A celebration bringing together character IPs from Shanqu Technology through a group illustration, anniversary artwork, and a playful 3D scene.'}
  };
  const captions={
    '查看大图 ↗':'View full size ↗','名片正面 · 身份信息':'Business card front · Identity','名片背面 · 联系方式与二维码':'Business card back · Contact and QR code',
    '太空探索 · 角色主题插画':'Space exploration · Character illustration','游戏玩家 · 角色主题插画':'Gamer · Character illustration','自然探索 · 角色主题插画':'Nature exploration · Character illustration','星星与阅读 · 角色主题插画':'Stars and reading · Character illustration','活力日常 · 角色主题插画':'Everyday energy · Character illustration','小小常宇航员 · 角色主题插画':'Xiaoxiao Chang the astronaut · Character illustration',
    '主题插画 · 联名视觉概念':'Key illustration · Collaboration concept','乘车码 · 扫码引导视觉':'Transit code · Scan guidance','项目主视觉与榜单页面':'Campaign key visual and ranking pages','开屏 · 活动主视觉延展':'Launch screen · Campaign visual','站内信 · 金榜盛典传播':'In-app message · Awards promotion',
    '01 活动未开始':'01 Campaign not started','02 投票开始':'02 Voting opens','03 比心支持':'03 Vote for a favorite','04 获得心心':'04 Earn hearts','05 获得抽奖券':'05 Unlock a draw entry','06 心动榜抽奖':'06 Popularity ranking draw','07 投票结束':'07 Voting ends','08 榜单公布':'08 Rankings announced',
    '01 首页 · 活动入口':'01 Home · Campaign entry','02 导语 · 项目背景':'02 Introduction · Background','03 美修盒心选榜 · 榜单总览':'03 Editor’s picks · Ranking overview','04 榜单浏览 · 滑动查看':'04 Browse rankings · Scroll to explore','05 宝妈安心榜 · 分类榜单':'05 Family care · Category ranking','06 精致妆容榜 · 分类榜单':'06 Makeup · Category ranking','07 生活疗愈榜 · 分类榜单':'07 Wellbeing · Category ranking','08 新锐势力榜 · 分类榜单':'08 Emerging brands · Category ranking',
    '01 · 活动首页':'01 · Campaign home','02 · 方案合成':'02 · Build a routine','03 · 解锁确认':'03 · Confirm unlock','04 · 任务积累':'04 · Earn points','05 · 我的图鉴':'05 · My collection','06 · 结果反馈':'06 · Results',
    '01 活动入口':'01 Campaign entry','02 加载引导':'02 Loading guide','03 题目加载':'03 Question loading','04 第一题：单选':'04 Question 1 · Single choice','05 第八题：多选':'05 Question 8 · Multiple choice','06 生成护肤人格':'06 Generate personality','07 分享结果':'07 Share results',
    '初始状态':'Initial state','解锁状态':'Unlocked state','主题图形 · 保护地球计划':'Campaign graphic · Protect the Earth','联名包装 · 主题插画':'Collaboration packaging · Illustration','包装应用 · 系列视觉展示':'Packaging application · Series visuals','包装标签 · 图形延展':'Packaging label · Graphic extension'
  };
  const sectionTitles={
    'kk-keyboard-ip.html':['From a responsive screen to a companion robot','Orthographic views define the character structure','Color, silhouette, and linework protect character recognition','Turn a character into a production-ready design asset'],
    'kk-show.html':['Connect pre-launch and launch through reservations, gifts, and reminders','Limited gifts give users a new look to look forward to','Explain the participation rules and qualification steps','Campaign placements make the next action clear'],
    'changqingten-huawei.html':['Connect offers, course purchase, and a prize draw into one journey','Make the prize draw the next step after purchase','Use a bright family-learning visual system across placements'],
    'changqingten-english.html':['Build a clear course-purchase journey from campaign entry to rewards','Turn course benefits into clear, actionable offers','Use 3D icons to describe three learning experiences','Unify campaign pages, banners, and visual assets'],
    'changqingten-ip.html':[],
    'meilixiuxing-routine.html':['From choosing skincare products to a personalized routine','Turn skincare knowledge into a clear interactive journey','Use states and feedback to make interactions easier to understand','Unify campaign touchpoints from loading to rewards'],
    'meilixiuxing-skin-personality.html':['Test flow and interaction','Personality result cards and interface details','Illustration assets and interface design','Entry points and campaign placements'],
    'meilixiuxing-annual.html':['H5 pages and interaction flow','Campaign promotion and placements'],
    'meilixiuxing-b5-challenge.html':['Bring the campaign into home, profile, and feed placements','From awareness to co-creation and community discussion','Connect browsing, creating, and rewards through a content challenge','Adapt one visual system to different placement sizes','Explain challenge rules and rewards in a complete long-form page'],
    'meilixiuxing-christmas.html':['Campaign journey and interaction flow'],
    'meilixiuxing-first-live.html':['Promotion journey and content sequence','Countdown posters','UI details and campaign placements','Livestream event and promotional assets'],
    'meilixiuxing-1111-ranking.html':['Campaign flow and interaction steps','Key states and interface details','Overall and category rankings'],
    'meilixiuxing-medals.html':['Design process','Finished badge set','App interface'],
    'meilixiuxing-scent-partners.html':['Campaign journey and interaction steps','Visual system and content extensions','Placement adaptations'],
    'shanqu-business-card.html':['Use negative space and light to balance information'],
    'weshine-anniversary.html':['Bring distinct characters together on one anniversary stage','A 3D content factory for the energy of a sixth anniversary','One anniversary theme, told through different media','From individual characters to an IP family']
  };
  const requestedLanguage=new URLSearchParams(location.search).get('lang');
  if(requestedLanguage==='en'||requestedLanguage==='zh')localStorage.setItem('portfolio-language',requestedLanguage);
  const english=localStorage.getItem('portfolio-language')==='en';
  const textNodes=[];const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  while(walker.nextNode())if(walker.currentNode.nodeValue.trim())textNodes.push(walker.currentNode);
  const originalText=new WeakMap(textNodes.map(node=>[node,node.nodeValue]));
  const setText=(selector,value)=>{const el=document.querySelector(selector);if(el){if(!el.dataset.i18nZh)el.dataset.i18nZh=el.innerHTML;el.innerHTML=value;}};
  const setCardText=(href,index,value)=>{const card=document.querySelector(`.works a[href="${href}"]`);if(card){const title=card.querySelector('h3'),desc=card.querySelector('.case-overlay p'),brand=card.querySelector('.card-top span:nth-child(2)');if(title)title.textContent=value[0];if(desc)desc.textContent=value[1];if(brand&&index)brand.textContent=index;}};
  const apply=()=>{
    document.documentElement.lang=english?'en':'zh-CN';document.body.classList.toggle('lang-en',english);
    const button=document.querySelector('.language-toggle');if(button){button.textContent=english?'中文':'EN';button.setAttribute('aria-label',english?'Switch to Chinese':'Switch to English');}
    const navLinks=document.querySelector('.navlinks');
    if(home){
      const links=navLinks?[...navLinks.querySelectorAll('a')]:[];
      if(english){Object.entries(homeText).forEach(([s,v])=>setText(s,v));
        const cardBrand={'calvin-klein.html':'2024—NOW · Yingmeng Tech','meilixiuxing.html':'2023 · Meili Xiuxing','meilixiuxing-skin-personality.html':'2024 · Meili Xiuxing','meilixiuxing-medals.html':'Meili Xiuxing','meilixiuxing-b5-challenge.html':'Meili Xiuxing','meilixiuxing-routine.html':'Meili Xiuxing','meilixiuxing-annual.html':'2023 · Meili Xiuxing','meilixiuxing-christmas.html':'2023 · Meili Xiuxing','meilixiuxing-first-live.html':'2023 · Meili Xiuxing','meilixiuxing-1111-ranking.html':'2023 · Meili Xiuxing','meilixiuxing-scent-partners.html':'2023 · Meili Xiuxing','shanqu-business-card.html':'Shanqu Technology','changqingten-huawei.html':'Changqing Dad × Huawei','changqingten-english.html':'Changqing Dad','changqingten-ip.html':'Changqing Dad','kk-show.html':'FlashFun · KK Keyboard','kk-keyboard-ip.html':'FlashFun · KK Keyboard','weshine-anniversary.html':'FlashFun · Weshine','oatly-earth.html':'FlashFun · OATLY','alipay-nana.html':'FlashFun · Alipay','alipay-egg.html':'FlashFun · Alipay'};
        Object.entries(cards).forEach(([href,value])=>setCardText(href,cardBrand[href],value));
        links.forEach((a,i)=>a.textContent=['Works','About','Experience','Contact'][i]||a.textContent);
        const rows=document.querySelectorAll('#experience .row');
        const companies=['Shanghai Yingmeng Technology','Meili Xiuxing','Beijing Shanqu Technology','Changqing Dad','Beijing Mingzhi Xingchen'];
        const roles=['Product UI Designer · SaaS / Visual / Brand','UI Designer · UI/UX / H5 / User Research','Visual Designer · Brand / Guidelines / Team Leadership','Visual Designer · Campaigns / H5 / Marketing','UI Designer · Mini Programs / Web / Print'];
        rows.forEach((row,i)=>{const c=row.querySelector('.company'),r=row.querySelector('.role');if(c)c.textContent=companies[i]||c.textContent;if(r)r.textContent=roles[i]||r.textContent;});
        const skills=[['UI / UX<br>Interaction<br>Information Architecture<br>Design Systems'],['Campaigns<br>H5 / Key Visuals / Social<br>Marketing<br>Content Design'],['Logo<br>Visual Identity<br>Brand Guidelines<br>Brand Communication'],['AIGC<br>AI-assisted Creation<br>Image Generation<br>Design Workflows']];
        document.querySelectorAll('.skill span').forEach((el,i)=>{if(skills[i])el.innerHTML=skills[i][0];});
        document.querySelectorAll('.works .case-thumb').forEach(img=>{const card=img.closest('a'),translation=cards[card?.getAttribute('href')];if(translation)img.alt=translation[0];});
        document.title='Zhang Dijin — Full-stack Designer';
        const phone=document.querySelector('.contact-row span:not(.wechat)');if(phone)phone.textContent='18105350124';const wechat=document.querySelector('.contact-row .wechat');if(wechat)wechat.textContent='WeChat: Teikincho';
      }else{
        textNodes.forEach(node=>{if(originalText.has(node))node.nodeValue=originalText.get(node);});
        document.querySelectorAll('[data-i18n-zh]').forEach(el=>el.innerHTML=el.dataset.i18nZh);
      }
    }else{
      const back=document.querySelector('nav .back,nav a.back');if(back&&english)back.textContent='← Back to Portfolio';else if(back&&!english)back.textContent=back.dataset.i18nZh||'← 返回作品集';
      if(english){const data=pageContent[pageName];if(data){const h=document.querySelector('main h1,header.hero h1,header.intro h1,body h1');if(h)h.textContent=data.title;const intro=document.querySelector('main header p,header.hero p,header.intro p,.hero p');if(intro)intro.textContent=data.intro;document.title=data.title+' — Zhang Dijin Portfolio';}
        const titles=sectionTitles[pageName]||[];document.querySelectorAll('h2').forEach((el,i)=>{if(titles[i])el.textContent=titles[i];});
        document.querySelectorAll('figcaption').forEach(el=>{const value=captions[el.textContent.trim()];if(value)el.textContent=value;});
        document.querySelectorAll('main h3').forEach(el=>{const map={'视频':'Video','游戏':'Games','跟读':'Read along','视频细节':'Video details','游戏细节':'Game details','跟读细节':'Read-along details','播放设备':'Playback device','成品造型':'Final character','单色稿':'Monochrome','描边与线稿':'Outline and line art'};if(map[el.textContent.trim()])el.textContent=map[el.textContent.trim()];});
      }
    }
  };
  document.querySelectorAll('nav').forEach(nav=>{if(!nav.querySelector('.language-toggle')){const button=document.createElement('button');button.type='button';button.className='language-toggle';button.addEventListener('click',()=>{const next=english?'zh':'en';localStorage.setItem('portfolio-language',next);const url=new URL(location.href);url.searchParams.set('lang',next);location.replace(url.href);});nav.append(button);}});
  const style=document.createElement('style');style.textContent='.language-toggle{margin-left:18px;padding:7px 12px;border:1px solid #c9c9c4;border-radius:999px;background:transparent;color:inherit;font:inherit;font-size:12px;line-height:1.2;cursor:pointer;white-space:nowrap}.language-toggle:hover{background:#111;color:#fff;border-color:#111}.navlinks .language-toggle{margin-left:0}@media(max-width:800px){.language-toggle{margin-left:10px;padding:6px 9px}.navlinks{align-items:center}}';document.head.append(style);
  apply();
})();
