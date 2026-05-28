/* ═══════════════════════════════════════
   LESSON: Week 6 · Day 2 · Koine Greek X
   The Aorist Tense — Simple Past
   ═══════════════════════════════════════ */

LESSONS['6-2-Greek'] = {
  color:    'blue',
  subtitle: 'Week 6 · Day 2 · Koine Greek X',
  title:    'The Greek Aorist — Simple Past',
  intro:    'Today you meet the aorist—the most common past tense in the New Testament. You will learn the basic idea (“simple completed action”), the most common marker (the augment ἐ-), and a set of endings you can recognize.',
  sections: ['Introduction','What Aorist Means','The Augment','Aorist Endings','Reading Practice','Quiz','Complete'],

  beforeYouBegin: `
    <div class="box box-tip"><strong>💡 Two sentences:</strong> Present tells you what is happening (λύει = he looses). Aorist tells you what happened (ἔλυσε = he loosed).</div>
    <div class="box box-fact"><strong>📜 Why it matters:</strong> The Gospels and Acts are narrative. Narrative is built on aorists. Once you can spot an augment and an -σ- aorist, whole paragraphs become readable.</div>`,

  alphabetIntro: 'The simplest aorist to learn is the “first aorist” with -σ- (λύω → ἔλυσα).',
  alphabetNotes: `<div class="box box-note"><strong>Recognition rule:</strong> Many aorists show (1) an augment ἐ- at the front and (2) an -σ- tense marker before endings.</div>`,
  alphabet: [
    {ch:'ἔλυσα',   name:'I loosed',        sound:'E-ly-sa',     n:1, t:true},
    {ch:'ἔλυσας',  name:'you loosed',      sound:'E-ly-sas',    n:2, t:true},
    {ch:'ἔλυσε(ν)',name:'he/she loosed',   sound:'E-ly-se',     n:3, t:true},
    {ch:'ἐλύσαμεν',name:'we loosed',       sound:'e-ly-SA-men', n:4, t:true},
    {ch:'ἐλύσατε', name:'you all loosed',  sound:'e-ly-SA-te',  n:5, t:true},
    {ch:'ἔλυσαν',  name:'they loosed',     sound:'E-ly-san',    n:6, t:true},
    {ch:'ἐγένετο', name:'it happened / became', sound:'e-GE-ne-to', n:7, t:true},
    {ch:'ἔδωκεν',  name:'he gave',         sound:'E-do-ken',    n:8, t:true},
    {ch:'ἠγάπησεν',name:'he loved',        sound:'e-GA-pe-sen', n:9, t:true},
  ],

  focusLetters: [
    {ch:'Aorist', name:'Aorist idea', trans:'simple completed action', desc:'Often best translated as simple past', ex:'ἔγραψεν — he wrote'},
    {ch:'ἐ-',     name:'Augment',     trans:'past marker',             desc:'Often appears at the start in indicative past tenses', ex:'ἔλυσε(ν)'},
    {ch:'-σ-',    name:'Sigma aorist',trans:'tense marker',            desc:'Common “first aorist” marker before endings', ex:'ἔλυσα'},
    {ch:'Irregular', name:'Second aorists', trans:'no -σ-',           desc:'Some aorists don’t use -σ- and must be learned', ex:'ἔλαβον — I took'},
    {ch:'Narrative', name:'Narrative engine', trans:'story past',      desc:'Gospels/Acts frequently chain aorists', ex:'καὶ εἶπεν... καὶ ἐποίησεν...'},
  ],

  deepDive: `
    <div class="lesson-h3">What “aorist” means</div>
    <p class="lesson-p">The aorist is often described as “punctiliar” or “summary” aspect: it presents an action as a whole—completed—without focusing on its internal progress. In narrative, it is the default “what happened next?” tense.</p>

    <div class="lesson-h3">The first aorist active endings (recognize them)</div>
    <div class="box box-note">
      <div style="font-family:var(--greek);font-size:1.2rem;color:var(--blue);line-height:2.0;">
        -σα, -σας, -σε(ν), -σαμεν, -σατε, -σαν
      </div>
      <div style="color:var(--text-mid);font-size:.85rem;margin-top:.4rem;">
        If you can spot -σα / -σεν endings, you can spot dozens of verbs in the Gospels instantly.
      </div>
    </div>

    <div class="box box-fact"><strong>John 3:16 preview:</strong> ἠγάπησεν (he loved) · ἔδωκεν (he gave). Both are aorists—completed actions anchoring the gospel announcement.</div>`,

  writing: [
    {ch:'ἔλυσα ἔλυσας ἔλυσε(ν)', name:'Singular forms', steps:['Write the three forms 5 times','Say: I/you/he loosed','Notice augment ἔ-.']},
    {ch:'ἐλύσαμεν ἐλύσατε ἔλυσαν', name:'Plural forms', steps:['Write the three forms 5 times','Say: we/you all/they loosed','Notice -σα- pattern.']},
    {ch:'ἠγάπησεν', name:'He loved (John 3:16)', steps:['Write it 20 times','Circle -σεν','Say: “he loved.”']},
    {ch:'ἔδωκεν', name:'He gave (John 3:16)', steps:['Write it 20 times','Note: no -σ- here (irregular/2nd aorist)','Say: “he gave.”']},
    {ch:'ἐγένετο', name:'It came to be (John 1)', steps:['Write it 20 times','Link to Week 5: contrast with ἦν','Say: “it came to be.”']},
  ],

  vocab: [
    {ch:'λύω',    trans:'lyō',    meaning:'I loose/release', note:'Model verb'},
    {ch:'ἀγαπάω', trans:'agapaō', meaning:'I love',          note:'Aorist: ἠγάπησα/ἠγάπησεν'},
    {ch:'δίδωμι', trans:'didōmi', meaning:'I give',          note:'Aorist: ἔδωκα/ἔδωκεν'},
    {ch:'γίνομαι',trans:'ginomai',meaning:'I become',        note:'Aorist: ἐγένετο'},
    {ch:'γράφω',  trans:'graphō', meaning:'I write',         note:'Common aorist patterns'},
    {ch:'λαμβάνω',trans:'lambanō',meaning:'I take/receive',  note:'2nd aorist: ἔλαβον'},
    {ch:'λέγω',   trans:'legō',   meaning:'I say',           note:'Very common in narrative'},
  ],

  scriptureRef: 'John 3:16 (verbs)',
  scripture: {
    orig:  'οὕτως γὰρ ἠγάπησεν ... ἔδωκεν',
    trans: 'houtōs gar ēgapēsen ... edōken',
    eng:   '"For God so loved... that he gave..." — John 3:16',
  },
  scriptureNote: 'Identify the aorist verbs ἠγάπησεν and ἔδωκεν. The gospel is proclaimed with past-tense completed actions.',
  scriptureTip:  '<strong>💡 Skill:</strong> Train your eye: augment + -σ- endings = likely aorist. Spotting verbs is half of reading.',

  quiz: [
    {q:'What is the basic idea of the aorist in narrative?', ch:'', opts:['Ongoing action','Completed action viewed as a whole','Future possibility','Command'], ans:1, ok:'Correct. The aorist presents an action as completed/whole—often translated as simple past.', no:'Aorist = completed action viewed as a whole (often simple past).'},
    {q:'What is the “augment” in many aorist indicative forms?', ch:'', opts:['A suffix -ν','A prefix ἐ- indicating past','A middle voice marker','A punctuation mark'], ans:1, ok:'Correct. Many past indicative forms show an augment ἐ- at the front.', no:'The augment is often ἐ- at the start (past indicative marker).'},
    {q:'Which marker often indicates a first aorist?', ch:'', opts:['-σ-','-ομεν','-ει','-ουσι'], ans:0, ok:'Correct. The first aorist often uses -σ- before endings.', no:'First aorist often uses -σ-.'},
    {q:'Which word means “it came to be” (aorist) in John 1?', ch:'', opts:['ἦν','ἐγένετο','φῶς','λόγος'], ans:1, ok:'Correct. ἐγένετο = came to be/became.', no:'ἐγένετο means “came to be/became.”'},
    {q:'What is a common sign of a second aorist?', ch:'', opts:['It always includes -σ-','It often lacks -σ- and must be learned as a different stem','It is always future','It is only passive'], ans:1, ok:'Correct. Many second aorists lack -σ- and use a different stem (e.g., ἔλαβον).', no:'Second aorists often lack -σ- and use a different stem (e.g., ἔλαβον).'},
  ],

  completionNote: 'You can now recognize the aorist’s basic meaning, spot common markers (augment and -σ-), and identify key aorist verbs in the New Testament.',
  nextDay: 'Day 3: Latin — Imperfect & Future →',
};

