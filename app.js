const seed = [{"id": 0, "area": "ワールドバザール", "name": "オムニバス", "wait": 30, "ride": 5, "status": "open", "done": false, "service": "none", "x": 45, "y": 46}, {"id": 1, "area": "ワールドバザール", "name": "ペニーアーケード", "wait": 30, "ride": 5, "status": "open", "done": false, "service": "none", "x": 52, "y": 51}, {"id": 2, "area": "アドベンチャーランド", "name": "ウエスタンリバー鉄道", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 20, "y": 55}, {"id": 3, "area": "アドベンチャーランド", "name": "カリブの海賊", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 27, "y": 60}, {"id": 4, "area": "アドベンチャーランド", "name": "ジャングルクルーズ：ワイルドライフ・エクスペディション", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 23, "y": 56}, {"id": 5, "area": "アドベンチャーランド", "name": "スイスファミリー・ツリーハウス", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 19, "y": 61}, {"id": 6, "area": "アドベンチャーランド", "name": "魅惑のチキルーム：スティッチ・プレゼンツ“アロハ・エ・コモ・マイ！”", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 26, "y": 57}, {"id": 7, "area": "ウエスタンランド", "name": "カントリーベア・シアター", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 30, "y": 34}, {"id": 8, "area": "ウエスタンランド", "name": "蒸気船マークトウェイン号", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 26, "y": 30}, {"id": 9, "area": "ウエスタンランド", "name": "トムソーヤ島いかだ", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 33, "y": 26}, {"id": 10, "area": "ウエスタンランド", "name": "ウエスタンランド・シューティングギャラリー", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 29, "y": 31}, {"id": 11, "area": "ウエスタンランド", "name": "ビッグサンダー・マウンテン", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 25, "y": 27}, {"id": 12, "area": "クリッターカントリー", "name": "スプラッシュ・マウンテン", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 44, "y": 20}, {"id": 13, "area": "クリッターカントリー", "name": "ビーバーブラザーズのカヌー探険", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 40, "y": 16}, {"id": 14, "area": "ファンタジーランド", "name": "アリスのティーパーティー", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 63, "y": 51}, {"id": 15, "area": "ファンタジーランド", "name": "キャッスルカルーセル", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 59, "y": 47}, {"id": 16, "area": "ファンタジーランド", "name": "空飛ぶダンボ", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 55, "y": 52}, {"id": 17, "area": "ファンタジーランド", "name": "ホーンテッドマンション", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 62, "y": 48}, {"id": 18, "area": "ファンタジーランド", "name": "イッツ・ア・スモールワールド", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 58, "y": 44}, {"id": 19, "area": "ファンタジーランド", "name": "ピーターパン空の旅", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 54, "y": 49}, {"id": 20, "area": "ファンタジーランド", "name": "ピノキオの冒険旅行", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 61, "y": 45}, {"id": 21, "area": "ファンタジーランド", "name": "プーさんのハニーハント", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 57, "y": 50}, {"id": 22, "area": "ファンタジーランド", "name": "白雪姫と七人のこびと", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 53, "y": 46}, {"id": 23, "area": "ファンタジーランド", "name": "シンデレラのフェアリーテイル・ホール", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 60, "y": 51}, {"id": 24, "area": "ファンタジーランド", "name": "ミッキーのフィルハーマジック", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 56, "y": 47}, {"id": 25, "area": "ファンタジーランド", "name": "美女と野獣“魔法のものがたり”", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 63, "y": 52}, {"id": 26, "area": "トゥーンタウン", "name": "チップとデールのツリーハウス", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 83, "y": 68}, {"id": 27, "area": "トゥーンタウン", "name": "ドナルドのボート", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 79, "y": 64}, {"id": 28, "area": "トゥーンタウン", "name": "グーフィーのペイント＆プレイハウス", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 86, "y": 69}, {"id": 29, "area": "トゥーンタウン", "name": "ガジェットのゴーコースター", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 82, "y": 65}, {"id": 30, "area": "トゥーンタウン", "name": "ロジャーラビットのカートゥーンスピン", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 78, "y": 70}, {"id": 31, "area": "トゥモローランド", "name": "スター・ツアーズ：ザ・アドベンチャーズ・コンティニュー", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 81, "y": 36}, {"id": 32, "area": "トゥモローランド", "name": "スティッチ・エンカウンター", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 77, "y": 41}, {"id": 33, "area": "トゥモローランド", "name": "モンスターズ・インク“ライド＆ゴーシーク！”", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 73, "y": 37}, {"id": 34, "area": "トゥモローランド", "name": "ベイマックスのハッピーライド", "wait": 30, "ride": 8, "status": "open", "done": false, "service": "none", "x": 80, "y": 42}];
const waitPeriods = [
 {key:"opening",label:"開園直後"},
 {key:"nine",label:"9時台"},
 {key:"morning",label:"午前"},
 {key:"noon",label:"昼"},
 {key:"afternoon",label:"午後"},
 {key:"closing",label:"19時〜"}
];
function readStored(key){try{return JSON.parse(localStorage.getItem(key)||"null");}catch{return null;}}
const storedRides=readStored("tdl_rides_v1");
let rides=Array.isArray(storedRides)?seed.map(base=>{
 const saved=storedRides.find(r=>r.id===base.id)||{};
 return {...base,...saved,waitTimes:{...(saved.waitTimes||{})}};
}):seed.map(r=>({...r,waitTimes:{}}));
rides.forEach(r=>{
 if(!["top","high","normal"].includes(r.priority))r.priority="normal";
 r.ride=Math.max(1,Number(r.ride)||8);
 if(!r.openTime)r.openTime=(r.name==="オムニバス"?"10:30":r.name==="ウエスタンリバー鉄道"?"09:30":"09:00");
 if(!r.closeTime)r.closeTime=(r.name==="オムニバス"?"16:30":r.name==="ウエスタンリバー鉄道"?"19:30":"21:00");
});
const initialWaits = {"オムニバス":{"opening":5,"nine":5,"morning":5,"noon":5,"afternoon":5,"closing":5},"ペニーアーケード":{"opening":5,"nine":5,"morning":5,"noon":5,"afternoon":5,"closing":5},"ウエスタンリバー鉄道":{"opening":0,"nine":25,"morning":28,"noon":23,"afternoon":24,"closing":15},"カリブの海賊":{"opening":10,"nine":20,"morning":25,"noon":22,"afternoon":20,"closing":12},"ジャングルクルーズ：ワイルドライフ・エクスペディション":{"opening":5,"nine":15,"morning":35,"noon":32,"afternoon":30,"closing":18},"スイスファミリー・ツリーハウス":{"opening":0,"nine":0,"morning":0,"noon":0,"afternoon":0,"closing":0},"魅惑のチキルーム：スティッチ・プレゼンツ“アロハ・エ・コモ・マイ！”":{"opening":0,"nine":0,"morning":10,"noon":10,"afternoon":10,"closing":10},"カントリーベア・シアター":{"opening":20,"nine":20,"morning":20,"noon":20,"afternoon":20,"closing":10},"蒸気船マークトウェイン号":{"opening":0,"nine":5,"morning":5,"noon":5,"afternoon":0,"closing":0},"トムソーヤ島いかだ":{"opening":0,"nine":5,"morning":5,"noon":5,"afternoon":0,"closing":0},"ウエスタンランド・シューティングギャラリー":{"opening":5,"nine":5,"morning":15,"noon":20,"afternoon":15,"closing":5},"ビッグサンダー・マウンテン":{"opening":5,"nine":60,"morning":60,"noon":50,"afternoon":70,"closing":25},"スプラッシュ・マウンテン":{"opening":90,"nine":160,"morning":120,"noon":110,"afternoon":110,"closing":60},"ビーバーブラザーズのカヌー探険":{"opening":0,"nine":0,"morning":30,"noon":40,"afternoon":35,"closing":15},"アリスのティーパーティー":{"opening":5,"nine":10,"morning":15,"noon":15,"afternoon":15,"closing":8},"キャッスルカルーセル":{"opening":5,"nine":10,"morning":20,"noon":18,"afternoon":22,"closing":10},"空飛ぶダンボ":{"opening":30,"nine":50,"morning":48,"noon":45,"afternoon":45,"closing":32},"ホーンテッドマンション":{"opening":0,"nine":50,"morning":65,"noon":65,"afternoon":60,"closing":25},"イッツ・ア・スモールワールド":{"opening":5,"nine":12,"morning":25,"noon":30,"afternoon":20,"closing":12},"ピーターパン空の旅":{"opening":40,"nine":35,"morning":40,"noon":35,"afternoon":30,"closing":25},"ピノキオの冒険旅行":{"opening":5,"nine":10,"morning":20,"noon":15,"afternoon":12,"closing":8},"プーさんのハニーハント":{"opening":120,"nine":120,"morning":110,"noon":105,"afternoon":105,"closing":90},"白雪姫と七人のこびと":{"opening":5,"nine":20,"morning":25,"noon":25,"afternoon":20,"closing":12},"シンデレラのフェアリーテイル・ホール":{"opening":0,"nine":0,"morning":0,"noon":0,"afternoon":0,"closing":0},"ミッキーのフィルハーマジック":{"opening":5,"nine":10,"morning":15,"noon":15,"afternoon":15,"closing":5},"美女と野獣“魔法のものがたり”":{"opening":40,"nine":180,"morning":155,"noon":135,"afternoon":115,"closing":80},"チップとデールのツリーハウス":{"opening":5,"nine":5,"morning":5,"noon":5,"afternoon":5,"closing":5},"ドナルドのボート":{"opening":5,"nine":5,"morning":5,"noon":5,"afternoon":5,"closing":5},"グーフィーのペイント＆プレイハウス":{"opening":0,"nine":15,"morning":18,"noon":15,"afternoon":15,"closing":5},"ガジェットのゴーコースター":{"opening":10,"nine":35,"morning":35,"noon":33,"afternoon":30,"closing":15},"ロジャーラビットのカートゥーンスピン":{"opening":5,"nine":20,"morning":30,"noon":30,"afternoon":30,"closing":18},"スター・ツアーズ：ザ・アドベンチャーズ・コンティニュー":{"opening":5,"nine":15,"morning":20,"noon":18,"afternoon":15,"closing":8},"スティッチ・エンカウンター":{"opening":0,"nine":0,"morning":0,"noon":0,"afternoon":0,"closing":0},"モンスターズ・インク“ライド＆ゴーシーク！”":{"opening":80,"nine":90,"morning":90,"noon":80,"afternoon":85,"closing":75},"ベイマックスのハッピーライド":{"opening":60,"nine":160,"morning":120,"noon":100,"afternoon":115,"closing":85}};

