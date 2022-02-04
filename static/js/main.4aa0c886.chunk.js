(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],{12:function(n,e,t){n.exports=t(19)},19:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(8),c=t.n(o),u=t(1),l=t(3),i=t(2);function f(){var n=Object(i.a)(["\n  font-size: 20px;\n  margin: 50px;\n  text-align: center;\n  align-self: center;\n"]);return f=function(){return n},n}function s(){var n=Object(i.a)(["\n  font-size: 30px;\n  background-color: ",";\n  padding: 5px 15px;\n  border: solid 4px ",";\n  border-radius: 10px;\n"]);return s=function(){return n},n}function m(){var n=Object(i.a)(["\n  border: solid 4px ",";\n  background-color: peachpuff;\n  border-radius: 10px;\n"]);return m=function(){return n},n}function p(){var n=Object(i.a)(["\n  display: inline-block;\n  background-color: ",";\n  text-transform: uppercase;\n  padding: 10px;\n  border: solid 3px ",";\n  border-radius: 10px;\n  margin-top: 20px;\n\n  &:hover {\n    cursor: pointer;\n    filter: brightness(110%);\n  }\n\n  &:active {\n    filter: brightness(120%);\n  }\n"]);return p=function(){return n},n}function d(){var n=Object(i.a)(["\n  padding: 5px;\n  border-radius: 10px;\n  border: solid 2px ",";\n"]);return d=function(){return n},n}function b(){var n=Object(i.a)(["\n  font-size: 10px;\n  color: ",";\n"]);return b=function(){return n},n}function g(){var n=Object(i.a)(["\n  display: inline-block;\n  text-transform: uppercase;\n  padding: 5px 10px;\n  font-size: 20px;\n"]);return g=function(){return n},n}function h(){var n=Object(i.a)(["\n  font-size: 15px;\n  color: ",";\n"]);return h=function(){return n},n}function v(){var n=Object(i.a)(["\n  margin: 10px;\n  text-align: center;\n  align-self: center;\n  width: 100%;\n"]);return v=function(){return n},n}var x=u.c.form(v()),E=u.c.p(h(),(function(n){return n.theme.color.tundora})),y=u.c.span(g()),j=u.c.span(b(),(function(n){return n.theme.color.tundora})),k=u.c.select(d(),(function(n){return n.theme.color.gray})),w=u.c.button(p(),(function(n){return n.theme.color.tacha}),(function(n){return n.theme.color.black})),O=u.c.fieldset(m(),(function(n){return n.theme.color.black})),z=u.c.legend(s(),(function(n){return n.theme.color.tacha}),(function(n){return n.theme.color.black})),S=u.c.div(f());function B(){var n=Object(i.a)(["\n  font-size: 30px;\n  margin: 10px;\n"]);return B=function(){return n},n}var C=u.c.p(B()),F=function(n){var e=n.result;return a.a.createElement(C,null,void 0!==e&&a.a.createElement(a.a.Fragment,null,e.sourceAmount.toFixed(2),"\xa0",e.currencyHave,"\xa0= ","",e.targetAmount.toFixed(2),"\xa0",e.currencyWant,"\xa0"))},A=function(){var n=Object(r.useState)({rates:"",date:""}),e=Object(l.a)(n,2),t=e[0],a=e[1];return Object(r.useEffect)((function(){setTimeout((function(){fetch("https://api.exchangerate.host/latest").then((function(n){if(!n.ok)throw new Error(n.statusText);return n})).then((function(n){return n.json()})).then((function(n){var e=n.rates,t=n.date;a({rates:e,date:t})})).catch((function(n){return console.error(n)}))}),1e3)}),[]),t},D=function(){var n=A().rates,e=Object.keys(A().rates),t=Object(r.useState)(""),o=Object(l.a)(t,2),c=o[0],u=o[1],i=Object(r.useState)("PLN"),f=Object(l.a)(i,2),s=f[0],m=f[1],p=Object(r.useState)("EUR"),d=Object(l.a)(p,2),b=d[0],g=d[1],h=Object(r.useState)(),v=Object(l.a)(h,2),B=v[0],C=v[1];return a.a.createElement(x,{onSubmit:function(e){e.preventDefault(),function(e,t,r){C({sourceAmount:+r,currencyHave:e,targetAmount:r*n[t]/n[e],currencyWant:t})}(s,b,c)}},a.a.createElement(O,null,a.a.createElement(z,null,"Wymiana waluty"),n?a.a.createElement(a.a.Fragment,null,a.a.createElement(E,null,"Pole oznaczone * musi zosta\u0107 wype\u0142nione"),a.a.createElement("p",null,a.a.createElement("label",null,a.a.createElement(y,null,"wymiana z:",a.a.createElement(j,null," (wybierz walut\u0119)")),a.a.createElement(k,{value:s,onChange:function(n){var e=n.target;return m(e.value)},name:"currencyHave"},e.map((function(n){return a.a.createElement("option",{key:n,value:n},n)}))))),a.a.createElement("p",null,a.a.createElement("label",null,a.a.createElement(y,null,"wymiana na:",a.a.createElement(j,null,"(wybierz walut\u0119)")),a.a.createElement(k,{value:b,onChange:function(n){var e=n.target;return g(e.value)},name:"currencyWant"},e.map((function(n){return a.a.createElement("option",{key:n,value:n},n)}))))),a.a.createElement("p",null,a.a.createElement("label",null,a.a.createElement(y,null,"Podaj kwot\u0119*: "),a.a.createElement(k,{as:"input",value:c,onChange:function(n){var e=n.target;return u(e.value)},name:"value",type:"number",required:!0,step:"0.01"}))),a.a.createElement(w,null,"przelicz"),a.a.createElement(F,{result:B})):a.a.createElement(S,null,"error"===n?"Ojojoj... wygl\u0105da na to, \u017ce wystapi\u0142 b\u0142\u0105d, chyba masz problem z internetem, je\u015bli nie - spr\xf3buj p\xf3\u017aniej":"Poczekaj chwilk\u0119, \u0142adujemy teraz dane z Europejskiego Banku Centralnego ")))};function M(){var n=Object(i.a)(["\n  margin: 10px;\n  margin-bottom: 80px;\n  padding: 20px 0;\n  font-size: 40px;\n  text-transform: uppercase;\n  text-align: center;\n  letter-spacing: 3px;\n  background-color: ",";\n  border-radius: 10px;\n"]);return M=function(){return n},n}var W=u.c.h1(M(),(function(n){return n.theme.color.luxorGold})),H=function(n){var e=n.title;return a.a.createElement("header",{className:"header"},a.a.createElement(W,null,e))};function I(){var n=Object(i.a)(["\n  font-size: 15px;\n  color: ",";\n"]);return I=function(){return n},n}function N(){var n=Object(i.a)(["\n  text-decoration: none;\n  color: ",";\n  font-weight: bold;\n  font-style: italic;\n  &:hover {\n    cursor: pointer;\n    color: ",";\n  }\n  &:active {\n    color: ",";\n  }\n"]);return N=function(){return n},n}function P(){var n=Object(i.a)(["\n  padding: 10px;\n  text-align: center;\n  font-size: 20px;\n  background-color: peachpuff;\n  margin: 10px;\n  border: 3px solid ",";\n  border-radius: 10px;\n"]);return P=function(){return n},n}var R=u.c.p(P(),(function(n){return n.theme.color.black})),U=u.c.a(N(),(function(n){return n.theme.color.black}),(function(n){return n.theme.color.eperor}),(function(n){return n.theme.color.boulder})),_=(u.c.span(I(),(function(n){return n.theme.color.gray})),function(){return a.a.createElement("section",null,a.a.createElement(R,null,"Kursy walut pochodz\u0105 ze strony:",a.a.createElement(U,{href:"https://exchangerate.host/#/",target:"_blank",rel:"noreferrer noopener"}," ","exchangerate.host"),". S\u0105 publikowane przez Europejski Bank Centralny z dnia: \xa0",A().date))});function G(){var n=Object(i.a)(["\n  display: flex;\n  align-self: start;\n  flex-direction: column;\n"]);return G=function(){return n},n}var J=u.c.main(G());function L(){var n=Object(i.a)(["\n  font-family: monospace;\n  font-size: 12px;\n  align-self: flex-end;\n  padding: 10px;\n  margin: 10px;\n  display: inline-block;\n  background-color: ",";\n\n  @media (max-width: ","px) {\n    text-align: center;\n  }\n"]);return L=function(){return n},n}var T=u.c.p(L(),(function(n){return n.theme.color.brighterBlack}),(function(n){return n.theme.breakpoint.mobileMax})),q=function(){var n=function(){var n=Object(r.useState)(new Date),e=Object(l.a)(n,2),t=e[0],a=e[1];return Object(r.useEffect)((function(){var n=setInterval((function(){a(new Date)}),1e3);return function(){clearInterval(n)}}),[]),t}();return a.a.createElement(T,null,"Aktualna data i godzina: ",function(n){return n.toLocaleString(void 0,{weekday:"long",hour:"2-digit",minute:"2-digit",second:"2-digit",day:"numeric",month:"long"})}(n))},K=function(n){var e=n.children;return a.a.createElement(J,null,a.a.createElement(q,null),e)};function $(){var n=Object(i.a)(["\n  max-width: 1000px;\n  margin: 0 auto;\n"]);return $=function(){return n},n}var Q=u.c.div($()),V=function(n){var e=n.children;return a.a.createElement(Q,null,e)};var X=function(){return a.a.createElement(V,null,a.a.createElement(H,{title:"kalkulator walutowy"}),a.a.createElement(K,null,a.a.createElement(D,null),a.a.createElement(_,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(){var n=Object(i.a)(["\nhtml {\n  box-sizing: border-box;\n  font-family: \"Roboto\", sans-serif;\n};\n*,\n::after,\n::before {\n  box-sizing: inherit;\n};\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n};\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n};\n#root {\n  background-image: url(https://cdn.pixabay.com/photo/2020/06/25/06/32/money-5338733__340.jpg);\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  overflow: auto;\n  height: 100vh;\n};\n\n"]);return Y=function(){return n},n}var Z=Object(u.b)(Y());c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(u.a,{theme:{color:{luxorGold:"#AC8839",brighterBlack:"#dddddd",frangipani:"#FFDAB9",tundora:"#444444",tacha:"#D4B268",black:"#000000",eperor:"#555555",boulder:"#777777",gray:"#888888"},breakpoint:{mobileMax:414}}},a.a.createElement(Z,null),a.a.createElement(X,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.4aa0c886.chunk.js.map