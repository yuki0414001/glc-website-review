import {nav,auxiliary,chapters,highlights,programs,conditions,supports,process,reviewNotes} from './content.js?v=20261023-form';

const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const arrow = '<span aria-hidden="true">↗</span>';
const link = (label,route,cls='text-link') => `<a class="${cls}" href="#/${route}">${label}${arrow}</a>`;
const apply = (label='申请高校分部认证',cls='button orange') => link(label,'certification',cls);
const tag = (text='AI生成 · 视觉示意') => `<span class="image-note">${text}</span>`;
const photo = (name,alt,cls='',eager=false) => `<figure class="photo ${cls}"><img src="assets/${name}.png" alt="${esc(alt)}" ${eager?'fetchpriority="high"':'loading="lazy"'}>${tag()}</figure>`;
const sectionTitle = (n,en,title,desc='') => `<div class="section-heading"><div class="eyebrow"><span>${n} /</span> ${en}</div><div><h2>${title}</h2>${desc?`<p>${desc}</p>`:''}</div></div>`;
let route = 'home';

function header() {
  $('#header').innerHTML = `<div class="header-inner"><a class="brand" href="#/home" aria-label="GLC 全球薄肌俱乐部 首页"><span class="wordmark">GLC<span class="brand-star">✳</span></span><span class="brand-caption">Global Lean Club<br>全球薄肌俱乐部</span></a><nav class="desktop-nav" aria-label="主导航">${nav.map(([r,cn,en])=>`<a href="#/${r}" ${route===r?'aria-current="page"':''}>${cn}<small>${en}</small></a>`).join('')}</nav><div class="header-actions">${apply('申请高校分部认证','button small dark')}<button class="menu-button" aria-label="打开导航" aria-expanded="false">☰</button></div></div><nav class="mobile-nav" aria-label="手机导航" hidden>${nav.map(([r,cn])=>link(cn,r,'')).join('')}${apply()}</nav>`;
}
function footer() {
  $('#footer').innerHTML = `<div class="footer-top"><div class="footer-brand"><a href="#/home" class="wordmark">GLC✳</a><p>与AI一起进化，<br>与全球青年共同成长。</p><span>Global Lean Club</span></div>${['了解与帮助','规则与治理','法律与隐私'].map(group=>`<div class="footer-group"><h3>${group}</h3>${auxiliary.filter(x=>x[3]===group).map(([id,title])=>`<a href="#/${id}">${title}</a>`).join('')}</div>`).join('')}</div><div class="footer-bottom"><span>© GLC · Global Lean Club</span><span>官网文案与排版审核预览 · 2026.10</span><a href="#main" data-scroll="main">BACK TO TOP ↑</a></div>`;
}
function chapterCards() {
 return chapters.map((c,i)=>`<a class="chapter-card" href="#/chapter/${c.id}"><div class="chapter-image">${photo(c.image,'高校分部主视觉审核占位')}<span class="chapter-index">0${i+1}</span><span class="sample-cert" data-review-only>✳ 认证标识示意</span></div><div class="chapter-meta"><span>${c.en} / <span data-review-only>审核占位</span></span>${arrow}</div><h3 class="copy-pending" data-review-only>${c.name}</h3><p class="location copy-pending" data-review-only>${c.location}</p><div class="chapter-update copy-pending" data-review-only>近期动态待提供</div></a>`).join('');
}
function home() {
 return `<section class="home-hero page-wrap"><div class="hero-copy"><div class="eyebrow"><span class="status-dot"></span> 首页｜Home</div><h1><span class="english-display">Global<br>Lean Club</span><span class="hero-cn">全球薄肌俱乐部</span></h1><p class="hero-slogan">与AI一起进化，<br>与全球青年共同成长。</p><p class="hero-intro">全球薄肌俱乐部（GLC）以“薄肌、AI、孙学”为文化纽带，连接全球高校青年，推动健康生活方式与AI创新实践融合，打造面向AI时代的国际化青年成长社区。</p>${apply()}<div class="hero-bottom"><span>薄肌 / AI / 孙学</span><a href="#culture" data-scroll="culture">向下探索 ↓</a></div></div><div class="hero-image">${photo('campus','青年在校园跑道上一起运动的AI生成视觉示意','',true)}<div class="image-sticker source-sticker"><span>薄肌<br>AI<br>孙学</span><span class="sticker-star">✳</span></div><span class="vertical-caption">Global Lean Club</span></div></section>
 <div class="brand-ribbon" aria-hidden="true"><span>薄肌｜Lean</span>✳<span>AI｜AI Practice</span>✳<span>孙学｜Sun Philosophy</span>✳</div>
 <section class="section page-wrap" id="culture">${sectionTitle('01','Global Lean Club','什么是GLC','GLC是一个面向全球青年的国际化青年组织，以“薄肌、AI、孙学”为核心文化理念，关注健康生活、AI实践、知识交流与青年成长。')}<div class="culture-grid">${[['Lean','薄肌','健康运动，积极生活','↗'],['AI Practice','AI','将AI融入生活，参与创新实践','✳'],['Sun Philosophy','孙学','保持开放，持续学习，不断演进','◎']].map((x,i)=>`<article class="culture-card culture-${i}"><div class="culture-top"><span>0${i+1}</span><span class="culture-icon">${x[3]}</span></div><h3>${x[1]}<small>${x[0]}</small></h3><p>${x[2]}</p></article>`).join('')}</div></section>
 <section class="section doing-section"><div class="page-wrap">${sectionTitle('02','Global Lean Club','我们在做什么','从运动到AI，从知识交流到跨地域互动，GLC把青年生活与成长放进真实场景里。')}<div class="doing-grid"><div class="scene-grid">${[['campus','健康运动','Healthy Lifestyle'],['workshop','AI学习与实践','AI Learning & Practice'],['community','知识分享','Ideas & Insights'],['community','跨地域交流','Global Exchange']].map(([img,title,en])=>`<article class="scene">${photo(img,title)}<div><h3>${title}</h3><span>${en}</span></div></article>`).join('')}</div><button class="film-card" data-media="brand" aria-label="查看品牌宣传片待补状态">${photo('community','品牌宣传片封面视觉示意')}<span class="play">▶</span><span class="film-label"><strong>品牌宣传片</strong><span>品牌宣传片 · 约30秒 / 素材待提供</span></span></button></div></div></section>
 <section class="section page-wrap">${sectionTitle('03','GLC Around the World','GLC在全球')}<div class="section-inline"><p>GLC在全球</p><span class="review-chip">分部内容为排版示例，非真实认证名单</span></div><div class="chapter-grid">${chapterCards()}</div><div class="section-bottom">${link('探索全球社群','chapters','button outline')}</div></section>
 <section class="chapter-invite section"><div class="page-wrap invite-grid"><div><div class="eyebrow">04 / Become a GLC Chapter · 成为GLC高校分部</div><h2>让你的校园社团<br>成为认证GLC高校分部。</h2></div><div class="invite-copy"><p>已获得所属学校正式认可、且认可状态在有效期内的高校俱乐部／社团，可申请GLC高校分部认证。</p><p>通过认证后，分部可获得GLC官方认证及品牌、活动、物资和传播等相关支持。</p><div class="mini-process">${['提交申请','资料审核','通过认证','开展活动'].map((x,i)=>`<span><b>0${i+1}</b>${x}</span>`).join('')}</div></div></div></section>
 <section class="final-cta">${photo('community','青年在校园相聚的视觉示意')}<div class="final-content"><div class="eyebrow">Final CTA</div><h2>与全球青年共同探索<br>AI时代的生活方式<br>与自我表达。</h2>${apply()}</div></section>`;
}
function about() {
 const rows=[
 ['一个面向全球青年的组织','','全球薄肌俱乐部（Global Lean Club，简称GLC）是一个以“薄肌、AI、孙学”为核心文化理念，面向全球青年的国际化青年组织。GLC关注健康生活方式与AI时代的青年成长，倡导将AI融入日常生活管理，致力于连接更多拥有共同兴趣与价值认同的年轻人。','community'],
 ['一种属于AI时代的青年生活','','GLC希望将健康运动、AI探索、知识交流、社交互动与共同成长融入青年社群日常，让“薄肌”不只是一种身体状态，更成为一种积极、开放的青年文化表达。|从健康运动到知识分享，从AI探索到跨地域交流，GLC希望为年轻人创造更多相遇、交流与共同成长的机会。我们倡导健康、理性、可持续的参与方式，“薄肌、AI、孙学”是社群独特的文化语言，而非对特定体型或生活方式的要求。','workshop'],
 ['由青年自己创造','','我们相信，青年社群的活力来自青年自身。GLC鼓励并支持全球高校青年自主建立分部。|各高校分部在共享统一理念与基本标准的同时，也可结合校园与当地文化，发展具有自身特色的活动与表达方式。','campus']
 ];
 return `<section class="page-heading page-wrap"><div class="eyebrow">关于GLC｜About</div><div class="title-row"><h1>我们是谁</h1><span class="display-aside">Global<br>Lean Club</span></div><p class="page-lead">Who We Are</p></section><div class="page-wrap about-rows">${rows.map((r,i)=>`<section class="about-row ${i%2?'reverse':''}"><div class="about-photo">${photo(r[3],r[0])}<span class="photo-number">0${i+1}</span></div><div class="about-copy"><span class="eyebrow">0${i+1} / Who We Are</span><h2>${r[0]}</h2>${r[2].split('|').map(t=>`<p>${t}</p>`).join('')}</div></section>`).join('')}</div><section class="vision">${photo('community','跨校园青年互动视觉示意')}<div class="vision-copy"><div class="eyebrow">我们走向哪里｜Our Vision</div><span class="vision-star">✳</span><h2>GLC将与全球青年共同探索AI时代的生活方式与自我表达，以社群为纽带，让不同观点彼此启发，让新的连接在此建立。</h2></div></section>`;
}
function community() {
 return `<section class="community-hero"><div class="page-wrap"><div class="eyebrow">全球社群｜Global Chapters</div><h1>从不同校园出发，<br>共同写下GLC的<br><em>全球故事。</em></h1><p>真实高校｜真实青年｜真实活动</p></div>${photo('community','全球青年校园群像视觉示意','',true)}<span class="community-seal">GLC<br>Global Chapters<br>✳</span></section><section class="section page-wrap" id="chapter-list">${sectionTitle('01','Our Chapters','全球高校分部')}<div class="section-inline"><p>全球高校分部</p><span class="review-chip">以下均为展示示例 · 实际认证分部资料待补充</span></div><div class="chapter-grid">${chapterCards()}</div></section><section class="section highlights-section"><div class="page-wrap">${sectionTitle('02','Community Highlights','社群动态')}<div class="sample-banner">审核标注：以下2条为Word文档原有示例，并非已核实的GLC活动；图片为AI生成示意。</div><div class="magazine-grid">${highlights.map((h,i)=>`<button class="story-card ${h.shape}" data-story="${i}">${photo(h.image,h.title)}<span class="story-meta"><span>${h.tag}</span><span data-review-only>文档示例 · 时间待提供</span></span><h3>${h.title}</h3><p>${h.affiliation}</p>${arrow}</button>`).join('')}</div></div></section>`;
}
function chapterPage(id) {
 const c=chapters.find(x=>x.id===id);
 if(!c) return notFound();
 return `<section class="chapter-detail-hero">${photo(c.image,'分部主视觉审核占位','',true)}<div class="page-wrap"><a class="back-link" href="#/chapters">← 全球社群｜Global Chapters</a><div class="sample-banner on-dark" data-review-only>审核占位：分部名称、所在地与认证状态待提供。</div><span class="sample-cert" data-review-only>✳ GLC认证标识示意</span><h1 class="copy-pending" data-review-only>GLC分部名称</h1><p class="copy-pending" data-review-only>${c.location}</p><span class="english-display">Chapter Page</span></div></section><section class="section page-wrap detail-about">${sectionTitle('01','About the Chapter','关于分部')}<div><p class="large-copy copy-pending" data-review-only>审核占位：正式分部介绍待提供。</p></div></section><section class="section page-wrap">${sectionTitle('02','Latest Updates','近期动态')}<div class="chapter-updates"><div class="sample-banner" data-review-only>审核占位：真实活动、分部故事及校园特色内容待提供。</div></div></section><section class="connect-section"><div class="page-wrap">${sectionTitle('03','Connect with the Chapter','联系分部','用户如希望参与，可通过对应高校分部的官方渠道进一步了解。')}<div class="channel-grid">${['X','邮箱','其他官方社群渠道'].map(x=>`<div><span>${x}</span><p class="copy-pending" data-review-only>审核占位：经确认的官方渠道待提供。</p><span aria-hidden="true">↗</span></div>`).join('')}</div><p class="muted">官网不统一承接普通成员加入申请。</p></div></section>`;
}
function programsPage() {
 return `<section class="page-wrap programs-intro"><div class="eyebrow">GLC Programs</div><h1>GLC活动体系</h1><div class="program-intro-bottom"><p>GLC活动体系由日常活动、全球主题月与全球薄肌峰会组成，涵盖健康运动、AI探索、阅读学习与青年交流，连接全球成员，共同成长。</p><span class="diagram-star" aria-hidden="true">✳</span></div></section><section class="page-wrap programs-main"><div class="program-cards">${programs.map((p,i)=>`<button class="program-card program-${i}" id="program-button-${p.id}" data-program="${p.id}" aria-expanded="false" aria-controls="program-detail"><div class="program-top"><span>${p.n} /</span><span class="program-plus">↗</span></div><div class="program-symbol" aria-hidden="true">${['↗','◎','✳'][i]}</div><div class="program-card-bottom"><h2>${p.title}</h2><span class="program-en">${p.en}</span><div class="program-open">点击探索 <span>+</span></div></div></button>`).join('')}</div><div id="program-detail" class="program-detail" hidden></div><div class="program-flow"><span>日常活动</span><i></i><span>全球主题月</span><i></i><span>全球薄肌峰会</span></div></section>`;
}
function programDetail(id) {
 const p=programs.find(x=>x.id===id);
 $('#program-detail').innerHTML=`<div class="detail-head"><div><span class="eyebrow">${p.en}</span><h2>${p.title}</h2></div><button data-close-program aria-label="收起活动详情">×</button></div><p class="detail-desc">${p.desc}</p><div class="program-items ${id}">${p.items.map((x,i)=>`<article><span class="item-number">${id==='month'?x[0]:`0${i+1}`}</span><div><h3>${id==='month'?x[1]:x[0]}</h3>${id==='month'?'':`<span>${x[1]}</span>`}${x[2]?`<p>${x[2]}</p>`:''}</div></article>`).join('')}</div>`;
 $('#program-detail').hidden=false;
 document.querySelectorAll('[data-program]').forEach(b=>b.setAttribute('aria-expanded',b.dataset.program===id?'true':'false'));
 $('#program-detail').scrollIntoView({behavior:motion(),block:'nearest'});
}
function certification() {
 return `<section class="cert-hero page-wrap"><div><div class="eyebrow">Chapter Certification</div><h1>高校分部认证</h1><h2>让你的校园社团成为认证GLC高校分部。</h2><p>面向已获得所属学校正式认可、且认可状态在有效期内的高校俱乐部／社团开放申请。通过认证后，可作为官方GLC高校分部开展相关活动，并获得品牌、活动、物资及传播等支持。</p><a href="#application" data-scroll="application" class="button orange">开始申请 <span>↓</span></a></div><div class="cert-visual">${photo('workshop','校园社团互动视觉示意','',true)}<div class="cert-seal"><span>Global Lean Club</span><b>GLC</b><span>Chapter Certification ✳</span></div></div></section><section class="section page-wrap">${sectionTitle('01','Before You Apply','申请前确认','申请GLC高校分部认证前，请确认符合以下基本条件：')}<div class="conditions-grid">${conditions.map((x,i)=>`<article><span class="condition-index">0${i+1}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('')}</div><p class="section-note">中国内地高校与境外高校均可申请，官网申请表将根据高校所在地显示对应的信息及证明要求。</p></section><section class="section support-section"><div class="page-wrap">${sectionTitle('02','Chapter Support','认证后支持','通过认证的GLC高校分部，可获得全球薄肌俱乐部提供的品牌与运营支持。')}<div class="support-grid">${supports.map(x=>`<article><span class="support-icon">${x[3]}</span><h3>${x[0]}</h3><span class="support-en">${x[1]}</span><p>${x[2]}</p></article>`).join('')}</div><p class="section-note">具体资源支持以实际活动需求、相关审批及适用规定为准。</p></div></section><section class="section page-wrap">${sectionTitle('03','How It Works','认证流程')}<ol class="process-list">${process.map((x,i)=>`<li><span>0${i+1}</span><h3>${x}</h3></li>`).join('')}</ol><p class="section-note">如资料需要补充，秘书处将通过申请人所填联系方式进行沟通；审核未通过的，将告知原因及复核渠道。</p></section><section class="application-section" id="application"><div class="page-wrap"><div class="application-heading"><div class="eyebrow">04</div><h2>全球薄肌俱乐部<br>分部认证申请表</h2></div><div class="application-entry"><a class="button orange" href="https://docs.google.com/forms/d/e/1FAIpQLSeqbcljH0reOSdT-tTYvbCyLfe1m6FFYjMowDiQqnElm0oX_A/viewform" target="_blank" rel="noopener noreferrer">填写申请表 ${arrow}</a></div></div></section>`;
}
function auxiliaryPage(id) {
 const item=auxiliary.find(x=>x[0]===id);
 if(!item)return notFound();
 if(id==='contact')return `<section class="page-heading page-wrap"><div class="eyebrow">Contact</div><h1>联系我们</h1></section><section class="contact-layout page-wrap"><div class="contact-art"><span>GLC</span><b aria-hidden="true">✳</b></div><div class="contact-copy"><p>申请咨询、资料更正或删除：</p><div class="contact-email"><span>联系邮箱：</span><strong>xx</strong><small data-review-only>审核标注：保留Word原文“xx”，正式邮箱待提供。</small></div><p>用户如希望参与，可通过对应高校分部的官方渠道进一步了解。</p>${link('探索全球社群','chapters')}</div></section>`;
 return `<section class="page-heading page-wrap"><div class="eyebrow">${item[2]}</div><h1 class="policy-title">${item[1]}</h1></section><section class="policy-layout page-wrap"><aside data-review-only><span class="document-status"><i></i> 审核占位</span><p>正式文案待提供</p></aside><article class="policy-document"><div class="document-icon" aria-hidden="true">↳</div><h2>${item[1]}</h2><div class="document-placeholder" data-review-only><span>审核标注</span><p>Word文档仅列出了本页面入口，未提供正式正文。此处留空待补，不自行编写。</p></div></article></section>`;
}
function notFound(){return `<section class="empty-state page-wrap"><span class="english-display">404</span><h1>页面不存在</h1>${link('返回首页','home','button dark')}</section>`;}
function currentInfo(){return reviewNotes[route]||{pages:route.startsWith('chapter/')?'Word · 高校分部详情页':'Word · 辅助页面',sections:route.startsWith('chapter/')?['分部首屏','关于分部','近期动态','联系分部']:['页脚辅助入口','内容展示页'],notes:route.startsWith('chapter/')?['分部正式资料、联系渠道与动态未提供，仅留审核占位。']:['FAQ正文未提供，不自行编写；联系邮箱保留Word原文“xx”。','规则、法律和品牌规范的正式全文未提供，不生成虚构制度。']};}
function reviewBar(){
 const name=nav.find(x=>x[0]===route)?.[1]||(route==='certification'?'高校分部认证':route.startsWith('chapter/')?'分部详情':auxiliary.find(x=>x[0]===route)?.[1]||'页面');
 $('#review-bar').innerHTML=`<div><span class="review-live"></span><b>审核预览</b><span class="review-page-name">${name}</span><span class="review-source">${currentInfo().pages}</span></div><div><button data-review="notes">页面说明 <span>↗</span></button><button class="review-directory" data-review="directory">全部页面 <span>☷</span></button></div>`;
}
function openReview(tab='directory') {
 const d=$('#review-dialog');
 d.innerHTML=`<div class="dialog-head"><div><span class="eyebrow">GLC WEBSITE REVIEW</span><h2 id="review-title">官网审核目录</h2></div><button data-close-dialog aria-label="关闭审核目录">×</button></div><div class="review-tabs"><button data-review-tab="directory" class="${tab==='directory'?'active':''}">全部页面</button><button data-review-tab="notes" class="${tab==='notes'?'active':''}">当前页说明</button><button data-review-tab="assets" class="${tab==='assets'?'active':''}">待补素材</button></div><div class="dialog-body">${tab==='directory'?`<p class="muted">逐页查看文案、版式及交互。18 个页面 · 5 个核心页。</p><div class="review-routes">${[...nav,['certification','高校分部认证','Chapter Certification']].map(([r,cn,en],i)=>`<a href="#/${r}" data-close-dialog><span>0${i+1}</span><div><b>${cn}</b><small>${en}</small></div>${arrow}</a>`).join('')}</div><h3 class="review-subtitle">二级页面</h3><div class="review-aux">${chapters.map(c=>`<a href="#/chapter/${c.id}" data-close-dialog>${c.name} <span>详情示例 ↗</span></a>`).join('')}</div><h3 class="review-subtitle">页脚辅助页面</h3><div class="review-aux">${auxiliary.map(([id,title])=>`<a href="#/${id}" data-close-dialog>${title} ${arrow}</a>`).join('')}</div>`:tab==='notes'?`<div class="source-tag">${currentInfo().pages}</div><h3>本页结构</h3><ol class="review-list">${currentInfo().sections.map(x=>`<li>${x}</li>`).join('')}</ol><h3>审核说明</h3><ul class="review-list">${currentInfo().notes.map(x=>`<li>${x}</li>`).join('')}</ul><button class="button dark" data-export-copy>导出当前页文案 ↓</button>`:`<p class="muted">这些内容会影响正式上线。当前均以可辨认的示例或待补状态呈现。</p><ol class="asset-list">${[['品牌','正式Logo、字体、颜色及品牌规范。'],['影像','青年与校园的真实活动照片，约30秒品牌宣传片。'],['分部','4—6个已认证分部的学校名称、城市／国家、介绍和经确认的官方渠道。'],['动态','3—5条真实活动或成员故事，以及日期、所属分部、照片或视频。'],['制度','章程、认证与管理办法、活动物资支持办法、行为准则、隐私政策及使用条款。'],['联系','正式咨询邮箱；源文档目前为“xx”。']].map(([a,b])=>`<li><b>${a}</b><p>${b}</p></li>`).join('')}</ol>`}</div><div class="dialog-foot">以《全球薄肌俱乐部（GLC）官网搭建.docx》为正式文案唯一来源</div>`;
 if(!d.open)d.showModal();
}
function render(){
 route=decodeURIComponent(location.hash.replace(/^#\/?/,''))||'home';
 const renderer={home,about,chapters:community,programs:programsPage,certification};
 $('#main').innerHTML=route.startsWith('chapter/')?chapterPage(route.split('/')[1]):renderer[route]?renderer[route]():auxiliaryPage(route);
 const name=nav.find(x=>x[0]===route)?.[1]||(route==='certification'?'高校分部认证':route.startsWith('chapter/')?'高校分部详情':auxiliary.find(x=>x[0]===route)?.[1]||'页面');
 document.title=`${name}｜GLC 全球薄肌俱乐部 · 审核预览`;
 header();footer();reviewBar();
 window.scrollTo({top:0,behavior:'instant'});
}
function motion(){return matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth';}
function toast(t){$('#toast').textContent=t;$('#toast').classList.add('visible');setTimeout(()=>$('#toast').classList.remove('visible'),3500);}
function mediaDialog(index){
 const d=$('#media-dialog');
 const h=index==='brand'?null:highlights[Number(index)];
 d.innerHTML=`<div class="dialog-head"><div><span class="eyebrow">${h?'Community Highlights':'Global Lean Club'}</span><h2 id="media-title">${h?h.title:'品牌宣传片'}</h2></div><button data-close-dialog aria-label="关闭">×</button></div>${photo(h?.image||'community',h?.title||'品牌片封面示意')}<div class="dialog-body">${h?`<p>${h.affiliation}</p><p>${h.tag}</p>`:''}<div class="sample-banner" data-review-only>${h?'审核标注：标题、所属分部及标签逐字使用Word的原有示例；非已核实活动，完整正式内容待提供。':'审核标注：正式品牌宣传片待提供，当前仅展示封面及入口。'}</div></div>`;
 d.showModal();
}
document.addEventListener('click',e=>{
 const b=e.target.closest('button,a');if(!b)return;
 if(b.matches('[data-scroll]')){e.preventDefault();const target=$('#'+b.dataset.scroll);target?.scrollIntoView({behavior:motion()});if(b.matches('.skip-link'))target?.focus({preventScroll:true});}
 if(b.matches('.menu-button')){const n=$('.mobile-nav');n.hidden=!n.hidden;b.setAttribute('aria-expanded',String(!n.hidden));}
 if(b.dataset.program){const expanded=b.getAttribute('aria-expanded')==='true';if(expanded){$('#program-detail').hidden=true;b.setAttribute('aria-expanded','false');}else programDetail(b.dataset.program);}
 if(b.matches('[data-close-program]')){$('#program-detail').hidden=true;document.querySelectorAll('[data-program]').forEach(x=>x.setAttribute('aria-expanded','false'));}
 if(b.dataset.review)openReview(b.dataset.review);
 if(b.dataset.reviewTab)openReview(b.dataset.reviewTab);
 if(b.matches('[data-close-dialog]'))b.closest('dialog')?.close();
 if(b.dataset.media)mediaDialog('brand');
 if(b.dataset.story!==undefined)mediaDialog(b.dataset.story);
 if(b.matches('[data-export-copy]')){const copy=$('#main').cloneNode(true);copy.querySelectorAll('input,textarea,select,.application-summary,.file-chip').forEach(x=>x.remove());copy.querySelectorAll('h1,h2,h3,h4,p,label,button,li').forEach(x=>x.append('\n'));const blob=new Blob([document.title+'\n\n'+copy.textContent],{type:'text/plain;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`GLC-${route.replaceAll('/','-')}-审核文案.txt`;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);toast('当前页文案已导出');}
 if(b.closest('#media-dialog')&&b.tagName==='A')$('#media-dialog').close();
});
window.addEventListener('hashchange',()=>{document.querySelectorAll('dialog[open]').forEach(d=>d.close());render();});
document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}}));
render();
