/* =====================================================================
   Bravo by Michal Avital — shared storefront runtime
   Product data, image helpers, cart / wishlist (persisted), bottom
   sheets, search, header & footer behaviour. Used by every inner page.
   ===================================================================== */

/* ---------- Images ---------- */
function driveErr(el){
  const m = el.src.match(/\/d\/([^=]+)=/);
  if(m && !el.dataset.fb){ el.dataset.fb=1; el.src="https://drive.google.com/thumbnail?id="+m[1]+"&sz=w1200"; return; }
  if(el.parentNode) el.parentNode.classList.add("img-fallback");
  el.style.visibility="hidden";
}
const CDN = "https://bravomalibu.com/cdn/shop/files/";
const G = [
  "1_2e6edc64-213d-4fa8-8b5b-a57d6aab7bf6.webp?v=1728376326",
  "2_366c3b06-b302-4c45-814c-650eeb9ad0fe.webp?v=1728378355",
  "3.webp?v=1728378368","4.webp?v=1728378380","5.webp?v=1728378401",
  "6.webp?v=1728378415","7.webp?v=1728378441","8.webp?v=1728378455",
  "9.webp?v=1728378468","10.webp?v=1728378539","11.webp?v=1728378552",
  "12.webp?v=1728378564"
];
const DRIVE = ["1Ny3D2p0nAIHs_40cCm-VkvHzSfx9gkRp", "1L7w7E2d8glqRBA3OxErxFfVCLqkvszYV", "1m--t4RTtsmz-SCsuB6Y9gtPDuJRQYa3m", "1jtWOPDOBE7dbTAJPUFH6nTGtuW0jf8xe", "1UKimUsPJNSMTtQzHEuI7a-e8Jvm9P7ZK", "1_MKGbTUH7Raq3lCSltAreRZIRGfjySQo", "19BxLAueA1bIP1WYpDjposYPqjVg0W2TV", "1rThIbC-MyhFW7M-7XNg5wtFEZCMQUmxW", "1wzHkvJdsqyJfehaCgiKE8OPuNQalSRxU", "1YAiWx9MBKJapQmUhzIh1aNYHhPaatG4b", "1NlEjsGBsqf8xJ9K5C_23kPMNOREl7Xh0", "1k9vfydplHZdwdAfyjj1xrUyR_YgltzRQ", "12Yzsl431A0ll7Q9wIhaSUYjFpKPBsQT-", "1xsvGHO0y4MLJVdMbIL9_wmS0s8tNksaj", "1EvAn8Eq4-ZOViEm3_NEt8w7KFLvH0nPp", "1ryLWLZd16D1nFzicsaEeiWS56zYxkRw3", "1LWT3iG2QDrLlIhAvrHiAFlv0h1X7o06R", "1441cWlvgh6s7ZkaF_EMJ0XWbxL9-5cZ6", "1RYsrqr4rpyLJ2xeExZsqMM5GJY8W4B14", "1Ml8c8N9PjrRtmkJgp8GEWBoOgeJbBsrv", "1hcPHezCZEDYPdGHHaZt67oyK-Km7MzX8", "1yjolsBAphGIYLf4I6cPbeoKAI8cygLjt", "1gnrV8mXs2xFBu4dnu_hOcEUX3e9IxgPA", "1sirLyHGgR2MX84FZwa4TklR2pDTP9dkC", "1h07TLWGSlwJtGeOfZamGD2-7qTK19c9I", "1KdoqS_uoOmH59AGb7CmPhNeEj9UC6tu1", "1YoStEQ6aMqoGBpdQhKZqWNPZfgkfBbAq", "1KWWAtiK7dOAGTwGgDSf_gRsl68-aicqs", "1LxJObJxWO0Fbpk9w2mpy2Z1L5nGBwD8N", "1v7p1GXTWlTodgKl_nqpTkVFTgdXf7rnT", "1dvvyt47br0iMxg97FWF43SnSgotHCV2g", "14aM6eC2Ipb0S801wcv93EBx0dkZfRGke", "15OT7LpJ8iYGkQNGRsBq9BqIsiFpHKRtK", "11SshdWydGJ23mEljp8uJq9IFWqANA0YX", "14YiwgrR__7lVECfQccrnRRgLqfhYP2RX", "1W71CDc143Bh0xsvvlPRl8OD__EDM28y-", "1xrfB8DRxeev4VEMTpKsvgsSmM3fCkela", "1zYtyXSDvTBdo_qpW4SIsrB9Zf7afCkSR", "1v7IQ319JCIk-l6EyNg0ILBQZYmHQKloA", "1rBrc2J9fabKj2HfAtvmbu78_gJL3FfGz", "1AQNZtE88l_hujPHgHok_bVDj3bhKt_0q", "10wHUPItSeLMw3udKa2kPZ-b4M43fO4Xx", "1hCsk_cnH37vrTd-io6gfscecdQeOTAza", "1bFnSwpucp8n5xjvyQfoCsSmcLez5srjt", "1u6dfOqXm27Tdh_BwrRjXzo1tGcqzbOJz", "1QpQ5Jk7shTualKbV8u5Lrla7w2EWgxyC", "1MHG9E9o9GuftGOf5th-0O_zRDY1SMVJ1"];
const dimg = (i,w=900) => "https://lh3.googleusercontent.com/d/" + DRIVE[i % DRIVE.length] + "=w" + w;
const DERR = "driveErr(this)";
const img = (i,w=800) => CDN + G[i % G.length] + "&width=" + w;
const FB = "this.parentNode.classList.add('img-fallback');this.style.visibility='hidden'";

