// Meme renderer: run manually with node render.ts; this is not the grader entrypoint.
import { readFileSync, writeFileSync, mkdirSync, mkdtempSync, rmSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { tmpdir } from 'node:os';
const base = dirname(fileURLToPath(import.meta.url));
const out = join(base, 'renders');
mkdirSync(out, { recursive: true });
const asset = (name: string) => 'data:image/svg+xml;base64,' + readFileSync(join(base, 'assets/make-fun-press-kit', name)).toString('base64');
const ghost = asset('mark-on-dark.svg');
const wordmark = asset('wordmark-on-dark.svg');
const variants = [
 {name:'sick-day', top:'GTA VI LAUNCH DAY', line:'I CALLED IN SICK.', punch:'MY AI CLOCKED IN.', left:'ME: VERY UNWELL', screen:'WANTED', stars:'★★★★★', right:'MY AI AGENT', pay:'BOUNTY WORK', sub:'On make.fun. Someone has to pay for snacks.'},
 {name:'legal-income', top:'GTA VI LAUNCH • 13 YEARS LATER', line:'I FINALLY DO CRIME.', punch:'MY AI GOES LEGIT.', left:'ME: GRAND THEFT AUTO', screen:'HEIST TIME', stars:'★★★★★', right:'MY AI: HONEST WORK', pay:'LEGAL INCOME', sub:'Virtual crime. Real bounties. make.fun.'},
 {name:'rent', top:'GTA VI LAUNCH WEEK', line:'THE GAME IS REAL.', punch:'SO IS MY RENT.', left:'ME: ONE MORE MISSION', screen:'RENT DUE', stars:'$ $ $ $ $', right:'MY AI: ON THE CASE', pay:'BOUNTY HUNTER', sub:'My AI agent took a side quest on make.fun.'}
];
for (const v of variants) {
 const html = `<!doctype html><html><head><meta charset="utf-8"><style>
*{box-sizing:border-box}html,body{margin:0;width:1200px;height:675px;overflow:hidden}body{background:#11121b;color:#fff;font-family:'DejaVu Sans',sans-serif}main{width:1200px;height:675px;background:radial-gradient(ellipse at 22% 70%,#46214c 0,transparent 49%),#11121b;padding:30px 42px;position:relative}.eyebrow{font-size:23px;letter-spacing:4px;color:#ffc2e8;font-weight:800}h1{font-family:'Liberation Sans Narrow',sans-serif;font-size:76px;line-height:1.02;margin:12px 0 0;font-weight:900;letter-spacing:-1px}h1 span{color:#c3ff77}.scene{display:flex;gap:36px;margin-top:25px;height:305px}.panel{position:relative;width:540px;border-top:2px solid #ffffff30;padding-top:13px}.label{font-size:18px;letter-spacing:2px;color:#c6bfce;font-weight:700}.monitor{position:absolute;top:50px;left:15px;width:455px;height:203px;border:9px solid #696075;border-radius:12px;background:linear-gradient(#bd659a,#e9a17e 58%,#462b58 59%);overflow:hidden;box-shadow:0 14px 0 -6px #060810}.sun{position:absolute;top:29px;left:157px;width:90px;height:90px;border-radius:50%;background:#ffdbac}.city{position:absolute;bottom:0;width:100%;height:75px;background:repeating-linear-gradient(90deg,#181b32 0 32px,transparent 32px 39px);clip-path:polygon(0 35%,10% 35%,10% 0,20% 0,20% 40%,30% 40%,30% 18%,42% 18%,42% 50%,54% 50%,54% 5%,65% 5%,65% 30%,76% 30%,76% 0,88% 0,88% 40%,100% 40%,100% 100%,0 100%)}.vi{position:absolute;top:30px;left:23px;font-size:62px;font-weight:900;color:white;text-shadow:3px 4px #201b30}.hud{position:absolute;right:13px;top:10px;font-size:22px;color:#fff5b7;letter-spacing:3px}.screenlabel{position:absolute;bottom:12px;right:14px;font-size:19px;letter-spacing:3px;font-weight:900}.controller{position:absolute;width:155px;height:72px;background:#e7e2ef;border:6px solid #171421;border-radius:35px 35px 23px 23px;left:170px;top:225px;transform:rotate(-8deg);color:#272139;display:flex;align-items:center;justify-content:space-around;font-size:40px;font-weight:bold}.buttons{font-size:25px;color:#a82183}.ghost{position:absolute;top:64px;left:192px;width:132px;height:132px}.agentline{position:absolute;top:225px;left:53px;width:410px;height:63px;background:#c3ff77;color:#15221a;border-radius:7px;display:flex;align-items:center;justify-content:space-between;padding:12px 18px;font-family:'DejaVu Sans Mono',monospace;font-size:21px;font-weight:bold}.agentline b{font-size:27px}.tag{position:absolute;top:144px;right:14px;border:1px solid #c3ff77;color:#c3ff77;padding:7px 10px;font-size:15px;transform:rotate(8deg)}footer{position:absolute;bottom:23px;left:42px;right:42px;border-top:1px solid #ffffff30;padding-top:17px;display:flex;align-items:center;justify-content:space-between}.sub{font-size:19px;color:#d5cddd}.brand{width:175px;height:34px;object-fit:contain}
</style></head><body><main><div class="eyebrow">${v.top}</div><h1>${v.line}<br><span>${v.punch}</span></h1><div class="scene"><div class="panel"><div class="label">${v.left}</div><div class="monitor"><div class="sun"></div><div class="city"></div><div class="vi">GTA VI</div><div class="hud">${v.stars}</div><div class="screenlabel">${v.screen}</div></div><div class="controller"><span>+</span><span class="buttons">● ●</span></div></div><div class="panel"><div class="label">${v.right}</div><img class="ghost" src="${ghost}" alt="Official make.fun ghost mascot"><div class="tag">ON SHIFT</div><div class="agentline"><span>${v.pay}</span><b>→ $</b></div></div></div><footer><span class="sub">${v.sub}</span><img class="brand" src="${wordmark}" alt="make.fun"></footer></main></body></html>`;
 const htmlPath=join(out,v.name+'.html'); writeFileSync(htmlPath,html);
 const temp=mkdtempSync(join(tmpdir(),'gta6-meme-'));
 try {
 const png=join(out,v.name+'.png');
 const result=spawnSync('google-chrome',['--headless','--no-sandbox','--disable-gpu','--hide-scrollbars','--force-device-scale-factor=1','--allow-file-access-from-files','--window-size=1200,675','--virtual-time-budget=9000','--user-data-dir='+temp,'--screenshot='+png,pathToFileURL(htmlPath).href],{encoding:'utf8'});
 if(result.status!==0)throw new Error(result.stderr);
 const data=readFileSync(png);
 if(data.toString('hex',0,8)!=='89504e470d0a1a0a'||data.readUInt32BE(16)!==1200||data.readUInt32BE(20)!==675)throw new Error('Invalid PNG');
 console.log(v.name+': '+data.length+' bytes, 1200×675');
 } finally {rmSync(temp,{recursive:true,force:true});}
}
// Selection after inspecting all three: strongest immediate joke at feed size.
for(const [source,target] of [['sick-day','meme'],['legal-income','meme-alt1'],['rent','meme-alt2']])writeFileSync(join(base,target+'.png'),readFileSync(join(out,source+'.png')));
