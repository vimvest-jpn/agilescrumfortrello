var AST=AST||{};!function(r){"use strict";$(r).ready(function(){AST=function(r){var t="Agile SCRUM for Trello boards",s="1.4.2",n=/\([0-9\.]{1,3}\/[0-9\.]{1,3}\)/,a=/\([0-9\.]{1,3}\//,c=/\/[0-9\.]{1,3}\)/,e=/\([0-9\.]{1,5}\)/,o=/[0-9\.]+/,i=/\[([a-zA-Z0-9 \_\-\.]*)\]/g,l=/>\*{3} .+ \*{3}$/i,d=1,u=!1,m="",p=!1,f=!1,h=1500,g=!1,b=0,T=0,v=!1,y=0,A=0,L=!1,M=0,C=0,H=!1,k=!1;r.init=function(){console.info(t+" v"+s+" started"),S(),x()};var S=function(){$("body").on("mouseup keyup",function(){F()})},F=function(){f||(p=setTimeout(function(){x(),f=!1},h)),f=!0},x=function(){u=$("body").css("background-color")&&!$("body").hasClass("body-custom-board-background")?$("body").css("background-color"):"rgb(55, 158, 90)",w(),$("#board").find(".list-cards").each(function(){g=$(this),g.find(".list-card").each(function(){return L=$(this),U(L)?-2:($(L).find(".list-card-title").html().match(/<small /g)?(H=L.data("original"),$(L).find(".list-card-title").html(H)):(H=$(L).find(".list-card-title").html(),L.data("original",H)),j(H)?(A>0&&z(),v=L,v[0].innerHTML=v[0].innerHTML.replace(/( ?\*\*\* ?)/g,""),v.addClass("scrum-card-header")):H.match(n)?(k=H.match(n)[0],M=R(k.match(a)[0]),C=R(k.match(c)[0])):H.match(e)&&(C=R(H.match(e)[0])),m=M==C?" perfect":M>C?" overrun":"",L[0].innerHTML=L[0].innerHTML.replace(e,_),L[0].innerHTML=L[0].innerHTML.replace(n,_),L[0].innerHTML=L[0].innerHTML.replace(i,Z),C>0&&(L.prepend('<div class="scrum-card-progress'+m+'" style="background-color:'+u+";width:"+M/C*100+'%"></div>'),$(L[0]).css("font-size",(8>C?90+5*C:130)+"%").css("line-height","1.2em")),b+=M,T+=C,v&&(y+=M,A+=C),L=!1,H=k="",void(C=M=0))}),A>0&&z(),g.parent().prepend('<small class="scrum-list-total'+m+'"><span class="scrum-light">'+b.toFixed(d)+"/</span>"+T.toFixed(d)+"</small>"),T>0&&g.parent(".list").prepend('<div class="scrum-list-progress"  style="background-color:'+u+";width:"+b/T*100+'%"></div>'),g=!1,b=T=0})},w=function(){$(".scrum-list-total,.scrum-list-progress,.scrum-card-progress").remove()},U=function(){return L.hasClass("js-composer")},j=function(r){return r.match(l)},z=function(){$(v.find(".list-card-title")[0]).prepend('<small class="scrum-card-points'+(y>A?" overrun":"")+'"><span class="scrum-light">'+y.toFixed(d)+"/</span>"+A.toFixed(d)+"</small>"),y=A=0},R=function(r){return parseFloat(r.match(o)[0])},Z=function(r){return'<small class="scrum-card-project" style="background:'+q(r)+'">'+r.replace(/\[|\]/g,"").toUpperCase()+"</small>"},_=function(r){return'<small class="scrum-card-points'+m+'">'+r.replace(/\(|\)/g,"").toUpperCase()+"</small>"},q=function(r){var t=0,s=0,n=r.length;for(r=r.toLowerCase();n>s;s++)t+=900*r.charAt(s).charCodeAt();return"hsla("+t%256+",50%,60%,1)"};return r}(AST||{}),AST.init()})}(document,localStorage);