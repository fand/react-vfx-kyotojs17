(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{393:function(e,t,a){"use strict";a.r(t),a.d(t,"Sidebar",function(){return w});var n=a(2),r=a.n(n),c=a(196),i=a(214),l=a.n(i),o=a(103),s=a(14),d=window.location.href.split("#")[0],m=["twitter","hatena"],u="Inside REACT-VFX",h=function(e){return"".concat(e).padStart(2,"0")},w=Object(n.memo)(function(e){var t=e.isOpen,a=e.onStateChange,n=e.goTo,i=e.currentIndex,w=e.runPresentationMode,b=e.contents;return r.a.createElement(c.slide,{isOpen:t,disableAutoFocus:!0,onStateChange:a,outerContainerId:"root",pageWrapId:"webslides"},r.a.createElement("div",{className:"sidebar-social"},Array.isArray(m)&&m.map(function(e){return"twitter"===e?r.a.createElement("a",{key:"twitter",rel:"noopener",target:"_blank",href:"https://twitter.com/intent/tweet?text=".concat(u," ").concat(d),"aria-label":"".concat(u," ").concat(d)},r.a.createElement(o.l,null)):"hatena"===e?r.a.createElement("a",{key:"hatena",href:"http://b.hatena.ne.jp/entry/".concat(d),className:"fa fa-hatena"}):void 0})),r.a.createElement("div",{className:"sidebar-control"},window.slide&&r.a.createElement(r.a.Fragment,null,r.a.createElement(s.c,{onClick:function(){return n(0)},className:"sidebar-cursor"}),r.a.createElement("span",null,"".concat(h(i+1)," / ").concat(h(window.slide.slides.length))),r.a.createElement(s.e,{onClick:function(){return n(window.slide.slides.length-1)},className:"sidebar-cursor"}))),r.a.createElement("div",{className:"sidebar-tools"},r.a.createElement(s.d,{style:{width:26,height:26},onClick:function(){l.a.enabled&&l.a.toggle()},className:"sidebar-cursor"}),r.a.createElement(s.a,{onClick:function(){return w()},style:{width:19,height:19,marginTop:1},className:"sidebar-cursor"}),r.a.createElement("a",{href:"https://github.com/fand/kyotojs17-slides.git",target:"_blank",rel:"noopener","aria-label":"github"},r.a.createElement(o.d,{style:{width:20,height:20,marginTop:3,color:"#f5f5f5"}}))),r.a.createElement("ul",{className:"sidebar-contents"},b.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{href:"#slide=".concat(e.index)},e.title))})))})}}]);