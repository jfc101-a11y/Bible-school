/* ═══════════════════════════════════════
   LESSON: Week 6 · Day 5 · Koine Greek XI
   Greek Participles — Introduction
   ═══════════════════════════════════════ */

LESSONS['6-5-Greek'] = {
  color:    'blue',
  subtitle: 'Week 6 · Day 5 · Koine Greek XI',
  title:    'Greek Participles — The Verbal Adjective',
  intro:    'The participle has been called "the chief joy of the Greek language" by grammarians, and also one of its greatest challenges. A participle is a verbal adjective — it describes action while also functioning grammatically like a noun-modifier, with its own case, gender, and number. Today you meet this powerful and pervasive Greek form.',
  sections: ['Introduction','What Is a Participle','The Present Participle','Reading Participles','Key Examples','Quiz','Complete'],

  beforeYouBegin: `
    <p class="lesson-p"><strong>A participle does two jobs simultaneously.</strong> It is a verb (it has tense and voice, and can take an object) AND it is an adjective (it has case, gender, and number, and modifies a noun). English participles end in "-ing" or "-ed": "the believing man," "the broken cup." Greek participles work similarly but appear constantly — far more often than in English.</p>
    <div class="box box-fact"><strong>📜 Why participles matter for reading:</strong> ὁ πιστεύων (ho pisteuon) = "the one believing" or "he who believes." This phrase appears dozens of times in John\'s Gospel: "everyone believing (πᾶς ὁ πιστεύων) in him." Once you recognise participles, huge portions of John, Paul, and the rest of the NT open up that previously looked like unfamiliar vocabulary.</div>
    <div class="box box-tip"><strong>💡 The key recognition pattern:</strong> Present Active Participles end in -ων, -ουσα, -ον (masc./fem./neut.) attached to the verb stem. πιστεύ-ων = believing. Learn this ending pattern and you will spot participles throughout the New Testament.</div>`,

  alphabetIntro: 'The Present Active Participle paradigm — using πιστεύω (to believe).',
  alphabetNotes: `<div class="box box-note"><strong>Three genders, one concept:</strong> ὁ πιστεύων (masc. — the believing man) · ἡ πιστεύουσα (fem. — the believing woman) · τὸ πιστεῦον (neut. — the believing thing). The participle agrees in gender with whatever it modifies.</div>`,

  alphabet: [
    {ch:'πιστεύων',  name:'Masc. Nom. Sing.', sound:'pisteuon — believing (m.)', n:1, t:true},
    {ch:'πιστεύουσα', name:'Fem. Nom. Sing.', sound:'pisteuousa — believing (f.)',n:2, t:true},
    {ch:'πιστεῦον',  name:'Neut. Nom. Sing.', sound:'pisteuon — believing (n.)', n:3, t:true},
    {ch:'ὁ λέγων',   name:'The one saying',   sound:'ho legon',                   n:4, t:true},
    {ch:'ὁ ἐρχόμενος',name:'The one coming',  sound:'ho erchomenos',              n:5, t:true},
    {ch:'πᾶς ὁ πιστεύων',name:'Everyone believing',sound:'pas ho pisteuon',       n:6, t:true},
    {ch:'γεγραμμένον',name:'Having been written',sound:'gegrammenon — perfect part.',n:7,t:true},
    {ch:'ὁ ποιῶν',    name:'The one doing',   sound:'ho poion',                    n:8, t:true},
    {ch:'βλέπων',     name:'Seeing',          sound:'blepon',                      n:9, t:true},
    {ch:'ἀκούων',     name:'Hearing',         sound:'akouon',                      n:10,t:true},
  ],

  focusLetters: [
    {ch:'-ων, -ουσα, -ον', name:'Pres. Act. Part. endings', trans:'Masc./Fem./Neut.', desc:'The core participle endings to memorise',         ex:'πιστεύ-ων (m.) πιστεύ-ουσα (f.) πιστεῦ-ον (n.)'},
    {ch:'ὁ πιστεύων',    name:'The believing one',         trans:'Article + participle = noun phrase', desc:'Functions exactly like a noun: "the believer"', ex:'πᾶς ὁ πιστεύων — everyone who believes (John 3:16)'},
    {ch:'ὁ ἐρχόμενος',   name:'The Coming One',            trans:'Middle participle',  desc:'A title for the Messiah — "the one who comes"',  ex:'εὐλογημένος ὁ ἐρχόμενος — blessed is he who comes'},
    {ch:'γεγραμμένον',   name:'Having been written',        trans:'Perfect Passive Part.',desc:'Permanent written record — used for Scripture citations', ex:'καθὼς γέγραπται — as it has been/stands written'},
    {ch:'λέγων',          name:'Saying (Present Active)',   trans:'Introduces speech',  desc:'Extremely common in narrative — "he answered, saying..."', ex:'ἀπεκρίθη λέγων — he answered, saying'},
  ],

  deepDive: `
    <div class="lesson-h3">What a Participle Is</div>
    <p class="lesson-p">A participle combines verb and adjective. As a <strong>verb</strong>, it has tense (present, aorist, perfect) and voice (active, passive, middle), and it can govern an object. As an <strong>adjective</strong>, it has case, gender, and number, and it modifies a noun or stands in for one.</p>

    <div class="lesson-h3">The Present Active Participle Paradigm</div>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;overflow:hidden;margin:1.25rem 0;">
      <table style="width:100%;border-collapse:collapse;font-size:.88rem;">
        <thead><tr style="background:var(--bg3);"><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Gender</th><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Nominative Sing.</th><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Translation</th></tr></thead>
        <tbody>
          <tr><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Masculine</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.2rem;color:var(--blue);">πιστεύων</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">believing (m.)</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Feminine</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.2rem;color:var(--blue);">πιστεύουσα</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">believing (f.)</td></tr>
          <tr><td style="padding:.5rem .8rem;color:var(--text-mid);">Neuter</td><td style="padding:.5rem .8rem;font-family:var(--greek);font-size:1.2rem;color:var(--blue);">πιστεῦον</td><td style="padding:.5rem .8rem;color:var(--text-mid);">believing (n.)</td></tr>
        </tbody>
      </table>
    </div>
    <p class="lesson-p">Like any adjective, participles also decline through all the cases. ὁ πιστεύων (nom.) · τοῦ πιστεύοντος (gen.) · τῷ πιστεύοντι (dat.) · τὸν πιστεύοντα (acc.) — the endings follow patterns similar to what you have already learned for nouns and adjectives.</p>

    <div class="lesson-h3">The Article + Participle = A Noun Phrase</div>
    <p class="lesson-p">One of the most common and powerful constructions in the New Testament is <strong>article + participle</strong>, which functions exactly like a noun: "the one who [verb]s" or simply "the [verb]er."</p>
    <div class="box box-fact"><strong>Examples throughout the NT:</strong> ὁ πιστεύων = the believer / the one believing (John 3:16, 18, 36) · ὁ σπείρων = the sower (Matthew 13:3) · ὁ ἐρχόμενος = the Coming One, a messianic title (Matthew 11:3, "are you ὁ ἐρχόμενος?") · ὁ ἔχων ὦτα = the one having ears (Matthew 13:9, "he who has ears, let him hear").</div>

    <div class="lesson-h3">πᾶς ὁ πιστεύων — Everyone Who Believes</div>
    <p class="lesson-p">John 3:16 contains one of the most famous participial phrases in Scripture: <strong>πᾶς ὁ πιστεύων εἰς αὐτὸν</strong> = "everyone believing in him" / "whoever believes in him." πᾶς (all/every) + ὁ πιστεύων (the believing one) creates a universal, open invitation — not a closed category but anyone, at any time, who comes to believe.</p>

    <div class="lesson-h3">Participles of λέγω — Introducing Speech</div>
    <p class="lesson-p">The participle <strong>λέγων</strong> (saying) is extremely common in narrative, almost always introducing direct speech: "he answered, saying (ἀπεκρίθη λέγων), ...". This construction occurs hundreds of times in the Gospels. The participle "saying" functions almost like a colon in English — it announces that a quotation follows.</p>

    <div class="lesson-h3">Perfect Passive Participle — γεγραμμένον</div>
    <p class="lesson-p"><strong>γέγραπται</strong> (it has been written / it stands written) and its participial relative are used to introduce Scripture quotations, emphasizing that the written word has permanent, abiding authority — not merely "it was written once" but "it stands written, with continuing force."</p>
    <div class="box box-tip"><strong>💡 Memory:</strong> Present Active Participle = -ων (m.) / -ουσα (f.) / -ον (n.). Article + Participle = "the one who [verb]s." Look for these endings throughout the NT — they are everywhere once you know what to look for.</div>`,

  writing: [
    {ch:'ὁ πιστεύων',     name:'The believing one', steps:['ὁ (masc. nom. article) + πιστεύων (pres. act. part., masc. nom.)','Pronunciation: ho pis-TEF-on','Functions as a complete noun phrase: "the believer / he who believes"','Write 10 times. This phrase appears throughout John\'s Gospel.']},
    {ch:'πᾶς ὁ πιστεύων', name:'Everyone who believes (John 3:16)', steps:['πᾶς (all/every) + ὁ πιστεύων (the believing one)','Pronunciation: pas ho pis-TEF-on','"Everyone believing" — a universal, open invitation','Write 10 times. Among the most famous phrases in the NT.']},
    {ch:'ὁ ἐρχόμενος',    name:'The Coming One', steps:['ὁ (masc. nom. article) + ἐρχόμενος (pres. middle part. of ἔρχομαι)','Pronunciation: ho er-KHO-meh-nos','A messianic title — used by John the Baptist\'s disciples asking if Jesus is "the one who is to come"','Write 10 times.']},
    {ch:'ἀπεκρίθη λέγων', name:'He answered, saying', steps:['ἀπεκρίθη (aorist of ἀποκρίνομαι — he answered) + λέγων (pres. act. participle — saying)','Pronunciation: a-pe-KREE-thee LEH-gon','One of the most common narrative formulas in the Gospels, introducing direct speech','Write 10 times.']},
    {ch:'καθὼς γέγραπται', name:'As it stands written', steps:['καθώς (just as) + γέγραπται (perfect passive — it has been/stands written)','Pronunciation: ka-THOS GHEH-grap-tai','Used by Paul throughout Romans to introduce OT quotations','Write 5 times. The perfect tense gives Scripture abiding, present authority.']},
  ],

  vocab: [
    {ch:'πιστεύων',   trans:'pisteuon',   meaning:'Believing (masc. nom.)', note:'ὁ πιστεύων = the believer'},
    {ch:'λέγων',       trans:'legon',      meaning:'Saying',                 note:'Introduces direct speech constantly'},
    {ch:'ἐρχόμενος',  trans:'erchomenos', meaning:'Coming',                  note:'ὁ ἐρχόμενος = the Coming One, messianic title'},
    {ch:'σπείρων',     trans:'speiron',    meaning:'Sowing',                  note:'ὁ σπείρων = the sower, Matthew 13:3'},
    {ch:'ἔχων',        trans:'echon',      meaning:'Having',                  note:'ὁ ἔχων ὦτα = he who has ears'},
    {ch:'γέγραπται',  trans:'gegraptai',  meaning:'It has been/stands written',note:'Perfect passive — introduces OT quotes'},
    {ch:'ἀκούων',      trans:'akouon',     meaning:'Hearing',                 note:'Pairs with βλέπων (seeing) frequently'},
  ],

  scriptureRef: 'John 3:16',
  scripture: {
    orig:  'οὕτως γὰρ ἠγάπησεν ὁ θεὸς τὸν κόσμον, ὥστε τὸν υἱὸν τὸν μονογενῆ ἔδωκεν, ἵνα πᾶς ὁ πιστεύων εἰς αὐτὸν μὴ ἀπόληται ἀλλ᾽ ἔχῃ ζωὴν αἰώνιον.',
    trans: "houtos gar egapesen ho theos ton kosmon, hoste ton huion ton monogene edoken, hina pas ho pisteuon eis auton me apoletai all' eche zoen aionion.",
    eng:   '"For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life." — John 3:16',
  },
  scriptureNote: 'Find the participle: πᾶς ὁ πιστεύων (everyone believing / whoever believes). This is the climax of the verse — God\'s love, expressed in the gift of the Son, is received by anyone who fits the participial description: "the one believing."',
  scriptureTip: '<strong>💡 An open category:</strong> πᾶς ὁ πιστεύων is grammatically open-ended — it does not specify nationality, gender, social status, or background. It simply describes an action: believing. Anyone who performs this action fits the category. The participle grammatically embodies the universal scope of the gospel invitation.',

  quiz: [
    {q:'What two grammatical functions does a Greek participle combine?', ch:'', opts:['Noun and pronoun','Verb and adjective — it has tense/voice (verb) and case/gender/number (adjective)','Preposition and conjunction','Article and noun'], ans:1, ok:'Correct! A participle is simultaneously a verb (with tense and voice, can take an object) and an adjective (with case, gender, and number, modifying a noun). This dual nature makes it one of the most flexible and frequent forms in Greek.', no:'Participle = verb + adjective combined. It has tense/voice (verbal) and case/gender/number (adjectival).'},
    {q:'What are the three gender endings of the Present Active Participle (nominative singular)?', ch:'', opts:['-ος, -η, -ον','-ων, -ουσα, -ον','-ης, -ις, -υς','-μι, -σι, -τι'], ans:1, ok:'Correct! -ων (masc.), -ουσα (fem.), -ον (neut.). πιστεύων (m.), πιστεύουσα (f.), πιστεῦον (n.). These are the core Present Active Participle endings to memorise.', no:'-ων (m.), -ουσα (f.), -ον (n.) — the Present Active Participle endings. πιστεύων, πιστεύουσα, πιστεῦον.'},
    {q:'What does the construction "article + participle" (e.g. ὁ πιστεύων) function as?', ch:'ὁ πιστεύων', opts:['An adverb modifying a verb','A complete noun phrase — "the one who [verb]s" or "the [verb]er"','A conjunction joining two clauses','A preposition indicating location'], ans:1, ok:'Correct! Article + Participle = a noun phrase meaning "the one who [verb]s." ὁ πιστεύων = "the believer / he who believes." This construction appears constantly throughout the NT, especially in John.', no:'Article + Participle = noun phrase: "the one who [verb]s." ὁ πιστεύων = the believer.'},
    {q:'In John 3:16, what does πᾶς ὁ πιστεύων mean, and what is significant about its grammatical openness?', ch:'πᾶς ὁ πιστεύων', opts:['"Some who believe" — a limited, exclusive group','"Everyone believing / whoever believes" — grammatically open to anyone who performs the action of believing, regardless of background','"The apostles who believe" — referring only to the twelve','"Israel who believes" — referring only to the Jewish people'], ans:1, ok:'Correct! πᾶς ὁ πιστεύων = "everyone believing / whoever believes." The participle describes an action (believing) rather than a fixed identity — grammatically, ANYONE who performs this action fits the category. This embodies the universal scope of the gospel invitation.', no:'πᾶς ὁ πιστεύων = "everyone who believes" — open to anyone who performs the action of believing, with no restriction on identity or background.'},
    {q:'What does ὁ ἐρχόμενος mean, and in what context is it used as a title?', ch:'ὁ ἐρχόμενος', opts:['"The one who left" — used of someone departing','"The Coming One" — a messianic title, e.g. when John the Baptist\'s disciples ask if Jesus is "the one who is to come"','"The one who fell" — used of judgment','"The one who slept" — used of death'], ans:1, ok:'Correct! ὁ ἐρχόμενος = "the Coming One" — used as a messianic title. In Matthew 11:3, John the Baptist\'s disciples ask Jesus, "Are you ὁ ἐρχόμενος, or shall we look for another?" The participle functions as a fixed title for the expected Messiah.', no:'ὁ ἐρχόμενος = "the Coming One" — a messianic title used to ask whether Jesus is the expected Messiah (Matthew 11:3).'},
  ],

  completionNote: 'You have been introduced to Greek participles — the verbal adjective that appears constantly throughout the New Testament. You can now recognise the -ων/-ουσα/-ον pattern and read phrases like "ὁ πιστεύων" and "πᾶς ὁ πιστεύων" with understanding.',
  nextDay: 'Week 7 · Day 1: Hebrew Pronouns & Suffixes →',
};
