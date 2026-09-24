/* Bilingual reading guides based on the existing screens, not unverified research or metrics. */
(()=>{
  const en=document.documentElement.lang==='en';
  const t=(zh,english)=>en?english:zh;
  const page=location.pathname.split('/').pop()||'index.html';
  const guides={
    'calvin-klein.html':[['浏览品牌内容与商品','Browse brand content and products','小程序首页承接品牌内容，商品页提供分类浏览与穿搭探索入口。','The home screen carries brand content; the shop supports category browsing and styling discovery.'],['进入社区发现内容','Explore community content','社区页通过分类、筛选和排序帮助浏览不同主题的用户内容。','Community categories, filters, and sorting help people browse user posts by theme.'],['连接内容与下一步操作','Connect content with next actions','首页、商品、社区与会员入口保持一致导航，帮助在浏览任务间切换。','Consistent navigation connects home, shopping, community, and membership tasks.']],
    'essilor.html':[['建立家庭视力档案','Build a family vision record','从家庭成员卡片切换配戴者，并新建或查看对应档案。','Switch wearers and create or review their matching records.'],['阅读趋势与镜片信息','Review trends and lens details','在视力趋势、左右眼报告与镜片详情间查看信息。','Move between vision trends, eye reports, and lens details.'],['补全检查数据并保存','Complete exam details and save','填写检查日期、购买渠道与镜片参数，并上传凭证。','Enter exam date, purchase channel, and lens measurements, then upload proof.']],
    'after-work-drinks.html':[['发现附近内容与店铺','Discover nearby content and venues','从发现页进入店铺详情，查看位置、联系信息与评价。','Open venue details from discovery to review location, contact, and comments.'],['从消息进入对话','Move from inbox to chat','好友与陌生人消息分开呈现，聊天中继续查看店铺推荐。','Separate inboxes distinguish friends and strangers; venue recommendations appear in chat.'],['管理个人内容与偏好','Manage personal content and preferences','个人主页和设置页承接内容、通知及隐私管理。','Profile and settings screens support content, notification, and privacy management.']],
    'lemon-early-learning.html':[['从入口进入课程服务','Enter course services','登录定位后，从首页、订单或我的账户进入课程任务。','After sign-in and location access, start from home, orders, or account.'],['完成预约与支付','Complete booking and payment','校验孩子信息和课程资格，选择课程时间并处理支付状态。','Validate child details and course eligibility, choose a time, and handle payment states.'],['跟进订单与上课','Follow orders and attendance','订单流程覆盖课程资料、评价、签到及失败等状态。','Order flows include course materials, evaluations, check-in, and failure states.']],
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
    const uiPages=new Set([...Object.keys(guides),'meilixiuxing-medals.html','meilixiuxing-christmas.html','calvin-klein.html','essilor.html','after-work-drinks.html','lemon-early-learning.html']);
    const filters=document.createElement('div');filters.className='work-filters';filters.setAttribute('role','group');filters.setAttribute('aria-label',t('按作品类型浏览','Browse by work type'));
    const cards=[...works.children];
    [['all','全部作品','All work'],['ui','UI 与交互','UI & interaction'],['visual','品牌与视觉','Brand & visual']].forEach(([key,zh,english])=>{
      const button=document.createElement('button');button.type='button';button.textContent=t(zh,english);button.setAttribute('aria-pressed',String(key==='all'));
      button.addEventListener('click',()=>{filters.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));cards.forEach(card=>{const isUI=uiPages.has(card.getAttribute('href'));card.hidden=key==='ui'?!isUI:key==='visual'?isUI:false;});});filters.append(button);
    });works.before(filters);
    for(const card of cards){if(!uiPages.has(card.getAttribute('href')))continue;const tag=document.createElement('span');tag.className='ux-card-label';tag.textContent='UI / INTERACTION';card.querySelector('.case-overlay')?.prepend(tag);}

  }
})();
