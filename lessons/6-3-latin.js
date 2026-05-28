/* ═══════════════════════════════════════
   LESSON: Week 6 · Day 3 · Ecclesiastical Latin V
   Imperfect & Future Tenses
   ═══════════════════════════════════════ */

LESSONS['6-3-Latin'] = {
  color:    'gold',
  subtitle: 'Week 6 · Day 3 · Ecclesiastical Latin V',
  title:    'Latin Imperfect & Future',
  intro:    'Today you add two key Latin tenses: the imperfect (“was doing / used to”) and the future (“will do”). You will learn their easiest recognition markers: -ba- for the imperfect and -bo/-bi- or -a/-e- patterns for the future.',
  sections: ['Introduction','Imperfect Meaning','Imperfect Forms','Future Forms','Reading Practice','Quiz','Complete'],

  beforeYouBegin: `
    <div class="box box-tip"><strong>💡 Contrast:</strong> Present = “I love” (amo). Imperfect = “I was loving / used to love” (amabam). Future = “I will love” (amabo).</div>
    <div class="box box-fact"><strong>📜 Why it matters:</strong> Latin narratives and prayers often move between ongoing background action (imperfect) and decisive actions (perfect). The future is common in promises and vows.</div>`,

  alphabetIntro: 'Learn one full conjugation pattern using 1st conjugation “amare” as the model.',
  alphabetNotes: `<div class="box box-note"><strong>Recognition:</strong> Imperfect often has -ba- (ama-BA-m). Future often has -bo/-bi- (ama-BO) in 1st/2nd conjugations.</div>`,
  alphabet: [
    {ch:'amabam',   name:'I was loving',     sound:'a-MA-bam',   n:1, t:true},
    {ch:'amabas',   name:'you were loving',  sound:'a-MA-bas',   n:2, t:true},
    {ch:'amabat',   name:'he/she was loving',sound:'a-MA-bat',   n:3, t:true},
    {ch:'amabamus', name:'we were loving',   sound:'a-MA-ba-moos',n:4,t:true},
    {ch:'amabatis', name:'you all were loving',sound:'a-MA-ba-tees',n:5,t:true},
    {ch:'amabant',  name:'they were loving', sound:'a-MA-bant',  n:6, t:true},
    {ch:'amabo',    name:'I will love',      sound:'a-MA-bo',    n:7, t:true},
    {ch:'amabis',   name:'you will love',    sound:'a-MA-bis',   n:8, t:true},
    {ch:'amabit',   name:'he/she will love', sound:'a-MA-bit',   n:9, t:true},
    {ch:'amabunt',  name:'they will love',   sound:'a-MA-boont', n:10,t:true},
  ],

  focusLetters: [
    {ch:'-ba-', name:'Imperfect marker', trans:'background/ongoing past', desc:'Signals “was doing / used to”', ex:'amabam = I was loving'},
    {ch:'-bo/-bi-', name:'Future marker', trans:'will do', desc:'Common in 1st/2nd conjugations', ex:'amabo = I will love'},
    {ch:'imperfect', name:'Imperfect sense', trans:'ongoing/habitual past', desc:'Sets scene; repeated action', ex:'orabat = he was praying'},
    {ch:'future', name:'Future sense', trans:'will...', desc:'Promise, vow, expectation', ex:'servabo = I will keep'},
    {ch:'esse', name:'To be (review)', trans:'was/will be', desc:'Core verb across all Latin', ex:'erat = was · erit = will be'},
  ],

  deepDive: `
    <div class="lesson-h3">Imperfect (background past)</div>
    <p class="lesson-p">The imperfect describes ongoing or habitual action in the past: “was doing / used to do.” It often sets the scene in narrative, or describes a pattern of life.</p>

    <div class="lesson-h3">Future (promise/action ahead)</div>
    <p class="lesson-p">The future describes action that will happen. In Scripture and prayer it often carries covenant promise language: “I will...”</p>

    <div class="box box-fact"><strong>Quick recognition:</strong> If you see <strong>-ba-</strong>, suspect imperfect. If you see <strong>-bo/-bi-</strong> (amabo, amabis), suspect future.</div>`,

  writing: [
    {ch:'amabam amabam amabam', name:'Imperfect drill', steps:['Write amabam 30 times','Say: “I was loving / I used to love.”','Circle -ba-.']},
    {ch:'amabo amabo amabo', name:'Future drill', steps:['Write amabo 30 times','Say: “I will love.”','Circle -bo-.']},
    {ch:'erat', name:'Was (esse)', steps:['Write erat 20 times','Say: “he/she/it was.”','Remember: imperfect of esse is irregular.']},
    {ch:'erit', name:'Will be (esse)', steps:['Write erit 20 times','Say: “he/she/it will be.”','Future of esse is a core form.']},
    {ch:'orabat', name:'He was praying', steps:['Write orabat 20 times','Say: “he was praying.”','Notice -ba- again.']},
  ],

  vocab: [
    {ch:'amo',    trans:'amo',    meaning:'I love',         note:'Model verb'},
    {ch:'amare',  trans:'amare',  meaning:'to love',        note:'1st conjugation infinitive'},
    {ch:'orare',  trans:'orare',  meaning:'to pray',        note:'orabat = he was praying'},
    {ch:'servare',trans:'servare',meaning:'to keep/guard',  note:'servabo = I will keep'},
    {ch:'erit',   trans:'erit',   meaning:'he/she/it will be', note:'Future of esse'},
    {ch:'erat',   trans:'erat',   meaning:'he/she/it was',  note:'Imperfect of esse'},
    {ch:'semper', trans:'semper', meaning:'always',         note:'common adverb'},
  ],

  scriptureRef: 'Matthew 28:20 (Latin idea)',
  scripture: {
    orig:  'ego vobiscum sum ... usque ad consummationem saeculi',
    trans: 'ego vobiscum sum ... usque ad consummationem saeculi',
    eng:   '"I am with you always..." — Matthew 28:20',
  },
  scriptureNote: 'Today’s tenses help you describe past habit (imperfect) and future promise (future). Both show up constantly in Scripture and prayer.',
  scriptureTip:  '<strong>💡 Reading trick:</strong> When you’re unsure, look for the marker: -ba- (imperfect) or -bo/-bi- (future, 1st/2nd conj.).',

  quiz: [
    {q:'What does the Latin imperfect tense usually express?', ch:'', opts:['Completed past action','Ongoing/habitual past (“was doing/used to”)','Future action','A command'], ans:1, ok:'Correct. The imperfect expresses ongoing/habitual past action.', no:'Imperfect = ongoing/habitual past (“was doing/used to”).'},
    {q:'Which sequence is the common imperfect marker in 1st conjugation?', ch:'', opts:['-nt-','-ba-','-us-','-ri-'], ans:1, ok:'Correct. -ba- is the common imperfect marker.', no:'-ba- is the common imperfect marker.'},
    {q:'What does amabo mean?', ch:'amabo', opts:['I was loving','I love','I will love','love!'], ans:2, ok:'Correct. amabo = I will love (future).', no:'amabo is future: “I will love.”'},
    {q:'What does amabam mean?', ch:'amabam', opts:['I will love','I was loving / used to love','I loved (once)','I am loved'], ans:1, ok:'Correct. amabam = I was loving/used to love (imperfect).', no:'amabam is imperfect: “I was loving/used to love.”'},
    {q:'Which form means “he will be” in Latin?', ch:'', opts:['erat','erit','sum','es'], ans:1, ok:'Correct. erit = he/she/it will be.', no:'erit = he/she/it will be.'},
  ],

  completionNote: 'You can now recognize and use two key Latin tenses: imperfect (-ba-) for ongoing past and future (-bo/-bi-) for “will.” This unlocks narrative and promise language across Latin texts.',
  nextDay: 'Day 4: Hebrew — Piel Stem →',
};

