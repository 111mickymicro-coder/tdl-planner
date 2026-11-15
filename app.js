const seed = [{"id": 0, "area": "ワールドバザール", "name": "オムニバス", "wait": 30, "ride": 5, "status": "open", "done": false, "service": "none", "x": 45, "y": 46}, {"id": 1, "area": "ワールドバザール", "name": "ペニーアーケード", "wait": 30, "ride": 5, "status": "open", "done": false, "service": "none", "x": 52, "y": 51}, {"id": 2, "area": "アドベンチャーランド", "name": "ウエスタンリバー鉄道", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 20, "y": 55}, {"id": 3, "area": "アドベンチャーランド", "name": "カリブの海賊", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 27, "y": 60}, {"id": 4, "area": "アドベンチャーランド", "name": "ジャングルクルーズ：ワイルドライフ・エクスペディション", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 23, "y": 56}, {"id": 5, "area": "アドベンチャーランド", "name": "スイスファミリー・ツリーハウス", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 19, "y": 61}, {"id": 6, "area": "アドベンチャーランド", "name": "魅惑のチキルーム：スティッチ・プレゼンツ“アロハ・エ・コモ・マイ！”", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 26, "y": 57}, {"id": 7, "area": "ウエスタンランド", "name": "カントリーベア・シアター", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 30, "y": 34}, {"id": 8, "area": "ウエスタンランド", "name": "蒸気船マークトウェイン号", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 26, "y": 30}, {"id": 9, "area": "ウエスタンランド", "name": "トムソーヤ島いかだ", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 33, "y": 26}, {"id": 10, "area": "ウエスタンランド", "name": "ウエスタンランド・シューティングギャラリー", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 29, "y": 31}, {"id": 11, "area": "ウエスタンランド", "name": "ビッグサンダー・マウンテン", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 25, "y": 27}, {"id": 12, "area": "クリッターカントリー", "name": "スプラッシュ・マウンテン", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 44, "y": 20}, {"id": 13, "area": "クリッターカントリー", "name": "ビーバーブラザーズのカヌー探険", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 40, "y": 16}, {"id": 14, "area": "ファンタジーランド", "name": "アリスのティーパーティー", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 63, "y": 51}, {"id": 15, "area": "ファンタジーランド", "name": "キャッスルカルーセル", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 59, "y": 47}, {"id": 16, "area": "ファンタジーランド", "name": "空飛ぶダンボ", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 55, "y": 52}, {"id": 17, "area": "ファンタジーランド", "name": "ホーンテッドマンション", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 62, "y": 48}, {"id": 18, "area": "ファンタジーランド", "name": "イッツ・ア・スモールワールド", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 58, "y": 44}, {"id": 19, "area": "ファンタジーランド", "name": "ピーターパン空の旅", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 54, "y": 49}, {"id": 20, "area": "ファンタジーランド", "name": "ピノキオの冒険旅行", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 61, "y": 45}, {"id": 21, "area": "ファンタジーランド", "name": "プーさんのハニーハント", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 57, "y": 50}, {"id": 22, "area": "ファンタジーランド", "name": "白雪姫と七人のこびと", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 53, "y": 46}, {"id": 23, "area": "ファンタジーランド", "name": "シンデレラのフェアリーテイル・ホール", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 60, "y": 51}, {"id": 24, "area": "ファンタジーランド", "name": "ミッキーのフィルハーマジック", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 56, "y": 47}, {"id": 25, "area": "ファンタジーランド", "name": "美女と野獣“魔法のものがたり”", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 63, "y": 52}, {"id": 26, "area": "トゥーンタウン", "name": "チップとデールのツリーハウス", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 83, "y": 68}, {"id": 27, "area": "トゥーンタウン", "name": "ドナルドのボート", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 79, "y": 64}, {"id": 28, "area": "トゥーンタウン", "name": "グーフィーのペイント＆プレイハウス", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 86, "y": 69}, {"id": 29, "area": "トゥーンタウン", "name": "ガジェットのゴーコースター", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 82, "y": 65}, {"id": 30, "area": "トゥーンタウン", "name": "ロジャーラビットのカートゥーンスピン", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 78, "y": 70}, {"id": 31, "area": "トゥモローランド", "name": "スター・ツアーズ：ザ・アドベンチャーズ・コンティニュー", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 81, "y": 36}, {"id": 32, "area": "トゥモローランド", "name": "スティッチ・エンカウンター", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 77, "y": 41}, {"id": 33, "area": "トゥモローランド", "name": "モンスターズ・インク“ライド＆ゴーシーク！”", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 73, "y": 37}, {"id": 34, "area": "トゥモローランド", "name": "ベイマックスのハッピーライド", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 80, "y": 42}];
const waitPeriods = [
 {key:"opening",label:"開園直後"},
 {key:"nine",label:"9時台"},
 {key:"morning",label:"午前"},
 {key:"noon",label:"昼"},
 {key:"afternoon",label:"午後"},
 {key:"closing",label:"19時〜"}
];
let rides = JSON.parse(localStorage.getItem("tdl_rides_v1") || "null") || seed;
rides.forEach(r=>{ if(!r.waitTimes) r.waitTimes={}; });
const initialWaits = {"オムニバス":{"opening":5,"nine":5,"morning":5,"noon":5,"afternoon":5,"closing":5},"ペニーアーケード":{"opening":5,"nine":5,"morning":5,"noon":5,"afternoon":5,"closing":5},"ウエスタンリバー鉄道":{"opening":0,"nine":25,"morning":28,"noon":23,"afternoon":24,"closing":15},"カリブの海賊":{"opening":10,"nine":20,"morning":25,"noon":22,"afternoon":20,"closing":12},"ジャングルクルーズ：ワイルドライフ・エクスペディション":{"opening":5,"nine":15,"morning":35,"noon":32,"afternoon":30,"closing":18},"スイスファミリー・ツリーハウス":{"opening":0,"nine":0,"morning":0,"noon":0,"afternoon":0,"closing":0},"魅惑のチキルーム：スティッチ・プレゼンツ“アロハ・エ・コモ・マイ！”":{"opening":0,"nine":0,"morning":10,"noon":10,"afternoon":10,"closing":10},"カントリーベア・シアター":{"opening":20,"nine":20,"morning":20,"noon":20,"afternoon":20,"closing":10},"蒸気船マークトウェイン号":{"opening":0,"nine":5,"morning":5,"noon":5,"afternoon":0,"closing":0},"トムソーヤ島いかだ":{"opening":0,"nine":5,"morning":5,"noon":5,"afternoon":0,"closing":0},"ウエスタンランド・シューティングギャラリー":{"opening":5,"nine":5,"morning":15,"noon":20,"afternoon":15,"closing":5},"ビッグサンダー・マウンテン":{"opening":0,"nine":0,"morning":0,"noon":0,"afternoon":0,"closing":0},"スプラッシュ・マウンテン":{"opening":90,"nine":160,"morning":120,"noon":110,"afternoon":110,"closing":60},"ビーバーブラザーズのカヌー探険":{"opening":0,"nine":0,"morning":30,"noon":40,"afternoon":35,"closing":15},"アリスのティーパーティー":{"opening":5,"nine":10,"morning":15,"noon":15,"afternoon":15,"closing":8},"キャッスルカルーセル":{"opening":5,"nine":10,"morning":20,"noon":18,"afternoon":22,"closing":10},"空飛ぶダンボ":{"opening":30,"nine":50,"morning":48,"noon":45,"afternoon":45,"closing":32},"ホーンテッドマンション":{"opening":0,"nine":50,"morning":65,"noon":65,"afternoon":60,"closing":25},"イッツ・ア・スモールワールド":{"opening":5,"nine":12,"morning":25,"noon":30,"afternoon":20,"closing":12},"ピーターパン空の旅":{"opening":40,"nine":35,"morning":40,"noon":35,"afternoon":30,"closing":25},"ピノキオの冒険旅行":{"opening":5,"nine":10,"morning":20,"noon":15,"afternoon":12,"closing":8},"プーさんのハニーハント":{"opening":120,"nine":120,"morning":110,"noon":105,"afternoon":105,"closing":90},"白雪姫と七人のこびと":{"opening":5,"nine":20,"morning":25,"noon":25,"afternoon":20,"closing":12},"シンデレラのフェアリーテイル・ホール":{"opening":0,"nine":0,"morning":0,"noon":0,"afternoon":0,"closing":0},"ミッキーのフィルハーマジック":{"opening":5,"nine":10,"morning":15,"noon":15,"afternoon":15,"closing":5},"美女と野獣“魔法のものがたり”":{"opening":120,"nine":180,"morning":155,"noon":135,"afternoon":115,"closing":80},"チップとデールのツリーハウス":{"opening":5,"nine":5,"morning":5,"noon":5,"afternoon":5,"closing":5},"ドナルドのボート":{"opening":5,"nine":5,"morning":5,"noon":5,"afternoon":5,"closing":5},"グーフィーのペイント＆プレイハウス":{"opening":0,"nine":15,"morning":18,"noon":15,"afternoon":15,"closing":5},"ガジェットのゴーコースター":{"opening":10,"nine":35,"morning":35,"noon":33,"afternoon":30,"closing":15},"ロジャーラビットのカートゥーンスピン":{"opening":5,"nine":20,"morning":30,"noon":30,"afternoon":30,"closing":18},"スター・ツアーズ：ザ・アドベンチャーズ・コンティニュー":{"opening":5,"nine":15,"morning":20,"noon":18,"afternoon":15,"closing":8},"スティッチ・エンカウンター":{"opening":0,"nine":0,"morning":0,"noon":0,"afternoon":0,"closing":0},"モンスターズ・インク“ライド＆ゴーシーク！”":{"opening":80,"nine":90,"morning":90,"noon":80,"afternoon":85,"closing":75},"ベイマックスのハッピーライド":{"opening":160,"nine":160,"morning":120,"noon":100,"afternoon":115,"closing":85}};

