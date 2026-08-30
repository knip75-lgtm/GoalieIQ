// Goalie IQ v6 — app.js
// Piramide: Mobiliteit → Stabiliteit → Romp/Asymmetrie → Explosiviteit
// 4 vaste blokken per sessie. Signalen bepalen intensiteit (focus vs onderhoud).

const BLOKKEN=[
{id:'mob',label:'Mobiliteit',cls:'mob',icon:'1',screenTest:'mob',
 focus:{
  gym:[
   {n:"Goblet Squat met hielen op verhoging",i:"Houd een licht gewicht voor je borst. Hielen op een boekje (2-3 cm). Zak zo diep mogelijk, rug recht, borst omhoog. Houd 3 sec onderin vast.",s:"3 sets",r:"8 herh.",rs:"45 sec",c:"Let op achterover vallen bij stijve enkels."},
   {n:"90/90 heupmobiliteit",i:"Zit op de grond, beide knieën 90 graden. Kantel langzaam je gewicht van de ene heup naar de andere. Geen compensatie via de rug.",s:"3 sets",r:"10 overgang.",rs:"30 sec",c:"Adem uit bij elke heupkanteling."},
   {n:"Goblet Squat zonder verhoging",i:"Zelfde als de verhoging-variant, maar nu zonder hulp onder de hielen. Deur vasthouden mag als lichte ondersteuning.",s:"3 sets",r:"10 herh., 3 sec hold",rs:"45 sec",c:"Cue: Blijf laag, pak de bal naar je toe."}
  ],
  veld:[
   {n:"Basissituatie Ball Catch (laag)",i:"Ga laag in je basissituatie staan met je armen gespreid. De trainer gooit een bal op borsthoogte. Vang de bal vanuit deze diepe positie zonder je heupen op te tillen.",s:"3 sets",r:"8 herh.",rs:"45 sec",c:"Trainer reikt bal lager aan als de rug bolt."},
   {n:"K-Save Blok Drill",i:"Start op de doellijn, de trainer staat op de penaltystip. Op het signaal zak je in een 90/90-positie (K-save / blok: één knie laag, breed) en reik je naar een lage bal die de trainer klaarlegt.",s:"3 sets",r:"8 herh.",rs:"45 sec",c:"Transfer: Heupkanteling = exact de mobiliteit voor K-save of blokfase."},
   {n:"Low Drive Response",i:"Ga laag in je basissituatie staan. De trainer schiet ballen afwisselend laag links en rechts (max 1 m naast je). Vang vanuit de diepe positie — heupen blijven laag, geen oprichten.",s:"4 sets",r:"8 herh.",rs:"60 sec",c:"Cue: Blijf laag, pak de bal naar je toe."}
  ]
 },
 maint:{
  gym:[
   {n:"Wall-facing Squat",i:"Sta 15-20 cm van een muur. Armen gestrekt omhoog. Zak zo diep mogelijk zonder de muur te raken.",s:"2 sets",r:"8 herh.",rs:"45 sec",c:"Onderhoud: mobiliteit vasthouden."},
   {n:"Overhead Squat met stok",i:"Houd een stok breed boven het hoofd, armen gestrekt. Zak diep door je knieën. De stok blijft verticaal.",s:"2 sets",r:"6 herh.",rs:"45 sec",c:"Onderhoud: mobiliteitskwaliteit bewaken."},
   {n:"Squat to lateral step",i:"Diepe squat, sta op, explosieve stap opzij.",s:"2 sets",r:"5 per kant",rs:"45 sec",c:"Onderhoud: mobiliteit geïntegreerd in keepersbeweging."}
  ],
  veld:[
   {n:"Decision Ball Catch",i:"Op de doellijn staan met armen breed. Trainer gooit ballen op wisselende hoogte. Besluit op het laatste moment: vangen of onderscheppen.",s:"2 sets",r:"8 herh.",rs:"45 sec",c:"Onderhoud: lage positie vasthouden onder reactieve prikkel."},
   {n:"High Ball Wide Arms Drill",i:"Ga op 2 meter van de doellijn staan. Trainer gooit ballen op schouder- tot hoofdhoogte. Vang vanuit de brede armhouding — armen zakken nooit.",s:"2 sets",r:"8 herh.",rs:"45 sec",c:"Onderhoud: brede paraathouding bewaken."},
   {n:"Low Ball Lateral Response",i:"Zak in je basissituatie. Trainer wijst links of rechts. Stap explosief die kant op en onderschep een snelle lage bal.",s:"2 sets",r:"5 per kant",rs:"45 sec",c:"Onderhoud: mobiliteit geïntegreerd in verplaatsing."}
  ]
 },
 hp:[
  {n:"Blind Screen Rebound",top:true,d:"Ga in je basishouding staan. Twee meter voor je blokkeert een medespeler je zicht. De trainer trapt vanaf 12 meter onverwacht een harde, lage bal langs de speler. Zie de bal pas op het laatste moment, zak direct extreem diep in je heupen en pareer met een K-save of blok.",t:"Volledig reactieve heupflexie in een chaotische doelmond."},
  {n:"Post-to-Post Low Drive",top:false,d:"Druk je borst plat tegen de linkerdoelpaal. Als de trainer 'Los!' roept, draai je explosief uit, maak snelle cross-steps naar het midden en zak direct diep naar de rechterhoek voor een harde, lage schuiver.",t:"Thoracale rotatiecapaciteit direct gekoppeld aan maximale zijdelingse verplaatsing."}
 ]
},
{id:'sta',label:'Stabiliteit',cls:'sta',icon:'2',screenTest:'sta',isRisk:true,
 warnText:"Je knie wiebelde naar binnen (valgusknie). Bescherming gaat hier boven ontwikkeling. Een fysiotherapeut of sportarts kan in 20 minuten beoordelen wat er precies speelt. Dat is de informatie die je nodig hebt om dit seizoen sterk en blessurevrij te blijven.",
 focus:{
  gym:[
   {n:"Single-Leg Box Step-Down",i:"Sta op een verhoging (15-20 cm) op één been. Zak gecontroleerd naar beneden, duw jezelf terug omhoog. Knie recht boven de voet.",s:"3 sets",r:"8 per been",rs:"45 sec",c:"Knie mag absoluut niet naar binnen zakken."},
   {n:"Drop Landing met hold",i:"Stap van een verhoging, land op één been. Vries in: knie recht, balans stabiel. Houd 3 sec vast.",s:"3 sets",r:"6 per been",rs:"60 sec",c:"Knie recht boven voet tijdens hold."},
   {n:"Drop Landing met reactieve vervolgstap",i:"Stap af, land stabiel, explosieve stap opzij.",s:"4 sets",r:"5 per been",rs:"60 sec",c:"Landing is de aanzet voor de volgende actie."}
  ],
  veld:[
   {n:"One-Leg Ball Catch",i:"Balanceer op één been op de doellijn. Vang de bal die de trainer strak op je gooit klemvast zonder je andere voet op de grond te zetten.",s:"3 sets",r:"8 per been",rs:"45 sec",c:"Transfer: Eenbenige balanscontrole onder externe vangprikkel."},
   {n:"Jump-Land-Freeze Catch",i:"Spring van een lage verhoging, land op één been en vang gelijktijdig de bal die de trainer op dat moment gooit. Bevries je landing direct voor 3 seconden.",s:"3 sets",r:"6 per been",rs:"60 sec",c:"Transfer: Vastzetten van gewrichten na een landing."},
   {n:"Land-and-Dive Drill",i:"Land op één been vanuit een lichte sprong. Exact op het landingsmoment schiet de trainer de bal in de hoek. Zet jezelf direct vanaf je landingsbeen explosief af voor de redding.",s:"4 sets",r:"5 per been",rs:"60 sec",c:"Transfer: Landen na hoge bal of duik en direct doorbewegen."}
  ]
 },
 maint:{
  gym:[
   {n:"Single-Leg Box Step-Down (onderhoud)",i:"Sta op verhoging (15 cm) op één been. Zak gecontroleerd naar beneden, duw jezelf terug omhoog.",s:"2 sets",r:"6 per been",rs:"45 sec",c:"Onderhoud: landingsstabiliteit bewaken."},
   {n:"Drop Landing met hold (onderhoud)",i:"Stap af van lage verhoging, land op één been, vries 3 sec in.",s:"2 sets",r:"5 per been",rs:"45 sec",c:"Onderhoud: eenbenige controle vasthouden."},
   {n:"Drop Landing met vervolgstap (onderhoud)",i:"Stap af, land stabiel, maak een explosieve stap opzij.",s:"2 sets",r:"4 per been",rs:"45 sec",c:"Onderhoud: stabiele landing integreren in beweging."}
  ],
  veld:[
   {n:"One-Leg Ball Catch (onderhoud)",i:"Balanceer op één been. Vang de bal die trainer op je gooit klemvast zonder de andere voet neer te zetten.",s:"2 sets",r:"6 per been",rs:"45 sec",c:"Onderhoud: balanscontrole scherp houden."},
   {n:"Freeze Catch (onderhoud)",i:"Spring van een lage verhoging, land op één been, vang gelijktijdig de bal. Bevries 3 sec.",s:"2 sets",r:"5 per been",rs:"45 sec",c:"Onderhoud: landingsstabiliteit onder externe prikkel."},
   {n:"Land-and-Move Drill (onderhoud)",i:"Stap af, land stabiel op één been, maak direct een zijwaartse stap terwijl je een bal vangt die trainer gooit.",s:"2 sets",r:"4 per been",rs:"45 sec",c:"Onderhoud: stabiele landing integreren in keepersactie."}
  ]
 },
 hp:[
  {n:"Cross-Bar Tipped Rebound",top:true,d:"Spring achterwaarts om een hoge bal via de lat weg te tikken en land op één been. Stabiliseer je balans direct en verwerk meteen de tweede bal die de trainer op je afvuurt.",t:"Eenbenige landingsstabiliteit onder maximale druk."},
  {n:"Color-Cone Volley",top:false,d:"Balanceer op één been. Reageer op de kleur die de trainer roept. Spring vanaf je standbeen zijwaarts, land op je andere been op de gekozen kegel en pak de volley klemvast.",t:"Reactieve eenbenige landing met cognitieve keuzetaak."}
 ]
},
{id:'romp',label:'Romp & Asymmetrie',cls:'romp',icon:'3',screenTest:'romp',screenTest2:'asy',
 focus:{
  gym:[
   {n:"Dead Bug",i:"Lig op je rug, armen omhoog, knieën 90°. Strek één arm achterover + tegenovergesteld been. Rug blijft plat.",s:"3 sets",r:"8 per kant",rs:"45 sec",c:"Onderrug mag de grond NIET verlaten."},
   {n:"Pallof Press in split stance",i:"Sta in een lange uitvalspas naast een weerstandsband op borsthoogte. Duw je armen langzaam naar voren, 2 sec vast. Romp draait niet.",s:"3 sets",r:"8 per kant",rs:"60 sec",c:"Smallere basis = hogere rompeis."},
   {n:"Sprawl met vertraagde fase",i:"Sprawl met 3-tellen rem op de neerwaartse beweging. Explosief terug omhoog.",s:"3 sets",r:"6 herh.",rs:"60 sec",c:"Onderrug neutraal tijdens de hele beweging."}
  ],
  veld:[
   {n:"Roll-to-Save Drill",i:"Lig op je rug in Dead Bug-positie. Zodra de trainer 'Los!' roept, rol je als één stijf blok naar je zij om de lage bal te onderscheppen.",s:"3 sets",r:"6 herh.",rs:"60 sec",c:"Transfer: Reactieve rotatiestijfheid bij omrollen na een redding."},
   {n:"Split Stance Save",i:"Ga in split stance voor het doel staan. Druk je armen naar voren en vang tegelijk een lage bal die de trainer naar je zwakke kant schiet — positie niet verliezen.",s:"3 sets",r:"6 per kant",rs:"60 sec",c:"Transfer: Antirotatiestijfheid in instabiele positie."},
   {n:"Sprawl-to-Save Drill",i:"Voer een gecontroleerde sprawl uit op de fluit. Zodra je omhoog veert, schiet de trainer de bal in een hoek. Reageer direct vanuit je opstabeweging.",s:"3 sets",r:"6 herh.",rs:"90 sec",c:"Transfer: Excentrische opvang van de landing + directe transitie naar tweede actie."}
  ]
 },
 maint:{
  gym:[
   {n:"Dead Bug (onderhoud)",i:"Lig op je rug. Strek één arm achterover + tegenovergesteld been. Rug blijft plat.",s:"2 sets",r:"6 per kant",rs:"45 sec",c:"Onderhoud: rompstabiliteit activeren."},
   {n:"Statische Split Squat",i:"Stap één been naar voren. Zak recht naar beneden. Beide kanten gelijkwaardig.",s:"2 sets",r:"6 per kant",rs:"45 sec",c:"Onderhoud: symmetrie bewaken."},
   {n:"Reactieve Sprawl (onderhoud)",i:"Sprawl op extern signaal. Snelheid én rompcontrole.",s:"2 sets",r:"5 herh.",rs:"60 sec",c:"Onderhoud: rompstijfheid integreren in keepersbeweging."}
  ],
  veld:[
   {n:"Roll-to-Save (onderhoud)",i:"Lig op je rug. Op commando rol je als één stijf blok naar je zij om een bal te onderscheppen.",s:"2 sets",r:"6 herh.",rs:"45 sec",c:"Onderhoud: rompstabiliteit scherp houden."},
   {n:"Symmetry Check Drill",i:"Start centraal. Trainer wijst afwisselend L/R. Keeper doet lunge + vangst. Bewust beide kanten gelijk.",s:"2 sets",r:"6 per kant",rs:"45 sec",c:"Onderhoud: symmetrie vasthouden op het veld."},
   {n:"Second-Ball Rebound (onderhoud)",i:"Sprawl op klapsignaal. Zodra je staat, speelt trainer bal twee direct in.",s:"2 sets",r:"4 herh.",rs:"60 sec",c:"Onderhoud: rompstijfheid onder vermoeidheid."}
  ]
 },
 hp:[
  {n:"Deflected Shot / Tip-In",top:true,d:"Zet je duik in naar de linkerhoek. Zodra de bal halverwege via een deflectiemat naar rechts afwijkt, zet je je core vast, breek je je beweging af en gooi je je armen naar de andere kant.",t:"Maximale excentrische core-stijfheid bij een van richting veranderd schot."},
  {n:"Contact Sprawl",top:false,d:"Vang de lichte duw met een stootkussen op van een medespeler, behoud je balans met een strakke core en verwerk direct het schot dat volgt.",t:"Rompstijfheid onder externe verstoring bij corners."}
 ]
},
{id:'exp',label:'Explosiviteit',cls:'exp',icon:'4',screenTest:'kr',
 focus:{
  gym:[
   {n:"Lateral Step met stick-landing",i:"Zijwaartse stap op één been, land gecontroleerd. Geen sprong. Vries in: knie stabiel, balans vast. Tel tot 3.",s:"3 sets",r:"8 per kant",rs:"45 sec",c:"Landing is de startpositie voor de vangst — niet het eindpunt."},
   {n:"Lateral Bound met stick-landing",i:"Kleine zijwaartse sprong op één been, land en vries in. Begin klein (50 cm), bouw op.",s:"3 sets",r:"6 per kant",rs:"60 sec",c:"Afstand langzaam opbouwen."},
   {n:"Lateral Bound met directe terugsprong",i:"Zijwaartse sprong, land, spring direct terug. Zo kort mogelijk grondcontact.",s:"4 sets",r:"5 per kant",rs:"90 sec",c:"Minimale grondcontacttijd."}
  ],
  veld:[
   {n:"Side Step Catch Drill",i:"Op visueel signaal maak je een zijwaartse stap. Op het moment van landen gooit de trainer een lage bal die kant op. Vang vanuit de stick-landing positie.",s:"3 sets",r:"6 per kant",rs:"45 sec",c:"Transfer: Grondcontact en balcontact tegelijk."},
   {n:"Lateral Jump Low Shot",i:"Op het fluitje spring je zijwaarts. Op het moment van landing schiet de trainer een strakke, lage bal die kant op. Pak de bal klem vanuit de stick-landing positie.",s:"3 sets",r:"5 per kant",rs:"60 sec",c:"Transfer: Duikopzet waarbij grondcontact en balcontact samenvallen."},
   {n:"Double-Side Rebound",i:"De trainer heeft twee ballen. Spring naar links, pak een lage bal, en spring binnen 2 seconden direct terug naar rechts voor bal twee.",s:"4 sets",r:"5 herh.",rs:"90 sec",c:"Transfer: Herhaalde zijdelingse explosiviteit met kort wedstrijdecht interval."}
  ]
 },
 maint:{
  gym:[
   {n:"Repeated Lateral Bounds (onderhoud)",i:"Herhaaldelijke zijwaartse sprongen. Zo kort mogelijk grondcontact.",s:"2 sets",r:"8 sprongen",rs:"45 sec",c:"Onderhoud: explosiviteit vasthouden."},
   {n:"Lateral Bound met richtingsverandering (onderhoud)",i:"Zijwaartse sprong, direct diagonaal vooruit.",s:"2 sets",r:"5 per kant",rs:"45 sec",c:"Onderhoud: explosieve richtingsverandering."},
   {n:"Lateral Bound to dive (onderhoud)",i:"Zijwaartse sprong, land, duik naar grond voor lage bal. Snel opstaan, herhalen.",s:"2 sets",r:"4 per kant",rs:"60 sec",c:"Onderhoud: explosiviteit geïntegreerd in keepersactie."}
  ],
  veld:[
   {n:"Pendulum Save Drill (onderhoud)",i:"Herhaalde zijwaartse sprongen op ritme van trainer. Op onverwacht moment schiet trainer. Keeper reageert direct.",s:"2 sets",r:"6 herh.",rs:"45 sec",c:"Onderhoud: actief pendelen scherp houden."},
   {n:"Diagonal Dive Drill (onderhoud)",i:"Spring zijwaarts, verander direct van richting en duik diagonaal naar voren om lage bal te onderscheppen.",s:"2 sets",r:"4 per kant",rs:"45 sec",c:"Onderhoud: explosieve richtingsverandering op het veld."},
   {n:"Series Ball Drill (onderhoud)",i:"Snelle serie van 3 ballen met strak interval. Verplaats, land, duik, sta op en herpositioneer direct.",s:"2 sets",r:"3 herh.",rs:"60 sec",c:"Onderhoud: volledige keeperscyclus vasthouden."}
  ]
 },
 hp:[
  {n:"Split Step Trigger Drill",top:true,d:"Pendel mee voor je doel terwijl de trainer dribbelt. Exact op het moment dat de trainer zijn schietbeen naar achteren haalt, maak je een split-step (kleine hup). Gebruik de landing op je voorvoeten als katapult voor een explosieve zijwaartse zweefduik.",t:"Timing van het zwefmoment en maximale elastische afzetkracht."},
  {n:"Double-Ball Chaos",top:false,d:"Duik explosief naar de linkerhoek voor bal één. Terwijl je nog op het gras ligt, schiet de trainer bal twee in de rechterhoek. Lanceer jezelf met je armen en core direct vanaf de mat om ook bal twee te pareren.",t:"Rebound-explosiviteit — direct vanaf de grond reageren op een tweede schot."}
 ]
}];

