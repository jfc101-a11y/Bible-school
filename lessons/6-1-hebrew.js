/* ═══════════════════════════════════════
   LESSON: Week 6 · Day 1 · Biblical Hebrew XII
   Niphal Stem — Passive / Middle Voice
   ═══════════════════════════════════════ */

LESSONS['6-1-Hebrew'] = {
  color:    'gold',
  subtitle: 'Week 6 · Day 1 · Biblical Hebrew XII',
  title:    'The Niphal Stem — Passive Voice',
  intro:    'Today you meet the Niphal stem—the most common passive (and sometimes “middle”) stem in biblical Hebrew. You will learn to recognize Niphal markers and to translate the basic sense: “was/has been [verb]-ed.”',
  sections: ['Introduction','What Is a Stem?','Niphal Markers','Niphal in Scripture','Practice Sentences','Quiz','Complete'],

  beforeYouBegin: `
    <div class="box box-tip"><strong>💡 Big idea:</strong> In Hebrew, stems are built into the verb. One root can express active, passive, intensive, and causative meanings by stem changes.</div>
    <div class="box box-fact"><strong>📜 Why passive matters:</strong> Many key theological statements use passive or “divine passive” language: “it was revealed,” “it was written,” “it was given.” Learning Niphal makes whole passages readable.</div>`,

  alphabetIntro: 'Niphal recognition is mostly pattern recognition: a Nun (נ) prefix or a נִ... pattern with characteristic vowels.',
  alphabetNotes: `<div class="box box-note"><strong>Two easy identifiers:</strong> (1) Many Niphal Perfect forms start with נִ- (ni-). (2) Many Niphal Imperfect forms show a נ at the start or after the prefix in common paradigms. Learn the “look.”</div>`,
  alphabet: [
    {ch:'נִקְטַל',   name:'Niphal perfect (model)',    sound:'niq-tal',   n:1, t:true},
    {ch:'יִקָּטֵל',  name:'Niphal imperfect (model)',  sound:'yiq-qa-tel', n:2, t:true},
    {ch:'נִשְׁמַר',  name:'was kept/guarded',          sound:'nish-mar',  n:3, t:true},
    {ch:'נִפְתַּח',  name:'was opened',                sound:'nif-takh',  n:4, t:true},
    {ch:'נִלְמַד',   name:'was learned',               sound:'nil-mad',   n:5, t:true},
    {ch:'נִגְלָה',   name:'was revealed',              sound:'nig-lah',   n:6, t:true},
    {ch:'נִכְתַּב',  name:'was written',               sound:'nik-tav',   n:7, t:true},
    {ch:'נִשְׁלַח',  name:'was sent',                  sound:'nish-lakh', n:8, t:true},
  ],

  focusLetters: [
    {ch:'נִ-', name:'Nun prefix', trans:'Niphal marker', desc:'Many Niphal Perfect forms begin with נִ-', ex:'נִכְתַּב — it was written'},
    {ch:'Passive', name:'Passive sense', trans:'was [verb]-ed', desc:'Translate Niphal as passive by default', ex:'נִפְתַּח — was opened'},
    {ch:'Middle', name:'Middle/reflexive', trans:'got [verb]-ed', desc:'Sometimes Niphal is “became/entered a state”', ex:'“he became strong” type senses'},
    {ch:'Root', name:'Same root, different stem', trans:'meaning shifts by stem', desc:'Stems change voice/nuance while keeping the root idea', ex:'כתב (write): Qal wrote · Niphal was written'},
    {ch:'Context', name:'Context decides', trans:'best translation', desc:'Niphal can be passive or middle; context determines', ex:'look for an agent or the lack of one'},
  ],

  deepDive: `
    <div class="lesson-h3">What is a “stem” (בִּנְיָן)?</div>
    <p class="lesson-p">Hebrew verbs are built from roots (usually 3 consonants). The <strong>stem</strong> (binyan) is a pattern that wraps the root and adds meaning—often voice. Today’s stem is <strong>Niphal</strong>, the common passive/middle partner of Qal.</p>

    <div class="lesson-h3">Two model patterns</div>
    <p class="lesson-p"><strong>Niphal Perfect (model):</strong> נִקְטַל (niqtal) — “was killed”</p>
    <p class="lesson-p"><strong>Niphal Imperfect (model):</strong> יִקָּטֵל (yiqqatel) — “will be killed / is being killed”</p>

    <div class="lesson-h3">A biblical example you’ll see constantly</div>
    <div class="box box-fact"><strong>נִכְתַּב — “it was written”</strong>: This passive idea shows up again and again in Scripture quotations and legal language. Even when you cannot parse every vowel, the נִ- beginning is a huge clue.</div>`,

  writing: [
    {ch:'נִכְתַּב', name:'Nikhtav — it was written', steps:['Write it 20 times','Say: “it was written”','Remember: כתב root + Niphal passive.']},
    {ch:'נִפְתַּח', name:'Niftach — it was opened', steps:['Write it 15 times','Say: “it was opened”','Notice the pattern: נִ + root.']},
    {ch:'נִגְלָה', name:'Niglah — it was revealed', steps:['Write it 15 times','Say: “it was revealed”','Connect to revelation language.']},
    {ch:'נִשְׁמַר', name:'Nishmar — it was kept', steps:['Write it 15 times','Say: “it was kept/guarded”','Link to covenant keeping.']},
    {ch:'נִלְמַד', name:'Nilmad — it was learned', steps:['Write it 15 times','Say: “it was learned”','Passive can describe gaining a state.']},
  ],

  vocab: [
    {ch:'בִּנְיָן', trans:'binyan', meaning:'verb stem/pattern', note:'System of verbal patterns'},
    {ch:'נִכְתַּב', trans:'nikhtav', meaning:'it was written',   note:'Niphal of כתב'},
    {ch:'נִגְלָה',  trans:'niglah',  meaning:'it was revealed',  note:'Revelation language'},
    {ch:'נִפְתַּח', trans:'niftach', meaning:'it was opened',    note:'Passive of פתח'},
    {ch:'נִשְׁמַר', trans:'nishmar', meaning:'it was kept',      note:'Passive of שמר'},
    {ch:'נֶאֱמַר',  trans:'ne’emar', meaning:'it was said',      note:'Common passive reporting formula'},
    {ch:'נִבְחַר',  trans:'nibkhar', meaning:'was chosen',       note:'Election/choice language'},
  ],

  scriptureRef: 'Genesis 2:3 (concept)',
  scripture: {
    orig:  'וַיְקַדֵּשׁ אֹתוֹ',
    trans: 'vayqaddesh oto',
    eng:   '"And he sanctified it." — Genesis 2:3',
  },
  scriptureNote: 'Today is about recognizing the Niphal patterns. In future weeks you will begin seeing passive forms across narrative and poetry.',
  scriptureTip:  '<strong>💡 Progress marker:</strong> When you can glance at a word beginning with נִ- and ask “is this Niphal passive?”, you are reading like a real Hebrew student.',

  quiz: [
    {q:'What is the Niphal stem most commonly used for?', ch:'', opts:['Intensive active meaning','Passive (and sometimes middle/reflexive) meaning','Only future tense verbs','Only nouns'], ans:1, ok:'Correct. Niphal is most commonly passive, sometimes middle/reflexive.', no:'Niphal is most commonly passive, sometimes middle/reflexive.'},
    {q:'What is a common visual marker of Niphal Perfect forms?', ch:'', opts:['They begin with מְ-','They begin with נִ-','They end with -ος','They always have a vav at the start'], ans:1, ok:'Correct. Many Niphal Perfect forms begin with נִ-.', no:'A common marker is נִ- at the beginning (many Niphal Perfects).'},
    {q:'How should you translate Niphal by default when first learning it?', ch:'', opts:['As active voice (“he did”)','As passive voice (“was done”)','As a command (“do!”)','As a question'], ans:1, ok:'Correct. Start with passive (“was [verb]-ed”) unless context suggests middle.', no:'Translate Niphal as passive by default (“was [verb]-ed”).'},
    {q:'What does נִכְתַּב mean?', ch:'נִכְתַּב', opts:['he wrote','it was written','write!','writing'], ans:1, ok:'Correct. נִכְתַּב = “it was written.”', no:'נִכְתַּב means “it was written.”'},
    {q:'What determines whether a Niphal should be translated passive or middle?', ch:'', opts:['The day of the week','Context (is there an agent? what is the sense?)','The font used','It is always passive with no exceptions'], ans:1, ok:'Correct. Context decides passive vs middle nuance.', no:'Context decides passive vs middle nuance.'},
  ],

  completionNote: 'You can now recognize the Niphal stem and translate its basic passive sense. This single pattern will unlock countless “was [verb]-ed” statements throughout the Hebrew Bible.',
  nextDay: 'Day 2: Greek — The Aorist Tense →',
};