rides.forEach(r=>{
 if(!r.waitTimes || typeof r.waitTimes!=="object") r.waitTimes={};
 const defaults=initialWaits[r.name]||{};
 Object.entries(defaults).forEach(([k,v])=>{
  if(r.waitTimes[k]===undefined || (k==="opening" && r.name==="美女と野獣“魔法のものがたり”" && r.waitTimes[k]===40) || (k==="opening" && r.name==="ベイマックスのハッピーライド" && r.waitTimes[k]===60)) r.waitTimes[k]=v;
 });
});
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function persist(){localStorage.setItem("tdl_rides_v1",JSON.stringify(rides));
 const settings={};["visitDate","party","start","end","breaks"].forEach(k=>settings[k]=$(k).value);
 localStorage.setItem("tdl_settings_v1",JSON.stringify(settings));updateStats();}
function updateStats(){let d=rides.filter(x=>x.done).length;$("total").textContent=rides.length;$("doneCount").textContent=d;$("remain").textContent=rides.length-d;}
function renderWaitSettings(){
 const areas=[...new Set(rides.map(r=>r.area))];
 $("waitSettings").innerHTML=areas.map((area,idx)=>{
  const list=rides.filter(r=>r.area===area);
  const rows=list.map(r=>`<div class="wait-name">${esc(r.name)}</div>`+waitPeriods.map(p=>`<div class="wait-cell"><input type="number" min="0" step="1" inputmode="numeric" placeholder="—" aria-label="${esc(r.name)} ${p.label}" data-ride="${r.id}" data-period="${p.key}" value="${r.waitTimes?.[p.key]??""}"></div>`).join("")).join("");
  return `<details class="wait-area" ${idx===0?"open":""}><summary>${esc(area)} <span class="wait-save">${list.length}施設</span></summary><div class="wait-scroll"><div class="wait-grid"><div class="wait-head">アトラクション</div>${waitPeriods.map(p=>`<div class="wait-head">${p.label}</div>`).join("")}${rows}</div></div></details>`;
 }).join("");
 $("waitSettings").querySelectorAll("input[data-ride]").forEach(input=>{
  input.addEventListener("input",()=>{
   const ride=rides.find(r=>String(r.id)===input.dataset.ride);
   if(!ride)return;
   if(!ride.waitTimes)ride.waitTimes={};
   const raw=input.value.trim();
   if(raw==="") delete ride.waitTimes[input.dataset.period];
   else ride.waitTimes[input.dataset.period]=Math.max(0,Math.floor(Number(raw)||0));
   localStorage.setItem("tdl_rides_v1",JSON.stringify(rides));
   $("waitSaved").textContent="保存済み";
  });
 });
}
$("waitOpenAll")?.addEventListener("click",()=>document.querySelectorAll(".wait-area").forEach(x=>x.open=true));
$("waitCloseAll")?.addEventListener("click",()=>document.querySelectorAll(".wait-area").forEach(x=>x.open=false));

