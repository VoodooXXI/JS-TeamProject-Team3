var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequired53d;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var d={id:e,exports:{}};return t[e]=d,i.call(d.exports,d,d.exports),d.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired53d=i),i.register("9m8SW",function(e,t){var n=i("8p79I"),d=i("c01Oz"),l=i("hAdDP");e.exports=e=>{n(e).then(e=>{(function(e){let t=document.querySelector(".movies__container");async function n(e){let t=document.createElement("div");t.classList.add("movies__container__item");let n=document.createElement("img");n.src=`https://image.tmdb.org/t/p/w500${e.poster_path}`,n.classList.add("movies__container__image"),t.appendChild(n);let i=document.createElement("div"),l=document.createElement("p"),a="";if(e.title.length<=25)a=e.title;else{let t=e.title.split("");for(;t.length>30;)t.pop();t.push("."),t.push("."),t.push("."),a=t.join("")}l.innerHTML=`${a}`,l.classList.add("movies__container__title"),i.appendChild(l);let r="";r+=function(e,t){let n=[],i=!1;for(let d=0;d<t.length;d++){i=!1;for(let l=0;l<e.length&&!1===i;l++)t[d]===e[l].id&&(n.push(e[l].name),i=!0)}return 1===n.length?n[0]:2===n.length?n[0]+", "+n[1]:n[0]+", "+n[1]+", other"}(await d(),e.genre_ids)+" | ";let c=e.release_date.slice(0,4);r+=`${c}`;let s=document.createElement("p");return s.innerHTML=r,s.classList.add("movies__container__genre"),i.appendChild(s),t.appendChild(i),t}t.innerHTML="",e.forEach(e=>{n(e).then(n=>{n.addEventListener("click",t=>{l(e)}),t.appendChild(n)})})})(e)})}}),i.register("8p79I",function(e,t){var n=i("9bmoE").key;e.exports=async e=>{let t=await fetch(`https://api.themoviedb.org/3/trending/movie/day?page=${e}&api_key=${n}`),i=await t.json(),d=i.results;return d}}),i.register("9bmoE",function(e,t){e.exports={key:"8b218b85545392c9f8705c30fbfd1bce"}}),i.register("c01Oz",function(e,t){var n=i("9bmoE").key;e.exports=async()=>{let e=await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${n}`),t=await e.json();return t.genres}}),i.register("hAdDP",function(e,t){var n=i("c01Oz"),d=i("25io1"),l=i("9HIXY");e.exports=async e=>{let t=document.querySelector(".modal-wrapper"),i=document.querySelector(".backdrop");t.classList.toggle("is-hidden"),i.addEventListener("click",()=>{t.classList.add("is-hidden")});let a=document.getElementById("voteRating"),r=document.getElementById("voteCount"),c=document.getElementById("popul"),s=document.getElementById("origTitle"),o=document.getElementById("about"),u=document.getElementById("img"),m=document.getElementById("film-title"),p=document.getElementById("genre"),g=await n(),h=e.genre_ids;function E(e,t){for(let n=0;n<e.length;n++)if(e[n].id===t.id)return!0;return!1}p.innerHTML=function(e,t){let n="",i=!1;for(let d=0;d<t.length;d++){i=!1;for(let l=0;l<e.length&&!1===i;l++)t[d]===e[l].id&&(n+=e[l].name+", ",i=!0)}let d=n.length;return n.slice(0,d-2)}(g,h),a.innerHTML=e.vote_average,r.innerHTML=e.vote_count,c.innerHTML=e.popularity,s.innerHTML=e.original_title,o.innerHTML=e.overview,u.src=`https://image.tmdb.org/t/p/w500${e.poster_path}`,m.innerHTML=e.title,(()=>{let t=document.querySelector(".add-to-watched-btn"),n=document.querySelector(".add-to-queue-btn");t.id=`watch${e.id}`,n.id=`queue${e.id}`;let i=l.watched.map(e=>e),d=l.queue.map(e=>e);E(i,e)?(t.classList.add("added"),t.innerHTML="ADDED TO WATCHED"):(t.classList.remove("added"),t.innerHTML="ADD TO WATCHED"),E(d,e)?(n.classList.add("added"),n.innerHTML="ADDED TO QUEUE"):(n.classList.remove("added"),n.innerHTML="ADD TO QUEUE")})(),d(e)}}),i.register("25io1",function(e,t){e.exports=e=>{let t=i("9HIXY"),n=document.querySelector(".add-to-watched-btn"),d=document.querySelector(".add-to-queue-btn"),l=t.watched.map(e=>e),a=t.queue.map(e=>e);function r(e,t){for(let n=0;n<e.length;n++)if(e[n].id===t.id)return!0;return!1}n.addEventListener("click",i=>{let d=r(l,e);if(n.id!==i.target.id||d){if(n.id===i.target.id&&d){let i=l.indexOf(e);i>-1&&l.splice(i,1),t.watched=l,n.classList.remove("added"),n.innerHTML="ADD TO WATCHED"}}else l.push(e),t.watched=l,n.classList.add("added"),n.innerHTML="ADDED TO WATCHED"}),d.addEventListener("click",n=>{let i=r(a,e);if(d.id!==n.target.id||i){if(d.id===n.target.id&&i){let n=a.indexOf(e);n>-1&&a.splice(n,1),t.queue=a,d.classList.remove("added"),d.innerHTML="ADD TO QUEUE"}}else a.push(e),t.queue=a,d.classList.add("added"),d.innerHTML="ADDED TO QUEUE"})}}),i.register("9HIXY",function(e,t){e.exports={watched:[],queue:[]}}),i.register("jwPrH",function(e,t){var n=i("hAdDP");e.exports=e=>{let t=document.querySelector(".movies__container");t.innerHTML="",e.forEach(e=>{let i=function(e){let t=document.createElement("div");t.classList.add("smallDiv");let n=document.createElement("p");n.classList.add("smallDiv__title");let i="";if(e.title.length<=25)i=e.title;else{let t=e.title.split("");for(;t.length>30;)t.pop();t.push("."),t.push("."),t.push("."),i=t.join("")}n.innerHTML=`${i}`,t.appendChild(n);let d=document.createElement("img");d.classList.add("smallDiv__image"),d.src=`https://image.tmdb.org/t/p/w500${e.poster_path}`,t.appendChild(d);let l=document.createElement("ul");l.classList.add("smallDiv__list");let a=document.createElement("li");a.classList.add("smallDiv__list__element");let r=document.createElement("p");r.classList.add("smallDiv__list__key"),r.innerHTML="Rating",a.appendChild(r);let c=document.createElement("p");c.classList.add("smallDiv__list__value"),c.innerHTML=`${e.vote_average}`,a.appendChild(c),l.appendChild(a);let s=document.createElement("li");s.classList.add("smallDiv__list__element");let o=document.createElement("p");o.classList.add("smallDiv__list__key"),o.innerHTML="Popularity",s.appendChild(o);let u=document.createElement("p");u.classList.add("smallDiv__list__value"),u.innerHTML=`${e.popularity}`,s.appendChild(u),l.appendChild(s),t.appendChild(l);let m=e.overview;(m=m.split("")).length>100&&(m=m.slice(0,100)).push("..."),m=m.join("");let p=document.createElement("p");return p.innerHTML=m,p.classList.add("smallDiv__desc"),t.appendChild(p),t}(e);i.addEventListener("click",t=>{n(e)}),t.appendChild(i)})}}),i("9m8SW");var d={};d=()=>{let e=i("9m8SW"),t=1,n=document.querySelector(".numbers"),d=document.getElementById(`${t}`),l=document.querySelector(".right"),a=document.querySelector(".left");function r(){n.innerHTML="";for(let i=t-2;i<=t+2&&i<20;i++)if(i>1&&i<20){let l=document.createElement("div");l.classList.add("number"),l.innerHTML=`${i}`,l.setAttribute("id",`${i}`),n.appendChild(l),l.addEventListener("click",()=>{s(),t=l.id,d=document.getElementById(`${t}`),e(t),c()})}}function c(){d.classList.add("current-page")}function s(){d.classList.toggle("current-page")}c(),window.addEventListener("DOMContentLoaded",function(){e(t),r()}),l.addEventListener("click",()=>{t<20&&(s(),e(++t),r(),d=document.getElementById(`${t}`),s())}),a.addEventListener("click",()=>{t>1&&(s(),e(--t),r(),d=document.getElementById(`${t}`),c())});let o=document.getElementById("1"),u=document.getElementById("20");o.addEventListener("click",()=>{s(),e(t=1),r(),d=document.getElementById(`${t}`),c()}),u.addEventListener("click",()=>{s(),e(t=20),r(),d=document.getElementById(`${t}`),c()})};var l=i("hAdDP"),a={};a=()=>{let e=i("9HIXY"),t=i("9m8SW"),n=i("jwPrH"),d=document.querySelector(".watched-button"),l=document.querySelector(".queue-button"),a=document.querySelector(".home-button");d.addEventListener("click",t=>{let i=e.watched.map(e=>e);n(i)}),l.addEventListener("click",t=>{let i=e.queue.map(e=>e);n(i)}),a.addEventListener("click",e=>{t(1)})},(()=>{let e;let t=document.querySelector(".search-bar");t.addEventListener("input",t=>{e=t.target.value}),a();let n=document.querySelector(".search-button");n.addEventListener("click",t=>{let n=i("9bmoE").key,d=`https://api.themoviedb.org/3/search/movie?query=${e}&include_adult=false&language=en-US&page=1&api_key=${n}`;(async()=>{let e=await fetch(d),t=await e.json();l(t.results[0])})()})})(),d();
//# sourceMappingURL=index.32e1e1de.js.map