const WEEK_INFO=[
 "Week 1-2 · Focus: Mobiliteit & basis stabiliteit — beweeg eerst goed",
 "Week 3-4 · Focus: Stabiliteit & romp — controleer de beweging onder belasting",
 "Week 5-6 · Focus: Performance & integratie — maximale output in keeperssituaties"
];

const TESTS=['mob','asy','sta','romp','kr'];
const FREQS=['Bijna nooit','Soms','Regelmatig'];
const TEST_META={
 mob:{title:'Mobiliteit',sub:'Deep Overhead Squat',
  eye:"Merk je wel eens dat je bij het laag duiken of neerkomen je rug of nek ongemakkelijk voelt, terwijl je technisch goed stond?",
  chk:"Strek je armen omhoog en zak langzaam zo diep mogelijk door je knieen, zoals een diepe hurkzit.",
  sig:"Komen je hielen los van de grond, of moet je je rug bol maken om laag te komen? Dat is het signaal.",
  rq:"Herkende je dit signaal tijdens de beweging?"},
 asy:{title:'Asymmetrie',sub:'In-Line Lunge',
  eye:"Heb je een kant waar duiken of afzetten logischer aanvoelt dan de andere? Alsof een kant net iets minder vertrouwd is?",
  chk:"Sta in een rechte lijn, zet een grote stap naar voren met een been, zak in en sta op. Herhaal met je andere been.",
  sig:"Voel je een duidelijk verschil in balans of stevigheid tussen links en rechts? Dat is het signaal.",
  rq:"Voelde je een duidelijk verschil tussen links en rechts?"},
 sta:{title:'Stabiliteit',sub:'Single-Leg Drop Landing',isRisk:true,
  eye:"Heb je wel eens het gevoel dat je knie wegklapt of instabiel aanvoelt net na een landing?",
  chk:"Sta op een been op een lage verhoging zoals een trede, stap eraf en land op datzelfde been.",
  sig:"Wiebelt je knie naar binnen (valgusknie) bij het landen? Dat wiebelen is het signaal.",
  rq:"Wiebelde je knie naar binnen bij de landing?",
  warnText:"Je knie wiebelde naar binnen (valgusknie). Bescherming gaat hier boven ontwikkeling. Een fysiotherapeut of sportarts kan in 20 minuten beoordelen wat er precies speelt. Dat is de informatie die je nodig hebt om dit seizoen sterk en blessurevrij te blijven."},
 romp:{title:'Rompstijfheid',sub:'De Sprawl',
  eye:"Merk je wel eens dat je bij een duik net iets te laat reageert, alsof je romp meegeeft in plaats van je richting bepaalt?",
  chk:"Ga op je knieen zitten zoals bij het begin van een sprawl. Breng je armen langzaam naar voren, als een burpee zonder sprong of push-up.",
  sig:"Voelt je onderrug hol worden zodra je je armen naar voren brengt? Dat is het signaal.",
  rq:"Voelde je je onderrug hol worden tijdens de beweging?"},
 kr:{title:'Kracht & Explosiviteit',sub:'Single-Leg Lateral Bound',
  eye:"Voel je je bij een explosieve zijwaartse duik wel eens krachteloos, alsof je been niet de kracht heeft die je zou willen?",
  chk:"Spring zijwaarts zo ver mogelijk op een been en land gecontroleerd op datzelfde been.",
  sig:"Land je stabiel, of moet je meteen bijspringen om niet te vallen? Dat bijspringen is het signaal.",
  rq:"Moest je bijspringen om je landing te redden?"}
};

