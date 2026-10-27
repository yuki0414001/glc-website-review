export const nav = [
  ['home','首页','Home'], ['about','关于GLC','About'],
  ['chapters','全球社群','Global Chapters'], ['programs','活动体系','GLC Programs']
];
export const auxiliary = [
  ['faq','常见问题（FAQ）','FAQ','了解与帮助'], ['contact','联系我们','Contact','了解与帮助'],
  ['charter','GLC组织章程','Charter','规则与治理'],
  ['certification-policy','GLC高校分部认证与管理办法','Chapter Certification & Management Policy','规则与治理'],
  ['support-policy','GLC分部活动与物资支持管理办法','Chapter Activities & Support Policy','规则与治理'],
  ['conduct','社群行为准则','Code of Conduct','规则与治理'],
  ['brand','GLC高校分部品牌使用规范','Brand Guidelines','规则与治理'],
  ['privacy','隐私政策','','法律与隐私'],
  ['terms','网站使用条款','','法律与隐私']
];
export const chapters = [
  {id:'campus-a',name:'高校名称 / GLC分部名称',en:'Chapter Page',location:'城市、国家',image:'campus'},
  {id:'campus-b',name:'高校名称 / GLC分部名称',en:'Chapter Page',location:'城市、国家',image:'workshop'},
  {id:'campus-c',name:'高校名称 / GLC分部名称',en:'Chapter Page',location:'城市、国家',image:'community'},
  {id:'campus-d',name:'高校名称 / GLC分部名称',en:'Chapter Page',location:'城市、国家',image:'campus'}
];
export const highlights = [
  {title:'AI探索日：从工具使用到创新实践',affiliation:'GLC Cambridge · Cambridge, UK',tag:'AI Exploration',image:'workshop',shape:'tall'},
  {title:'周末一起开跑',affiliation:'GLC XXX University · Singapore',tag:'Lean Training',image:'campus',shape:'wide'}
];
export const programs = [
  {id:'daily',n:'01',title:'日常活动',en:'Daily Activities',cadence:'',desc:'各高校分部可结合成员兴趣、校历安排及场地资源，每月自主选择1—2类活动开展。',items:[
    ['薄肌训练日','Lean Training Day','力量训练、跑步及趣味运动'],
    ['成长读书会','Growth Reading Club','阅读、知识与观点交流'],
    ['大水生活课堂','Healthy Living Session','科学补水、饮食与生活习惯交流'],
    ['AI探索日','AI Exploration Day','AI学习、工具体验与创新实践'],
    ['青年交流沙龙','Youth Exchange Salon','跨校交流、职业发展与青年成长']
  ]},
  {id:'month',n:'02',title:'全球主题月',en:'Global Theme Month',cadence:'',desc:'GLC每月设定一个全球共同主题，各高校分部结合实际自主策划，围绕同一主题形成各自的活动与表达。',items:[
    ['11月','薄肌集结，正式开练','通过运动相识，与志同道合的伙伴共同开启薄肌生活。'],
    ['12月','大水生活节','从饮水、饮食与作息出发，探索健康、可持续的生活习惯。'],
    ['1月','AI共学计划','围绕AI知识与应用共同学习，在交流与实践中持续探索。']
  ]},
  {id:'summit',n:'03',title:'全球薄肌峰会',en:'Global Lean Club Summit',cadence:'',desc:'全球薄肌峰会作为GLC年度旗舰活动，计划每年举办一届，汇聚全球成员、导师及合作伙伴，通过主题分享、跨区域交流与优秀分部表彰，推动健康运动、AI探索与青年成长，深化全球分部之间的连接与合作。',items:[
    ['主题分享','Ideas & Talks',''],['全球交流','Global Exchange',''],['优秀分部表彰','Chapter Recognition','']
  ]}
];
export const conditions = [
  ['已获得学校正式认可','申请主体须为已获所属学校正式认可，且认可状态仍在有效期内的俱乐部／社团。'],
  ['由现任负责人本人申请','申请须由该俱乐部／社团现任负责人本人填写并提交，不接受代为申请。'],
  ['能够提供可核实证明','申请时须提供学校正式认可证明，以及负责人当前在校状态等必要核验材料。'],
  ['具备基本团队基础','初始成员原则上不少于10人，并至少设置1名负责人和1名协助运营人员。']
];
export const supports = [
  ['品牌支持','Brand Support','GLC官方电子认证证书、品牌标识及宣传素材。','✳'],
  ['物资支持','Material Support','运动周边、活动礼品及相关物资。','↗'],
  ['活动支持','Program Support','全球主题活动、跨校交流及活动策划支持，并可根据实际需求申请活动经费。','↔'],
  ['传播支持','Media Support','优秀分部活动及成员故事有机会获得GLC官方平台宣传推广。','◎']
];
export const process = ['填写信息并提交材料','秘书处核实','总部审核','通过后领取电子认证及品牌素材','建立 / 完善社群并开展首场活动'];
export const reviewNotes = {
 home:{pages:'Word · 第一页 首页',sections:['品牌首屏','什么是GLC · 三个核心文化','我们在做什么 · 四场景与宣传片','GLC在全球 · 四个示例分部','成为GLC高校分部 · 四步流程','收尾行动区'],notes:['校园照片为AI生成视觉示意；未提供正式标识，使用GLC文字排版。','四个分部卡片均为占位示例，认证标识只展示样式。','宣传片显示播放器封面和待补状态，不伪造视频。']},
 about:{pages:'Word · 第二页 关于GLC',sections:['我们是谁 · 三组交错图文','我们走向哪里 · 愿景视觉区'],notes:['保留原文完整段落；About正文无CTA。','图像为AI生成视觉示意。']},
 chapters:{pages:'Word · 第三页 全球社群',sections:['全球校园网络首屏','高校分部 · 可点击详情','社群动态 · 杂志式图片流'],notes:['分部资料不编写；动态仅使用Word中明确列出的2条示例，均非真实认证名单或事件。','国家、城市、高校筛选按文档留待分部增加后再加入。','正式发布日期、官方联系方式与真实活动素材待提供。']},
 programs:{pages:'Word · 第四页 活动体系',sections:['日常活动 · 五类活动','全球主题月 · 11月 / 12月 / 1月','全球薄肌峰会 · 年度旗舰活动'],notes:['三个活动体系入口默认收起，点击展开。','主题月份按原文展示，未补充未经确认的年份和日程。','峰会保留“计划每年举办一届”的表达。']},
 certification:{pages:'Word · 第五页 高校分部认证',sections:['认证首屏','申请前确认 · 四条件','认证后支持 · 四模块','认证流程 · 五步骤','Google表单申请入口'],notes:['按用户最新要求，移除站内五步填写界面，申请入口在新标签页打开指定Google表单。','联系邮箱采用用户提供的contact@globalleanclub.org；制度与隐私全文待提供。']}
};
