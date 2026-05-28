/* ═══════════════════════════════════════
   LESSON: Week 5 · Day 1 · Biblical Hebrew X
   Psalm 23 — Full Reading (Hesed)
   ═══════════════════════════════════════ */

LESSONS['5-1-Hebrew'] = {
  color:    'gold',
  subtitle: 'Week 5 · Day 1 · Biblical Hebrew X',
  title:    'Psalm 23 — Full Reading',
  intro:    'Today you read an entire psalm in Hebrew: Psalm 23. Your goal is not to translate every detail perfectly, but to read confidently, recognize key words instantly, and see how Hebrew poetry carries meaning through parallel lines.',
  sections: ['Introduction','The Psalm Text','Key Words','Poetic Structure','Meaning & Meditation','Quiz','Complete'],

  beforeYouBegin: `
    <div class="box box-tip"><strong>💡 Bring your tools:</strong> Read right-to-left. Mark each word boundary. Circle any prefixes you recognize (וְ, בְּ, לְ, כְּ, הַ). Underline any verb forms you can spot.</div>
    <div class="box box-fact"><strong>📜 Psalm 23 in one line:</strong> Hebrew worship is not abstract philosophy. It is covenant trust spoken as poetry: “YHWH is my shepherd; I lack nothing.”</div>
    <p class="lesson-p">You will read all six verses aloud, then learn five anchor words that will unlock the psalm when you see it again anywhere in Scripture.</p>`,

  alphabetIntro: 'Read the psalm as a whole, then learn a handful of anchor words you can recognize instantly.',
  alphabetNotes: `<div class="box box-note"><strong>Reading method:</strong> Do not panic over every unknown form. First: read. Second: identify known words. Third: use context. Fluency comes by repeated exposure.</div>`,
  alphabet: [
    {ch:'יְהוָה', name:'YHWH',            sound:'Adonai',     n:1, t:true},
    {ch:'רֹעִי',  name:'my shepherd',     sound:'ro-i',       n:2, t:true},
    {ch:'לֹא',    name:'not / no',        sound:'lo',         n:3, t:true},
    {ch:'אֶחְסָר',name:'I lack',          sound:'eḥ-sar',     n:4, t:true},
    {ch:'חֶסֶד',  name:'steadfast love',  sound:'ḥe-sed',     n:5, t:true},
    {ch:'שׁוּב',  name:'to return',       sound:'shuv',       n:6, t:true},
    {ch:'בֵּית',  name:'house',           sound:'beit',       n:7, t:true},
    {ch:'עוֹלָם', name:'forever',         sound:'olam',       n:8, t:true},
  ],

  focusLetters: [
    {ch:'יְהוָה', name:'The Divine Name', trans:'YHWH',            desc:'The covenant name revealed to Moses', ex:'יְהוָה רֹעִי — YHWH is my shepherd'},
    {ch:'רֹעִי',  name:'My shepherd',     trans:'ro‘i',            desc:'From רעה “to shepherd”; suffix -ִי = “my”', ex:'רֹעִי — my shepherd'},
    {ch:'אֶחְסָר',name:'I lack',          trans:'’eḥsar',          desc:'Imperfect / modal sense: “I will not lack”', ex:'לֹא אֶחְסָר — I shall not lack'},
    {ch:'חֶסֶד',  name:'Hesed',           trans:'ḥesed',           desc:'Covenant loyalty; steadfast love that keeps promises', ex:'אַךְ טוֹב וָחֶסֶד — surely goodness and hesed'},
    {ch:'שַׁבְתִּי',name:'I will dwell/return', trans:'shavti',    desc:'From שׁוב; in Ps 23:6 often read as “I shall dwell”', ex:'וְשַׁבְתִּי בְּבֵית־יְהוָה — and I will dwell/return in the house of YHWH'},
  ],

  deepDive: `
    <div class="lesson-h3">Psalm 23 — The Hebrew Text (all six verses)</div>
    <div class="box box-note">
      <div style="font-family:var(--hebrew);font-size:1.55rem;color:var(--gold);line-height:2.25;text-align:right;direction:rtl;">
        יְהוָה רֹעִי לֹא אֶחְסָר׃<br/>
        בִּנְאוֹת דֶּשֶׁא יַרְבִּיצֵנִי עַל־מֵי מְנֻחוֹת יְנַהֲלֵנִי׃<br/>
        נַפְשִׁי יְשׁוֹבֵב יַנְחֵנִי בְמַעְגְּלֵי־צֶדֶק לְמַעַן שְׁמוֹ׃<br/>
        גַּם כִּי־אֵלֵךְ בְּגֵיא צַלְמָוֶת לֹא־אִירָא רָע כִּי־אַתָּה עִמָּדִי שִׁבְטְךָ וּמִשְׁעַנְתֶּךָ הֵמָּה יְנַחֲמֻנִי׃<br/>
        תַּעֲרֹךְ לְפָנַי שֻׁלְחָן נֶגֶד צֹרְרָי דִּשַּׁנְתָּ בַשֶּׁמֶן רֹאשִׁי כּוֹסִי רְוָיָה׃<br/>
        אַךְ טוֹב וָחֶסֶד יִרְדְּפוּנִי כָּל־יְמֵי חַיַּי וְשַׁבְתִּי בְּבֵית־יְהוָה לְאֹרֶךְ יָמִים׃
      </div>
      <div style="margin-top:.6rem;color:var(--text-mid);font-size:.9rem;font-style:italic;">
        Read aloud slowly. Aim for accuracy and confidence, not speed.
      </div>
    </div>

    <div class="lesson-h3">Five anchors that unlock the psalm</div>
    <p class="lesson-p">If you can recognize these instantly, Psalm 23 becomes readable even when details are still forming: יְהוָה (YHWH) · רֹעִי (my shepherd) · לֹא (not) · חֶסֶד (steadfast love) · בֵּית (house).</p>

    <div class="lesson-h3">Hebrew poetry: parallel lines</div>
    <p class="lesson-p">Hebrew poetry often says the same idea twice with different words. This is not “repetition” as waste; it is meaning as resonance. Notice how lines pair: guidance → restoration, fear → presence, table → overflow, goodness → dwelling.</p>

    <div class="box box-fact"><strong>Hesed:</strong> חֶסֶד is covenant love—loyalty that keeps promises. Psalm 23 ends not with “my feelings” but with God’s faithful pursuit: “goodness and hesed shall pursue me.”</div>`,

  writing: [
    {ch:'יְהוָה רֹעִי לֹא אֶחְסָר', name:'Psalm 23:1', steps:['Read right-to-left','Circle the two nouns: יְהוָה · רֹעִי','Underline the negative: לֹא','Say it aloud 10 times.']},
    {ch:'גַּם כִּי־אֵלֵךְ ... לֹא־אִירָא', name:'Psalm 23:4 (core)', steps:['Find the two key verbs: אֵלֵךְ (I walk) · אִירָא (I fear)','Notice the turning point: כִּי־אַתָּה עִמָּדִי (for you are with me)','Write only the bold core: לֹא־אִירָא רָע כִּי־אַתָּה עִמָּדִי']},
    {ch:'אַךְ טוֹב וָחֶסֶד יִרְדְּפוּנִי', name:'Psalm 23:6 (first half)', steps:['Spot the two subjects: טוֹב (goodness) · חֶסֶד (steadfast love)','Verb: יִרְדְּפוּנִי (they pursue me)','Write it 5 times and translate: “Surely goodness and steadfast love pursue me.”']},
    {ch:'וְשַׁבְתִּי בְּבֵית־יְהוָה', name:'Psalm 23:6 (second half)', steps:['Find בְּ (in) + בֵּית (house)','Say “house of YHWH” aloud with reverence','Write it 10 times right-to-left.']},
    {ch:'חֶסֶד', name:'Hesed', steps:['Write חֶסֶד 20 times','Each time, say “steadfast love / covenant loyalty”','Think: love that keeps promises.']},
  ],

  vocab: [
    {ch:'רֹעֶה',   trans:'ro‘eh',   meaning:'shepherd',          note:'Root רעה; rō‘î = “my shepherd”'},
    {ch:'חֶסֶד',   trans:'ḥesed',   meaning:'steadfast love',    note:'Covenant loyalty; faithful love'},
    {ch:'נֶפֶשׁ',  trans:'nefesh',  meaning:'soul / life',       note:'“my life” — not merely “spirit”'},
    {ch:'צֶדֶק',   trans:'tsedeq',  meaning:'righteousness',     note:'Paths of righteousness'},
    {ch:'צַלְמָוֶת',trans:'tsalmavet',meaning:'deep darkness',   note:'Often translated “shadow of death”'},
    {ch:'שֵׁם',    trans:'shem',    meaning:'name',              note:'“for his name’s sake”'},
    {ch:'בַּיִת',  trans:'bayit',   meaning:'house',             note:'בֵּית = construct form (“house of…”)'},
  ],

  scriptureRef: 'Psalm 23:1',
  scripture: {
    orig:  'יְהוָה רֹעִי לֹא אֶחְסָר',
    trans: 'Adonai ro‘i lo ’eḥsar',
    eng:   '"The LORD is my shepherd; I shall not want." — Psalm 23:1',
  },
  scriptureNote: 'Identify: יְהוָה (subject) · רֹעִי (predicate: “my shepherd”) · לֹא (negation) · אֶחְסָר (verb: “I lack”).',
  scriptureTip:  '<strong>💡 Reading skill:</strong> Even when you cannot parse every form, you can still read the text accurately and recognize anchor words. That is real progress.',

  quiz: [
    {q:'What does חֶסֶד (hesed) most nearly mean in the Hebrew Bible?', ch:'חֶסֶד', opts:['Romantic affection','Covenant loyalty / steadfast love that keeps promises','Fear of judgment','A temple sacrifice'], ans:1, ok:'Correct. Hesed is covenant love—faithful loyalty that keeps promises. Psalm 23 ends with hesed pursuing the believer.', no:'Hesed is covenant love—faithful loyalty that keeps promises.'},
    {q:'In Psalm 23:1, what is רֹעִי (ro‘i)?', ch:'רֹעִי', opts:['A verb meaning “I shepherd”','A noun meaning “my shepherd”','A preposition meaning “with me”','An adjective meaning “good”'], ans:1, ok:'Correct. רֹעִי is “my shepherd” (noun + 1cs suffix).', no:'רֹעִי is “my shepherd” (noun + 1cs suffix).'},
    {q:'What is the main learning goal of this lesson?', ch:'', opts:['Memorize all Hebrew verbs','Translate every word perfectly','Read the full psalm aloud and recognize key anchor words','Learn the Greek aorist tense'], ans:2, ok:'Correct. Today is about full-text reading fluency and anchor-word recognition.', no:'Today is about reading the full text and recognizing anchor words, not perfect translation.'},
    {q:'What is a common feature of Hebrew poetry used in Psalm 23?', ch:'', opts:['Rhyme in every line','Parallelism (paired lines that echo meaning)','Strict iambic meter','Alphabet acrostic in every psalm'], ans:1, ok:'Correct. Hebrew poetry often uses parallelism—meaning through resonance in paired lines.', no:'Hebrew poetry often uses parallelism—paired lines that echo meaning.'},
    {q:'In Psalm 23:6, what is the image of goodness and hesed doing?', ch:'', opts:['They are being chased away','They are pursuing the psalmist','They are being sacrificed','They are speaking'], ans:1, ok:'Correct. The psalm ends with a striking image: goodness and hesed “pursue” the believer—God’s faithful care is active.', no:'Psalm 23:6 pictures goodness and hesed pursuing the believer.'},
  ],

  completionNote: 'You have read all six verses of Psalm 23 in Hebrew. Your next step is repetition: read it again tomorrow and you will be amazed how many words feel familiar.',
  nextDay: 'Day 2: Greek Reading — John 1:1–5 →',
};

