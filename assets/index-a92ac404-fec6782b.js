import{b as k,a as v,m as D,G,l as j}from"./layout-51883e3d.js";import{i as A,u as M,s as _,a as H,b as V,p as B,c as q,d as U,e as W,f as Y,g as O,h as X}from"./edges-49ac43a2-f87fe0fa.js";import{l as i,q as N,c as E,h as L}from"./mermaid.core-7f574508.js";import{c as z}from"./createText-3df630b5-9658851b.js";var K=4;function Q(e){return k(e,K)}function y(e){var t={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:Z(e),edges:I(e)};return v(e.graph())||(t.value=Q(e.graph())),t}function Z(e){return D(e.nodes(),function(t){var n=e.node(t),r=e.parent(t),s={v:t};return v(n)||(s.value=n),v(r)||(s.parent=r),s})}function I(e){return D(e.edges(),function(t){var n=e.edge(t),r={v:t.v,w:t.w};return v(t.name)||(r.name=t.name),v(n)||(r.value=n),r})}let f={},x={},T={};const tt=()=>{x={},T={},f={}},S=(e,t)=>(i.trace("In isDecendant",t," ",e," = ",x[t].includes(e)),!!x[t].includes(e)),et=(e,t)=>(i.info("Decendants of ",t," is ",x[t]),i.info("Edge is ",e),e.v===t||e.w===t?!1:x[t]?x[t].includes(e.v)||S(e.v,t)||S(e.w,t)||x[t].includes(e.w):(i.debug("Tilt, ",t,",not in decendants"),!1)),J=(e,t,n,r)=>{i.warn("Copying children of ",e,"root",r,"data",t.node(e),r);const s=t.children(e)||[];e!==r&&s.push(e),i.warn("Copying (nodes) clusterId",e,"nodes",s),s.forEach(a=>{if(t.children(a).length>0)J(a,t,n,r);else{const h=t.node(a);i.info("cp ",a," to ",r," with parent ",e),n.setNode(a,h),r!==t.parent(a)&&(i.warn("Setting parent",a,t.parent(a)),n.setParent(a,t.parent(a))),e!==r&&a!==e?(i.debug("Setting parent",a,e),n.setParent(a,e)):(i.info("In copy ",e,"root",r,"data",t.node(e),r),i.debug("Not Setting parent for node=",a,"cluster!==rootId",e!==r,"node!==clusterId",a!==e));const l=t.edges(a);i.debug("Copying Edges",l),l.forEach(d=>{i.info("Edge",d);const w=t.edge(d.v,d.w,d.name);i.info("Edge data",w,r);try{et(d,r)?(i.info("Copying as ",d.v,d.w,w,d.name),n.setEdge(d.v,d.w,w,d.name),i.info("newGraph edges ",n.edges(),n.edge(n.edges()[0]))):i.info("Skipping copy of edge ",d.v,"-->",d.w," rootId: ",r," clusterId:",e)}catch(g){i.error(g)}})}i.debug("Removing node",a),t.removeNode(a)})},p=(e,t)=>{const n=t.children(e);let r=[...n];for(const s of n)T[s]=e,r=[...r,...p(s,t)];return r},m=(e,t)=>{i.trace("Searching",e);const n=t.children(e);if(i.trace("Searching children of id ",e,n),n.length<1)return i.trace("This is a valid node",e),e;for(const r of n){const s=m(r,t);if(s)return i.trace("Found replacement for",e," => ",s),s}},b=e=>!f[e]||!f[e].externalConnections?e:f[e]?f[e].id:e,nt=(e,t)=>{if(!e||t>10){i.debug("Opting out, no graph ");return}else i.debug("Opting in, graph ");e.nodes().forEach(function(n){e.children(n).length>0&&(i.warn("Cluster identified",n," Replacement id in edges: ",m(n,e)),x[n]=p(n,e),f[n]={id:m(n,e),clusterData:e.node(n)})}),e.nodes().forEach(function(n){const r=e.children(n),s=e.edges();r.length>0?(i.debug("Cluster identified",n,x),s.forEach(a=>{if(a.v!==n&&a.w!==n){const h=S(a.v,n),l=S(a.w,n);h^l&&(i.warn("Edge: ",a," leaves cluster ",n),i.warn("Decendants of XXX ",n,": ",x[n]),f[n].externalConnections=!0)}})):i.debug("Not a cluster ",n,x)}),e.edges().forEach(function(n){const r=e.edge(n);i.warn("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(n)),i.warn("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(e.edge(n)));let s=n.v,a=n.w;if(i.warn("Fix XXX",f,"ids:",n.v,n.w,"Translating: ",f[n.v]," --- ",f[n.w]),f[n.v]&&f[n.w]&&f[n.v]===f[n.w]){i.warn("Fixing and trixing link to self - removing XXX",n.v,n.w,n.name),i.warn("Fixing and trixing - removing XXX",n.v,n.w,n.name),s=b(n.v),a=b(n.w),e.removeEdge(n.v,n.w,n.name);const h=n.w+"---"+n.v;e.setNode(h,{domId:h,id:h,labelStyle:"",labelText:r.label,padding:0,shape:"labelRect",style:""});const l=JSON.parse(JSON.stringify(r)),d=JSON.parse(JSON.stringify(r));l.label="",l.arrowTypeEnd="none",d.label="",l.fromCluster=n.v,d.toCluster=n.v,e.setEdge(s,h,l,n.name+"-cyclic-special"),e.setEdge(h,a,d,n.name+"-cyclic-special")}else(f[n.v]||f[n.w])&&(i.warn("Fixing and trixing - removing XXX",n.v,n.w,n.name),s=b(n.v),a=b(n.w),e.removeEdge(n.v,n.w,n.name),s!==n.v&&(r.fromCluster=n.v),a!==n.w&&(r.toCluster=n.w),i.warn("Fix Replacing with XXX",s,a,n.name),e.setEdge(s,a,r,n.name))}),i.warn("Adjusted Graph",y(e)),R(e,0),i.trace(f)},R=(e,t)=>{if(i.warn("extractor - ",t,y(e),e.children("D")),t>10){i.error("Bailing out");return}let n=e.nodes(),r=!1;for(const s of n){const a=e.children(s);r=r||a.length>0}if(!r){i.debug("Done, no node has children",e.nodes());return}i.debug("Nodes = ",n,t);for(const s of n)if(i.debug("Extracting node",s,f,f[s]&&!f[s].externalConnections,!e.parent(s),e.node(s),e.children("D")," Depth ",t),!f[s])i.debug("Not a cluster",s,t);else if(!f[s].externalConnections&&e.children(s)&&e.children(s).length>0){i.warn("Cluster without external connections, without a parent and with children",s,t);let h=e.graph().rankdir==="TB"?"LR":"TB";f[s]&&f[s].clusterData&&f[s].clusterData.dir&&(h=f[s].clusterData.dir,i.warn("Fixing dir",f[s].clusterData.dir,h));const l=new G({multigraph:!0,compound:!0}).setGraph({rankdir:h,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});i.warn("Old graph before copy",y(e)),J(s,e,l,s),e.setNode(s,{clusterNode:!0,id:s,clusterData:f[s].clusterData,labelText:f[s].labelText,graph:l}),i.warn("New graph after copy node: (",s,")",y(l)),i.debug("Old graph after copy",y(e))}else i.warn("Cluster ** ",s," **not meeting the criteria !externalConnections:",!f[s].externalConnections," no parent: ",!e.parent(s)," children ",e.children(s)&&e.children(s).length>0,e.children("D"),t),i.debug(f);n=e.nodes(),i.warn("New list of nodes",n);for(const s of n){const a=e.node(s);i.warn(" Now next level",s,a),a.clusterNode&&R(a.graph,t+1)}},P=(e,t)=>{if(t.length===0)return[];let n=Object.assign(t);return t.forEach(r=>{const s=e.children(r),a=P(e,s);n=[...n,...a]}),n},it=e=>P(e,e.children()),st=(e,t)=>{i.info("Creating subgraph rect for ",t.id,t);const n=e.insert("g").attr("class","cluster"+(t.class?" "+t.class:"")).attr("id",t.id),r=n.insert("rect",":first-child"),s=N(E().flowchart.htmlLabels),a=n.insert("g").attr("class","cluster-label"),h=t.labelType==="markdown"?z(a,t.labelText,{style:t.labelStyle,useHtmlLabels:s}):a.node().appendChild(O(t.labelText,t.labelStyle,void 0,!0));let l=h.getBBox();if(N(E().flowchart.htmlLabels)){const o=h.children[0],u=L(h);l=o.getBoundingClientRect(),u.attr("width",l.width),u.attr("height",l.height)}const d=0*t.padding,w=d/2,g=t.width<=l.width+d?l.width+d:t.width;t.width<=l.width+d?t.diff=(l.width-t.width)/2-t.padding/2:t.diff=-t.padding/2,i.trace("Data ",t,JSON.stringify(t)),r.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-g/2).attr("y",t.y-t.height/2-w).attr("width",g).attr("height",t.height+d),s?a.attr("transform","translate("+(t.x-l.width/2)+", "+(t.y-t.height/2)+")"):a.attr("transform","translate("+t.x+", "+(t.y-t.height/2)+")");const c=r.node().getBBox();return t.width=c.width,t.height=c.height,t.intersect=function(o){return X(t,o)},n},rt=(e,t)=>{const n=e.insert("g").attr("class","note-cluster").attr("id",t.id),r=n.insert("rect",":first-child"),s=0*t.padding,a=s/2;r.attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-t.width/2-a).attr("y",t.y-t.height/2-a).attr("width",t.width+s).attr("height",t.height+s).attr("fill","none");const h=r.node().getBBox();return t.width=h.width,t.height=h.height,t.intersect=function(l){return X(t,l)},n},at=(e,t)=>{const n=e.insert("g").attr("class",t.classes).attr("id",t.id),r=n.insert("rect",":first-child"),s=n.insert("g").attr("class","cluster-label"),a=n.append("rect"),h=s.node().appendChild(O(t.labelText,t.labelStyle,void 0,!0));let l=h.getBBox();if(N(E().flowchart.htmlLabels)){const o=h.children[0],u=L(h);l=o.getBoundingClientRect(),u.attr("width",l.width),u.attr("height",l.height)}l=h.getBBox();const d=0*t.padding,w=d/2,g=t.width<=l.width+t.padding?l.width+t.padding:t.width;t.width<=l.width+t.padding?t.diff=(l.width+t.padding*0-t.width)/2:t.diff=-t.padding/2,r.attr("class","outer").attr("x",t.x-g/2-w).attr("y",t.y-t.height/2-w).attr("width",g+d).attr("height",t.height+d),a.attr("class","inner").attr("x",t.x-g/2-w).attr("y",t.y-t.height/2-w+l.height-1).attr("width",g+d).attr("height",t.height+d-l.height-3),s.attr("transform","translate("+(t.x-l.width/2)+", "+(t.y-t.height/2-t.padding/3+(N(E().flowchart.htmlLabels)?5:3))+")");const c=r.node().getBBox();return t.height=c.height,t.intersect=function(o){return X(t,o)},n},ct=(e,t)=>{const n=e.insert("g").attr("class",t.classes).attr("id",t.id),r=n.insert("rect",":first-child"),s=0*t.padding,a=s/2;r.attr("class","divider").attr("x",t.x-t.width/2-a).attr("y",t.y-t.height/2).attr("width",t.width+s).attr("height",t.height+s);const h=r.node().getBBox();return t.width=h.width,t.height=h.height,t.diff=-t.padding/2,t.intersect=function(l){return X(t,l)},n},ot={rect:st,roundedWithTitle:at,noteGroup:rt,divider:ct};let F={};const lt=(e,t)=>{i.trace("Inserting cluster");const n=t.shape||"rect";F[t.id]=ot[n](e,t)},ft=()=>{F={}},$=async(e,t,n,r)=>{i.info("Graph in recursive render: XXX",y(t),r);const s=t.graph().rankdir;i.trace("Dir in recursive render - dir:",s);const a=e.insert("g").attr("class","root");t.nodes()?i.info("Recursive render XXX",t.nodes()):i.info("No nodes found for",t),t.edges().length>0&&i.trace("Recursive edges",t.edge(t.edges()[0]));const h=a.insert("g").attr("class","clusters"),l=a.insert("g").attr("class","edgePaths"),d=a.insert("g").attr("class","edgeLabels"),w=a.insert("g").attr("class","nodes");await Promise.all(t.nodes().map(async function(c){const o=t.node(c);if(r!==void 0){const u=JSON.parse(JSON.stringify(r.clusterData));i.info("Setting data for cluster XXX (",c,") ",u,r),t.setNode(r.id,u),t.parent(c)||(i.trace("Setting parent",c,r.id),t.setParent(c,r.id,u))}if(i.info("(Insert) Node XXX"+c+": "+JSON.stringify(t.node(c))),o&&o.clusterNode){i.info("Cluster identified",c,o.width,t.node(c));const u=await $(w,o.graph,n,t.node(c)),C=u.elem;M(o,C),o.diff=u.diff||0,i.info("Node bounds (abc123)",c,o,o.width,o.x,o.y),_(C,o),i.warn("Recursive render complete ",C,o)}else t.children(c).length>0?(i.info("Cluster - the non recursive path XXX",c,o.id,o,t),i.info(m(o.id,t)),f[o.id]={id:m(o.id,t),node:o}):(i.info("Node - the non recursive path",c,o.id,o),await H(w,t.node(c),s))})),t.edges().forEach(function(c){const o=t.edge(c.v,c.w,c.name);i.info("Edge "+c.v+" -> "+c.w+": "+JSON.stringify(c)),i.info("Edge "+c.v+" -> "+c.w+": ",c," ",JSON.stringify(t.edge(c))),i.info("Fix",f,"ids:",c.v,c.w,"Translateing: ",f[c.v],f[c.w]),V(d,o)}),t.edges().forEach(function(c){i.info("Edge "+c.v+" -> "+c.w+": "+JSON.stringify(c))}),i.info("#############################################"),i.info("###                Layout                 ###"),i.info("#############################################"),i.info(t),j(t),i.info("Graph after layout:",y(t));let g=0;return it(t).forEach(function(c){const o=t.node(c);i.info("Position "+c+": "+JSON.stringify(t.node(c))),i.info("Position "+c+": ("+o.x,","+o.y,") width: ",o.width," height: ",o.height),o&&o.clusterNode?B(o):t.children(c).length>0?(lt(h,o),f[o.id].node=o):B(o)}),t.edges().forEach(function(c){const o=t.edge(c);i.info("Edge "+c.v+" -> "+c.w+": "+JSON.stringify(o),o);const u=q(l,c,o,f,n,t);U(o,u)}),t.nodes().forEach(function(c){const o=t.node(c);i.info(c,o.type,o.diff),o.type==="group"&&(g=o.diff)}),{elem:a,diff:g}},gt=async(e,t,n,r,s)=>{A(e,n,r,s),W(),Y(),ft(),tt(),i.warn("Graph at first:",y(t)),nt(t),i.warn("Graph after:",y(t)),await $(e,t,r)};export{gt as r};