function render(){
 const q=$("search").value.trim().toLowerCase(),f=$("filter").value;
 $("cards").innerHTML=rides.filter(r=>(!q||(r.name+" "+r.area).toLowerCase().includes(q))&&(f==="all"||(f==="open"&&r.status==="open")||(f==="closed"&&r.status==="closed")||(f==="todo"&&!r.done)||(f==="done"&&r.done))).map(r=>`
 <div class="item" data-id="${r.id}">
 <div class="itemtop"><input class="check done" type="checkbox" ${r.done?"checked":""} aria-label="体験済み"><strong>${esc(r.name)}</strong><small>${esc(r.area)}</small></div>
 <div class="fields">
 <div><label>待ち時間（分）</label><input class="wait" type="number" min="0" value="${r.wait}"></div>
 <div><label>体験（分）</label><input class="ride" type="number" min="1" value="${r.ride}"></div>
 <div><label>運営状況</label><select class="status"><option value="open" ${r.status==="open"?"selected":""}>運営予定</option><option value="closed" ${r.status==="closed"?"selected":""}>休止</option></select></div>
 </div></div>`).join("") || '<p class="note">該当する施設がありません。</p>';
 $("cards").querySelectorAll(".item").forEach(el=>{
  const r=rides.find(x=>x.id===Number(el.dataset.id));
  el.querySelector(".done").addEventListener("change",e=>{r.done=e.target.checked;persist();render();});
  ["wait","ride","status"].forEach(k=>el.querySelector("."+k).addEventListener("change",e=>{r[k]=k==="status"?e.target.value:Math.max(0,Number(e.target.value)||0);persist();}));
 });
 updateStats();
}
$("search").addEventListener("input",render);$("filter").addEventListener("change",render);
function minutes(t){let [h,m]=t.split(":").map(Number);return h*60+m;}
function fmt(m){let h=Math.floor(m/60),mm=m%60;return String(h).padStart(2,"0")+":"+String(mm).padStart(2,"0");}
function periodForTime(t){
 const h=Math.floor(t/60);
 if(t<9*60)return "opening";
 if(h===9)return "nine";
 if(t<12*60)return "morning";
 if(t<14*60)return "noon";
 if(t<19*60)return "afternoon";
 return "closing";
}
function waitAt(r,t){
 const key=periodForTime(t),v=r.waitTimes?.[key];
 return v===undefined||v===null||v===""?Math.max(0,Number(r.wait)||0):Math.max(0,Number(v)||0);
}

