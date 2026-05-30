/* ═══════════════════════════════════════
   LESSON: Week 5 · Day 1 · Biblical Hebrew X
   Psalm 23 — Full Reading
   ═══════════════════════════════════════ */

LESSONS['5-1-Hebrew'] = {
  color:    'gold',
  subtitle: 'Week 5 · Day 1 · Biblical Hebrew X',
  title:    'Psalm 23 — Reading in Full',
  intro:    'Psalm 23 is the most memorised passage in the Hebrew Bible. Today you read all six verses in the original Hebrew — word by word, line by line. This is not a grammar exercise. This is reading Scripture in the language it was written. Take your time.',
  sections: ['Introduction','Verses 1–2','Verses 3–4','Verses 5–6','Word Study','Quiz','Complete'],

  beforeYouBegin: `
    <p class="lesson-p"><strong>You are ready for this.</strong> You know the Hebrew alphabet, the vowel system, both verb tenses, construct chains, and the key prefixes. Psalm 23 uses all of these — and uses them simply. David wrote in clear, direct Hebrew.</p>
    <div class="box box-fact"><strong>📜 About Psalm 23:</strong> Written by David (לְדָוִד — of/for David), this Psalm of Trust uses two metaphors: YHWH as shepherd (vv. 1–4) and YHWH as host (vv. 5–6). The shift between them in verse 5 is sudden and deliberate. Jesus almost certainly knew this psalm by heart and echoes it repeatedly in John 10.</div>
    <div class="box box-tip"><strong>💡 How to read:</strong> For each verse, read the Hebrew aloud first (use the transliteration), work through the word-by-word breakdown, then read it again in Hebrew without the transliteration. Read each verse three times before moving on.</div>`,

  alphabetIntro: 'Psalm 23 complete — six verses with word-by-word analysis.',
  alphabetNotes: `<div class="box box-note"><strong>Key principle:</strong> You will encounter new words today. Use the breakdowns. Do not let unknown vocabulary stop you — grammar and context will carry you through. This is exactly how scholars read the Hebrew Bible.</div>`,

  alphabet: [
    {ch:'רֹעִי',       name:'my shepherd',    sound:"ro'i",         n:1, t:true},
    {ch:'אֶחְסָר',     name:'I shall lack',   sound:'echsar',       n:2, t:true},
    {ch:'יַרְבִּיצֵנִי',name:'he makes me lie', sound:'yarbitseni',  n:3, t:true},
    {ch:'יְנַהֲלֵנִי', name:'he leads me',    sound:'yenahhaleni',  n:4, t:true},
    {ch:'נַפְשִׁי',    name:'my soul',        sound:'nafshi',       n:5, t:true},
    {ch:'יְשׁוֹבֵב',   name:'he restores',    sound:'yeshovev',     n:6, t:true},
    {ch:'אִירָא',      name:'I will fear',    sound:"ira'",         n:7, t:true},
    {ch:'עִמָּדִי',    name:'with me',        sound:'immadi',       n:8, t:true},
    {ch:'חֶסֶד',      name:'steadfast love', sound:'hesed',        n:9, t:true},
    {ch:'לְעֹלָם',    name:'forever',         sound:"le'olam",      n:10, t:true},
  ],

  focusLetters: [
    {ch:'יהוה רֹעִי',      name:'v.1',  trans:'The LORD is my shepherd', desc:'No verb "is" — implied. רֹעִי = shepherd + י (my)', ex:''},
    {ch:'לֹא-אִירָא',      name:'v.4',  trans:'I will not fear',         desc:'לֹא + Qal Imperfect 1cs of יָרֵא (to fear)',       ex:''},
    {ch:'כִּי-אַתָּה עִמָּדִי',name:'v.4',trans:'For you are with me',    desc:'Shift from 3rd to 2nd person — theology to prayer', ex:''},
    {ch:'חֶסֶד',            name:'v.6',  trans:'Steadfast love',          desc:'The richest theological word in the Psalms',        ex:''},
    {ch:'בְּבֵית-יהוה',    name:'v.6',  trans:'In the house of the LORD',desc:'Construct chain: בֵּית [house of] + יהוה',          ex:''},
  ],

  deepDive: `
    <div class="lesson-h3">Verse 1 — יהוה רֹעִי לֹא אֶחְסָר</div>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;padding:1.25rem 1.5rem;margin:1rem 0 1.5rem;">
      <div style="font-family:var(--hebrew);font-size:1.8rem;color:var(--gold);text-align:right;direction:rtl;line-height:2.2;margin-bottom:.75rem;">יהוה רֹעִי לֹא אֶחְסָר</div>
      <div style="font-size:.85rem;color:var(--text-mid);font-style:italic;margin-bottom:.5rem;">YHWH ro'i lo echsar</div>
      <div style="font-size:1rem;color:var(--text);font-weight:600;margin-bottom:1rem;">"The LORD is my shepherd; I shall not want."</div>
      <div style="font-size:.88rem;color:var(--text-mid);line-height:1.8;">
        <strong style="color:var(--text);">יהוה</strong> = YHWH — the divine name &nbsp;·&nbsp;
        <strong style="color:var(--text);">רֹעִי</strong> = my shepherd (רֹעֶה + י suffix = my) &nbsp;·&nbsp;
        <strong style="color:var(--text);">לֹא</strong> = not &nbsp;·&nbsp;
        <strong style="color:var(--text);">אֶחְסָר</strong> = I shall lack (Qal Imperfect 1cs of חָסַר)
      </div>
    </div>

    <div class="lesson-h3">Verse 2 — בִּנְאוֹת דֶּשֶׁא יַרְבִּיצֵנִי</div>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;padding:1.25rem 1.5rem;margin:1rem 0 1.5rem;">
      <div style="font-family:var(--hebrew);font-size:1.6rem;color:var(--gold);text-align:right;direction:rtl;line-height:2;margin-bottom:.75rem;">בִּנְאוֹת דֶּשֶׁא יַרְבִּיצֵנִי עַל-מֵי מְנֻחוֹת יְנַהֲלֵנִי</div>
      <div style="font-size:.85rem;color:var(--text-mid);font-style:italic;margin-bottom:.5rem;">bin'ot deshe yarbitseni al-mei menuchot yenahhaleni</div>
      <div style="font-size:1rem;color:var(--text);font-weight:600;margin-bottom:.75rem;">"He makes me lie down in green pastures. He leads me beside still waters."</div>
      <div style="font-size:.88rem;color:var(--text-mid);line-height:1.8;">
        <strong style="color:var(--text);">בִּנְאוֹת דֶּשֶׁא</strong> = in pastures of grass (construct chain: נְאוֹת + דֶּשֶׁא) &nbsp;·&nbsp;
        <strong style="color:var(--text);">יַרְבִּיצֵנִי</strong> = he makes me lie down (Hiphil Imperfect 3ms + נִי = me) &nbsp;·&nbsp;
        <strong style="color:var(--text);">מֵי מְנֻחוֹת</strong> = waters of resting-places (construct chain) &nbsp;·&nbsp;
        <strong style="color:var(--text);">יְנַהֲלֵנִי</strong> = he leads me (Piel Imperfect + נִי)
      </div>
    </div>

    <div class="lesson-h3">Verse 3 — נַפְשִׁי יְשׁוֹבֵב</div>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;padding:1.25rem 1.5rem;margin:1rem 0 1.5rem;">
      <div style="font-family:var(--hebrew);font-size:1.5rem;color:var(--gold);text-align:right;direction:rtl;line-height:2;margin-bottom:.75rem;">נַפְשִׁי יְשׁוֹבֵב יַנְחֵנִי בְמַעְגְּלֵי-צֶדֶק לְמַעַן שְׁמוֹ</div>
      <div style="font-size:.85rem;color:var(--text-mid);font-style:italic;margin-bottom:.5rem;">nafshi yeshovev yancheni bema'agelei-tsedeq lema'an shemo</div>
      <div style="font-size:1rem;color:var(--text);font-weight:600;margin-bottom:.75rem;">"He restores my soul. He leads me in paths of righteousness for his name's sake."</div>
      <div style="font-size:.88rem;color:var(--text-mid);line-height:1.8;">
        <strong style="color:var(--text);">נַפְשִׁי</strong> = my soul (נֶפֶשׁ + י) &nbsp;·&nbsp;
        <strong style="color:var(--text);">יְשׁוֹבֵב</strong> = he restores (Polel Imperfect 3ms of שׁוּב) &nbsp;·&nbsp;
        <strong style="color:var(--text);">בְמַעְגְּלֵי-צֶדֶק</strong> = in paths of righteousness (construct chain) &nbsp;·&nbsp;
        <strong style="color:var(--text);">לְמַעַן שְׁמוֹ</strong> = for his name's sake
      </div>
    </div>

    <div class="lesson-h3">Verse 4 — The Great Turn</div>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;padding:1.25rem 1.5rem;margin:1rem 0 1.5rem;">
      <div style="font-family:var(--hebrew);font-size:1.4rem;color:var(--gold);text-align:right;direction:rtl;line-height:2;margin-bottom:.75rem;">גַּם כִּי-אֵלֵךְ בְּגֵיא צַלְמָוֶת לֹא-אִירָא רָע כִּי-אַתָּה עִמָּדִי שִׁבְטְךָ וּמִשְׁעַנְתֶּךָ הֵמָּה יְנַחֲמֻנִי</div>
      <div style="font-size:.85rem;color:var(--text-mid);font-style:italic;margin-bottom:.5rem;">gam ki-elekh begei tsalmavet lo-ira ra ki-attah immadi shivtekha umish'antekha hemma yenachamuni</div>
      <div style="font-size:1rem;color:var(--text);font-weight:600;margin-bottom:.75rem;">"Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me."</div>
      <div style="font-size:.88rem;color:var(--text-mid);line-height:1.8;">
        <strong style="color:var(--text);">בְּגֵיא צַלְמָוֶת</strong> = in the valley of deep darkness (construct chain) &nbsp;·&nbsp;
        <strong style="color:var(--text);">לֹא-אִירָא</strong> = I will not fear (Qal Imperfect 1cs of יָרֵא) &nbsp;·&nbsp;
        <strong style="color:var(--text);">כִּי-אַתָּה עִמָּדִי</strong> = for you are with me — the great shift from 3rd to 2nd person &nbsp;·&nbsp;
        <strong style="color:var(--text);">יְנַחֲמֻנִי</strong> = they comfort me
      </div>
    </div>

    <div class="lesson-h3">Verses 5–6 — The Banquet</div>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;padding:1.25rem 1.5rem;margin:1rem 0 1.5rem;">
      <div style="font-family:var(--hebrew);font-size:1.3rem;color:var(--gold);text-align:right;direction:rtl;line-height:2;margin-bottom:.75rem;">תַּעֲרֹךְ לְפָנַי שֻׁלְחָן נֶגֶד צֹרְרָי דִּשַּׁנְתָּ בַשֶּׁמֶן רֹאשִׁי כּוֹסִי רְוָיָה׃ אַךְ טוֹב וָחֶסֶד יִרְדְּפוּנִי כָּל-יְמֵי חַיַּי וְשַׁבְתִּי בְּבֵית-יהוה לְאֹרֶךְ יָמִים</div>
      <div style="font-size:.85rem;color:var(--text-mid);font-style:italic;margin-bottom:.5rem;">ta'arokh lefanai shulchan... akh tov vachesed yirdefuni... veshavti beveit-YHWH le'orekh yamim</div>
      <div style="font-size:1rem;color:var(--text);font-weight:600;margin-bottom:.75rem;">"You prepare a table before me in the presence of my enemies; you anoint my head with oil; my cup overflows. Surely goodness and steadfast love shall follow me all the days of my life, and I shall dwell in the house of the LORD forever."</div>
      <div style="font-size:.88rem;color:var(--text-mid);line-height:1.8;">
        <strong style="color:var(--text);">תַּעֲרֹךְ</strong> = you prepare (Qal Imperfect 2ms — still 2nd person) &nbsp;·&nbsp;
        <strong style="color:var(--text);">חֶסֶד</strong> = steadfast love/covenant loyalty (hesed — untranslatable) &nbsp;·&nbsp;
        <strong style="color:var(--text);">יִרְדְּפוּנִי</strong> = they will pursue me (רדף usually = to hunt; here love hunts David) &nbsp;·&nbsp;
        <strong style="color:var(--text);">בְּבֵית-יהוה</strong> = in the house of the LORD (construct chain)
      </div>
    </div>
    <div class="box box-tip"><strong>💡 The great shift in v.4:</strong> Verses 1–3: David speaks about God — "he leads," "he restores." Verse 4: David speaks TO God — "for YOU are with me." At the darkest point, description becomes prayer. Theology becomes address. Grammar carries the spiritual movement.</div>`,

  writing: [
    {ch:'יהוה רֹעִי לֹא אֶחְסָר', name:'Verse 1 — from memory', steps:['Read aloud 3 times: YHWH ro\'i lo echsar','Write from memory — right to left','The LORD is my shepherd — I shall not want','Write 5 times.']},
    {ch:'כִּי-אַתָּה עִמָּדִי',    name:'The pivot of the psalm',  steps:['Read aloud: ki-attah immadi','For you are with me','The shift from 3rd to 2nd person — from about God to to God','Write 10 times. This is the heart of the psalm.']},
    {ch:'חֶסֶד',                  name:'Hesed — learn this word', steps:['חֶסֶד = steadfast love, covenant loyalty, faithful kindness','No single English word captures it','It appears 245 times in the Hebrew Bible','Write 15 times. Say "hesed" each time.']},
    {ch:'בְּבֵית-יהוה',           name:'In the house of the LORD', steps:['בְּ (in) + בֵּית (house of — construct) + יהוה','Construct chain: house of the LORD','The psalm begins with יהוה and ends with יהוה','Write 10 times.']},
    {ch:'אַךְ טוֹב וָחֶסֶד יִרְדְּפוּנִי', name:'Surely goodness and hesed pursue me', steps:['Read aloud: akh tov vachesed yirdefuni','יִרְדְּפוּנִי = they pursue me — the hunter\'s verb used for divine grace','Write 5 times. Goodness and love are the hunters. You are the hunted.']},
  ],

  vocab: [
    {ch:'רֹעֶה',    trans:"ro'eh",    meaning:'Shepherd',                  note:'Active participle of רָעָה (to shepherd)'},
    {ch:'חֶסֶד',    trans:'hesed',    meaning:'Steadfast love / Loyalty',  note:'The richest word in the Psalms — 245 occurrences in OT'},
    {ch:'נֶפֶשׁ',   trans:'nefesh',   meaning:'Soul / Self / Life',        note:'Whole inner person — not just spiritual'},
    {ch:'צַלְמָוֶת',trans:'tsalmavet',meaning:'Deep darkness / Death-shadow',note:'Construct: shadow of death or deepest darkness'},
    {ch:'שֵׁבֶט',   trans:'shevet',   meaning:'Rod / Tribe / Sceptre',     note:'The shepherd\'s rod — protection'},
    {ch:'שֻׁלְחָן', trans:'shulchan', meaning:'Table',                     note:'The banquet begins — host metaphor v.5'},
    {ch:'לְעֹלָם',  trans:"le'olam",  meaning:'Forever / For eternity',    note:'לְ + עֹלָם (eternity)'},
  ],

  scriptureRef: 'Psalm 23:1–6 (complete)',
  scripture: {
    orig:  'יהוה רֹעִי לֹא אֶחְסָר׃ בִּנְאוֹת דֶּשֶׁא יַרְבִּיצֵנִי עַל-מֵי מְנֻחוֹת יְנַהֲלֵנִי׃ נַפְשִׁי יְשׁוֹבֵב',
    trans: "YHWH ro'i lo echsar. Bin'ot deshe yarbitseni al-mei menuchot yenahhaleni. Nafshi yeshovev.",
    eng:   '"The LORD is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul." — Psalm 23:1–3',
  },
  scriptureNote: 'Read all six verses aloud using the breakdowns in the lesson. By the end you should be able to read verses 1–2 without looking at the transliteration.',
  scriptureTip: '<strong>💡 On hesed:</strong> The last line of the psalm says goodness and חֶסֶד will pursue David all his days. The word hesed is God\'s covenant faithfulness — his binding commitment to his people. It is not a feeling but a covenant obligation he takes on himself. "The steadfast love of the LORD never ceases" (Lamentations 3:22) — the same word. You are learning the vocabulary of God\'s character.',

  quiz: [
    {q:'What is חֶסֶד (hesed) and why is it often called untranslatable?', ch:'חֶסֶד', opts:['A simple word for kindness — easily translated','Steadfast love combined with covenant loyalty and faithfulness — no single English word captures all three dimensions','The Hebrew word for grace — identical to Greek charis','Peace and completeness — equivalent to shalom'], ans:1, ok:'Correct! חֶסֶד (hesed) = steadfast love + covenant loyalty + faithful commitment in one concept. The ESV uses "steadfast love," KJV uses "mercy," NASB uses "lovingkindness" — each capturing a different facet but none the whole.', no:'חֶסֶד = steadfast love + covenant loyalty + faithfulness combined. No single English word captures it. The richest theological word in the Psalms.'},
    {q:'What is theologically significant about the shift from 3rd person to 2nd person in Psalm 23:4?', ch:'כִּי-אַתָּה עִמָּדִי', opts:['It is a poetic device with no theological meaning','At the darkest moment David shifts from talking ABOUT God to talking TO God — description becomes prayer','It indicates a change of author in the middle of the psalm','The 2nd person is used because God is physically present in the valley'], ans:1, ok:'Correct! Verses 1–3 describe God: "he leads," "he restores." Verse 4 turns to address him: "for YOU are with me." The grammatical shift happens at the darkest point — the valley of deep darkness. At crisis, theology becomes direct address. Grammar carries spiritual reality.', no:'The shift from "he" to "you" at the darkest point (v.4) — theology becomes prayer. David stops describing God and speaks to him directly.'},
    {q:'What does יִרְדְּפוּנִי (yirdefuni) mean — and why is the verb choice surprising?', ch:'יִרְדְּפוּנִי', opts:['They will protect me — a defensive verb','They will bless me — a priestly verb','They will pursue/chase me — a hunting verb used surprisingly for divine grace','They will reward me — a commercial verb'], ans:2, ok:'Correct! יִרְדְּפוּנִי = they will pursue me. The root רָדַף usually means to chase, hunt, or persecute — used of enemies. Here goodness and hesed are the pursuers! David does not chase blessing — grace hunts him down. The unexpected verb makes the image vivid and surprising.', no:'יִרְדְּפוּנִי = they will pursue/chase me (רָדַף = to hunt/pursue, usually of enemies). Grace hunts David. The surprise of a hunter\'s verb for divine love is intentional.'},
    {q:'Identify the construct chain in בְּגֵיא צַלְמָוֶת', ch:'בְּגֵיא צַלְמָוֶת', opts:['A verb + object', 'A prefix + adjective + noun', 'A preposition + construct chain: valley of deep darkness', 'A Qal Perfect verb'], ans:2, ok:'Correct! בְּ (in) + גֵיא (valley — construct state) + צַלְמָוֶת (deep darkness/shadow of death — absolute state). Construct chain: valley of deep darkness. Two nouns joined to replace "of."', no:'בְּ (in) + construct chain: גֵיא [valley of] + צַלְמָוֶת [deep darkness]. In the valley of deep darkness.'},
    {q:'What are the two extended metaphors of Psalm 23 and where does the shift occur?', ch:'', opts:['Shepherd and warrior — shift at v.3','Shepherd and host/banquet — shift at v.5','Farmer and shepherd — shift at v.2','King and priest — shift at v.6'], ans:1, ok:'Correct! YHWH as shepherd (vv. 1–4) and YHWH as generous host at a banquet (vv. 5–6). The shift at verse 5 is sudden — "you prepare a table" moves from wilderness pasture to feast hall. Both images show God as the one who provides, protects, and satisfies.', no:'Shepherd (vv. 1–4) and Host/Banquet (vv. 5–6). The shift at v.5 is sudden — from pasture to feast hall.'},
  ],

  completionNote: 'You have read Psalm 23 in full in Biblical Hebrew. This is the psalm of David, of Jesus, and of the whole people of God across three thousand years — now read in the language in which it was first sung.',
  nextDay: 'Day 2: John 1:1–5 in Greek →',
};