const S={name:'',ph:'intro',res:{},date:null,week:0,type:'thuis'};
const main=document.getElementById('main');
const track=document.getElementById('track');

function h(tag,cls,txt){const e=document.createElement(tag);if(cls)e.className=cls;if(txt!==undefined)e.textContent=txt;return e;}
function ap(p,...cs){cs.forEach(c=>{if(c)p.appendChild(c)});return p;}
function clr(e){while(e.firstChild)e.removeChild(e.firstChild);return e;}
function curWeek(){if(!S.date)return 0;const d=Math.floor((Date.now()-new Date(S.date).getTime())/86400000);return d<14?0:d<28?1:2;}
function hasSig(id){return S.res[id]===true;}

function buildBlokken(){
  return BLOKKEN.map(blok=>{
    const ids=blok.screenTest2?[blok.screenTest,blok.screenTest2]:[blok.screenTest];
    const isSig=ids.some(id=>hasSig(id));
    const isRiskWarn=!!(blok.isRisk&&hasSig(blok.screenTest));
    return{blok,isSig,isRiskWarn};
  });
}

function renderTrack(){
  clr(track);
  if(['intro','sum','prog'].includes(S.ph))return;
  const cur=TESTS.indexOf(S.ph.split('_')[1]||'');
  TESTS.forEach((_,i)=>track.appendChild(h('div','seg'+(i<=cur?' on':''))));
}

