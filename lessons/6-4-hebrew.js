/* ═══════════════════════════════════════
   LESSON: Week 6 · Day 4 · Biblical Hebrew XIII
   Piel Stem — Intensive / Factitive Active
   ═══════════════════════════════════════ */

LESSONS['6-4-Hebrew'] = {
  color:    'gold',
  subtitle: 'Week 6 · Day 4 · Biblical Hebrew XIII',
  title:    'The Piel Stem — Intensive Active',
  intro:    'Today you meet the Piel stem. If Niphal often expresses passive voice, Piel often expresses an intensified or “factitive” active idea: “to bless intensely,” “to sanctify,” “to speak repeatedly,” “to strengthen.”',
  sections: ['Introduction','Piel Meaning','Piel Markers','Piel in Scripture','Practice Sentences','Quiz','Complete'],

  beforeYouBegin: `
    <div class="box box-tip"><strong>💡 Big idea:</strong> Stems shift meaning. Qal is basic. Niphal is often passive. Piel is often intensive/factitive. You’re building a mental map of Hebrew verbs.</div>
    <div class="box box-fact"><strong>📜 A famous Piel:</strong> קִדֵּשׁ (qiddesh) — “he sanctified.” The doubled middle consonant (Dagesh) is a hallmark of Piel.</div>`,

  alphabetIntro: 'Piel is often recognized by a “doubled” middle root letter (a dagesh) and characteristic vowels.',
  alphabetNotes: `<div class="box box-note"><strong>Recognition:</strong> In many Piel perfect forms you’ll see a pattern like: קִטֵּל (qiTTēl) — middle consonant doubled. Don’t obsess over every vowel; train your eye for the “tight/doubled” middle letter.</div>`,
  alphabet: [
    {ch:'קִדֵּשׁ',  name:'he sanctified',    sound:'qid-desh',   n:1, t:true},
    {ch:'בֵּרֵךְ',  name:'he blessed',      sound:'be-rekh',    n:2, t:true},
    {ch:'דִּבֵּר',  name:'he spoke',        sound:'dib-ber',    n:3, t:true},
    {ch:'שִׁבֵּר',  name:'he shattered',    sound:'shiv-ber',   n:4, t:true},
    {ch:'חִזֵּק',   name:'he strengthened', sound:'khi-zeq',    n:5, t:true},
    {ch:'לִמֵּד',   name:'he taught',       sound:'li-med',     n:6, t:true},
    {ch:'כִּפֵּר',  name:'he made atonement',sound:'kip-per',    n:7, t:true},
  ],

  focusLetters: [
    {ch:'Piel', name:'Piel sense', trans:'intensive/factitive', desc:'Often stronger or causative-in-effect within active voice', ex:'קִדֵּשׁ — he sanctified (made holy)'},
    {ch:'Dagesh', name:'Doubled middle letter', trans:'visual marker', desc:'Many Piel forms show a doubled middle consonant', ex:'דִּבֵּר (bb) · כִּפֵּר (pp)'},
    {ch:'קִדֵּשׁ', name:'Sanctify', trans:'made holy', desc:'Factitive: “to make X holy”', ex:'וַיְקַדֵּשׁ אֹתוֹ — and he sanctified it'},
    {ch:'בֵּרֵךְ', name:'Bless', trans:'blessed', desc:'Common in covenant language', ex:'God blessed them'},
    {ch:'כִּפֵּר', name:'Atonement', trans:'made atonement', desc:'Cultic/theological term in Torah', ex:'atonement language in Leviticus'},
  ],

  deepDive: `
    <div class="lesson-h3">What Piel often does</div>
    <p class="lesson-p">Piel frequently intensifies or “makes” a quality: Qal may mean “to be holy” (in some roots), while Piel means “to make holy / to sanctify.” With other roots it can be iterative (“to speak repeatedly”) or simply a stronger form.</p>

    <div class="lesson-h3">See it: the doubled middle consonant</div>
    <p class="lesson-p">In many Piel perfect forms, the second root consonant is doubled (dagesh forte). This “tight middle” is one of the fastest ways to recognize Piel on the page.</p>

    <div class="box box-fact"><strong>Why this matters:</strong> Piel verbs are everywhere in worship language: bless, sanctify, teach, strengthen. This stem shows up constantly in Psalms and narratives.</div>`,

  writing: [
    {ch:'קִדֵּשׁ', name:'Qiddesh — he sanctified', steps:['Write it 20 times','Say: “he sanctified / made holy”','Notice the doubled דּ.']},
    {ch:'בֵּרֵךְ', name:'Berekḥ — he blessed', steps:['Write it 20 times','Say: “he blessed”','Link to blessing language.']},
    {ch:'דִּבֵּר', name:'Dibber — he spoke', steps:['Write it 20 times','Say: “he spoke”','Notice the doubled בּ.']},
    {ch:'לִמֵּד', name:'Limmed — he taught', steps:['Write it 20 times','Say: “he taught”','Think: discipleship language.']},
    {ch:'חִזֵּק', name:'Khizeq — he strengthened', steps:['Write it 20 times','Say: “he strengthened”','See the doubled זּ.']},
  ],

  vocab: [
    {ch:'קָדוֹשׁ', trans:'qadosh', meaning:'holy',         note:'Adjective; Piel can “make holy”'},
    {ch:'קִדֵּשׁ', trans:'qiddesh',meaning:'he sanctified',note:'Piel of קדש'},
    {ch:'בָּרַךְ', trans:'barakh', meaning:'to bless',     note:'Piel: בֵּרֵךְ'},
    {ch:'בֵּרֵךְ', trans:'berekh', meaning:'he blessed',   note:'Piel of ברך'},
    {ch:'לִמֵּד',  trans:'limmed', meaning:'he taught',    note:'Piel teaching verb'},
    {ch:'כִּפֵּר', trans:'kipper', meaning:'he made atonement', note:'Cultic term'},
    {ch:'חִזֵּק',  trans:'khizeq', meaning:'he strengthened', note:'Strengthening verb'},
  ],

  scriptureRef: 'Genesis 2:3',
  scripture: {
    orig:  'וַיְבָרֶךְ אֱלֹהִים אֶת־יוֹם הַשְּׁבִיעִי וַיְקַדֵּשׁ אֹתוֹ',
    trans: 'vayvarekh Elohim et-yom hashvi‘i vayqaddesh oto',
    eng:   '"And God blessed the seventh day and sanctified it." — Genesis 2:3',
  },
  scriptureNote: 'Identify the two strong verbs: “blessed” and “sanctified.” These are classic Piel-type worship actions in Hebrew narrative.',
  scriptureTip:  '<strong>💡 Recognition win:</strong> When you spot a doubled middle consonant, ask: “Is this Piel?” That question will unlock many verbs quickly.',

  quiz: [
    {q:'What is the Piel stem often used to express?', ch:'', opts:['Passive voice only','Intensive or factitive active meaning','Only future tense','Only noun formation'], ans:1, ok:'Correct. Piel often expresses intensive/factitive active meaning.', no:'Piel often expresses intensive/factitive active meaning.'},
    {q:'What is a common visual marker of Piel in many perfect forms?', ch:'', opts:['A leading נִ-','A doubled middle consonant (dagesh)', 'A final -ος', 'A prefixed הַ- article'], ans:1, ok:'Correct. Many Piel perfect forms show a doubled middle consonant.', no:'A common marker is the doubled middle consonant (dagesh).'},
    {q:'What does קִדֵּשׁ mean?', ch:'קִדֵּשׁ', opts:['he was holy','he sanctified / made holy','holy place','he will sanctify'], ans:1, ok:'Correct. קִדֵּשׁ = he sanctified / made holy.', no:'קִדֵּשׁ means “he sanctified / made holy.”'},
    {q:'Which Piel verb means “he blessed”?', ch:'', opts:['בֵּרֵךְ','נִבְרַךְ','בָּרָא','אֶחְסָר'], ans:0, ok:'Correct. בֵּרֵךְ is “he blessed” (Piel).', no:'בֵּרֵךְ is “he blessed.”'},
    {q:'Why does learning stems matter for reading?', ch:'', opts:['It only changes spelling, not meaning','The stem changes meaning/voice even with the same root','It only applies to nouns','It replaces the need for vocabulary'], ans:1, ok:'Correct. Stems change meaning/voice even with the same root.', no:'Stems change meaning/voice even with the same root.'},
  ],

  completionNote: 'You can now recognize the Piel stem’s basic “intensive/factitive” idea and identify common Piel verbs like “sanctify” and “bless.” This will strengthen your Hebrew reading across narratives and Psalms.',
  nextDay: 'Day 5: Greek — Participles →',
};

