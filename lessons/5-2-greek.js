/* ═══════════════════════════════════════
   LESSON: Week 5 · Day 2 · Koine Greek VIII
   John 1:1–5 — Word by Word
   ═══════════════════════════════════════ */

LESSONS['5-2-Greek'] = {
  color:    'blue',
  subtitle: 'Week 5 · Day 2 · Koine Greek VIII',
  title:    'John 1:1–5 — Reading the Prologue',
  intro:    'John 1:1–5 is the most theologically dense passage in the New Testament. Five verses. Every word chosen with precision. Today you read them in the original Greek — parsing the grammar, understanding the vocabulary, and encountering John\'s Christology at its source.',
  sections: ['Introduction','Verse 1','Verses 2–3','Verses 4–5','Word Study','Quiz','Complete'],

  beforeYouBegin: `
    <p class="lesson-p"><strong>You know enough Greek to do this.</strong> You have the alphabet, the case system, the article, and the present tense. The verbs in John 1:1–5 are mostly imperfect (ἦν = was) and aorist (ἐγένετο = came into being) — the aorist is new, but the context will make it clear. Work carefully.</p>
    <div class="box box-fact"><strong>📜 The Prologue (John 1:1–18):</strong> John's Prologue is widely regarded as one of the greatest pieces of writing in world literature. It deliberately echoes Genesis 1:1 ("In the beginning") while introducing the Logos — the Word — as the pre-existent divine agent of creation who became flesh. Scholars debate whether it was originally a hymn. Its structure is poetic, its theology is cosmic.</div>
    <div class="box box-tip"><strong>💡 New word — ἐγένετο:</strong> You will encounter ἐγένετο (egeneto) repeatedly in this passage. It is the aorist of γίνομαι (ginomai = to become/come into being). The aorist indicates a completed past action. ἐγένετο = "came into being," "happened," "was made." The contrast with ἦν (was — imperfect, continuous) is theologically crucial.</div>`,

  alphabetIntro: 'John 1:1–5 in Greek with word-by-word grammatical analysis.',
  alphabetNotes: `<div class="box box-note"><strong>Key contrast:</strong> ἦν (en) = was — imperfect, continuous, eternal existence. ἐγένετο (egeneto) = came into being — aorist, a beginning point. John uses ἦν for the Word and ἐγένετο for everything created. The grammar encodes the theology.</div>`,

  alphabet: [
    {ch:'ἦν',        name:'was (imperfect)',       sound:'en',         n:1, t:true},
    {ch:'ἐγένετο',   name:'came into being (aor.)',sound:'egeneto',    n:2, t:true},
    {ch:'ἀρχή',      name:'beginning / origin',    sound:'arche',      n:3, t:true},
    {ch:'πρός',      name:'with / toward (prep.)', sound:'pros',       n:4, t:true},
    {ch:'χωρίς',     name:'apart from / without',  sound:'choris',     n:5, t:true},
    {ch:'ζωή',       name:'life (divine)',          sound:'zoe',        n:6, t:true},
    {ch:'φῶς',       name:'light',                 sound:'phos',       n:7, t:true},
    {ch:'σκοτία',    name:'darkness',               sound:'skotia',     n:8, t:true},
    {ch:'κατέλαβεν', name:'overcame / grasped',    sound:'katelaben',  n:9, t:true},
    {ch:'οὐ',        name:'not (negative)',         sound:'ou',         n:10,t:true},
  ],

  focusLetters: [
    {ch:'ἦν',       name:'Was (imperfect)',   trans:'Continuous existence', desc:'ἦν = eternal pre-existence — no beginning point implied',  ex:'ἐν ἀρχῇ ἦν ὁ λόγος'},
    {ch:'ἐγένετο',  name:'Came to be (aorist)',trans:'A beginning point',  desc:'ἐγένετο = entered existence at a point in time',           ex:'πάντα δι᾽ αὐτοῦ ἐγένετο'},
    {ch:'φῶς',      name:'Light (phos)',      trans:'Light',               desc:'φῶς = divine light — life and revelation',                 ex:'τὸ φῶς ἐν τῇ σκοτίᾳ φαίνει'},
    {ch:'σκοτία',   name:'Darkness (skotia)',  trans:'Darkness',            desc:'σκοτία = spiritual darkness — cannot overcome the light',  ex:'ἡ σκοτία αὐτὸ οὐ κατέλαβεν'},
    {ch:'οὐ κατέλαβεν',name:'Did not overcome',trans:'The light wins',     desc:'κατα + λαμβάνω = to seize, overcome, comprehend',         ex:'Darkness did not overcome/grasp the light'},
  ],

  deepDive: `
    <div class="lesson-h3">Verse 1 — Ἐν ἀρχῇ ἦν ὁ λόγος</div>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;padding:1.25rem 1.5rem;margin:1rem 0 1.5rem;">
      <div style="font-family:var(--greek);font-size:1.6rem;color:var(--blue);line-height:2;margin-bottom:.75rem;">Ἐν ἀρχῇ ἦν ὁ λόγος, καὶ ὁ λόγος ἦν πρὸς τὸν θεόν, καὶ θεὸς ἦν ὁ λόγος.</div>
      <div style="font-size:.85rem;color:var(--text-mid);font-style:italic;margin-bottom:.5rem;">En arche en ho logos, kai ho logos en pros ton theon, kai theos en ho logos.</div>
      <div style="font-size:1rem;color:var(--text);font-weight:600;margin-bottom:1rem;">"In the beginning was the Word, and the Word was with God, and the Word was God."</div>
      <div style="font-size:.88rem;color:var(--text-mid);line-height:1.9;">
        <strong style="color:var(--text);">Ἐν ἀρχῇ</strong> = in the beginning (ἐν + dative of ἀρχή) &nbsp;·&nbsp;
        <strong style="color:var(--text);">ἦν</strong> = was (imperfect of εἰμί — continuous eternal existence) &nbsp;·&nbsp;
        <strong style="color:var(--text);">ὁ λόγος</strong> = the Word (article + nominative = subject) &nbsp;·&nbsp;
        <strong style="color:var(--text);">πρὸς τὸν θεόν</strong> = with/toward God (πρός + accusative = relational proximity) &nbsp;·&nbsp;
        <strong style="color:var(--text);">θεὸς ἦν ὁ λόγος</strong> = the Word was God (θεός without article = qualitative predicate — divine in nature)
      </div>
    </div>

    <div class="lesson-h3">Verse 2–3 — Οὗτος ἦν ἐν ἀρχῇ πρὸς τὸν θεόν</div>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;padding:1.25rem 1.5rem;margin:1rem 0 1.5rem;">
      <div style="font-family:var(--greek);font-size:1.5rem;color:var(--blue);line-height:2;margin-bottom:.75rem;">οὗτος ἦν ἐν ἀρχῇ πρὸς τὸν θεόν. πάντα δι᾽ αὐτοῦ ἐγένετο, καὶ χωρὶς αὐτοῦ ἐγένετο οὐδὲ ἕν ὃ γέγονεν.</div>
      <div style="font-size:.85rem;color:var(--text-mid);font-style:italic;margin-bottom:.5rem;">houtos en en arche pros ton theon. panta di' autou egeneto, kai choris autou egeneto oude hen ho gegonen.</div>
      <div style="font-size:1rem;color:var(--text);font-weight:600;margin-bottom:1rem;">"He was in the beginning with God. All things came into being through him, and apart from him not one thing came into being that has come into being."</div>
      <div style="font-size:.88rem;color:var(--text-mid);line-height:1.9;">
        <strong style="color:var(--text);">οὗτος</strong> = this one / he (demonstrative pronoun referring to the Word) &nbsp;·&nbsp;
        <strong style="color:var(--text);">πάντα</strong> = all things (neuter plural nominative) &nbsp;·&nbsp;
        <strong style="color:var(--text);">δι᾽ αὐτοῦ</strong> = through him (διά + genitive = agency) &nbsp;·&nbsp;
        <strong style="color:var(--text);">ἐγένετο</strong> = came into being (aorist — a point of beginning, unlike ἦν) &nbsp;·&nbsp;
        <strong style="color:var(--text);">χωρὶς αὐτοῦ</strong> = apart from him (χωρίς + genitive)
      </div>
    </div>

    <div class="lesson-h3">Verses 4–5 — ἐν αὐτῷ ζωὴ ἦν</div>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;padding:1.25rem 1.5rem;margin:1rem 0 1.5rem;">
      <div style="font-family:var(--greek);font-size:1.5rem;color:var(--blue);line-height:2;margin-bottom:.75rem;">ἐν αὐτῷ ζωὴ ἦν, καὶ ἡ ζωὴ ἦν τὸ φῶς τῶν ἀνθρώπων· καὶ τὸ φῶς ἐν τῇ σκοτίᾳ φαίνει, καὶ ἡ σκοτία αὐτὸ οὐ κατέλαβεν.</div>
      <div style="font-size:.85rem;color:var(--text-mid);font-style:italic;margin-bottom:.5rem;">en auto zoe en, kai he zoe en to phos ton anthropon; kai to phos en te skotia phainei, kai he skotia auto ou katelaben.</div>
      <div style="font-size:1rem;color:var(--text);font-weight:600;margin-bottom:1rem;">"In him was life, and the life was the light of men. The light shines in the darkness, and the darkness has not overcome it."</div>
      <div style="font-size:.88rem;color:var(--text-mid);line-height:1.9;">
        <strong style="color:var(--text);">ἐν αὐτῷ</strong> = in him (ἐν + dative) &nbsp;·&nbsp;
        <strong style="color:var(--text);">ζωὴ ἦν</strong> = life was (ζωή without article = qualitative — life itself was in him) &nbsp;·&nbsp;
        <strong style="color:var(--text);">τὸ φῶς τῶν ἀνθρώπων</strong> = the light of men (construct-like genitive) &nbsp;·&nbsp;
        <strong style="color:var(--text);">φαίνει</strong> = shines (present tense! — the light still shines NOW) &nbsp;·&nbsp;
        <strong style="color:var(--text);">οὐ κατέλαβεν</strong> = did not overcome/grasp (aorist — a completed failure)
      </div>
    </div>

    <div class="lesson-h3">The ἦν / ἐγένετο Contrast — Theology in Tense</div>
    <p class="lesson-p">John makes a deliberate and brilliant distinction throughout the prologue. The Word <strong>ἦν</strong> (was — imperfect, no starting point, eternal continuous existence). Everything created <strong>ἐγένετο</strong> (came into being — aorist, a beginning point in time). This distinction is not accidental. John is saying: the Word did not "come into being" — he simply was. Everything else came into being through him.</p>
    <div class="box box-fact"><strong>φαίνει in the present tense:</strong> In verse 5 John suddenly switches to the present: "the light shines (φαίνει) in the darkness." After a series of past tenses, this present tense is jarring — deliberately so. The light is not just a historical fact. It shines NOW. The Gospel is written in the present tense theologically.</div>`,

  writing: [
    {ch:'Ἐν ἀρχῇ ἦν ὁ λόγος', name:'John 1:1a — from memory', steps:['Write from memory: Ἐν ἀρχῇ ἦν ὁ λόγος','In the beginning was the Word','ἦν = imperfect — eternal, continuous, no starting point','Write 5 times in Greek script.']},
    {ch:'θεὸς ἦν ὁ λόγος',      name:'John 1:1c — the theology', steps:['Write from memory: θεὸς ἦν ὁ λόγος','The Word was God','θεός without article = qualitative (divine in nature)','ὁ λόγος with article = the subject (identified)','Write 5 times. Grammar is theology.']},
    {ch:'πάντα δι᾽ αὐτοῦ ἐγένετο', name:'John 1:3 — all things', steps:['Read aloud: panta di\' autou egeneto','All things came into being through him','ἐγένετο = aorist — a beginning point. ἦν had no beginning.','Write 5 times.']},
    {ch:'τὸ φῶς ἐν τῇ σκοτίᾳ φαίνει', name:'John 1:5a — present tense!', steps:['Read aloud: to phos en te skotia phainei','The light shines in the darkness','φαίνει = present tense — the light shines NOW, not just historically','Write 5 times. Say "shines" in the present.']},
    {ch:'ἡ σκοτία αὐτὸ οὐ κατέλαβεν', name:'John 1:5b — darkness fails', steps:['Read aloud: he skotia auto ou katelaben','The darkness did not overcome/grasp it','κατέλαβεν = aorist — a completed, failed attempt','Write 5 times. The light wins.']},
  ],

  vocab: [
    {ch:'ἀρχή',     trans:'arche',   meaning:'Beginning / Origin / Rule',  note:'Dative ἀρχῇ after ἐν — "in the beginning"'},
    {ch:'λόγος',    trans:'logos',   meaning:'Word / Reason / Logic',       note:'The pre-incarnate Christ — John 1:1'},
    {ch:'ζωή',      trans:'zoe',     meaning:'Life (divine, eternal)',       note:'The life that was in him — John 1:4'},
    {ch:'φῶς',      trans:'phos',    meaning:'Light',                       note:'Present tense φαίνει — still shining NOW'},
    {ch:'σκοτία',   trans:'skotia',  meaning:'Darkness',                    note:'Did not overcome — aorist of failure'},
    {ch:'ἐγένετο',  trans:'egeneto', meaning:'Came into being / Became',    note:'Aorist of γίνομαι — a beginning point'},
    {ch:'χωρίς',    trans:'choris',  meaning:'Apart from / Without',        note:'χωρὶς αὐτοῦ = apart from him — nothing was made'},
  ],

  scriptureRef: 'John 1:1–5',
  scripture: {
    orig:  'Ἐν ἀρχῇ ἦν ὁ λόγος, καὶ ὁ λόγος ἦν πρὸς τὸν θεόν, καὶ θεὸς ἦν ὁ λόγος. οὗτος ἦν ἐν ἀρχῇ πρὸς τὸν θεόν.',
    trans: 'En arche en ho logos, kai ho logos en pros ton theon, kai theos en ho logos. houtos en en arche pros ton theon.',
    eng:   '"In the beginning was the Word, and the Word was with God, and the Word was God. He was in the beginning with God." — John 1:1–2',
  },
  scriptureNote: 'Count how many times ἦν appears in vv.1–2 (three times). Count how many times ὁ λόγος appears (three times). The repetition is not careless — it is theological music. Each repetition deepens the claim.',
  scriptureTip: '<strong>💡 John and Genesis:</strong> ἐν ἀρχῇ = "in the beginning" — the exact same opening as Genesis 1:1 (בְּרֵאשִׁית in Hebrew, Ἐν ἀρχῇ in the Greek Septuagint). John is writing a new Genesis. The first creation began "in the beginning." The new creation also begins "in the beginning" — with the Word made flesh.',

  quiz: [
    {q:'What is the theological significance of John using ἦν (en) for the Word but ἐγένετο (egeneto) for creation?', ch:'', opts:['They are synonyms — John uses them interchangeably','ἦν = imperfect, eternal continuous existence (no beginning); ἐγένετο = aorist, came into being at a point in time. The Word was — creation became.','ἦν = active voice; ἐγένετο = passive voice — the difference is only grammatical','ἦν is used for persons; ἐγένετο for things'], ans:1, ok:'Correct! ἦν (imperfect) = continuous existence with no starting point — the Word simply was. ἐγένετο (aorist) = came into being at a moment. Everything created ἐγένετο; the Word ἦν. The tense contrast encodes the doctrine of the eternal pre-existence of Christ.', no:'ἦν = imperfect, eternal existence. ἐγένετο = aorist, came into being. The Word was eternally; creation began at a point.'},
    {q:'In "θεὸς ἦν ὁ λόγος" — why does θεός lack the article while ὁ λόγος has it?', ch:'θεὸς ἦν ὁ λόγος', opts:['It is a scribal error','ὁ λόγος with article = identified subject; θεός without article = qualitative — fully divine in nature (not: identical to the whole Godhead)','θεός never takes the article in Greek','The article would make the sentence mean "God was the Word" — a reversal John wants to avoid, to maintain the distinction of persons'], ans:3, ok:'Correct! Both answers B and D are related and valid. ὁ λόγος = the identified subject. θεός without article = qualitative predicate (fully divine). The article on θεός would also have reversed the sentence or collapsed the distinction between Father and Word. The grammar is precise Trinitarian theology.', no:'ὁ λόγος with article = identified subject. θεός without = qualitative (fully divine). Without the article on θεός, John also avoids reversing the statement or collapsing Father and Son.'},
    {q:'Why does John use the present tense φαίνει ("shines") in verse 5 after a series of past tenses?', ch:'τὸ φῶς ἐν τῇ σκοτίᾳ φαίνει', opts:['It is a grammatical mistake','The present tense was simply easier to write','The shift to present is deliberate — the light shines NOW, not just historically. The Gospel event is perpetually present.','φαίνει is actually aorist — not present'], ans:2, ok:'Correct! The sudden present φαίνει after past tenses (ἦν, ἐγένετο) is deliberate. The light is not merely a historical fact — it shines in the present moment. John\'s theology is not a museum piece; it is a living reality. The light still shines in the darkness right now.', no:'φαίνει (present) after past tenses is deliberate — the light shines NOW. The Gospel is not just historical record but living reality.'},
    {q:'What does πάντα δι᾽ αὐτοῦ ἐγένετο mean?', ch:'πάντα δι᾽ αὐτοῦ ἐγένετο', opts:['"All people believed in him"','"Everything came into being through him"','"All things will be restored to him"','"He became all things to all people"'], ans:1, ok:'Correct! πάντα = all things (neuter plural) · δι᾽ αὐτοῦ = through him (διά + genitive of agency) · ἐγένετο = came into being (aorist). Everything that exists came into being through the Word. This is the basis of John\'s cosmic Christology.', no:'πάντα (all things) + δι᾽ αὐτοῦ (through him) + ἐγένετο (came into being). Everything was made through the Word.'},
    {q:'What does ἡ σκοτία αὐτὸ οὐ κατέλαβεν mean — and what are the two possible meanings of κατελαβεν?', ch:'ἡ σκοτία αὐτὸ οὐ κατέλαβεν', opts:['"The darkness created its own light"','"The darkness was overcome by light"','"The darkness did not overcome/grasp it" — κατα+λαμβάνω means both to seize/overcome AND to comprehend/understand','The darkness welcomed the light'], ans:2, ok:'Correct! κατα + λαμβάνω = to seize or to comprehend. ἡ σκοτία αὐτὸ οὐ κατέλαβεν can mean: (1) the darkness did not overcome the light, OR (2) the darkness did not comprehend/understand the light. John may intend both meanings simultaneously — the darkness neither defeated nor understood what it was confronting.', no:'κατελαβεν = seized/overcome OR comprehended. The darkness neither overcame the light nor understood it — both meanings may be intended.'},
  ],

  completionNote: 'You have read John 1:1–5 in Koine Greek — the opening of the Fourth Gospel in the language John wrote. You can now identify the key verbs, the theological significance of the tenses, and the structure of John\'s Christological argument.',
  nextDay: 'Day 3: The Lord\'s Prayer in Latin →',
};
