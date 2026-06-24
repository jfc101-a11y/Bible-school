/* ═══════════════════════════════════════
   LESSON: Week 6 · Day 2 · Koine Greek X
   The Greek Aorist — Simple Past
   ═══════════════════════════════════════ */

LESSONS['6-2-Greek'] = {
  color:    'blue',
  subtitle: 'Week 6 · Day 2 · Koine Greek X',
  title:    'The Aorist Tense — Simple Past',
  intro:    'You have learned the Present and you have met the Imperfect in passing (ἦν). Today you learn the Aorist — the most common past tense in the New Testament, and one of the most theologically significant. The Aorist describes a completed action viewed as a single, undivided whole — and it carries the weight of "It is finished" and "He died."',
  sections: ['Introduction','Aorist vs Present','The Paradigm','Key Aorists','First Sentences','Quiz','Complete'],

  beforeYouBegin: `
    <p class="lesson-p"><strong>The Aorist is not primarily about time — it is about aspect.</strong> Like the Hebrew Perfect you already know, the Aorist views an action as a complete, whole event — a snapshot rather than a process. This is different from the Present (ongoing action) and the Imperfect (ongoing action in the past).</p>
    <div class="box box-fact"><strong>📜 Why the Aorist matters theologically:</strong> ἀπέθανεν (he died), ἠγέρθη (he was raised), ἐγένετο (he became) — these foundational gospel verbs are Aorist. The death and resurrection of Christ are described with the Aorist because they are complete, historical, once-for-all events — not ongoing processes. "Christ died (ἀπέθανεν) for our sins" is a once-for-all completed fact.</div>
    <div class="box box-tip"><strong>💡 The First Aorist pattern:</strong> Most Greek verbs form the "First Aorist" by adding -σα between the stem and the personal endings, often with an ἐ- prefix called the "augment" (signaling past time). ἐπίστευσα = I believed. Learn this pattern and you can recognise hundreds of Aorist verbs.</div>`,

  alphabetIntro: 'The Aorist Active Indicative paradigm — first aorist pattern using πιστεύω (I believe).',
  alphabetNotes: `<div class="box box-note"><strong>The augment:</strong> Most Aorist (and Imperfect) verbs add ἐ- at the front as a marker of past time — called the "augment." πιστεύω (present) → ἐπίστευσα (aorist, "I believed"). If the verb already starts with a vowel, the augment lengthens that vowel instead.</div>`,

  alphabet: [
    {ch:'ἐπίστευσα',  name:'1st sing.',  sound:'I believed',         n:1, t:true},
    {ch:'ἐπίστευσας', name:'2nd sing.',  sound:'You believed',       n:2, t:true},
    {ch:'ἐπίστευσεν', name:'3rd sing.',  sound:'He/She believed',    n:3, t:true},
    {ch:'ἐπιστεύσαμεν',name:'1st plural',sound:'We believed',        n:4, t:true},
    {ch:'ἐπιστεύσατε', name:'2nd plural',sound:'You all believed',  n:5, t:true},
    {ch:'ἐπίστευσαν', name:'3rd plural', sound:'They believed',      n:6, t:true},
    {ch:'ἀπέθανεν',    name:'He died',    sound:'apethanen',          n:7, t:true},
    {ch:'ἠγέρθη',      name:'He was raised',sound:'egerthe',          n:8, t:true},
    {ch:'ἐγένετο',     name:'It became/happened',sound:'egeneto',     n:9, t:true},
    {ch:'εἶπεν',       name:'He said',    sound:'eipen',              n:10,t:true},
  ],

  focusLetters: [
    {ch:'ἐ-',         name:'The augment',     trans:'Past-time marker', desc:'Prefixed to mark past tense — Aorist and Imperfect',  ex:'πιστεύω → ἐπίστευσα'},
    {ch:'-σα',        name:'1st Aorist marker',trans:'Sigma + alpha',   desc:'Tense formative inserted before personal endings',     ex:'ἐ-πιστευ-σα = I believed'},
    {ch:'ἀπέθανεν',  name:'He died',          trans:'2nd Aorist',       desc:'Irregular stem change — no -σα marker',                ex:'Romans 5:8 — Χριστὸς ἀπέθανεν'},
    {ch:'ἠγέρθη',    name:'He was raised',    trans:'Aorist Passive',    desc:'-θη marker = aorist passive voice',                    ex:'1 Cor 15:4 — ἠγέρθη τῇ τρίτῃ ἡμέρᾳ'},
    {ch:'ἐγένετο',   name:'It happened/became',trans:'2nd Aorist of γίνομαι',desc:'Already met in John 1:3',                          ex:'πάντα δι᾽ αὐτοῦ ἐγένετο'},
  ],

  deepDive: `
    <div class="lesson-h3">Aorist vs Present vs Imperfect — The Aspect System</div>
    <p class="lesson-p">Greek verbs primarily express <em>aspect</em> (the nature of the action) rather than strictly time:</p>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;overflow:hidden;margin:1.25rem 0;">
      <table style="width:100%;border-collapse:collapse;font-size:.88rem;">
        <thead><tr style="background:var(--bg3);"><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Tense</th><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Aspect</th><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Example</th><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Translation</th></tr></thead>
        <tbody>
          <tr><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text);font-weight:600;">Present</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Ongoing, repeated</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.1rem;color:var(--blue);">πιστεύω</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">I believe (continuously)</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text);font-weight:600;">Imperfect</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Ongoing in the past</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.1rem;color:var(--blue);">ἦν</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">was (continuously, no end stated)</td></tr>
          <tr><td style="padding:.5rem .8rem;color:var(--text);font-weight:600;">Aorist</td><td style="padding:.5rem .8rem;color:var(--text-mid);">Complete, whole event</td><td style="padding:.5rem .8rem;font-family:var(--greek);font-size:1.1rem;color:var(--blue);">ἐπίστευσα</td><td style="padding:.5rem .8rem;color:var(--text-mid);">I believed (a complete act)</td></tr>
        </tbody>
      </table>
    </div>

    <div class="lesson-h3">The First Aorist Active Paradigm</div>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;overflow:hidden;margin:1.25rem 0;">
      <table style="width:100%;border-collapse:collapse;font-size:.9rem;">
        <thead><tr style="background:var(--bg3);"><th style="padding:.5rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Person</th><th style="padding:.5rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">πιστεύω (believe)</th><th style="padding:.5rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Translation</th></tr></thead>
        <tbody>
          <tr><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">1st sing.</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.2rem;color:var(--blue);">ἐπίστευσα</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">I believed</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">2nd sing.</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.2rem;color:var(--blue);">ἐπίστευσας</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">You believed</td></tr>
          <tr><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">3rd sing.</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.2rem;color:var(--blue);">ἐπίστευσεν</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">He/She believed</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">1st plural</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.2rem;color:var(--blue);">ἐπιστεύσαμεν</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">We believed</td></tr>
          <tr><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">2nd plural</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.2rem;color:var(--blue);">ἐπιστεύσατε</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">You all believed</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.45rem .8rem;color:var(--text-mid);">3rd plural</td><td style="padding:.45rem .8rem;font-family:var(--greek);font-size:1.2rem;color:var(--blue);">ἐπίστευσαν</td><td style="padding:.45rem .8rem;color:var(--text-mid);">They believed</td></tr>
        </tbody>
      </table>
    </div>

    <div class="lesson-h3">Second Aorist — Irregular but Frequent</div>
    <p class="lesson-p">Some of the most common Greek verbs use the "Second Aorist" — an irregular stem change rather than the -σα suffix. These must be memorised individually: <strong>εἶπεν</strong> (he said, from λέγω) · <strong>ἦλθεν</strong> (he came, from ἔρχομαι) · <strong>ἔλαβεν</strong> (he took/received, from λαμβάνω) · <strong>ἀπέθανεν</strong> (he died, from ἀποθνήσκω). These verbs appear constantly in narrative.</p>

    <div class="lesson-h3">The Aorist Passive — the -θη marker</div>
    <p class="lesson-p">The Aorist Passive is marked by <strong>-θη-</strong> inserted before the personal endings. <strong>ἠγέρθη</strong> (he was raised) is one of the most important words in the New Testament: "Christ died (ἀπέθανεν) ... was buried (ἐτάφη) ... was raised (ἠγέρθη) on the third day" (1 Corinthians 15:3–4). All three verbs are Aorist — three complete, historical, once-for-all events forming the core of the gospel proclamation (the κήρυγμα).</p>
    <div class="box box-fact"><strong>The gospel in three Aorists:</strong> ἀπέθανεν (he died) · ἐτάφη (he was buried) · ἠγέρθη (he was raised). This is the earliest creedal summary of the gospel, which Paul says he "received" and "delivered" (1 Cor 15:3). Three Aorist verbs are the skeleton of Christian proclamation.</div>
    <div class="box box-tip"><strong>💡 Memory:</strong> First Aorist = -σα marker (regular). Second Aorist = stem change (irregular, memorise individually). Aorist Passive = -θη marker. All three express completed, whole action.</div>`,

  writing: [
    {ch:'ἐπίστευσα',  name:'I believed', steps:['ἐ- (augment) + πιστευ- (stem) + -σα (aorist marker) + nothing (1st sing. ending)','Pronunciation: eh-PIS-tef-sa','A complete, once-for-all act of believing','Write the full paradigm 2 times: ἐπίστευσα ἐπίστευσας ἐπίστευσεν ἐπιστεύσαμεν ἐπιστεύσατε ἐπίστευσαν']},
    {ch:'ἀπέθανεν',   name:'He died (2nd Aorist)', steps:['From ἀποθνήσκω (to die) — irregular 2nd aorist stem','Pronunciation: a-PETH-a-nen','Romans 5:8: "Christ died (ἀπέθανεν) for us"','Write it 10 times. This verb carries the whole gospel.']},
    {ch:'ἠγέρθη',     name:'He was raised', steps:['Aorist Passive of ἐγείρω (to raise)','-θη = passive marker','Pronunciation: ee-GER-thee','1 Corinthians 15:4: "he was raised (ἠγέρθη) on the third day"','Write it 10 times. The resurrection in one Greek word.']},
    {ch:'εἶπεν',       name:'He said (2nd Aorist)', steps:['From λέγω (to say) — completely irregular stem','Pronunciation: EE-pen','One of the most frequent verbs in narrative — introduces direct speech','Write it 10 times.']},
    {ch:'ἀπέθανεν, ἐτάφη, ἠγέρθη', name:'The gospel in three Aorists', steps:['Write all three together: he died, he was buried, he was raised','1 Corinthians 15:3–4 — the earliest creedal summary of the gospel','Each verb is Aorist — complete, historical, once-for-all','Write the sequence 5 times. This is what Paul "received" and "delivered."']},
  ],

  vocab: [
    {ch:'ἐπίστευσεν', trans:'episteusen',  meaning:'He/she believed',        note:'1st Aorist of πιστεύω'},
    {ch:'ἀπέθανεν',   trans:'apethanen',   meaning:'He died',                 note:'2nd Aorist of ἀποθνήσκω — Romans 5:8'},
    {ch:'ἠγέρθη',     trans:'egerthe',     meaning:'He was raised',           note:'Aorist Passive of ἐγείρω — 1 Cor 15:4'},
    {ch:'εἶπεν',      trans:'eipen',       meaning:'He said',                 note:'2nd Aorist of λέγω — extremely common'},
    {ch:'ἦλθεν',      trans:'elthen',      meaning:'He came/went',            note:'2nd Aorist of ἔρχομαι'},
    {ch:'ἔλαβεν',     trans:'elaben',      meaning:'He took/received',        note:'2nd Aorist of λαμβάνω'},
    {ch:'ἐγένετο',    trans:'egeneto',     meaning:'It became/happened',      note:'2nd Aorist of γίνομαι — John 1:3'},
  ],

  scriptureRef: '1 Corinthians 15:3–4',
  scripture: {
    orig:  'ὅτι Χριστὸς ἀπέθανεν ὑπὲρ τῶν ἁμαρτιῶν ἡμῶν κατὰ τὰς γραφάς, καὶ ὅτι ἐτάφη, καὶ ὅτι ἐγήγερται τῇ τρίτῃ ἡμέρᾳ κατὰ τὰς γραφάς.',
    trans: 'hoti Christos apethanen hyper ton hamartion hemon kata tas graphas, kai hoti etaphe, kai hoti egegertai te trite hemera kata tas graphas.',
    eng:   '"That Christ died for our sins in accordance with the Scriptures, that he was buried, that he was raised on the third day in accordance with the Scriptures." — 1 Corinthians 15:3–4',
  },
  scriptureNote: 'Identify the three core verbs: ἀπέθανεν (died — Aorist Active) · ἐτάφη (was buried — Aorist Passive) · ἐγήγερται (has been raised — note this is actually Perfect tense here, not Aorist, emphasizing the permanent ongoing result of the resurrection).',
  scriptureTip: '<strong>💡 Note the tense shift:</strong> Paul uses Aorist for "died" and "was buried" (complete past events) but switches to the Perfect tense for "has been raised" (ἐγήγερται) — a past event with continuing present results. Christ\'s death and burial are completed history; his resurrection is a past event whose effects continue NOW. The grammar itself proclaims that the resurrection is not merely historical but presently, permanently real.',

  quiz: [
    {q:'What aspect does the Aorist tense primarily express?', ch:'', opts:['Ongoing, continuous action','A complete action viewed as a single, undivided whole event','Future intention','Repeated, habitual action'], ans:1, ok:'Correct! The Aorist views an action as a complete, whole event — like a single snapshot rather than an ongoing process. This is different from Present (ongoing) and Imperfect (ongoing in the past).', no:'Aorist = complete action viewed as a whole, single event. Contrast with Present/Imperfect which describe ongoing action.'},
    {q:'What is the "augment" in Greek Aorist (and Imperfect) verbs?', ch:'ἐπίστευσα', opts:['A suffix added at the end marking the subject','A prefix (usually ἐ-) added to the front of the verb marking past time','A doubling of the first consonant','An accent mark indicating emphasis'], ans:1, ok:'Correct! The augment is a prefix (usually ἐ-) added to mark past tense. πιστεύω (present) → ἐπίστευσα (aorist). If the verb starts with a vowel, the vowel lengthens instead of adding ἐ-.', no:'The augment = ἐ- prefix marking past time. πιστεύω → ἐπίστευσα. This is added to both Aorist and Imperfect forms.'},
    {q:'What marker identifies the Aorist Passive?', ch:'ἠγέρθη', opts:['-σα inserted before the endings','-θη inserted before the endings','A doubled consonant in the stem','No marker — it looks identical to Aorist Active'], ans:1, ok:'Correct! -θη- marks the Aorist Passive. ἠγέρθη (he was raised) = ἐγείρω + augment + θη + ending. This passive marker appears throughout the NT for actions done TO the subject.', no:'-θη- marks Aorist Passive. ἠγέρθη (he was raised) shows this marker clearly.'},
    {q:'What are the three Aorist verbs that form the core gospel proclamation in 1 Corinthians 15:3–4?', ch:'', opts:['ἠγάπησεν, ἔδωκεν, ἐπίστευσεν (loved, gave, believed)','ἀπέθανεν, ἐτάφη, ἠγέρθη (died, was buried, was raised)','εἶπεν, ἦλθεν, ἔλαβεν (said, came, took)','ἐγένετο, ἦν, ἐστίν (became, was, is)'], ans:1, ok:'Correct! ἀπέθανεν (he died), ἐτάφη (he was buried), ἠγέρθη (he was raised). Paul says he "received" and "delivered" this three-part summary — the earliest creedal core of the Christian gospel, all expressed in the Aorist as complete, historical events.', no:'ἀπέθανεν (died), ἐτάφη (was buried), ἠγέρθη (was raised) — the three-Aorist core of the gospel that Paul received and passed on.'},
    {q:'Why might a Greek-reading Christian be encouraged by the verb tense Paul uses for the resurrection in 1 Cor 15:4 — ἐγήγερται — being Perfect rather than Aorist?', ch:'ἐγήγερται', opts:['It indicates the resurrection is uncertain','The Perfect tense indicates a past action with continuing present results — the resurrection is not just history but a present, ongoing reality','It means the resurrection happens repeatedly','There is no difference between Perfect and Aorist'], ans:1, ok:'Correct! The Perfect tense (ἐγήγερται — "has been raised") indicates a completed past action whose effects continue into the present. Unlike the Aorist (a snapshot of the past), the Perfect emphasizes that Christ\'s resurrection is not merely a historical fact — it is presently, permanently real. He IS risen, not merely "was risen."', no:'Perfect tense = past action with continuing present results. ἐγήγερται = "has been raised and remains raised" — the resurrection is present reality, not just past history.'},
  ],

  completionNote: 'You have learned the Aorist tense — the most common past tense in the New Testament and the grammar of the gospel\'s core historical claims. You can now identify the verb forms behind "Christ died, was buried, was raised."',
  nextDay: 'Day 3: Latin Imperfect & Future →',
};