function mkEx(ex,isField){
  const card=h('div','blok-body'+(isField?' fld':''));
  ap(card,h('div','exn',ex.n),h('div','exi',ex.i));
  if(ex.s||ex.r||ex.rs){
    const chips=h('div','chips');
    if(ex.s)chips.appendChild(h('span','chip'+(isField?' f':''),ex.s));
    if(ex.r)chips.appendChild(h('span','chip'+(isField?' f':''),ex.r));
    if(ex.rs)chips.appendChild(h('span','chip'+(isField?' f':''),ex.rs));
    card.appendChild(chips);
  }
  if(ex.c){const co=h('div','cch');const st=h('strong');st.textContent=isField?'Transfer: ':'Coaching: ';ap(co,st,document.createTextNode(ex.c));card.appendChild(co);}
  return card;
}

function showIntro(){
  const s=h('div','screen ih');
  const g=h('div','gg');
  const logo=h('div','logo-text','Goalie IQ');
  const logoSub=h('div','logo-sub','Keeper Screening & Training');
  ap(s,logo,logoSub,h('h1','','5 Keeper Checks'),h('p','lede','Geen trainer die je beoordeelt. Jij voelt het zelf. 5 korte checks, elk met een vraag, een beweging, en een volledig 6-weken schema.'));
  const inp=h('input','ni');inp.type='text';inp.placeholder='Hoe heet je?';inp.value=S.name;
  inp.addEventListener('input',e=>{S.name=e.target.value;});
  const btn=h('button','bp','Start de eerste check');
  btn.addEventListener('click',()=>{S.ph='eye_mob';render();});
  ap(s,inp,btn);clr(main);main.appendChild(s);
}

