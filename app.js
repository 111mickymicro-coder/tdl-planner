const seed = [{"id": 0, "area": "ワールドバザール", "name": "オムニバス", "wait": 30, "ride": 5, "status": "open", "done": false, "service": "none", "x": 45, "y": 46}, {"id": 1, "area": "ワールドバザール", "name": "ペニーアーケード", "wait": 30, "ride": 5, "status": "open", "done": false, "service": "none", "x": 52, "y": 51}, {"id": 2, "area": "アドベンチャーランド", "name": "ウエスタンリバー鉄道", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 20, "y": 55}, {"id": 3, "area": "アドベンチャーランド", "name": "カリブの海賊", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 27, "y": 60}, {"id": 4, "area": "アドベンチャーランド", "name": "ジャングルクルーズ：ワイルドライフ・エクスペディション", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 23, "y": 56}, {"id": 5, "area": "アドベンチャーランド", "name": "スイスファミリー・ツリーハウス", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 19, "y": 61}, {"id": 6, "area": "アドベンチャーランド", "name": "魅惑のチキルーム：スティッチ・プレゼンツ“アロハ・エ・コモ・マイ！”", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 26, "y": 57}, {"id": 7, "area": "ウエスタンランド", "name": "カントリーベア・シアター", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 30, "y": 34}, {"id": 8, "area": "ウエスタンランド", "name": "蒸気船マークトウェイン号", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 26, "y": 30}, {"id": 9, "area": "ウエスタンランド", "name": "トムソーヤ島いかだ", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 33, "y": 26}, {"id": 10, "area": "ウエスタンランド", "name": "ウエスタンランド・シューティングギャラリー", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 29, "y": 31}, {"id": 11, "area": "ウエスタンランド", "name": "ビッグサンダー・マウンテン", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 25, "y": 27}, {"id": 12, "area": "クリッターカントリー", "name": "スプラッシュ・マウンテン", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 44, "y": 20}, {"id": 13, "area": "クリッターカントリー", "name": "ビーバーブラザーズのカヌー探険", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 40, "y": 16}, {"id": 14, "area": "ファンタジーランド", "name": "アリスのティーパーティー", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 63, "y": 51}, {"id": 15, "area": "ファンタジーランド", "name": "キャッスルカルーセル", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 59, "y": 47}, {"id": 16, "area": "ファンタジーランド", "name": "空飛ぶダンボ", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 55, "y": 52}, {"id": 17, "area": "ファンタジーランド", "name": "ホーンテッドマンション", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 62, "y": 48}, {"id": 18, "area": "ファンタジーランド", "name": "イッツ・ア・スモールワールド", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 58, "y": 44}, {"id": 19, "area": "ファンタジーランド", "name": "ピーターパン空の旅", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 54, "y": 49}, {"id": 20, "area": "ファンタジーランド", "name": "ピノキオの冒険旅行", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 61, "y": 45}, {"id": 21, "area": "ファンタジーランド", "name": "プーさんのハニーハント", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 57, "y": 50}, {"id": 22, "area": "ファンタジーランド", "name": "白雪姫と七人のこびと", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 53, "y": 46}, {"id": 23, "area": "ファンタジーランド", "name": "シンデレラのフェアリーテイル・ホール", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 60, "y": 51}, {"id": 24, "area": "ファンタジーランド", "name": "ミッキーのフィルハーマジック", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 56, "y": 47}, {"id": 25, "area": "ファンタジーランド", "name": "美女と野獣“魔法のものがたり”", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 63, "y": 52}, {"id": 26, "area": "トゥーンタウン", "name": "チップとデールのツリーハウス", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 83, "y": 68}, {"id": 27, "area": "トゥーンタウン", "name": "ドナルドのボート", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 79, "y": 64}, {"id": 28, "area": "トゥーンタウン", "name": "グーフィーのペイント＆プレイハウス", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 86, "y": 69}, {"id": 29, "area": "トゥーンタウン", "name": "ガジェットのゴーコースター", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 82, "y": 65}, {"id": 30, "area": "トゥーンタウン", "name": "ロジャーラビットのカートゥーンスピン", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 78, "y": 70}, {"id": 31, "area": "トゥモローランド", "name": "スター・ツアーズ：ザ・アドベンチャーズ・コンティニュー", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 81, "y": 36}, {"id": 32, "area": "トゥモローランド", "name": "スティッチ・エンカウンター", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 77, "y": 41}, {"id": 33, "area": "トゥモローランド", "name": "モンスターズ・インク“ライド＆ゴーシーク！”", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 73, "y": 37}, {"id": 34, "area": "トゥモローランド", "name": "ベイマックスのハッピーライド", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 80, "y": 42}];
const waitPeriods = [
 {key:"opening",label:"開園直後"},
 {key:"nine",label:"9時台"},
 {key:"morning",label:"午前"},
 {key:"noon",label:"昼"},
 {key:"afternoon",label:"午後"},
 {key:"closing",label:"19時〜"}
];
const attractivenessDefaults = {
 "美女と野獣“魔法のものがたり”":5,
 "ベイマックスのハッピーライド":3,
 "モンスターズ・インク“ライド＆ゴーシーク！”":3,
 "プーさんのハニーハント":3,
 "ビッグサンダー・マウンテン":3,
 "スプラッシュ・マウンテン":3,
 "ホーンテッドマンション":3,
 "スター・ツアーズ：ザ・アドベンチャーズ・コンティニュー":1,
 "ジャングルクルーズ：ワイルドライフ・エクスペディション":1,
 "カリブの海賊":1
};
const attractivenessOf = r => Number.isFinite(Number(r.attractiveness)) ? Math.max(0,Number(r.attractiveness)) : (attractivenessDefaults[r.name]||0);