/* ---------- Catalogue ---------- */
const products = [
  {n:"Meadow Breeze Blouse", p:180, c:"blouses", tag:"New", col:["#e9e2d3","#1d2a3a"], r:4.8, rc:31, fab:"100% silk crepe", fit:"Relaxed", madein:"Italy", low:["XS"]},
  {n:"Embroidered Button-Down Shirt", p:255, c:"blouses", col:["#fff","#c9d7e1"], r:4.9, rc:18, fab:"Cotton poplin, hand embroidery", fit:"True to size", madein:"Italy"},
  {n:"Blanco Blvd Jeans", p:160, c:"bottoms", tag:"Bestseller", col:["#f4f4f2"], r:4.7, rc:64, fab:"98% cotton, 2% elastane", fit:"High rise, straight", madein:"Italy", low:["S","XL"]},
  {n:"The Jeanius Top", p:125, c:"tops", col:["#6d8bb0","#1d2a3a"], r:4.6, rc:22, fab:"Soft washed denim", fit:"Cropped", madein:"Italy"},
  {n:"The Plaid Diamond Button-Up", p:180, c:"blouses", col:["#b8c6d4","#e9e2d3"], r:4.8, rc:14, fab:"Brushed cotton", fit:"Relaxed", madein:"Italy"},
  {n:"The “Boho Luxe” Button-Up", p:180, c:"blouses", tag:"New", col:["#fff"], r:5, rc:9, fab:"Cotton voile", fit:"Oversized", madein:"Italy", low:["M"]},
  {n:"The Fine-Lined Blue Cropped Button-Up", p:185, c:"blouses", col:["#dfe8ef"], r:4.7, rc:27, fab:"Cotton shirting", fit:"Cropped", madein:"Italy"},
  {n:"Palm Drive Ruched Shoulder Top", p:125, c:"tops", col:["#000","#fff","#24435a"], r:4.9, rc:40, fab:"Stretch jersey", fit:"Fitted", madein:"Italy"},
  {n:"Satin Halter Top", p:180, c:"tops", tag:"Bestseller", col:["#c9a98b","#000"], r:4.8, rc:52, fab:"Satin", fit:"Fitted", madein:"Italy"},
  {n:"Coastal Linen Midi Dress", p:295, c:"dresses", tag:"New", col:["#e9e2d3","#24435a"], r:4.9, rc:12, fab:"100% linen", fit:"Relaxed", madein:"Italy"},
  {n:"Sunset Slip Dress", p:245, c:"dresses", col:["#000","#c9a98b"], r:4.7, rc:33, fab:"Silk charmeuse", fit:"Bias cut", madein:"Italy", low:["XS","S"]},
  {n:"The Famous Bag", p:325, c:"bags", tag:"Bestseller", col:["#24435a","#000","#e9e2d3"], r:5, rc:88, fab:"Italian leather", fit:"One size", madein:"Italy"},
  {n:"Beverly Wide-Leg Trouser", p:210, c:"bottoms", col:["#000","#e9e2d3"], r:4.8, rc:19, fab:"Viscose twill", fit:"High rise, wide", madein:"Italy"},
  {n:"Malibu Cropped Jacket", p:340, c:"jackets", tag:"New", col:["#e9e2d3"], r:4.9, rc:7, fab:"Wool blend", fit:"Cropped", madein:"Italy"},
  {n:"Gold Shell Pendant", p:95, c:"accessories", col:["#d4af37"], r:4.8, rc:46, fab:"14k gold vermeil", fit:"One size", madein:"Israel"},
  {n:"Ribbed Essential Tank", p:68, c:"basics", col:["#fff","#000","#e9e2d3"], r:4.6, rc:71, fab:"Organic cotton rib", fit:"Fitted", madein:"Italy"}
];
const SIZES = ["XS","S","M","L","XL"];
const money = n => "$" + n.toFixed(2);
const stars = r => "★".repeat(Math.round(r)) + "☆".repeat(5-Math.round(r));
const FREE_SHIP = 250;

