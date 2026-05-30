/* ═══════════════════════════════════════
   LESSON: Week 5 · Day 4 · Biblical Hebrew XI
   Genesis 1:1–5 — Full Reading
   ═══════════════════════════════════════ */

LESSONS['5-4-Hebrew'] = {
  color:    'gold',
  subtitle: 'Week 5 · Day 4 · Biblical Hebrew XI',
  title:    'Genesis 1:1–5 — In the Beginning',
  intro:    'Genesis 1:1–5 contains the first five verses ever written in the Hebrew Bible. They describe the creation of light. Every verb, every noun, every grammatical form in these five verses you have already studied. Today you read the opening of Scripture in the language God used to reveal it.',
  sections: ['Introduction','Verse 1','Verses 2–3','Verses 4–5','Word Study','Quiz','Complete'],

  beforeYouBegin: `
    <p class="lesson-p"><strong>Genesis 1:1–5 is both the simplest and most profound Hebrew passage you will ever read.</strong> The vocabulary is basic. The sentence structures are clear. But the theology is cosmic. Work through each verse slowly — read aloud, identify the grammatical forms, then feel the weight of what the words mean.</p>
    <div class="box box-fact"><strong>📜 The creation account:</strong> Genesis 1:1–2:3 is a carefully structured liturgical text — seven days, each with the same pattern (God speaks → it happens → God names → God evaluates → evening and morning). The first three days create realms; the next three fill them. Day seven is the Sabbath — unfinished, no "evening and morning" because it has not ended. The whole creation is an ordered cosmos in seven movements.</div>
    <div class="box box-tip"><strong>💡 What to watch for:</strong> The Vav-consecutive Imperfect (וַיּ) drives every act of creation. The divine speech formula (וַיֹּאמֶר אֱלֹהִים = and God said). The evaluation formula (וַיַּרְא... כִּי-טוֹב = and he saw that it was good). These patterns repeat throughout the chapter once you learn them here.</div>`,

  alphabetIntro: 'Genesis 1:1–5 with full word-by-word grammatical analysis.',
  alphabetNotes: `<div class="box box-note"><strong>The key verb pattern:</strong> Almost every action verb in Genesis 1 follows the pattern: וַ (Vav-consecutive) + Qal Imperfect 3ms. This is the narrative engine — "and God said... and there was... and God saw... and God called..." Once you recognise it, you will see it everywhere.</div>`,

  alphabet: [
    {ch:'בָּרָא',    name:'He created',       sound:'bara',      n:1, t:true},
    {ch:'הָיְתָה',   name:'She was',           sound:'hayetah',   n:2, t:true},
    {ch:'וַיֹּאמֶר', name:'And he said',       sound:'vayomer',   n:3, t:true},
    {ch:'יְהִי',     name:'Let there be',      sound:'yehi',      n:4, t:true},
    {ch:'וַיְהִי',   name:'And there was',     sound:'vayehi',    n:5, t:true},
    {ch:'וַיַּרְא',  name:'And he saw',         sound:'vayar',     n:6, t:true},
    {ch:'כִּי-טוֹב', name:'That it was good',  sound:'ki-tov',    n:7, t:true},
    {ch:'וַיַּבְדֵּל',name:'And he separated', sound:'vavdel',    n:8, t:true},
    {ch:'וַיִּקְרָא', name:'And he called',     sound:'vayiqra',   n:9, t:true},
    {ch:'בֹּקֶר',   name:'Morning',             sound:'boqer',     n:10, t:true},
  ],

  focusLetters: [
    {ch:'בְּרֵאשִׁית', name:'v.1',  trans:'In the beginning',   desc:'בְּ + רֵאשִׁית (beginning) — no definite article',     ex:'This lack of article is intentional — not "in THE beginning"'},
    {ch:'וְהָאָרֶץ',  name:'v.2',  trans:'And the earth',       desc:'וְ (and) + הַ (the) + אָרֶץ (earth)',                  ex:'הָיְתָה = was (Qal Perfect 3fs — earth is feminine)'},
    {ch:'רוּחַ אֱלֹהִים',name:'v.2',trans:'Spirit of God',      desc:'Construct chain — Spirit/wind/breath of God',          ex:'מְרַחֶפֶת = was hovering (Piel Participle feminine)'},
    {ch:'וַיֹּאמֶר',  name:'v.3',  trans:'And he said',         desc:'Vav-consec. + Qal Imperfect 3ms of אמר',               ex:'The first divine speech act in Scripture'},
    {ch:'וַיַּבְדֵּל', name:'v.4',  trans:'And he separated',   desc:'Vav-consec. + Hiphil Imperfect — causative',            ex:'God actively creates order by separation'},
  ],

  deepDive: `
    <div class="lesson-h3">Verse 1 — בְּרֵאשִׁית בָּרָא אֱלֹהִים</div>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;padding:1.25rem 1.5rem;margin:1rem 0 1.5rem;">
      <div style="font-family:var(--hebrew);font-size:1.8rem;color:var(--gold);text-align:right;direction:rtl;line-height:2.2;margin-bottom:.75rem;">בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ</div>
      <div style="font-size:.85rem;color:var(--text-mid);font-style:italic;margin-bottom:.5rem;">Bereshit bara Elohim et hashamayim ve'et ha'arets</div>
      <div style="font-size:1rem;color:var(--text);font-weight:600;margin-bottom:1rem;">"In the beginning, God created the heavens and the earth."</div>
      <div style="font-size:.88rem;color:var(--text-mid);line-height:1.9;">
        <strong style="color:var(--text);">בְּרֵאשִׁית</strong> = in the beginning (בְּ + רֵאשִׁית — no article! The beginning itself is indefinite/absolute) &nbsp;·&nbsp;
        <strong style="color:var(--text);">בָּרָא</strong> = he created (Qal Perfect 3ms of ברא — only God is ever the subject of this verb) &nbsp;·&nbsp;
        <strong style="color:var(--text);">אֱלֹהִים</strong> = God (grammatically plural, theologically singular — plural of majesty) &nbsp;·&nbsp;
        <strong style="color:var(--text);">אֵת</strong> = direct object marker (untranslated — signals the direct object follows) &nbsp;·&nbsp;
        <strong style="color:var(--text);">הַשָּׁמַיִם</strong> = the heavens (הַ + שָׁמַיִם — dual/plural) &nbsp;·&nbsp;
        <strong style="color:var(--text);">וְאֵת הָאָרֶץ</strong> = and the earth (וְ + אֵת + הַ + אָרֶץ)
      </div>
    </div>

    <div class="lesson-h3">Verse 2 — וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ</div>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;padding:1.25rem 1.5rem;margin:1rem 0 1.5rem;">
      <div style="font-family:var(--hebrew);font-size:1.6rem;color:var(--gold);text-align:right;direction:rtl;line-height:2;margin-bottom:.75rem;">וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ וְחֹשֶׁךְ עַל-פְּנֵי תְהוֹם וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל-פְּנֵי הַמָּיִם</div>
      <div style="font-size:.85rem;color:var(--text-mid);font-style:italic;margin-bottom:.5rem;">veha'arets hayetah tohu vavohu vechoshekh al-penei tehom veruach Elohim merachefet al-penei hamayim</div>
      <div style="font-size:1rem;color:var(--text);font-weight:600;margin-bottom:1rem;">"The earth was without form and void, and darkness was over the face of the deep. And the Spirit of God was hovering over the face of the waters."</div>
      <div style="font-size:.88rem;color:var(--text-mid);line-height:1.9;">
        <strong style="color:var(--text);">הָיְתָה</strong> = was (Qal Perfect 3fs — earth is fem.) &nbsp;·&nbsp;
        <strong style="color:var(--text);">תֹהוּ וָבֹהוּ</strong> = formless and void (rhyming pair — the primordial chaos) &nbsp;·&nbsp;
        <strong style="color:var(--text);">פְּנֵי תְהוֹם</strong> = face of the deep (construct chain) &nbsp;·&nbsp;
        <strong style="color:var(--text);">רוּחַ אֱלֹהִים</strong> = Spirit of God (construct chain — ruach is feminine!) &nbsp;·&nbsp;
        <strong style="color:var(--text);">מְרַחֶפֶת</strong> = was hovering (Piel Participle feminine — agreeing with ruach)
      </div>
    </div>

    <div class="lesson-h3">Verse 3 — וַיֹּאמֶר אֱלֹהִים יְהִי אוֹר</div>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;padding:1.25rem 1.5rem;margin:1rem 0 1.5rem;">
      <div style="font-family:var(--hebrew);font-size:1.6rem;color:var(--gold);text-align:right;direction:rtl;line-height:2;margin-bottom:.75rem;">וַיֹּאמֶר אֱלֹהִים יְהִי אוֹר וַיְהִי אוֹר</div>
      <div style="font-size:.85rem;color:var(--text-mid);font-style:italic;margin-bottom:.5rem;">Vayomer Elohim yehi or vayehi or</div>
      <div style="font-size:1rem;color:var(--text);font-weight:600;margin-bottom:1rem;">"And God said, 'Let there be light,' and there was light."</div>
      <div style="font-size:.88rem;color:var(--text-mid);line-height:1.9;">
        <strong style="color:var(--text);">וַיֹּאמֶר</strong> = and he said (Vav-consec. + Qal Imperfect 3ms of אמר) &nbsp;·&nbsp;
        <strong style="color:var(--text);">יְהִי</strong> = let there be (Qal Jussive 3ms of היה — a wish/command) &nbsp;·&nbsp;
        <strong style="color:var(--text);">אוֹר</strong> = light (masculine noun) &nbsp;·&nbsp;
        <strong style="color:var(--text);">וַיְהִי אוֹר</strong> = and there was light (Vav-consec. + Qal Imperfect 3ms of היה)
      </div>
    </div>

    <div class="lesson-h3">Verses 4–5 — The Evaluation and Naming</div>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;padding:1.25rem 1.5rem;margin:1rem 0 1.5rem;">
      <div style="font-family:var(--hebrew);font-size:1.4rem;color:var(--gold);text-align:right;direction:rtl;line-height:2;margin-bottom:.75rem;">וַיַּרְא אֱלֹהִים אֶת-הָאוֹר כִּי-טוֹב וַיַּבְדֵּל אֱלֹהִים בֵּין הָאוֹר וּבֵין הַחֹשֶׁךְ׃ וַיִּקְרָא אֱלֹהִים לָאוֹר יוֹם וְלַחֹשֶׁךְ קָרָא לָיְלָה וַיְהִי-עֶרֶב וַיְהִי-בֹקֶר יוֹם אֶחָד׃</div>
      <div style="font-size:.85rem;color:var(--text-mid);font-style:italic;margin-bottom:.5rem;">Vayar Elohim et-ha'or ki-tov vavdel Elohim bein ha'or uvein hachoshekh. Vayiqra Elohim la'or yom velachoshekh qara laylah vayehi-erev vayehi-voqer yom echad.</div>
      <div style="font-size:1rem;color:var(--text);font-weight:600;margin-bottom:1rem;">"And God saw that the light was good. And God separated the light from the darkness. God called the light Day and the darkness he called Night. And there was evening and there was morning, the first day."</div>
      <div style="font-size:.88rem;color:var(--text-mid);line-height:1.9;">
        <strong style="color:var(--text);">וַיַּרְא</strong> = and he saw (Vav-consec. + Qal Imperfect 3ms of ראה) &nbsp;·&nbsp;
        <strong style="color:var(--text);">כִּי-טוֹב</strong> = that it was good (כִּי = that · טוֹב = good) &nbsp;·&nbsp;
        <strong style="color:var(--text);">וַיַּבְדֵּל</strong> = and he separated (Vav-consec. + Hiphil Imperfect 3ms — causative) &nbsp;·&nbsp;
        <strong style="color:var(--text);">בֵּין... וּבֵין</strong> = between... and between &nbsp;·&nbsp;
        <strong style="color:var(--text);">וַיִּקְרָא</strong> = and he called (Vav-consec. + Qal Imperfect 3ms of קרא) &nbsp;·&nbsp;
        <strong style="color:var(--text);">יוֹם אֶחָד</strong> = day one (not "first day" — ordinal comes later; "one day" is the original)
      </div>
    </div>`,

  writing: [
    {ch:'בְּרֵאשִׁית בָּרָא אֱלֹהִים', name:'Verse 1 — the opening', steps:['Write from memory right to left','In the beginning God created','בָּרָא = Qal Perfect 3ms — the verb of divine creation ex nihilo','Write 10 times. The first words of Scripture.']},
    {ch:'וַיֹּאמֶר אֱלֹהִים יְהִי אוֹר', name:'Verse 3 — divine speech', steps:['Write from memory: vayomer Elohim yehi or','And God said: let there be light','וַיֹּאמֶר = Vav-consec. + Qal Imperfect 3ms of אמר','יְהִי = Jussive — a wish/command','Write 10 times. The first divine speech act.']},
    {ch:'וַיְהִי אוֹר',               name:'And there was light', steps:['The most famous sentence in Scripture','Vav-consec. + Qal Imperfect 3ms of היה','Write 10 times right to left','Feel the weight of it.']},
    {ch:'וַיַּרְא אֱלֹהִים כִּי-טוֹב', name:'And God saw that it was good', steps:['Write the evaluation formula','וַיַּרְא = and he saw · כִּי = that · טוֹב = good','This formula appears 7 times in Genesis 1','Write 5 times.']},
    {ch:'יוֹם אֶחָד',                  name:'Day one', steps:['יוֹם = day · אֶחָד = one (cardinal, not ordinal)','The Hebrew says "one day" not "the first day" — important distinction','Write 5 times. Genesis uses "first" only after day six.']},
  ],

  vocab: [
    {ch:'תֹהוּ וָבֹהוּ', trans:'tohu vavohu',  meaning:'Formless and void',       note:'Rhyming pair — primordial chaos before creation'},
    {ch:'תְּהוֹם',       trans:'tehom',        meaning:'The deep / Abyss',         note:'The primordial waters — related to Akkadian Tiamat'},
    {ch:'אוֹר',          trans:'or',           meaning:'Light',                    note:'Created on Day 1 — before sun and moon (Day 4)'},
    {ch:'חֹשֶׁךְ',       trans:'choshekh',     meaning:'Darkness',                 note:'Not created — named and bounded'},
    {ch:'בֵּין',         trans:'bein',         meaning:'Between',                  note:'בֵּין ... וּבֵין = between ... and between'},
    {ch:'עֶרֶב',         trans:'erev',         meaning:'Evening',                  note:'Day begins with evening in Hebrew reckoning'},
    {ch:'בֹּקֶר',        trans:'boqer',        meaning:'Morning',                  note:'Evening + morning = one day — Sabbath logic'},
  ],

  scriptureRef: 'Genesis 1:1–3',
  scripture: {
    orig:  'בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ׃ וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ וְחֹשֶׁךְ עַל-פְּנֵי תְהוֹם וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל-פְּנֵי הַמָּיִם׃ וַיֹּאמֶר אֱלֹהִים יְהִי אוֹר וַיְהִי אוֹר',
    trans: "Bereshit bara Elohim et hashamayim ve'et ha'arets. Veha'arets hayetah tohu vavohu... veruach Elohim merachefet al-penei hamayim. Vayomer Elohim yehi or vayehi or.",
    eng:   '"In the beginning, God created the heavens and the earth. The earth was without form and void... And the Spirit of God was hovering over the face of the waters. And God said, \'Let there be light,\' and there was light." — Genesis 1:1–3',
  },
  scriptureNote: 'Count the Vav-consecutive verbs in vv. 3–5: וַיֹּאמֶר (he said), וַיְהִי (there was), וַיַּרְא (he saw), וַיַּבְדֵּל (he separated), וַיִּקְרָא (he called), וַיְהִי-עֶרֶב (there was evening), וַיְהִי-בֹקֶר (there was morning). Seven Vav-consecutives in three verses.',
  scriptureTip: '<strong>💡 Light before sun:</strong> Light is created on Day 1 (vv. 3–5). Sun and moon are created on Day 4 (vv. 14–19). This is not a scientific mistake — it is a theological statement. Light is not dependent on the sun; the sun is a servant of the Light. The same pattern appears in Revelation 22:5: "there will be no night... for the Lord God will be their light."',

  quiz: [
    {q:'What is the significance of the verb בָּרָא (bara) in Genesis 1:1?', ch:'בָּרָא', opts:['It is a common verb meaning to make or form — used by anyone','It is used exclusively with God as subject in the OT — implying radical newness or creation ex nihilo','It is a passive verb meaning "it was created" without an agent','It means to speak — creation happens through divine speech'], ans:1, ok:'Correct! בָּרָא is used exclusively with God as subject in the Old Testament. It implies creation of radical newness — and possibly creation ex nihilo (from nothing). When humans "make" things, the text uses other verbs like עָשָׂה (asah) or יָצַר (yatsar).', no:'בָּרָא is used only with God as subject in the OT. It implies radical divine creativity — unique to God\'s creative act.'},
    {q:'What does תֹהוּ וָבֹהוּ (tohu vavohu) describe — and what is unusual about it?', ch:'תֹהוּ וָבֹהוּ', opts:['The completed creation — orderly and beautiful','The primordial formless void before God\'s ordering — chaos before cosmos. Also a rare rhyming pair in biblical Hebrew.','The darkness that God creates on Day 1','The deep waters that God separates on Day 2'], ans:1, ok:'Correct! תֹהוּ וָבֹהוּ = formless and void — the primordial chaos before God\'s creative ordering. It is a rhyming pair (tohu vavohu) which is poetic and unusual in Hebrew prose, suggesting this verse was composed with liturgical care.', no:'תֹהוּ וָבֹהוּ = formless and void — primordial chaos. A rhyming pair expressing the un-formed, un-filled state before creation.'},
    {q:'What is the grammatical form of יְהִי (yehi) in "yehi or" (let there be light)?', ch:'יְהִי אוֹר', opts:['Qal Perfect 3ms — he created light','Qal Imperfect 3ms — he will create light','Qal Jussive 3ms — let there be light (a wish/command directed at non-existence)','Qal Imperative — create light!'], ans:2, ok:'Correct! יְהִי is a Qal Jussive — a wish or command. God directs a speech act at non-existence: "Let there be light." The jussive is the mood of divine creative command. Unlike an imperative (directed at a person), the jussive can be directed at anything — even nothing.', no:'יְהִי = Qal Jussive — let it be. A divine wish/command directed at non-existence calling light into being.'},
    {q:'Why does Genesis 1:5 say "day ONE" (יוֹם אֶחָד) rather than "the FIRST day"?', ch:'יוֹם אֶחָד', opts:['It is a translation error — it should say "first day"','Hebrew has no word for "first" — it always uses "one"','The cardinal "one" (אֶחָד) rather than ordinal "first" (רִאשׁוֹן) emphasises this day as complete in itself — a whole, not merely first in a series. Days 2–6 use ordinals.','The author made a grammatical mistake that was never corrected'], ans:2, ok:'Correct! Genesis uses the cardinal אֶחָד (one) for Day 1 and ordinals (שֵׁנִי, שְׁלִישִׁי = second, third...) for Days 2–6. Day one stands alone — complete in itself, not merely sequential. The unusual choice invites reflection: this day was not the first of a series but a unique, whole day.', no:'יוֹם אֶחָד = day one (cardinal), not יוֹם רִאשׁוֹן (first day, ordinal). Days 2–6 use ordinals. Day one is unique — complete in itself.'},
    {q:'What does the Spirit of God\'s "hovering" (מְרַחֶפֶת) over the waters suggest?', ch:'רוּחַ אֱלֹהִים מְרַחֶפֶת', opts:['The Spirit is separate from creation and uninvolved','The verb רחף suggests a bird hovering over its nest — protective, nurturing, ready to act. The Spirit is actively present to unformed creation.','The Spirit is identified with the waters','The hovering indicates divine absence from the creation'], ans:1, ok:'Correct! מְרַחֶפֶת (Piel Participle feminine, agreeing with רוּחַ which is feminine) — the root רחף appears only here and in Deuteronomy 32:11 where an eagle hovers/stirs over its nest. The Spirit hovers over chaos as a bird over its nest — protective, present, ready to bring forth life.', no:'מְרַחֶפֶת (Piel Participle) = hovering. The root appears in Deut. 32:11 for an eagle hovering over its nest — protective, nurturing, about to act. The Spirit is actively present to chaos.'},
  ],

  completionNote: 'You have read Genesis 1:1–5 in Biblical Hebrew — the first five verses of Scripture in the language in which they were first written. Every Vav-consecutive, every construct chain, every verb form is now familiar to you.',
  nextDay: 'Day 5: Romans 3:21–26 in Greek →',
};