let rides = JSON.parse(localStorage.getItem("tdl_rides_v1") || "null") || seed;
rides.forEach(r=>{ if(r.attractiveness===undefined||r.attractiveness===null||r.attractiveness==="") r.attractiveness=attractivenessDefaults[r.name]||0; if(!r.waitTimes) r.waitTimes={}; if(!r.priority) r.priority="normal"; if(!r.openTime) r.openTime=(r.name==="オムニバス"?"10:30":r.name==="ウエスタンリバー鉄道"?"09:30":"09:00"); if(!r.closeTime) r.closeTime=(r.name==="オムニバス"?"16:30":r.name==="ウエスタンリバー鉄道"?"19:30":"21:00"); });
// 魅力点の初期設定変更：旧設定の2点を1点へ更新（ユーザーが個別変更した値は保持）
const attractionPointRevision="2026-11-16-v2";
if(localStorage.getItem("tdl_attractiveness_revision")!==attractionPointRevision){
 const revisedNames=new Set(["スター・ツアーズ：ザ・アドベンチャーズ・コンティニュー","ジャングルクルーズ：ワイルドライフ・エクスペディション","カリブの海賊"]);
 rides.forEach(r=>{if(revisedNames.has(r.name)&&Number(r.attractiveness)===2)r.attractiveness=1;});
 localStorage.setItem("tdl_attractiveness_revision",attractionPointRevision);
 localStorage.setItem("tdl_rides_v1",JSON.stringify(rides));
}
const initialWaits = {"オムニバス":{"opening":5,"nine":5,"morning":5,"noon":5,"afternoon":5,"closing":5},"ペニーアーケード":{"opening":5,"nine":5,"morning":5,"noon":5,"afternoon":5,"closing":5},"ウエスタンリバー鉄道":{"opening":0,"nine":10,"morning":28,"noon":23,"afternoon":24,"closing":15},"カリブの海賊":{"opening":10,"nine":10,"morning":25,"noon":22,"afternoon":20,"closing":12},"ジャングルクルーズ：ワイルドライフ・エクスペディション":{"opening":5,"nine":15,"morning":35,"noon":32,"afternoon":30,"closing":18},"スイスファミリー・ツリーハウス":{"opening":0,"nine":0,"morning":0,"noon":0,"afternoon":0,"closing":0},"魅惑のチキルーム：スティッチ・プレゼンツ“アロハ・エ・コモ・マイ！”":{"opening":0,"nine":0,"morning":10,"noon":10,"afternoon":10,"closing":10},"カントリーベア・シアター":{"opening":20,"nine":20,"morning":20,"noon":20,"afternoon":20,"closing":10},"蒸気船マークトウェイン号":{"opening":0,"nine":5,"morning":5,"noon":5,"afternoon":0,"closing":0},"トムソーヤ島いかだ":{"opening":0,"nine":5,"morning":5,"noon":5,"afternoon":0,"closing":0},"ウエスタンランド・シューティングギャラリー":{"opening":5,"nine":5,"morning":15,"noon":20,"afternoon":15,"closing":5},"ビッグサンダー・マウンテン":{"opening":5,"nine":60,"morning":60,"noon":50,"afternoon":70,"closing":25},"スプラッシュ・マウンテン":{"opening":25,"nine":160,"morning":120,"noon":110,"afternoon":110,"closing":60},"ビーバーブラザーズのカヌー探険":{"opening":0,"nine":0,"morning":30,"noon":40,"afternoon":35,"closing":15},"アリスのティーパーティー":{"opening":5,"nine":10,"morning":15,"noon":15,"afternoon":15,"closing":8},"キャッスルカルーセル":{"opening":5,"nine":10,"morning":20,"noon":18,"afternoon":22,"closing":10},"空飛ぶダンボ":{"opening":10,"nine":50,"morning":48,"noon":45,"afternoon":45,"closing":32},"ホーンテッドマンション":{"opening":0,"nine":50,"morning":65,"noon":65,"afternoon":60,"closing":25},"イッツ・ア・スモールワールド":{"opening":5,"nine":12,"morning":25,"noon":30,"afternoon":20,"closing":12},"ピーターパン空の旅":{"opening":5,"nine":35,"morning":40,"noon":35,"afternoon":30,"closing":25},"ピノキオの冒険旅行":{"opening":5,"nine":10,"morning":20,"noon":15,"afternoon":12,"closing":8},"プーさんのハニーハント":{"opening":5,"nine":120,"morning":110,"noon":105,"afternoon":105,"closing":90},"白雪姫と七人のこびと":{"opening":5,"nine":20,"morning":25,"noon":25,"afternoon":20,"closing":12},"シンデレラのフェアリーテイル・ホール":{"opening":0,"nine":0,"morning":0,"noon":0,"afternoon":0,"closing":0},"ミッキーのフィルハーマジック":{"opening":5,"nine":10,"morning":15,"noon":15,"afternoon":15,"closing":5},"美女と野獣“魔法のものがたり”":{"opening":120,"nine":180,"morning":155,"noon":135,"afternoon":115,"closing":80},"チップとデールのツリーハウス":{"opening":5,"nine":5,"morning":5,"noon":5,"afternoon":5,"closing":5},"ドナルドのボート":{"opening":5,"nine":5,"morning":5,"noon":5,"afternoon":5,"closing":5},"グーフィーのペイント＆プレイハウス":{"opening":0,"nine":15,"morning":18,"noon":15,"afternoon":15,"closing":5},"ガジェットのゴーコースター":{"opening":5,"nine":20,"morning":35,"noon":33,"afternoon":30,"closing":15},"ロジャーラビットのカートゥーンスピン":{"opening":5,"nine":20,"morning":30,"noon":30,"afternoon":30,"closing":18},"スター・ツアーズ：ザ・アドベンチャーズ・コンティニュー":{"opening":5,"nine":15,"morning":20,"noon":18,"afternoon":15,"closing":8},"スティッチ・エンカウンター":{"opening":0,"nine":0,"morning":0,"noon":0,"afternoon":0,"closing":0},"モンスターズ・インク“ライド＆ゴーシーク！”":{"opening":80,"nine":90,"morning":90,"noon":80,"afternoon":85,"closing":75},"ベイマックスのハッピーライド":{"opening":160,"nine":160,"morning":120,"noon":100,"afternoon":115,"closing":85}};