/* ---------- Icons ---------- */
const heart = '<svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>';
const eye = '<svg viewBox="0 0 24 24"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>';
const plus = '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>';

/* ---------- State (persisted) ---------- */
const store = {
  get(k,d){ try{ return JSON.parse(localStorage.getItem("bravo:"+k)) ?? d; }catch(e){ return d; } },
  set(k,v){ try{ localStorage.setItem("bravo:"+k, JSON.stringify(v)); }catch(e){} }
};
const wished = new Set(store.get("wish",[]));
const bag = new Map(store.get("bag",[]));
const recent = store.get("recent",[]);
function persist(){ store.set("wish",[...wished]); store.set("bag",[...bag]); store.set("recent",recent); }

/* ---------- Product card ---------- */
function card(pr, i){
  const tag = pr.tag ? `<span class="tag ${pr.tag==='New'?'new':''}">${pr.tag}</span>` : "";
  const sw = pr.col ? `<div class="sw">${pr.col.map(c=>`<i style="background:${c}"></i>`).join("")}</div>` : "";
  return `<article class="card">
    <div class="media">
      ${tag}
      <a href="product.html?p=${i}"><img class="main" src="${dimg(9+i)}" alt="${pr.n}" loading="lazy" onerror="${DERR}">
      <img class="alt" src="${dimg(18+i)}" alt="" loading="lazy" onerror="this.remove()"></a>
      <div class="tools">
        <button aria-label="Add ${pr.n} to wishlist" data-wish="${i}" class="${wished.has(i)?'on':''}">${heart}</button>
        <button aria-label="Quick view ${pr.n}" data-qv="${i}">${eye}</button>
      </div>
      <button class="add" data-add="${i}" aria-label="Add ${pr.n} to bag"><span class="t">Add to bag</span>${plus}</button>
    </div>
    <div class="info">
      <div class="brand">Bravo Malibu</div>
      <h3><a href="product.html?p=${i}">${pr.n}</a></h3>
      <div class="price">${money(pr.p)}</div>
      ${pr.r ? `<div class="stars">${stars(pr.r)}<span>${pr.rc}</span></div>` : ""}
      ${sw}
    </div>
  </article>`;
}

/* ---------- Toast ---------- */
const toast = document.getElementById("toast");
let tt;
function showToast(msg){ if(!toast) return; toast.textContent = msg; toast.classList.add("show"); clearTimeout(tt); tt=setTimeout(()=>toast.classList.remove("show"),2200); }
const thumb = i => `<div class="th"><img src="${dimg(9+i,300)}" alt="" onerror="${DERR}"></div>`;
function setBadge(id,n){ const el=document.getElementById(id); if(!el) return; el.textContent=n; el.hidden=!n; el.classList.remove("bump"); void el.offsetWidth; el.classList.add("bump"); }
function haptic(){ if(navigator.vibrate) navigator.vibrate(12); }
const $ = id => document.getElementById(id);

