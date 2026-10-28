const IMG={pizza:"assets/images/photo-ddcdce021298.jpg",wrap:"assets/images/photo-ffa255c3f763.jpg",box:"assets/images/photo-5a62a48fa276.jpg",pita:"assets/images/photo-bce49e4f5deb.jpg",fries:"assets/images/photo-3842ba50bb76.jpg",doner:"assets/images/photo-fe32bf21610b.jpg",hotdog:"assets/images/photo-1d3acb296c1f.jpg",draniki:"assets/images/photo-789ed234a317.jpg"};
const T={
ru:{n_menu:"Меню",n_fav:"Хиты",n_about:"О нас",n_contacts:"Контакты",order:"Заказать",f1:"Свежее и горячее",f2:"Доставка Bolt и Wolt",f3:"Strādnieku iela 85A",eyebrow:"Маленький магазин с большими вкусами",lead:"Пицца, лаваши, кебаб-боксы и гирос-пита — горячо, сочно и каждый день. Приходите или заказывайте с доставкой.",daily:"ежедневно",menu_sub:"Свежее и горячее — выбирайте категорию",note:"Цены в евро, в заведении. В Bolt Food и Wolt цены могут отличаться.",fav_sub:"То, что заказывают чаще всего",about_h:"Маленький магазин — большие вкусы",about_p:"Mini Lavka — уютное место на Strādnieku iela в Даугавпилсе. Мы готовим пиццу, лаваши, кебаб-боксы, пита с гирос и хрустящие закуски. Всегда рады новым гостям — заходите, мы работаем каждый день с 11:00 до 20:00.",c_sub:"Ждём вас каждый день",c_addr:"Адрес",c_map:"Открыть карту",c_phone:"Телефон",c_copy:"Копировать номер",cn:"Номер скопирован",c_hours:"Часы работы",tag:"Маленький магазин с большими вкусами",m_h:"Заказать можно в Wolt или Bolt",m_p:"Нажмите на логотип приложения",copied:"«Mini Lavka» скопировано — вставьте в поиск Bolt Food",
tabs:{pizza:"Пицца",lavash:"Лаваш",box:"Кебаб бокс",pita:"Гирос пита",snack:"Закуски"},
d:{lc:"Куриный кебаб, чесночный соус, капуста, томаты, свежие и маринованные огурцы, красный лук",la:"То же, но острое: острый соус",bx:"Картофель фри, овощи и соус",pt:"Пита, куриный кебаб, капуста, томаты, огурцы, красный лук, картофель фри",kid:"Детская",s1:"Куриная",s2:"Хрустящая курица",s3:"С сырными шариками",s4:"С кальмарами и луковыми кольцами"}},
lv:{n_menu:"Ēdienkarte",n_fav:"Favorīti",n_about:"Par mums",n_contacts:"Kontakti",order:"Pasūtīt",f1:"Svaigi un karsti",f2:"Piegāde Bolt un Wolt",f3:"Strādnieku iela 85A",eyebrow:"Mazs veikaliņš ar lielām garšām",lead:"Pica, lavaši, kebaba boksi un gyros pita — karsti, sulīgi un katru dienu. Nāc ciemos vai pasūti ar piegādi.",daily:"katru dienu",menu_sub:"Svaigi un karsti — izvēlies kategoriju",note:"Cenas eiro, uz vietas. Bolt Food un Wolt cenas var atšķirties.",fav_sub:"Tas, ko pasūta visbiežāk",about_h:"Mazs veikaliņš — lielas garšas",about_p:"Mini Lavka ir omulīga vieta Strādnieku ielā Daugavpilī. Gatavojam picas, lavašus, kebaba boksus, gyros pitas un kraukšķīgas uzkodas. Vienmēr priecājamies par jauniem viesiem — esam atvērti katru dienu no 11:00 līdz 20:00.",c_sub:"Gaidām jūs katru dienu",c_addr:"Adrese",c_map:"Atvērt karti",c_phone:"Tālrunis",c_copy:"Kopēt numuru",cn:"Numurs nokopēts",c_hours:"Darba laiks",tag:"Mazs veikaliņš ar lielām garšām",m_h:"Pasūtīt var Wolt vai Bolt",m_p:"Spied uz lietotnes logotipa",copied:"«Mini Lavka» nokopēts — ievieto Bolt Food meklētājā",
tabs:{pizza:"Pica",lavash:"Lavašs",box:"Kebab Box",pita:"Gyros Pita",snack:"Uzkodas"},
d:{lc:"Vistas kebaba gaļa, ķiploku mērce, kāposti, tomāti, svaigi un marinēti gurķi, sarkanie sīpoli",la:"Tas pats, bet ar asu mērci",bx:"Kartupeļi frī, dārzeņi un mērce",pt:"Pita, vistas kebaba gaļa, kāposti, tomāti, gurķi, sarkanie sīpoli, kartupeļi frī",kid:"Bērnu",s1:"Ar vistu",s2:"Ar kraukšķīgo vistu",s3:"Ar kraukšķīgām siera bumbiņām",s4:"Ar kalmāru un sīpolu gredzeniem"}},
en:{n_menu:"Menu",n_fav:"Favorites",n_about:"About",n_contacts:"Contacts",order:"Order now",f1:"Fresh and hot",f2:"Delivery via Bolt and Wolt",f3:"Strādnieku iela 85A",eyebrow:"A small shop with big flavors",lead:"Pizza, lavash wraps, kebab boxes and gyros pita — hot, juicy and every single day. Drop by or order for delivery.",daily:"daily",menu_sub:"Fresh and hot — pick a category",note:"Prices in euro, in-store. Prices on Bolt Food and Wolt may differ.",fav_sub:"What guests order most",about_h:"A small shop with big flavors",about_p:"Mini Lavka is a cozy spot on Strādnieku iela in Daugavpils. We make pizza, lavash wraps, kebab boxes, gyros pita and crispy snacks. New guests are always welcome — we are open every day from 11:00 to 20:00.",c_sub:"We are waiting for you every day",c_addr:"Address",c_map:"Open map",c_phone:"Phone",c_copy:"Copy number",cn:"Number copied",c_hours:"Opening hours",tag:"A small shop with big flavors",m_h:"You can order in Wolt or Bolt",m_p:"Tap the app logo",copied:"“Mini Lavka” copied — paste it into Bolt Food search",
tabs:{pizza:"Pizza",lavash:"Lavash",box:"Kebab Box",pita:"Gyros Pita",snack:"Snacks"},
d:{lc:"Chicken kebab, garlic sauce, cabbage, tomatoes, fresh and pickled cucumbers, red onion",la:"Same, with spicy sauce",bx:"French fries, vegetables and sauce",pt:"Pita, chicken kebab, cabbage, tomatoes, cucumbers, red onion, fries",kid:"Kids",s1:"With chicken",s2:"With crispy chicken",s3:"With crispy cheese bites",s4:"With squid and onion rings"}}};
const FAV={ru:["Пицца Hawai","Лаваш","Донер в булке","Кебаб бокс","Гирос пита","Картофель фри","Хот-дог","Драники"],lv:["Hawai pica","Lavašs","Dönerz maizītē","Kebab Box","Gyros pita","Kartupeļi frī","Hotdogs","Kartupeļu pankūkas"],en:["Hawai pizza","Lavash","Doner in a bun","Kebab Box","Gyros pita","French fries","Hot dog","Potato pancakes"]};
const FK=["pizza","wrap","doner","box","pita","fries","hotdog","draniki"];
const PRICE=(p)=>p.toFixed(2).replace(/\.00$/,".00");

