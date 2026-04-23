/* ═══════════════════════════════════════
   LESSON: Week 4 · Day 4 · Biblical Hebrew IX
   Construct Chains & Possession
   ═══════════════════════════════════════ */

LESSONS['4-4-Hebrew'] = {
  color:    'gold',
  subtitle: 'Week 4 · Day 4 · Biblical Hebrew IX',
  title:    'Construct Chains — The Hebrew Way of Possession',
  intro:    'Hebrew does not have a word for "of." Instead, it joins two nouns together in a structure called the construct chain — and this structure is everywhere in the Old Testament. "Word of God," "Son of Man," "House of Israel," "King of Kings" — all construct chains. Today you learn to recognise and read them.',
  sections: ['Introduction','The Construct Chain','How It Works','Reading Practice','First Sentences','Quiz','Complete'],

  beforeYouBegin: `
    <p class="lesson-p"><strong>The construct chain is one of the most distinctive features of Biblical Hebrew</strong> — and one of the most frequent. On virtually every page of the Hebrew Bible you will find multiple construct chains. Once you recognise the pattern, your reading comprehension will leap forward.</p>
    <div class="box box-fact"><strong>📜 Examples you already know:</strong> בֵּית לֶחֶם (Beit Lechem = House of Bread = Bethlehem) · בֶּן-אָדָם (Ben Adam = Son of Man) · מֶלֶךְ יִשְׂרָאֵל (Melech Yisrael = King of Israel) · דְּבַר יהוה (Devar YHWH = Word of the LORD) · רוּחַ אֱלֹהִים (Ruach Elohim = Spirit of God). Every one of these is a construct chain.</div>
    <div class="box box-tip"><strong>💡 The key rule:</strong> In a construct chain, the first noun is in the "construct state" (modified form) and the second noun is in the "absolute state" (normal form). The construct noun often shortens slightly. The definite article (הַ) goes on the second noun only — and it makes the whole chain definite.</div>`,

  alphabetIntro: 'Common construct chain patterns — showing how the first noun changes in the construct state.',
  alphabetNotes: `<div class="box box-note"><strong>Reading direction:</strong> Hebrew construct chains read right to left like everything else. The "possessed" noun comes first (construct state), then "of," then the "possessor" noun. So דְּבַר יהוה reads as: word [of] YHWH = Word of the LORD.</div>`,

  alphabet: [
    {ch:'דָּבָר',  name:'Absolute state',  sound:'davar (word)',      n:1, t:true},
    {ch:'דְּבַר',  name:'Construct state', sound:'devar (word of)',    n:2, t:true},
    {ch:'מֶלֶךְ',  name:'Absolute state',  sound:'melech (king)',     n:3, t:true},
    {ch:'מֶלֶךְ',  name:'Construct state', sound:'melech (king of)',  n:4, t:true},
    {ch:'בַּיִת',  name:'Absolute state',  sound:'bayit (house)',     n:5, t:true},
    {ch:'בֵּית',   name:'Construct state', sound:'beit (house of)',   n:6, t:true},
    {ch:'רוּחַ',   name:'Absolute state',  sound:'ruach (spirit)',    n:7, t:true},
    {ch:'רוּחַ',   name:'Construct state', sound:'ruach (spirit of)', n:8, t:true},
    {ch:'בֵּן',    name:'Absolute state',  sound:'ben (son)',         n:9, t:true},
    {ch:'בֶּן',    name:'Construct state', sound:'ben (son of)',      n:10,t:true},
  ],

  focusLetters: [
    {ch:'דְּבַר יהוה',  name:'Word of the LORD',  trans:'Devar YHWH',      desc:'Most common prophetic formula',         ex:'כֹּה אָמַר דְּבַר יהוה — Thus says the Word of the LORD'},
    {ch:'בֵּית לֶחֶם',  name:'House of Bread',    trans:'Beit Lechem',     desc:'Bethlehem — birthplace of David & Jesus',ex:'וְאַתָּה בֵּית-לֶחֶם — And you, Bethlehem'},
    {ch:'בֶּן-אָדָם',   name:'Son of Man',         trans:'Ben Adam',        desc:'Title used by Ezekiel and Jesus',       ex:'בֶּן-אָדָם עֲמֹד עַל-רַגְלֶיךָ — Son of Man, stand on your feet'},
    {ch:'רוּחַ אֱלֹהִים',name:'Spirit of God',    trans:'Ruach Elohim',    desc:'Genesis 1:2 — hovering over the waters', ex:'וְרוּחַ אֱלֹהִים מְרַחֶפֶת — and the Spirit of God was hovering'},
    {ch:'מֶלֶךְ מְלָכִים',name:'King of Kings',   trans:'Melech Melakhim', desc:'Superlative using repeated noun',        ex:'מֶלֶךְ מְלָכִים — the supreme king'},
  ],

  deepDive: `
    <div class="lesson-h3">How the Construct Chain Works</div>
    <p class="lesson-p">When two nouns are linked in a construct chain, the first noun (the one "possessed" or "of") goes into the <strong>construct state</strong>. This often involves a vowel change — typically the long vowels shorten. The second noun stays in its normal form (the <strong>absolute state</strong>).</p>

    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;overflow:hidden;margin:1.25rem 0;">
      <table style="width:100%;border-collapse:collapse;font-size:.9rem;">
        <thead><tr style="background:var(--bg3);"><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Noun</th><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Absolute</th><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Construct</th><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Change</th></tr></thead>
        <tbody>
          <tr><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">word</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.3rem;color:var(--gold);">דָּבָר</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.3rem;color:var(--gold);">דְּבַר</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-dim);font-size:.82rem;">Qamets→Shewa, Qamets→Patach</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">house</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.3rem;color:var(--gold);">בַּיִת</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.3rem;color:var(--gold);">בֵּית</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-dim);font-size:.82rem;">Patach→Tsere (vowel strengthens)</td></tr>
          <tr><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">king</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.3rem;color:var(--gold);">מֶלֶךְ</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.3rem;color:var(--gold);">מֶלֶךְ</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-dim);font-size:.82rem;">No change (some nouns unchanged)</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.5rem .8rem;color:var(--text-mid);">son</td><td style="padding:.5rem .8rem;font-family:var(--hebrew);font-size:1.3rem;color:var(--gold);">בֵּן</td><td style="padding:.5rem .8rem;font-family:var(--hebrew);font-size:1.3rem;color:var(--gold);">בֶּן</td><td style="padding:.5rem .8rem;color:var(--text-dim);font-size:.82rem;">Tsere→Segol (slight shortening)</td></tr>
        </tbody>
      </table>
    </div>

    <div class="lesson-h3">The Definite Article in Construct Chains</div>
    <p class="lesson-p">A critical rule: <strong>the definite article (הַ) is NEVER placed on the construct noun</strong> — only on the absolute noun. Yet the whole chain becomes definite if the absolute noun is definite.</p>

    <div class="box box-note"><strong>Examples:</strong>
    דְּבַר יהוה = Word of the LORD (definite — YHWH is a proper noun, inherently definite)
    דְּבַר הַמֶּלֶךְ = Word of the king (הַ on מֶּלֶךְ makes the whole chain definite)
    דְּבַר מֶלֶךְ = Word of a king (no article — indefinite)</div>

    <div class="lesson-h3">The Prophetic Formula — כֹּה אָמַר יהוה</div>
    <p class="lesson-p">The most common phrase in the Hebrew prophets is <strong>כֹּה אָמַר יהוה</strong> (Koh amar YHWH = "Thus says the LORD"). This formula introduces almost every prophetic oracle. כֹּה = thus/so · אָמַר = he said (Qal Perfect 3ms) · יהוה = the LORD. This is followed by the divine message — often including a construct chain like דְּבַר יהוה (word of the LORD).</p>

    <div class="lesson-h3">The Hebrew Superlative — Repeated Noun</div>
    <p class="lesson-p">Hebrew forms the superlative using a construct chain with the same noun repeated: <strong>מֶלֶךְ מְלָכִים</strong> (king of kings) = the supreme king · <strong>שִׁיר הַשִּׁירִים</strong> (Song of Songs) = the greatest song · <strong>קֹדֶשׁ הַקֳּדָשִׁים</strong> (Holy of Holies) = the most holy place. "Vanity of vanities" in Ecclesiastes is the same pattern.</p>
    <div class="box box-tip"><strong>💡 Recognition tip:</strong> Whenever you see two nouns side by side in Hebrew with no connecting word between them — it is almost certainly a construct chain. The "of" is always implied, never written.</div>`,

  writing: [
    {ch:'דְּבַר יהוה',   name:'Word of the LORD', steps:['דְּבַר = construct state of דָּבָר (word)','יהוה = absolute — the divine name needs no article','Together: Word of the LORD — the prophetic formula','Appears over 250 times in the Hebrew Bible','Write it 10 times right to left. Say "Word of the LORD" each time.']},
    {ch:'רוּחַ אֱלֹהִים', name:'Spirit of God',    steps:['רוּחַ = construct state (unchanged here — ruach)','אֱלֹהִים = absolute — God (proper name, no article needed)','Together: Spirit of God — Genesis 1:2','Write it 10 times. This is the first mention of the Spirit in Scripture.']},
    {ch:'בֵּן-אָדָם',    name:'Son of Man',        steps:['בֶּן = construct (son of)','אָדָם = absolute (Adam/humankind)','Together: Son of Man — Ezekiel\'s title and Jesus\' self-designation','The hyphen (maqqef) connects them tightly','Write it 10 times.']},
    {ch:'בֵּית לֶחֶם',   name:'Bethlehem',         steps:['בֵּית = construct state of בַּיִת (house) — vowel shifts','לֶחֶם = absolute (bread)','Together: House of Bread = Bethlehem','David was born here. Jesus was born here. Both deliberately fulfil prophecy.','Write it 10 times.']},
    {ch:'קֹדֶשׁ הַקֳּדָשִׁים', name:'Holy of Holies', steps:['קֹדֶשׁ = construct (holy of)','הַקֳּדָשִׁים = definite plural absolute (the holies)','Together: the most holy — the superlative via construct chain repetition','The innermost room of the Tabernacle/Temple where God\'s presence dwelt','Write it 10 times.']},
  ],

  vocab: [
    {ch:'דְּבַר יהוה',    trans:"devar YHWH",    meaning:'Word of the LORD',   note:'Prophetic formula — 250+ times in OT'},
    {ch:'בֵּן-אָדָם',     trans:'ben adam',       meaning:'Son of Man',          note:'Ezekiel title · Jesus\' self-designation'},
    {ch:'רוּחַ אֱלֹהִים', trans:'ruach Elohim',  meaning:'Spirit of God',       note:'Genesis 1:2'},
    {ch:'בֵּית יִשְׂרָאֵל',trans:'beit Yisrael', meaning:'House of Israel',     note:'Corporate term for God\'s covenant people'},
    {ch:'מֶלֶךְ מְלָכִים',trans:'melech melakhim',meaning:'King of Kings',      note:'Superlative construct — the supreme king'},
    {ch:'שִׁיר הַשִּׁירִים',trans:'shir hashirim', meaning:'Song of Songs',      note:'Superlative — the greatest song'},
    {ch:'קֹדֶשׁ הַקֳּדָשִׁים',trans:'qodesh haqodashim',meaning:'Holy of Holies',note:'The innermost sanctuary'},
  ],

  scriptureRef: 'Genesis 1:2',
  scripture: {
    orig:  'וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל-פְּנֵי הַמָּיִם',
    trans: 'Ve-ruach Elohim merachefet al-penei hamayim',
    eng:   '"And the Spirit of God was hovering over the face of the waters." — Genesis 1:2',
  },
  scriptureNote: 'Find the construct chain: רוּחַ אֱלֹהִים (ruach Elohim — Spirit of God) · פְּנֵי הַמָּיִם (penei hamayim — face of the waters — another construct chain!) · מְרַחֶפֶת = she was hovering (Piel Participle feminine — the Spirit is feminine gender in Hebrew).',
  scriptureTip: '<strong>💡 Two construct chains in one verse:</strong> רוּחַ אֱלֹהִים (Spirit of God) and פְּנֵי הַמָּיִם (face of the waters). The second is particularly beautiful — the waters have a "face" (פָּנִים, panim) — a surface, a presence. The Spirit hovers over the face of the deep like a mother bird over her nest.',

  quiz: [
    {q:'What is a Hebrew construct chain — and what English word does it replace?', ch:'', opts:['A chain of verbs — replaces "and then"','Two nouns joined together — replaces the English word "of"','A series of adjectives — replaces "very"','A prefix attached to verbs — replaces "will"'], ans:1, ok:'Correct! A construct chain joins two nouns together to express possession or relationship — replacing the English word "of." דְּבַר יהוה = Word [of] the LORD. The "of" is always implied, never written.', no:'A construct chain = two nouns joined — replacing "of." דְּבַר יהוה = Word of the LORD.'},
    {q:'Where does the definite article (הַ) go in a construct chain?', ch:'', opts:['On the first noun (the construct noun)','On both nouns','On the second noun (the absolute noun) only','It is never used in construct chains'], ans:2, ok:'Correct! The definite article NEVER goes on the construct noun — only on the absolute (second) noun. Yet the whole chain becomes definite. דְּבַר הַמֶּלֶךְ = the word of THE king (the whole phrase is definite).', no:'הַ goes on the SECOND noun (absolute) only — never on the construct. The whole chain becomes definite.'},
    {q:'What does בֵּן-אָדָם (ben adam) mean?', ch:'בֶּן-אָדָם', opts:['Son of God','Son of David','Son of Man','Son of Abraham'], ans:2, ok:'Correct! בֶּן-אָדָם = Son of Man. בֵּן = son (construct) · אָדָם = Adam/humankind (absolute). This is the title God uses for Ezekiel 93 times, and the title Jesus uses most frequently for himself in the Gospels.', no:'בֶּן-אָדָם = Son of Man. Used for Ezekiel in the OT and by Jesus as his primary self-designation.'},
    {q:'How does Hebrew form the superlative (e.g. "holiest," "greatest")?', ch:'קֹדֶשׁ הַקֳּדָשִׁים', opts:['By adding a special prefix to the adjective','By using a construct chain with the same noun repeated — "holy of holies"','By placing "very" (מְאֹד) before the noun','By using a comparative ending -er'], ans:1, ok:'Correct! Hebrew superlative = construct chain with the same noun repeated. קֹדֶשׁ הַקֳּדָשִׁים = Holy of Holies (most holy). שִׁיר הַשִּׁירִים = Song of Songs (greatest song). מֶלֶךְ מְלָכִים = King of Kings (supreme king).', no:'Hebrew superlative = repeated noun in construct chain. Holy of Holies = most holy. King of Kings = supreme king.'},
    {q:'What is the most common formula introducing a prophetic oracle in the Hebrew Bible?', ch:'כֹּה אָמַר יהוה', opts:['בְּרֵאשִׁית (In the beginning)','שְׁמַע יִשְׂרָאֵל (Hear, O Israel)','כֹּה אָמַר יהוה (Thus says the LORD)','וַיֹּאמֶר אֱלֹהִים (And God said)'], ans:2, ok:'Correct! כֹּה אָמַר יהוה (Koh amar YHWH = Thus says the LORD) introduces almost every prophetic oracle. כֹּה = thus · אָמַר = he said (Qal Perfect 3ms) · יהוה = the LORD. It signals divine speech.', no:'כֹּה אָמַר יהוה = Thus says the LORD. The formula introducing prophetic speech — appears hundreds of times in the prophets.'},
  ],

  completionNote: 'You have learned the Hebrew construct chain — one of the most distinctive and frequent structures in the Old Testament. You can now read "Word of the LORD," "Son of Man," "Spirit of God," and hundreds of other phrases in the original Hebrew.',
  nextDay: 'Day 5: Week 1–4 Review →',
};