function showEye(tid){
  const t=TEST_META[tid];const idx=TESTS.indexOf(tid)+1;const s=h('div','screen');
  const ey=h('div','ey');const b=h('b');b.textContent=idx+'/'+TESTS.length;
  ey.appendChild(b);ey.appendChild(document.createTextNode(' - '+t.title));
  ap(s,ey,h('h1','',t.eye),h('p','lede','Denk er even over na. Bij de volgende stap ga je dit meteen voelen.'));
  const row=h('div','brow');const btn=h('button','bp','Doe de check');
  btn.addEventListener('click',()=>{S.ph='chk_'+tid;render();});row.appendChild(btn);s.appendChild(row);
  clr(main);main.appendChild(s);
}

function showChk(tid){
  const t=TEST_META[tid];const idx=TESTS.indexOf(tid)+1;const s=h('div','screen');
  const ey=h('div','ey');const b=h('b');b.textContent=idx+'/'+TESTS.length;
  ey.appendChild(b);ey.appendChild(document.createTextNode(' - '+t.sub));
  const card=h('div','card');
  ap(card,h('div','clbl','Beweging'),h('div','cbody',t.chk),h('div','sig','Signaal: '+t.sig));
  ap(s,ey,h('h1','sm','Sta op en doe dit even'),card);
  const row=h('div','brow');const btn=h('button','bp','Klaar, ga door');
  btn.addEventListener('click',()=>{S.ph='ref_'+tid;render();});row.appendChild(btn);s.appendChild(row);
  clr(main);main.appendChild(s);
}

