/* ═══════════════════════════════════════
   LESSON: Week 5 · Day 5 · Koine Greek IX
   Romans 3:21–26 — The Heart of Paul's Gospel
   ═══════════════════════════════════════ */

LESSONS['5-5-Greek'] = {
  color:    'blue',
  subtitle: 'Week 5 · Day 5 · Koine Greek IX',
  title:    'Romans 3:21–26 — Justification by Faith',
  intro:    'Romans 3:21–26 has been called the most important paragraph in the New Testament. It is the theological centre of Paul\'s letter to Rome and the foundation of the doctrine of justification. Today you read it in the Greek Paul wrote — word by word, identifying key terms and grammatical structures.',
  sections: ['Introduction','Verses 21–22','Verses 23–24','Verses 25–26','Word Study','Quiz','Complete'],

  beforeYouBegin: `
    <p class="lesson-p"><strong>This passage is more grammatically complex than John 1.</strong> Paul writes in long, densely packed sentences. Several key terms appear here that are central to Christian theology — δικαιοσύνη (righteousness), πίστις (faith), ἱλαστήριον (propitiation/mercy seat), ἀπολύτρωσις (redemption). Learning to read these in Greek changes how you understand every commentary and theological discussion about justification.</p>
    <div class="box box-fact"><strong>📜 The Reformation and this passage:</strong> Martin Luther's rediscovery of δικαιοσύνη θεοῦ (righteousness of God) in Romans 1:17 and 3:21 was the spark of the Reformation. He had understood it as God\'s punishing righteousness — until he realised it referred to the righteousness God GIVES. The Greek text settled the debate. Learning this passage in Greek puts you at the centre of five centuries of theological reflection.</div>
    <div class="box box-tip"><strong>💡 New grammar today — the Aorist passive:</strong> You will see δικαιούμενοι (being justified) and ἀπελύθρωσιν (redemption). These involve the passive voice — the subject receives the action rather than performing it. "Being justified" = the sinner receives justification as a gift. The passive voice IS the doctrine.</div>`,

  alphabetIntro: 'Romans 3:21–26 with key theological terms identified and grammatically analysed.',
  alphabetNotes: `<div class="box box-note"><strong>The theological vocabulary of this passage:</strong> δικαιοσύνη (righteousness) · πίστις (faith) · ἱλαστήριον (propitiation/mercy seat) · ἀπολύτρωσις (redemption) · χάρις (grace) · ἁμαρτία (sin) · δωρεάν (freely/as a gift). These seven words are the grammar of the gospel.</div>`,

  alphabet: [
    {ch:'δικαιοσύνη', name:'righteousness',    sound:'dikaiosyne',  n:1, t:true},
    {ch:'πίστις',     name:'faith',             sound:'pistis',      n:2, t:true},
    {ch:'χωρίς',      name:'apart from',        sound:'choris',      n:3, t:true},
    {ch:'νόμου',      name:'of law (gen.)',      sound:'nomou',       n:4, t:true},
    {ch:'ἁμαρτία',   name:'sin',                sound:'hamartia',    n:5, t:true},
    {ch:'δωρεάν',     name:'freely / as a gift', sound:'dorean',     n:6, t:true},
    {ch:'χάρις',      name:'grace',              sound:'charis',      n:7, t:true},
    {ch:'ἱλαστήριον', name:'mercy seat / propitiation',sound:'hilasterion',n:8,t:true},
    {ch:'ἀπολύτρωσις',name:'redemption',        sound:'apolytrosis', n:9, t:true},
    {ch:'δικαιοῦν',   name:'to justify',         sound:'dikaioun',    n:10,t:true},
  ],

  focusLetters: [
    {ch:'δικαιοσύνη θεοῦ', name:'Righteousness of God', trans:'Gen. of source',   desc:'The righteousness THAT COMES FROM God — genitive of source', ex:'Revealed apart from law (v.21)'},
    {ch:'διὰ πίστεως',     name:'Through faith',        trans:'Genitive after διά',desc:'διά + genitive = agency/means — through the means of faith',  ex:'Righteousness comes through faith (v.22)'},
    {ch:'δωρεάν',          name:'Freely / As a gift',   trans:'Adverb',           desc:'Not earned — received as a pure gift (dorean)',                ex:'Justified freely by his grace (v.24)'},
    {ch:'ἱλαστήριον',      name:'Propitiation/Mercy seat',trans:'Key disputed term',desc:'OT: the ark\'s mercy seat where blood was sprinkled; NT: Christ as the place of atonement', ex:'Whom God put forward as ἱλαστήριον (v.25)'},
    {ch:'πάρεσιν',         name:'Passing over',         trans:'Divine forbearance',desc:'God\'s patient passing over of former sins before the cross', ex:'Because of the passing over of former sins (v.25)'},
  ],

  deepDive: `
    <div class="lesson-h3">Verses 21–22 — Righteousness Revealed</div>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;padding:1.25rem 1.5rem;margin:1rem 0 1.5rem;">
      <div style="font-family:var(--greek);font-size:1.4rem;color:var(--blue);line-height:2;margin-bottom:.75rem;">Νυνὶ δὲ χωρὶς νόμου δικαιοσύνη θεοῦ πεφανέρωται, μαρτυρουμένη ὑπὸ τοῦ νόμου καὶ τῶν προφητῶν· δικαιοσύνη δὲ θεοῦ διὰ πίστεως Ἰησοῦ Χριστοῦ εἰς πάντας τοὺς πιστεύοντας.</div>
      <div style="font-size:.85rem;color:var(--text-mid);font-style:italic;margin-bottom:.5rem;">Nyni de choris nomou dikaiosyne theou pephanerōtai, martyroumene hypo tou nomou kai ton propheton; dikaiosyne de theou dia pisteos Iesou Christou eis pantas tous pisteuontas.</div>
      <div style="font-size:1rem;color:var(--text);font-weight:600;margin-bottom:1rem;">"But now the righteousness of God has been manifested apart from the law, although the Law and the Prophets bear witness to it — the righteousness of God through faith in Jesus Christ for all who believe."</div>
      <div style="font-size:.88rem;color:var(--text-mid);line-height:1.9;">
        <strong style="color:var(--text);">Νυνὶ δέ</strong> = But now (the hinge of the argument — everything changes) &nbsp;·&nbsp;
        <strong style="color:var(--text);">χωρὶς νόμου</strong> = apart from law (χωρίς + genitive) &nbsp;·&nbsp;
        <strong style="color:var(--text);">δικαιοσύνη θεοῦ</strong> = righteousness of God (genitive of source — from God, not merely about God) &nbsp;·&nbsp;
        <strong style="color:var(--text);">πεφανέρωται</strong> = has been manifested (perfect passive of φανερόω — completed action with present effect) &nbsp;·&nbsp;
        <strong style="color:var(--text);">διὰ πίστεως Ἰησοῦ Χριστοῦ</strong> = through faith of/in Jesus Christ (genitive — debated: faith IN Christ, or faithfulness OF Christ)
      </div>
    </div>

    <div class="lesson-h3">Verses 23–24 — All Have Sinned / Justified Freely</div>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;padding:1.25rem 1.5rem;margin:1rem 0 1.5rem;">
      <div style="font-family:var(--greek);font-size:1.4rem;color:var(--blue);line-height:2;margin-bottom:.75rem;">πάντες γὰρ ἥμαρτον καὶ ὑστεροῦνται τῆς δόξης τοῦ θεοῦ, δικαιούμενοι δωρεὰν τῇ αὐτοῦ χάριτι διὰ τῆς ἀπολυτρώσεως τῆς ἐν Χριστῷ Ἰησοῦ.</div>
      <div style="font-size:.85rem;color:var(--text-mid);font-style:italic;margin-bottom:.5rem;">pantes gar hemarton kai hysteroyntai tes doxes tou theou, dikaioumenoi dorean te autou chariti dia tes apolytrōseōs tes en Christō Iesou.</div>
      <div style="font-size:1rem;color:var(--text);font-weight:600;margin-bottom:1rem;">"For all have sinned and fall short of the glory of God, and are justified by his grace as a gift, through the redemption that is in Christ Jesus."</div>
      <div style="font-size:.88rem;color:var(--text-mid);line-height:1.9;">
        <strong style="color:var(--text);">πάντες ἥμαρτον</strong> = all sinned (πάντες = all · ἥμαρτον = aorist of ἁμαρτάνω — universal, completed verdict) &nbsp;·&nbsp;
        <strong style="color:var(--text);">ὑστεροῦνται τῆς δόξης</strong> = fall short of the glory (present tense — ongoing condition) &nbsp;·&nbsp;
        <strong style="color:var(--text);">δικαιούμενοι</strong> = being justified (present passive participle — they are being justified, receiving it as gift) &nbsp;·&nbsp;
        <strong style="color:var(--text);">δωρεάν</strong> = freely, as a gift (adverb — not earned) &nbsp;·&nbsp;
        <strong style="color:var(--text);">τῇ αὐτοῦ χάριτι</strong> = by his grace (dative of means — grace is the instrument) &nbsp;·&nbsp;
        <strong style="color:var(--text);">ἀπολυτρώσεως</strong> = redemption (genitive of ἀπολύτρωσις — the purchasing back of slaves)
      </div>
    </div>

    <div class="lesson-h3">Verses 25–26 — The Mercy Seat</div>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;padding:1.25rem 1.5rem;margin:1rem 0 1.5rem;">
      <div style="font-family:var(--greek);font-size:1.3rem;color:var(--blue);line-height:2;margin-bottom:.75rem;">ὃν προέθετο ὁ θεὸς ἱλαστήριον διὰ πίστεως ἐν τῷ αὐτοῦ αἵματι εἰς ἔνδειξιν τῆς δικαιοσύνης αὐτοῦ διὰ τὴν πάρεσιν τῶν προγεγονότων ἁμαρτημάτων ἐν τῇ ἀνοχῇ τοῦ θεοῦ·</div>
      <div style="font-size:.85rem;color:var(--text-mid);font-style:italic;margin-bottom:.5rem;">hon proetheto ho theos hilasterion dia pisteos en tō autou haimati eis endeixin tes dikaiosynes autou dia ten paresin ton progegonotōn hamartematon en te anoche tou theou.</div>
      <div style="font-size:1rem;color:var(--text);font-weight:600;margin-bottom:1rem;">"Whom God put forward as a propitiation by his blood, to be received by faith. This was to show God\'s righteousness, because in his divine forbearance he had passed over former sins."</div>
      <div style="font-size:.88rem;color:var(--text-mid);line-height:1.9;">
        <strong style="color:var(--text);">ὃν προέθετο</strong> = whom God put forward / set forth publicly (aorist middle of προτίθημι) &nbsp;·&nbsp;
        <strong style="color:var(--text);">ἱλαστήριον</strong> = mercy seat / propitiation (OT: the golden lid of the ark where high priest sprinkled blood on Yom Kippur — Lev 16. Here: Christ is the mercy seat.) &nbsp;·&nbsp;
        <strong style="color:var(--text);">ἐν τῷ αὐτοῦ αἵματι</strong> = in/by his blood (the blood of the sacrifice) &nbsp;·&nbsp;
        <strong style="color:var(--text);">πάρεσιν</strong> = passing over (God\'s patient forbearance — not the same as forgiveness) &nbsp;·&nbsp;
        <strong style="color:var(--text);">ἐν τῇ ἀνοχῇ τοῦ θεοῦ</strong> = in the forbearance of God
      </div>
    </div>
    <div class="box box-fact"><strong>ἱλαστήριον — The Mercy Seat:</strong> In Exodus 25:17–22 (LXX), ἱλαστήριον translates the Hebrew כַּפֹּרֶת (kapporet) — the golden cover of the ark of the covenant. On Yom Kippur (Day of Atonement) the high priest sprinkled blood on it seven times. Paul says Christ IS the ἱλαστήριον — not a place but a Person. The whole Day of Atonement ritual was a shadow of this reality. The Greek word connects both Testaments directly.</div>`,

  writing: [
    {ch:'δικαιοσύνη θεοῦ',     name:'Righteousness of God', steps:['δικαιοσύνη = righteousness (1st decl. fem.)','θεοῦ = of God (genitive — source, not just description)','Together: "The righteousness that comes FROM God"','Write 10 times. This phrase changed Luther\'s life.']},
    {ch:'πάντες ἥμαρτον',      name:'All have sinned',      steps:['πάντες = all (masculine plural adjective)','ἥμαρτον = sinned (aorist — universal, complete verdict)','Write 5 times. The diagnosis precedes the cure.']},
    {ch:'δωρεάν τῇ αὐτοῦ χάριτι', name:'Freely by his grace', steps:['δωρεάν = freely, as a gift (adverb — not earned)','τῇ αὐτοῦ χάριτι = by his grace (dative of means)','Write 5 times. Grace is not helped by merit. It is free.']},
    {ch:'διὰ πίστεως',          name:'Through faith',        steps:['διά + genitive = through/by means of','πίστεως = faith (genitive of πίστις)','Together: through faith — the means of receiving righteousness','Write 10 times.']},
    {ch:'ἱλαστήριον',           name:'Mercy seat / Propitiation', steps:['One of the most theologically weighty words in the NT','In the LXX it translates kapporet — the ark\'s mercy seat','Paul says Christ IS this — the place where God\'s justice and mercy meet','Write 10 times. Say "hilasterion" as you write.']},
  ],

  vocab: [
    {ch:'δικαιοσύνη', trans:'dikaiosyne', meaning:'Righteousness / Justice',      note:'The central term of Romans — from δίκαιος (just/righteous)'},
    {ch:'πίστις',     trans:'pistis',     meaning:'Faith / Trust / Faithfulness', note:'διὰ πίστεως = through faith'},
    {ch:'χάρις',      trans:'charis',     meaning:'Grace / Gift / Favour',        note:'τῇ χάριτι = by grace (dative of means)'},
    {ch:'ἁμαρτία',   trans:'hamartia',   meaning:'Sin / Missing the mark',       note:'πάντες ἥμαρτον — all sinned (aorist)'},
    {ch:'δωρεάν',     trans:'dorean',     meaning:'Freely / As a gift',           note:'δωρεάν = not by merit — pure gift'},
    {ch:'ἱλαστήριον', trans:'hilasterion',meaning:'Mercy seat / Propitiation',   note:'OT: kapporet (ark cover). NT: Christ himself.'},
    {ch:'ἀπολύτρωσις',trans:'apolytrosis',meaning:'Redemption',                  note:'From λύτρον (ransom) — buying back from slavery'},
  ],

  scriptureRef: 'Romans 3:23–24',
  scripture: {
    orig:  'πάντες γὰρ ἥμαρτον καὶ ὑστεροῦνται τῆς δόξης τοῦ θεοῦ, δικαιούμενοι δωρεὰν τῇ αὐτοῦ χάριτι διὰ τῆς ἀπολυτρώσεως τῆς ἐν Χριστῷ Ἰησοῦ.',
    trans: 'pantes gar hemarton kai hysteroyntai tes doxes tou theou, dikaioumenoi dorean te autou chariti dia tes apolytroseōs tes en Christō Iesou.',
    eng:   '"For all have sinned and fall short of the glory of God, and are justified by his grace as a gift, through the redemption that is in Christ Jesus." — Romans 3:23–24',
  },
  scriptureNote: 'Identify the tenses: ἥμαρτον (aorist — past completed) · ὑστεροῦνται (present — ongoing condition) · δικαιούμενοι (present passive participle — currently being justified). Three tenses in two verses, each theologically precise.',
  scriptureTip: '<strong>💡 The passive voice as theology:</strong> δικαιούμενοι (being justified) is a present passive participle. Passive voice = the subject receives the action. Sinners do not justify themselves — they ARE JUSTIFIED by another. The grammar of Romans 3:24 is the grammar of grace: we are acted upon, not actors. The passive voice encodes the entire doctrine of justification.',

  quiz: [
    {q:'What does δικαιοσύνη θεοῦ (dikaiosyne theou) mean — and what was Luther\'s crucial insight?', ch:'δικαιοσύνη θεοῦ', opts:['God\'s punishing righteousness — his wrath against sin','The righteousness that comes FROM God as a gift — Luther realised it was a given righteousness, not a punishing one','God\'s standard of righteousness that humans must meet','The righteousness of God\'s character — his being just'], ans:1, ok:'Correct! Luther initially understood δικαιοσύνη θεοῦ as God\'s punishing, demanding righteousness. Then he realised it was the righteousness GOD GIVES — a genitive of source. "The righteousness of God" = the righteousness that comes from God, credited to believers. This insight ignited the Reformation.', no:'δικαιοσύνη θεοῦ = righteousness FROM God — he gives it. Luther\'s discovery that it was given, not demanded, ignited the Reformation.'},
    {q:'What does δωρεάν (dorean) mean in verse 24 — and why is it theologically significant?', ch:'δωρεάν', opts:['"Deservedly" — justification is earned by the righteous','Freely, as a pure gift — justification cannot be earned or merited','Temporarily — justification can be lost','Partially — justification is a process we complete'], ans:1, ok:'Correct! δωρεάν = freely, as a gift. It is an adverb derived from δωρεά (gift). "Justified freely by his grace" — the adverb and the noun grace (χάρις) together make the same point: this is given, not earned. In Galatians 2:21, Paul uses it to say "if justification were through law, then Christ died for nothing (δωρεάν)."', no:'δωρεάν = freely, as a gift. Justification is not earned — it is given without merit. The adverb and χάρις (grace) make the same point twice.'},
    {q:'What is ἱλαστήριον (hilasterion) — and why does Paul\'s use of this word connect the two Testaments?', ch:'ἱλαστήριον', opts:['"Sacrifice" — a general word for any offering','The mercy seat on the ark of the covenant (Exodus 25, LXX) — Paul says Christ IS the mercy seat where God\'s justice and mercy meet in his blood','A Greek word for forgiveness with no OT connection','The temple curtain that was torn at the crucifixion'], ans:1, ok:'Correct! ἱλαστήριον = mercy seat in the LXX (Exodus 25:17–22). On Yom Kippur the high priest sprinkled blood on it seven times. Paul says God set forth Christ as the ἱλαστήριον — not a place but a Person. Christ IS the ark\'s mercy seat. One Greek word connects Leviticus 16 to Romans 3. The OT ritual was a shadow of this reality.', no:'ἱλαστήριον = mercy seat (LXX Exodus 25). Paul says Christ is the mercy seat — the place where justice and mercy meet in his blood. One word connects Leviticus 16 to Romans 3.'},
    {q:'Why is δικαιούμενοι (dikaioumenoi) in the passive voice — and what doctrine does this encode?', ch:'δικαιούμενοι', opts:['Passive is simply a stylistic choice by Paul','Passive voice means the subject receives the action — sinners do not justify themselves; they ARE JUSTIFIED by God. The passive voice IS the doctrine of grace.','Passive indicates the action is completed in the past','Passive means the action is uncertain or conditional'], ans:1, ok:'Correct! Passive voice = the subject receives the action. δικαιούμενοι = being justified (they receive it). Sinners do not produce justification — God acts and they receive. The grammar is not incidental: passive voice encodes the entire structure of grace. We are acted upon; God is the actor.', no:'Passive = the subject receives. δικαιούμενοι = being justified (received as gift). The passive voice encodes the doctrine: God acts; we receive. The grammar IS the theology of grace.'},
    {q:'What does Νυνὶ δέ (nyni de) — "But now" — signal at the opening of verse 21?', ch:'Νυνὶ δέ', opts:['"But eventually" — the gospel is a future hope only','A minor transition with no theological weight','"But now" — the decisive hinge of the argument. The age of condemnation (vv. 1–20) gives way to the age of justification. The eschatological moment has arrived.','A reference to Paul\'s present moment of writing only'], ans:2, ok:'Correct! Νυνὶ δέ = But now — one of the most theologically loaded phrases in Romans. After three chapters establishing universal human guilt, "but now" signals the dramatic reversal. The age of sin\'s dominion gives way to the revelation of God\'s righteousness. It is an eschatological hinge.', no:'Νυνὶ δέ = "But now" — the eschatological hinge. After 3 chapters of condemnation, everything changes. The age of grace has broken in.'},
  ],

  completionNote: 'You have read Romans 3:21–26 in Koine Greek — the most theologically dense paragraph in Paul\'s letters. You now know the Greek words at the centre of the Reformation debate and can engage theological commentary at its source.',
  nextDay: 'Week 6 · Day 1: Hebrew — The Niphal Stem →',
};
