import {LEVELS,TOWERS,stats} from './game-data.js';
import config from './config.js';
const $=id=>document.getElementById(id),fmt=n=>Number(n||0).toLocaleString(undefined,{maximumFractionDigits:1});
let sessions=[],filtered=[],level=0,tower='wizard';
LEVELS.forEach((l,i)=>$('filter').add(new Option(l.name,i)));
Object.entries(TOWERS).forEach(([k,t])=>$('heatTower').add(new Option(t.name,k)));
$('maptabs').innerHTML=LEVELS.map((l,i)=>'<button data-level="'+i+'">0'+(i+1)+' · '+l.name+'<small>'+l.paths.length+' enemy routes</small></button>').join('');
$('towertabs').innerHTML=Object.entries(TOWERS).map(([k,t])=>'<button data-tower="'+k+'">'+t.name+'</button>').join('');
$('maptabs').onclick=e=>{const b=e.target.closest('button');if(b){level=+b.dataset.level;heat()}};
$('towertabs').onclick=e=>{const b=e.target.closest('button');if(b){tower=b.dataset.tower;branches()}};
function render(){
 const days=+$('period').value,realm=+$('filter').value;
 filtered=sessions.filter(s=>(!days||s.started>Date.now()-days*86400000)&&(realm<0||s.level===realm));
 const done=filtered.filter(s=>['won','lost'].includes(s.state)),wins=done.filter(s=>s.state==='won').length,losses=done.filter(s=>s.state==='lost');
 $('kpis').innerHTML=[['Playtest sessions',filtered.length,'Includes unfinished runs'],['Completion rate',done.length?Math.round(wins/done.length*100)+'%':'—',wins+' wins / '+done.length+' finished'],['Average active time',filtered.length?fmt(filtered.reduce((n,s)=>n+s.seconds,0)/filtered.length/60)+' min':'—','Simulation time · excludes pauses'],['Tower placements',filtered.reduce((n,s)=>n+s.placements.length,0),'Includes sold and rebuilt towers']].map(([a,b,c])=>'<div class="kpi"><small>'+a+'</small><strong>'+b+'</strong><p>'+c+'</p></div>').join('');
 $('progress').innerHTML=LEVELS.map((l,i)=>{const f=done.filter(s=>s.level===i),w=f.filter(s=>s.state==='won').length;return '<div class="progressrow"><span>'+l.name+'</span><div class="bar"><i style="width:'+(f.length?w/f.length*100:0)+'%"></i></div><small>'+(f.length?Math.round(w/f.length*100)+'%':'—')+' · '+f.length+'</small></div>'}).join('');
 $('insights').innerHTML=filtered.length?'<p><b>'+losses.length+' failed defenses</b><br>'+(losses.length?'Average failure at wave '+fmt(losses.reduce((n,s)=>n+s.wave,0)/losses.length)+'. Review the playtest log for difficulty spikes.':'No failed completed runs in this selection.')+'</p><p><b>'+fmt(filtered.reduce((n,s)=>n+s.leaks,0))+' lives lost</b><br>Boss leaks are weighted by the game rules.</p><p><b>'+fmt(filtered.reduce((n,s)=>n+s.upgrades,0))+' upgrades · '+fmt(filtered.reduce((n,s)=>n+s.sales,0))+' sales</b><br>Compare branch adoption to find overlooked paths.</p>':'<p><b>Your first playtest starts the story.</b><br>Opt into stats in the uploaded game, then play a session. Metrics refresh every 30 seconds.</p><p>Track completion, difficulty spikes, gold economy, build choices, and placement concentration.</p>';
 $('sessionrows').innerHTML=filtered.length?[...filtered].sort((a,b)=>b.started-a.started).map(s=>'<tr><td>'+new Date(s.started).toLocaleString()+'</td><td>'+LEVELS[s.level].name+'</td><td><span class="tag">'+(s.state==='won'?'Victory':s.state==='lost'?'Defeat':s.state==='abandoned'||Date.now()-s.updated>60000?'Unfinished':'In progress')+'</span></td><td>'+s.wave+'</td><td>'+fmt(s.seconds/60)+' min</td><td>'+fmt(s.kills)+'</td><td>'+fmt(s.damage)+'</td><td>'+s.placements.length+'</td><td>'+fmt(s.gold)+'</td></tr>').join(''):'<tr><td colspan="9" class="empty">No playtests in this selection. Opt into stats in the game to collect data.</td></tr>';
 heat();branches();
}
function heat(){
 const l=LEVELS[level],p=filtered.filter(s=>s.level===level).flatMap(s=>s.placements).filter(p=>!$('heatTower').value||p.type===$('heatTower').value),counts=l.pads.map((_,i)=>p.filter(p=>p.pad===i).length),max=Math.max(...counts,1);
 [...$('maptabs').children].forEach((b,i)=>b.classList.toggle('active',i===level));
 $('mapname').textContent=l.name;$('mapdesc').textContent=l.subtitle+' · '+l.boss;$('mapcount').textContent=p.length+' placements';
 let svg='<defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#d8dfd1"/></pattern><radialGradient id="heat"><stop stop-color="#b45d3f" stop-opacity=".85"/><stop offset=".5" stop-color="#e8b65f" stop-opacity=".6"/><stop offset="1" stop-color="#e8b65f" stop-opacity="0"/></radialGradient></defs><rect width="1100" height="720" fill="url(#grid)"/>';
 l.paths.forEach(p=>{const points=p.map(a=>a.join(',')).join(' ');svg+='<polyline points="'+points+'" fill="none" stroke="#d5ddca" stroke-width="43" stroke-linejoin="round"/><polyline points="'+points+'" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="5 8"/>'});
 l.pads.forEach(([x,y],i)=>{const n=counts[i];svg+='<g tabindex="0" aria-label="Site '+(i+1)+': '+n+' placements"><title>Site '+(i+1)+' · '+n+' placements · '+(p.length?Math.round(n/p.length*100):0)+'% of builds</title>'+(n?'<circle cx="'+x+'" cy="'+y+'" r="'+(35+55*n/max)+'" fill="url(#heat)"/>':'')+'<circle cx="'+x+'" cy="'+y+'" r="20" fill="'+(n?'#fbf4da':'#f8faf4')+'" stroke="#a8b59b" stroke-width="2"/><text x="'+x+'" y="'+(y+5)+'" text-anchor="middle" fill="#56634c" font-size="14">'+(n||'·')+'</text></g>'});
 if(!p.length)svg+='<text x="550" y="690" text-anchor="middle" fill="#7b857d" font-size="15">No placements recorded for this selection</text>';
 $('map').innerHTML=svg;
}
function branches(){
 [...$('towertabs').children].forEach(b=>b.classList.toggle('active',b.dataset.tower===tower));
 const t=TOWERS[tower],tier=+$('tier').value,instances=filtered.flatMap(s=>s.towers).filter(t=>t.type===tower);
 $('branchcards').innerHTML=t.branches.map((b,i)=>{const tiers=[0,0,0];tiers[i]=tier;const s=stats({type:tower,tiers}),adopt=instances.filter(t=>t.tiers[i]>0).length,rows=[['Damage / hit',fmt(s.damage)],['Attack speed',fmt(1/s.rate)+' / sec'],['Direct DPS',fmt(s.damage/s.rate)],['Range',fmt(s.range)],['Slowness',fmt(s.slow*100)+'%'],['Slow duration',fmt(s.slowTime)+' sec'],['Burn',fmt(s.burn)+' / sec'],['Burn duration',fmt(s.burnTime)+' sec'],['Poison / bleed',fmt(s.poison)+' / '+fmt(s.bleed)+' per sec'],['Splash radius',fmt(s.splash)],['Chain / targets',s.chain+' / '+s.shots],['Freeze / stun',fmt(s.freeze)+' / '+fmt(s.stun)+' sec'],['Build + upgrades',fmt(t.cost+b.skills.slice(0,tier).reduce((n,a)=>n+a.cost,0))+' gold'],['Measured adoption',adopt+' / '+instances.length]];
 return '<div class="branchcard"><span class="tag">BRANCH 0'+(i+1)+' · TIER '+tier+'</span><h3>'+b.name+'</h3><p>'+b.description+'</p><dl>'+rows.map(([a,b])=>'<dt>'+a+'</dt><dd>'+b+'</dd>').join('')+'</dl><details><summary>All calculated effects</summary><dl>'+Object.entries(s).map(([k,v])=>'<dt>'+k+'</dt><dd>'+fmt(v)+'</dd>').join('')+'</dl></details></div>'}).join('');
 $('skills').innerHTML=t.branches.flatMap(b=>b.skills.map((s,i)=>'<tr><td>'+s.name+'</td><td>'+b.name+'</td><td>'+(i+1)+'</td><td>'+s.cost+'</td><td>'+s.description+'</td></tr>')).join('');
}
['period','filter'].forEach(id=>$(id).onchange=render);$('tier').onchange=branches;$('heatTower').onchange=heat;
$('export').onclick=()=>{const url=URL.createObjectURL(new Blob([JSON.stringify(filtered,null,2)],{type:'application/json'})),a=document.createElement('a');a.href=url;a.download='clayrealm-playtests.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)};

let busy=false;
const tokenKey='clay-read-token:'+config.apiBase;
async function load(){
 if(busy)return;
 if(!config.apiBase){$('status').textContent='Cloud collector not configured';return}
 const token=sessionStorage.getItem(tokenKey);
 if(!token){$('status').textContent='Unlock metrics to connect';return}
 busy=true;
 try{
  let cursor=null,all=[];
  do{
   const url=new URL('api/sessions',config.apiBase.replace(/\/$/,'')+'/');
   if(cursor){url.searchParams.set('after',cursor.after);url.searchParams.set('afterId',cursor.afterId)}
   const r=await fetch(url,{headers:{Authorization:'Bearer '+token},signal:AbortSignal.timeout(12000)});
   if(r.status===401){sessionStorage.removeItem(tokenKey);sessions=[];render();throw Error('Incorrect read password')}
   if(!r.ok)throw Error('Collector unavailable');
   const page=await r.json();all.push(...page.sessions);cursor=page.next;
  }while(cursor);
  if(sessionStorage.getItem(tokenKey)!==token)return;
  sessions=all;$('status').textContent=sessions.length?'Collector connected':'Waiting for first playtest';
  $('updated').textContent='Updated '+new Date().toLocaleTimeString();render();
 }catch(e){$('status').textContent=e.message;$('updated').textContent='Verify the collector address and allowed dashboard origin.'}
 finally{busy=false}
}
const controls=document.createElement('div');controls.className='cloud-controls';
const unlock=document.createElement('button');unlock.textContent='Unlock metrics';
unlock.onclick=()=>{const token=prompt('Dashboard read password (kept only in this browser tab)');if(token){sessionStorage.setItem(tokenKey,token.trim());load()}};
const lock=document.createElement('button');lock.textContent='Lock';lock.onclick=()=>{sessionStorage.removeItem(tokenKey);sessions=[];render();$('status').textContent='Metrics locked';$('updated').textContent=''};
const play=document.querySelector('header a');
if(config.gameUrl){play.href=config.gameUrl;play.textContent='Open game ↗';controls.append(play)}else play.remove();
controls.append(unlock,lock);document.querySelector('header').append(controls);
render();load();setInterval(load,30000);
