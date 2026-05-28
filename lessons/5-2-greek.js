/* ═══════════════════════════════════════
   LESSON: Week 5 · Day 2 · Koine Greek VIII
   John 1:1–5 — Word by Word
   ═══════════════════════════════════════ */

LESSONS['5-2-Greek'] = {
  color:    'blue',
  subtitle: 'Week 5 · Day 2 · Koine Greek VIII',
  title:    'John 1:1–5 — Word by Word',
  intro:    'Today you read John 1:1–5 in Greek. You will track the difference between “was” (ἦν) and “came to be” (ἐγένετο), and you will see how John’s verb choices carry theology: the Word is eternal; creation begins.',
  sections: ['Introduction','The Passage','Key Verbs','Key Words','Reading Practice','Quiz','Complete'],

  beforeYouBegin: `
    <div class="box box-tip"><strong>💡 Strategy:</strong> Read aloud first without stopping. Second pass: underline every ἦν and circle every ἐγένετο. Third pass: mark articles (ὁ/ἡ/τό) and prepositions (ἐν/πρός/δι’).</div>
    <div class="box box-fact"><strong>📜 John’s contrast:</strong> ἦν = continuous existence · ἐγένετο = came into being (began). This is one of the clearest grammar-driven arguments for the Word’s eternality in the New Testament.</div>`,

  alphabetIntro: 'Your anchors today are the two verbs (ἦν vs ἐγένετο) and three nouns (λόγος, ζωή, φῶς).',
  alphabetNotes: `<div class="box box-note"><strong>Pronunciation:</strong> Don’t aim for perfection. Aim for consistency. If you can read the line the same way every time, you’re building fluency.</div>`,
  alphabet: [
    {ch:'Ἐν',        name:'in',              sound:'en',          n:1, t:true},
    {ch:'ἀρχῇ',      name:'beginning',       sound:'ar-che',      n:2, t:true},
    {ch:'ἦν',        name:'was',             sound:'en',          n:3, t:true},
    {ch:'λόγος',     name:'Word',            sound:'lo-gos',      n:4, t:true},
    {ch:'ἐγένετο',   name:'came to be',      sound:'e-ge-ne-to',  n:5, t:true},
    {ch:'ζωή',       name:'life',            sound:'zo-e',        n:6, t:true},
    {ch:'φῶς',       name:'light',           sound:'phos',        n:7, t:true},
    {ch:'σκοτία',    name:'darkness',        sound:'sko-ti-a',    n:8, t:true},
    {ch:'φαίνει',    name:'shines',          sound:'fai-nei',     n:9, t:true},
    {ch:'κατέλαβεν', name:'overcame/grasped',sound:'ka-te-la-ben', n:10, t:true},
  ],

  focusLetters: [
    {ch:'ἦν',      name:'“Was” (imperfect)',  trans:'was',         desc:'Continuous past existence: “already was”', ex:'ἐν ἀρχῇ ἦν ὁ λόγος'},
    {ch:'ἐγένετο', name:'“Came to be”',       trans:'came to be',  desc:'Beginning/existence event: “came into being”', ex:'πάντα δι’ αὐτοῦ ἐγένετο'},
    {ch:'λόγος',   name:'Logos',             trans:'Word',        desc:'The personal Word; God’s self-expression', ex:'καὶ θεὸς ἦν ὁ λόγος'},
    {ch:'ζωή',     name:'Life',              trans:'life',        desc:'Life that originates in him', ex:'ἐν αὐτῷ ζωὴ ἦν'},
    {ch:'φῶς',     name:'Light',             trans:'light',       desc:'Life becomes light for humanity', ex:'ἡ ζωὴ ἦν τὸ φῶς τῶν ἀνθρώπων'},
  ],

  deepDive: `
    <div class="lesson-h3">The Passage (John 1:1–5)</div>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;padding:1.1rem 1.25rem;margin:1rem 0;">
      <div style="font-family:var(--greek);font-size:1.25rem;color:var(--blue);line-height:2.05;">
        Ἐν ἀρχῇ ἦν ὁ λόγος,<br/>
        καὶ ὁ λόγος ἦν πρὸς τὸν θεόν,<br/>
        καὶ θεὸς ἦν ὁ λόγος.<br/><br/>
        πάντα δι’ αὐτοῦ ἐγένετο...<br/><br/>
        ἐν αὐτῷ ζωὴ ἦν,<br/>
        καὶ ἡ ζωὴ ἦν τὸ φῶς τῶν ἀνθρώπων.<br/>
        καὶ τὸ φῶς ἐν τῇ σκοτίᾳ φαίνει,<br/>
        καὶ ἡ σκοτία αὐτὸ οὐ κατέλαβεν.
      </div>
      <div style="margin-top:.55rem;color:var(--text-mid);font-size:.85rem;font-style:italic;">
        Don’t rush. Read the commas and line breaks as breathing points.
      </div>
    </div>

    <div class="lesson-h3">ἦν vs ἐγένετο</div>
    <p class="lesson-p">John repeatedly uses <strong>ἦν</strong> for the Word and <strong>ἐγένετο</strong> for creation. The Word <em>was</em>. Everything else <em>came to be</em>. This is grammar doing theology.</p>

    <div class="box box-fact"><strong>The light in the darkness:</strong> φαίνει (shines) is present tense—ongoing action. The light keeps shining. The darkness “did not κατέλαβεν” (either “overcome” or “grasp/understand”) it.</div>`,

  writing: [
    {ch:'Ἐν ἀρχῇ ἦν ὁ λόγος', name:'John 1:1a', steps:['Underline ἦν','Circle λόγος','Read aloud 10 times, slowly and clearly.']},
    {ch:'καὶ θεὸς ἦν ὁ λόγος', name:'John 1:1c', steps:['Notice: θεός has no article; ὁ λόγος has the article','Read aloud 10 times','Say: “The Word was God” (qualitative: fully divine).']},
    {ch:'πάντα δι’ αὐτοῦ ἐγένετο', name:'John 1:3a', steps:['Circle ἐγένετο','Mark δι’ (διά) = “through”','Translate: “All things came to be through him.”']},
    {ch:'ἐν αὐτῷ ζωὴ ἦν', name:'John 1:4a', steps:['Find the preposition: ἐν','Underline ἦν','Translate: “In him was life.”']},
    {ch:'τὸ φῶς ... φαίνει', name:'John 1:5', steps:['Circle φῶς','Underline φαίνει (present: keeps shining)','Read aloud 5 times with confidence.']},
  ],

  vocab: [
    {ch:'ἀρχή',     trans:'archē',     meaning:'beginning',            note:'Dative: ἀρχῇ after ἐν'},
    {ch:'λόγος',    trans:'logos',     meaning:'word',                 note:'Subject of John 1:1'},
    {ch:'θεός',     trans:'theos',     meaning:'God',                  note:'Predicate in “the Word was God”'},
    {ch:'γίνομαι',  trans:'ginomai',   meaning:'become / come to be',   note:'Aorist: ἐγένετο'},
    {ch:'ζωή',      trans:'zōē',       meaning:'life',                 note:'Life that becomes light'},
    {ch:'φῶς',      trans:'phōs',      meaning:'light',                note:'Creation theme'},
    {ch:'σκοτία',   trans:'skotia',    meaning:'darkness',             note:'Opposition / ignorance'},
  ],

  scriptureRef: 'John 1:1',
  scripture: {
    orig:  'Ἐν ἀρχῇ ἦν ὁ λόγος... καὶ θεὸς ἦν ὁ λόγος.',
    trans: 'En archē ēn ho logos... kai theos ēn ho logos.',
    eng:   '"In the beginning was the Word... and the Word was God." — John 1:1',
  },
  scriptureNote: 'Mark every ἦν. Mark every ἐγένετο. Ask: who “was,” and what “came to be”?',
  scriptureTip:  '<strong>💡 Takeaway:</strong> When you see ἦν vs ἐγένετο, you are watching theology happen at the level of verb choice.',

  quiz: [
    {q:'What is the key contrast John makes with ἦν vs ἐγένετο?', ch:'', opts:['Both mean the same thing','ἦν = continuous existence; ἐγένετο = came into being (began)', 'ἦν = future; ἐγένετο = present', 'ἦν = passive; ἐγένετο = active'], ans:1, ok:'Correct. ἦν (was) describes ongoing existence; ἐγένετο (came to be) describes something beginning/existing.', no:'ἦν = continuous existence; ἐγένετο = came into being (began).'},
    {q:'Which word in John 1:1 names the subject “the Word”?', ch:'', opts:['φῶς','λόγος','ζωή','σκοτία'], ans:1, ok:'Correct. λόγος means “Word.”', no:'λόγος means “Word.”'},
    {q:'In “καὶ θεὸς ἦν ὁ λόγος,” why is θεός commonly read as qualitative?', ch:'καὶ θεὸς ἦν ὁ λόγος', opts:['Because θεός has the article','Because ὁ λόγος has the article identifying the subject, while θεός without article describes nature', 'Because Greek has no articles', 'Because John was quoting the Psalms'], ans:1, ok:'Correct. The article on ὁ λόγος marks the subject; θεός without article commonly functions to describe quality/nature.', no:'ὁ λόγος is marked as subject; θεός without article describes quality/nature.'},
    {q:'What tense is φαίνει (“shines”) in John 1:5?', ch:'φαίνει', opts:['Present','Future','Aorist','Perfect'], ans:0, ok:'Correct. φαίνει is present—“keeps shining.”', no:'φαίνει is present tense—“keeps shining.”'},
    {q:'What are the three big nouns in John 1:4–5?', ch:'', opts:['λόγος, νόμος, χάρις','ζωή, φῶς, σκοτία','ἀρχή, γῆ, οὐρανός','βίος, ἀγάπη, πίστις'], ans:1, ok:'Correct. The core set is ζωή (life), φῶς (light), σκοτία (darkness).', no:'The core set is ζωή (life), φῶς (light), σκοτία (darkness).'},
  ],

  completionNote: 'You have read John 1:1–5 in Greek and learned to watch John’s theology at the level of verb choice: the Word “was,” creation “came to be,” and the light keeps shining.',
  nextDay: 'Day 3: Latin — The Lord’s Prayer →',
};

