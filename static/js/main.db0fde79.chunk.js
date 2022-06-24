(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{50:function(n,e,t){"use strict";t.r(e);var i,a,r=t(1),o=t(20),c=t.n(o),s=t(12),l=t(8),d=t(4),m=t(5),b=t(0),j=m.b.div(i||(i=Object(d.a)(["\n  .heading {\n    font-size: 2.4rem;\n    margin-bottom: 2rem;\n  }\n  li {\n    margin-bottom: 1rem;\n  }\n  a {\n    font-size: 1.8rem;\n  }\n"])));function h(n){var e=n.heading,t=void 0===e?"Col Heading":e,i=n.links,a=void 0===i?[{type:"Link",title:"Home",path:"/home"},{type:"Link",title:"About",path:"/about"}]:i;return Object(b.jsxs)(j,{children:[Object(b.jsx)("h2",{className:"heading",children:t}),Object(b.jsx)("ul",{children:a.map((function(n,e){return Object(b.jsx)("li",{children:"Link"===n.type?Object(b.jsx)(s.b,{to:n.path,children:n.title}):Object(b.jsx)("a",{href:n.path,target:"_blank",rel:"noreferrer",children:n.title})},e)}))})]})}var p,g=m.b.div(a||(a=Object(d.a)(["\n  max-width: 500px;\n  margin: 0 auto;\n  font-size: 1.8rem;\n  line-height: 1.3em;\n  @media only screen and (max-width: 768px) {\n    font-size: 1.4rem;\n  }\n"])));function x(n){var e=n.children;return Object(b.jsx)(g,{className:"para",children:Object(b.jsx)("p",{children:e})})}var u=m.b.div(p||(p=Object(d.a)(["\n  background-color: var(--deep-dark);\n  padding-top: 10rem;\n  .container {\n    display: flex;\n    gap: 3rem;\n  }\n  .footer__col1 {\n    flex: 2;\n  }\n  .footer__col2,\n  .footer__col3,\n  .footer__col4 {\n    flex: 1;\n  }\n  .footer__col1__title {\n    font-size: 3.5rem;\n    margin-bottom: 1rem;\n  }\n  .copyright {\n    background-color: var(--dark-bg);\n    text-align: left;\n    padding: 1rem 0;\n    margin-top: 5rem;\n    .para {\n      margin-left: 0;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .container {\n      flex-direction: column;\n      gap: 0rem;\n      & > div {\n        margin-top: 5rem;\n      }\n    }\n    .footer__col1 .para {\n      max-width: 100%;\n    }\n    .copyright {\n      .container {\n        div {\n          margin-top: 0;\n        }\n      }\n    }\n  }\n"])));function f(){return Object(b.jsxs)(u,{children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"footer__col1",children:[Object(b.jsx)("h1",{className:"footer__col1__title",children:"Elvie Grace"}),Object(b.jsx)(x,{children:"A freelance web designer and developer from Bayugan City, ADS, PH. I, always make websites that have unique designs and also has a good performance rate."})]}),Object(b.jsx)("div",{className:"footer__col2",children:Object(b.jsx)(h,{heading:"Important Links",links:[{title:"Home",path:"/",type:"Link"},{type:"Link",title:"About",path:"/about"},{type:"Link",title:"Projects",path:"/projects"},{type:"Link",title:"Contact",path:"/contact"}]})}),Object(b.jsx)("div",{className:"footer__col3",children:Object(b.jsx)(h,{heading:"Contact Info",links:[{title:"09919470103",path:"tel:09919470103"},{title:"elviegrace.escobia@gmail.com",path:"mailto:elviegrace.escobia@gmail.com"},{title:"Bayugan City, Sta. Irene, Philippines",path:"http://google.com/maps"}]})}),Object(b.jsx)("div",{className:"footer__col4",children:Object(b.jsx)(h,{heading:"social Links",links:[{title:"Facebook",path:"http://facebook.com"},{title:"Twitter",path:"http://twitter.com"},{title:"Instagram",path:"http://instagram.com"}]})})]}),Object(b.jsx)("div",{className:"copyright",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(x,{children:["\xa9 2022 - Elvie Grace | Designed By"," ",Object(b.jsx)("a",{target:"_blank",rel:"noreferrer",href:"http://www.facebook.com",children:"Elvie Grace Escobia"})," "]})})})]})}var _,v,O=t(17),w=t(10),y=m.b.nav(_||(_=Object(d.a)(["\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 1rem 0;\n  background: var(--dark-bg);\n  ul {\n    max-width: 1200px;\n    margin: 0 auto;\n    width: 90%;\n    text-align: center;\n    li {\n      display: inline-block;\n      border-radius: 8px;\n      transition: 0.3s ease background-color;\n      &:hover {\n        background-color: var(--deep-dark);\n      }\n    }\n    a {\n      display: inline-block;\n      font-family: 'RobotoMono Regular';\n      padding: 1rem 2rem;\n      font-size: 2rem;\n      color: var(--gray-1);\n      outline: none;\n    }\n    .active {\n      color: var(--white);\n    }\n  }\n  .mobile-menu-icon {\n    position: absolute;\n    right: 1rem;\n    top: 1rem;\n    width: 4rem;\n    cursor: pointer;\n    display: none;\n    outline: none;\n    * {\n      pointer-events: none;\n    }\n  }\n  .navItems .closeNavIcon {\n    display: none;\n  }\n  @media only screen and (max-width: 768px) {\n    padding: 0;\n    .hide-item {\n      transform: translateY(calc(-100% - var(--top)));\n    }\n    .mobile-menu-icon {\n      display: block;\n    }\n    .navItems {\n      --top: 1rem;\n      transition: 0.3s ease transform;\n      background-color: var(--deep-dark);\n      padding: 2rem;\n      width: 90%;\n      max-width: 300px;\n      border-radius: 12px;\n      position: absolute;\n      right: 1rem;\n      top: var(--top);\n      .closeNavIcon {\n        display: block;\n        width: 3rem;\n        margin: 0 0 0 auto;\n        cursor: pointer;\n        * {\n          pointer-events: none;\n        }\n      }\n      li {\n        display: block;\n        margin-bottom: 1rem;\n      }\n    }\n  }\n"])));function k(){var n=Object(r.useState)(!1),e=Object(O.a)(n,2),t=e[0],i=e[1];return Object(b.jsxs)(y,{children:[Object(b.jsx)("div",{className:"mobile-menu-icon",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:Object(b.jsx)(w.h,{})}),Object(b.jsxs)("ul",{className:t?"navItems":"navItems hide-item",children:[Object(b.jsx)("div",{className:"closeNavIcon",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:Object(b.jsx)(w.c,{})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/",exact:!0,onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/about",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"About"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/projects",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Projects"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/contact",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Contact"})})]})]})}function N(){var n=Object(l.f)().pathname;return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[n]),null}var I=m.b.div(v||(v=Object(d.a)(["\n  margin-top: 2rem;\n  .button {\n    font-size: 2.2rem;\n    background-color: ",";\n    padding: 0.7em 2em;\n    border: 2px solid var(--gray-1);\n    border-radius: 8px;\n    display: inline-block;\n    color: ",";\n  }\n  @media only screen and (max-width: 768px) {\n    .button {\n      font-size: 1.8rem;\n    }\n  }\n"])),(function(n){return n.outline?"transperant":"var(--gray-1)"}),(function(n){return n.outline?"var(--gary-1)":"black"}));function z(n){var e=n.btnText,t=void 0===e?"test":e,i=n.btnLink,a=void 0===i?"test":i,r=n.outline,o=void 0!==r&&r;return Object(b.jsx)(I,{outline:o,className:"button-wrapper",children:Object(b.jsx)(s.b,{className:"button",to:a,children:t})})}var S,B,C=t.p+"static/media/about-page-img.5084564f.png",D=m.b.div(S||(S=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  position: relative;\n  /* gap: 5rem; */\n  margin-top: 3rem;\n  .title {\n    font-size: 2.4rem;\n  }\n  .items {\n    display: flex;\n    gap: 1.5rem;\n    position: absolute;\n    left: 18rem;\n  }\n  .item {\n    background-color: var(--deep-dark);\n    padding: 1rem;\n    border-radius: 8px;\n  }\n  @media only screen and (max-width: 768px) {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n    .items {\n      position: initial;\n      gap: 1rem;\n    }\n    .title {\n      font-size: 2rem;\n    }\n  }\n"])));function M(n){var e=n.title,t=void 0===e?"Title":e,i=n.items,a=void 0===i?["HTML","CSS"]:i;return Object(b.jsxs)(D,{children:[Object(b.jsx)("h1",{className:"title",children:t}),Object(b.jsx)("div",{className:"items",children:a.map((function(n,e){return Object(b.jsx)("div",{className:"item",children:Object(b.jsx)(x,{children:n})},e)}))})]})}var E,L=m.b.div(B||(B=Object(d.a)(["\n  padding: 5rem 0;\n  .contactBanner__wrapper {\n    background-color: var(--deep-dark);\n    border-radius: 12px;\n    padding: 5rem 0rem;\n    text-align: center;\n  }\n  .contactBanner__heading {\n    font-size: 4rem;\n    margin-bottom: 2rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .contactBanner__heading {\n      font-size: 2.8rem;\n    }\n  }\n"])));function A(){return Object(b.jsx)(L,{children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"contactBanner__wrapper",children:[Object(b.jsx)(x,{children:"Have a project in mind"}),Object(b.jsx)("h3",{className:"contactBanner__heading",children:"Let me help you"}),Object(b.jsx)(z,{btnText:"Contact Now",btnLink:"/contact"})]})})})}var P,T=m.b.div(E||(E=Object(d.a)(["\n  padding: 20rem 0 10rem 0;\n\n  .top-section {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 2rem;\n  }\n  .left {\n    flex: 3;\n  }\n  .right {\n    flex: 2;\n  }\n  .about__subheading {\n    font-size: 2.2rem;\n    margin-bottom: 2rem;\n    span {\n      background-color: var(--deep-dark);\n      padding: 0.5rem;\n      border-radius: 8px;\n    }\n  }\n  .about__heading {\n    font-size: 3.6rem;\n    margin-bottom: 3rem;\n  }\n  .about__info {\n    margin-bottom: 4rem;\n    .para {\n      max-width: 100%;\n    }\n  }\n  .right {\n    img {\n      border: 2px solid var(--gray-1);\n    }\n  }\n  .about__info__items {\n    margin-top: 15rem;\n  }\n  .about__info__item {\n    margin-bottom: 10rem;\n  }\n  .about__info__heading {\n    font-size: 3.6rem;\n    text-transform: uppercase;\n  }\n  @media only screen and (max-width: 768px) {\n    padding: 10rem 0;\n    .top-section {\n      flex-direction: column;\n      gap: 5rem;\n    }\n    .about__subheading {\n      font-size: 1.8rem;\n    }\n    .about__heading {\n      font-size: 2.8rem;\n    }\n    .about__info__heading {\n      font-size: 3rem;\n    }\n  }\n"])));function R(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(T,{children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"top-section",children:[Object(b.jsxs)("div",{className:"left",children:[Object(b.jsxs)("p",{className:"about__subheading",children:["Hi, I am ",Object(b.jsx)("span",{children:"Elvie"})]}),Object(b.jsx)("h2",{className:"about__heading",children:"A freelance Web developer"}),Object(b.jsx)("div",{className:"about__info",children:Object(b.jsxs)(x,{children:["I am from Bayugan City, ADS, PH. A place of beauty and. nature. Since my childhood, i love art and design. I always try to design stuff with my unique point of view. I also love to create things that can be usefull to others.",Object(b.jsx)("br",{})," ",Object(b.jsx)("br",{}),"I started coding since I was in high school. Coding is also an art for me. I love it and now I have the opportunity to design along with the coding. I find it really interesting and I enjoyed the process a lot.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"My vision is to make the world a better place. Now almost everything is becoming better than ever. It is time for us to create more good stuff that helps the world to become a better place."]})}),Object(b.jsx)(z,{btnText:"Download CV",btnLink:"#"})]}),Object(b.jsx)("div",{className:"right",children:Object(b.jsx)("img",{src:C,alt:"me"})})]}),Object(b.jsxs)("div",{className:"about__info__items",children:[Object(b.jsxs)("div",{className:"about__info__item",children:[Object(b.jsx)("h1",{className:"about__info__heading",children:"Education"}),Object(b.jsx)(M,{title:"High School",items:["Bayugan National Comprehensive HighSchool"]}),Object(b.jsx)(M,{title:"College",items:["Caraga State University, Philippines"]})]}),Object(b.jsxs)("div",{className:"about__info__item",children:[Object(b.jsx)("h1",{className:"about__info__heading",children:"My Skills"}),Object(b.jsx)(M,{title:"FrontEnd",items:["HTML","CSS","JavaScript"]}),Object(b.jsx)(M,{title:"BackEnd",items:["Node","Express","PHP"]}),Object(b.jsx)(M,{title:"Design",items:["Photoshop","After Effects"]})]}),Object(b.jsxs)("div",{className:"about__info__item",children:[Object(b.jsx)("h1",{className:"about__info__heading",children:"Experiences"}),Object(b.jsx)(M,{title:"2020-2021",items:["junior developer at Wazile Inc."]}),Object(b.jsx)(M,{title:"2021-2022",items:["Front end developer at Wazile Inc. "]}),Object(b.jsx)(M,{title:"2022-",items:["Freelance web Developer"]})]})]})]}),Object(b.jsx)(A,{})]})})}var H,F=m.b.form(P||(P=Object(d.a)(["\n  width: 100%;\n  .form-group {\n    width: 100%;\n    margin-bottom: 2rem;\n  }\n  label {\n    font-size: 1.8rem;\n  }\n  input,\n  textarea {\n    width: 100%;\n    font-size: 2rem;\n    padding: 1.2rem;\n    color: var(--gray-1);\n    background-color: var(--deep-dark);\n    outline: none;\n    border: none;\n    border-radius: 8px;\n    margin-top: 1rem;\n  }\n  textarea {\n    min-height: 250px;\n    resize: vertical;\n  }\n  button[type='submit'] {\n    background-color: var(--gray-1);\n    color: var(--black);\n    font-size: 2rem;\n    display: inline-block;\n    outline: none;\n    border: none;\n    padding: 1rem 4rem;\n    border-radius: 8px;\n    cursor: pointer;\n  }\n"])));function W(){var n=Object(r.useState)(""),e=Object(O.a)(n,2),t=e[0],i=e[1],a=Object(r.useState)(""),o=Object(O.a)(a,2),c=o[0],s=o[1],l=Object(r.useState)(""),d=Object(O.a)(l,2),m=d[0],j=d[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(F,{children:[Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("label",{htmlFor:"name",children:["Your Name",Object(b.jsx)("input",{type:"text",id:"name",name:"name",value:t,onChange:function(n){return i(n.target.value)}})]})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("label",{htmlFor:"email",children:["Your Email",Object(b.jsx)("input",{type:"email",id:"email",name:"email",value:c,onChange:function(n){return s(n.target.value)}})]})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("label",{htmlFor:"message",children:["Your message",Object(b.jsx)("textarea",{type:"text",id:"message",name:"message",value:m,onChange:function(n){return j(n.target.value)}})]})}),Object(b.jsx)("button",{type:"submit",children:"Send"})]})})}var G,K=m.b.div(H||(H=Object(d.a)(["\n  padding: 2rem;\n  background-color: var(--deep-dark);\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  border-radius: 8px;\n  margin-bottom: 2rem;\n  .icon {\n    color: var(--white);\n    background-color: var(--gray-2);\n    padding: 1.3rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n  }\n  svg {\n    width: 3.5rem;\n  }\n"])));function q(n){var e=n.icon,t=void 0===e?Object(b.jsx)(w.j,{}):e,i=n.text,a=void 0===i?"I need text ":i;return Object(b.jsxs)(K,{children:[Object(b.jsx)("div",{className:"icon",children:t}),Object(b.jsx)("div",{className:"info",children:Object(b.jsx)(x,{children:a})})]})}var J,Y=m.b.div(G||(G=Object(d.a)(["\n  text-align: center;\n  p {\n    font-family: 'RobotoMono Regular';\n    font-size: 2rem;\n  }\n  h2 {\n    font-family: 'Montserrat Bold';\n    font-size: 6rem;\n    margin-top: 0.5rem;\n    text-transform: uppercase;\n  }\n  @media only screen and (max-width: 768px) {\n    text-align: center;\n    p {\n      font-size: 1.2rem;\n    }\n    h2 {\n      font-size: 3.6rem;\n    }\n  }\n"])));function V(n){var e=n.subheading,t=void 0===e?"Need Subheading":e,i=n.heading,a=void 0===i?"need heading":i;return Object(b.jsxs)(Y,{className:"section-title",children:[Object(b.jsx)("p",{children:t}),Object(b.jsx)("h2",{children:a})]})}var U=m.b.div(J||(J=Object(d.a)(["\n  padding: 10rem 0;\n  .contactSection__wrapper {\n    display: flex;\n    gap: 5rem;\n    margin-top: 7rem;\n    justify-content: space-between;\n    position: relative;\n  }\n  .contactSection__wrapper::after {\n    position: absolute;\n    content: '';\n    width: 2px;\n    height: 50%;\n    background-color: var(--gray-1);\n    left: 50%;\n    top: 30%;\n    transform: translate(-50%, -50%);\n  }\n  .left {\n    width: 100%;\n    max-width: 500px;\n  }\n  .right {\n    max-width: 500px;\n    width: 100%;\n    border-radius: 12px;\n    /* padding-left: 3rem; */\n  }\n  @media only screen and (max-width: 768px) {\n    .contactSection__wrapper {\n      flex-direction: column;\n    }\n    .contactSection__wrapper::after {\n      display: none;\n    }\n    .left,\n    .right {\n      max-width: 100%;\n    }\n    .right {\n      padding: 4rem 2rem 2rem 2rem;\n    }\n  }\n"])));function Q(){return Object(b.jsx)(U,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(V,{heading:"contact",subheading:"get in touch"}),Object(b.jsxs)("div",{className:"contactSection__wrapper",children:[Object(b.jsxs)("div",{className:"left",children:[Object(b.jsx)(q,{icon:Object(b.jsx)(w.g,{}),text:"09919470103"}),Object(b.jsx)(q,{icon:Object(b.jsx)(w.f,{}),text:"elviegrace@gmail.com"}),Object(b.jsx)(q,{text:"Bayugan City, Philippines"})]}),Object(b.jsx)("div",{className:"right",children:Object(b.jsx)(W,{})})]})]})})}var X,Z=t.p+"static/media/map.5f0e84d1.png",$=m.b.div(X||(X=Object(d.a)(["\n  background: url(",") no-repeat;\n  background-position: center;\n  background-size: cover;\n  min-height: 400px;\n  .container {\n    position: relative;\n    min-height: 400px;\n  }\n  .map__card {\n    position: absolute;\n    right: 10%;\n    bottom: 10%;\n    padding: 2rem;\n    background: var(--deep-dark);\n    width: 100%;\n    max-width: 300px;\n    border-radius: 12px;\n  }\n  .map__card__heading {\n    font-size: 3rem;\n    margin-bottom: 1rem;\n  }\n  .map__card__link {\n    display: inline-block;\n    font-size: 1.6rem;\n    margin-top: 3rem;\n    text-decoration: underline;\n  }\n  @media only screen and (max-width: 768px) {\n    background-position: 80% center;\n  }\n  @media only screen and (max-width: 400px) {\n    .map__card {\n      max-width: none;\n      right: auto;\n    }\n  }\n"])),Z);function nn(){return Object(b.jsx)($,{children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"map__card",children:[Object(b.jsx)("h3",{className:"map__card__heading",children:"Here is me"}),Object(b.jsx)(x,{children:"Bayugan City, Sta. Irene, Philippines"}),Object(b.jsx)("a",{className:"map__card__link",href:"https://www.google.com/maps/place/Santa+Irene,+Bayugan+City,+Agusan+del+Sur/@8.7407769,125.7150674,13z/data=!4m5!3m4!1s0x3301fb48c87c3da9:0xf1963be3cb9f1b1e!8m2!3d8.7374467!4d125.7543363",target:"_blank",rel:"noreferrer",children:"Open in google map"})]})})})}function en(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Q,{}),Object(b.jsx)(nn,{})]})}var tn,an,rn=t.p+"static/media/about-sec-img.280c5907.jpg",on=m.b.div(tn||(tn=Object(d.a)(["\n  padding: 10rem 0;\n  .container {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    text-align: left;\n  }\n  .aboutSection__left,\n  .aboutSection__right {\n    flex: 1;\n  }\n  .section-title {\n    text-align: left;\n  }\n  .para {\n    margin-top: 2rem;\n    margin-left: 0;\n  }\n  .aboutSection__buttons {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 2rem;\n    margin-top: 2rem;\n  }\n  @media only screen and (max-width: 950px) {\n    .aboutSection__left {\n      flex: 4;\n    }\n    .aboutSection__right {\n      flex: 3;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .container {\n      flex-direction: column;\n      text-align: center;\n    }\n    .aboutSection__left,\n    .aboutSection__right {\n      width: 100%;\n    }\n    .aboutSection__right {\n      margin-top: 3rem;\n    }\n    .section-title {\n      text-align: center;\n    }\n    .para {\n      margin: 0 auto;\n      margin-top: 2rem;\n    }\n    .aboutSection__buttons {\n      flex-direction: column;\n      gap: 0rem;\n      .button-wrapper,\n      a {\n        width: 100%;\n        text-align: center;\n      }\n    }\n  }\n"])));function cn(){return Object(b.jsx)(on,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"aboutSection__left",children:[Object(b.jsx)(V,{subheading:"Let me introduce myself",heading:"About Me"}),Object(b.jsx)(x,{children:"An experienced Graphic Designer, a website developer who specializes in HTML websites and Mobile Developer. Have done numerous projects involving Development of both the front and back ends."}),Object(b.jsxs)("div",{className:"aboutSection__buttons",children:[Object(b.jsx)(z,{btnText:"Works",btnLink:"/projects"}),Object(b.jsx)(z,{btnText:"Read More",btnLink:"/about",outline:!0})]})]}),Object(b.jsx)("div",{className:"aboutSection__right",children:Object(b.jsx)("img",{className:"aboutImg",src:rn,alt:"Img"})})]})})}var sn,ln=m.b.div(an||(an=Object(d.a)(["\n  text-align: center;\n  .servicesItem__icon {\n    svg {\n      width: 3rem;\n    }\n  }\n  .servicesItem__title {\n    font-size: 2.5rem;\n    font-family: 'Montserrat SemiBold';\n  }\n  .para {\n    margin-top: 2rem;\n  }\n"])));function dn(n){var e=n.icon,t=void 0===e?Object(b.jsx)(w.e,{}):e,i=n.title,a=void 0===i?"Web Design":i,r=n.desc,o=void 0===r?"Web Design is a design for the website that create a unique look. It invloves everything to create a layout of the page of website's":r;return Object(b.jsxs)(ln,{className:"servicesItem",children:[Object(b.jsx)("div",{className:"servicesItem__icon",children:t}),Object(b.jsx)("div",{className:"servicesItem__title",children:a}),Object(b.jsx)(x,{children:o})]})}var mn=m.b.div(sn||(sn=Object(d.a)(["\n  padding: 10rem 0;\n  .services__allItems {\n    display: flex;\n    gap: 10rem;\n    justify-content: space-between;\n    margin-top: 5rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .services__allItems {\n      flex-direction: column;\n      max-width: 350px;\n      margin: 0 auto;\n      margin-top: 5rem;\n      gap: 5rem;\n    }\n  }\n"])));function bn(){return Object(b.jsx)(mn,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(V,{subheading:"What i will do for you",heading:"Services"}),Object(b.jsxs)("div",{className:"services__allItems",children:[Object(b.jsx)(dn,{icon:Object(b.jsx)(w.e,{}),title:"web design",desc:"I do ui/ux design for the website that helps website to get a unique look."}),Object(b.jsx)(dn,{icon:Object(b.jsx)(w.d,{}),title:"web dev",desc:"I also develop the websites. I create high performance website with blazing fast speed."}),Object(b.jsx)(dn,{icon:Object(b.jsx)(w.i,{}),title:"app Dev",desc:"I develop mobile application. I create mobile app with eye catching ui. "})]})]})})}var jn,hn=t(58),pn=t(55),gn=t(57),xn=t(54),un=t.p+"static/media/projectImg.771236e1.png",fn=m.b.div(jn||(jn=Object(d.a)(["\n  .projectItem__img {\n    width: 100%;\n    height: 400px;\n    border-radius: 12px;\n    overflow: hidden;\n    display: inline-block;\n    border: 3px solid var(--gray-2);\n    img {\n      height: 100%;\n    }\n  }\n  .projectItem__info {\n    margin-top: 1rem;\n    background-color: var(--deep-dark);\n    padding: 1rem;\n    border-radius: 12px;\n  }\n  .projectItem__title {\n    font-size: 2.2rem;\n  }\n  .projectItem__desc {\n    font-size: 1.6rem;\n    font-family: 'RobotoMono Regular';\n    margin-top: 1rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .projectItem__img {\n      height: 350px;\n    }\n  }\n"])));function _n(n){var e=n.img,t=void 0===e?un:e,i=n.title,a=void 0===i?"Project Name":i,r=n.desc,o=void 0===r?"Lorem Ipsum is simply dummy text of the printing and typesetting industry.":r;return Object(b.jsxs)(fn,{children:[Object(b.jsx)(s.b,{to:"/projects",className:"projectItem__img",children:Object(b.jsx)("img",{src:t,alt:"project img"})}),Object(b.jsxs)("div",{className:"projectItem__info",children:[Object(b.jsx)(s.b,{to:"#",children:Object(b.jsx)("h3",{className:"projectItem__title",children:a})}),Object(b.jsx)("p",{className:"projectItem__desc",children:o})]})]})}t(49);var vn,On=t(59),wn=t.p+"static/media/utracker.be1fe64a.jpg",yn=t.p+"static/media/greenctg.e51b3bbd.jpg",kn=t.p+"static/media/cointracker.c9d88d7d.jpg",Nn=t.p+"static/media/cavinimg.f4b68837.jpg",In=[{id:Object(On.a)(),name:"U Tracker",desc:"An application to track your all data from one place. I developed the website and the mobile app",img:wn},{id:Object(On.a)(),name:"Green CTG",desc:"An app to help people to get an overview of how they can make the city beautiful.",img:yn},{id:Object(On.a)(),name:"Web Designer",desc:"This is web design applied to a websites visuals. It involves everything from the colors and fonts to the generl layout of its pages.",img:kn},{id:Object(On.a)(),name:"Elvie's Portfolio",desc:"A portfolio for myself. The portfolio is made using ReactJs and GatsbyJs.",img:Nn},{id:Object(On.a)(),name:"Tracking Soft",desc:"A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.",img:un}];gn.a.use([xn.a]);var zn=m.b.div(vn||(vn=Object(d.a)(["\n  padding: 10rem 0;\n  .projects__allItems {\n    display: flex;\n    gap: 3rem;\n    margin-top: 5rem;\n  }\n  .swiper-container {\n    padding-top: 8rem;\n    max-width: 100%;\n  }\n  .swiper-button-prev,\n  .swiper-button-next {\n    position: absolute;\n    height: 50px;\n    width: 50px;\n    background: var(--deep-dark);\n    z-index: 10;\n    right: 60px;\n    left: auto;\n    top: 0;\n    transform: translateY(50%);\n    color: var(--gray-1);\n    border-radius: 8px;\n  }\n  .swiper-button-next {\n    right: 0;\n  }\n  .swiper-button-prev::after,\n  .swiper-button-next::after {\n    font-size: 2rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .projects__allItems {\n      flex-direction: column;\n      max-width: 400px;\n      margin: 0 auto;\n      margin-top: 7rem;\n      gap: 5rem;\n      .projectItem__img {\n        width: 100%;\n      }\n    }\n  }\n"])));function Sn(){return Object(b.jsx)(zn,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(V,{subheading:"some of my recent works",heading:"Projects"}),Object(b.jsx)("div",{className:"projects__allItems",children:Object(b.jsx)(hn.a,{spaceBetween:30,slidesPerView:1,navigation:!0,breakpoints:{640:{slidesPerView:1},768:{slidesPerView:2},1200:{slidesPerView:3}},children:In.map((function(n,e){if(!(e>=5))return Object(b.jsx)(pn.a,{children:Object(b.jsx)(_n,{title:n.name,img:n.img,desc:n.desc})},n.id)}))})})]})})}var Bn,Cn=t(56),Dn=t(60),Mn=[{id:1,name:"Jay",title:"CEO",org:"Wazile Inc.",desc:"It is a person of commitment. She is really good at what she is doing. I really like her work. Especially the unique point of view of designing."},{id:2,name:"Mitchelle",title:"Co-founder",org:"Wazile Inc.",desc:"Really amazing communication skills. Always understand what I am trying to achieve. Also, her work is really amazing. Do really high-quality work."},{id:3,name:"Sayed",title:"Marketing Head",org:"Wazile Inc.",desc:"Really hard-working person. Deliver the work as promised. Planning to work more with this person."}],En=m.b.div(Bn||(Bn=Object(d.a)(["\n  overflow-x: hidden;\n  padding: 10rem 0;\n  text-align: center;\n  .testimonial__wrapper {\n    position: relative;\n    max-width: 700px;\n    margin: 0 auto;\n  }\n  .testimonial__info {\n    width: 100%;\n    height: fit-content;\n    padding: 3rem;\n    background-color: var(--deep-dark);\n    border-radius: 12px;\n    margin-top: 5rem;\n  }\n  .testimonial__desc {\n    .para {\n      text-align: center;\n    }\n  }\n  .testimonial__name {\n    margin-top: 4rem;\n    font-family: 'Montserrat Bold';\n    font-size: 2.2rem;\n  }\n  .testimonial__title {\n    font-size: 1.6rem;\n    margin-top: 0.3rem;\n  }\n  .arrows {\n    margin-top: 2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    svg {\n      width: 30px;\n      pointer-events: none;\n    }\n    .next,\n    .prev {\n      margin: 0 0.5rem;\n      width: fit-content;\n      background-color: var(--deep-dark);\n      padding: 0.5rem 2rem;\n      border-radius: 8px;\n      cursor: pointer;\n    }\n  }\n  .fade-enter {\n    opacity: 0;\n    transform: scale(0.96);\n    z-index: 1;\n  }\n  .fade-enter-active {\n    opacity: 1;\n    transform: scale(1);\n    transition: 250ms ease-in;\n    transition-property: transform, opacity;\n    z-index: 1;\n  }\n  .fade-exit {\n    transform: scale(1);\n    opacity: 1;\n  }\n  .fade-exit-active {\n    opacity: 0;\n    transform: scale(0.96);\n    transition: 200ms ease-in;\n    transition-property: transform, opacity;\n  }\n"])));function Ln(){var n=Object(r.useState)(0),e=Object(O.a)(n,2),t=e[0],i=e[1],a=Mn[t];function o(){i(t>=Mn.length-1?0:function(n){return n+1})}function c(){i(0===t?Mn.length-1:function(n){return n-1})}return Object(b.jsx)(En,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(V,{subheading:"see what our clients say about us",heading:"Testimonials"}),Object(b.jsx)("div",{className:"testimonial__wrapper",children:Object(b.jsx)(Cn.a,{component:null,children:Object(b.jsx)(Dn.a,{timeout:300,classNames:"fade",children:Object(b.jsxs)("div",{className:"testimonial__info",children:[Object(b.jsx)("div",{className:"testimonial__desc",children:Object(b.jsx)(x,{children:a.desc})}),Object(b.jsx)("h2",{className:"testimonial__name",children:a.name}),Object(b.jsxs)("p",{className:"testimonial__title",children:[a.title,", ",Object(b.jsx)("br",{})," ",a.org]})]})},a.id)})}),Object(b.jsxs)("div",{className:"arrows",children:[Object(b.jsx)("div",{className:"prev",onClick:c,role:"button",tabIndex:0,onKeyDown:c,children:Object(b.jsx)(w.a,{})}),Object(b.jsx)("div",{className:"next",onClick:o,role:"button",tabIndex:0,onKeyDown:o,children:Object(b.jsx)(w.b,{})})]})]})})}var An,Pn,Tn=t.p+"static/media/hero.cca05028.png",Rn=t.p+"static/media/social-media-arrow.f5e093ce.svg",Hn=t.p+"static/media/scroll-down-arrow.b013ca45.svg",Fn=m.b.div(An||(An=Object(d.a)(["\n  .hero {\n    height: 100vh;\n    min-height: 1000px;\n    width: 100%;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n  }\n  .hero__heading {\n    font-size: 2rem;\n    margin-bottom: -4rem;\n    position: relative;\n    span {\n      display: inline-block;\n      width: 100%;\n    }\n    .hero__name {\n      font-family: 'Montserrat SemiBold';\n      font-size: 7rem;\n      color: var(--white);\n    }\n  }\n  .hero__img {\n    max-width: 900px;\n    width: 100%;\n    height: 600px;\n    margin: 0 auto;\n    border: 2px solid var(--gray-1);\n  }\n  .hero__info {\n    margin-top: -18rem;\n  }\n  .hero__social,\n  .hero__scrollDown {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    position: absolute;\n\n    bottom: 20px;\n    width: 50px;\n  }\n  .hero__social {\n    left: 50px;\n  }\n  .hero__scrollDown {\n    right: 50px;\n  }\n\n  .hero__social__indicator,\n  .hero__scrollDown {\n    width: 50px;\n    p {\n      font-size: 1.6rem;\n      transform: translateY(-70px) rotate(90deg);\n      letter-spacing: 0.7rem;\n      text-transform: uppercase;\n    }\n    img {\n      max-height: 45px;\n      width: 16px;\n      margin: 0 auto;\n      object-fit: contain;\n    }\n  }\n  .hero__scrollDown {\n    img {\n      max-height: 70px;\n    }\n  }\n\n  .hero__social__text {\n    ul {\n      li {\n        margin-bottom: 1rem;\n        a {\n          display: inline-block;\n          font-size: 1.6rem;\n          transform: rotate(-90deg);\n          letter-spacing: 5px;\n          margin-bottom: 2rem;\n        }\n      }\n    }\n  }\n\n  @media only screen and (max-width: 768px) {\n    .hero {\n      min-height: 750px;\n    }\n    .hero__heading {\n      font-size: 1.4rem;\n      margin-bottom: -3rem;\n      .hero__name {\n        font-size: 4.5rem;\n      }\n    }\n    .hero__img {\n      height: 300px;\n    }\n    .hero__info {\n      margin-top: 3rem;\n    }\n    .hero__social {\n      left: 0px;\n      bottom: -15%;\n      width: 20px;\n      .hero__social__indicator {\n        width: 20px;\n        p {\n          font-size: 1.2rem;\n        }\n        img {\n          max-height: 22px;\n        }\n      }\n      .hero__social__text {\n        ul {\n          li {\n            a {\n              font-size: 1.2rem;\n              margin-bottom: 1rem;\n            }\n          }\n        }\n      }\n    }\n    .hero__scrollDown {\n      right: 0;\n      width: 20px;\n      gap: 1rem;\n      p {\n        font-size: 1.3rem;\n      }\n    }\n  }\n"])));function Wn(){return Object(b.jsx)(Fn,{children:Object(b.jsx)("div",{className:"hero",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("h1",{className:"hero__heading",children:[Object(b.jsx)("span",{children:"Hello, This is"}),Object(b.jsx)("span",{className:"hero__name",children:" Elvie Grace Escobia "})]}),Object(b.jsx)("div",{className:"hero__img",children:Object(b.jsx)("img",{src:Tn,alt:""})}),Object(b.jsxs)("div",{className:"hero__info",children:[Object(b.jsx)(x,{children:"A 4th year college student from Caraga State University, taking up, Bachelor of science in Information Technology."}),Object(b.jsx)(z,{btnText:"see my works",btnLink:"/projects"})]}),Object(b.jsxs)("div",{className:"hero__social",children:[Object(b.jsxs)("div",{className:"hero__social__indicator",children:[Object(b.jsx)("p",{children:"Follow"}),Object(b.jsx)("img",{src:Rn,alt:"icon"})]}),Object(b.jsx)("div",{className:"hero__social__text",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"http://www.facebook.com/profile.php?id=100009961987023",target:"_blank",rel:"noreferrer",children:"FB"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"http://twitter.com/",target:"_blank",rel:"noreferrer",children:"TW"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"http://instagram.com/elviegrace_escobia",target:"_blank",rel:"noreferrer",children:"IG"})})]})})]}),Object(b.jsxs)("div",{className:"hero__scrollDown",children:[Object(b.jsx)("p",{children:"Scroll"}),Object(b.jsx)("img",{src:Hn,alt:"ScrollDown Arrow"})]})]})})})}function Gn(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(Wn,{}),Object(b.jsx)(cn,{}),Object(b.jsx)(bn,{}),Object(b.jsx)(Sn,{}),Object(b.jsx)(Ln,{}),Object(b.jsx)(A,{})]})}var Kn,qn=m.b.div(Pn||(Pn=Object(d.a)(["\n  padding: 10rem 0;\n  .projects__allItems {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 5rem;\n    margin-top: 5rem;\n  }\n  .projects__searchBar {\n    position: relative;\n    width: 300px;\n    margin-top: 5rem;\n  }\n  .projects__searchBar input {\n    width: 100%;\n    font-size: 2rem;\n    padding: 0.8rem;\n    color: var(--black);\n    border-radius: 6px;\n    outline: none;\n    border: none;\n  }\n  .projects__searchBar .searchIcon {\n    position: absolute;\n    width: 2rem;\n\n    right: 1rem;\n  }\n  .projects__searchBar .searchIcon path {\n    color: var(--deep-dark);\n  }\n  @media only screen and (max-width: 768px) {\n    .projects__searchBar,\n    .projects__searchBar form,\n    .projects__searchBar input {\n      width: 100%;\n    }\n  }\n"])));function Jn(){var n=Object(r.useState)(""),e=Object(O.a)(n,2),t=e[0],i=e[1],a=Object(r.useState)(In),o=Object(O.a)(a,2),c=o[0],s=o[1];Object(r.useEffect)((function(){""!==t&&s((function(){return In.filter((function(n){return n.name.toLowerCase().match(t.toLowerCase())}))}))}),[t]);return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(qn,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(V,{heading:"Projects",subheading:"some of my recent works"}),Object(b.jsx)("div",{className:"projects__searchBar",children:Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{type:"text",value:t,onChange:function(n){n.preventDefault(),i(n.target.value),!n.target.value.length>0&&s(In)},placeholder:"Project Name"}),Object(b.jsx)(w.k,{className:"searchIcon"})]})}),Object(b.jsx)("div",{className:"projects__allItems",children:c.map((function(n){return Object(b.jsx)(_n,{title:n.name,desc:n.desc,img:n.img},n.id)}))})]})})})}function Yn(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(s.a,{children:[Object(b.jsx)(k,{}),Object(b.jsx)(N,{}),Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/about",children:Object(b.jsx)(R,{})}),Object(b.jsx)(l.a,{path:"/contact",children:Object(b.jsx)(en,{})}),Object(b.jsx)(l.a,{path:"/projects",children:Object(b.jsx)(Jn,{})}),Object(b.jsx)(l.a,{path:"/",children:Object(b.jsx)(Gn,{})})]}),Object(b.jsx)(f,{})]})})}var Vn,Un=Object(m.a)(Kn||(Kn=Object(d.a)(["\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n  :root{\n    --dark-bg: #262626;\n    --gray-1: #BCB4B4;\n    --deep-dark: #1E1E1E;\n    --gray-2: #363636;\n    --white : white;\n    --black: black;\n  }\n  html{\n    font-size: 10px;\n    font-family: 'Roboto Mono';\n    background-color: var(--dark-bg);\n  }\n  ul,li{\n    list-style: none;\n  }\n  a{\n    text-decoration: none;\n  }\n  img, svg{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  button{\n    outline: none\n  }\n  .container {\n    max-width: 1200px;\n    width: 90%;\n    margin: 0 auto;\n  }\n/* Smooth Scroll  */\n  [data-scrollbar] {\n    height: 100vh;\n    overflow: hidden;\n    background-color: var(--gray-1);\n    .scroll-content {\n      background-color: var(--dark-bg);\n    }\n    .scrollbar-track.scrollbar-track-y {\n      background: var(--deep-dark);\n      .scrollbar-thumb-y {\n        background: var(--gray-1);\n      }\n    }\n  }\n"]))),Qn=t.p+"static/media/RobotoMono-Regular.418a8f9f.ttf",Xn=t.p+"static/media/Montserrat-SemiBold.fa8441f3.ttf",Zn=t.p+"static/media/Montserrat-Bold.079ca05d.ttf",$n=Object(m.a)(Vn||(Vn=Object(d.a)(["\n  @font-face {\n    font-family: 'RobotoMono Regular';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat SemiBold';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat Bold';\n    src: url(",");\n    font-style: normal;\n  }\n  html{\n    font-family: 'RobotoMono Regular';\n    color: var(--gray-1);\n  }\n  *{\n    font-family: 'RobotoMono Regular';\n    color: var(--gray-1);\n  }\n  h1,h2,h3,h4,h5,h6{\n    font-family: 'Montserrat SemiBold'\n  }\n\n"])),Qn,Xn,Zn);c.a.render(Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Un,{}),Object(b.jsx)($n,{}),Object(b.jsx)(Yn,{})]}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.db0fde79.chunk.js.map