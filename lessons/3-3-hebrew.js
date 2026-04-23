/* ═══════════════════════════════════════
   LESSON: Week 3 · Day 3 · Biblical Hebrew VII
   Hebrew Grammar I — The Qal Verb (Perfect Tense)
   ═══════════════════════════════════════ */

LESSONS['3-3-Hebrew'] = {
  color:    'gold',
  subtitle: 'Week 3 · Day 3 · Biblical Hebrew VII',
  title:    'Hebrew Grammar I — The Qal Verb',
  intro:    'Hebrew verbs are the most important grammatical concept in the language. Everything in a Hebrew sentence revolves around the verb — and the Hebrew verb system is unlike anything in English. Today you learn the most fundamental verb form: the Qal Perfect.',
  sections: ['Introduction','The Verb System','The Qal Perfect','Practice','First Sentences','Quiz','Complete'],

  beforeYouBegin: `
    <p class="lesson-p"><strong>The Hebrew verb is the heart of the language.</strong> Unlike English verbs — which are relatively simple — Hebrew verbs carry an enormous amount of information in a single word. A single Hebrew verb can express the subject, gender, number, tense, and verbal theme all at once.</p>
    <div class="box box-fact"><strong>📜 The root system:</strong> Every Hebrew verb is built on a three-consonant root. The root קָטַל (q-t-l, meaning "to kill") is the grammarian's model verb — used in textbooks to show all verb patterns because it has no unusual features. From any three-consonant root, the entire verbal system unfolds through a consistent set of patterns.</div>
    <div class="box box-tip"><strong>💡 The key insight:</strong> Hebrew does not primarily show time (past/present/future) the way English does. Instead it shows <em>aspect</em> — whether the action is <em>complete</em> (the Perfect) or <em>ongoing/incomplete</em> (the Imperfect). The Perfect often translates as past tense, but the fundamental idea is completion.</div>`,

  alphabetIntro: 'The Qal Perfect paradigm — the most fundamental Hebrew verb form. Built on the root קָטַל (to kill).',
  alphabetNotes: `<div class="box box-note"><strong>Reading the paradigm:</strong> Each form adds a suffix to the verb root to show person, gender, and number. Read each form right to left. The root letters (ק-ט-ל) are always visible in the middle.</div>`,

  alphabet: [
    {ch:'קָטַל',  name:'3ms Perfect', sound:'He killed',       n:1, t:true},
    {ch:'קָטְלָה',name:'3fs Perfect', sound:'She killed',      n:2, t:true},
    {ch:'קָטַלְתָּ',name:'2ms Perfect',sound:'You (m) killed', n:3, t:true},
    {ch:'קָטַלְתְּ',name:'2fs Perfect',sound:'You (f) killed', n:4, t:true},
    {ch:'קָטַלְתִּי',name:'1cs Perfect',sound:'I killed',      n:5, t:true},
    {ch:'קָטְלוּ', name:'3cp Perfect', sound:'They killed',    n:6, t:true},
    {ch:'קָטַלְתֶּם',name:'2mp Perfect',sound:'You (mp) killed',n:7,t:true},
    {ch:'קָטַלְתֶּן',name:'2fp Perfect',sound:'You (fp) killed',n:8,t:true},
    {ch:'קָטַלְנוּ',name:'1cp Perfect', sound:'We killed',     n:9, t:true},
  ],

  focusLetters: [
    {ch:'קָטַל',   name:'3ms — He',    trans:'He [verb]ed',     desc:'Base form — no suffix added',          ex:'בָּרָא — bara (He created) Gen 1:1'},
    {ch:'קָטְלָה', name:'3fs — She',   trans:'She [verb]ed',    desc:'Suffix: ָה (ah)',                      ex:'יָלְדָה — yaldah (She bore/gave birth)'},
    {ch:'קָטַלְתִּי',name:'1cs — I',   trans:'I [verb]ed',      desc:'Suffix: תִּי (ti)',                    ex:'אָמַרְתִּי — amarti (I said)'},
    {ch:'קָטְלוּ', name:'3cp — They',  trans:'They [verb]ed',   desc:'Suffix: וּ (u)',                       ex:'אָמְרוּ — amru (They said)'},
    {ch:'קָטַלְנוּ',name:'1cp — We',   trans:'We [verb]ed',     desc:'Suffix: נוּ (nu)',                     ex:'שָׁמַעְנוּ — shamanu (We heard)'},
  ],

  deepDive: `
    <div class="lesson-h3">The Hebrew Verbal System — An Overview</div>
    <p class="lesson-p">Hebrew verbs operate in <em>stems</em> (called binyanim, בִּנְיָנִים). There are seven main stems, each modifying the basic meaning of the root. Today you learn the <strong>Qal</strong> (קַל) stem — the simplest, most basic form. "Qal" means "light" in Hebrew — it is the light, unmodified form of the verb.</p>

    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;overflow:hidden;margin:1.25rem 0;">
      <table style="width:100%;border-collapse:collapse;font-size:.88rem;">
        <thead><tr style="background:var(--bg3);"><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);text-align:left;">Stem</th><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);text-align:left;">Meaning Modification</th><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);text-align:left;">Example</th></tr></thead>
        <tbody>
          <tr><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text);font-weight:600;">Qal</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Simple active — basic meaning</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.1rem;color:var(--gold);">שָׁמַר = he kept/guarded</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Niphal</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Simple passive or reflexive</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.1rem;color:var(--gold);">נִשְׁמַר = he was kept</td></tr>
          <tr><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Piel</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Intensive active</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.1rem;color:var(--gold);">שִׁמֵּר = he carefully guarded</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Hiphil</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Causative active</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.1rem;color:var(--gold);">הִשְׁמִיר = he caused to guard</td></tr>
        </tbody>
      </table>
    </div>

    <div class="lesson-h3">The Perfect Aspect</div>
    <p class="lesson-p">The <strong>Qal Perfect</strong> expresses a completed action. In narrative contexts it almost always translates as a simple past tense in English. The form is built by taking the three-letter root and adding personal suffixes. Let us use the root <strong>בָּרָא (b-r-a, to create)</strong> — the very first verb in the Bible:</p>

    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;overflow:hidden;margin:1.25rem 0;">
      <table style="width:100%;border-collapse:collapse;font-size:.9rem;">
        <thead><tr style="background:var(--bg3);"><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Person</th><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Hebrew</th><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Suffix</th><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Translation</th></tr></thead>
        <tbody>
          <tr><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">3rd masc. sing.</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.3rem;color:var(--gold);">בָּרָא</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-dim);">none</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">he created</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">3rd fem. sing.</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.3rem;color:var(--gold);">בָּרְאָה</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-dim);">ָה</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">she created</td></tr>
          <tr><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">1st sing. (I)</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.3rem;color:var(--gold);">בָּרָאתִי</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-dim);">תִּי</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">I created</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">3rd plural (they)</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.3rem;color:var(--gold);">בָּרְאוּ</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-dim);">וּ</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">they created</td></tr>
          <tr><td style="padding:.5rem .8rem;color:var(--text-mid);">1st plural (we)</td><td style="padding:.5rem .8rem;font-family:var(--hebrew);font-size:1.3rem;color:var(--gold);">בָּרָאנוּ</td><td style="padding:.5rem .8rem;color:var(--text-dim);">נוּ</td><td style="padding:.5rem .8rem;color:var(--text-mid);">we created</td></tr>
        </tbody>
      </table>
    </div>

    <div class="lesson-h3">Reading Genesis 1:1 as a Verb</div>
    <p class="lesson-p">The second word of the Bible — <strong>בָּרָא</strong> (bara) — is a Qal Perfect 3rd masculine singular of the root ב-ר-א. It means "He created." No subject pronoun is needed in Hebrew because the verb form itself tells you the subject is third person masculine singular. "In the beginning <em>created</em> God the heavens and the earth" — the verb comes before the subject אֱלֹהִים in the Hebrew word order.</p>
    <div class="box box-fact"><strong>Bara vs Yatsar:</strong> Hebrew has two words for "create." בָּרָא (bara) is used only with God as subject in the OT — it implies creation from nothing (ex nihilo), or at minimum radical newness. יָצַר (yatsar) means to form or shape — used when God forms Adam from the dust. The distinction is theologically significant.</div>
    <div class="box box-tip"><strong>💡 The suffix is the subject:</strong> In Hebrew you do not need a separate pronoun because the verb suffix tells you everything. אָמַרְתִּי (amarti) = I said — the תִּי tells you it is first person. This is why Hebrew can be so compact — one verb can be a complete sentence.</div>`,

  writing: [
    {ch:'בָּרָא',    name:'Bara — He Created (3ms)',  steps:['This is the second word of the Bible — Genesis 1:1','Root: ב-ר-א (b-r-a = to create)','Form: Qal Perfect 3rd masculine singular — no suffix','Pronunciation: ba-RA','Write it 10 times saying "he created" each time.']},
    {ch:'אָמַר',    name:'Amar — He Said (3ms)',      steps:['Root: א-מ-ר (a-m-r = to say)','Qal Perfect 3ms — one of the most common verbs in the Bible','Pronunciation: a-MAR','Genesis 1 uses this constantly: "And God said (וַיֹּאמֶר)..."','Write it 10 times saying "he said" each time.']},
    {ch:'שָׁמַע',   name:'Shama — He Heard (3ms)',    steps:['Root: שׁ-מ-ע (sh-m-a = to hear)','Qal Perfect 3ms','Pronunciation: sha-MA','The Shema begins with this root: שְׁמַע יִשְׂרָאֵל — Hear, O Israel!','Write it 10 times saying "he heard" each time.']},
    {ch:'אָהַב',    name:'Ahav — He Loved (3ms)',     steps:['Root: א-ה-ב (a-h-b = to love)','Qal Perfect 3ms','Pronunciation: a-HAV','John 3:16 in Hebrew uses this root: כִּי כֵן אָהַב אֱלֹהִים (For God so loved...)','Write it 10 times saying "he loved" each time.']},
    {ch:'שָׁמַרְתִּי',name:'Shamarti — I Kept (1cs)', steps:['Root: שׁ-מ-ר (sh-m-r = to keep/guard)','Form: Qal Perfect 1st common singular — suffix: תִּי (ti)','Pronunciation: sha-MAR-ti = I kept/I guarded','Psalm 119:11: "I have hidden your word in my heart"','Write it 10 times noticing the תִּי suffix.']},
  ],

  vocab: [
    {ch:'בָּרָא',    trans:'bara',    meaning:'He created',    note:'Qal Perf. 3ms — Genesis 1:1'},
    {ch:'אָמַר',    trans:'amar',    meaning:'He said',       note:'Qal Perf. 3ms — most common narrative verb'},
    {ch:'שָׁמַע',   trans:'shama',   meaning:'He heard',      note:'Qal Perf. 3ms — root of Shema'},
    {ch:'אָהַב',    trans:'ahav',    meaning:'He loved',      note:'Qal Perf. 3ms — John 3:16 in Hebrew'},
    {ch:'יָדַע',    trans:"yada",    meaning:'He knew',       note:'Qal Perf. 3ms — intimate knowledge'},
    {ch:'הָלַךְ',   trans:'halakh',  meaning:'He walked/went',note:'Qal Perf. 3ms — Enoch "walked with God"'},
    {ch:'נָתַן',    trans:'natan',   meaning:'He gave',       note:'Qal Perf. 3ms — "For God so gave"'},
  ],

  scriptureRef: 'Genesis 1:1',
  scripture: {
    orig:  'בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ',
    trans: 'Bereshit bara Elohim et hashamayim ve\'et ha\'aretz',
    eng:   '"In the beginning, God created the heavens and the earth." — Genesis 1:1',
  },
  scriptureNote: 'Identify the verb: בָּרָא (bara) — Qal Perfect 3ms — "he created." The subject follows the verb: אֱלֹהִים (Elohim). Word order: prepositional phrase (in the beginning) + VERB + subject + direct objects.',
  scriptureTip:  '<strong>💡 The verb reveals the theology:</strong> בָּרָא is Qal Perfect 3ms with only God ever as subject in the OT. The completed aspect (Perfect) means this creation is a done, settled, complete act. God did not set creation in motion and leave — he brought it into existence as a finished act. Grammar and theology are inseparable.',

  quiz: [
    {q:'What does the Qal stem represent in Hebrew verbal grammar?', ch:'', opts:['The intensive form of the verb','The causative form — "to cause to do"','The simple, basic, unmodified form of the verb','The passive form — "to be done to"'], ans:2, ok:'Correct! The Qal is the simplest, most basic verbal stem — "qal" means "light" in Hebrew. It represents the straightforward, unmodified meaning of the root. All other stems modify or intensify that basic meaning.', no:'Qal = the simple, basic verbal stem. "Qal" means light — it is the lightest, most direct form.'},
    {q:'What personal suffix indicates 1st person singular (I) in the Hebrew Perfect?', ch:'בָּרָאתִי', opts:['וּ (u)','נוּ (nu)','תִּי (ti)','ָה (ah)'], ans:2, ok:'Correct! The suffix תִּי (ti) marks 1st person singular — "I." אָמַרְתִּי = I said · שָׁמַרְתִּי = I kept · בָּרָאתִי = I created. The verb tells you the subject without needing a pronoun.', no:'תִּי (ti) = 1st person singular — "I." The verb suffix replaces the need for a separate pronoun.'},
    {q:'In Genesis 1:1, what is the grammatical form of בָּרָא (bara)?', ch:'בָּרָא', opts:['Qal Imperfect 3ms — he will create','Qal Perfect 3ms — he created','Qal Perfect 1cs — I created','Qal Imperative — create!'], ans:1, ok:'Correct! בָּרָא is a Qal Perfect 3rd masculine singular — "he created." No suffix is added to the root in this form. The Perfect aspect means the action is complete and settled.', no:'בָּרָא = Qal Perfect 3ms — "he created." No suffix needed for 3ms — it is the base form.'},
    {q:'What is the theological significance of the root בָּרָא (bara) vs יָצַר (yatsar)?', ch:'', opts:['They are exact synonyms with no distinction','Bara is used only with God as subject — implies radical newness; Yatsar means to form/shape','Bara means to make from nothing; Yatsar means to create anything','Bara is poetic; Yatsar is prose'], ans:1, ok:'Correct! בָּרָא (bara) is used exclusively with God as subject in the OT — it implies creative newness or creation ex nihilo. יָצַר (yatsar) means to form or fashion, used when God shapes Adam from dust. The distinction carries real theological weight.', no:'בָּרָא is used only with God and implies radical newness. יָצַר means to form/fashion — used for God shaping Adam from dust.'},
    {q:'How does Hebrew show the subject of a verb without using a separate pronoun?', ch:'', opts:['Hebrew always requires a separate pronoun','The word order shows the subject','The verb suffix encodes person, gender, and number — making a pronoun unnecessary','The context determines the subject — no grammatical marker'], ans:2, ok:'Correct! Hebrew verb suffixes encode the subject. אָמַרְתִּי = I said (תִּי = I). אָמַרְנוּ = we said (נוּ = we). The verb is a complete sentence on its own — subject and action combined in one word.', no:'Hebrew verb suffixes encode person, gender, and number — the verb itself contains the subject.'},
  ],

  completionNote: 'You have learned the foundation of Hebrew verbal grammar — the Qal Perfect. You can now identify and translate the most common verb form in the Old Testament.',
  nextDay: 'Day 4: Latin Grammar I →',
};
