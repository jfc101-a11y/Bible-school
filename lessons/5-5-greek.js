/* ═══════════════════════════════════════
   LESSON: Week 5 · Day 5 · Koine Greek IX
   Romans 3:21–26 — Justification by Grace
   ═══════════════════════════════════════ */

LESSONS['5-5-Greek'] = {
  color:    'blue',
  subtitle: 'Week 5 · Day 5 · Koine Greek IX',
  title:    'Romans 3:21–26 — Justification',
  intro:    'Today you read Romans 3:21–26 in Greek—the heart of Paul’s gospel summary. Your goal is to recognize a handful of key theological terms in their Greek form and see how the grammar carries “gift” language: righteousness given, not earned.',
  sections: ['Introduction','The Passage','Key Terms','Grammar Notes','Reading Practice','Quiz','Complete'],

  beforeYouBegin: `
    <div class="box box-tip"><strong>💡 Reading approach:</strong> Don’t try to translate everything at once. Mark the key nouns first: δικαιοσύνη (righteousness), πίστις (faith), χάρις (grace), ἀπολύτρωσις (redemption).</div>
    <div class="box box-fact"><strong>📜 “As a gift”:</strong> δωρεάν = freely, as a gift. In one word, Paul puts “not earned” on the table.</div>`,

  alphabetIntro: 'Anchor terms for Romans 3:21–26. Learn these and you can follow most sermons and commentaries back into the Greek.',
  alphabetNotes: `<div class="box box-note"><strong>Don’t fear long words:</strong> Greek often builds meaning by adding prefixes/suffixes. Long words are often <em>easier</em> because they are more specific.</div>`,
  alphabet: [
    {ch:'δικαιοσύνη', name:'righteousness',      sound:'di-kai-o-SY-ne', n:1, t:true},
    {ch:'πίστις',     name:'faith',              sound:'PIS-tis',        n:2, t:true},
    {ch:'χάρις',      name:'grace',              sound:'KHA-ris',        n:3, t:true},
    {ch:'δωρεάν',     name:'freely/as a gift',   sound:'do-re-AN',       n:4, t:true},
    {ch:'ἀπολύτρωσις',name:'redemption',         sound:'a-po-LY-tro-sis',n:5, t:true},
    {ch:'αἷμα',       name:'blood',              sound:'hai-ma',         n:6, t:true},
    {ch:'ἱλαστήριον', name:'atoning sacrifice',  sound:'hi-la-STĒ-ri-on',n:7, t:true},
    {ch:'δικαιόω',    name:'justify',            sound:'di-kai-O-o',     n:8, t:true},
  ],

  focusLetters: [
    {ch:'δικαιοσύνη', name:'Righteousness', trans:'righteousness', desc:'Status of rightness before God; “from God” not self-made', ex:'δικαιοσύνη θεοῦ'},
    {ch:'δωρεάν',     name:'Gift word',     trans:'freely',        desc:'“as a gift”—without payment', ex:'δικαιούμενοι δωρεὰν τῇ αὐτοῦ χάριτι'},
    {ch:'χάρις',      name:'Grace',         trans:'grace',         desc:'God’s favor toward the undeserving', ex:'τῇ αὐτοῦ χάριτι'},
    {ch:'ἀπολύτρωσις',name:'Redemption',    trans:'redemption',    desc:'Release by payment; liberation language', ex:'διὰ τῆς ἀπολυτρώσεως'},
    {ch:'πίστις',     name:'Faith',         trans:'faith',         desc:'Trust/faithfulness; the receiving hand, not the earning hand', ex:'διὰ πίστεως Ἰησοῦ Χριστοῦ'},
  ],

  deepDive: `
    <div class="lesson-h3">Romans 3:21–26 (selected lines in Greek)</div>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;padding:1.1rem 1.25rem;margin:1rem 0;">
      <div style="font-family:var(--greek);font-size:1.2rem;color:var(--blue);line-height:2.0;">
        νυνὶ δὲ χωρὶς νόμου δικαιοσύνη θεοῦ πεφανέρωται...<br/>
        δικαιοσύνη δὲ θεοῦ διὰ πίστεως Ἰησοῦ Χριστοῦ...<br/>
        δικαιούμενοι δωρεὰν τῇ αὐτοῦ χάριτι<br/>
        διὰ τῆς ἀπολυτρώσεως τῆς ἐν Χριστῷ Ἰησοῦ...<br/>
        ἐν τῷ αὐτοῦ αἵματι...<br/>
        εἰς ἔνδειξιν τῆς δικαιοσύνης αὐτοῦ...
      </div>
      <div style="margin-top:.55rem;color:var(--text-mid);font-size:.85rem;font-style:italic;">
        Read these lines aloud twice. Then read again and point to each key term.
      </div>
    </div>

    <div class="lesson-h3">One sentence summary</div>
    <p class="lesson-p">Paul’s claim is not “you can become righteous by doing better.” It is: <strong>God’s righteousness has appeared</strong>, and sinners are <strong>justified freely by grace</strong> through <strong>redemption in Christ</strong>.</p>

    <div class="box box-fact"><strong>Passive voice as grace:</strong> δικαιούμενοι (“being justified”) is passive—something done to us, not something we do to ourselves.</div>`,

  writing: [
    {ch:'δικαιούμενοι δωρεὰν τῇ αὐτοῦ χάριτι', name:'Romans 3:24 (core)', steps:['Underline δικαιούμενοι (being justified)','Circle δωρεάν (freely/as gift)','Write it 5 times and translate.']},
    {ch:'δικαιοσύνη θεοῦ', name:'Key phrase', steps:['Write it 15 times','Say: “righteousness of God”','Remember: this is God’s righteousness given/revealed.']},
    {ch:'διὰ πίστεως', name:'Through faith', steps:['Write it 10 times','Say: dia + genitive = “through”','Translate: “through faith.”']},
    {ch:'ἀπολύτρωσις', name:'Redemption', steps:['Write it 20 times','Break it: ἀπό + λύτρον (ransom) + -σις','Say: “release by payment.”']},
    {ch:'χάρις', name:'Grace', steps:['Write it 25 times','Say: “grace”','Remember: gift, not wage.']},
  ],

  vocab: [
    {ch:'νόμος',       trans:'nomos',       meaning:'law',            note:'Paul contrasts “apart from law”'},
    {ch:'δικαιοσύνη',  trans:'dikaiosynē',  meaning:'righteousness',  note:'Central theme here'},
    {ch:'δικαιόω',     trans:'dikaioō',     meaning:'justify',        note:'Declare righteous'},
    {ch:'χάρις',       trans:'charis',      meaning:'grace',          note:'Gift language'},
    {ch:'δωρεάν',      trans:'dōrean',      meaning:'freely',         note:'As a gift'},
    {ch:'πίστις',      trans:'pistis',      meaning:'faith',          note:'Trust/faithfulness'},
    {ch:'ἀπολύτρωσις', trans:'apolytrōsis', meaning:'redemption',     note:'Release by payment'},
  ],

  scriptureRef: 'Romans 3:24',
  scripture: {
    orig:  'δικαιούμενοι δωρεὰν τῇ αὐτοῦ χάριτι διὰ τῆς ἀπολυτρώσεως τῆς ἐν Χριστῷ Ἰησοῦ',
    trans: 'dikaioumenoi dōrean tē autou chariti dia tēs apolytrōseōs tēs en Christō Iēsou',
    eng:   '"...being justified freely by his grace through the redemption that is in Christ Jesus." — Romans 3:24',
  },
  scriptureNote: 'Spot the passive: δικαιούμενοι (being justified). Then spot the gift adverb: δωρεάν (freely).',
  scriptureTip:  '<strong>💡 Read the grammar as theology:</strong> passive + freely + grace = salvation as gift.',

  quiz: [
    {q:'What does δωρεάν mean in Romans 3?', ch:'δωρεάν', opts:['slowly','freely / as a gift','publicly','secretly'], ans:1, ok:'Correct. δωρεάν means “freely / as a gift,” without payment.', no:'δωρεάν means “freely / as a gift.”'},
    {q:'What does the passive participle δικαιούμενοι suggest?', ch:'δικαιούμενοι', opts:['We justify ourselves','Justification is something done to us (gift)', 'Only priests can be justified', 'It is future tense only'], ans:1, ok:'Correct. The passive suggests justification is received—something done to us.', no:'Passive points to something received: justification is done to us.'},
    {q:'Which term means “righteousness”?', ch:'', opts:['πίστις','χάρις','δικαιοσύνη','αἷμα'], ans:2, ok:'Correct. δικαιοσύνη = righteousness.', no:'δικαιοσύνη = righteousness.'},
    {q:'Which term means “grace”?', ch:'', opts:['χάρις','νόμος','φῶς','λόγος'], ans:0, ok:'Correct. χάρις = grace.', no:'χάρις = grace.'},
    {q:'Which term means “redemption”?', ch:'', opts:['ἀρχή','ἀπολύτρωσις','σκοτία','ζωή'], ans:1, ok:'Correct. ἀπολύτρωσις = redemption.', no:'ἀπολύτρωσις = redemption.'},
  ],

  completionNote: 'You can now recognize Romans 3:21–26’s core gospel vocabulary in Greek and read the “gift” grammar: justified freely by grace through redemption in Christ.',
  nextDay: 'Week 6 · Day 1: Hebrew — Niphal Stem →',
};