const MENU_NAMES = {
 en: {
  pizza: ['Kebab pizza', 'BBQ pizza', 'Kids’ pizza', 'Tuna pizza', 'Margherita', 'Hawaiian pizza', 'Gurnee pizza', 'White pizza', 'Pepperoni', 'Four cheese pizza'],
  lavash: ['Classic chicken wrap', 'Spicy chicken wrap'],
  pita: ['Pita with cucumber sauce', 'Pita with garlic sauce', 'Pita with spicy sauce'],
  snack: ['French fries', 'Garlic toast with cheese', 'Crispy chicken fillet', 'Crispy cheese bites', 'Squid rings', 'Onion rings']
 },
 ru: {
  pizza: ['Кебаб-пицца', 'Барбекю-пицца', 'Детская пицца', 'Пицца с тунцом', 'Маргарита', 'Гавайская пицца', 'Гурнее', 'Белая пицца', 'Пепперони', 'Четыре сыра'],
  lavash: ['Классический лаваш с курицей', 'Острый лаваш с курицей'],
  pita: ['Пита с огуречным соусом', 'Пита с чесночным соусом', 'Пита с острым соусом'],
  snack: ['Картофель фри', 'Чесночные гренки с сыром', 'Хрустящее куриное филе', 'Хрустящие сырные шарики', 'Кольца кальмара', 'Луковые кольца']
 },
 lv: {
  pizza: ['Kebaba pica', 'BBQ pica', 'Bērnu pica', 'Pica ar tunci', 'Margarita', 'Hawai', 'Gurnee', 'Baltā pica', 'Peperoni', 'Četri sieri'],
  lavash: ['Klasiskais lavašs ar vistu', 'Asais lavašs ar vistu'],
  pita: ['Pita ar gurķu mērci', 'Pita ar ķiploku mērci', 'Pita ar aso mērci'],
  snack: ['Kartupeļi frī', 'Ķiploku grauzdiņi ar sieru', 'Kraukšķīgā vistas fileja', 'Kraukšķīgās siera bumbiņas', 'Kalmāru gredzeni', 'Sīpolu gredzeni']
 }
};
const MENU=(t)=>{
 const n=MENU_NAMES[t===T.en?'en':t===T.lv?'lv':'ru'];
 const rows=(names,prices,descriptions=[])=>names.map((name,i)=>[name,prices[i],descriptions[i]]);
 return {
  pizza:{img:'pizza',it:rows(n.pizza,[9.5,9,8,10,8,9.5,10,8.5,9,9])},
  lavash:{img:'wrap',it:rows(n.lavash,['5.40 / 5.80','5.40 / 5.80'],[t.d.lc,t.d.la])},
  box:{img:'box',it:[[t.d.s1,6,t.d.bx],[t.d.s2,6,t.d.bx],[t.d.s3,6,t.d.bx],[t.d.s4,6,t.d.bx]]},
  pita:{img:'pita',it:rows(n.pita,[5.8,5.8,5.8],[t.d.pt,t.d.pt,t.d.pt])},
  snack:{img:'fries',it:rows(n.snack,[2.5,3.5,3.9,3.9,3.9,3])}
 };
};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.1});function obs(){document.querySelectorAll(".reveal:not(.in)").forEach(e=>io.observe(e))}
let L="ru",tab="pizza";
const $=s=>document.querySelector(s);
function render(){const t=T[L];document.documentElement.lang=L;
document.querySelectorAll("[data-t]").forEach(e=>e.textContent=t[e.dataset.t]);
document.querySelectorAll(".lang button").forEach(b=>(b.classList.toggle("on",b.dataset.l===L),b.setAttribute("aria-pressed",String(b.dataset.l===L))));
$("#tabs").innerHTML=Object.keys(t.tabs).map(k=>`<button class="${k===tab?"on":""}" aria-pressed="${k===tab}" onclick="tab='${k}';render()">${t.tabs[k]}</button>`).join("");
const m=MENU(t)[tab],im=$("#mimg");im.alt=t.tabs[tab];im.src=IMG[m.img];im.classList.remove("fd");void im.offsetWidth;im.classList.add("fd");
$("#items").innerHTML=m.it.map((i,n)=>`<div class="it pop" style="--i:${n}"><div><div class="row"><h3>${i[0]}</h3><i></i><b>€${typeof i[1]==="number"?i[1].toFixed(2):i[1]}</b></div>${i[2]?`<small>${i[2]}</small>`:""}</div></div>`).join("");
$("#favs").innerHTML=FK.map((k,n)=>`<figure class="reveal" style="transition-delay:${n*70}ms"><img src="${IMG[k]}" alt="" loading="lazy"><figcaption>${FAV[L][n]}</figcaption></figure>`).join("");
document.dispatchEvent(new Event("languagechange"));obs();try{localStorage.setItem("ml-lang",L)}catch(e){}}
document.querySelectorAll(".lang button").forEach(b=>b.onclick=()=>{L=b.dataset.l;render()});
let previousFocus;function openM(){previousFocus=document.activeElement;$("#m").classList.add("open");document.body.style.overflow="hidden";$("#m .x").focus()}function closeM(){$("#m").classList.remove("open");document.body.style.overflow="";previousFocus?.focus()}document.addEventListener("keydown",e=>{if(!$("#m").classList.contains("open"))return;if(e.key==="Escape")closeM();if(e.key==="Tab"){const els=[...$("#m").querySelectorAll("button,a[href]")];if(e.shiftKey&&document.activeElement===els[0]){e.preventDefault();els.at(-1).focus()}else if(!e.shiftKey&&document.activeElement===els.at(-1)){e.preventDefault();els[0].focus()}}});
function toast(s){const e=$("#toast");e.textContent=s;e.classList.add("on");setTimeout(()=>e.classList.remove("on"),3800)}
function cp(){const n="+37126307559";const ok=()=>toast(T[L].cn);const fb=()=>{try{const a=document.createElement("textarea");a.value=n;a.style.position="fixed";a.style.opacity="0";document.body.appendChild(a);a.select();document.execCommand("copy");a.remove()}catch(e){}ok()};try{navigator.clipboard.writeText(n).then(ok,fb)}catch(e){fb()}}
function go(a){
if(a==="wolt"){window.open("https://wolt.com/"+(L==="lv"?"lv":"en")+"/lva/daugavpils/restaurant/mini-lavka","_blank","noopener");closeM();return}
try{navigator.clipboard.writeText("Mini Lavka")}catch(e){}
toast(T[L].copied);window.open("https://food.bolt.eu/","_blank","noopener");closeM()}
try{const s=localStorage.getItem("ml-lang");if(s&&T[s])L=s;else{const n=(navigator.language||"").slice(0,2);if(T[n])L=n}}catch(e){}
render();
document.querySelectorAll("section .wrap,.feat").forEach(e=>e.classList.add("reveal"));obs();
const hd=document.querySelector("header"),bar=$("#bar");addEventListener("scroll",()=>{const y=scrollY,m=document.documentElement.scrollHeight-innerHeight;hd.classList.toggle("s",y>20);bar.style.transform="scaleX("+(m>0?y/m:0)+")"},{passive:true});
