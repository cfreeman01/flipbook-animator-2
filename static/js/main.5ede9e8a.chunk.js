(this["webpackJsonpflipbook-animator-2"]=this["webpackJsonpflipbook-animator-2"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var A=n(1),i=n.n(A),a=n(5),r=n.n(a),c=n(2),o=(n(10),i.a.createContext()),g=(n(11),n(0)),I=function(e){var t=e.gifSrc,n=i.a.useContext(o),A=n.globalState,a=n.setGlobalState;return Object(g.jsx)("div",{id:"gifContainer",onClick:function(){var e=Object.assign({},A);e.gifOpen=!1,a(e)},children:Object(g.jsx)("img",{src:t,onClick:function(e){e.stopPropagation()},style:{display:"table",margin:"auto"}})})},C=(n(13),function(e){var t=e.btnTitle,n=e.imgSrc,A=e.onClick_p,a=e.selected,r=e.size,o=i.a.useState("iconUnselected"),I=Object(c.a)(o,2),C=I[0],l=I[1],u=a?"iconSelected":C;return Object(g.jsx)("img",{alt:t,width:r,height:r,title:t,src:n,className:u,onClick:A,onMouseOver:function(){return l("iconHovered")},onMouseOut:function(){return l("iconUnselected")},onMouseDown:function(){return l("iconSelected")},onMouseUp:function(){return l("iconHovered")}})}),l=n.p+"static/media/pencil.588014e8.png",u=n.p+"static/media/pen.373e6d9c.png",s=n.p+"static/media/eraser.ce11724e.png",B=n.p+"static/media/dropper.f62bf4e2.png",Q=function(){var e=i.a.useContext(o),t=e.globalState,n=e.setGlobalState,A=function(e){var A=Object.assign({},t);A.selectedTool=e,n(A)};return Object(g.jsxs)("div",{id:"toolbarContainer",children:[Object(g.jsx)(C,{btnTitle:"Pencil",imgSrc:l,onClick_p:function(){return A("Pencil")},size:40,selected:"Pencil"===t.selectedTool}),Object(g.jsx)(C,{btnTitle:"Pen",imgSrc:u,onClick_p:function(){return A("Pen")},size:40,selected:"Pen"===t.selectedTool}),Object(g.jsx)(C,{btnTitle:"Eraser",imgSrc:s,onClick_p:function(){return A("Eraser")},size:40,selected:"Eraser"===t.selectedTool}),Object(g.jsx)(C,{btnTitle:"Dropper",imgSrc:B,onClick_p:function(){return A("Dropper")},size:40,selected:"Dropper"===t.selectedTool})]})},d=0,f=0,E=0,p=0,j=0,h=0,v=!1,w=[[]],m=[],b=[],O={ref:null},y=function(e,t){if(!v){var n=w[e][t];if(0!==m.length){b.push(n.imgData);var A=m.pop();n.imgData=A}}},F=function(e,t){if(!v){var n=w[e][t];if(0!==b.length){m.push(n.imgData);var A=b.pop();n.imgData=A}}},x=function(){m.length=0,b.length=0},Y=function(e,t){for(var n,A,i,a,r,c,o,g,I,C,l,u=[],s=0;s<=t;s++)n=(E-d)*e,A=(j-d)*e,i=(p-f)*e,a=(h-f)*e,r=s/16,c=2*Math.pow(r,3)-3*Math.pow(r,2)+1,o=-2*Math.pow(r,3)+3*Math.pow(r,2),g=Math.pow(r,3)-2*Math.pow(r,2)+r,I=Math.pow(r,3)-Math.pow(r,2),C=c*d+o*E+g*n+I*A,l=c*f+o*p+g*i+I*a,u.push(C),u.push(l);return u},S={Pencil:{startPath:function(e,t){var n=t.getContext("2d"),A=t.getBoundingClientRect();m.push(n.getImageData(0,0,t.width,t.height)),b.length=0,v=!0,d=E=e.clientX-A.left,f=p=e.clientY-A.top},draw:function(e,t){var n=t.getBoundingClientRect(),A=t.getContext("2d");if(j=e.clientX-n.left,h=e.clientY-n.top,A.lineCap="round",A.lineJoin="round",!0===v){var i=Y(.5,16);A.beginPath(),A.moveTo(i[0],i[1]);for(var a=2;a<i.length-1;a+=2)A.lineTo(i[a],i[a+1]);A.stroke(),A.closePath(),d=E,f=p,E=j,p=h}},endPath:function(){v=!1}},Pen:{startPath:function(e,t){var n=t.getContext("2d"),A=t.getBoundingClientRect();m.push(n.getImageData(0,0,t.width,t.height)),b.length=0,v=!0,d=E=e.clientX-A.left,f=p=e.clientY-A.top},draw:function(e,t){var n=t.getBoundingClientRect(),A=t.getContext("2d");j=e.clientX-n.left,h=e.clientY-n.top;if(A.lineCap="square",A.lineJoin="square",!0===v){var i=Y(.5,16);A.beginPath(),A.moveTo(i[0]-2,i[1]-1);for(var a=2;a<i.length-1;a+=2)A.lineTo(i[a]-2,i[a+1]-1);A.moveTo(i[0],i[1]);for(var r=2;r<i.length-1;r+=2)A.lineTo(i[r]-1,i[r+1]-1);A.moveTo(i[0]+1,i[1]+1);for(var c=2;c<i.length-1;c+=2)A.lineTo(i[c],i[c+1]);A.moveTo(i[0]+2,i[1]+2);for(var o=2;o<i.length-1;o+=2)A.lineTo(i[o]+2,i[o+1]+2);A.stroke(),A.closePath(),d=E,f=p,E=j,p=h}},endPath:function(){v=!1}},Eraser:{startPath:function(e,t){var n=t.getContext("2d"),A=t.getBoundingClientRect();m.push(n.getImageData(0,0,t.width,t.height)),b.length=0,v=!0,d=E=e.clientX-A.left,f=p=e.clientY-A.top},draw:function(e,t){var n=t.getBoundingClientRect(),A=t.getContext("2d");if(j=e.clientX-n.left,h=e.clientY-n.top,A.lineCap="round",A.lineJoin="round",!0===v){var i=A.strokeStyle;A.strokeStyle="rgba(255,255,255,1)",A.globalCompositeOperation="destination-out";var a=Y(.5,16);A.beginPath(),A.moveTo(a[0],a[1]);for(var r=2;r<a.length-1;r+=2)A.lineTo(a[r],a[r+1]);A.stroke(),A.closePath(),d=E,f=p,E=j,p=h,A.strokeStyle=i,A.globalCompositeOperation="source-over"}},endPath:function(){v=!1}},Dropper:{startPath:function(e,t){for(var n=t.getBoundingClientRect(),A=t.getContext("2d"),i=e.clientX-n.left,a=e.clientY-n.top,r=A.getImageData(i*window.devicePixelRatio,a*window.devicePixelRatio,1,1).data,c=[],o=0;o<3;o++)c[o]=r[o].toString(16),1===c[o].length&&(c[o]="0"+c[o]);return"#"+c[0]+c[1]+c[2]},draw:function(e){},endPath:function(){}}},M=n.p+"static/media/undo.eb7626ba.png",L=n.p+"static/media/redo.b5eb995b.png",P=!1,T=function(){var e=i.a.useContext(o),t=e.globalState,n=e.setGlobalState,A=function(e){if(!0===e.ctrlKey&&(P=!0),"z"===e.key&&1==P){e.preventDefault(),y(t.curFrame,t.curLayer);var A=Object.assign({},t);A.newLayerId++,n(A)}if("y"===e.key&&1==P){e.preventDefault(),F(t.curFrame,t.curLayer);var i=Object.assign({},t);i.newLayerId++,n(i)}},a=function(e){"Control"===e.key&&(P=!1)};return i.a.useEffect((function(){return document.addEventListener("keydown",A),document.addEventListener("keyup",a),function(){document.removeEventListener("keydown",A),document.removeEventListener("keyup",a)}})),Object(g.jsxs)("div",{children:[Object(g.jsx)(C,{btnTitle:"Undo",imgSrc:M,onClick_p:function(e){y(t.curFrame,t.curLayer);var A=Object.assign({},t);A.newLayerId++,n(A)},size:40,selected:!1}),Object(g.jsx)(C,{btnTitle:"Redo",imgSrc:L,onClick_p:function(e){F(t.curFrame,t.curLayer);var A=Object.assign({},t);A.newLayerId++,n(A)},size:40,selected:!1})]})},k=(n(14),n(4)),D=n.n(k),z=n.p+"static/media/black.1fd5be43.png",U=n.p+"static/media/white.f637800e.png",K=n.p+"static/media/red.d9268b17.png",G=n.p+"static/media/lightred.b2e9f841.png",X=n.p+"static/media/orange.7ab39e4f.png",N=n.p+"static/media/yellow.259f7955.png",W=n.p+"static/media/green.71014684.png",R=n.p+"static/media/pink.2a087a8e.png",H=n.p+"static/media/purple.5c807439.png",J=n.p+"static/media/blue.d0223170.png",Z=function(){var e=i.a.useContext(o),t=e.globalState,n=e.setGlobalState,A=function(e){var A=Object.assign({},t);A.selectedColor=e,n(A)};return Object(g.jsxs)("div",{id:"colorSelectorContainer",children:[Object(g.jsx)(C,{btnTitle:"Black",imgSrc:z,onClick_p:function(){A("#000000")},size:32,selected:"#000000"===t.selectedColor}),Object(g.jsx)(C,{btnTitle:"White",imgSrc:U,onClick_p:function(){A("#ffffff")},size:32,selected:"#ffffff"===t.selectedColor}),Object(g.jsx)(C,{btnTitle:"Red",imgSrc:K,onClick_p:function(){A("#ff0000")},size:32,selected:"#ff0000"===t.selectedColor}),Object(g.jsx)(C,{btnTitle:"Light red",imgSrc:G,onClick_p:function(){A("#f85e43")},size:32,selected:"#f85e43"===t.selectedColor}),Object(g.jsx)(C,{btnTitle:"Orange",imgSrc:X,onClick_p:function(){A("#f39127")},size:32,selected:"#f39127"===t.selectedColor}),Object(g.jsx)(C,{btnTitle:"Yellow",imgSrc:N,onClick_p:function(){A("#f3c327")},size:32,selected:"#f3c327"===t.selectedColor}),Object(g.jsx)(C,{btnTitle:"Green",imgSrc:W,onClick_p:function(){A("#34a234")},size:32,selected:"#34a234"===t.selectedColor}),Object(g.jsx)(C,{btnTitle:"Pink",imgSrc:R,onClick_p:function(){A("#f74579")},size:32,selected:"#f74579"===t.selectedColor}),Object(g.jsx)(C,{btnTitle:"Purple",imgSrc:H,onClick_p:function(){A("#8d00cf")},size:32,selected:"#8d00cf"===t.selectedColor}),Object(g.jsx)(C,{btnTitle:"Blue",imgSrc:J,onClick_p:function(){A("#4376f8")},size:32,selected:"#4376f8"===t.selectedColor}),Object(g.jsx)("input",{type:"color",id:"colorPicker",onChange:function(e){A(e.target.value)}})]})},V=(n(16),function(e){var t=e.min,n=e.max,A=e.unit,a=e.initValue,r=e.setValue,c=i.a.useRef(),o=i.a.useRef(),I=function(e){e&&(e<t&&(e=t),e>n&&(e=n),c.current.value=e,o.current.value=e,r(e))};return Object(g.jsxs)("div",{id:"selectorContainer",children:[Object(g.jsx)("input",{type:"number",id:"selectorText",defaultValue:a,ref:c,onChange:function(e){return I(e.target.value)}}),Object(g.jsxs)("p",{children:["  ",A]}),Object(g.jsx)("input",{type:"range",id:"selectorRange",defaultValue:a,ref:o,onChange:function(e){return I(e.target.value)}})]})}),q=(n(17),n.p+"static/media/hide.2a8a0743.png"),_=n.p+"static/media/unhide.e6ff1808.png",$=function(e){var t=e.name,n=e.selected,A=e.hidden,a=e.rename,r=e.select,o=e.hide,I=i.a.useState("layerMenuItemUnselected"),l=Object(c.a)(I,2),u=l[0],s=l[1],B=n?"layerMenuItemSelected":u,Q=A?"Unhide Layer":"Hide Layer",d=A?_:q;return Object(g.jsxs)("div",{className:B,onClick:r,onMouseOver:function(){return s("layerMenuItemHovered")},onMouseOut:function(){return s("layerMenuItemUnselected")},children:[Object(g.jsx)(C,{btnTitle:Q,imgSrc:d,size:28,selected:!1,onClick_p:function(e){e.stopPropagation(),o()}}),Object(g.jsx)("span",{id:"layerName",onDoubleClick:a,children:t})]})},ee=(n(18),"data:image/png;base64,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"),te=n.p+"static/media/X.d73ecd37.png",ne=n.p+"static/media/up.7d9ac618.png",Ae=n.p+"static/media/down.c8a3bbaa.png",ie=n.p+"static/media/copy.01dda647.png",ae=n.p+"static/media/paste.b7884835.png",re="empty",ce=function(){var e=i.a.useContext(o),t=e.globalState,n=e.setGlobalState;i.a.useEffect((function(){w[0].push({id:0,imgData:null,hidden:!1,name:"Layer 0",opacity:100})}),[]);return Object(g.jsxs)("div",{id:"layerMenuContainer",children:[Object(g.jsx)("h2",{children:"Current Layer Opacity"}),Object(g.jsx)(V,{min:0,max:100,unit:"%",initValue:100,setValue:function(e){w[t.curFrame][t.curLayer].opacity=e;var A=Object.assign({},t);A.newLayerId++,n(A)}}),Object(g.jsx)(C,{btnTitle:"Add layer at top",imgSrc:ee,onClick_p:function(){var e=Object.assign({},t);w[t.curFrame].unshift({id:t.newLayerId,imgData:null,hidden:!1,name:"Layer "+t.newLayerId,opacity:100}),e.curLayer++,e.newLayerId++,n(e),x()},size:28,selected:!1}),Object(g.jsx)(C,{btnTitle:"Remove current layer",imgSrc:te,onClick_p:function(){if(1!==w[t.curFrame].length&&window.confirm("Permanently delete this layer?")){var e=Object.assign({},t);w[t.curFrame].splice(t.curLayer,1),t.curLayer===w[t.curFrame].length&&e.curLayer--,e.newLayerId++,n(e),x()}},size:28,selected:!1}),Object(g.jsx)(C,{btnTitle:"Move current layer up",imgSrc:ne,onClick_p:function(){if(0!==t.curLayer){var e=Object.assign({},t),A=w[t.curFrame][t.curLayer];w[t.curFrame][t.curLayer]=w[t.curFrame][t.curLayer-1],w[t.curFrame][t.curLayer-1]=A,e.curLayer--,n(e)}},size:28,selected:!1}),Object(g.jsx)(C,{btnTitle:"Move current layer down",imgSrc:Ae,onClick_p:function(){if(t.curLayer!==w[t.curFrame].length-1){var e=Object.assign({},t),A=w[t.curFrame][t.curLayer];w[t.curFrame][t.curLayer]=w[t.curFrame][t.curLayer+1],w[t.curFrame][t.curLayer+1]=A,e.curLayer++,n(e)}},size:28,selected:!1}),Object(g.jsx)(C,{btnTitle:"Copy current layer",imgSrc:ie,onClick_p:function(){(re=w[t.curFrame][t.curLayer].imgData).data.set(new Uint8ClampedArray(w[t.curFrame][t.curLayer].imgData.data))},size:28,selected:!1}),Object(g.jsx)(C,{btnTitle:"Paste layer",imgSrc:ae,onClick_p:function(){var e=Object.assign({},t);re.data.set(new Uint8ClampedArray(re.data)),w[t.curFrame].unshift({id:t.newLayerId,imgData:re,hidden:!1,name:"Pasted Layer",opacity:100}),e.curLayer++,e.newLayerId++,n(e)},size:28,selected:!1}),w[t.curFrame].map((function(e,A){var i=e.id,a=(e.imgData,e.hidden),r=e.name;return Object(g.jsx)($,{name:r,selected:t.curLayer===A,hidden:a,rename:function(){return function(e){var A=Object.assign({},t),i=prompt("Rename layer:",w[t.curFrame][e].name);""!=i&&null!=i&&(w[t.curFrame][e].name=i),A.newLayerId++,n(A)}(A)},select:function(){return function(e){var A=Object.assign({},t);A.curLayer=e,n(A),x()}(A)},hide:function(){return function(e){var A=Object.assign({},t);w[t.curFrame][e].hidden=!w[t.curFrame][e].hidden,A.newLayerId++,n(A)}(A)}},i)}))]})},oe=(n(19),function(){var e=i.a.useContext(o),t=e.globalState,n=e.setGlobalState;return Object(g.jsxs)("div",{id:"sidebarContainer",style:{left:t.botCanvasRight+window.scrollX>=window.innerWidth-190?t.botCanvasRight+15+window.scrollX:window.innerWidth-190,top:t.botCanvasTop},children:[Object(g.jsx)("h1",{children:"Brush Color"}),Object(g.jsx)(Z,{}),Object(g.jsx)("h1",{children:"Brush Size"}),Object(g.jsx)(V,{min:1,max:100,unit:"px",initValue:1,setValue:function(e){var A=Object.assign({},t);A.selectedSize=e,n(A)}}),Object(g.jsx)("h1",{children:"Last Frame Opacity"}),Object(g.jsx)(V,{min:0,max:100,unit:"%",initValue:20,setValue:function(e){var A=Object.assign({},t);A.botCanvasOpacity=e,n(A)}}),Object(g.jsx)("h1",{children:"Layers"}),Object(g.jsx)(ce,{})]})}),ge=(n(20),n.p+"static/media/left-arrow.80e904ad.png"),Ie=n.p+"static/media/right-arrow.610490a6.png",Ce=function(){var e,t,n,A,i,a,r,c,o,g,I,C,l={},u=-1,s=12,B=5003,Q=s,d=1<<s,f=[],E=[],p=B,j=0,h=!1,v=0,w=0,m=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],b=[],O=l.LZWEncoder=function(i,a,r,c){e=i,t=a,n=r,A=Math.max(2,c)},y=function(e,t){b[C++]=e,C>=254&&S(t)},F=function(e){x(p),j=g+2,h=!0,P(g,e)},x=function(e){for(var t=0;t<e;++t)f[t]=-1},Y=l.compress=function(e,t){var n,A,i,a,l,s,B;for(h=!1,c=M(r=o=e),I=(g=1<<e-1)+1,j=g+2,C=0,a=L(),B=0,n=p;n<65536;n*=2)++B;B=8-B,x(s=p),P(g,t);e:for(;(i=L())!=u;)if(n=(i<<Q)+a,f[A=i<<B^a]!=n){if(f[A]>=0){l=s-A,0===A&&(l=1);do{if((A-=l)<0&&(A+=s),f[A]==n){a=E[A];continue e}}while(f[A]>=0)}P(a,t),a=i,j<d?(E[A]=j++,f[A]=n):F(t)}else a=E[A];P(a,t),P(I,t)},S=(l.encode=function(n){n.writeByte(A),i=e*t,a=0,Y(A+1,n),n.writeByte(0)},function(e){C>0&&(e.writeByte(C),e.writeBytes(b,0,C),C=0)}),M=function(e){return(1<<e)-1},L=function(){return 0===i?u:(--i,255&n[a++])},P=function(e,t){for(v&=m[w],w>0?v|=e<<w:v=e,w+=r;w>=8;)y(255&v,t),v>>=8,w-=8;if((j>c||h)&&(h?(c=M(r=o),h=!1):(++r,c=r==Q?d:M(r))),e==I){for(;w>0;)y(255&v,t),v>>=8,w-=8;S(t)}};return O.apply(this,arguments),l},le=function(){var e,t,n,A,i,a={},r=256,c=499,o=491,g=487,I=503,C=3*I,l=r-1,u=4,s=100,B=16,Q=1<<B,d=10,f=10,E=Q>>f,p=Q<<d-f,j=r>>3,h=6,v=1<<h,w=j*v,m=30,b=10,O=1<<b,y=8,F=1<<y,x=b+y,Y=1<<x,S=[],M=[],L=[],P=[],T=a.NeuQuant=function(e,a,c){var o,g;for(t=e,n=a,A=c,i=new Array(r),o=0;o<r;o++)i[o]=new Array(4),(g=i[o])[0]=g[1]=g[2]=(o<<u+8)/r,L[o]=Q/r,M[o]=0},k=function(){for(var e=[],t=new Array(r),n=0;n<r;n++)t[i[n][3]]=n;for(var A=0,a=0;a<r;a++){var c=t[a];e[A++]=i[c][0],e[A++]=i[c][1],e[A++]=i[c][2]}return e},D=function(){var e,t,n,A,a,c,o,g;for(o=0,g=0,e=0;e<r;e++){for(n=e,A=(a=i[e])[1],t=e+1;t<r;t++)(c=i[t])[1]<A&&(n=t,A=c[1]);if(c=i[n],e!=n&&(t=c[0],c[0]=a[0],a[0]=t,t=c[1],c[1]=a[1],a[1]=t,t=c[2],c[2]=a[2],a[2]=t,t=c[3],c[3]=a[3],a[3]=t),A!=o){for(S[o]=g+e>>1,t=o+1;t<A;t++)S[t]=e;o=A,g=e}}for(S[o]=g+l>>1,t=o+1;t<256;t++)S[t]=l},z=function(){var i,a,r,l,B,Q,d,f,E,p,j,v,b,y;for(n<C&&(A=1),e=30+(A-1)/3,v=t,b=0,y=n,p=(j=n/(3*A))/s|0,f=O,(d=(Q=w)>>h)<=1&&(d=0),i=0;i<d;i++)P[i]=f*((d*d-i*i)*F/(d*d));for(E=n<C?3:n%c!==0?3*c:n%o!==0?3*o:n%g!==0?3*g:3*I,i=0;i<j;)if(r=(255&v[b+0])<<u,l=(255&v[b+1])<<u,B=(255&v[b+2])<<u,a=X(r,l,B),G(f,a,r,l,B),0!==d&&K(d,a,r,l,B),(b+=E)>=y&&(b-=n),0===p&&(p=1),++i%p===0)for(f-=f/e,(d=(Q-=Q/m)>>h)<=1&&(d=0),a=0;a<d;a++)P[a]=f*((d*d-a*a)*F/(d*d))},U=(a.map=function(e,t,n){var A,a,c,o,g,I,C;for(g=1e3,C=-1,a=(A=S[t])-1;A<r||a>=0;)A<r&&((c=(I=i[A])[1]-t)>=g?A=r:(A++,c<0&&(c=-c),(o=I[0]-e)<0&&(o=-o),(c+=o)<g&&((o=I[2]-n)<0&&(o=-o),(c+=o)<g&&(g=c,C=I[3])))),a>=0&&((c=t-(I=i[a])[1])>=g?a=-1:(a--,c<0&&(c=-c),(o=I[0]-e)<0&&(o=-o),(c+=o)<g&&((o=I[2]-n)<0&&(o=-o),(c+=o)<g&&(g=c,C=I[3]))));return C},a.process=function(){return z(),U(),D(),k()},function(){var e;for(e=0;e<r;e++)i[e][0]>>=u,i[e][1]>>=u,i[e][2]>>=u,i[e][3]=e}),K=function(e,t,n,A,a){var c,o,g,I,C,l,u;for((g=t-e)<-1&&(g=-1),(I=t+e)>r&&(I=r),c=t+1,o=t-1,l=1;c<I||o>g;){if(C=P[l++],c<I){u=i[c++];try{u[0]-=C*(u[0]-n)/Y,u[1]-=C*(u[1]-A)/Y,u[2]-=C*(u[2]-a)/Y}catch(s){}}if(o>g){u=i[o--];try{u[0]-=C*(u[0]-n)/Y,u[1]-=C*(u[1]-A)/Y,u[2]-=C*(u[2]-a)/Y}catch(s){}}}},G=function(e,t,n,A,a){var r=i[t];r[0]-=e*(r[0]-n)/O,r[1]-=e*(r[1]-A)/O,r[2]-=e*(r[2]-a)/O},X=function(e,t,n){var A,a,c,o,g,I,C,l,s,Q;for(s=l=~(1<<31),C=I=-1,A=0;A<r;A++)(a=(Q=i[A])[0]-e)<0&&(a=-a),(c=Q[1]-t)<0&&(c=-c),a+=c,(c=Q[2]-n)<0&&(c=-c),(a+=c)<l&&(l=a,I=A),(o=a-(M[A]>>B-u))<s&&(s=o,C=A),g=L[A]>>f,L[A]-=g,M[A]+=g<<d;return L[I]+=E,M[I]-=p,C};return T.apply(this,arguments),a},ue=1,se=function(){var e=i.a.useContext(o),t=e.globalState,n=e.setGlobalState,A=function(e,t){var n=e.getContext("2d"),A=document.createElement("canvas");if(A.width=e.width,A.height=e.height,n.fillStyle="white",n.fillRect(0,0,e.width,e.height),!(t<0))for(var i=w[t].length-1;i>=0;i--){var a=w[t][i];a.imgData&&!a.hidden&&(n.globalAlpha=a.opacity/100,A.getContext("2d").putImageData(w[t][i].imgData,0,0),e.getContext("2d").drawImage(A,0,0))}};return Object(g.jsxs)("div",{id:"bottombarContainer",children:[Object(g.jsxs)("div",{id:"topRow",children:[Object(g.jsx)(C,{btnTitle:"Add frame after current frame",imgSrc:ee,onClick_p:function(){var e=Object.assign({},t);w.splice(t.curFrame+1,0,[{id:t.newLayerId,imgData:null,hidden:!1,name:"Layer "+t.newLayerId,opacity:100}]),e.curFrame++,e.newLayerId++,e.curLayer=0,x(),A(O.ref.current,t.curFrame),n(e)},size:40,selected:!1}),Object(g.jsxs)("span",{id:"chooseFrame",children:[Object(g.jsx)(C,{btnTitle:"Last Frame",imgSrc:ge,onClick_p:function(){if(0!==t.curFrame){var e=Object.assign({},t);e.curFrame--,e.curLayer=0,x(),A(O.ref.current,t.curFrame-2),n(e)}},size:40,selected:!1}),Object(g.jsxs)("span",{id:"frameNum",children:["frame ",t.curFrame+1,"/",w.length]}),Object(g.jsx)(C,{btnTitle:"Next Frame",imgSrc:Ie,onClick_p:function(){if(t.curFrame!==w.length-1){var e=Object.assign({},t);e.curFrame++,e.curLayer=0,x(),A(O.ref.current,t.curFrame),n(e)}},size:40,selected:!1})]}),Object(g.jsx)(C,{btnTitle:"Remove current frame",imgSrc:te,onClick_p:function(){if(1!==w.length&&window.confirm("Permanently delete this frame?")){var e=Object.assign({},t);w.splice(t.curFrame,1),t.curFrame===w.length?(e.curFrame--,A(O.ref.current,t.curFrame-2)):A(O.ref.current,t.curFrame-1),e.newLayerId++,e.curLayer=0,n(e),x()}},size:40,selected:!1})]}),Object(g.jsx)("label",{children:"Frames per second:"}),Object(g.jsx)("input",{type:"number",id:"fps",name:"fps",defaultValue:ue,min:1,onChange:function(e){ue=e.target.value}}),Object(g.jsx)("button",{onClick:function(){var e=function(){for(var e=0,t={};e<256;e++)t[e]=String.fromCharCode(e);function n(){this.bin=[]}n.prototype.getData=function(){for(var e="",n=this.bin.length,A=0;A<n;A++)e+=t[this.bin[A]];return e},n.prototype.writeByte=function(e){this.bin.push(e)},n.prototype.writeUTFBytes=function(e){for(var t=e.length,n=0;n<t;n++)this.writeByte(e.charCodeAt(n))},n.prototype.writeBytes=function(e,t,n){for(var A=n||e.length,i=t||0;i<A;i++)this.writeByte(e[i])};var A,i,a,r,c,o,g,I,C,l={},u=null,s=-1,B=0,Q=!1,d=[],f=7,E=-1,p=!1,j=!0,h=!1,v=10,w="Generated by jsgif (https://github.com/antimatter15/jsgif/)",m=(l.setDelay=function(e){B=Math.round(e/10)},l.setDispose=function(e){e>=0&&(E=e)},l.setRepeat=function(e){e>=0&&(s=e)},l.setTransparent=function(e){u=e},l.setComment=function(e){w=e},l.addFrame=function(e,t){if(null===e||!Q||null===r)throw new Error("Please call start method before calling addFrame");var n=!0;try{t?e instanceof ImageData?(c=e.data,h&&A==e.width&&i==e.height||b(e.width,e.height)):e instanceof Uint8ClampedArray?e.length==A*i*4?c=e:(console.log("Please set the correct size: ImageData length mismatch"),n=!1):(console.log("Please provide correct input"),n=!1):(c=e.getImageData(0,0,e.canvas.width,e.canvas.height).data,h||b(e.canvas.width,e.canvas.height)),F(),O(),j&&(M(),P(),s>=0&&L()),x(),""!==w&&Y(),S(),j||P(),k(),j=!1}catch(a){n=!1}return n},l.download=function(e){if(null===r||0==p)console.log("Please call start method and add frames and call finish method before calling download");else{e=void 0!==e?e.endsWith(".gif")?e:e+".gif":"download.gif";var t=document.createElement("a");t.download=e,t.href=URL.createObjectURL(new Blob([new Uint8Array(r.bin)],{type:"image/gif"})),t.click()}},l.finish=function(){if(!Q)return!1;var e=!0;Q=!1;try{r.writeByte(59),p=!0}catch(t){e=!1}return e},function(){a=0,c=null,o=null,g=null,C=null,p=!1,j=!0}),b=(l.setFrameRate=function(e){15!=e&&(B=Math.round(100/e))},l.setQuality=function(e){e<1&&(e=1),v=e},l.setSize=function(e,t){Q&&!j||((A=e)<1&&(A=320),(i=t)<1&&(i=240),h=!0)}),O=(l.start=function(){m();var e=!0;p=!1,r=new n;try{r.writeUTFBytes("GIF89a")}catch(t){e=!1}return Q=e},l.cont=function(){return m(),p=!1,r=new n,Q=!0},function(){var e=o.length,t=e/3;g=[];var n=new le(o,e,v);C=n.process();for(var A=0,i=0;i<t;i++){var r=n.map(255&o[A++],255&o[A++],255&o[A++]);d[r]=!0,g[i]=r}o=null,I=8,f=7,null!==u&&(a=y(u))}),y=function(e){if(null===C)return-1;for(var t=(16711680&e)>>16,n=(65280&e)>>8,A=255&e,i=0,a=16777216,r=C.length,c=0;c<r;){var o=t-(255&C[c++]),g=n-(255&C[c++]),I=A-(255&C[c]),l=o*o+g*g+I*I,u=c/3;d[u]&&l<a&&(a=l,i=u),c++}return i},F=function(){var e=A,t=i;o=[];for(var n=c,a=0,r=0;r<t;r++)for(var g=0;g<e;g++){var I=r*e*4+4*g;o[a++]=n[I],o[a++]=n[I+1],o[a++]=n[I+2]}},x=function(){var e,t;r.writeByte(33),r.writeByte(249),r.writeByte(4),null===u?(e=0,t=0):(e=1,t=2),E>=0&&(t=7&E),t<<=2,r.writeByte(0|t|e),T(B),r.writeByte(a),r.writeByte(0)},Y=function(){r.writeByte(33),r.writeByte(254),r.writeByte(w.length),r.writeUTFBytes(w),r.writeByte(0)},S=function(){r.writeByte(44),T(0),T(0),T(A),T(i),j?r.writeByte(0):r.writeByte(128|f)},M=function(){T(A),T(i),r.writeByte(240|f),r.writeByte(0),r.writeByte(0)},L=function(){r.writeByte(33),r.writeByte(255),r.writeByte(11),r.writeUTFBytes("NETSCAPE2.0"),r.writeByte(3),r.writeByte(1),T(s),r.writeByte(0)},P=function(){r.writeBytes(C);for(var e=768-C.length,t=0;t<e;t++)r.writeByte(0)},T=function(e){r.writeByte(255&e),r.writeByte(e>>8&255)},k=function(){new Ce(A,i,g,I).encode(r)};return l.stream=function(){return r},l.setProperties=function(e,t){Q=e,j=t},l}(),i=1/ue*1e3;e.setQuality(1),e.setRepeat(0),e.setDelay(i),e.start();var a=document.createElement("canvas"),r=a.getContext("2d");a.width=O.ref.current.width,a.height=O.ref.current.height;for(var c=0;c<w.length;c++)A(a,c),e.addFrame(r);e.finish();var o=e.stream().getData(),g="data:image/gif;base64,"+btoa(o),I=Object.assign({},t);I.gifOpen=!0,I.gifSrc=g,n(I)},children:"Create GIF"})]})},Be=(n(21),function(e){var t=e.createCanvas_p,n=500,A=500;return Object(g.jsxs)("div",{id:"canvasForm",children:[Object(g.jsx)("h1",{children:"Canvas Size"}),Object(g.jsx)("p",{children:"Width:  "}),Object(g.jsx)("input",{type:"number",defaultValue:500,onChange:function(e){return n=e.target.value}}),Object(g.jsx)("p",{children:" px"}),Object(g.jsx)("br",{}),Object(g.jsx)("p",{children:"Height:  "}),Object(g.jsx)("input",{type:"number",defaultValue:500,onChange:function(e){return A=e.target.value}}),Object(g.jsx)("p",{children:" px"}),Object(g.jsx)("br",{}),Object(g.jsx)("button",{onClick:function(){return t(n,A)},children:"Create Canvas"})]})}),Qe=(n(22),function(e){var t=e.imgData,n=e.setImgData,A=e.width,a=e.height,r=e.top,c=e.left,I=e.zIndex,C=e.hidden,l=e.opacity,u=i.a.useContext(o),s=u.globalState,B=u.setGlobalState,Q=i.a.useRef();return i.a.useEffect((function(){var e=Q.current.getContext("2d");e&&(v||null===t||e.putImageData(t,0,0))})),Object(g.jsx)("canvas",{ref:Q,className:"layer",width:A*window.devicePixelRatio,height:a*window.devicePixelRatio,onPointerDown:function(e){if(Q.current){e.preventDefault();var t=Q.current.getContext("2d");t.strokeStyle=s.selectedColor,t.lineWidth=s.selectedSize;var n=S[s.selectedTool].startPath(e,Q.current);if("Dropper"===s.selectedTool){var A=Object.assign({},s);A.selectedColor=n,B(A)}}},onPointerMove:function(e){Q.current&&(e.preventDefault(),S[s.selectedTool].draw(e,Q.current))},onPointerUp:function(e){if(Q.current){e.preventDefault();var t=Q.current.getContext("2d");S[s.selectedTool].endPath(),n(t.getImageData(0,0,A,a))}},onPointerOut:function(e){if(Q.current){e.preventDefault();var t=Q.current.getContext("2d");S[s.selectedTool].endPath(),n(t.getImageData(0,0,A,a))}},style:{position:"absolute",width:A,height:a,top:r+window.scrollY,left:c+window.scrollX,zIndex:I,pointerEvents:0===I?"all":"none",visibility:C?"hidden":"visible",opacity:l/100}})}),de=function(e){var t=e.width,n=e.height,A=e.botCanvasOpacity,a=i.a.useContext(o),r=a.globalState,c=a.setGlobalState;O.ref=i.a.useRef();var I=function(){D()((function(){var e=O.ref.current.getBoundingClientRect(),t=Object.assign({},r);t.botCanvasTop=e.top,t.botCanvasLeft=e.left,t.botCanvasRight=e.right,c(t)}),100)()};return i.a.useEffect((function(){I()}),[]),i.a.useEffect((function(){return window.addEventListener("resize",I),function(){return window.removeEventListener("resize",I)}})),Object(g.jsxs)("div",{id:"canvasContainer",children:[w.map((function(e,A){return w[r.curFrame].map((function(e,i){var a=e.id,c=e.imgData,o=e.hasNewData,I=e.hidden,C=(e.name,e.opacity);return Object(g.jsx)(Qe,{imgData:c,hasNewData:o,setImgData:function(e){w[r.curFrame][r.curLayer].imgData=e},width:t,height:n,top:r.botCanvasTop,left:r.botCanvasLeft,zIndex:r.curLayer-i,hidden:I||A!==r.curFrame,opacity:C},a)}))})),Object(g.jsx)("canvas",{id:"bottomCanvas",ref:O.ref,width:t*window.devicePixelRatio,height:n*window.devicePixelRatio,style:{position:"relative",width:t,height:n,opacity:A/100,zIndex:-100,display:"table",margin:"auto"}})]})},fe=function(){var e=i.a.useState({canvasOpen:!1,gifOpen:!1,canvasWidth:0,canvasHeight:0,selectedTool:"Pencil",selectedColor:"#000000",selectedSize:1,curLayer:0,curFrame:0,newLayerId:1,botCanvasOpacity:20,botCanvasTop:0,botCanvasLeft:0,botCanvasRight:0,gifSrc:""}),t=Object(c.a)(e,2),n=t[0],A=t[1];return n.canvasOpen?Object(g.jsx)(o.Provider,{value:{globalState:n,setGlobalState:A},children:Object(g.jsxs)("div",{id:"topLevelContainer",children:[Object(g.jsxs)("div",{id:"leftBar",children:[Object(g.jsx)(Q,{}),Object(g.jsx)("hr",{}),Object(g.jsx)(T,{})]}),Object(g.jsx)(de,{width:n.canvasWidth,height:n.canvasHeight,botCanvasOpacity:n.botCanvasOpacity}),Object(g.jsx)(oe,{}),Object(g.jsx)(se,{}),n.gifOpen?Object(g.jsx)(I,{gifSrc:n.gifSrc}):""]})}):Object(g.jsx)(Be,{createCanvas_p:function(e,t){var i=Object.assign({},n);i.canvasOpen=!0,i.canvasWidth=e,i.canvasHeight=t,A(i)}})},Ee=function(){return Object(g.jsx)(fe,{})};r.a.render(Object(g.jsx)(Ee,{}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.5ede9e8a.chunk.js.map