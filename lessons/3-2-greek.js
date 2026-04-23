/* ═══════════════════════════════════════
   LESSON: Week 3 · Day 2 · Koine Greek V
   Greek Grammar I — Nouns, the Article, First Declension
   ═══════════════════════════════════════ */

LESSONS['3-2-Greek'] = {
  color:    'blue',
  subtitle: 'Week 3 · Day 2 · Koine Greek V',
  title:    'Greek Grammar I — Nouns and the Article',
  intro:    'You know all 24 Greek letters. Now the real study begins — grammar. Greek is a highly inflected language, meaning words change their endings to show their grammatical function. Today you learn the foundation of all Greek grammar: the case system and the first declension.',
  sections: ['Introduction','Cases Explained','The Article','First Declension','First Words','Quiz','Complete'],

  beforeYouBegin: `
    <p class="lesson-p"><strong>This is a grammar lesson</strong> — the most important kind. Everything you have learned until now has been preparation. Grammar is the system that lets you understand what words are doing in a sentence — who is acting, who is being acted upon, who owns what.</p>
    <div class="box box-fact"><strong>📜 Why Greek grammar matters:</strong> Consider John 1:1 — "the Word was God." In Greek: θεὸς ἦν ὁ λόγος. A famous theological question is whether this means "the Word was God" or "the Word was a god." Greek grammar — specifically the absence of the article before θεός — answers this question decisively. Grammar is not dry technique: it is the key to understanding exactly what Scripture says.</div>
    <div class="box box-tip"><strong>💡 The approach:</strong> We introduce one concept at a time. Do not try to memorise every ending today. Understand the system first — the memorisation follows naturally through reading.</div>`,

  alphabetIntro: 'The Greek case system — the foundation of all Greek grammar.',
  alphabetNotes: `<div class="box box-note"><strong>Key principle:</strong> In English, word order shows grammatical function ("The dog bit the man" ≠ "The man bit the dog"). In Greek, word ENDINGS show function — so word order is flexible and used for emphasis instead.</div>`,

  alphabet: [
    {ch:'ὁ',  name:'Nominative', sound:'Subject',       n:1, t:true},
    {ch:'τοῦ',name:'Genitive',   sound:'Possession/Of', n:2, t:true},
    {ch:'τῷ', name:'Dative',     sound:'Indirect/To',   n:3, t:true},
    {ch:'τόν',name:'Accusative', sound:'Direct Object',  n:4, t:true},
    {ch:'ὦ',  name:'Vocative',   sound:'Address',        n:5, t:true},
    {ch:'-η', name:'Fem. Nom.',  sound:'-e ending',      n:6, t:true},
    {ch:'-ης',name:'Fem. Gen.',  sound:'-es ending',     n:7, t:true},
    {ch:'-ῃ', name:'Fem. Dat.',  sound:'-ei ending',     n:8, t:true},
    {ch:'-ην',name:'Fem. Acc.',  sound:'-en ending',     n:9, t:true},
    {ch:'-αι',name:'Fem. Nom.Pl',sound:'-ai ending',     n:10,t:true},
  ],

  focusLetters: [
    {ch:'ὁ',   name:'Nominative', trans:'Subject case',    desc:'Who is doing the action',          ex:'ὁ λόγος — the Word (subject)'},
    {ch:'τοῦ', name:'Genitive',   trans:'Of / Possession', desc:'Shows ownership or relationship',  ex:'τοῦ θεοῦ — of God'},
    {ch:'τῷ',  name:'Dative',     trans:'To / For / By',   desc:'Indirect object — receiver',       ex:'τῷ κυρίῳ — to the Lord'},
    {ch:'τόν', name:'Accusative', trans:'Direct object',   desc:'What receives the action',         ex:'τὸν λόγον — the Word (object)'},
    {ch:'ἡ',   name:'Fem. Article',trans:'The (fem.)',     desc:'Feminine definite article',        ex:'ἡ ἀγάπη — the love'},
  ],

  deepDive: `
    <div class="lesson-h3">What is a Case?</div>
    <p class="lesson-p">In Greek, nouns change their endings depending on their grammatical <em>function</em> in the sentence. This system of endings is called <em>cases</em>. Greek has five main cases:</p>

    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;overflow:hidden;margin:1.25rem 0;">
      <table style="width:100%;border-collapse:collapse;font-size:.9rem;">
        <thead><tr style="background:var(--bg3);"><th style="padding:.6rem .85rem;text-align:left;font-family:var(--display);font-size:.62rem;letter-spacing:.15em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Case</th><th style="padding:.6rem .85rem;text-align:left;font-family:var(--display);font-size:.62rem;letter-spacing:.15em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Function</th><th style="padding:.6rem .85rem;text-align:left;font-family:var(--display);font-size:.62rem;letter-spacing:.15em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">English equivalent</th><th style="padding:.6rem .85rem;text-align:left;font-family:var(--display);font-size:.62rem;letter-spacing:.15em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Example</th></tr></thead>
        <tbody>
          <tr><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text);font-weight:600;">Nominative</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Subject of verb</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-mid);">"God loves"</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.1rem;color:var(--blue);">ὁ θεός</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text);font-weight:600;">Genitive</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Possession, relationship</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-mid);">"of God," "God's"</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.1rem;color:var(--blue);">τοῦ θεοῦ</td></tr>
          <tr><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text);font-weight:600;">Dative</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Indirect object</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-mid);">"to God," "for God"</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.1rem;color:var(--blue);">τῷ θεῷ</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text);font-weight:600;">Accusative</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Direct object</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-mid);">"God" (receiving action)</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.1rem;color:var(--blue);">τὸν θεόν</td></tr>
          <tr><td style="padding:.55rem .85rem;color:var(--text);font-weight:600;">Vocative</td><td style="padding:.55rem .85rem;color:var(--text-mid);">Direct address</td><td style="padding:.55rem .85rem;color:var(--text-mid);">"O God!" "Lord!"</td><td style="padding:.55rem .85rem;font-family:var(--greek);font-size:1.1rem;color:var(--blue);">θεέ</td></tr>
        </tbody>
      </table>
    </div>

    <div class="lesson-h3">The Greek Article — ὁ, ἡ, τό</div>
    <p class="lesson-p">Greek has a <strong>definite article</strong> ("the") that changes form to match the case, number, and gender of its noun. There are three genders in Greek: masculine (ὁ), feminine (ἡ), and neuter (τό). The article is one of the most powerful tools in Greek exegesis — its presence or absence changes meaning significantly.</p>

    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;overflow:hidden;margin:1.25rem 0;">
      <table style="width:100%;border-collapse:collapse;font-size:.9rem;">
        <thead><tr style="background:var(--bg3);"><th style="padding:.5rem .75rem;font-family:var(--display);font-size:.62rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);text-align:left;">Case</th><th style="padding:.5rem .75rem;font-family:var(--display);font-size:.62rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);text-align:center;">Masc.</th><th style="padding:.5rem .75rem;font-family:var(--display);font-size:.62rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);text-align:center;">Fem.</th><th style="padding:.5rem .75rem;font-family:var(--display);font-size:.62rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);text-align:center;">Neut.</th></tr></thead>
        <tbody>
          <tr><td style="padding:.5rem .75rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Nominative (subject)</td><td style="padding:.5rem .75rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.3rem;color:var(--blue);text-align:center;">ὁ</td><td style="padding:.5rem .75rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.3rem;color:var(--blue);text-align:center;">ἡ</td><td style="padding:.5rem .75rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.3rem;color:var(--blue);text-align:center;">τό</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.5rem .75rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Genitive (of)</td><td style="padding:.5rem .75rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.3rem;color:var(--blue);text-align:center;">τοῦ</td><td style="padding:.5rem .75rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.3rem;color:var(--blue);text-align:center;">τῆς</td><td style="padding:.5rem .75rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.3rem;color:var(--blue);text-align:center;">τοῦ</td></tr>
          <tr><td style="padding:.5rem .75rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Dative (to/for)</td><td style="padding:.5rem .75rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.3rem;color:var(--blue);text-align:center;">τῷ</td><td style="padding:.5rem .75rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.3rem;color:var(--blue);text-align:center;">τῇ</td><td style="padding:.5rem .75rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.3rem;color:var(--blue);text-align:center;">τῷ</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.5rem .75rem;color:var(--text-mid);">Accusative (object)</td><td style="padding:.5rem .75rem;font-family:var(--greek);font-size:1.3rem;color:var(--blue);text-align:center;">τόν</td><td style="padding:.5rem .75rem;font-family:var(--greek);font-size:1.3rem;color:var(--blue);text-align:center;">τήν</td><td style="padding:.5rem .75rem;font-family:var(--greek);font-size:1.3rem;color:var(--blue);text-align:center;">τό</td></tr>
        </tbody>
      </table>
    </div>

    <div class="lesson-h3">First Declension — Feminine Nouns</div>
    <p class="lesson-p">The first declension contains mostly feminine nouns ending in -η or -α. Here is the pattern using ἀγάπη (agape, love):</p>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;overflow:hidden;margin:1.25rem 0;">
      <table style="width:100%;border-collapse:collapse;font-size:.9rem;">
        <thead><tr style="background:var(--bg3);"><th style="padding:.5rem .75rem;font-family:var(--display);font-size:.62rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Case</th><th style="padding:.5rem .75rem;font-family:var(--display);font-size:.62rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Singular</th><th style="padding:.5rem .75rem;font-family:var(--display);font-size:.62rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Translation</th></tr></thead>
        <tbody>
          <tr><td style="padding:.5rem .75rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Nominative</td><td style="padding:.5rem .75rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.2rem;color:var(--blue);">ἡ ἀγάπη</td><td style="padding:.5rem .75rem;border-bottom:1px solid var(--border);color:var(--text-mid);">the love (subject)</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.5rem .75rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Genitive</td><td style="padding:.5rem .75rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.2rem;color:var(--blue);">τῆς ἀγάπης</td><td style="padding:.5rem .75rem;border-bottom:1px solid var(--border);color:var(--text-mid);">of the love</td></tr>
          <tr><td style="padding:.5rem .75rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Dative</td><td style="padding:.5rem .75rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.2rem;color:var(--blue);">τῇ ἀγάπῃ</td><td style="padding:.5rem .75rem;border-bottom:1px solid var(--border);color:var(--text-mid);">to/for/by the love</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.5rem .75rem;color:var(--text-mid);">Accusative</td><td style="padding:.5rem .75rem;font-family:var(--greek);font-size:1.2rem;color:var(--blue);">τὴν ἀγάπην</td><td style="padding:.5rem .75rem;color:var(--text-mid);">the love (object)</td></tr>
        </tbody>
      </table>
    </div>
    <div class="box box-tip"><strong>💡 The pattern:</strong> Notice how the ending changes — -η, -ης, -ῃ, -ην. The article changes with it. When you see these endings on a word, you know its case and therefore its function in the sentence. This is the engine of Greek grammar.</div>`,

  writing: [
    {ch:'ὁ λόγος', name:'The Word (Nom.)', steps:['ὁ = the (masculine nominative article)','λόγος = word/logos in nominative case','Together: "the Word" — as subject of a sentence','Write 5 times: ὁ λόγος = the Word (subject)']},
    {ch:'τοῦ λόγου',name:'Of the Word (Gen.)',steps:['τοῦ = of the (masculine genitive article)','λόγου = word in genitive (-ου ending)','Together: "of the Word"','Write 5 times: τοῦ λόγου = of the Word']},
    {ch:'ἡ ἀγάπη', name:'The Love (Nom. Fem.)',steps:['ἡ = the (feminine nominative article)','ἀγάπη = love in nominative (-η ending)','Together: "the love" — as subject','Write 5 times: ἡ ἀγάπη = the love (subject)']},
    {ch:'τὴν ἀγάπην',name:'The Love (Acc. Fem.)',steps:['τὴν = the (feminine accusative article)','ἀγάπην = love in accusative (-ην ending)','Together: "the love" — as direct object','Compare with nominative: ἡ ἀγάπη vs τὴν ἀγάπην']},
    {ch:'πρὸς τὸν θεόν',name:'With God (John 1:1)',steps:['πρὸς = toward/with (preposition — takes accusative)','τὸν = the (masculine accusative article)','θεόν = God in accusative (-όν ending)','John 1:1: "the Word was with (πρὸς) God (τὸν θεόν)"','Write 5 times and see the case in action.']},
  ],

  vocab: [
    {ch:'ἡ ἀγάπη',   trans:'he agape',    meaning:'The love (nom.)',     note:'1st decl. fem. — 1 Corinthians 13'},
    {ch:'τῆς ἀγάπης',trans:'tes agapes',  meaning:'Of the love (gen.)',  note:'Genitive — "the greatness of love"'},
    {ch:'ἡ ἀλήθεια', trans:'he aletheia', meaning:'The truth',           note:'1st decl. fem. — John 14:6'},
    {ch:'ἡ ἐκκλησία',trans:'he ekklesia', meaning:'The church',          note:'1st decl. fem. — Matthew 16:18'},
    {ch:'ἡ ζωή',     trans:'he zoe',      meaning:'The life',            note:'1st decl. fem. — John 10:10'},
    {ch:'ἡ εἰρήνη',  trans:'he eirene',   meaning:'The peace',           note:'1st decl. fem. — John 14:27'},
    {ch:'ἡ χάρις',   trans:'he charis',   meaning:'The grace',           note:'Grace — John 1:17'},
  ],

  scriptureRef: '1 Corinthians 13:13',
  scripture: {
    orig:  'νυνὶ δὲ μένει πίστις, ἐλπίς, ἀγάπη, τὰ τρία ταῦτα· μείζων δὲ τούτων ἡ ἀγάπη.',
    trans: 'nyni de menei pistis, elpis, agape, ta tria tauta; meizon de touton he agape.',
    eng:   '"So now faith, hope, and love abide, these three; but the greatest of these is love." — 1 Corinthians 13:13',
  },
  scriptureNote: 'Find the article: ἡ ἀγάπη at the end — "the love" as subject (nominative). Notice πίστις (faith) and ἐλπίς (hope) have no article here — they are more general. The article on ἡ ἀγάπη singles it out as supreme.',
  scriptureTip:  '<strong>💡 The article matters:</strong> In the original Greek Paul writes "the greatest of these is ἡ ἀγάπη" — with the article, singling out love as definitively the greatest. The article does not merely mean "the" — it identifies and specifies. Greek grammar is theology in action.',

  quiz: [
    {q:'What is the function of the Nominative case in Greek?', ch:'ὁ λόγος', opts:['Direct object of the verb','Possession — "of the word"','Subject of the verb — who is acting','Indirect object — "to the word"'], ans:2, ok:'Correct! The Nominative case marks the subject — who is doing the action. ὁ λόγος = "the Word" as the subject. "The Word was with God" — λόγος is nominative because it is the subject.', no:'Nominative = subject of the verb. ὁ λόγος = the Word as subject.'},
    {q:'What ending does a feminine nominative singular noun have in the first declension?', ch:'', opts:['-ον','-ος','-η or -α','-ων'], ans:2, ok:'Correct! First declension feminine nouns end in -η or -α in the nominative singular. Examples: ἀγάπη (love), ἀλήθεια (truth), ἐκκλησία (church), ζωή (life).', no:'First declension feminine nouns end in -η or -α in the nominative: ἀγάπη, ἀλήθεια, ζωή.'},
    {q:'What does the Genitive case express?', ch:'τοῦ θεοῦ', opts:['The subject of the sentence','Possession or relationship — "of God"','The direct object','Direct address — "O God!"'], ans:1, ok:'Correct! The Genitive expresses possession or relationship — "of God," "God\'s." τοῦ θεοῦ = "of God." τῆς ἀγάπης = "of love." The genitive answers the question "of what?" or "whose?"', no:'Genitive = possession/relationship — "of God," "God\'s." τοῦ θεοῦ = of God.'},
    {q:'In 1 Corinthians 13:13 Paul writes ἡ ἀγάπη at the end. Why is the article significant?', ch:'ἡ ἀγάπη', opts:['It means "a love" — any kind of love','It is just a grammatical formality with no meaning','It singles out love specifically as the supreme one — "THE love"','It indicates love is feminine gender only'], ans:2, ok:'Correct! The article ἡ before ἀγάπη singles it out definitively — not just love in general but THIS love, marked as supremely the greatest. The article does exegetical work that English "the" barely captures.', no:'The article ἡ singles out love specifically — "THE love," definitively the greatest. The article is exegetically significant.'},
    {q:'What is the accusative form of ἡ ἀγάπη (the love)?', ch:'', opts:['τῆς ἀγάπης','τῇ ἀγάπῃ','τὴν ἀγάπην','ἡ ἀγάπη'], ans:2, ok:'Correct! τὴν ἀγάπην is the accusative — direct object form. The article changes from ἡ to τήν, and the noun ending changes from -η to -ην. "God loves THE LOVE" — ἀγάπην would be the object.', no:'Accusative of ἡ ἀγάπη = τὴν ἀγάπην. Article: ἡ→τήν. Noun: -η→-ην.'},
  ],

  completionNote: 'You have learned the Greek case system and the first declension. You can now identify whether a Greek noun is the subject, object, or possessor in a sentence — the foundation of all NT exegesis.',
  nextDay: 'Day 3: Hebrew Grammar I →',
};
