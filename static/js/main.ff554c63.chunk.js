(this["webpackJsonpflipbook-animator-2"]=this["webpackJsonpflipbook-animator-2"]||[]).push([[0],[,,,,,,,,,function(A,e,I){},function(A,e,I){},function(A,e,I){},,function(A,e,I){},function(A,e,I){},function(A,e,I){},function(A,e,I){},function(A,e,I){},function(A,e,I){},function(A,e,I){},function(A,e,I){},function(A,e,I){"use strict";I.r(e);var t=I(1),n=I.n(t),g=I(4),c=I.n(g),C=I(2),Q=(I(9),n.a.createContext()),B=(I(10),I(11),I(0)),i=function(A){var e=A.btnTitle,I=A.imgSrc,t=A.onClick_p,g=A.selected,c=A.size,Q=n.a.useState("iconUnselected"),i=Object(C.a)(Q,2),a=i[0],o=i[1],E=g?"iconSelected":a;return Object(B.jsx)("img",{alt:e,width:c,height:c,title:e,src:I,className:E,onClick:t,onMouseOver:function(){return o("iconHovered")},onMouseOut:function(){return o("iconUnselected")},onMouseDown:function(){return o("iconSelected")},onMouseUp:function(){return o("iconHovered")}})},a=I.p+"static/media/pencil.588014e8.png",o=I.p+"static/media/pen.373e6d9c.png",E=I.p+"static/media/eraser.ce11724e.png",r=I.p+"static/media/dropper.f62bf4e2.png",s=I.p+"static/media/undo.eb7626ba.png",l=I.p+"static/media/redo.b5eb995b.png",j=function(){var A=n.a.useContext(Q),e=A.globalState,I=A.setGlobalState,t=function(A){var t=Object.assign({},e);t.selectedTool=A,I(t)};return Object(B.jsxs)("div",{id:"toolbarContainer",children:[Object(B.jsx)(i,{btnTitle:"Pencil",imgSrc:a,onClick_p:function(){return t("Pencil")},size:40,selected:"Pencil"===e.selectedTool}),Object(B.jsx)(i,{btnTitle:"Pen",imgSrc:o,onClick_p:function(){return t("Pen")},size:40,selected:"Pen"===e.selectedTool}),Object(B.jsx)(i,{btnTitle:"Eraser",imgSrc:E,onClick_p:function(){return t("Eraser")},size:40,selected:"Eraser"===e.selectedTool}),Object(B.jsx)(i,{btnTitle:"Dropper",imgSrc:r,onClick_p:function(){return t("Dropper")},size:40,selected:"Dropper"===e.selectedTool}),Object(B.jsx)("hr",{}),Object(B.jsx)(i,{btnTitle:"Undo",imgSrc:s,onClick_p:function(){console.log("Undo")},size:40,selected:!1}),Object(B.jsx)(i,{btnTitle:"Redo",imgSrc:l,onClick_p:function(){console.log("Redo")},size:40,selected:!1})]})},u=(I(13),I.p+"static/media/black.1fd5be43.png"),p=I.p+"static/media/white.f637800e.png",d=I.p+"static/media/red.d9268b17.png",O=I.p+"static/media/lightred.b2e9f841.png",f=I.p+"static/media/orange.7ab39e4f.png",h=I.p+"static/media/yellow.259f7955.png",b=I.p+"static/media/green.71014684.png",Y=I.p+"static/media/pink.2a087a8e.png",S=I.p+"static/media/purple.5c807439.png",F=I.p+"static/media/blue.d0223170.png",v=function(){var A=n.a.useContext(Q),e=A.globalState,I=A.setGlobalState,t=function(A){var t=Object.assign({},e);t.selectedColor=A,I(t)};return Object(B.jsxs)("div",{id:"colorSelectorContainer",children:[Object(B.jsx)(i,{btnTitle:"Black",imgSrc:u,onClick_p:function(){t("#000000")},size:32,selected:"#000000"===e.selectedColor}),Object(B.jsx)(i,{btnTitle:"White",imgSrc:p,onClick_p:function(){t("#ffffff")},size:32,selected:"#ffffff"===e.selectedColor}),Object(B.jsx)(i,{btnTitle:"Red",imgSrc:d,onClick_p:function(){t("#ff0000")},size:32,selected:"#ff0000"===e.selectedColor}),Object(B.jsx)(i,{btnTitle:"Light red",imgSrc:O,onClick_p:function(){t("#f85e43")},size:32,selected:"#f85e43"===e.selectedColor}),Object(B.jsx)(i,{btnTitle:"Orange",imgSrc:f,onClick_p:function(){t("#f39127")},size:32,selected:"#f39127"===e.selectedColor}),Object(B.jsx)(i,{btnTitle:"Yellow",imgSrc:h,onClick_p:function(){t("#f3c327")},size:32,selected:"#f3c327"===e.selectedColor}),Object(B.jsx)(i,{btnTitle:"Green",imgSrc:b,onClick_p:function(){t("#34a234")},size:32,selected:"#34a234"===e.selectedColor}),Object(B.jsx)(i,{btnTitle:"Pink",imgSrc:Y,onClick_p:function(){t("#f74579")},size:32,selected:"#f74579"===e.selectedColor}),Object(B.jsx)(i,{btnTitle:"Purple",imgSrc:S,onClick_p:function(){t("#8d00cf")},size:32,selected:"#8d00cf"===e.selectedColor}),Object(B.jsx)(i,{btnTitle:"Blue",imgSrc:F,onClick_p:function(){t("#4376f8")},size:32,selected:"#4376f8"===e.selectedColor}),Object(B.jsx)("input",{type:"color",id:"colorPicker",onChange:function(A){t(A.target.value)}})]})},x=(I(14),function(A){var e=A.min,I=A.max,t=A.unit,g=A.initValue,c=A.setValue,C=n.a.useRef(),Q=n.a.useRef(),i=function(A){A&&(A<e&&(A=e),A>I&&(A=I),C.current.value=A,Q.current.value=A,c(A))};return Object(B.jsxs)("div",{id:"selectorContainer",children:[Object(B.jsx)("input",{type:"number",id:"selectorText",defaultValue:g,ref:C,onChange:function(A){return i(A.target.value)}}),Object(B.jsxs)("p",{children:["  ",t]}),Object(B.jsx)("input",{type:"range",id:"selectorRange",defaultValue:g,ref:Q,onChange:function(A){return i(A.target.value)}})]})}),M=(I(15),I.p+"static/media/hide.2a8a0743.png"),m=I.p+"static/media/unhide.e6ff1808.png",w=function(A){var e=A.name,I=A.selected,t=A.hidden,g=A.rename,c=A.select,Q=A.hide,a=n.a.useState("layerMenuItemUnselected"),o=Object(C.a)(a,2),E=o[0],r=o[1],s=I?"layerMenuItemSelected":E,l=t?"Unhide Layer":"Hide Layer",j=t?m:M;return Object(B.jsxs)("div",{className:s,onClick:c,onMouseOver:function(){return r("layerMenuItemHovered")},onMouseOut:function(){return r("layerMenuItemUnselected")},children:[Object(B.jsx)(i,{btnTitle:l,imgSrc:j,size:28,selected:!1,onClick_p:function(A){A.stopPropagation(),Q()}}),Object(B.jsx)("span",{id:"layerName",onDoubleClick:g,children:e})]})},P=(I(16),"data:image/png;base64,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"),K=I.p+"static/media/X.d73ecd37.png",y=I.p+"static/media/up.7d9ac618.png",L=I.p+"static/media/down.c8a3bbaa.png",z=I.p+"static/media/copy.01dda647.png",U=I.p+"static/media/paste.b7884835.png",k=1,G=function(){var A=n.a.useContext(Q),e=A.globalState,I=A.setGlobalState,t=n.a.useState([{id:0,name:"Layer 0",hidden:!1}]),g=Object(C.a)(t,2),c=g[0],a=g[1];return Object(B.jsxs)("div",{id:"layerMenuContainer",children:[Object(B.jsx)("h2",{children:"Current Layer Opacity"}),Object(B.jsx)(x,{min:0,max:100,unit:"%",initValue:100,setValue:function(A){}}),Object(B.jsx)(i,{btnTitle:"Add layer at top",imgSrc:P,onClick_p:function(){var A=JSON.parse(JSON.stringify(c)),t=Object.assign({},e);A.unshift({id:k,name:"Layer "+k,hidden:!1}),k++,t.curLayer++,a(A),I(t)},size:28,selected:!1}),Object(B.jsx)(i,{btnTitle:"Cut current layer",imgSrc:K,onClick_p:function(){if(1!==c.length){var A=JSON.parse(JSON.stringify(c)),t=Object.assign({},e);A.splice(e.curLayer,1),t.curLayer===A.length&&t.curLayer--,a(A),I(t)}},size:28,selected:!1}),Object(B.jsx)(i,{btnTitle:"Move current layer up",imgSrc:y,onClick_p:function(){if(0!==e.curLayer){var A=JSON.parse(JSON.stringify(c)),t=Object.assign({},e),n=A[e.curLayer];A[e.curLayer]=A[e.curLayer-1],A[e.curLayer-1]=n,t.curLayer--,a(A),I(t)}},size:28,selected:!1}),Object(B.jsx)(i,{btnTitle:"Move current layer down",imgSrc:L,onClick_p:function(){if(e.curLayer!==c.length-1){var A=JSON.parse(JSON.stringify(c)),t=Object.assign({},e),n=A[e.curLayer];A[e.curLayer]=A[e.curLayer+1],A[e.curLayer+1]=n,t.curLayer++,a(A),I(t)}},size:28,selected:!1}),Object(B.jsx)(i,{btnTitle:"Copy current layer",imgSrc:z,onClick_p:function(){},size:28,selected:!1}),Object(B.jsx)(i,{btnTitle:"Paste layer at top",imgSrc:U,onClick_p:function(){},size:28,selected:!1}),c.map((function(A,t){return Object(B.jsx)(w,{name:A.name,selected:e.curLayer===t,hidden:A.hidden,rename:function(){return function(A){var e=JSON.parse(JSON.stringify(c)),I=prompt("Rename layer:",e[A].name);""!=I&&null!=I&&(e[A].name=I,a(e))}(t)},select:function(){return function(A){var t=Object.assign({},e);t.curLayer=A,I(t)}(t)},hide:function(){return function(A){var e=JSON.parse(JSON.stringify(c));e[A].hidden=!e[A].hidden,a(e)}(t)}},A.id)}))]})},T=(I(17),function(){var A=n.a.useContext(Q),e=A.globalState,I=A.setGlobalState;return Object(B.jsxs)("div",{id:"sidebarContainer",children:[Object(B.jsx)("h1",{children:"Brush Color"}),Object(B.jsx)(v,{}),Object(B.jsx)("h1",{children:"Brush Size"}),Object(B.jsx)(x,{min:1,max:100,unit:"px",initValue:1,setValue:function(A){var t=Object.assign({},e);t.selectedSize=A,I(t)}}),Object(B.jsx)("h1",{children:"Last Frame Opacity"}),Object(B.jsx)(x,{min:0,max:100,unit:"%",initValue:20,setValue:function(A){}}),Object(B.jsx)("h1",{children:"Layers"}),Object(B.jsx)(G,{})]})}),N=(I(18),I.p+"static/media/left-arrow.80e904ad.png"),X=I.p+"static/media/right-arrow.610490a6.png",D=function(){var A=n.a.useContext(Q),e=A.globalState;A.setGlobalState;return Object(B.jsxs)("div",{id:"bottombarContainer",children:[Object(B.jsxs)("div",{id:"topRow",children:[Object(B.jsx)(i,{btnTitle:"Add frame after current frame",imgSrc:P,onClick_p:function(){},size:40,selected:!1}),Object(B.jsxs)("span",{id:"chooseFrame",children:[Object(B.jsx)(i,{btnTitle:"Last Frame",imgSrc:N,onClick_p:function(){},size:40,selected:!1}),Object(B.jsxs)("span",{id:"frameNum",children:["frame ",e.curFrame+1,"/1"]}),Object(B.jsx)(i,{btnTitle:"Next Frame",imgSrc:X,onClick_p:function(){},size:40,selected:!1})]}),Object(B.jsx)(i,{btnTitle:"Remove current frame",imgSrc:K,onClick_p:function(){},size:40,selected:!1})]}),Object(B.jsx)("label",{children:"Frames per second:"}),Object(B.jsx)("input",{type:"number",id:"fps",name:"fps",defaultValue:1,min:1}),Object(B.jsx)("button",{onClick:function(){},children:"Create GIF"})]})},W=(I(19),function(A){var e=A.createCanvas_p,I=500,t=500;return Object(B.jsxs)("div",{id:"canvasForm",children:[Object(B.jsx)("h1",{children:"Canvas Dimensions"}),Object(B.jsx)("p",{children:"Width:  "}),Object(B.jsx)("input",{type:"number",defaultValue:500,onChange:function(A){return I=A.target.value}}),Object(B.jsx)("p",{children:" px"}),Object(B.jsx)("br",{}),Object(B.jsx)("p",{children:"Height:  "}),Object(B.jsx)("input",{type:"number",defaultValue:500,onChange:function(A){return t=A.target.value}}),Object(B.jsx)("p",{children:" px"}),Object(B.jsx)("br",{}),Object(B.jsx)("button",{onClick:function(){return e(I,t)},children:"Create Canvas"})]})}),H=(I(20),function(A){var e=A.width,I=A.height,t=n.a.useRef();return n.a.useEffect((function(){var A=t.current;A.width=e*window.devicePixelRatio,A.height=I*window.devicePixelRatio,A.style.width=e+"px",A.style.height=I+"px"}),[]),Object(B.jsx)("div",{id:"canvasContainer",children:Object(B.jsx)("canvas",{id:"bottomCanvas",ref:t})})}),J=function(){var A=n.a.useState({canvasOpen:!1,canvasWidth:0,canvasHeight:0,selectedTool:"Pencil",selectedColor:"#000000",selectedSize:1,layers:"layers",curLayer:0,curFrame:0}),e=Object(C.a)(A,2),I=e[0],t=e[1];return I.canvasOpen?Object(B.jsx)(Q.Provider,{value:{globalState:I,setGlobalState:t},children:Object(B.jsxs)("div",{id:"topLevelContainer",children:[Object(B.jsx)(j,{}),Object(B.jsx)(H,{width:I.canvasWidth,height:I.canvasHeight}),Object(B.jsx)(T,{}),Object(B.jsx)(D,{})]})}):Object(B.jsx)(W,{createCanvas_p:function(A,e){var n=Object.assign({},I);n.canvasOpen=!0,n.canvasWidth=A,n.canvasHeight=e,t(n)}})},Z=function(){return Object(B.jsx)(J,{})};c.a.render(Object(B.jsx)(Z,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.ff554c63.chunk.js.map