rides.forEach(r=>{
 if(!r.waitTimes || typeof r.waitTimes!=="object") r.waitTimes={};
 const defaults=initialWaits[r.name]||{};
 Object.entries(defaults).forEach(([k,v])=>{
  if(r.waitTimes[k]===undefined || (k==="opening" && r.name==="美女と野獣“魔法のものがたり”" && r.waitTimes[k]===40) || (k==="opening" && r.name==="ベイマックスのハッピーライド" && r.waitTimes[k]===60) || (r.name==="ビッグサンダー・マウンテン" && r.waitTimes[k]===0)) r.waitTimes[k]=v;
 });
});
// Update only stored values that still match the previous built-in defaults.
// User-edited wait times and all other time buckets remain untouched.
let waitDefaultsMigrated = false;
const waitDefaultMigrations = [
 ["スプラッシュ・マウンテン","opening",90,25],
 ["空飛ぶダンボ","opening",30,10],
 ["ピーターパン空の旅","opening",40,5],
 ["プーさんのハニーハント","opening",120,5],
 ["ガジェットのゴーコースター","opening",10,5],
 ["ガジェットのゴーコースター","nine",35,20],
 ["ウエスタンリバー鉄道","nine",25,10],
 ["カリブの海賊","nine",20,10]
];
waitDefaultMigrations.forEach(([name,period,oldValue,newValue])=>{
 const ride=rides.find(r=>r.name===name);
 if(ride && ride.waitTimes && ride.waitTimes[period]===oldValue){ ride.waitTimes[period]=newValue; waitDefaultsMigrated=true; }
});
if(waitDefaultsMigrated) localStorage.setItem("tdl_rides_v1",JSON.stringify(rides));
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function persist(){localStorage.setItem("tdl_rides_v1",JSON.stringify(rides));
 const settings={};["visitDate","party","start","end","breaks"].forEach(k=>settings[k]=$(k).value);settings.attractivenessEnabled=$("attractivenessEnabled").checked;
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
 <div><label>体験（分）</label><input class="ride" type="number" min="1" value="${r.ride}"></div>
 <div><label>運営状況</label><select class="status"><option value="open" ${r.status==="open"?"selected":""}>運営予定</option><option value="closed" ${r.status==="closed"?"selected":""}>休止</option></select></div>
 <div><label>優先度</label><select class="priority"><option value="top" ${r.priority==="top"?"selected":""}>最優先</option><option value="high" ${r.priority==="high"?"selected":""}>優先</option><option value="normal" ${r.priority!=="top"&&r.priority!=="high"?"selected":""}>通常</option></select></div>
 <div><label>魅力点</label><input class="attractiveness" type="number" min="0" step="1" value="${attractivenessOf(r)}"></div>
 <div><label>運営開始</label><input class="openTime" type="time" value="${r.openTime||"09:00"}"></div>
 <div><label>運営終了</label><input class="closeTime" type="time" value="${r.closeTime||"21:00"}"></div>
 </div></div>`).join("") || '<p class="note">該当する施設がありません。</p>';
 $("cards").querySelectorAll(".item").forEach(el=>{
  const r=rides.find(x=>x.id===Number(el.dataset.id));
  el.querySelector(".done").addEventListener("change",e=>{r.done=e.target.checked;persist();render();});
  ["ride","status","priority","openTime","closeTime","attractiveness"].forEach(k=>el.querySelector("."+k).addEventListener("change",e=>{r[k]=(k==="status"||k==="priority"||k==="openTime"||k==="closeTime")?e.target.value:Math.max(0,Number(e.target.value)||0);persist();}));
 });
 updateStats();
}
$("search").addEventListener("input",render);$("filter").addEventListener("change",render);
function minutes(t){let [h,m]=t.split(":").map(Number);return h*60+m;}
function fmt(m){let h=Math.floor(m/60),mm=m%60;return String(h).padStart(2,"0")+":"+String(mm).padStart(2,"0");}
function periodForTime(t){
 const h=Math.floor(t/60);
 if(t<9*60+20)return "opening";
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
 const attractivenessEnabled=$("attractivenessEnabled").checked,attractivenessTarget=11;
 if(end<=start){$("routeMsg").textContent="閉園時刻は入園時刻より後に設定してください。";return;}
 if(breaks>=end-start){$("routeMsg").textContent="休憩時間が滞在可能時間以上です。休憩時間を短くしてください。";return;}
 const todo=rides.filter(r=>!r.done&&r.status!=="closed");
 const maxBreaks=2;
 const initial={left:todo.slice(),seq:[],clock:start,x:50,y:50,breakCount:0,lunchEnd:null,pendingBreak:false,pendingBreakStart:null,pendingBreakType:null,pendingBreakPreWait:0,top:0,high:0,points:0};
 // 休憩を除いた貪欲な先読みで、各候補から先に進める施設数・優先達成数を推定する。
 // 実際の探索では休憩を独立した行動として追加し、休憩位置も比較する。
 function forecast(state){
  let left=state.left.slice(),clock=state.clock,x=state.x,y=state.y;
  let top=state.top,high=state.high,count=state.seq.length,points=state.points||0;
  while(left.length){
   let chosen=null,bestCost=Infinity;
   for(const r of left){
    const walk=Math.max(3,Math.round(Math.hypot(r.x-x,r.y-y)*0.75));
    const arrival=clock+walk;
    const open=minutes(r.openTime||"09:00"),close=minutes(r.closeTime||"21:00");
    const scheduleWait=Math.max(0,open-arrival),serviceArrival=arrival+scheduleWait;
    const wait=waitAt(r,arrival),rideDuration=Math.max(1,Number(r.ride)||1);
    const finishAt=serviceArrival+wait+rideDuration;
    if(serviceArrival>=close||serviceArrival>=end||finishAt>close||finishAt>end)continue;
    // 今後45分で待ち時間が増える施設は、早く回る価値を加味する。
    const risingQueue=Math.max(0,waitAt(r,arrival+45)-wait);
    const cost=(finishAt-clock)-Math.min(45,risingQueue)*0.65;
    if(cost<bestCost){bestCost=cost;chosen={r,walk,finishAt};}
   }
   if(!chosen)break;
   clock=chosen.finishAt;x=chosen.r.x;y=chosen.r.y;
   if(chosen.r.priority==="top")top++;
   if(chosen.r.priority==="high")high++;
   points+=attractivenessOf(chosen.r);
   count++;left=left.filter(r=>r.id!==chosen.r.id);
  }
  return {forecastTop:top,forecastHigh:high,forecastCount:count,forecastPoints:points,forecastClock:clock};
 }
 const compareStates=(a,b)=>
  (attractivenessEnabled?Number((b.forecastPoints??b.points??0)>=attractivenessTarget)-Number((a.forecastPoints??a.points??0)>=attractivenessTarget):0)||
  (attractivenessEnabled&&((a.forecastPoints??a.points??0)<attractivenessTarget)&&((b.forecastPoints??b.points??0)<attractivenessTarget)?(b.forecastPoints??b.points??0)-(a.forecastPoints??a.points??0):0)||
  (b.forecastTop??b.top)-(a.forecastTop??a.top)||
  (b.forecastHigh??b.high)-(a.forecastHigh??a.high)||
  (b.forecastCount??b.seq.length)-(a.forecastCount??a.seq.length)||
  b.top-a.top||b.high-a.high||b.seq.length-a.seq.length||
  (a.forecastClock??a.clock)-(b.forecastClock??b.clock)||a.clock-b.clock;
 const compareFinished=(a,b)=>
  (attractivenessEnabled?Number((b.points||0)>=attractivenessTarget)-Number((a.points||0)>=attractivenessTarget):0)||
  (attractivenessEnabled&&(a.points||0)<attractivenessTarget&&(b.points||0)<attractivenessTarget?(b.points||0)-(a.points||0):0)||
  b.top-a.top||b.high-a.high||b.seq.length-a.seq.length||a.clock-b.clock;
 let beam=[{...initial,...forecast(initial)}],bestFinished=null;
 const beamWidth=32;
 for(let depth=0;depth<todo.length+maxBreaks+1;depth++){
  const next=[];
  for(const state of beam){
   let expanded=false;
   for(const r of state.left){
    const walk=Math.max(3,Math.round(Math.hypot(r.x-state.x,r.y-state.y)*0.75));
    const breakWait=state.pendingBreak?breaks:0;
    const breakStart=state.pendingBreak?state.pendingBreakStart:state.clock+walk;
    const arrival=state.clock+walk;
    const open=minutes(r.openTime||"09:00"),close=minutes(r.closeTime||"21:00");
    const scheduleWait=Math.max(0,open-arrival),serviceArrival=arrival+scheduleWait;
    if(serviceArrival>=close||serviceArrival>=end)continue;
    const wait=waitAt(r,arrival),rideDuration=Math.max(1,Number(r.ride)||1);
    const finishAt=serviceArrival+wait+rideDuration;
    if(finishAt>close||finishAt>end)continue;
    const chosen={r,walk,breakWait,scheduleWait,wait,rideStart:serviceArrival+wait,finishAt,breakStart,breakType:state.pendingBreakType,breakPreWait:state.pendingBreakPreWait||0};
    next.push({left:state.left.filter(x=>x.id!==r.id),seq:[...state.seq,chosen],clock:finishAt,x:r.x,y:r.y,breakCount:state.breakCount||0,lunchEnd:state.lunchEnd??null,pendingBreak:false,pendingBreakStart:null,pendingBreakType:null,pendingBreakPreWait:0,top:state.top+(r.priority==="top"?1:0),high:state.high+(r.priority==="high"?1:0),points:(state.points||0)+attractivenessOf(r)});
    expanded=true;
   }
   // 昼休憩→夜休憩を必須行動として探索する。
   // 昼：10:00〜14:15。夜：16:00〜20:15、昼休憩終了から120分以上。
   if(!state.pendingBreak&&(state.breakCount||0)<maxBreaks&&breaks>0){
    const isLunch=(state.breakCount||0)===0;
    const windowStart=isLunch?600:960, windowEnd=isLunch?855:1215;
    const restStart=isLunch?Math.max(state.clock,windowStart):Math.max(state.clock,windowStart,(state.lunchEnd||0)+120);
    const restEnd=restStart+breaks;
    if(restStart<=windowEnd&&restEnd<=end){
     next.push({...state,clock:restEnd,breakCount:(state.breakCount||0)+1,lunchEnd:isLunch?restEnd:(state.lunchEnd??null),pendingBreak:true,pendingBreakStart:restStart,pendingBreakType:isLunch?"昼休憩":"夜休憩",pendingBreakPreWait:Math.max(0,restStart-state.clock)});
     expanded=true;
    }
   }
   if(!expanded&&state.breakCount===2&&(!bestFinished||compareFinished(state,bestFinished)<0))bestFinished=state;
  }
  if(!next.length)break;
  // 全展開候補に先読みを適用してからビーム幅で絞り込む。
  next.forEach(s=>Object.assign(s,forecast(s)));
  next.sort(compareStates);
  // 休憩回数ごとに候補を残し、休憩を早取りするだけの探索にならないようにする。
  beam=[0,1,2].flatMap(n=>next.filter(s=>(s.breakCount||0)===n).slice(0,beamWidth));
 }
 // 最終層の候補も終端として比較し、短いルートを誤って最良扱いしない。
 beam.forEach(s=>{
  const canRide=s.left.some(r=>{const walk=Math.max(3,Math.round(Math.hypot(r.x-s.x,r.y-s.y)*0.75));const arrival=s.clock+walk;const open=minutes(r.openTime||"09:00"),close=minutes(r.closeTime||"21:00");const service=Math.max(open,arrival),finish=service+waitAt(r,arrival)+Math.max(1,Number(r.ride)||1);return service<close&&service<end&&finish<=close&&finish<=end;});
  const isLunch=(s.breakCount||0)===0,ws=isLunch?600:960,we=isLunch?855:1215;
  const restStart=isLunch?Math.max(s.clock,ws):Math.max(s.clock,ws,(s.lunchEnd||0)+120);
  const canRest=!s.pendingBreak&&(s.breakCount||0)<2&&breaks>0&&restStart<=we&&restStart+breaks<=end;
  if(!canRide&&!canRest&&s.breakCount===2&&(!bestFinished||compareFinished(s,bestFinished)<0))bestFinished=s;
 });
 const validFinals=[...beam.filter(s=>s.breakCount===2),...(bestFinished&&bestFinished.breakCount===2?[bestFinished]:[])];
 if(!validFinals.length){$("routeMsg").textContent="指定された時間帯と休憩間隔で、昼休憩・夜休憩の両方を組み込めるルートが見つかりません。休憩時間または滞在時間を確認してください。";$("route").innerHTML="";return;}
 let best=validFinals.sort(compareStates)[0];
 let seq=best.seq.slice(),left=best.left.slice(),clock=best.clock;
 const skipped=left.slice();
 // 休憩後に乗る施設がなければ、最後の休憩として表示する。
 let trailingBreak=best.pendingBreak?breaks:0;
 let trailingBreakStart=best.pendingBreakStart;
 const completed=seq.length;
 const priorities={top:todo.filter(r=>r.priority==="top").length,high:todo.filter(r=>r.priority==="high").length,normal:todo.filter(r=>!r.priority||r.priority==="normal").length};
 const doneTop=seq.filter(s=>s.r.priority==="top").length,doneHigh=seq.filter(s=>s.r.priority==="high").length;
 const totalAttractiveness=seq.reduce((sum,s)=>sum+attractivenessOf(s.r),0),attractivenessMet=totalAttractiveness>=attractivenessTarget;
 const attractivenessAlert=attractivenessEnabled?(attractivenessMet?`魅力点条件達成：<b>${totalAttractiveness}点／目標11点以上</b>。`:`<span class="warning"><b>魅力点条件未達成：${totalAttractiveness}点／目標11点以上（あと${attractivenessTarget-totalAttractiveness}点）</b></span>`):`魅力点合計：${totalAttractiveness}点（条件OFF）`;
 const unmetTop=priorities.top-doneTop,unmetHigh=priorities.high-doneHigh;
 const priorityAlert=[unmetTop>0?`<span class="warning"><b>重大：最優先 ${unmetTop}施設が未達成です。</b></span>`:"",unmetHigh>0?`<span class="warning"><b>注意：優先 ${unmetHigh}施設が未達成です。</b></span>`:""].filter(Boolean).join(" ")||"最優先・優先の必須施設はすべてルートに入りました。";
 const usedBreak=seq.reduce((n,s)=>n+s.breakWait,0)+trailingBreak;
 const usedBreakCount=seq.filter(s=>s.breakWait>0).length+(trailingBreak>0?1:0);
 const required=clock-start;
 $("routeMsg").innerHTML=`未体験・運営予定 <b>${todo.length}施設</b> ／ ルートに組み込めた施設 <b>${completed}施設</b> ／ 所要時間の概算 <b>${Math.floor(required/60)}時間${required%60}分</b>（休憩 ${usedBreakCount}回・計${usedBreak}分） ／ 滞在可能時間 <b>${Math.floor((end-start)/60)}時間${(end-start)%60}分</b><br><b>優先設定：</b>最優先 ${doneTop}/${priorities.top}施設・優先 ${doneHigh}/${priorities.high}施設<br><b>魅力点：</b>${attractivenessAlert}<br>${priorityAlert}<br><span class="${skipped.length?"warning":""}">${skipped.length?`時間内または運営時間内に組み込めなかった施設：${skipped.length}施設。最優先・優先の未達成数を確認してください。`:"入力条件上、未体験の運営予定施設をすべて組み込める見込みです。"}</span><br>最優先・優先は乗車必須の条件として扱い、訪問順を先頭に固定せず、最優先の達成数、優先の達成数、全体の体験数の順でルートを比較します。候補を広く比較する近似最適化です。全ての順列を完全探索するものではなく、移動時間はエリア位置からの概算です。`;
 let html="";
 const mainAttractions=seq.filter(s=>attractivenessOf(s.r)>=2);
 html+=`<section class="main-attractions"><h3>主なアトラクション（魅力点2点以上） <span>${mainAttractions.length}施設</span></h3>${mainAttractions.length?`<ul>${mainAttractions.map(s=>`<li><b>${esc(s.r.name)}</b><span>${attractivenessOf(s.r)}点</span></li>`).join("")}</ul>`:`<p class="note">今回のルートには魅力点2点以上のアトラクションがありません。</p>`}</section>`;
 seq.forEach((s,i)=>{
  if(s.breakWait>0){html+=`<div class="routeitem"><span class="num">☕</span><div><b>${esc(s.breakType||"休憩")}</b><small>${s.breakPreWait?`開始まで待機 ${s.breakPreWait}分 ・ `:""}${s.breakWait}分 ・ ${fmt(s.breakStart)}〜${fmt(s.breakStart+s.breakWait)}</small></div></div>`;}
  if(s.scheduleWait>0){html+=`<div class="routeitem"><span class="num">⌛</span><div><b>${esc(s.r.name)}の営業開始待ち</b><small>${s.scheduleWait}分待機 ・ 営業開始 ${esc(s.r.openTime||"09:00")}</small></div></div>`;}
  const tag=s.r.priority==="top"?"【最優先】":s.r.priority==="high"?"【優先】":"";
  html+=`<div class="routeitem"><span class="num">${i+1}</span><div><b>${tag}${esc(s.r.name)}</b><small>魅力点 ${attractivenessOf(s.r)}点 ・ ${esc(s.r.area)} ・ 体験開始 ${fmt(s.rideStart)}／終了 ${fmt(s.finishAt)} ・ 移動 ${s.walk}分 + 営業開始待ち ${s.scheduleWait}分 + 待ち ${s.wait}分 + 体験 ${s.r.ride}分（営業 ${esc(s.r.openTime||"09:00")}〜${esc(s.r.closeTime||"21:00")}）</small></div></div>`;
 });
 if(trailingBreak){html+=`<div class="routeitem"><span class="num">☕</span><div><b>${esc(best.pendingBreakType||"休憩")}</b><small>${best.pendingBreakPreWait?`開始まで待機 ${best.pendingBreakPreWait}分 ・ `:""}${trailingBreak}分 ・ ${fmt(trailingBreakStart)}〜${fmt(trailingBreakStart+trailingBreak)}</small></div></div>`;}
 if(skipped.length){html+=`<h3>今回のルートに入らなかった施設</h3>`+skipped.map(r=>{const open=minutes(r.openTime||"09:00"),close=minutes(r.closeTime||"21:00");let reason="残り時間または運営終了までに収まらないため";if(open>=end || close<=start)reason="運営時間外";else if(clock>=close)reason="運営終了時刻を過ぎるため";return `<div class="routeitem"><span class="num">!</span><div><b>${r.priority==="top"?"【最優先】":r.priority==="high"?"【優先】":""}${esc(r.name)}</b><small>${esc(r.area)} ・ ${reason}（営業 ${esc(r.openTime||"09:00")}〜${esc(r.closeTime||"21:00")}）</small></div></div>`;}).join("");}
 $("route").innerHTML=html||'<p class="note">未体験の運営予定施設はありません。</p>';
}
$("calc").addEventListener("click",calc);
$("attractivenessEnabled").addEventListener("change",()=>{persist();$("routeMsg").textContent="魅力点条件の設定を保存しました。再計算してください。";});
$("save").addEventListener("click",()=>{persist();$("routeMsg").textContent="この端末に保存しました。";});
$("reset").addEventListener("click",()=>{if(confirm("施設の入力内容を初期状態に戻しますか？")){$("attractivenessEnabled").checked=false;rides=seed.map(r=>({...r,attractiveness:attractivenessDefaults[r.name]||0,priority:"normal",openTime:r.name==="オムニバス"?"10:30":r.name==="ウエスタンリバー鉄道"?"09:30":"09:00",closeTime:r.name==="オムニバス"?"16:30":r.name==="ウエスタンリバー鉄道"?"19:30":"21:00",status:"open",waitTimes:{...(initialWaits[r.name]||{})}}));if($("visitDate").value==="2026-11-22")applyNov22Preset();else applyDefaultHours();persist();render();renderWaitSettings();$("route").innerHTML="";$("routeMsg").textContent="初期状態に戻しました。";}});
$("export").addEventListener("click",()=>{let blob=new Blob([JSON.stringify({rides,settings:{...Object.fromEntries(["visitDate","party","start","end","breaks"].map(k=>[k,$(k).value])),attractivenessEnabled:$("attractivenessEnabled").checked}},null,2)],{type:"application/json"});let a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="tdl-planner-backup.json";a.click();URL.revokeObjectURL(a.href);});
$("importBtn").addEventListener("click",()=>$("file").click());
$("file").addEventListener("change",async e=>{let f=e.target.files[0];if(!f)return;try{let d=JSON.parse(await f.text());if(!Array.isArray(d.rides))throw Error();rides=d.rides;rides.forEach(r=>{if(r.attractiveness===undefined||r.attractiveness===null)r.attractiveness=attractivenessDefaults[r.name]||0;if(!r.waitTimes)r.waitTimes={};if(!r.priority)r.priority="normal";if(!r.openTime)r.openTime="09:00";if(!r.closeTime)r.closeTime="21:00";});persist();render();renderWaitSettings();alert("読み込みました");}catch{alert("JSONファイルを読み込めませんでした");}});
$("visitDate").value="2026-11-22";
function applyGenericHours(){rides.forEach(r=>{r.openTime="09:00";r.closeTime="21:00";});["スイスファミリー・ツリーハウス","シンデレラのフェアリーテイル・ホール","スティッチ・エンカウンター"].forEach(n=>{const r=rides.find(x=>x.name===n);if(r)r.status="open";});}
// 11月22日に設定した施設別営業時間を、全日付共通の初期値として適用する。
function applyDefaultHours(){
 applyGenericHours();
 const byName=Object.fromEntries(rides.map(r=>[r.name,r]));
 const specialHours={
  "オムニバス":["10:30","16:30"],
  "ウエスタンリバー鉄道":["09:30","19:30"],
  "魅惑のチキルーム：スティッチ・プレゼンツ“アロハ・エ・コモ・マイ！”":["10:00","20:00"],
  "カントリーベア・シアター":["10:00","20:00"],
  "蒸気船マークトウェイン号":["10:00","19:25"],
  "トムソーヤ島いかだ":["10:00","15:45"],
  "ビーバーブラザーズのカヌー探険":["10:00","16:00"],
  "グーフィーのペイント＆プレイハウス":["10:00","20:00"]
 };
 Object.entries(specialHours).forEach(([name,times])=>{const r=byName[name];if(r){r.openTime=times[0];r.closeTime=times[1];}});
}
function applyNov22Preset(){
 applyDefaultHours();
 const byName=Object.fromEntries(rides.map(r=>[r.name,r]));
 ["スイスファミリー・ツリーハウス","シンデレラのフェアリーテイル・ホール","スティッチ・エンカウンター"].forEach(n=>{if(byName[n])byName[n].status="closed";});
}
function updateOfficialHoursLink(){const d=($("visitDate").value||"2026-11-22").replaceAll("-","");const a=$("officialHours");if(a)a.href=`https://www.tokyodisneyresort.jp/tdl/attraction.html#day=${d}`;}
const savedSettings=JSON.parse(localStorage.getItem("tdl_settings_v1")||"null");
if(savedSettings)Object.entries(savedSettings).forEach(([k,v])=>{if(k==="attractivenessEnabled")$("attractivenessEnabled").checked=!!v;else if($(k))$(k).value=v;});
if($("visitDate").value==="2026-11-22" && localStorage.getItem("tdl_hours_preset_20261122_v4")!=="1"){
 applyNov22Preset();localStorage.setItem("tdl_hours_preset_20261122_v4","1");persist();
}
$("visitDate").addEventListener("change",()=>{
 updateOfficialHoursLink();
 if($("visitDate").value==="2026-11-22")applyNov22Preset();
 else applyDefaultHours();
 persist();render();
});
updateOfficialHoursLink();
render();
renderWaitSettings();
