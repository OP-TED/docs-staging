window.antoraLunr=function(e){const t=document.getElementById("search-script").dataset,n=t.basePath,r=t.pagePath;var a,s,c,i,d=document.getElementById("search-input"),o=document.createElement("div");function u(e){var t=document.createElement("div");t.classList.add("search-filter");var n=document.createElement("span");n.classList.add("search-filter-component"),n.innerText="Search in:",t.appendChild(n);var r=Object.keys(e).map((t=>({name:e[t].component,version:e[t].version,title:e[t].componentTitle}))).filter((e=>"home"!=e.name)),s=[];return r.forEach((function(e){s.some((t=>t.name==e.name))||(s.push(e),t.appendChild(c(e.title,"search_filter_"+e.name,a.name==e.name||"home"==a.name)))})),t.appendChild(c("Everywhere","search_filter_all","home"==a.name)),t;function c(e,t,n){var r=function(e,t){var n=document.createElement("input");return n.type="checkbox",n.id=e,n.name="search_filter",n.checked=t,n.addEventListener("mousedown",(function(e){e.preventDefault()})),n}(t,n),a=document.createElement("label");return a.classList.add("search-filter-component"),a.appendChild(r),a.insertAdjacentText("beforeend",e),a.setAttribute("for",t),a.addEventListener("mousedown",(function(e){e.preventDefault()})),a.addEventListener("click",(function(e){this===e.target&&(e.preventDefault(),this.control&&this.control.click())})),a}}function l(e,t){var n=[],r=t[0],a=t[1],s=e.text,c=document.createElement("span");c.classList.add("search-result-highlight"),c.innerText=s.substr(r,a);var i=r+a,d=s.length-1,o=i+50>d?d:i+50,u=r-50<0?0:r-50;return 0===r&&i===d?n.push(c):0===r?(n.push(c),n.push(document.createTextNode(s.substr(i,o)))):i===d?(n.push(document.createTextNode(s.substr(0,r))),n.push(c)):(n.push(document.createTextNode("..."+s.substr(u,r-u))),n.push(c),n.push(document.createTextNode(s.substr(i,o-i)+"..."))),n}function h(e,t,n){var r,a=[],s=n[0],c=n[1],i=document.createElement("span");i.classList.add("search-result-highlight"),r=e?t.titles.filter((function(t){return t.id===e}))[0].text:t.title,i.innerText=r.substr(s,c);var d=s+c,o=r.length-1;return 0===s&&d===o?a.push(i):0===s?(a.push(i),a.push(document.createTextNode(r.substr(c,o)))):d===o?(a.push(document.createTextNode(r.substr(0,s))),a.push(i)):(a.push(document.createTextNode(r.substr(0,s))),a.push(i),a.push(document.createTextNode(r.substr(d,o)))),a}function m(e){return e.includes("#")}function p(e,t,n){var r={};e.forEach((function(e){var n,a=e.ref;m(a)&&(n=a.substring(a.indexOf("#")+1),a=a.replace("#"+n,""));var s=t[a],c=s.componentTitle+" "+("master"==s.version?"":s.version);c in r||(r[c]=[]);var i=function(e,t,n){var r=[];for(var a in e){var s=e[a];for(var c in s){var i=s[c];if(i.position){var d=i.position[0];"title"===c?r=h(t,n,d):"text"===c&&(r=l(n,d))}}}return r}(e.matchData.metadata,n,s);r[c].push({doc:s,url:e.ref,hits:i})}));for(let e in function(e){return Object.keys(e).sort().reverse().reduce((function(t,n){return t[n]=e[n],t}),{})}(r))n.appendChild(f(e,r[e]))}function f(e,t){var r=document.createElement("div"),a=document.createElement("div");return a.classList.add("search-result-group","sticky"),a.innerText=e,r.appendChild(a),t.forEach((function(e){r.appendChild(function(e,t,r){var a=document.createElement("div");a.classList.add("search-result-document-title"),a.innerText=e.title;var s=document.createElement("a"),c=document.createElement("div");c.classList.add("search-result-document-hit"),m(t)&&c.classList.add("search-result-document-hit-section");s=document.createElement("a");var i=n;s.href=i+t,c.appendChild(s),r.forEach((function(e){s.appendChild(e)}));var d=document.createElement("div");return d.classList.add("search-result-item"),d.appendChild(a),d.appendChild(c),d.addEventListener("mousedown",(function(e){e.preventDefault()})),d}(e.doc,e.url,e.hits))})),r}function v(e,t,n){for(;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)o.removeChild(o.firstChild);if(o.appendChild(i),i.appendChild(s),document.getElementsByName("search_filter").forEach((function(e){e.addEventListener("change",(function(e){"search_filter_all"==e.currentTarget.id?document.getElementsByName("search_filter").forEach((t=>t.checked=e.currentTarget.checked)):document.getElementById("search_filter_all").checked=!1,c()})),e.addEventListener("mousedown",(function(e){e.preventDefault()}))})),""!==n.trim()){targetComponents=[],document.getElementsByName("search_filter").forEach((e=>e.checked&&targetComponents.push({name:e.id.replace(/^search_filter_/,"")})));var r=function(e,t,n,r){var a=function(e,t){var n=e.search(t);return n.length>0||(n=e.search(t+"*")).length>0?n:n=e.search("*"+t+"*")}(e,n);return a.filter((function(e){return e=t[e.ref],r.reduce(((t,n)=>t||e&&e.component==n.name),!1)}))}(e,t,n,targetComponents),a=document.createElement("div");a.classList.add("search-result-dataset"),i.appendChild(a),r.length>0?p(r,t,a):a.appendChild(function(e){var t=document.createElement("div");t.classList.add("search-result-item");var n=document.createElement("div");n.classList.add("search-result-document-hit");var r=document.createElement("strong");return r.innerText='No results found for query "'+e+'"',n.appendChild(r),t.appendChild(n),t}(n))}}return o.classList.add("search-result-dropdown-menu"),d.parentNode.appendChild(o),{init:function(t){a={name:t.store[r].component,version:t.store[r].version};var n,l,h,m,p,f=Object.assign({index:e.Index.load(t.index),store:t.store});n=function(){v(f.index,f.store,d.value)},l=100,c=function(){var e=this,t=arguments,r=function(){m=null,h||n.apply(e,t)},a=h&&!m;clearTimeout(m),m=setTimeout(r,l),a&&n.apply(e,t)},d.addEventListener("keydown",c),d.addEventListener("blur",(function(e){for(;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)o.removeChild(o.firstChild)})),(p=document.createElement("div")).classList.add("search-result-frame"),i=p,s=u(t.store)}}}(window.lunr);