function showRef(tid){
  const t=TEST_META[tid];const idx=TESTS.indexOf(tid)+1;const s=h('div','screen');
  const ey=h('div','ey');const b=h('b');b.textContent=idx+'/'+TESTS.length;
  ey.appendChild(b);ey.appendChild(document.createTextNode(' - '+t.title));
  function mkCh(lbl,sub){const c=h('button','ch');const left=h('div','ch-left');ap(left,document.createTextNode(lbl),h('span','sub',sub));const ck=h('span','ch-check','v');ap(c,left,ck);return c;}
  const chs=h('div','chs');const c1=mkCh('Ja, dat voelde ik','Het signaal was duidelijk');const c2=mkCh('Nee, voelde stabiel','Geen duidelijk signaal');ap(chs,c1,c2);
  const fb=h('div','freq-block');fb.appendChild(h('div','clbl','Hoe vaak speelt dit een rol in een wedstrijd?'));
  const sc=h('div','scl');const sbs=FREQS.map(f=>{const b2=h('button','sb',f);sc.appendChild(b2);return b2;});fb.appendChild(sc);
  const row=h('div','brow');const btn=h('button','bp','Bekijk je advies');btn.disabled=true;row.appendChild(btn);
  let selSig=null;let selFreq=null;
  function tryEnable(){btn.disabled=!(selSig===true&&selFreq!==null||selSig===false);}
  c1.addEventListener('click',()=>{selSig=true;selFreq=null;c1.className='ch sel-ja';c2.className='ch';sbs.forEach(b2=>b2.className='sb');fb.classList.add('show');tryEnable();});
  c2.addEventListener('click',()=>{selSig=false;selFreq=null;c2.className='ch sel-nee';c1.className='ch';fb.classList.remove('show');tryEnable();});
  sbs.forEach((b2,i)=>b2.addEventListener('click',()=>{selFreq=FREQS[i];sbs.forEach((x,j)=>x.className='sb'+(j===i?' sel-freq':''));tryEnable();}));
  btn.addEventListener('click',()=>{
    if(btn.disabled)return;
    S.res[tid]=selSig;
    const next=TESTS.indexOf(tid)+1;
    if(next>=TESTS.length){S.date=new Date().toISOString();S.week=curWeek();S.ph='sum';}
    else{S.ph='eye_'+TESTS[next];}
    render();
  });
  ap(s,ey,h('h1','sm',t.rq),h('div','clbl','Herkende je het signaal?'),chs,fb,row);
  clr(main);main.appendChild(s);
}

