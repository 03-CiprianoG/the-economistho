(this["webpackJsonpthe-economistho"]=this["webpackJsonpthe-economistho"]||[]).push([[0],{31:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var i=n(1),o=n.n(i),c=n(24),l=n.n(c),r=(n(31),n(9)),a=n(26),s=n(2),A=n(8),p=n.n(A),d=n(0),u=function(e){return Object(d.jsxs)("a",{href:e.href,target:e.target,style:e.style,children:[e.img&&Object(d.jsx)("img",{src:e.img,style:e.imgStyle,alt:""}),Object(d.jsx)("p",{style:e.labelStyle,children:e.label})]})},g=function(){return Object(d.jsx)("div",{style:{backgroundColor:"#333333",width:"100vw",height:"5vh",padding:"25px 0px 10px 0px",justifyContent:"center",alignContent:"center",justifyItems:"center"},children:Object(d.jsx)("p",{style:document.documentElement.clientWidth>480?{color:"#eee",fontSize:"18px",marginLeft:"25px"}:{color:"#eee",fontSize:"14px",marginLeft:"15px"},children:"Built with passion by Giuseppe Cipriano, aspiring engineer at Mistho.io"})})},h=function(e){return Object(d.jsx)("button",{style:e.style,onClick:e.handleClick,children:e.label})},x=function(e){return Object(d.jsx)("input",{style:{minWidth:"260px",padding:"10px",outline:"none",borderRadius:"4px",border:"1px solid ",lineHeight:"1.4",width:"100%",fontSize:"16px",maxWidth:"600px",marginBottom:"25px"},value:e.value,onChange:e.handleChange,placeholder:e.placeholder,type:e.type})},j=function(e){var t=Object(i.useState)(""),n=Object(r.a)(t,2),o=n[0],c=n[1],l=Object(i.useState)(""),a=Object(r.a)(l,2),A=a[0],g=a[1],j=Object(i.useState)(""),m=Object(r.a)(j,2),f=m[0],b=m[1],O=Object(s.f)();p.a.defaults.withCredentials=!0;return Object(d.jsxs)("div",{style:{width:"50vw",height:"50vh",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"},children:[Object(d.jsx)("h1",{style:{fontSize:"24px",color:"#fff",padding:"15px 40px 15px 40px",backgroundColor:"#333",marginBottom:"25px"},children:"login"===e.formType?"Login":"Signup"}),Object(d.jsx)(x,{value:o,handleChange:function(e){return c(e.target.value)},placeholder:"Email",type:"email",style:{marginBottom:"25px"}}),Object(d.jsx)(x,{value:A,handleChange:function(e){return g(e.target.value)},placeholder:"Password",type:"password",style:{marginBottom:"25px"}}),Object(d.jsx)(h,{style:{color:"#fff",backgroundColor:"red",padding:"10px 25px 10px 25px",cursor:"pointer",marginBottom:"25px"},handleClick:"login"===e.formType?function(e){return function(e){e.preventDefault(),p.a.post("".concat("https://economistho.herokuapp.com","/login"),{email:o,password:A}).then((function(e){b(e.data.message),e.data.loggedIn&&(O.push("/"),window.location.reload())})).catch((function(e){console.log(e)}))}(e)}:function(e){return function(e){e.preventDefault(),p.a.post("".concat("https://economistho.herokuapp.com","/signup"),{email:o,password:A}).then((function(e){b(e.data.message),setTimeout((function(){O.push("/user-login")}),3e3)})).catch((function(e){console.log(e)}))}(e)},label:"Submit"}),Object(d.jsx)("p",{style:{color:"#000",marginBottom:"25px"},children:f}),Object(d.jsx)(u,{style:{fontSize:"14px"},href:"login"===e.formType?"/user-signup":"/user-login",label:"login"===e.formType?"You don't have an account yet? Sign up":"You already have an account? Log in"})]})},m=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(j,{formType:"login"}),Object(d.jsx)(g,{}),Object(d.jsx)(u,{href:"/",style:{position:"absolute",bottom:"20px",left:"50%",transform:"translate(-50%)"},label:"Homepage"})]})},f=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(j,{formType:"signup"}),Object(d.jsx)(g,{}),Object(d.jsx)(u,{href:"/",style:{position:"absolute",bottom:"20px",left:"50%",transform:"translate(-50%)"},label:"Homepage"})]})},b=function(e){return Object(d.jsx)(u,{href:e.url.substring(25),style:{gap:"10px",padding:"20px",boxShadow:"0px 0px 2px 0px rgb(0, 0, 0, 0.35)",margin:"10px"},img:e.img,imgStyle:{width:"100%"},label:e.headline,labelStyle:e.labelStyle})},O=function(e){return Object(d.jsxs)("div",{style:{justifyContent:"center",alignItems:" center",margin:"25px auto 25px auto"},children:[Object(d.jsx)("h1",{style:{textAlign:"center",fontSize:"28px",paddingBottom:"10px"},children:"Most recent articles"}),Object(d.jsx)("div",{style:document.documentElement.clientWidth>480?{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridTemplateRows:"1fr 1fr ",width:"fit-content",alignItems:"center"}:{display:"grid",gridTemplateColumns:"1fr",gridGap:"25px",padding:"25px",width:" fit-content"},children:e.articles.length>0&&e.articles.map((function(e){return Object(d.jsx)(b,{url:e.item.url,img:e.item.image,imgStyle:{width:"100%"},headline:e.item.headline,labelStyle:{fontSize:"20px",marginTop:"10px"}},e.position)}))})]})},w="data:image/png;base64,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",y=function(e){return Object(d.jsxs)("div",{style:{width:"100%",height:"100px",justifyContent:"space-between",alignItems:"center",display:"flex",flexDirection:"row"},children:[Object(d.jsx)(u,{href:"/",img:document.documentElement.clientWidth>480?w:"data:image/png;base64,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",imgStyle:document.documentElement.clientWidth>480?{minWidth:"160px",height:"80px"}:{minWidth:"70px",width:"70px",heigth:"70px"},style:{paddingLeft:"25px",paddingRight:"25px"}}),Object(d.jsx)("div",{style:document.documentElement.clientWidth>480?{display:"flex",flexDirection:"row",width:"80%",justifyContent:"space-between",border:"1px solid #c1c1c1",borderLeft:"none",borderRight:"none",padding:"18px",margin:"auto"}:{display:"flex",flexDirection:"row",width:"80%",justifyContent:"space-between",border:"1px solid #c1c1c1",borderLeft:"none",borderRight:"none",padding:"6px",margin:"auto"},children:Object(d.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",margin:"auto 0px auto auto",alignItems:"center"},children:[Object(d.jsx)("h3",{style:document.documentElement.clientWidth>480?{marginRight:"25px",fontSize:"18px"}:{marginRight:"25px",fontSize:"14px"},children:e.userEmail}),Object(d.jsx)(h,{style:document.documentElement.clientWidth>480?{color:"#fff",backgroundColor:"red",padding:"8px 15px 8px 15px",cursor:"pointer",width:"fit-content"}:{color:"#fff",backgroundColor:"red",padding:"8px 15px 8px 15px",cursor:"pointer",width:"fit-content",fontSize:"12px"},handleClick:function(){p.a.post("".concat("https://economistho.herokuapp.com","/logout")).then((function(){}),window.location.reload()).catch((function(e){return console.log(e)}))},label:"Log out"})]})})]})},C=function(e){return Object(d.jsxs)("div",{style:{width:" 100vw",height:"280px",justifyContent:"center",alignItems:"center",textAlign:"center"},children:[Object(d.jsx)("p",{style:{fontSize:"16px",marginTop:"10px"},children:"Advertisement"}),Object(d.jsx)(u,{href:"https://www.mistho.io",target:"_blank",img:e.adImg,style:{height:"266px",width:"100%",display:"inline-flex",cursor:"pointer"},imgStyle:{width:"420px",height:"95%",margin:"auto",position:"relative",display:"inline-table"}})]})},B=n.p+"static/media/mistho-logo.ab067fe2.png",E=function(e){return Object(d.jsxs)("div",{children:[document.documentElement.clientWidth>480&&Object(d.jsx)(C,{adImg:B}),Object(d.jsx)(y,{loggedIn:e.loggedIn,userEmail:e.userEmail}),Object(d.jsx)(O,{articles:e.articles}),Object(d.jsx)(g,{})]})},Y=function(e){return Object(d.jsxs)("div",{style:{justifyContent:"center",alignContent:"center",alignItems:"center"},children:[document.documentElement.clientWidth>480&&Object(d.jsx)(C,{adImg:B}),Object(d.jsx)(y,{userEmail:e.userEmail}),Object(d.jsxs)("div",{style:{width:"90%",display:"flex",flexDirection:" column",justifyContent:"center",alignContent:"center",alignItems:"flex-start",margin:"25px auto 25px auto"},children:[Object(d.jsx)("span",{style:{color:"#E2130C",fontWeight:"500",fontSize:"18px",marginBottom:"4px"},children:e.article.subheadline}),Object(d.jsx)("span",{style:{color:"#000",fontWeight:"500",fontSize:"36px",marginBottom:"4px"},children:e.article.headline}),Object(d.jsx)("h2",{style:{color:"#000",fontWeight:"500",fontSize:"20px",marginTop:"35px"},children:e.article.description}),Object(d.jsx)("img",{style:{marginTop:"30px",borderBottom:"1px solid rgba(0,0,0, 0.15)",paddingBottom:"30px"},src:e.article.image,alt:""}),Object(d.jsx)("p",{style:{color:"#000",opacity:"0.6",fontWeight:"600",fontSize:"14px",paddingTop:"15px"},children:e.article.time}),Object(d.jsx)("p",{style:{color:"#000",opacity:"0.8",fontWeight:"500",fontSize:"22px",marginTop:"40px"},children:e.article.text})]}),Object(d.jsx)(g,{})]})},I=function(){return Object(d.jsxs)("div",{style:{position:"absolute",display:"flex",flexDirection:"column",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",gap:"10px"},children:[Object(d.jsx)("img",{src:w,alt:""}),Object(d.jsx)("h1",{style:{fontSize:"18px"},children:"Loading data..."})]})};var S=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{style:{position:"absolute",display:"flex",flexDirection:"column",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",alignItems:"center"},children:[Object(d.jsx)("img",{src:w,style:{width:"220px",marginBottom:"25px"},alt:""}),Object(d.jsx)("h1",{style:{fontSize:"18px",marginBottom:"25px"},children:"Please login to access all the articles"}),Object(d.jsx)(u,{href:"/user-login",label:"Log in",style:{color:"#fff",backgroundColor:"red",padding:"8px 15px 8px 15px",cursor:"pointer",width:"fit-content",marginBottom:"25px"}}),Object(d.jsx)(u,{href:"/user-signup",label:"You don't have an account yet?, Sign up here!"})]})})},D=(n(59),function(){var e=Object(i.useState)(""),t=Object(r.a)(e,2),n=t[0],o=t[1],c=Object(i.useState)(""),l=Object(r.a)(c,2),A=l[0],u=l[1],g=Object(i.useState)([]),h=Object(r.a)(g,2),x=h[0],j=h[1];return p.a.defaults.withCredentials=!0,Object(i.useEffect)((function(){p.a.post("".concat("https://economistho.herokuapp.com","/check-user")).then((function(e){e.data.loggedIn?(o(e.data.loggedIn),u(e.data.userEmail)):(o(!1),u(""))})).catch((function(e){return console.log(e)})),p.a.post("".concat("https://economistho.herokuapp.com","/fetch-and-scrape"),{pathname:window.location.pathname}).then((function(e){j(e.data.articles)}))}),[]),Object(d.jsx)(a.a,{children:Object(d.jsxs)(s.c,{children:[Object(d.jsx)(s.a,{path:"/user-login",exact:!0,render:function(){return Object(d.jsx)(m,{})}}),Object(d.jsx)(s.a,{path:"/user-signup",exact:!0,render:function(){return Object(d.jsx)(f,{})}}),Object(d.jsx)(s.a,{path:"/",exact:!0,render:function(){return x.length>0?n?Object(d.jsx)(E,{userEmail:A,articles:x}):Object(d.jsx)(S,{}):Object(d.jsx)(I,{})}}),Object(d.jsx)(s.a,{path:"*",render:function(){return x.length>0?n?Object(d.jsx)(Y,{userEmail:A,article:x[0]}):Object(d.jsx)(S,{}):Object(d.jsx)(I,{})}})]})})}),W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),i(e),o(e),c(e),l(e)}))};l.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(D,{})}),document.getElementById("root")),W()}},[[60,1,2]]]);
//# sourceMappingURL=main.fff97292.chunk.js.map