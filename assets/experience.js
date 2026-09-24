/* Bilingual reading guides based on the existing screens, not unverified research or metrics. */
(()=>{
  const en=document.documentElement.lang==='en';
  const t=(zh,english)=>en?english:zh;
  const page=location.pathname.split('/').pop()||'index.html';
  const guides={
    'meilixiuxing-skin-personality.html':[
      ['完成测试，理解自己的护肤偏好','Complete a quiz and understand skincare preferences','8 道题将测试入口、单选、多选与个性化结果串联起来。','Eight questions connect the entry screen, single and multiple choice, and a personalized result.'],
      ['让当前任务清楚可见','Keep the current task clear','1/8、8/8 的进度与“多选 2 条”的说明，分别交代完成位置和选择规则。','The 1/8 and 8/8 counters communicate progress; “choose two” explains the selection rule.'],
      ['从作答延伸到结果分享','Connect answers to a shareable result','加载状态承接等待过程；结果卡集中展示人格与关键词，并提供保存、分享入口。','Loading states bridge waiting periods. Result cards group personality and keywords with save and share actions.']
    ],
    'meilixiuxing-routine.html':[
      ['从护肤知识走向可执行方案','Turn skincare discovery into a routine','通过图鉴浏览、配方选择与方案合成，将内容探索组织为连续步骤。','Collection browsing, ingredient selection, and routine building form a sequence of actions.'],
      ['解释任务与解锁之间的关系','Connect tasks with unlocking','任务面板、解锁确认与奖励领取页面分别承接积累、确认和完成状态。','Task panels, unlock confirmations, and reward screens represent progress, confirmation, and completion.'],
      ['在操作后给出反馈','Make the outcome visible','结合下方的解锁确认、结果反馈与领取页面，查看一次操作如何获得明确回应。','The confirmation, result, and reward screens below show how an action receives a visible response.']
    ],
    'meilixiuxing-1111-ranking.html':[
      ['支持喜欢的产品并查看排名','Support a product and browse rankings','浏览榜单、投票比心、完成任务与抽奖构成主要参与路径。','Rankings, voting, tasks, and prize draws form the participation journey.'],
      ['覆盖活动的不同阶段','Cover campaign phases','未开始、投票中、投票结束与榜单公布分别对应不同的页面状态。','Not started, voting open, voting closed, and results announced each have distinct screen states.'],
      ['让奖励过程有据可查','Make reward status traceable','抽奖券提示、中奖弹窗与“我的奖品”分别解释获得资格、抽奖结果和后续查看。','Draw-entry notices, result dialogs, and “My prizes” explain eligibility, outcomes, and reward history.']
    ],
    'meilixiuxing-annual.html':[
      ['从总榜找到相关品类','Find a relevant category from the overview','从榜单总览进入分类榜单，再查看产品推荐理由与分享内容。','Move from the ranking overview to categories, product recommendations, and sharing.'],
      ['按信息层级组织浏览','Organize browsing by information level','总览、分类与产品内容采用逐层展开的结构，帮助读者定位当前关注的信息。','Overview, category, and product content create distinct levels for browsing.'],
      ['连接站内入口与活动页面','Connect app placements with the campaign','开屏、信息流与站内信沿用同一主题，承接不同入口进入活动的体验。','Launch screens, feed placements, and in-app messages share a campaign identity across entry points.']
    ]
  };
  const items=guides[page];
  if(items){
    const guide=document.createElement('aside');guide.className='ux-guide';guide.setAttribute('aria-label',t('交互与体验阅读指引','Interaction and UX walkthrough'));
    const label=document.createElement('p');label.className='ux-eyebrow';label.textContent=t('交互与体验 · 从用户任务读设计','INTERACTION & UX · FOLLOW THE USER TASK');guide.append(label);
    const grid=document.createElement('div');grid.className='ux-guide-grid';
    items.forEach((item,i)=>{const block=document.createElement('div');const number=document.createElement('span');number.className='ux-number';number.textContent=['01 / USER TASK','02 / INTERACTION','03 / FEEDBACK'][i];const title=document.createElement('h3');title.textContent=item[en?1:0];const body=document.createElement('p');body.textContent=item[en?3:2];block.append(number,title,body);grid.append(block);});
    guide.append(grid);const hero=document.querySelector('main > header,main > .hero,body > header.hero');if(hero)hero.after(guide);
  }
  if(page==='index.html'){
    const works=document.querySelector('.works');if(!works)return;
    const uiPages=new Set([...Object.keys(guides),'meilixiuxing-medals.html','meilixiuxing-christmas.html','calvin-klein.html']);
    const filters=document.createElement('div');filters.className='work-filters';filters.setAttribute('role','group');filters.setAttribute('aria-label',t('按作品类型浏览','Browse by work type'));
    const cards=[...works.children];
    [['all','全部作品','All work'],['ui','UI 与交互','UI & interaction'],['visual','品牌与视觉','Brand & visual']].forEach(([key,zh,english])=>{
      const button=document.createElement('button');button.type='button';button.textContent=t(zh,english);button.setAttribute('aria-pressed',String(key==='all'));
      button.addEventListener('click',()=>{filters.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));cards.forEach(card=>{const isUI=uiPages.has(card.getAttribute('href'));card.hidden=key==='ui'?!isUI:key==='visual'?isUI:false;});});filters.append(button);
    });works.before(filters);
    for(const card of cards){if(!uiPages.has(card.getAttribute('href')))continue;const tag=document.createElement('span');tag.className='ux-card-label';tag.textContent='UI / INTERACTION';card.querySelector('.case-overlay')?.prepend(tag);}
    const cfg=window.portfolioCKMiniProgram;
    if(cfg?.qrSrc){
      const panel=document.createElement('aside');panel.className='ck-live';
      const copy=document.createElement('div');const label=document.createElement('p');label.className='ux-eyebrow';label.textContent='LIVE PRODUCT / WECHAT MINI PROGRAM';const title=document.createElement('h3');title.textContent=t('Calvin Klein · All in one 小程序','Calvin Klein · All in one Mini Program');const desc=document.createElement('p');desc.textContent=t('近期 UI 项目。在微信中查看已上线的小程序界面与交互。','A recent UI project. Explore the live interface and interactions in WeChat.');
      const note=document.createElement('p');note.className='ck-live-note';note.textContent=t('请使用微信扫码；手机浏览可保存二维码后在微信中识别。','Scan with WeChat. On mobile, save the code and open it in WeChat.');copy.append(label,title,desc,note);
      const link=document.createElement('a');link.href=cfg.qrSrc;link.target='_blank';link.rel='noopener';const qr=document.createElement('img');qr.src=cfg.qrSrc;qr.alt=t('Calvin Klein All in one 微信小程序二维码','WeChat code for Calvin Klein All in one');qr.width=200;qr.height=200;qr.loading='lazy';link.append(qr);panel.append(copy,link);filters.before(panel);
    }
  }
})();