function showSum(){
  const hasRisk=S.res['sta']===true;
  const sigCount=Object.entries(S.res).filter(([k,v])=>v&&k!=='sta').length;
  const intro=hasRisk?'Een check gaf een signaal dat extra aandacht verdient.':
    sigCount>0?'Je hebt duidelijke aandachtspunten gevonden. Je schema bevat altijd alle vier de blokken.':
    'Sterke basis. Je schema traint alle vier de blokken op onderhoudsniveau.';
  const s=h('div','screen');
  ap(s,h('div','ey','Screening klaar'),h('h1','sm',S.name?S.name+', dit is jouw beeld':'Dit is jouw beeld'),h('p','lede',intro));
  TESTS.forEach(tid=>{
    const t=TEST_META[tid];const v=S.res[tid];const hasW=t.isRisk&&v;
    const row=h('div','sr');const ic=h('div','si '+(hasW?'w':v?'w':'o'),hasW?'!':v?'~':'OK');
    const tx=h('div','');ap(tx,h('span','sn',t.title),h('span','ss',hasW?'Verwijsadvies':v?'Aandachtspunt':'Sterke kant'));
    ap(row,ic,tx);s.appendChild(row);
  });
  const info=h('div','week-info');info.textContent='Je programma bevat altijd 4 vaste blokken in vaste volgorde: Mobiliteit - Stabiliteit - Romp/Asymmetrie - Explosiviteit.';s.appendChild(info);
  const row=h('div','brow');const btn=h('button','bp','Bekijk je schema');
  btn.addEventListener('click',()=>{S.ph='prog';render();});row.appendChild(btn);s.appendChild(row);
  clr(main);main.appendChild(s);
}

