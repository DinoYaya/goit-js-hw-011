import{a as d,S as f,i as n}from"./assets/vendor-BjRz3xa9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="49618570-65d81de6e7a9899840c4a7811",m="https://pixabay.com/api/";async function y(s){const o={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(m,{params:o})).data}const c=document.querySelector(".gallery"),u=document.querySelector(".loader");let a;function g(s){const o=s.map(t=>`
      <li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img 
            src="${t.webformatURL}" 
            alt="${t.tags}" 
            class="gallery-image"
          />
          <div class="image-info">
            <p><b>Likes:</b> ${t.likes}</p>
            <p><b>Views:</b> ${t.views}</p>
            <p><b>Comments:</b> ${t.comments}</p>
            <p><b>Downloads:</b> ${t.downloads}</p>
          </div>
        </a>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",o),a?a.refresh():a=new f(".gallery a",{captionsData:"alt",captionDelay:250})}function h(){c.innerHTML="",a&&(a.destroy(),a=null)}function b(){u.classList.add("visible")}function L(){u.classList.remove("visible")}const w=document.querySelector(".form");w.addEventListener("submit",async s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){n.warning({title:"Warning",message:"Please enter a search term",position:"topRight"});return}b(),h();try{const t=await y(o);if(t.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits)}catch{n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{L(),s.target.reset()}});
//# sourceMappingURL=index.js.map
