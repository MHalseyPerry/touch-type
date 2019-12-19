(this["webpackJsonptouch-type"]=this["webpackJsonptouch-type"]||[]).push([[0],{11:function(e,t,n){e.exports=n(25)},16:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),i=n(1),l=(n(16),Object(a.createContext)()),u=function(){return Object(a.useContext)(l)},s=function(){var e=u(),t=e.keymaps,n=e.primaryKeymapKey,a=e.setPrimaryKeymap,c=e.secondaryKeymapKey,o=e.setSecondaryKeymap;return r.a.createElement(r.a.Fragment,null,r.a.createElement("select",{value:n,onChange:function(e){return a(e.target.value)}},Object.keys(t).map(function(e){return r.a.createElement("option",{key:e,value:e},e)})),r.a.createElement("select",{value:c,onChange:function(e){return o(e.target.value)}},Object.keys(t).map(function(e){return r.a.createElement("option",{key:e,value:e},e)})))},m=n(4),d=Object(m.a)(function(e){return{drawer:{display:"flex",flexDirection:"column",background:e.ui,position:"absolute",top:"0",bottom:"0",left:"-15rem",width:"15rem",transition:"left 0.2s ease-in",color:e.text,padding:"1rem",boxShadow:"0 25px 50px -12px ".concat(e.shadow)},button:{background:"transparent",border:"none",outline:"none"},open:{left:"0"}}}),f=n(2),p=Object(a.createContext)(),b=Object(m.a)(function(e){return{switch:{position:"relative",outline:"none",width:"60px",height:"30px",backgroundColor:e.text,border:"4px solid ".concat(e.text),borderRadius:"30px",boxSizing:"content-box",margin:"5px"},switchOn:{backgroundColor:"#42A5F5",border:"4px solid #42A5F5"},innerCircle:{border:"5px",width:"30px",height:"30px",background:e.bg,borderRadius:"50%",transition:"margin-left 200ms ease-in-out"},innerCircleOn:{marginLeft:"30px"}}}),g=function(e){var t=b();return r.a.createElement("div",null,r.a.createElement("button",{className:"".concat(t.switch," ").concat(e.on?t.switchOn:t.switchOff),onClick:function(){e.toggle(!e.on)}},r.a.createElement("div",{className:"".concat(t.innerCircle," ").concat(e.on?t.innerCircleOn:t.innerCircleOff)})))},y=function(){var e=Object(a.useContext)(p),t=e.isLightTheme,n=e.setIsLightTheme;return r.a.createElement("div",null,r.a.createElement("p",null,"Theme Picker: "),r.a.createElement(g,{on:t,toggle:n}))};function x(){var e=d(),t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],o=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"".concat(e.drawer," ").concat(c?e.open:"")},r.a.createElement(y,null),r.a.createElement(s,null)),r.a.createElement("button",{className:e.button,onClick:function(){o(!c)}},r.a.createElement("img",{src:"./icons8-settings-50.png",alt:""})))}var h=function(e,t,n){var r=Object(a.useCallback)(t,n);Object(a.useEffect)(function(){return document.addEventListener(e,r),function(){document.removeEventListener(e,r)}},[e,r])},E=Object(m.a)(function(e){return{box:{display:"flex",flexDirection:"column",marginTop:"3rem"},carousel:{display:"flex",flexDirection:"row",justifyContent:"center",textAlign:"center",alignItems:"center"},text:{color:e.text,fontSize:"18rem"},textSmall:{color:e.text,fontSize:"5rem"},outer:{zIndex:1,marginLeft:"20px",opacity:"0.33"},main:{zIndex:1,marginLeft:"20px"},status:{opacity:0,width:"100%",height:"100%",position:"absolute",transition:"opacity 0ms ease"},correct:{opacity:1,color:"green"},incorrect:{color:"red",opacity:1},scoreBox:{color:e.text}}}),O=Object(m.a)(function(e){return{letter:{width:"2.5rem",height:"2.5rem",background:e.bg,color:e.text,border:"2px solid ".concat(e.ui),padding:".2rem",margin:".05rem"},correct:{background:"green"},incorrect:{background:"red"},row:{display:"flex",flexDirection:"row","&:nth-child(2)":{marginLeft:"1rem"},"&:nth-child(3)":{marginLeft:"2rem"}},keyboard:{}}}),v=function(e){var t=e.currentKey,n=Object(a.useMemo)(function(){return[[81,87,69,82,84,89,85,73,79,80,219,221],[65,83,68,70,71,72,74,75,76,186,192],[90,88,67,86,66,78,77,188,190]]},[]),c=u().primaryKeymap,o=O(),l=Object(a.useState)(""),s=Object(i.a)(l,2),m=s[0],d=s[1];return h("keydown",function(e){d(e.keyCode)},[]),h("keyup",function(){d("")},[]),r.a.createElement("div",{className:o.keyboard},n.map(function(e){return r.a.createElement("div",{className:o.row,key:e},e.map(function(e){return r.a.createElement("div",{className:"".concat(o.letter," ").concat(e===m?e===t?o.correct:o.incorrect:""),key:e},c[e])}))}))};function j(e){var t=Object.keys(e),n=t[Math.floor(Math.random()*t.length)],a=/[~`!@#$%^&*(){}[\];:"'<,.>?\/\\|_+=-]/g.test(e[n]);return parseInt(a?j(e):n,10)}var k=function(e){var t=u().primaryKeymap,n=E(),c=Object(a.useState)(j(t)),o=Object(i.a)(c,2),l=o[0],s=o[1],m=Object(a.useState)(j(t)),d=Object(i.a)(m,2),f=d[0],p=d[1],b=Object(a.useState)(j(t)),g=Object(i.a)(b,2),y=g[0],x=g[1],O=Object(a.useState)(""),k=Object(i.a)(O,2),w=k[0],C=k[1],S=Object(a.useState)(0),N=Object(i.a)(S,2),K=N[0],L=N[1];return h("keyup",function(e){e.keyCode===l&&(x(l),s(f),p(j(t))),C("")},[l,t,y,f]),h("keydown",function(e){e.keyCode===l?(L(K+10),C("correct")):(L(K-10),C("incorrect"))}),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:n.box},r.a.createElement("div",{className:n.scoreBox},"Score: ".concat(K)),r.a.createElement("div",{className:n.carousel},r.a.createElement("div",{className:n.outer},r.a.createElement("p",{className:n.textSmall},t[y])),r.a.createElement("div",{className:n.main},r.a.createElement("p",{className:"".concat(n.text," ").concat(w?n[w]:"")},t[l])),r.a.createElement("div",{className:n.outer},r.a.createElement("p",{className:n.textSmall},t[f]))),r.a.createElement(v,{currentKey:l})))},w=Object(m.a)(function(e){return{wrapper:{background:e.bg,width:"100%",minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},header:{display:"flex",flexDirection:"row",justifyContent:"flex-end",width:"100%"},main:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},correct:{background:"green"},incorrect:{background:"red"}}});var C=function(){var e=w(),t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],o=n[1];return Object(a.useEffect)(function(){var e=setTimeout(function(){c&&o("")},500);return function(){return clearTimeout(e)}},[c]),r.a.createElement("div",{className:"".concat(e.wrapper," ").concat(c?e[c]:"")},r.a.createElement("header",{className:e.header},r.a.createElement(x,null)),r.a.createElement("main",{className:e.main},r.a.createElement(k,{onSuccesfulGuess:function(){return o("correct")},onIncorrectGuess:function(){return o("incorrect")}})))};n(24);o.a.render(r.a.createElement(function(e){var t=e.children,n=Object(a.useState)(!1),c=Object(i.a)(n,2),o=c[0],l={isLightTheme:o,setIsLightTheme:c[1]};return r.a.createElement(p.Provider,{value:l},r.a.createElement(f.b,{theme:o?{text:"#555",ui:"#fff",bg:"#eee",shadow:"rgba(0, 0, 0, 0.30)"}:{text:"#ddd",ui:"#555",bg:"#333",shadow:"rgba(0, 0, 0, 0.30)"}},t))},null,r.a.createElement(function(e){var t=e.children,n=Object(a.useMemo)(function(){return{rus:{81:"\u0419",87:"\u0426",69:"\u0423",82:"\u041a",84:"\u0415",89:"\u041d",85:"\u0413",73:"\u0428",79:"\u0429",80:"\u0417",219:"\u0425",221:"\u042a",65:"\u0424",83:"\u042b",68:"\u0412",70:"\u0410",71:"\u041f",72:"\u0420",74:"\u041e",75:"\u041b",76:"\u0414",186:"\u0416",192:"\u042d",90:"\u042f",88:"\u0427",67:"\u0421",86:"\u041c",66:"\u0418",78:"\u0422",77:"\u042c",188:"\u0411",190:"\u042e"},eng:{81:"Q",87:"W",69:"E",82:"R",84:"T",89:"Y",85:"U",73:"I",79:"O",80:"P",219:"[",221:"]",65:"A",83:"S",68:"D",70:"F",71:"G",72:"H",74:"J",75:"K",76:"L",186:";",192:"'",90:"Z",88:"X",67:"C",86:"V",66:"B",78:"N",77:"M",188:",",190:"."}}},[]),c=Object(a.useState)("eng"),o=Object(i.a)(c,2),u=o[0],s=o[1],m=Object(a.useState)("eng"),d=Object(i.a)(m,2),f=d[0],p=d[1],b={keymaps:n,primaryKeymapKey:u,primaryKeymap:n[u],secondaryKeymapKey:f,secondaryKeymap:n[f],setPrimaryKeymap:s,setSecondaryKeymap:p};return r.a.createElement(l.Provider,{value:b},t)},null,r.a.createElement(C,null))),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.a412f246.chunk.js.map