function showProg(){
  const cw=curWeek();const blokData=buildBlokken();const s=h('div','screen');
  const top=h('div','ht');
  ap(top,h('div','hn','Goalie IQ '+(S.name?'voor '+S.name:'Schema')),
     h('div','hs','4 blokken per sessie - altijd mobiliteit - stabiliteit - romp - explosiviteit - 2-3x per week'));
  if(S.date){const d=new Date(S.date);top.appendChild(h('div','hs','Gestart op '+d.getDate()+' '+['jan','feb','mrt','apr','mei','jun','jul','aug','sep','okt','nov','dec'][d.getMonth()]));}
  s.appendChild(top);
  const wn=h('div','wn');
  ['Week 1-2','Week 3-4','Week 5-6'].forEach((lbl,i)=>{
    const t=h('button','wt'+(S.week===i?' on':''),lbl);
    if(cw===i){const dot=h('span','cw','nu');t.appendChild(dot);}
    t.addEventListener('click',()=>{S.week=i;showProg();});wn.appendChild(t);
  });
  s.appendChild(wn);
  s.appendChild(h('div','week-info',WEEK_INFO[S.week]));
  const tts=h('div','tts');
  const t1=h('button','tt'+(S.type==='thuis'?' on':''),'Thuis / Gym');
  const t2=h('button','tt'+(S.type==='veld'?' fon':''),'Op het veld');
  t1.addEventListener('click',()=>{S.type='thuis';showProg();});
  t2.addEventListener('click',()=>{S.type='veld';showProg();});
  ap(tts,t1,t2);s.appendChild(tts);
  blokData.forEach(({blok,isSig,isRiskWarn})=>{
    const blokEl=h('div','blok '+(isRiskWarn?'danger':blok.cls));
    const hdr=h('div','blok-hdr');const num=h('span','bnum',blok.icon);
    hdr.appendChild(num);hdr.appendChild(document.createTextNode(blok.label));
    if(isRiskWarn)hdr.appendChild(h('span','warn-pill','Verwijsadvies'));
    else if(isSig)hdr.appendChild(h('span','focus-pill','Focuspunt'));
    else hdr.appendChild(h('span','maint-pill','Onderhoud'));
    blokEl.appendChild(hdr);
    if(isRiskWarn){const body=h('div','blok-body');ap(body,h('div','exn','Verwijsadvies - '+blok.label),h('div','exi',blok.warnText||''));blokEl.appendChild(body);}
    else{
      const pool=isSig?blok.focus:blok.maint;
      const src=S.type==='veld'?pool.veld:pool.gym;
      const ex=src[Math.min(S.week,src.length-1)];
      blokEl.appendChild(mkEx(ex,S.type==='veld'));
    }
    s.appendChild(blokEl);
  });
  const hpAll=BLOKKEN.reduce((acc,b)=>{if(b.hp)acc.push(...b.hp);return acc;},[]);
  if(hpAll.length>0){
    s.appendChild(h('div','div'));
    const hpw=h('div','hpw');const hpt=h('button','hpt');
    hpt.appendChild(document.createTextNode('High-Performance Uitdagingen'));
    const arr=h('span','','v');hpt.appendChild(arr);const hpb=h('div','');hpb.style.display='none';
    hpb.appendChild(h('p','lede','Pas starten als week 5-6 stabiel voelt.'));
    hpAll.slice(0,4).forEach(hp=>{const hpc=h('div','hpc');if(hp.top)hpc.appendChild(h('div','hptag','Aanbevolen'));ap(hpc,h('div','hpn',hp.n),h('div','hpd',hp.d),h('div','hptr',hp.t));hpb.appendChild(hpc);});
    hpt.addEventListener('click',()=>{const op=hpb.style.display==='none';hpb.style.display=op?'block':'none';arr.textContent=op?'^':'v';});
    ap(hpw,hpt,hpb);s.appendChild(hpw);
  }
  s.appendChild(h('div','div'));
  const rb=h('button','bs','Nieuwe screening starten');rb.style.width='100%';
  rb.addEventListener('click',()=>{if(confirm('Weet je het zeker?')){Object.assign(S,{name:'',ph:'intro',res:{},date:null,week:0,type:'thuis'});render();}});
  s.appendChild(rb);clr(main);main.appendChild(s);
}

function render(){
  renderTrack();
  if(S.ph==='intro'){showIntro();return;}
  if(S.ph==='sum'){showSum();return;}
  if(S.ph==='prog'){showProg();return;}
  const[action,tid]=S.ph.split('_');
  if(action==='eye')showEye(tid);
  else if(action==='chk')showChk(tid);
  else if(action==='ref')showRef(tid);
}
render();
