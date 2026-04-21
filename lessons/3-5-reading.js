/* ═══════════════════════════════════════
   LESSON: Week 3 · Day 5 · Three Languages
   Reading John 1:1 in Hebrew, Greek & Latin
   ═══════════════════════════════════════ */

LESSONS['3-5-Hebrew'] = {
  color:    'gold',
  subtitle: 'Week 3 · Day 5 · Integrative Reading',
  title:    'John 1:1 in Three Languages',
  intro:    'Today you bring together everything you have learned. You will read the opening verse of John\'s Gospel in Biblical Hebrew (the Targum tradition), Koine Greek (the original), and Ecclesiastical Latin (the Vulgate). One verse. Three languages. Three windows into the same eternal truth.',
  sections: ['Introduction','The Greek Original','The Latin Vulgate','The Hebrew Tradition','Word by Word','Quiz','Complete'],

  beforeYouBegin: `
    <p class="lesson-p"><strong>This is an integrative lesson.</strong> No new grammar rules today — instead you apply what you have learned across all three languages to read and understand one of the most profound sentences ever written.</p>
    <div class="box box-fact"><strong>📜 Why John 1:1 in three languages?</strong> The Bible was composed in Hebrew and Greek. Jerome translated both into Latin around AD 405. Later the Hebrew New Testament tradition (Shem-Tov's Matthew, DuTillet Matthew) provides Hebrew versions of NT texts. Reading the same verse across languages reveals both the unity of the text and the subtle theological freight each language carries.</div>
    <div class="box box-tip"><strong>💡 The goal:</strong> By the end of this lesson you will be able to read each version aloud, identify every key word, and explain the grammatical function of at least three words in each language. This is real biblical scholarship at its beginning level.</div>`,

  alphabetIntro: 'Three versions of John 1:1 — Greek, Latin, and Hebrew — displayed side by side.',
  alphabetNotes: `<div class="box box-note"><strong>The three texts:</strong> Greek = UBS5 critical text · Latin = Nova Vulgata (Jerome's translation) · Hebrew = translation reflecting the Hebrew New Testament tradition, using the vocabulary of the Hebrew Bible.</div>`,

  alphabet: [
    {ch:'Ἐν',    name:'Greek: In',      sound:'en',          n:1, t:true},
    {ch:'ἀρχῇ',  name:'Greek: beginning',sound:'arche',      n:2, t:true},
    {ch:'ἦν',    name:'Greek: was',     sound:'en',          n:3, t:true},
    {ch:'λόγος', name:'Greek: Word',    sound:'logos',       n:4, t:true},
    {ch:'In',    name:'Latin: In',      sound:'in',          n:5, t:true},
    {ch:'principio',name:'Latin: beginning',sound:'principio',n:6,t:true},
    {ch:'erat',  name:'Latin: was',     sound:'erat',        n:7, t:true},
    {ch:'Verbum',name:'Latin: Word',    sound:'Verbum',      n:8, t:true},
    {ch:'בְּ',   name:'Hebrew: In',     sound:'be-',         n:9, t:true},
    {ch:'רֵאשִׁית',name:'Hebrew: beginning',sound:'reshit',  n:10,t:true},
    {ch:'הָיָה', name:'Hebrew: was',    sound:'hayah',       n:11,t:true},
    {ch:'הַדָּבָר',name:'Hebrew: Word', sound:'ha-davar',    n:12,t:true},
  ],

  focusLetters: [
    {ch:'λόγος',    name:'Greek Logos',  trans:'Word/Reason', desc:'Nominative — subject of the sentence',    ex:'ὁ λόγος ἦν πρὸς τὸν θεόν'},
    {ch:'Verbum',   name:'Latin Verbum', trans:'Word',        desc:'Nominative — Jerome\'s translation of Logos',ex:'In principio erat Verbum'},
    {ch:'הַדָּבָר', name:'Hebrew Davar', trans:'The Word',    desc:'Definite noun — ha + davar',              ex:'בְּרֵאשִׁית הָיָה הַדָּבָר'},
    {ch:'θεός',     name:'Greek Theos',  trans:'God',         desc:'Without article — qualitative predicate',  ex:'θεὸς ἦν ὁ λόγος'},
    {ch:'Deus',     name:'Latin Deus',   trans:'God',         desc:'Nominative — Jerome follows Greek grammar', ex:'et Deus erat Verbum'},
  ],

  deepDive: `
    <div class="lesson-h3">The Greek Original — Ἐν ἀρχῇ ἦν ὁ λόγος</div>

    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;overflow:hidden;margin:1.25rem 0;">
      <table style="width:100%;border-collapse:collapse;font-size:.9rem;">
        <thead><tr style="background:var(--bg3);"><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Greek Word</th><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Grammar</th><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Meaning</th></tr></thead>
        <tbody>
          <tr><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.2rem;color:var(--blue);">Ἐν</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Preposition + dative</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">In</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.2rem;color:var(--blue);">ἀρχῇ</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Dat. sing. fem.</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">beginning</td></tr>
          <tr><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.2rem;color:var(--blue);">ἦν</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Imperfect ind. 3s of εἰμί</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">was (continuous)</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.2rem;color:var(--blue);">ὁ λόγος</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Art. + Nom. sing. masc.</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">the Word (subject)</td></tr>
          <tr><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.2rem;color:var(--blue);">καὶ ὁ λόγος</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Conj. + art. + nom.</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">and the Word</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.2rem;color:var(--blue);">ἦν πρὸς τὸν θεόν</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Verb + prep. + acc.</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">was with/toward God</td></tr>
          <tr><td style="padding:.5rem .8rem;font-family:var(--greek);font-size:1.2rem;color:var(--blue);">θεὸς ἦν ὁ λόγος</td><td style="padding:.5rem .8rem;color:var(--text-mid);">Pred. nom. without art.</td><td style="padding:.5rem .8rem;color:var(--text-mid);">The Word was God</td></tr>
        </tbody>
      </table>
    </div>

    <div class="box box-fact"><strong>The critical third clause:</strong> θεὸς ἦν ὁ λόγος — "The Word was God." Notice: ὁ λόγος has the article (identifying the subject — the Word). θεός has NO article (it is the predicate — describing what the Word is). This is called a qualitative predicate nominative. It means "the Word was fully divine in nature" — not "the Word was the God" (which would make them identical) and not "the Word was a god" (which the grammar does not support). Grammar resolves the theology.</div>

    <div class="lesson-h3">The Latin Vulgate — In principio erat Verbum</div>

    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;overflow:hidden;margin:1.25rem 0;">
      <table style="width:100%;border-collapse:collapse;font-size:.9rem;">
        <thead><tr style="background:var(--bg3);"><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Latin Word</th><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Grammar</th><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Meaning</th></tr></thead>
        <tbody>
          <tr><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;font-size:1.05rem;">In</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Prep. + ablative</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">In</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;font-size:1.05rem;">principio</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Abl. sing. neut. (2nd decl.)</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">beginning</td></tr>
          <tr><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;font-size:1.05rem;">erat</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Imperf. ind. 3s of esse</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">was (continuous)</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;font-size:1.05rem;">Verbum</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Nom. sing. neut. (2nd decl.)</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Word (subject)</td></tr>
          <tr><td style="padding:.5rem .8rem;color:var(--gold);font-style:italic;font-size:1.05rem;">et Deus erat Verbum</td><td style="padding:.5rem .8rem;color:var(--text-mid);">Pred. nom. — Deus nom.</td><td style="padding:.5rem .8rem;color:var(--text-mid);">and the Word was God</td></tr>
        </tbody>
      </table>
    </div>

    <div class="lesson-h3">The Hebrew Tradition — בְּרֵאשִׁית הָיָה הַדָּבָר</div>

    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;overflow:hidden;margin:1.25rem 0;">
      <table style="width:100%;border-collapse:collapse;font-size:.9rem;">
        <thead><tr style="background:var(--bg3);"><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Hebrew Word</th><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Grammar</th><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Meaning</th></tr></thead>
        <tbody>
          <tr><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.4rem;color:var(--gold);">בְּרֵאשִׁית</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Prep. בְּ + noun רֵאשִׁית</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">In the beginning</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.4rem;color:var(--gold);">הָיָה</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Qal Perfect 3ms of היה</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">was/existed</td></tr>
          <tr><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.4rem;color:var(--gold);">הַדָּבָר</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Art. הַ + noun דָּבָר</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">the Word</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.4rem;color:var(--gold);">אֶת־הָאֱלֹהִים</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Direct object marker + God</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">with/toward God</td></tr>
          <tr><td style="padding:.5rem .8rem;font-family:var(--hebrew);font-size:1.4rem;color:var(--gold);">וֵאלֹהִים הָיָה הַדָּבָר</td><td style="padding:.5rem .8rem;color:var(--text-mid);">Vav + Elohim nom. + verb + subj.</td><td style="padding:.5rem .8rem;color:var(--text-mid);">and the Word was God</td></tr>
        </tbody>
      </table>
    </div>

    <div class="lesson-h3">What the Three Languages Reveal Together</div>
    <p class="lesson-p"><strong>Greek:</strong> Uses the imperfect ἦν (was — continuous past) — the Word was already existing, continuously, before all things. Uses λόγος — the word for rational principle, speech, and the creative mind — a term both Greek philosophy and Jewish theology loaded with meaning.</p>
    <p class="lesson-p"><strong>Latin:</strong> Jerome also uses the imperfect erat — mirroring the Greek's continuous aspect. He translates λόγος as Verbum (word/speech) rather than Ratio (reason) — emphasising the personal, speaking God rather than a philosophical principle.</p>
    <p class="lesson-p"><strong>Hebrew:</strong> Uses הָיָה (hayah) — the Qal Perfect of "to be," the same root as God's name יהוה (YHWH). And for "Word" it uses הַדָּבָר (ha-davar) — the word that also means "thing/deed" — linking the speaking of God directly to the creating and acting of God. דָּבָר in Genesis 1 is God's creative speech. John is saying: that creative word became flesh.</p>
    <div class="box box-fact"><strong>The Convergence:</strong> Three languages, three traditions, one declaration. The eternal creative Word-Reason-Speech-Deed of God entered history in the person of Jesus of Nazareth. Greek philosophy, Hebrew Scripture, and Latin theology all converge at this point. You are now able to read this convergence in the original languages.</div>`,

  writing: [
    {ch:'ἐν ἀρχῇ ἦν ὁ λόγος', name:'Greek — John 1:1a', steps:['Say it aloud: en ar-KHEI en ho LO-gos','ἐν = in · ἀρχῇ = beginning (dative) · ἦν = was · ὁ λόγος = the Word','Write 5 times in Greek script following the letters carefully','This is the original. You are writing Scripture.']},
    {ch:'In principio erat Verbum', name:'Latin — John 1:1a (Vulgate)', steps:['Say it aloud: in prin-CHI-pi-oh EH-raht VER-bum','In = in · principio = beginning (ablative) · erat = was · Verbum = Word','Write 5 times in Latin','Jerome wrote this around AD 405. You are writing his translation.']},
    {ch:'בְּרֵאשִׁית הָיָה הַדָּבָר', name:'Hebrew — John 1:1a', steps:['Say it aloud: be-re-SHIT ha-YAH ha-da-VAR','Read right to left: בְּרֵאשִׁית (in the beginning) · הָיָה (was) · הַדָּבָר (the Word)','Write 5 times right to left in Hebrew','Feel the connection to Genesis 1:1 — "In the beginning" — the same opening words.']},
    {ch:'θεὸς ἦν ὁ λόγος', name:'Greek — John 1:1c (The Word was God)', steps:['Say it aloud: the-OS en ho LO-gos','Notice: θεός has no article · ὁ λόγος has the article — this identifies logos as subject','Write 5 times. This is the crux of the verse theologically.','Grammar determines theology: the Word is fully divine but not identical to the Father.']},
    {ch:'et Deus erat Verbum', name:'Latin — John 1:1c', steps:['Say it aloud: et DAY-oos EH-raht VER-bum','et = and · Deus = God (nom.) · erat = was · Verbum = Word (nom. — subject)','Write 5 times','Jerome faithfully mirrors the Greek grammar.']},
  ],

  vocab: [
    {ch:'ἀρχή',      trans:'arche',      meaning:'Beginning / Origin / Rule', note:'Greek — dative: ἀρχῇ'},
    {ch:'principium',trans:'principium', meaning:'Beginning / First principle',note:'Latin — ablative: principio'},
    {ch:'רֵאשִׁית',  trans:'reshit',     meaning:'Beginning / First',          note:'Hebrew — with בְּ = in the beginning'},
    {ch:'ἦν',        trans:'en',         meaning:'Was (imperfect of εἰμί)',    note:'Greek — continuous past existence'},
    {ch:'erat',      trans:'erat',       meaning:'Was (imperfect of esse)',     note:'Latin — mirrors Greek aspect'},
    {ch:'הָיָה',     trans:'hayah',      meaning:'Was / Existed',              note:'Hebrew — same root as YHWH'},
    {ch:'πρὸς τὸν θεόν',trans:'pros ton theon',meaning:'With/toward God',     note:'Greek — accusative after πρός'},
  ],

  scriptureRef: 'John 1:1',
  scripture: {
    orig:  'Ἐν ἀρχῇ ἦν ὁ λόγος, καὶ ὁ λόγος ἦν πρὸς τὸν θεόν, καὶ θεὸς ἦν ὁ λόγος.',
    trans: 'In principio erat Verbum, et Verbum erat apud Deum, et Deus erat Verbum.',
    eng:   '"In the beginning was the Word, and the Word was with God, and the Word was God." — John 1:1',
  },
  scriptureNote: 'Read all three versions aloud. Greek first, then Latin, then Hebrew. Each time you are reading the same divine truth through a different linguistic lens — each one revealing something the others shade differently.',
  scriptureTip:  '<strong>💡 You have arrived:</strong> Three weeks ago you did not know the Hebrew alphabet. Today you can read John 1:1 in the languages in which the Church has always read Scripture. This is not the end — it is the beginning of a lifetime of reading.',

  quiz: [
    {q:'Why does John use the imperfect ἦν (was) rather than the aorist (began to be) in John 1:1?', ch:'ἦν', opts:['It is a grammatical convention with no meaning','The imperfect expresses continuous existence — the Word was already existing before all things','The aorist would be grammatically incorrect','John preferred the imperfect tense throughout his Gospel'], ans:1, ok:'Correct! The imperfect ἦν expresses continuous, ongoing existence in the past — "the Word was already in existence." If John had written the aorist ἐγένετο (came into being), it would imply the Word had a beginning. ἦν asserts eternal pre-existence.', no:'ἦν (imperfect) = continuous past existence — the Word was already existing. The aorist would imply a starting point. The tense choice is theologically deliberate.'},
    {q:'In θεὸς ἦν ὁ λόγος, why does θεός lack the article while ὁ λόγος has it?', ch:'θεὸς ἦν ὁ λόγος', opts:['It is a scribal error in the manuscripts','The article on ὁ λόγος identifies it as the subject; θεός without article = qualitative (fully divine in nature)','θεός without article means "a god" — a lesser divine being','Greek does not use articles with proper names'], ans:1, ok:'Correct! ὁ λόγος with the article = the subject (identified). θεός without article = predicate nominative, qualitative — describing the nature/quality of the Word. The Word is fully divine. The grammar neither says "the Word is the whole Godhead" nor "the Word is merely a god."', no:'Article on ὁ λόγος = identifies the subject. No article on θεός = qualitative predicate. The Word is fully divine in nature — neither identical to the whole Godhead nor a lesser being.'},
    {q:'How does the Hebrew word הַדָּבָר (ha-davar) connect John 1:1 to Genesis 1?', ch:'הַדָּבָר', opts:['It is a coincidence — the same word was available','Davar means "word/deed/thing" — in Genesis 1 God creates by speaking; John says that creative Word is a Person','The Hebrew NT always uses davar for Logos as a matter of convention','The connection was made by later translators, not originally intended'], ans:1, ok:'Correct! דָּבָר (davar) means word, deed, and thing. In Genesis 1 God creates by speaking — "And God said (וַיֹּאמֶר)... and it was." John is saying: that same creative Word — the one that brought all things into existence — became flesh. The Hebrew makes the Genesis connection explicit.', no:'דָּבָר = word/deed/thing. In Genesis 1 God creates by speaking. John says that creative Word is the pre-incarnate Christ. The Hebrew makes the Genesis 1 connection explicit and profound.'},
    {q:'What did Jerome choose as the Latin translation of Greek λόγος — and what did this emphasis?', ch:'', opts:['Ratio (reason) — emphasising the philosophical principle','Sapientia (wisdom) — emphasising divine wisdom','Verbum (word/speech) — emphasising the personal, speaking God','Spiritus (spirit) — emphasising the divine breath'], ans:2, ok:'Correct! Jerome chose Verbum (word/speech) over Ratio (reason). This was a deliberate theological choice — emphasising the personal God who speaks rather than an impersonal rational principle. The Verbum is not a philosophical abstraction but a speaking, acting Person.', no:'Jerome chose Verbum (word/speech) not Ratio (reason) — emphasising the personal God who speaks and acts rather than a philosophical principle.'},
    {q:'What does it mean that הָיָה (hayah — "was") shares a root with יהוה (YHWH)?', ch:'הָיָה', opts:['It is a coincidence of spelling with no significance','YHWH means "He who is/was/will be" — the self-existent One. John\'s use of hayah connects the Word\'s existence to God\'s own name','It means the Word was only the Father, not a distinct person','Hebrew verbs all share similar roots'], ans:1, ok:'Correct! יהוה (YHWH) is understood as meaning "He Who Is" or "He Who Causes to Be" — from the root היה (to be/exist). When John\'s Gospel is translated into Hebrew using הָיָה, it connects the eternal existence of the Word directly to the divine Name revealed to Moses. The Word exists in the same eternal, self-existent way God himself exists.', no:'יהוה = "He Who Is/Was/Will Be" from the root היה (to be). Using הָיָה for the Word\'s existence connects it to God\'s own self-existent nature revealed in the divine Name.'},
  ],

  completionNote: 'You have read John 1:1 in Koine Greek, Ecclesiastical Latin, and Biblical Hebrew — parsing the grammar, understanding the theology, and hearing the three great languages of the Christian tradition speaking in unison.',
  nextDay: 'Week 4 · Day 1: Hebrew Grammar II →',
};
