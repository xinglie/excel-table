let t={class:"t-h"},e={checked:"checked"},l={value:"value"};import s from"../lib/magix.js";import o from"./select.js";import n from"./dragdrop.js";s.applyStyle("t-_",".t-_{border-collapse:collapse;border:1px solid #000;border-spacing:0;table-layout:fixed}.t-a{border:1px solid #000;overflow:hidden;text-overflow:ellipsis}.t-b{background-color:#ccc}.t-c{background-color:#eee}.t-d{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.t-e{position:absolute;border:1px dashed #fa742b;display:none;pointer-events:none}.t-f{background-color:bisque}.t-g{margin-top:20px}.t-h{margin-left:20px}.t-i{width:100%}.t-j{height:200px}.t-k{margin-top:20px}");let i={thead:{},tbody:{},tfoot:{}},a=[];for(let t=0;t<15;t++){let e=[];for(let l=0;l<10;l++){let s={width:120,height:25,content:`tbody_${t}_${l}`};e.push(s)}a.push({cells:e})}i.tbody.rows=a;let h=[];for(let t=0;t<4;t++){let e=[];for(let l=0;l<10;l++){let s={width:120,height:25,content:`thead_${t}_${l}`};e.push(s)}h.push({cells:e})}i.thead.rows=h;let r=[];for(let t=0;t<2;t++){let e=[];for(let l=0;l<10;l++){let s={width:120,height:25,content:`tfoot_${t}_${l}`};e.push(s)}r.push({cells:e})}i.tfoot.rows=r;let c=(t,e)=>{let l=t._i/2,s=t._j/2,o=e._i/2,n=e._j/2,i=t._k+l,a=t._l+s,h=e._k+o,r=e._l+n;return Math.abs(h-i)<=l+o&&Math.abs(r-a)<=s+n},p=t=>{let e=["thead","tbody","tfoot"],l=0;for(let s of e){let e=t[s],o=0,n=0,i={},a={},h=0,r=0;for(let t of e.rows){n=0;for(let e of t.cells){for(;i[n]&&a[n]&&o<a[n];)n+=i[n];e._m=o,e._n=n,e.rowspan?(a[n]=e.rowspan+o,e._o=o+e.rowspan-1):e._o=o,e.colspan&&(i[n]=e.colspan,n+=e.colspan-1),e._p=n++,n>h&&(h=n),e._q={_k:e._n,_l:e._m,_i:e._p-e._n,_j:e._o-e._m}}++o>r&&(r=o)}e._r=h,e._s=r,l<h&&(l=h)}return t.width=120*l,t},_=t=>{let e={width:t.width,thead:{rows:[]},tbody:{rows:[]},tfoot:{rows:[]}},l=["thead","tbody","tfoot"];for(let s of l){let l=t[s],o=l.rows;for(let t=0;t<o.length;t++){let n=o[t];if(n.cells.length){let t={cells:[]},o=l._s;for(let e of n.cells){let l={content:e.content,width:e.width,height:e.height};e.rowspan>1&&(l.rowspan=e.rowspan),l.rowspan?l.rowspan<o&&(o=l.rowspan):o=1,e.colspan>1&&(l.colspan=e.colspan),t.cells.push(l)}if((o-=1)>0)for(let e of t.cells)e.rowspan-=o;e[s].rows.push(t)}}}let{thead:s,tbody:o,tfoot:n}=t,i=o.rows[0],a=s.rows[0],h=n.rows[0];for(let t=0;t<i.cells.length;t++){let l=i.cells[t],r=1,c=-1,p=1,_=-1,d=1,f=-1;if(l.rowspan==o._s&&l.colspan>1&&(r=l.colspan,c=l._n),r>1){for(let t=0;t<a.cells.length;t++){let e=a.cells[t];if(e._n==c){if(e.rowspan==s._s&&e.colspan>1){_=t,p=e.colspan;break}}else if(e._n>c)break}for(let t=0;t<h.cells.length;t++){let e=h.cells[t];if(e._n==c){if(e.rowspan==n._s&&e.colspan>1){f=t,d=e.colspan;break}}else if(e._n>c)break}if(p>1&&d>1){let l=Math.min(r,p,d)-1,{thead:s,tbody:o,tfoot:n}=e,i=s.rows[0],a=o.rows[0],h=n.rows[0],c=a.cells[t];c.colspan-=l,(c=i.cells[_]).colspan-=l,(c=h.cells[f]).colspan-=l}}}return e};export default s.View.extend({tmpl:(s,o,n,i)=>{let a,h,r,c,p,_,d,f,g,u=[],{table:w,selected:b,cells:m,singleCell:x,rect:k,showFinaleData:y,showFinaleTable:$,getFinaleData:M,stringify:j}=s;h=[];let v=w.thead,C=w.tbody,F=w.tfoot;if(v){c=[];for(let t=v.rows,e=t.length,l=0;l<e;l+=1){_=[];for(let e=t[l].cells,s=e.length,n=0;n<s;n+=1){let t=e[n];f="t-a t-b",b&&b[`thead_${l}_${n}`]&&(f+=" t-f"),d=[o("th",{"data-position":'["thead",'+i(l)+","+i(n)+"]",rowspan:null!=(a=t.rowspan)&&a,colspan:null!=(a=t.colspan)&&a,style:"width:"+i(t.width)+"px;height:"+i(t.height)+"px",class:f})],_.push(...d)}p=[o("tr",0,_)],c.push(...p)}r=[o("thead",0,c)],h.push(...r)}r=[];for(let t=C.rows,e=t.length,l=0;l<e;l+=1){p=[];for(let e=t[l].cells,s=e.length,n=0;n<s;n+=1){let t=e[n];f="t-a",b&&b[`tbody_${l}_${n}`]&&(f+=" t-f"),_=[o("td",{"data-position":'["tbody",'+i(l)+","+i(n)+"]",rowspan:null!=(a=t.rowspan)&&a,colspan:null!=(a=t.colspan)&&a,style:"width:"+i(t.width)+"px;height:"+i(t.height)+"px",class:f})],p.push(..._)}c=[o("tr",0,p)],r.push(...c)}if(h.push(o("tbody",0,r)),F){c=[];for(let t=F.rows,e=t.length,l=0;l<e;l+=1){_=[];for(let e=t[l].cells,s=e.length,n=0;n<s;n+=1){let t=e[n];f="t-a t-c",b&&b[`tfoot_${l}_${n}`]&&(f+=" t-f"),d=[o("th",{"data-position":'["tfoot",'+i(l)+","+i(n)+"]",rowspan:null!=(a=t.rowspan)&&a,colspan:null!=(a=t.colspan)&&a,style:"width:"+i(t.width)+"px;height:"+i(t.height)+"px",class:f})],_.push(...d)}p=[o("tr",0,_)],c.push(...p)}r=[o("tfoot",0,c)],h.push(...r)}u.push(o("table",{class:"t-_ t-d","mx5-mousedown":n+"\x1e_D()",id:"table_"+n,"mx5-contextmenu":n+"\x1e_L()",style:"width:"+i(w.width)+"px"},h)),r=[o(0,0,"\u5408\u5e76\u5355\u5143\u683c")],h=[o("button",{disabled:!m||m.length<2,"mx5-click":n+"\x1e_E()"},r)],r=[o(0,0,"\u62c6\u5206\u5355\u5143\u683c")],h.push(o("button",{class:"t-h",disabled:!(x&&(x.rowspan>1||x.colspan>1)),"mx5-click":n+"\x1e_F()"},r)),r=[o(0,0,"\u524d\u9762\u63d2\u5165\u5217")],h.push(o("button",{class:"t-h",disabled:!k,"mx5-click":n+"\x1e_H({action:'before'})"},r)),r=[o(0,0,"\u540e\u9762\u63d2\u5165\u5217")],h.push(o("button",{class:"t-h",disabled:!k,"mx5-click":n+"\x1e_H({action:'after'})"},r)),r=[o(0,0,"\u4e0a\u9762\u63d2\u5165\u884c")],h.push(o("button",{class:"t-h",disabled:!k,"mx5-click":n+"\x1e_G({action:'before'})"},r)),r=[o(0,0,"\u4e0b\u9762\u63d2\u5165\u884c")],h.push(o("button",{class:"t-h",disabled:!k,"mx5-click":n+"\x1e_G({action:'after'})"},r)),r=[o(0,0,"\u5220\u9664\u6240\u5728\u884c")],h.push(o("button",{class:"t-h",disabled:!k,"mx5-click":n+"\x1e_J()"},r)),r=[o(0,0,"\u5220\u9664\u6240\u5728\u5217")],h.push(o("button",{class:"t-h",disabled:!k,"mx5-click":n+"\x1e_I()"},r)),r=[o("input",{type:"checkbox",checked:y,"mx5-change":n+"\x1e_K({key:'showFinaleData'})"},0,e,1),o(0,0,"\u663e\u793a\u6700\u7ec8\u6570\u636e")],h.push(o("label",t,r)),r=[o("input",{type:"checkbox",checked:$,"mx5-change":n+"\x1e_K({key:'showFinaleTable'})"},0,e,1),o(0,0,"\u663e\u793a\u6700\u7ec8\u8868\u683c")],h.push(o("label",t,r)),u.push(o("div",{class:"t-d t-g",id:"op_"+n},h));let D=y||$?M(w):null;if(y&&(h=[o("textarea",{class:"t-i t-j t-k",value:i(j(D))},0,l)],u.push(...h)),$){r=[];let t=D.thead,e=D.tbody,l=D.tfoot;if(t){p=[];for(let e=t.rows,l=e.length,s=0;s<l;s+=1){d=[];for(let t=e[s].cells,l=t.length,n=0;n<l;n+=1){let e=t[n];g=[o("th",{class:"t-a t-b",rowspan:null!=(a=e.rowspan)&&a,colspan:null!=(a=e.colspan)&&a,style:"width:"+i(e.width)+"px;height:"+i(e.height)+"px"})],d.push(...g)}_=[o("tr",0,d)],p.push(..._)}c=[o("thead",0,p)],r.push(...c)}c=[];for(let t=e.rows,l=t.length,s=0;s<l;s+=1){_=[];for(let e=t[s].cells,l=e.length,n=0;n<l;n+=1){let t=e[n];d=[o("td",{class:"t-a",rowspan:null!=(a=t.rowspan)&&a,colspan:null!=(a=t.colspan)&&a,style:"width:"+i(t.width)+"px;height:"+i(t.height)+"px"})],_.push(...d)}p=[o("tr",0,_)],c.push(...p)}if(r.push(o("tbody",0,c)),l){p=[];for(let t=l.rows,e=t.length,s=0;s<e;s+=1){d=[];for(let e=t[s].cells,l=e.length,n=0;n<l;n+=1){let t=e[n];g=[o("th",{class:"t-a t-c",rowspan:null!=(a=t.rowspan)&&a,colspan:null!=(a=t.colspan)&&a,style:"width:"+i(t.width)+"px;height:"+i(t.height)+"px"})],d.push(...g)}_=[o("tr",0,d)],p.push(..._)}c=[o("tfoot",0,p)],r.push(...c)}h=[o("table",{class:"t-_ t-d t-k","mx5-contextmenu":n+"\x1e_L()",style:"width:"+i(D.width)+"px"},r)],u.push(...h)}return o(n,0,u)},init(){p(i),this.set({showFinaleData:!1,showFinaleTable:!1,table:i,getFinaleData:_,stringify:t=>JSON.stringify(t,null,2)})},render(){this.digest()},"_D<mousedown>"(t){o._z();let e=t.target.dataset.position;if(e){let l=JSON.parse(e);this._A=e;let s=this.get("table"),n=s[l[0]].rows[l[1]].cells[l[2]];this.digest({cells:null,singleCell:n,rectPosition:l[0],rect:[n._m,n._n,n._o,n._p],singleCellInfo:l,selected:{[`${l[0]}_${l[1]}_${l[2]}`]:1}}),this._d(t,e=>{let i=Math.abs(t.pageX-e.pageX),a=Math.abs(t.pageY-e.pageY),h=Math.min(t.pageX,e.pageX),r=Math.min(t.pageY,e.pageY);o._B(h,r,i,a);let p=e.target.dataset;if(p){let t=p.position;if(t&&t!=this._A){this._A=t;let e=JSON.parse(t);if(l[0]==e[0]){let t={},{_u:o,_t:i,_v:a,_w:h,_x:r,_y:p}=((t,e,l)=>{let s=t[e[0]],o=s.rows[e[1]].cells[e[2]],n=s.rows[l[1]].cells[l[2]],i=Math.min(o._m,n._m),a=Math.min(o._n,n._n),h=Math.max(o._o,n._o),r=Math.max(o._p,n._p),p=r-a,_=h-i,d={_k:a,_l:i,_i:p,_j:_},f=[a,i,p,_].join("_");for(;;){let t=s._s+1,e=s._r+1,l=0,o=0;for(let n of s.rows)for(let s of n.cells)c(d,s._q)&&(t>s._m&&(t=s._m),e>s._n&&(e=s._n),l<s._o&&(l=s._o),o<s._p&&(o=s._p));let n=o-e,p=l-t;d={_k:e,_l:t,_i:n,_j:p};let _=[e,t,n,p].join("_");if(f==_){i=t,a=e,h=l,r=o;break}f=_}let g=[],u=0,w=0;for(let t of s.rows){w=0;for(let l of t.cells)c(d,l._q)&&g.push([e[0],u,w]),w++;u++}return{_t:e[0],_u:g,_v:i,_w:a,_x:h,_y:r}})(s,l,e);for(let e of o)t[`${e[0]}_${e[1]}_${e[2]}`]=1;this.digest({rectPosition:i,rect:[a,h,r,p],singleCell:o.length>1?null:n,cells:o,selected:t})}}}},()=>{o._C()})}},"_E<click>"(){let t=this.get("cells"),e=this.get("table");e=((t,e)=>{let l=e[0],s=t[l[0]],o=0,n=0,i=-1,a=-1;for(let t of e){let e=s.rows[t[1]].cells[t[2]],l=e._o;l>i&&(i=l);let o=e._p;o>a&&(a=o)}let h=s.rows[l[1]].cells[l[2]];n=i-h._m+1,o=a-h._n+1,h.width=120*o,h.height=25*n,h.colspan=o,h.rowspan=n;for(let t=e.length-1;t>0;t--){let l=e[t];s.rows[l[1]].cells.splice(l[2],1)}return t})(e,t),p(e),this.digest({rect:null,selected:null,cells:null,singleCell:null,table:e})},"_F<click>"(){let t=this.get("singleCellInfo"),e=this.get("table");e=((t,e)=>{let l=t[e[0]],s=l.rows[e[1]],o=s.cells[e[2]],{rowspan:n,colspan:i}=o;for(let t=1;t<i;t++)s.cells.splice(e[2]+1,0,{width:120,height:25,content:"split_cell_"+e[1]+"_"+t});let a=e[1]+1,h=a+n-2;for(let t=a;t<=h;t++){let s=l.rows[t],o=s.cells.length;for(let t=0;t<s.cells.length;t++)if(s.cells[t]._n>e[2]){o=t;break}for(let e=0;e<i;e++)s.cells.splice(o,0,{width:120,height:25,content:"split_cell_"+t+"_"+e})}return o.colspan=1,o.rowspan=1,o.width/=i,o.height/=n,t})(e,t),p(e),this.digest({rect:null,selected:null,cells:null,singleCell:null,table:e})},"_G<click>"(t){let{action:e}=t.params,l=this.get("rect"),s=this.get("rectPosition"),o=this.get("table");o=((t,e,l)=>{let s=t[e],o=0;for(let t=0;t<l;t++){let e=s.rows[t];for(let t of e.cells)t._o>=l&&(t.rowspan++,t.height+=25,o+=t.colspan)}let n={cells:[]},i=s._r-o;for(let t=0;t<i;t++)n.cells.push({width:120,height:25,content:"insert_"+l+"_"+t});return s.rows.splice(l,0,n),t})(o,s,"before"==e?l[0]:l[2]+1),p(o),this.digest({rect:null,cells:null,selected:{},table:o})},"_H<click>"(t){let{action:e}=t.params,l=this.get("rect"),s=(this.get("rectPosition"),this.get("table"));s=((t,e,l)=>{let s=["thead","tbody","tfoot"];for(let e of s){let s=t[e],o=[],n=0;for(let t of s.rows){let e=t.cells.length,s=e;for(let n=0;n<e;n++){let e=t.cells[n];if(e.rowspan>1&&o.push(e),e._n<l&&e._p>=l){e.colspan++,e.width+=120,s=-1;break}if(e._n>=l){s=n;break}}for(let t of o)if(t._n<l&&t._p>=l&&t._m<n&&t._o>=n){s=-1;break}-1!=s&&t.cells.splice(s,0,{content:"insert_"+s,width:120,height:25}),n++}}return t})(s,0,"before"==e?l[1]:l[3]+1),p(s),this.digest({rect:null,cells:null,selected:{},table:s})},"_I<click>"(t){let e=this.get("rect"),l=(this.get("rectPosition"),this.get("table"));l=((t,e,l)=>{let s=["thead","tbody","tfoot"],o=(l[1]-l[0]+1)/2;for(let e of s){let s=t[e];for(let t of s.rows)for(let e=t.cells.length;e--;){let s=t.cells[e],n=s._n,i=s._p;if(n>=l[0]&&i<=l[1])t.cells.splice(e,1);else if(s.colspan>1){let t=(i-n+1)/2;if(Math.abs(l[0]+o-n-t)<o+t){let t=Math.min(i,l[1])-Math.max(l[0],n)+1;s.colspan-=t,s.width-=120*t}}}}return t})(l,0,[e[1],e[3]]),p(l),this.digest({rect:null,cells:null,selected:{},table:l})},"_J<click>"(t){let e=this.get("rect"),l=this.get("rectPosition"),s=this.get("table");s=((t,e,l)=>{let s=t[e],o={},n=0,i=s.rows[l[1]+1],a=(l[1]-l[0]+1)/2;for(let t=l[1];t>=0;t--){let e=s.rows[t];for(let t=e.cells.length;t--;){let s=e.cells[t],i=s._n,h=s._o,r=s._m,c=h-r+1;if(c>1){let t=c/2;if(Math.abs(l[0]+a-r-t)<a+t){l[0]<=s._m&&s._o-s._m>c&&(o[i]=s,n=1);let t=Math.min(h,l[1])-Math.max(l[0],r)+1;s.rowspan-=t,s.height-=25*t}}}t<=l[1]&&t>=l[0]&&s.rows.splice(t,1)}if(n){let t=s._r;if(i)for(let e=t,l=i.cells.length;e--;){let t=o[e];if(t){let s=0;for(let t=l;t--;)if(i.cells[t]._n<e){l=t,s=t+1;break}i.cells.splice(s,0,t)}}}return t})(s,l,[e[0],e[2]]),p(s),this.digest({rect:null,cells:null,selected:{},table:s})},"_K<change>"(t){let{checked:e}=t.eventTarget,{key:l}=t.params;this.digest({[l]:e})},"$doc<mousedown>"(t){let e=this.get("cells"),l=this.get("singleCell");(e&&0!=e.length||l)&&(s.inside(t.target,s.node(`table_${this.id}`))||s.inside(t.target,s.node(`op_${this.id}`))||this.digest({cells:[],rect:null,singleCell:null,selected:{}}))},"_L<contextmenu>"(t){t.preventDefault()}}).merge(n);