/* ---------- Cart / wishlist ---------- */
function addToBag(i,size,qty=1,open=true){
  const key = i + "|" + (size||"M");
  bag.set(key,(bag.get(key)||0)+qty);
  renderCart(); haptic(); persist();
  if(open && window.innerWidth>820) openSheet("cart"); else showToast(products[i].n + " added to your bag");
}
function bagTotals(){ let count=0,total=0; bag.forEach((q,key)=>{count+=q;total+=q*products[key.split("|")[0]].p;}); return {count,total}; }
function renderCart(){
  const body=$("cartBody"); if(!body) return;
  let html="";
  bag.forEach((q,key)=>{const [i,sz]=key.split("|");const pr=products[i];
    html+=`<div class="li">${thumb(+i)}<div class="meta"><b>${pr.n}</b><span>Size ${sz}</span><span style="display:block;color:var(--ink)">${money(pr.p)}</span></div><div class="qty"><button data-q="${key}" data-d="-1" aria-label="Remove one">−</button><span>${q}</span><button data-q="${key}" data-d="1" aria-label="Add one">+</button></div></div>`;});
  const {count,total}=bagTotals();
  body.innerHTML = html || `<div class="empty"><svg viewBox="0 0 24 24"><path d="M5 8h14l-1 13H6L5 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg><b>Your bag is empty</b>Tap + on any piece to add it here.<br><br><a class="btn dark" href="collection.html">Shop new arrivals</a></div>`;
  $("subtotal").textContent = money(total);
  $("checkoutBtn").disabled = !count;
  const left = Math.max(0, FREE_SHIP-total);
  $("shipMsg").innerHTML = count ? (left>0 ? `You're <b>${money(left)}</b> away from complimentary shipping` : `<b>Complimentary shipping unlocked</b> ✦`) : `Complimentary shipping on orders over ${money(FREE_SHIP)}`;
  $("shipBar").style.width = Math.min(100, total/FREE_SHIP*100) + "%";
  setBadge("cartCount",count); setBadge("tabCart",count);
}
function renderWish(){
  const body=$("wishBody");
  if(body){
    const html=[...wished].map(i=>`<div class="li">${thumb(i)}<div class="meta"><b>${products[i].n}</b><span>${money(products[i].p)}</span></div><button class="qty" style="padding:0 14px;height:34px;font-size:13px" data-add="${i}">Add</button></div>`).join("");
    body.innerHTML = html || `<div class="empty"><svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg><b>No saved pieces yet</b>Tap the heart on anything you love.</div>`;
  }
  setBadge("wishCount",wished.size); setBadge("tabWish",wished.size);
}
let qvIndex=0, qvSize="M";
function openQV(i){
  qvIndex=i; qvSize="M"; const pr=products[i];
  $("qvBody").innerHTML = `<div class="qv-imgs"><img src="${dimg(9+i)}" alt="${pr.n}" onerror="${DERR}"><img src="${dimg(18+i)}" alt="" onerror="${DERR}"></div>
    <div class="qv-name">${pr.n}</div><div class="qv-price">${money(pr.p)}</div>
    <div class="s-label">Size</div><div class="sizes">${SIZES.map(z=>`<button class="${z==="M"?"on":""} ${(pr.low||[]).includes(z)?"low":""}" data-size="${z}">${z}</button>`).join("")}</div>
    <a href="product.html?p=${i}" class="link-u" style="display:inline-block;margin-top:16px">View full details</a>`;
  openSheet("qv");
}

document.addEventListener("click",e=>{
  const add = e.target.closest("[data-add]");
  if(add){e.preventDefault();addToBag(Number(add.dataset.add));return;}
  const w = e.target.closest("[data-wish]");
  if(w){const i=Number(w.dataset.wish);wished.has(i)?wished.delete(i):wished.add(i);
    document.querySelectorAll(`[data-wish="${i}"]`).forEach(b=>b.classList.toggle("on",wished.has(i)));
    haptic();renderWish();persist();showToast(wished.has(i)?"Saved to your wishlist":"Removed from wishlist");return;}
  const qv = e.target.closest("[data-qv]");
  if(qv){e.preventDefault();openQV(Number(qv.dataset.qv));return;}
  const q = e.target.closest("[data-q]");
  if(q){const k=q.dataset.q,n=(bag.get(k)||0)+Number(q.dataset.d);n>0?bag.set(k,n):bag.delete(k);renderCart();persist();return;}
  const sz = e.target.closest(".sheet [data-size]");
  if(sz){qvSize=sz.dataset.size;sz.parentNode.querySelectorAll("button").forEach(b=>b.classList.toggle("on",b===sz));return;}
});
$("qvAdd")?.addEventListener("click",()=>{addToBag(qvIndex,qvSize,1,false);closeSheets();});
$("checkoutBtn")?.addEventListener("click",()=>showToast("Checkout opens in Shopify on the live site"));

