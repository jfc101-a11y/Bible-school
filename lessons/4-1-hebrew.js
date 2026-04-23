/* ═══════════════════════════════════════
   LESSON: Week 4 · Day 1 · Biblical Hebrew VIII
   The Qal Imperfect Verb
   ═══════════════════════════════════════ */

LESSONS['4-1-Hebrew'] = {
  color:    'gold',
  subtitle: 'Week 4 · Day 1 · Biblical Hebrew VIII',
  title:    'The Qal Imperfect Verb',
  intro:    'Last week you learned the Qal Perfect — completed action. Today you learn its partner: the Qal Imperfect — incomplete, ongoing, or habitual action. Together these two forms handle the vast majority of verbs in the Hebrew Bible.',
  sections: ['Introduction','The Imperfect System','The Paradigm','Reading Practice','First Sentences','Quiz','Complete'],

  beforeYouBegin: `
    <div class="box box-tip"><strong>💡 Review first:</strong> Write out the Qal Perfect suffixes from memory: __ (3ms), ָה (3fs), תָּ (2ms), תְּ (2fs), תִּי (1cs), וּ (3cp), תֶּם (2mp), תֶּן (2fp), נוּ (1cp). If any are unclear, review Day 3 of Week 3 before continuing.</div>
    <p class="lesson-p"><strong>The key shift today:</strong> Where the Perfect adds suffixes after the root, the Imperfect adds prefixes before the root — and sometimes suffixes after. Once you grasp this system, you will recognise verbs instantly throughout the Hebrew Bible.</p>
    <div class="box box-fact"><strong>📜 The Imperfect in Genesis 1:</strong> "And God said (וַיֹּאמֶר)" — that וַיֹּאמֶר is a Qal Imperfect with a Vav-consecutive prefix. The Imperfect is the engine of Hebrew narrative. Almost every action verb in the creation account is an Imperfect with Vav-consecutive. You are about to understand Genesis 1 at a new level.</div>`,

  alphabetIntro: 'The Qal Imperfect paradigm — prefixes before the root, sometimes suffixes after. Root: שָׁמַר (to keep/guard).',
  alphabetNotes: `<div class="box box-note"><strong>The prefix letters:</strong> Imperfect prefixes are י, תּ, אֶ, נ — "YTAN" is a helpful mnemonic. Yod for 3rd person, Tav for 2nd person and 3rd feminine, Aleph for 1st singular, Nun for 1st plural.</div>`,

  alphabet: [
    {ch:'יִשְׁמֹר', name:'3ms — He will keep',   sound:'yishmor',    n:1, t:true},
    {ch:'תִּשְׁמֹר', name:'3fs — She will keep',  sound:'tishmor',    n:2, t:true},
    {ch:'תִּשְׁמֹר', name:'2ms — You will keep',  sound:'tishmor',    n:3, t:true},
    {ch:'תִּשְׁמְרִי',name:'2fs — You(f) will keep',sound:'tishmeree', n:4, t:true},
    {ch:'אֶשְׁמֹר', name:'1cs — I will keep',    sound:'eshmor',     n:5, t:true},
    {ch:'יִשְׁמְרוּ',name:'3mp — They will keep', sound:'yishmerou',  n:6, t:true},
    {ch:'תִּשְׁמֹרְנָה',name:'3fp — They(f) will',sound:'tishmorena', n:7, t:true},
    {ch:'תִּשְׁמְרוּ',name:'2mp — You all will',  sound:'tishmerou',  n:8, t:true},
    {ch:'תִּשְׁמֹרְנָה',name:'2fp — You(f) all',  sound:'tishmorena', n:9, t:true},
    {ch:'נִשְׁמֹר', name:'1cp — We will keep',   sound:'nishmor',    n:10, t:true},
  ],

  focusLetters: [
    {ch:'יִ', name:'Yod prefix',  trans:'He/They (m) will', desc:'3rd person masculine prefix',       ex:'יִשְׁמֹר — he will keep'},
    {ch:'תִּ', name:'Tav prefix', trans:'She/You will',     desc:'3rd fem. and 2nd person prefix',    ex:'תִּשְׁמֹר — she/you will keep'},
    {ch:'אֶ', name:'Aleph prefix',trans:'I will',           desc:'1st person singular prefix',        ex:'אֶשְׁמֹר — I will keep'},
    {ch:'נִ', name:'Nun prefix',  trans:'We will',          desc:'1st person plural prefix',          ex:'נִשְׁמֹר — we will keep'},
    {ch:'וַיּ',name:'Vav-consec.',trans:'And he [did]',     desc:'Vav + Imperfect = narrative past',  ex:'וַיֹּאמֶר — and he said'},
  ],

  deepDive: `
    <div class="lesson-h3">Aspect vs Tense</div>
    <p class="lesson-p">Hebrew verbs express <em>aspect</em> — the nature of the action — rather than primarily expressing time. The <strong>Perfect</strong> views the action as a complete whole. The <strong>Imperfect</strong> views the action as ongoing, incomplete, repeated, or habitual. Time (past/present/future) is determined by context, not by the verb form itself.</p>

    <p class="lesson-p">In practice: the Imperfect most often translates as future ("he will keep"), but it can also mean present ("he keeps") or even past in the right context. The Vav-consecutive changes this dramatically.</p>

    <div class="lesson-h3">The Vav-Consecutive — The Engine of Hebrew Narrative</div>
    <p class="lesson-p">The most important use of the Imperfect is with the <strong>Vav-consecutive</strong> (וַ + Imperfect). This combination converts the Imperfect into a simple narrative past — and it is by far the most common verb form in Hebrew narrative. Genesis 1 is built almost entirely from it:</p>

    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;padding:1.25rem 1.5rem;margin:1.25rem 0;">
      <div style="font-family:var(--hebrew);font-size:1.6rem;color:var(--gold);line-height:2.2;text-align:right;direction:rtl;">
        וַיֹּאמֶר אֱלֹהִים יְהִי אוֹר וַיְהִי אוֹר
      </div>
      <div style="font-size:.85rem;color:var(--text-mid);font-style:italic;margin-top:.5rem;">Vayomer Elohim yehi or vayehi or</div>
      <div style="font-size:1rem;color:var(--text);font-weight:600;margin-top:.3rem;">"And God said, 'Let there be light,' and there was light." — Genesis 1:3</div>
    </div>

    <p class="lesson-p">Every וַיּ at the start of a verb in Genesis 1 is a Vav-consecutive Imperfect. It strings the narrative forward — "and he said... and there was... and God saw... and God called..." The Imperfect with Vav drives the momentum of the entire creation account.</p>

    <div class="lesson-h3">The Imperfect for Commands and Wishes</div>
    <p class="lesson-p">The Imperfect also expresses <strong>commands, wishes, and jussives</strong>. "יְהִי אוֹר" (yehi or = let there be light) — this is a Qal Imperfect Jussive: God's creative word as a wish/command directed at creation. The Imperfect is not just about time — it is about the character of the action.</p>

    <div class="lesson-h3">Recognising the Imperfect</div>
    <p class="lesson-p">The prefix letters spell a memorable pattern — <strong>א-נ-י-ת</strong> (Aleph, Nun, Yod, Tav) — sometimes taught as the mnemonic "I eNjoY Torah." These four letters at the start of a verb word = Imperfect. Once you see this pattern, you will recognise Imperfects throughout the Hebrew Bible instantly.</p>
    <div class="box box-tip"><strong>💡 Memory key:</strong> Perfect = suffixes after root (what happened — complete) · Imperfect = prefixes before root (what will/does happen — ongoing). Vav + Imperfect = narrative past ("and he did").</div>`,

  writing: [
    {ch:'וַיֹּאמֶר', name:'Vayomer — And he said', steps:['The most common verb form in the Hebrew Bible','וַ = Vav-consecutive · יֹּ = Yod prefix (3ms Imperfect) · אמר = root (to say)','Pronunciation: va-YO-mer','Appears hundreds of times in Genesis, Exodus, the Psalms, the Prophets','Write it 15 times. Say "and he said" each time.']},
    {ch:'יִשְׁמֹר',  name:'Yishmor — He will keep', steps:['Root: שׁ-מ-ר (sh-m-r = to keep/guard)','Prefix: יִ (Yod = 3ms Imperfect)','Pronunciation: yish-MOR','Psalm 121:4: הִנֵּה לֹא יָנוּם וְלֹא יִישָׁן שׁוֹמֵר יִשְׂרָאֵל — He who keeps Israel will not slumber or sleep','Write it 10 times.']},
    {ch:'אֶשְׁמֹר',  name:'Eshmor — I will keep',   steps:['Root: שׁ-מ-ר · Prefix: אֶ (Aleph = 1cs Imperfect)','Pronunciation: esh-MOR','Psalm 119:44: וְאֶשְׁמְרָה תוֹרָתְךָ — And I will keep your Torah','Write it 10 times saying "I will keep."']},
    {ch:'נִשְׁמֹר',  name:'Nishmor — We will keep', steps:['Root: שׁ-מ-ר · Prefix: נִ (Nun = 1cp Imperfect)','Pronunciation: nish-MOR','1st person plural — "we will keep"','Compare all four: יִ-תִּ-אֶ-נִ — He-She/You-I-We','Write it 10 times.']},
    {ch:'יְהִי אוֹר', name:'Yehi Or — Let there be light', steps:['יְהִי = Qal Imperfect Jussive 3ms of הָיָה (to be)','= "let there be" — a wish/command directed at creation','אוֹר = light','Together: "let there be light" — the first divine speech act in the Bible','Write it 10 times. Say each word aloud.']},
  ],

  vocab: [
    {ch:'יֹאמַר',   trans:"yomar",   meaning:'He will say / He said (w/Vav)', note:'Imperfect of אמר — most common narrative verb'},
    {ch:'יִרְאֶה',  trans:"yireh",   meaning:'He will see',                   note:'Imperfect of ראה — "God saw that it was good"'},
    {ch:'יַעַשׂ',   trans:"yaas",    meaning:'He will make / He made',        note:'Imperfect of עשׂה — "and God made"'},
    {ch:'יִקְרָא',  trans:"yiqra",   meaning:'He will call / He called',      note:'Imperfect of קרא — "God called the light Day"'},
    {ch:'יְבָרֵךְ', trans:"yevarekh",meaning:'He will bless / He blessed',    note:'Piel Imperfect of ברך — "God blessed them"'},
    {ch:'תִּשְׁמֹר', trans:"tishmor", meaning:'You will keep (m.) / She will', note:'Imperfect 2ms or 3fs of שׁמר'},
    {ch:'נֵלֵךְ',   trans:"nelekh",  meaning:'We will go',                    note:'Imperfect 1cp of הלך — "let us go"'},
  ],

  scriptureRef: 'Genesis 1:3',
  scripture: {
    orig:  'וַיֹּאמֶר אֱלֹהִים יְהִי אוֹר וַיְהִי אוֹר',
    trans: 'Vayomer Elohim yehi or vayehi or',
    eng:   '"And God said, \'Let there be light,\' and there was light." — Genesis 1:3',
  },
  scriptureNote: 'Identify both verb forms: וַיֹּאמֶר = Vav-consecutive + Imperfect 3ms of אמר (and he said) · יְהִי = Imperfect Jussive 3ms of היה (let there be) · וַיְהִי = Vav-consecutive + Imperfect 3ms of היה (and there was).',
  scriptureTip: '<strong>💡 The pattern of creation:</strong> Every act of creation in Genesis 1 follows the same pattern: וַיֹּאמֶר (and God said) → command in Jussive → וַיְהִי (and it was). The Imperfect drives every moment. God speaks in Imperfect — his word is not past and done but perpetually creative and active.',

  quiz: [
    {q:'What is the fundamental difference between the Qal Perfect and the Qal Imperfect?', ch:'', opts:['Perfect = future; Imperfect = past','Perfect = completed action; Imperfect = incomplete/ongoing/habitual action','Perfect = singular; Imperfect = plural','Perfect = active; Imperfect = passive'], ans:1, ok:'Correct! Perfect = completed action (viewed as a whole). Imperfect = incomplete, ongoing, or habitual action. Hebrew expresses aspect — the nature of the action — not primarily time.', no:'Perfect = completed action. Imperfect = incomplete/ongoing/habitual. Hebrew expresses aspect, not primarily time.'},
    {q:'What prefix letter indicates 3rd masculine singular in the Qal Imperfect?', ch:'יִשְׁמֹר', opts:['Aleph (אֶ)','Nun (נִ)','Tav (תִּ)','Yod (יִ)'], ans:3, ok:'Correct! Yod (יִ) is the prefix for 3rd masculine singular in the Imperfect. יִשְׁמֹר = he will keep. יֹאמַר = he will say. יִרְאֶה = he will see.', no:'Yod (יִ) = 3rd masculine singular Imperfect prefix. יִשְׁמֹר = he will keep.'},
    {q:'What does the Vav-consecutive (וַ + Imperfect) do in Hebrew narrative?', ch:'וַיֹּאמֶר', opts:['It makes the verb future tense','It converts the Imperfect into a simple narrative past — "and he did"','It makes the verb passive','It indicates a repeated action'], ans:1, ok:'Correct! Vav-consecutive + Imperfect = simple narrative past. וַיֹּאמֶר = "and he said." This is the most common verb construction in Hebrew narrative — it drives the entire story forward.', no:'Vav-consecutive + Imperfect = narrative past. וַיֹּאמֶר = "and he said." The engine of Hebrew storytelling.'},
    {q:'What is יְהִי אוֹר (yehi or) — and what verb form is יְהִי?', ch:'יְהִי אוֹר', opts:['A perfect — "light existed"','A jussive imperfect — "let there be light" (a wish/command)','A noun phrase — "the light"','A participle — "being light"'], ans:1, ok:'Correct! יְהִי is a Qal Imperfect Jussive — expressing a wish or command. "Let there be light" — God\'s creative word directed at non-existence, calling light into being.', no:'יְהִי = Qal Imperfect Jussive — a wish/command. "Let there be light" — God\'s creative speech act.'},
    {q:'What is the mnemonic for the four Imperfect prefix letters?', ch:'', opts:['ABCD — Aleph, Bet, Cheth, Dalet','YTAN — Yod, Tav, Aleph, Nun','SHIN — Shin, He, Iota, Nun','There is no mnemonic'], ans:1, ok:'Correct! YTAN — Yod (3rd m.), Tav (3rd f./2nd), Aleph (1st sing.), Nun (1st plural). Some teachers use "I eNjoY Torah." These four letters at the start of a verb word immediately identify it as an Imperfect.', no:'YTAN — Yod, Tav, Aleph, Nun — the four Imperfect prefix letters. "I eNjoY Torah" as a mnemonic.'},
  ],

  completionNote: 'You now know both Hebrew verb tenses — Perfect and Imperfect. With these two forms you can identify and translate the vast majority of verbs in the Hebrew Old Testament.',
  nextDay: 'Day 2: Greek Verb — Present Active →',
};
