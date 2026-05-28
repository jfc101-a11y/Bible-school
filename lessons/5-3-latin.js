/* ═══════════════════════════════════════
   LESSON: Week 5 · Day 3 · Ecclesiastical Latin IV
   Pater Noster — Full Prayer Reading
   ═══════════════════════════════════════ */

LESSONS['5-3-Latin'] = {
  color:    'gold',
  subtitle: 'Week 5 · Day 3 · Ecclesiastical Latin IV',
  title:    'The Lord’s Prayer in Latin',
  intro:    'Today you read the full Pater Noster in Latin. You will learn the backbone of Latin prayer-language: cases, a few key verbs, and the subjunctive-like “let…” petitions that shape the prayer.',
  sections: ['Introduction','The Prayer Text','Core Grammar','Key Vocabulary','Reading Practice','Quiz','Complete'],

  beforeYouBegin: `
    <div class="box box-tip"><strong>💡 Goal:</strong> Read smoothly, then understand. Latin is built for prayer and proclamation—short phrases with clear case structure.</div>
    <div class="box box-fact"><strong>📜 A key phrase:</strong> <em>fiat voluntas tua</em> — “let your will be done.” This “fiat” is the classic Latin “let it be” form.</div>`,

  alphabetIntro: 'Anchor words and endings you will see across Latin prayers for the rest of your life.',
  alphabetNotes: `<div class="box box-note"><strong>Remember:</strong> Latin meanings travel in endings. Keep an eye on -us/-um, -ae, -i, -o/-um, -ibus.</div>`,
  alphabet: [
    {ch:'Pater',      name:'Father',          sound:'PAH-ter',      n:1, t:true},
    {ch:'noster',     name:'our',             sound:'NOS-ter',      n:2, t:true},
    {ch:'qui',        name:'who',             sound:'kwee',         n:3, t:true},
    {ch:'es',         name:'you are',         sound:'es',           n:4, t:true},
    {ch:'in caelis',  name:'in the heavens',  sound:'in CHAI-lees', n:5, t:true},
    {ch:'fiat',       name:'let it be done',  sound:'FEE-aht',      n:6, t:true},
    {ch:'voluntas',   name:'will',            sound:'vo-LOON-tas',  n:7, t:true},
    {ch:'panem',      name:'bread (acc.)',    sound:'PAH-nem',      n:8, t:true},
    {ch:'hodie',      name:'today',           sound:'HO-dee-eh',    n:9, t:true},
    {ch:'dimitte',    name:'forgive (imp.)',  sound:'di-MIT-te',    n:10,t:true},
  ],

  focusLetters: [
    {ch:'Pater noster', name:'Vocative address', trans:'Our Father', desc:'Direct address; Latin prayer begins by naming God', ex:'Pater noster, qui es in caelis'},
    {ch:'fiat',         name:'Fiat',             trans:'let it be',  desc:'“Let it be done” petition language', ex:'fiat voluntas tua'},
    {ch:'panem... nostrum', name:'Accusative object', trans:'our bread', desc:'Give us (object) bread (acc.)', ex:'Panem nostrum... da nobis'},
    {ch:'dimitte nobis', name:'Imperative petition', trans:'forgive us', desc:'Prayer as bold request grounded in mercy', ex:'Dimitte nobis debita nostra'},
    {ch:'ne nos inducas', name:'Negative petition', trans:'do not lead us', desc:'Latin uses ne for “lest / not” in requests', ex:'Ne nos inducas in tentationem'},
  ],

  deepDive: `
    <div class="lesson-h3">The Pater Noster (Latin)</div>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;padding:1.1rem 1.25rem;margin:1rem 0;">
      <div style="font-family:var(--serif);font-size:1.15rem;color:var(--gold);line-height:1.9;">
        Pater noster, qui es in caelis,<br/>
        sanctificetur nomen tuum.<br/>
        adveniat regnum tuum.<br/>
        fiat voluntas tua,<br/>
        sicut in caelo et in terra.<br/><br/>
        Panem nostrum quotidianum da nobis hodie,<br/>
        et dimitte nobis debita nostra,<br/>
        sicut et nos dimittimus debitoribus nostris.<br/>
        et ne nos inducas in tentationem,<br/>
        sed libera nos a malo. Amen.
      </div>
      <div style="margin-top:.55rem;color:var(--text-mid);font-size:.85rem;font-style:italic;">
        Read it twice aloud. Then read it again phrase by phrase, translating.
      </div>
    </div>

    <div class="lesson-h3">Three grammar anchors</div>
    <p class="lesson-p"><strong>1) Passive “let it be…”</strong>: sanctificetur (let it be made holy) · adveniat (let it come) · fiat (let it be done). This is prayer as humble petition.</p>
    <p class="lesson-p"><strong>2) Objects in -m</strong>: panem (bread, acc.) · nos (us, acc.). Many petitions are “Verb + us + object.”</p>
    <p class="lesson-p"><strong>3) Like/as</strong>: sicut introduces comparison—your will on earth as in heaven.</p>

    <div class="box box-fact"><strong>Fiat:</strong> This one word shaped Western Christian vocabulary (and even modern phrases). It is the Latin “let it be.”</div>`,

  writing: [
    {ch:'Pater noster, qui es in caelis', name:'Opening line', steps:['Say it aloud slowly','Underline qui es (“who are”)','Write it 5 times.']},
    {ch:'fiat voluntas tua', name:'Core petition', steps:['Write “fiat” 10 times','Then write the full phrase 10 times','Translate: “let your will be done.”']},
    {ch:'Panem nostrum quotidianum da nobis hodie', name:'Bread petition', steps:['Circle panem (acc.)','Find nobis (to/for us)','Write it 3 times and translate.']},
    {ch:'dimitte nobis debita nostra', name:'Forgiveness petition', steps:['Memorize dimitte = forgive','Write it 5 times','Translate: “forgive us our debts/trespasses.”']},
    {ch:'sed libera nos a malo', name:'Deliverance petition', steps:['Circle libera (deliver/free)','Underline a malo (from evil)','Write it 5 times.']},
  ],

  vocab: [
    {ch:'caelum',   trans:'caelum',   meaning:'heaven',      note:'Plural: caelis (abl./dat.)'},
    {ch:'nomen',    trans:'nomen',    meaning:'name',        note:'nomen tuum = your name'},
    {ch:'regnum',   trans:'regnum',   meaning:'kingdom',     note:'regnum tuum = your kingdom'},
    {ch:'voluntas', trans:'voluntas', meaning:'will',        note:'voluntas tua = your will'},
    {ch:'panis',    trans:'panis',    meaning:'bread',       note:'panem (acc.) in the prayer'},
    {ch:'debitum',  trans:'debitum',  meaning:'debt',        note:'debita nostra = our debts'},
    {ch:'tentatio', trans:'tentatio', meaning:'temptation',  note:'in tentationem (acc.)'},
  ],

  scriptureRef: 'Matthew 6:9–13',
  scripture: {
    orig:  'Pater noster... sed libera nos a malo. Amen.',
    trans: 'Pater noster... sed libera nos a malo. Amen.',
    eng:   '"Our Father... deliver us from evil." — Matthew 6:9–13',
  },
  scriptureNote: 'Locate the repeated tuum/tua (your) and the repeated nos/nobis (us). Prayer is personal and corporate at once.',
  scriptureTip:  '<strong>💡 Practice:</strong> Pray it slowly in Latin once per day for a week. Fluency comes from faithful repetition.',

  quiz: [
    {q:'What does “fiat” mean in the Lord’s Prayer?', ch:'fiat', opts:['It is a noun meaning “faith”','It means “let it be done / let it be”', 'It means “bread”', 'It means “forgive”'], ans:1, ok:'Correct. fiat is petition language: “let it be / let it be done.”', no:'fiat means “let it be / let it be done.”'},
    {q:'In “Panem nostrum... da nobis,” what case is panem?', ch:'panem', opts:['Nominative','Genitive','Accusative','Ablative'], ans:2, ok:'Correct. panem is accusative (direct object): “Give... bread.”', no:'panem is accusative (direct object).'},
    {q:'What does “dimitte” mean?', ch:'dimitte', opts:['remember','forgive / release','rule','walk'], ans:1, ok:'Correct. dimitte = forgive/release.', no:'dimitte = forgive/release.'},
    {q:'What word introduces comparison in “sicut in caelo et in terra”?', ch:'sicut', opts:['et','in','sicut','sed'], ans:2, ok:'Correct. sicut = “as / just as.”', no:'sicut = “as / just as.”'},
    {q:'What is the final petition “sed libera nos a malo” asking?', ch:'', opts:['Make us kings','Teach us grammar','Deliver/free us from evil','Give us more bread'], ans:2, ok:'Correct. It is the deliverance petition: “but deliver us from evil.”', no:'It asks deliverance: “deliver/free us from evil.”'},
  ],

  completionNote: 'You can now read and pray the Lord’s Prayer in Latin, recognizing the central petition forms and the case-driven structure. This prayer will become one of your best daily Latin reading exercises.',
  nextDay: 'Day 4: Hebrew Reading — Genesis 1:1–5 →',
};