/* ---------- Sheets ---------- */
const tabBtns=[...document.querySelectorAll(".tabbar [data-sheet],.tabbar [data-tab-go]")];
function setTab(name){tabBtns.forEach(b=>b.classList.toggle("on",(b.dataset.sheet||b.dataset.tabGo)===name));}
function openSheet(name){
  closeSheets(true);
  const sh=$("sheet-"+name); if(!sh) return;
  if(name==="cart") renderCart(); if(name==="wish") renderWish(); if(name==="search") runSearch("");
  sh.classList.add("open"); sh.setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
  if(["shop","search","wish","cart"].includes(name)) setTab(name);
  if(name==="search" && window.innerWidth>820) setTimeout(()=>$("searchInput").focus(),300);
}
function closeSheets(silent){
  document.querySelectorAll(".sheet.open").forEach(s=>{s.classList.remove("open");s.setAttribute("aria-hidden","true");s.querySelector(".sheet-panel").style.transform="";});
  document.body.style.overflow="";
  if(!silent) setTab(document.body.dataset.tab||"home");
}
document.addEventListener("click",e=>{
  const o=e.target.closest("[data-sheet]"); if(o){e.preventDefault();openSheet(o.dataset.sheet);return;}
  const c=e.target.closest("[data-sheet-close]"); if(c){closeSheets(); if(c.dataset.goto) location.href=c.dataset.goto;}
});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeSheets();});
document.querySelectorAll(".sheet-panel").forEach(p=>{
  let y0=null,dy=0;
  const start=e=>{const body=p.querySelector(".sheet-body");if(e.target.closest(".sheet-body")&&body.scrollTop>0)return;y0=e.touches[0].clientY;dy=0;p.classList.add("dragging");};
  const move=e=>{if(y0===null)return;dy=Math.max(0,e.touches[0].clientY-y0);if(dy>0){p.style.transform=`translateY(${dy}px)`;}};
  const end=()=>{if(y0===null)return;p.classList.remove("dragging");if(dy>110)closeSheets();else p.style.transform="";y0=null;};
  p.addEventListener("touchstart",start,{passive:true});p.addEventListener("touchmove",move,{passive:true});p.addEventListener("touchend",end);
});

/* ---------- Search ---------- */
function runSearch(q){
  q=q.trim().toLowerCase();
  const res=products.map((p,i)=>({...p,i})).filter(p=>!q||p.n.toLowerCase().includes(q)||p.c.includes(q));
  $("searchLabel").textContent = q ? `${res.length} result${res.length===1?"":"s"} for “${q}”` : "Popular right now";
  $("searchResults").innerHTML = res.length ? res.slice(0,8).map(p=>`<a href="product.html?p=${p.i}" class="li">${thumb(p.i)}<div class="meta"><b>${p.n}</b><span>${money(p.p)}</span></div></a>`).join("") : `<div class="empty"><b>No matches</b>Try “blouse”, “jeans” or “top”.</div>`;
}
$("searchInput")?.addEventListener("input",e=>runSearch(e.target.value));
$("trend")?.addEventListener("click",e=>{const c=e.target.closest(".chip");if(!c)return;const inp=$("searchInput");inp.value=c.textContent;runSearch(c.textContent);});

/* ---------- Header / footer / drawer ---------- */
const hdr=document.querySelector("header.site"); let lastY=0;
window.addEventListener("scroll",()=>{const y=window.scrollY;if(window.innerWidth<=820&&hdr){hdr.classList.toggle("hide",y>lastY&&y>120);}lastY=y;},{passive:true});
document.querySelectorAll(".fgrid > div + div h4").forEach(h=>h.addEventListener("click",()=>{if(window.innerWidth<=820)h.parentNode.classList.toggle("open");}));
const drawer = $("drawer");
$("openDrawer")?.addEventListener("click",()=>{drawer.classList.add("open");drawer.setAttribute("aria-hidden","false");});
drawer?.querySelectorAll("[data-close]").forEach(el=>el.addEventListener("click",()=>{drawer.classList.remove("open");drawer.setAttribute("aria-hidden","true");}));
$("newsForm")?.addEventListener("submit",e=>{e.preventDefault();showToast("You're subscribed to the Bravo list");e.target.reset();});
const mq=$("marquee"); if(mq){const phrases=["Malibu ease, Italian craft","Personal styling by appointment","Beverly Hills boutique","Since 2015"];mq.innerHTML=[...phrases,...phrases,...phrases,...phrases].map(p=>`<span>${p}</span>`).join("");}
document.querySelectorAll("[data-scroll]").forEach(b=>b.addEventListener("click",()=>{const t=document.querySelector(b.dataset.target||".carousel");t.scrollBy({left:t.clientWidth*0.75*Number(b.dataset.scroll)});}));

renderCart(); renderWish(); setTab(document.body.dataset.tab||"home");