function calc(){
 const start=minutes($("start").value),end=minutes($("end").value),breaks=Math.max(0,Number($("breaks").value)||0);
 const available=end-start-breaks, todo=rides.filter(r=>!r.done&&r.status!=="closed");
 if(end<=start){$("routeMsg").textContent="閉園時刻は入園時刻より後に設定してください。";return;}
 // Greedy nearest-neighbour ordering using rough area coordinates.
 let left=todo.slice(),x=50,y=50,seq=[],total=0;
 while(left.length){
  let bi=0,bc=Infinity;
  left.forEach((r,i)=>{let walk=Math.max(3,Math.round(Math.hypot(r.x-x,r.y-y)*0.75));let w=waitAt(r,start+total+walk);let c=walk+w+r.ride;if(c<bc){bc=c;bi=i;}});
  let r=left.splice(bi,1)[0],walk=Math.max(3,Math.round(Math.hypot(r.x-x,r.y-y)*0.75));
  let wait=waitAt(r,start+total+walk);total+=walk+wait+r.ride;seq.push({r,walk,wait});x=r.x;y=r.y;
 }
 const best={seq,total};
 const required=best.total+breaks;
 const possible=required<=end-start;
 $("routeMsg").innerHTML=`未体験・運営予定 <b>${todo.length}施設</b> ／ 必要時間の概算 <b>${Math.floor(required/60)}時間${required%60}分</b>（休憩 ${breaks}分を含む） ／ 滞在可能時間 <b>${Math.floor((end-start)/60)}時間${(end-start)%60}分</b><br><span class="${possible?"":"warning"}">${possible?"入力条件上は時間内に収まる見込みです。":"現在の入力条件では時間が不足する見込みです。"}</span><br>休憩はルート中間にまとめて確保する想定です。歩行時間はエリア位置を使った概算です。`;
 let clock=start, html="";
 best.seq.forEach((s,i)=>{clock+=s.walk+s.wait;let arrive=fmt(clock);clock+=s.r.ride;
  html+=`<div class="routeitem"><span class="num">${i+1}</span><div><b>${esc(s.r.name)}</b><small>${esc(s.r.area)} ・ 到着目安 ${arrive} ・ 移動 ${s.walk}分 + 待ち ${s.wait}分 + 体験 ${s.r.ride}分</small></div></div>`;
  if(breaks>0 && i===Math.floor((best.seq.length-1)/2)){clock+=breaks;html+=`<div class="routeitem"><span class="num">☕</span><div><b>休憩</b><small>${breaks}分 ・ 終了目安 ${fmt(clock)}</small></div></div>`;}
 });
 $("route").innerHTML=html||'<p class="note">未体験の運営予定施設はありません。</p>';
}
$("calc").addEventListener("click",calc);
$("save").addEventListener("click",()=>{persist();$("routeMsg").textContent="この端末に保存しました。";});
$("reset").addEventListener("click",()=>{if(confirm("施設の入力内容を初期状態に戻しますか？")){rides=seed.map(r=>({...r,waitTimes:{...(initialWaits[r.name]||{})}}));persist();render();renderWaitSettings();$("route").innerHTML="";$("routeMsg").textContent="初期状態に戻しました。";}});
$("export").addEventListener("click",()=>{let blob=new Blob([JSON.stringify({rides,settings:Object.fromEntries(["visitDate","party","start","end","breaks"].map(k=>[k,$(k).value]))},null,2)],{type:"application/json"});let a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="tdl-planner-backup.json";a.click();URL.revokeObjectURL(a.href);});
$("importBtn").addEventListener("click",()=>$("file").click());
$("file").addEventListener("change",async e=>{let f=e.target.files[0];if(!f)return;try{let d=JSON.parse(await f.text());if(!Array.isArray(d.rides))throw Error();rides=d.rides;rides.forEach(r=>{if(!r.waitTimes)r.waitTimes={};});persist();render();renderWaitSettings();alert("読み込みました");}catch{alert("JSONファイルを読み込めませんでした");}});
$("visitDate").value=new Date().toISOString().slice(0,10);
const savedSettings=JSON.parse(localStorage.getItem("tdl_settings_v1")||"null");
if(savedSettings)Object.entries(savedSettings).forEach(([k,v])=>{if($(k))$(k).value=v;});
render();
renderWaitSettings();
