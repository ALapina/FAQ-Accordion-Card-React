(this.webpackJsonpfaq=this.webpackJsonpfaq||[]).push([[0],{10:function(e,t,s){},11:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s(3),i=s.n(n),o=s(4),r=s(0),c=function(e){var t=e.showDescription,s=e.ariaExpanded,a=e.fontWeightBold,n=e.item,i=e.index,o=e.onClick;return Object(r.jsxs)("div",{className:"faq__question",children:[Object(r.jsx)("dt",{children:Object(r.jsx)("button",{"aria-expanded":s,"aria-controls":"faq".concat(i+1,"_desc"),"data-qa":"faq__question-button",className:"faq__question-button ".concat(a),onClick:o,children:n.question})}),Object(r.jsx)("dd",{children:Object(r.jsx)("p",{id:"faq".concat(i+1,"_desc"),"data-qa":"faq__desc",className:"faq__desc ".concat(t),children:n.answer})})]},n.question)},l=function(e){var t=e.questionsAnswers,s=Object(a.useState)(1),n=Object(o.a)(s,2),i=n[0],l=n[1],d=t.map((function(e,t){var s=t===i?"show-description":"",a=t===i?"font-weight-bold":"",n=t===i?"true":"false";return Object(r.jsx)(c,{showDescription:s,fontWeightBold:a,ariaExpanded:n,item:e,index:t,onClick:function(){l(t)}})}));return Object(r.jsxs)("div",{className:"faq",children:[Object(r.jsx)("h1",{className:"faq__title",children:"FAQ"}),Object(r.jsx)("dl",{className:"faq__list",children:d})]})},d=s.p+"static/media/illustration-box-desktop.ec1ba14b.svg",u=s.p+"static/media/illustration-woman-online-desktop.843eb114.svg",m=s.p+"static/media/illustration-woman-online-mobile.0ec5a893.svg",b=[{question:"How many team members can I invite?",answer:"You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."},{question:"What is the maximum file upload size?",answer:"No more than 2GB. All files in your account must fit your allotted storage space."},{question:"How do I reset my password?",answer:"Click \u201cForgot password\u201d from the login page or \u201cChange password\u201d from your profile page. A reset link will be emailed to you."},{question:"Can I cancel my subscription?",answer:"Yes! Send us a message and we\u2019ll process your request no questions asked."},{question:"Do you provide additional support?",answer:"Chat and email support is available 24/7. Phone lines are open during normal business hours."}],h=function(){return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"component",children:[Object(r.jsxs)("div",{className:"illustration",children:[Object(r.jsx)("img",{src:d,alt:"illustration with box",className:"illustration__box"}),Object(r.jsx)("img",{className:"illustration__woman-desktop",src:u,alt:"illustration with woman"}),Object(r.jsx)("img",{className:"illustration__woman-mobile",src:m,alt:"illustration with woman"})]}),Object(r.jsx)(l,{questionsAnswers:b})]}),Object(r.jsxs)("div",{className:"attribution",children:["Challenge by",Object(r.jsx)("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank",rel:"noreferrer",children:"Frontend Mentor."}),"Coded by ",Object(r.jsx)("a",{href:"https://github.com/ALapina",children:" Anna Lapina."})]})]})};s(10);i.a.render(Object(r.jsx)(h,{}),document.querySelector("#root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.efc0a4b4.chunk.js.map