import{p as $,d as N,s as M}from"./styles-aefe6593.6334d26a.js";import{O as p,I as c,N as w,a1 as R,Y as B,X as D,U as E,V as G,R as _}from"./state.a54e343b.js";import{G as z}from"./layout.9af55389.js";import{r as P}from"./index-a92ac404.6ff990de.js";const S=s=>_.sanitizeText(s,c());let k={dividerMargin:10,padding:5,textHeight:10,curve:void 0};const V=function(s,t,y,a){const e=Object.keys(s);p.info("keys:",e),p.info(s),e.forEach(function(i){var o,r;const l=s[i],d={shape:"rect",id:l.id,domId:l.domId,labelText:S(l.id),labelStyle:"",style:"fill: none; stroke: black",padding:((o=c().flowchart)==null?void 0:o.padding)??((r=c().class)==null?void 0:r.padding)};t.setNode(l.id,d),A(l.classes,t,y,a,l.id),p.info("setNode",d)})},A=function(s,t,y,a,e){const i=Object.keys(s);p.info("keys:",i),p.info(s),i.forEach(function(o){var r,l;const n=s[o];let d="";n.cssClasses.length>0&&(d=d+" "+n.cssClasses.join(" "));const f={labelStyle:"",style:""},v=n.label??n.id,b=0,h="class_box",u={labelStyle:f.labelStyle,shape:h,labelText:S(v),classData:n,rx:b,ry:b,class:d,style:f.style,id:n.id,domId:n.domId,tooltip:a.db.getTooltip(n.id,e)||"",haveCallback:n.haveCallback,link:n.link,width:n.type==="group"?500:void 0,type:n.type,padding:((r=c().flowchart)==null?void 0:r.padding)??((l=c().class)==null?void 0:l.padding)};t.setNode(n.id,u),e&&t.setParent(n.id,e),p.info("setNode",u)})},q=function(s,t,y,a){p.info(s),s.forEach(function(e,i){var o,r;const l=e,n="",d={labelStyle:"",style:""},f=l.text,v=0,b="note",h={labelStyle:d.labelStyle,shape:b,labelText:S(f),noteData:l,rx:v,ry:v,class:n,style:d.style,id:l.id,domId:l.id,tooltip:"",type:"note",padding:((o=c().flowchart)==null?void 0:o.padding)??((r=c().class)==null?void 0:r.padding)};if(t.setNode(l.id,h),p.info("setNode",h),!l.class||!(l.class in a))return;const u=y+i,g={id:`edgeNote${u}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:D(k.curve,E)};t.setEdge(l.id,l.class,g,u)})},F=function(s,t){const y=c().flowchart;let a=0;s.forEach(function(e){var i;a++;const o={classes:"relation",pattern:e.relation.lineType==1?"dashed":"solid",id:"id"+a,arrowhead:e.type==="arrow_open"?"none":"normal",startLabelRight:e.relationTitle1==="none"?"":e.relationTitle1,endLabelLeft:e.relationTitle2==="none"?"":e.relationTitle2,arrowTypeStart:C(e.relation.type1),arrowTypeEnd:C(e.relation.type2),style:"fill:none",labelStyle:"",curve:D(y==null?void 0:y.curve,E)};if(p.info(o,e),e.style!==void 0){const r=G(e.style);o.style=r.style,o.labelStyle=r.labelStyle}e.text=e.title,e.text===void 0?e.style!==void 0&&(o.arrowheadStyle="fill: #333"):(o.arrowheadStyle="fill: #333",o.labelpos="c",((i=c().flowchart)==null?void 0:i.htmlLabels)??c().htmlLabels?(o.labelType="html",o.label='<span class="edgeLabel">'+e.text+"</span>"):(o.labelType="text",o.label=e.text.replace(_.lineBreakRegex,`
`),e.style===void 0&&(o.style=o.style||"stroke: #333; stroke-width: 1.5px;fill:none"),o.labelStyle=o.labelStyle.replace("color:","fill:"))),t.setEdge(e.id1,e.id2,o,a)})},H=function(s){k={...k,...s}},U=async function(s,t,y,a){p.info("Drawing class - ",t);const e=c().flowchart??c().class,i=c().securityLevel;p.info("config:",e);const o=(e==null?void 0:e.nodeSpacing)??50,r=(e==null?void 0:e.rankSpacing)??50,l=new z({multigraph:!0,compound:!0}).setGraph({rankdir:a.db.getDirection(),nodesep:o,ranksep:r,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),n=a.db.getNamespaces(),d=a.db.getClasses(),f=a.db.getRelations(),v=a.db.getNotes();p.info(f),V(n,l,t,a),A(d,l,t,a),F(f,l),q(v,l,f.length+1,d);let b;i==="sandbox"&&(b=w("#i"+t));const h=i==="sandbox"?w(b.nodes()[0].contentDocument.body):w("body"),u=h.select(`[id="${t}"]`),g=h.select("#"+t+" g");if(await P(g,l,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",t),R.insertTitle(u,"classTitleText",(e==null?void 0:e.titleTopMargin)??5,a.db.getDiagramTitle()),B(l,u,e==null?void 0:e.diagramPadding,e==null?void 0:e.useMaxWidth),!(e!=null&&e.htmlLabels)){const T=i==="sandbox"?b.nodes()[0].contentDocument:document,I=T.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const x of I){const L=x.getBBox(),m=T.createElementNS("http://www.w3.org/2000/svg","rect");m.setAttribute("rx",0),m.setAttribute("ry",0),m.setAttribute("width",L.width),m.setAttribute("height",L.height),x.insertBefore(m,x.firstChild)}}};function C(s){let t;switch(s){case 0:t="aggregation";break;case 1:t="extension";break;case 2:t="composition";break;case 3:t="dependency";break;case 4:t="lollipop";break;default:t="none"}return t}const W={setConf:H,draw:U},Q={parser:$,db:N,renderer:W,styles:M,init:s=>{s.class||(s.class={}),s.class.arrowMarkerAbsolute=s.arrowMarkerAbsolute,N.clear()}};export{Q as diagram};