rides.forEach(r=>{
 if(!r.waitTimes || typeof r.waitTimes!=="object") r.waitTimes={};
 const defaults=initialWaits[r.name]||{};
 Object.entries(defaults).forEach(([k,v])=>{
  if(r.waitTimes[k]===undefined) r.waitTimes[k]=v;
 });
});
if(localStorage.getItem("tdl_wait_defaults_v2")!=="1"){
 const beauty=rides.find(r=>r.name==="美女と野獣“魔法のものがたり”");
 const baymax=rides.find(r=>r.name==="ベイマックスのハッピーライド");
 const thunder=rides.find(r=>r.name==="ビッグサンダー・マウンテン");
 if(beauty&&beauty.waitTimes.opening===120)beauty.waitTimes.opening=40;
 if(baymax&&baymax.waitTimes.opening===160)baymax.waitTimes.opening=60;
 if(thunder&&["opening","nine","morning","noon","afternoon","closing"].every(k=>thunder.waitTimes[k]===0))thunder.waitTimes={...initialWaits[thunder.name]};
 localStorage.setItem("tdl_wait_defaults_v2","1");
}
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
 <div><label>体験（分）</label><input class="ride" type="number" min="1" value="${r.ride}"></div>
 <div><label>運営状況</label><select class="status"><option value="open" ${r.status==="open"?"selected":""}>運営予定</option><option value="closed" ${r.status==="closed"?"selected":""}>休止</option></select></div>
 <div><label>優先度</label><select class="priority"><option value="top" ${r.priority==="top"?"selected":""}>最優先</option><option value="high" ${r.priority==="high"?"selected":""}>優先</option><option value="normal" ${r.priority!=="top"&&r.priority!=="high"?"selected":""}>通常</option></select></div>
 <div><label>運営開始</label><input class="openTime" type="time" value="${r.openTime||"09:00"}"></div>
 <div><label>運営終了</label><input class="closeTime" type="time" value="${r.closeTime||"21:00"}"></div>
 </div></div>`).join("") || '<p class="note">該当する施設がありません。</p>';
 $("cards").querySelectorAll(".item").forEach(el=>{
  const r=rides.find(x=>x.id===Number(el.dataset.id));
  el.querySelector(".done").addEventListener("change",e=>{r.done=e.target.checked;persist();render();});
  ["ride","status","priority","openTime","closeTime"].forEach(k=>el.querySelector("."+k).addEventListener("change",e=>{
   r[k]=(k==="status"||k==="priority"||k==="openTime"||k==="closeTime")?e.target.value:Math.max(1,Number(e.target.value)||1);
   persist();
  }));
 });
 updateStats();
}
$("search").addEventListener("input",render);$("filter").addEventListener("change",render);
function minutes(t){let [h,m]=t.split(":").map(Number);return h*60+m;}
function fmt(m){let h=Math.floor(m/60),mm=m%60;return String(h).padStart(2,"0")+":"+String(mm).padStart(2,"0");}
function periodForTime(t){
 // 開園直後＝9:00〜9:29、9時台＝9:30〜9:59として区分。
 if(t<9*60+30)return "opening";
 if(t<10*60)return "nine";
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
 if(!$("start").value||!$("end").value){$("routeMsg").textContent="入園予定と閉園予定を入力してください。";return;}
 const start=minutes($("start").value),end=minutes($("end").value),breaks=Math.max(0,Number($("breaks").value)||0);
 if(end<=start){$("routeMsg").textContent="閉園時刻は入園時刻より後に設定してください。";return;}
 if(breaks>=end-start){$("routeMsg").textContent="休憩時間が滞在可能時間以上です。休憩時間を短くしてください。";return;}
 const todo=rides.filter(r=>!r.done&&r.status!=="closed");
 const breakTrigger=(end-start-breaks)/2;
 const initial={left:todo.slice(),seq:[],clock:start,x:50,y:50,breakTaken:false,top:0,high:0};
 const compareStates=(a,b)=>b.top-a.top||b.high-a.high||b.seq.length-a.seq.length||a.clock-b.clock;
 // 優先度は訪問順ではなく達成条件。最優先の達成数→優先の達成数→総体験数の順で評価する。
 // 訪問順は固定せず、各施設を次候補として比較するビーム探索。
 let beam=[initial],best=initial;
 const beamWidth=1000;
 for(let depth=0;depth<todo.length;depth++){
  const next=[];
  for(const state of beam){
   let expanded=false;
   for(const r of state.left){
    const walk=Math.max(3,Math.round(Math.hypot(r.x-state.x,r.y-state.y)*0.75));
    const beforeBreak=state.clock+walk-start;
    const breakWait=(!state.breakTaken&&breaks>0&&beforeBreak>=breakTrigger)?breaks:0;
    const arrival=state.clock+walk+breakWait;
    const open=minutes(r.openTime||"09:00"),close=minutes(r.closeTime||"21:00");
    const scheduleWait=Math.max(0,open-arrival),serviceArrival=arrival+scheduleWait;
    if(serviceArrival>=close||serviceArrival>=end)continue;
    const wait=waitAt(r,serviceArrival),rideDuration=Math.max(1,Number(r.ride)||1);
    const finishAt=serviceArrival+wait+rideDuration;
    if(finishAt>close||finishAt>end)continue;
    // 休憩をまだ消化していない経路は、後から指定休憩を入れられる余白を必ず残す。
    if(breaks>0&&!state.breakTaken&&!breakWait&&finishAt+breaks>end)continue;
    const chosen={r,walk,breakWait,scheduleWait,wait,rideStart:serviceArrival+wait,finishAt,breakStart:state.clock+walk};
    const child={left:state.left.filter(x=>x.id!==r.id),seq:[...state.seq,chosen],clock:finishAt,x:r.x,y:r.y,breakTaken:state.breakTaken||breakWait>0,top:state.top+(r.priority==="top"?1:0),high:state.high+(r.priority==="high"?1:0)};
    next.push(child);expanded=true;
   }
   if(!expanded)next.push(state);
  }
  if(!next.length)break;
  next.sort(compareStates);
  if(compareStates(next[0],best)<0)best=next[0];
  beam=next.slice(0,beamWidth);
 }
 let seq=best.seq.slice(),left=best.left.slice(),clock=best.clock,breakTaken=best.breakTaken;
 const skipped=left.slice();
 // 休憩のタイミングに達しないまま全候補が終わった場合も、指定された休憩を終盤に確保する。
 let trailingBreak=0;
 if(!breakTaken&&breaks>0&&clock+breaks<=end){trailingBreak=breaks;clock+=breaks;breakTaken=true;}
 const completed=seq.length;
 const priorities={top:todo.filter(r=>r.priority==="top").length,high:todo.filter(r=>r.priority==="high").length,normal:todo.filter(r=>!r.priority||r.priority==="normal").length};
 const doneTop=seq.filter(s=>s.r.priority==="top").length,doneHigh=seq.filter(s=>s.r.priority==="high").length;
 const unmetTop=priorities.top-doneTop,unmetHigh=priorities.high-doneHigh;
 const closedTop=rides.filter(r=>!r.done&&r.status==="closed"&&r.priority==="top").length;
 const closedHigh=rides.filter(r=>!r.done&&r.status==="closed"&&r.priority==="high").length;
 const priorityAlert=[unmetTop>0?`<span class="warning"><b>重大：最優先 ${unmetTop}施設が未達成です。</b></span>`:"",unmetHigh>0?`<span class="warning"><b>注意：優先 ${unmetHigh}施設が未達成です。</b></span>`:"",closedTop>0?`<span class="warning">最優先の休止施設 ${closedTop}施設は計算対象外です。</span>`:"",closedHigh>0?`<span class="warning">優先の休止施設 ${closedHigh}施設は計算対象外です。</span>`:""].filter(Boolean).join(" ")||"最優先・優先の必須施設はすべてルートに入りました。";
 const usedBreak=seq.reduce((n,s)=>n+s.breakWait,0)+trailingBreak;
 const required=clock-start;
 $("routeMsg").innerHTML=`未体験・運営予定 <b>${todo.length}施設</b> ／ ルートに組み込めた施設 <b>${completed}施設</b> ／ 所要時間の概算 <b>${Math.floor(required/60)}時間${required%60}分</b>（休憩 ${usedBreak}分） ／ 滞在可能時間 <b>${Math.floor((end-start)/60)}時間${(end-start)%60}分</b><br><b>優先設定：</b>最優先 ${doneTop}/${priorities.top}施設・優先 ${doneHigh}/${priorities.high}施設<br>${priorityAlert}<br><span class="${skipped.length?"warning":""}">${skipped.length?`時間内または運営時間内に組み込めなかった施設：${skipped.length}施設。最優先・優先の未達成数を確認してください。`:"入力条件上、未体験の運営予定施設をすべて組み込める見込みです。"}</span><br>最優先・優先は乗車必須の条件として扱い、訪問順を先頭に固定せず、最優先の達成数、優先の達成数、全体の体験数の順でルートを比較します。最大1,000候補を比較するビーム探索です。全順列の完全探索ではないため数学的な最適解は保証せず、移動時間も施設位置からの概算です。`;
 let html="";
 seq.forEach((s,i)=>{
  if(s.breakWait>0){html+=`<div class="routeitem"><span class="num">☕</span><div><b>休憩</b><small>${s.breakWait}分 ・ ${fmt(s.breakStart)}〜${fmt(s.breakStart+s.breakWait)}</small></div></div>`;}
  if(s.scheduleWait>0){html+=`<div class="routeitem"><span class="num">⌛</span><div><b>${esc(s.r.name)}の営業開始待ち</b><small>${s.scheduleWait}分待機 ・ 営業開始 ${esc(s.r.openTime||"09:00")}</small></div></div>`;}
  const tag=s.r.priority==="top"?"【最優先】":s.r.priority==="high"?"【優先】":"";
  html+=`<div class="routeitem"><span class="num">${i+1}</span><div><b>${tag}${esc(s.r.name)}</b><small>${esc(s.r.area)} ・ 体験開始 ${fmt(s.rideStart)}／終了 ${fmt(s.finishAt)} ・ 移動 ${s.walk}分 + 営業開始待ち ${s.scheduleWait}分 + 待ち ${s.wait}分 + 体験 ${s.r.ride}分（営業 ${esc(s.r.openTime||"09:00")}〜${esc(s.r.closeTime||"21:00")}）</small></div></div>`;
 });
 if(trailingBreak){html+=`<div class="routeitem"><span class="num">☕</span><div><b>休憩</b><small>${trailingBreak}分 ・ ${fmt(clock-trailingBreak)}〜${fmt(clock)}</small></div></div>`;}
 if(skipped.length){html+=`<h3>今回のルートに入らなかった施設</h3>`+skipped.map(r=>{const open=minutes(r.openTime||"09:00"),close=minutes(r.closeTime||"21:00");let reason="残り時間または運営終了までに収まらないため";if(open>=end || close<=start)reason="運営時間外";else if(clock>=close)reason="運営終了時刻を過ぎるため";return `<div class="routeitem"><span class="num">!</span><div><b>${r.priority==="top"?"【最優先】":r.priority==="high"?"【優先】":""}${esc(r.name)}</b><small>${esc(r.area)} ・ ${reason}（営業 ${esc(r.openTime||"09:00")}〜${esc(r.closeTime||"21:00")}）</small></div></div>`;}).join("");}
 const closedRides=rides.filter(r=>!r.done&&r.status==="closed");
 if(closedRides.length)html+=`<h3>休止中のため計算対象外</h3>`+closedRides.map(r=>`<div class="routeitem"><span class="num">休</span><div><b>${r.priority==="top"?"【最優先】":r.priority==="high"?"【優先】":""}${esc(r.name)}</b><small>${esc(r.area)}</small></div></div>`).join("");
 $("route").innerHTML=html||'<p class="note">未体験の運営予定施設はありません。</p>';
}
$("calc").addEventListener("click",calc);
$("save").addEventListener("click",()=>{persist();$("routeMsg").textContent="この端末に保存しました。";});
$("reset").addEventListener("click",()=>{
 if(!confirm("施設の入力内容を初期状態に戻しますか？"))return;
 rides=seed.map(r=>({...r,priority:"normal",openTime:r.name==="オムニバス"?"10:30":r.name==="ウエスタンリバー鉄道"?"09:30":"09:00",closeTime:r.name==="オムニバス"?"16:30":r.name==="ウエスタンリバー鉄道"?"19:30":"21:00",status:"open",waitTimes:{...(initialWaits[r.name]||{})}}));
 if($("visitDate").value==="2026-11-22")applyNov22Preset();else applyGenericHours();
 persist();render();renderWaitSettings();$("route").innerHTML="";$("routeMsg").textContent="初期状態に戻しました。";
});
$("export").addEventListener("click",()=>{let blob=new Blob([JSON.stringify({rides,settings:Object.fromEntries(["visitDate","party","start","end","breaks"].map(k=>[k,$(k).value]))},null,2)],{type:"application/json"});let a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="tdl-planner-backup.json";a.click();URL.revokeObjectURL(a.href);});
$("importBtn").addEventListener("click",()=>$("file").click());
$("file").addEventListener("change",async e=>{
 const f=e.target.files[0];if(!f)return;
 try{
  const d=JSON.parse(await f.text());if(!Array.isArray(d.rides))throw Error("invalid backup");
  rides=seed.map(base=>{const saved=d.rides.find(r=>r.id===base.id)||{};return {...base,...saved,waitTimes:{...(saved.waitTimes||{})}};});
  rides.forEach(r=>{if(!["top","high","normal"].includes(r.priority))r.priority="normal";r.ride=Math.max(1,Number(r.ride)||8);if(!["open","closed"].includes(r.status))r.status="open";if(!r.openTime)r.openTime="09:00";if(!r.closeTime)r.closeTime="21:00";});
  if(d.settings&&typeof d.settings==="object")Object.entries(d.settings).forEach(([k,v])=>{if($(k)&&v!==undefined)$(k).value=v;});
  if($("visitDate").value==="2026-11-22")applyNov22Preset();else applyGenericHours();
  persist();render();renderWaitSettings();updateOfficialHoursLink();alert("バックアップを読み込みました。");
 }catch{alert("JSONファイルを読み込めませんでした。内容を確認してください。");}
 e.target.value="";
});
$("visitDate").value="2026-11-22";
function applyGenericHours(){
 rides.forEach(r=>{r.openTime="09:00";r.closeTime="21:00";});
 // 11/22に公式休止として登録した3施設は、別日付に切り替えたときだけ再開状態へ戻す。
 ["スイスファミリー・ツリーハウス","シンデレラのフェアリーテイル・ホール","スティッチ・エンカウンター"].forEach(n=>{const r=rides.find(x=>x.name===n);if(r)r.status="open";});
}
function applyNov22Preset(){
 applyGenericHours();
 const byName=Object.fromEntries(rides.map(r=>[r.name,r]));
 // 2026年11月22日の個別営業時間の登録初期値。公式の当日情報で随時再確認すること。
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
 Object.entries(specialHours).forEach(([name,times])=>{
  const r=byName[name];
  if(r){r.openTime=times[0];r.closeTime=times[1];}
 });
 ["スイスファミリー・ツリーハウス","シンデレラのフェアリーテイル・ホール","スティッチ・エンカウンター"].forEach(n=>{if(byName[n])byName[n].status="closed";});
}
function updateOfficialHoursLink(){const d=($("visitDate").value||"2026-11-22").replaceAll("-","");const a=$("officialHours");if(a)a.href=`https://www.tokyodisneyresort.jp/tdl/daily/calendar/${d}`;}
const savedSettings=readStored("tdl_settings_v1");
if(savedSettings)Object.entries(savedSettings).forEach(([k,v])=>{if($(k)&&v!==null&&v!==undefined)$(k).value=v;});
if(!$("visitDate").value)$("visitDate").value="2026-11-22";
// v5 migration: existing installations also receive the corrected 11/22 hours and closures once.
if($("visitDate").value==="2026-11-22" && localStorage.getItem("tdl_hours_preset_20261122_v5")!=="1"){
 applyNov22Preset();localStorage.setItem("tdl_hours_preset_20261122_v5","1");persist();
}
$("visitDate").addEventListener("change",()=>{
 updateOfficialHoursLink();
 if($("visitDate").value==="2026-11-22")applyNov22Preset();
 else applyGenericHours();
 persist();render();
});
updateOfficialHoursLink();
render();
renderWaitSettings();
