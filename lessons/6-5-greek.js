/* ═══════════════════════════════════════
   LESSON: Week 6 · Day 5 · Koine Greek XI
   Participles — Introduction
   ═══════════════════════════════════════ */

LESSONS['6-5-Greek'] = {
  color:    'blue',
  subtitle: 'Week 6 · Day 5 · Koine Greek XI',
  title:    'Participles — Introduction',
  intro:    'Today you meet Greek participles. A participle is a “verbal adjective”: it is built from a verb but behaves like an adjective. This is one of the most important skills for reading Greek sentences because participles are everywhere.',
  sections: ['Introduction','What Is a Participle?','Present Participle','Aorist Participle','Reading Practice','Quiz','Complete'],

  beforeYouBegin: `
    <div class="box box-tip"><strong>💡 Think: -ing / having ...-ed</strong> In English, participles often show up as “walking,” “speaking,” “having seen.” Greek uses them even more.</div>
    <div class="box box-fact"><strong>📜 Why they matter:</strong> Participles often carry background action, cause, time, or manner. Learning them turns long Greek sentences into readable pieces.</div>`,

  alphabetIntro: 'Start small: learn the most common forms—present active participle endings like -ων (masc. nom. sg.) and -ουσα (fem.).',
  alphabetNotes: `<div class="box box-note"><strong>Don’t memorize every chart today.</strong> Learn what a participle IS and how to spot the most common “-ων / -ουσα / -ον” set.</div>`,
  alphabet: [
    {ch:'λύων',   name:'loosing (m.)',      sound:'LY-on',     n:1, t:true},
    {ch:'λύουσα', name:'loosing (f.)',      sound:'LY-oo-sa',  n:2, t:true},
    {ch:'λῦον',   name:'loosing (n.)',      sound:'LY-on',     n:3, t:true},
    {ch:'λέγων',  name:'saying (m.)',       sound:'LE-gon',    n:4, t:true},
    {ch:'πιστεύων',name:'believing (m.)',   sound:'pis-TYOO-on',n:5,t:true},
    {ch:'γενόμενος',name:'having become (m.)',sound:'ge-NO-me-nos',n:6,t:true},
    {ch:'ἔχων',   name:'having (m.)',       sound:'E-khon',    n:7, t:true},
    {ch:'ὁ ἐρχόμενος',name:'the coming one',sound:'ho er-KHO-me-nos',n:8,t:true},
  ],

  focusLetters: [
    {ch:'Participle', name:'Verbal adjective', trans:'verb + adjective', desc:'Takes tense/aspect from verb, agrees like adjective', ex:'ὁ λέγων — the one who says'},
    {ch:'Present', name:'Present participle', trans:'-ing', desc:'Ongoing action (same time as main verb)', ex:'λέγων — saying'},
    {ch:'Aorist', name:'Aorist participle', trans:'having ...-ed', desc:'Action prior to main verb (often)', ex:'γενόμενος — having become'},
    {ch:'Agreement', name:'Agreement', trans:'gender/number/case', desc:'Participles agree with the noun they modify', ex:'ὁ πιστεύων (masc.) · ἡ πιστεύουσα (fem.)'},
    {ch:'Article', name:'Articular participle', trans:'“the one who...”', desc:'Article + participle functions like a noun', ex:'ὁ ἐρχόμενος — the coming one'},
  ],

  deepDive: `
    <div class="lesson-h3">What is a participle?</div>
    <p class="lesson-p">A participle is a verb form that functions like an adjective. It can describe a noun (“the believing person”), or it can attach to the main verb and provide background (“while saying..., he went”).</p>

    <div class="lesson-h3">Two core participles to recognize</div>
    <p class="lesson-p"><strong>Present:</strong> λέγων = saying (ongoing)</p>
    <p class="lesson-p"><strong>Aorist:</strong> γενόμενος = having become (completed / prior)</p>

    <div class="box box-fact"><strong>Articular participle:</strong> ὁ πιστεύων = “the one who believes.” This construction is extremely common in John’s Gospel.</div>`,

  writing: [
    {ch:'ὁ πιστεύων', name:'The one who believes', steps:['Write it 20 times','Translate: “the believing one / the one who believes”','Notice: article + participle.']},
    {ch:'λέγων', name:'Saying', steps:['Write it 25 times','Translate: “saying”','Remember: present participle.']},
    {ch:'γενόμενος', name:'Having become', steps:['Write it 25 times','Translate: “having become”','Remember: aorist participle (often prior action).']},
    {ch:'λύων λύουσα λῦον', name:'Gender set', steps:['Write the trio 10 times','Say: masc/fem/neut','Remember agreement.']},
    {ch:'ὁ ἐρχόμενος', name:'The coming one', steps:['Write it 20 times','Translate: “the coming one”','A title used for the Messiah.']},
  ],

  vocab: [
    {ch:'λέγω',     trans:'legō',      meaning:'I say',          note:'Participle: λέγων'},
    {ch:'πιστεύω',  trans:'pisteuō',   meaning:'I believe',      note:'Participle: πιστεύων'},
    {ch:'γίνομαι',  trans:'ginomai',   meaning:'I become',       note:'Aorist participle: γενόμενος'},
    {ch:'ἔρχομαι',  trans:'erchomai',  meaning:'I come/go',      note:'Participle: ἐρχόμενος'},
    {ch:'ἔχω',      trans:'echō',      meaning:'I have',         note:'Participle: ἔχων'},
    {ch:'ὁ',        trans:'ho',        meaning:'the (masc. nom.)',note:'Article used with participles'},
    {ch:'ἡ',        trans:'hē',        meaning:'the (fem. nom.)', note:'Agreement marker'},
  ],

  scriptureRef: 'John (common construction)',
  scripture: {
    orig:  'ὁ πιστεύων',
    trans: 'ho pisteuōn',
    eng:   '"The one who believes..." — (frequent in John)',
  },
  scriptureNote: 'Articular participles are a key reading skill: article + participle functions like a noun phrase.',
  scriptureTip:  '<strong>💡 Reading win:</strong> When you see ὁ/ἡ/τό + participle, translate “the one who...” and the sentence often becomes instantly clear.',

  quiz: [
    {q:'What is a participle in Greek?', ch:'', opts:['A noun that never changes','A verbal adjective (verb form acting like an adjective)', 'A preposition', 'A punctuation mark'], ans:1, ok:'Correct. A participle is a verbal adjective: built from a verb, behaves like an adjective.', no:'A participle is a verbal adjective: built from a verb, behaves like an adjective.'},
    {q:'What does an articular participle like ὁ πιστεύων often mean?', ch:'ὁ πιστεύων', opts:['the belief','the one who believes','he believed once','believe!'], ans:1, ok:'Correct. ὁ + participle often means “the one who ...”.', no:'ὁ + participle often means “the one who ...”.'},
    {q:'What does a present participle generally convey?', ch:'', opts:['Ongoing action (often same time as main verb)','Only future action','Only completed past action','No action at all'], ans:0, ok:'Correct. Present participle often conveys ongoing action.', no:'Present participle often conveys ongoing action.'},
    {q:'What does an aorist participle often convey relative to the main verb?', ch:'', opts:['Action prior to the main verb (often)','Action that never happened','Always simultaneous action','Only future action'], ans:0, ok:'Correct. Aorist participle often indicates prior/completed action relative to the main verb.', no:'Aorist participle often indicates prior/completed action relative to the main verb.'},
    {q:'What must a participle agree with?', ch:'', opts:['Only the dictionary','The noun it modifies in gender/number/case','Only the subject in person/number','Nothing; it is invariant'], ans:1, ok:'Correct. Participles agree with the noun they modify in gender/number/case.', no:'Participles agree with the noun they modify in gender/number/case.'},
  ],

  completionNote: 'You can now identify what participles are, spot the common present participle endings, and translate articular participles (“the one who...”). This is a major step toward reading real Greek sentences.',
  nextDay: 'Week 7 · Day 1: Hebrew Pronouns →',
};

