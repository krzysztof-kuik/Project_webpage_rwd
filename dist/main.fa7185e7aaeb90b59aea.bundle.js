!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){},,function(e,t,n){"use strict";n.r(t);n(0),nav_bar;let r=$(".nav-icon-open"),o=$(".nav-icon-close"),c=$(".nav-bar");console.log(r,o,c),r.on("click",function(){console.log("test"),$(this).css("visibility","hidden"),o.css("visibility","visible"),c.slideDown()}),o.on("click",function(){$(this).css("visibility","hidden"),r.css("visibility","visible"),c.slideUp()});calc;let i=document.getElementById("accountancyCheckboc"),l=document.getElementById("terminalCheckbox"),u=document.getElementById("numberOfProducts"),s=document.getElementById("numberOfOrders"),d=document.querySelector(".dropDownContainer"),a=(d.children,document.querySelector(".dropdownList")),p=[...a.children],y=d.querySelector("img"),f=35,m=5,g=parseInt(document.querySelector(".professional .package-option__price").innerText.slice(1)),v=parseInt(document.querySelector(".professional .package-option__price").innerText.slice(1)),x=parseInt(document.querySelector(".premium .package-option__price").innerText.slice(1)),b=document.getElementById("products"),S=document.getElementById("orders"),T=document.getElementById("package"),q=document.getElementById("accountancy"),_=document.getElementById("terminal"),E=document.getElementById("total").querySelector(".price"),k=document.querySelector(".dropDownLabel"),I=document.querySelector(".dropDownContainer img"),L=[k,I],h=0,w=0,B=0,O="Podstawowy";function j(){let e=h+w+B;i.checked&&(e+=f),l.checked&&(e+=m),E.innerText=`$${e}`}b.querySelector(".calc_description").innerText="0 * $0.5",b.querySelector(".price").innerText="$0",S.querySelector(".calc_description").innerText="$0 * $0.25",S.querySelector(".price").innerText="$0",E.innerText="$0",q.querySelector(".price").innerText=`$${f}`,_.querySelector(".price").innerText=`$${m}`,T.querySelector(".calc_description").innerText=O,T.querySelector(".price").innerText=`$${g}`,u.addEventListener("input",function(){b.querySelector(".calc_description").innerText=`${u.value} * $0.5`,b.querySelector(".price").innerText=`$${.5*u.value}`,h=.5*u.value,j()}),s.addEventListener("input",function(){S.querySelector(".calc_description").innerText=`${s.value} * $0.25`,S.querySelector(".price").innerText=`$${.25*s.value}`,w=.25*s.value,j()}),L.forEach(function(e){e.addEventListener("click",function(){y.classList.contains("dropped")?(y.style.transform="rotate(-180deg)",y.classList.toggle("dropped"),a.style.opacity="0",a.style.zIndex="-1"):(y.style.transform="rotate(0)",y.classList.toggle("dropped"),a.style.opacity="1",a.style.zIndex="1")})}),p.forEach(function(e){e.addEventListener("click",function(){O=e.innerText,B="podstawowy"===O.toLowerCase()?g:"profesjonalny"===O.toLowerCase()?v:x,T.querySelector(".calc_description").innerText=e.innerText,T.querySelector(".price").innerText=`$${B}`,j(),y.style.transform="rotate(-180deg)",y.classList.toggle("dropped"),a.style.opacity="0",a.style.zIndex="-1",k.innerText=`Wybrany pakiet: ${O}`})}),i.addEventListener("click",function(){i.checked,q.classList.toggle("invisible"),j()}),l.addEventListener("click",function(){i.checked,_.classList.toggle("invisible"),j()})}]);