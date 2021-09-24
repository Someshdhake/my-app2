(this["webpackJsonpmy-app2"]=this["webpackJsonpmy-app2"]||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(12),l=a.n(n),r=(a(19),a(7)),o=(a(20),a(5)),i=a.n(o),d=a(6),b=a(0);function h(e){return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(d.b,{className:"navbar-brand",to:"/",children:e.title}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(d.b,{className:"nav-link","aria-current":"page",to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(d.b,{className:"nav-link",to:"/About",children:e.aboutUs})})]}),Object(b.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(b.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(b.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable DarkMode"})]})]})]})})}function j(e){var t=Object(c.useState)(""),a=Object(r.a)(t,2),s=a[0],n=a[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"container my-2",style:{color:"dark"===e.mode?"white":"black"},children:[Object(b.jsx)("h1",{className:"mb-4",children:e.heading}),Object(b.jsx)("div",{className:"mb-2",children:Object(b.jsx)("textarea",{value:s,onChange:function(e){n(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#13466e":"white",color:"dark"===e.mode?"white":"black"},className:"form-control",id:"myBox",rows:"8"})}),Object(b.jsx)("button",{disabled:0===s.length,className:"btn btn-sm btn-primary mx-1 my-1",onClick:function(){var t=s.toUpperCase();n(t),e.showAlert("Converted to uppercase!","success")},children:"Convert to Uppercase"}),Object(b.jsx)("button",{disabled:0===s.length,className:"btn btn-sm btn-primary mx-1 my-1",onClick:function(){var t=s.toLowerCase();n(t),e.showAlert("Converted to lowercase!","success")},children:"Convert to Lowercase"}),Object(b.jsx)("button",{disabled:0===s.length,className:"btn btn-sm btn-primary mx-1 my-1",onClick:function(){var t=s.split(/[ ]+/);n(t.join(" ")),e.showAlert("Extra spaces removed!","success")},children:"Remove Extra Spaces"}),Object(b.jsx)("button",{disabled:0===s.length,className:"btn btn-sm btn-primary mx-1 my-1",onClick:function(){navigator.clipboard.writeText(s),e.showAlert("Copied to Clipboard!","success")},children:"Copy Text"}),Object(b.jsx)("button",{disabled:0===s.length,className:"btn btn-sm btn-primary mx-1 my-1",onClick:function(){n(""),e.showAlert("Text cleared!","success")},children:"Clear Text"})]}),Object(b.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(b.jsx)("h2",{children:"Your Text Summary"}),Object(b.jsx)("p",{children:Object(b.jsxs)("b",{children:[s.split(/\s+/).filter((function(e){return 0!==e.length})).length," words and ",s.length," characters"]})}),Object(b.jsx)("p",{children:Object(b.jsxs)("b",{children:[.08*s.split("").length," Minutes to read"]})}),Object(b.jsx)("h2",{children:"Preview"}),Object(b.jsx)("p",{children:s.length>0?s:"Nothing to preview!"})]})]})}h.prototype={title:i.a.string.isRequired,aboutUs:i.a.string},h.defaultProps={title:"Set title here",aboutUs:"About text here"};var p=function(e){return Object(b.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(b.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(b.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})})};function m(e){var t={color:"dark"===e.mode?"white":"#042743",backgroundColor:"dark"===e.mode?"rgb(36 74 104)":"white",border:".1px solid",borderColor:"white"};return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{className:"my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:"About Us"}),Object(b.jsxs)("div",{className:"accordion",id:"accordionPanelsStayOpenExample",children:[Object(b.jsxs)("div",{className:"accordion-item",children:[Object(b.jsx)("h2",{className:"accordion-header",id:"panelsStayOpen-headingOne",children:Object(b.jsx)("button",{className:"accordion-button",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapseOne","aria-expanded":"true","aria-controls":"panelsStayOpen-collapseOne",children:Object(b.jsx)("strong",{children:"Analyze your Text"})})}),Object(b.jsx)("div",{id:"panelsStayOpen-collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"panelsStayOpen-headingOne",children:Object(b.jsx)("div",{className:"accordion-body",style:t,children:"Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or"})})]}),Object(b.jsxs)("div",{className:"accordion-item",style:t,children:[Object(b.jsx)("h2",{className:"accordion-header",id:"panelsStayOpen-headingTwo",children:Object(b.jsx)("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapseTwo","aria-expanded":"false","aria-controls":"panelsStayOpen-collapseTwo",children:Object(b.jsx)("strong",{children:"Free to Use"})})}),Object(b.jsx)("div",{id:"panelsStayOpen-collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"panelsStayOpen-headingTwo",children:Object(b.jsx)("div",{className:"accordion-body",style:t,children:"TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit."})})]}),Object(b.jsxs)("div",{className:"accordion-item",children:[Object(b.jsx)("h2",{className:"accordion-header",id:"panelsStayOpen-headingThree",children:Object(b.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapseThree","aria-expanded":"false","aria-controls":"panelsStayOpen-collapseThree",style:t,children:Object(b.jsx)("strong",{children:"Browser Compatible"})})}),Object(b.jsx)("div",{id:"panelsStayOpen-collapseThree",className:"accordion-collapse collapse","aria-labelledby":"panelsStayOpen-headingThree",children:Object(b.jsx)("div",{className:"accordion-body",style:t,children:"This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc."})})]})]})]})}var u=a(2);var x=function(){var e=Object(c.useState)("light"),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(null),l=Object(r.a)(n,2),o=l[0],i=l[1],x=function(e,t){i({msg:e,type:t}),setTimeout((function(){i(null)}),1500)};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(h,{title:"TextUtils",aboutUs:"About Us",mode:a,toggleMode:function(){"light"===a?(s("dark"),document.body.style.backgroundColor="#042743",x("Dark mode has been enabled","success")):(s("light"),document.body.style.backgroundColor="white",x("Light mode has been enabled","success"))}}),Object(b.jsx)(p,{alert:o}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{exact:!0,path:"/about",children:Object(b.jsx)(m,{mode:a})}),Object(b.jsx)(u.a,{exact:!0,path:"/",children:Object(b.jsx)(j,{showAlert:x,heading:"Try TextUtils - word counter, character counter, remove extra spaces",mode:a})})]})})]})})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,l=t.getTTFB;a(e),c(e),s(e),n(e),l(e)}))};l.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),O()}},[[30,1,2]]]);
//# sourceMappingURL=main.09c0cdd1.chunk.js.map