/* ═══════════════════════════════════════
   LESSON: Week 6 · Day 4 · Biblical Hebrew XIII
   The Piel Stem — Intensive Active
   ═══════════════════════════════════════ */

LESSONS['6-4-Hebrew'] = {
  color:    'gold',
  subtitle: 'Week 6 · Day 4 · Biblical Hebrew XIII',
  title:    'The Piel Stem — Intensive Active',
  intro:    'You now know Qal (simple active) and Niphal (simple passive). Today you learn Piel — the intensive active stem. The Piel often expresses repeated, intensive, or causative-like action, and it is the stem behind some of the most important verbs in the Psalms and Prophets, including the word for "bless" and "sanctify."',
  sections: ['Introduction','The Piel Pattern','The Paradigm','Key Piel Verbs','Reading Practice','Quiz','Complete'],

  beforeYouBegin: `
    <p class="lesson-p"><strong>The Piel intensifies or particularizes the action of the Qal.</strong> Where Qal שָׁבַר means "he broke," Piel שִׁבֵּר can mean "he broke into pieces" — a more thorough, repeated, or emphatic version of the same root idea. In other roots, the Piel develops a related but distinct meaning from the Qal — this is one of the more flexible Hebrew stems.</p>
    <div class="box box-fact"><strong>📜 Why the Piel matters:</strong> בֵּרַךְ (berakh — he blessed) is Piel. קִדֵּשׁ (qiddesh — he sanctified/made holy) is Piel. דִּבֵּר (dibber — he spoke) is Piel — note this is different from Qal אָמַר (he said); דִּבֵּר often carries a sense of formal or extended speech. These three verbs alone — bless, sanctify, speak — appear hundreds of times throughout Scripture.</div>
    <div class="box box-tip"><strong>💡 Recognition tip:</strong> Piel Perfect is marked by a Dagesh (doubling dot) in the middle root letter and a distinctive vowel pattern: קִטֵּל (qittel — with the doubled middle letter ט). No prefix like Niphal\'s Nun — the doubling IS the marker.</div>`,

  alphabetIntro: 'The Piel paradigm — Perfect, built on the root קָטַל and the very common root ברך (to bless).',
  alphabetNotes: `<div class="box box-note"><strong>The key visual marker:</strong> Piel Perfect 3ms pattern: קִטֵּל — Chirik under 1st letter, Dagesh (doubling) in 2nd letter, Tsere under 2nd letter. Compare Qal קָטַל (Qamets-Patach, no doubling).</div>`,

  alphabet: [
    {ch:'קִטֵּל',   name:'Piel Perf. 3ms',   sound:'qittel — he killed/destroyed',n:1, t:true},
    {ch:'קִטְּלָה', name:'Piel Perf. 3fs',   sound:'qittelah',                    n:2, t:true},
    {ch:'קִטַּלְתִּי',name:'Piel Perf. 1cs', sound:'qittalti',                    n:3, t:true},
    {ch:'בֵּרַךְ',  name:'Piel — he blessed',sound:'berakh',                       n:4, t:true},
    {ch:'קִדֵּשׁ',  name:'Piel — he sanctified',sound:'qiddesh',                   n:5, t:true},
    {ch:'דִּבֵּר',  name:'Piel — he spoke',  sound:'dibber',                        n:6, t:true},
    {ch:'הִלֵּל',   name:'Piel — he praised',sound:'hillel',                       n:7, t:true},
    {ch:'בִּקֵּשׁ',  name:'Piel — he sought', sound:'biqqesh',                       n:8, t:true},
    {ch:'שִׁבַּח',   name:'Piel — he praised highly',sound:'shibbach',               n:9, t:true},
    {ch:'יְבָרֵךְ',  name:'Piel Imperf. — he will bless',sound:'yevarekh',          n:10,t:true},
  ],

  focusLetters: [
    {ch:'בֵּרַךְ', name:'Berakh',          trans:'He blessed',  desc:'Piel Perfect 3ms of ברך',           ex:'Genesis 1:22 — God blessed every living creature'},
    {ch:'קִדֵּשׁ', name:'Qiddesh',         trans:'He sanctified/made holy', desc:'Piel Perfect 3ms of קדשׁ', ex:'Genesis 2:3 — God sanctified the seventh day'},
    {ch:'דִּבֵּר', name:'Dibber',          trans:'He spoke',    desc:'Piel — distinct from Qal אָמַר (said)',ex:'דַּבֵּר אֱלֵיהֶם — speak to them (imperative)'},
    {ch:'הִלֵּל',  name:'Hillel',          trans:'He praised',  desc:'Root of "Hallelujah" — הַלְלוּ יָהּ',  ex:'Praise the LORD — imperative plural Piel'},
    {ch:'בִּקֵּשׁ', name:'Biqqesh',         trans:'He sought',   desc:'Piel — to seek earnestly',           ex:'בַּקְּשׁוּ אֶת-יהוה — seek the LORD'},
  ],

  deepDive: `
    <div class="lesson-h3">The Range of the Piel</div>
    <p class="lesson-p">The Piel stem can express several related ideas, depending on the root:</p>
    <p class="lesson-p"><strong>1. Intensive action:</strong> A more thorough or repeated version of the Qal meaning. שָׁבַר (Qal: he broke) → שִׁבֵּר (Piel: he smashed/shattered).</p>
    <p class="lesson-p"><strong>2. Causative-like action:</strong> Causing a state. קָדַשׁ (Qal: to be holy) → קִדֵּשׁ (Piel: to make holy, to sanctify).</p>
    <p class="lesson-p"><strong>3. Denominative action:</strong> Forming a verb from a noun. דָּבָר (noun: word) → דִּבֵּר (Piel verb: to speak words, to declare).</p>
    <p class="lesson-p"><strong>4. Distinct lexical meaning:</strong> Sometimes the Piel simply has its own established meaning, related to but distinct from the Qal. This is the case with many of the most common Piel verbs.</p>

    <div class="lesson-h3">The Piel Perfect Paradigm</div>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;overflow:hidden;margin:1.25rem 0;">
      <table style="width:100%;border-collapse:collapse;font-size:.88rem;">
        <thead><tr style="background:var(--bg3);"><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Person</th><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Hebrew (קטל root)</th><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Translation</th></tr></thead>
        <tbody>
          <tr><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">3ms</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.3rem;color:var(--gold);">קִטֵּל</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">he killed/destroyed thoroughly</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">3fs</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.3rem;color:var(--gold);">קִטְּלָה</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">she killed/destroyed</td></tr>
          <tr><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">2ms</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.3rem;color:var(--gold);">קִטַּלְתָּ</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">you (m.) killed/destroyed</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">1cs</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.3rem;color:var(--gold);">קִטַּלְתִּי</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">I killed/destroyed</td></tr>
          <tr><td style="padding:.5rem .8rem;color:var(--text-mid);">3cp</td><td style="padding:.5rem .8rem;font-family:var(--hebrew);font-size:1.3rem;color:var(--gold);">קִטְּלוּ</td><td style="padding:.5rem .8rem;color:var(--text-mid);">they killed/destroyed</td></tr>
        </tbody>
      </table>
    </div>

    <div class="lesson-h3">Three Essential Piel Verbs</div>
    <p class="lesson-p"><strong>בֵּרַךְ (berakh)</strong> — he blessed. This is one of the most frequent verbs in Genesis. God blesses the creatures (1:22), Adam and Eve (1:28), the Sabbath (2:3), and Abraham (12:2–3). The Piel here suggests the fullness and intentionality of divine blessing — not a passing remark but a deliberate, effective declaration that brings about flourishing.</p>
    <p class="lesson-p"><strong>קִדֵּשׁ (qiddesh)</strong> — he sanctified, made holy, set apart. Genesis 2:3: God "sanctified" the seventh day. This is a causative-type Piel: God causes the day to be in a state of holiness — distinct, set apart for him. The same root gives us קָדוֹשׁ (kadosh, holy) which you learned earlier, and קִדּוּשׁ (Kiddush, the Jewish blessing over wine).</p>
    <p class="lesson-p"><strong>דִּבֵּר (dibber)</strong> — he spoke. Distinct from Qal אָמַר (amar, he said, which usually introduces direct quotation). דִּבֵּר often describes the act of speaking itself — formal, extended, or authoritative speech. "God spoke (וַיְדַבֵּר) all these words" introduces the Ten Commandments (Exodus 20:1) — Piel imperfect with Vav-consecutive.</p>
    <div class="box box-fact"><strong>Hallelujah:</strong> הַלְלוּ-יָהּ (Hallelu-Yah) = "Praise the LORD!" הַלְלוּ is a Piel imperative plural of הלל (to praise). This single Hebrew word, transliterated directly into English, Greek, and Latin without translation, has become one of the most universally recognised words in any language across all Christian traditions.</div>
    <div class="box box-tip"><strong>💡 Memory:</strong> Piel = doubled middle letter (dagesh), no prefix. Often intensive, causative, or denominative in meaning. Key verbs: berakh (bless), qiddesh (sanctify), dibber (speak), hillel (praise).</div>`,

  writing: [
    {ch:'בֵּרַךְ',   name:'Berakh — he blessed',     steps:['Root: ב-ר-כ (to bless)','Piel Perfect 3ms — doubled Resh (with dagesh)','Pronunciation: be-RAKH','Genesis 1:22 — God blesses the creatures of sea and air','Write it 15 times. One of the most important verbs in Genesis.']},
    {ch:'קִדֵּשׁ',   name:'Qiddesh — he sanctified', steps:['Root: ק-ד-שׁ (to be holy)','Piel Perfect 3ms — doubled Dalet (with dagesh)','Pronunciation: kid-DESH','Genesis 2:3 — God sanctified the seventh day','Write it 10 times. Compare with the adjective קָדוֹשׁ (holy) you already know.']},
    {ch:'דִּבֵּר',   name:'Dibber — he spoke',       steps:['Root: ד-ב-ר (related to דָּבָר, word)','Piel Perfect 3ms — doubled Bet (with dagesh)','Pronunciation: dib-BER','Exodus 20:1 (Imperfect w/ Vav-consec.): "And God spoke (וַיְדַבֵּר) all these words"','Write it 10 times.']},
    {ch:'הַלְלוּ-יָהּ',name:'Hallelu-Yah — Praise the LORD!', steps:['הַלְלוּ = Piel imperative plural of הלל (to praise)','יָהּ = shortened form of YHWH','Together: "Praise the LORD!" — used throughout the Psalms','Pronunciation: hal-le-LU-yah','Write it 15 times. A word known in every language, untranslated.']},
    {ch:'בִּקֵּשׁ',   name:'Biqqesh — he sought',     steps:['Root: ב-ק-שׁ (to seek)','Piel Perfect 3ms — doubled Qof (with dagesh)','Pronunciation: bik-KESH','"Seek (בַּקְּשׁוּ) the LORD while he may be found"','Write it 10 times.']},
  ],

  vocab: [
    {ch:'בֵּרַךְ',   trans:'berakh',  meaning:'He blessed',         note:'Piel — Genesis 1:22, 1:28, 12:2'},
    {ch:'קִדֵּשׁ',   trans:'qiddesh', meaning:'He sanctified/made holy',note:'Piel — Genesis 2:3'},
    {ch:'דִּבֵּר',   trans:'dibber',  meaning:'He spoke',           note:'Piel — distinct from Qal אמר'},
    {ch:'הִלֵּל',    trans:'hillel',  meaning:'He praised',         note:'Root of Hallelujah'},
    {ch:'בִּקֵּשׁ',   trans:'biqqesh', meaning:'He sought',          note:'Piel of בקשׁ — to seek earnestly'},
    {ch:'נִחֵם',     trans:'nichem',  meaning:'He comforted',       note:'Piel — Isaiah 40:1 "Comfort, comfort my people"'},
    {ch:'לִמֵּד',    trans:'limmed',  meaning:'He taught',          note:'Piel — Psalm 119 "teach me your statutes"'},
  ],

  scriptureRef: 'Genesis 2:3',
  scripture: {
    orig:  'וַיְבָרֶךְ אֱלֹהִים אֶת-יוֹם הַשְּׁבִיעִי וַיְקַדֵּשׁ אֹתוֹ',
    trans: "Vayevarekh Elohim et-yom hashevi'i vayeqaddesh oto",
    eng:   '"So God blessed the seventh day and made it holy." — Genesis 2:3',
  },
  scriptureNote: 'Find both Piel verbs: וַיְבָרֶךְ (vayevarekh — and he blessed, Vav-consec. + Piel Imperfect 3ms) · וַיְקַדֵּשׁ (vayeqaddesh — and he sanctified, Vav-consec. + Piel Imperfect 3ms). Both follow the same grammatical pattern — Vav-consecutive driving the Piel Imperfect.',
  scriptureTip: '<strong>💡 Blessing and sanctifying together:</strong> God does not merely rest on the seventh day — he actively blesses it (בֵּרַךְ) and sanctifies it (קִדֵּשׁ). Both verbs are Piel, expressing the deliberate, effective nature of divine action. The Sabbath is not neutral time; it is time that has been actively set apart and filled with blessing by God himself — the theological foundation for the entire Sabbath commandment.',

  quiz: [
    {q:'How do you recognise a Piel Perfect verb form?', ch:'קִטֵּל', opts:['A prefixed Nun (נ) before the root','A doubled middle root letter, marked by a Dagesh, with no prefix','A suffix -ti at the end','A prefixed Aleph (א) before the root'], ans:1, ok:'Correct! Piel is marked by a Dagesh (doubling dot) in the middle root letter — no prefix is added (unlike Niphal\'s Nun prefix). קִטֵּל has the doubled ט as its identifying mark.', no:'Piel = doubled middle root letter (Dagesh), no prefix. Compare with Niphal which DOES have a prefixed Nun.'},
    {q:'What does בֵּרַךְ (berakh) mean, and where does it appear prominently?', ch:'בֵּרַךְ', opts:['He created — used only in Genesis 1:1','He blessed — used throughout Genesis 1 (creatures, humans) and in the Abrahamic covenant (12:2-3)','He judged — a legal verb','He destroyed — opposite of blessing'], ans:1, ok:'Correct! בֵּרַךְ (berakh) = he blessed (Piel Perfect 3ms). It appears in Genesis 1:22 (sea creatures), 1:28 (humans), 2:3 (the Sabbath), and 12:2-3 (Abraham). The Piel suggests deliberate, effective divine blessing.', no:'בֵּרַךְ = he blessed. Appears throughout Genesis — creatures, humans, the Sabbath, and Abraham\'s covenant.'},
    {q:'How does דִּבֵּר (dibber, Piel) differ in nuance from אָמַר (amar, Qal) — both meaning roughly "to say/speak"?', ch:'', opts:['They are perfect synonyms with no difference','דִּבֵּר often describes formal, extended, or authoritative speech, while אָמַר typically introduces direct quotation','אָמַר is used only by God; דִּבֵּר is used only by humans','דִּבֵּר means to whisper; אָמַר means to shout'], ans:1, ok:'Correct! דִּבֵּר (Piel) often describes the broader act of speaking — formal, extended, authoritative — while אָמַר (Qal) typically introduces a specific direct quotation ("and he said, ..."). Exodus 20:1 uses דִּבֵּר to introduce the entire giving of the Ten Commandments as an authoritative speech-act.', no:'דִּבֵּר (Piel) = formal/extended/authoritative speech. אָמַר (Qal) = typically introduces direct quotation. Different nuances of "speaking."'},
    {q:'What does הַלְלוּ-יָהּ (Hallelu-Yah) literally mean, and what is its grammatical form?', ch:'הַלְלוּ-יָהּ', opts:['"He praised the LORD" — Piel Perfect statement','"Praise the LORD!" — Piel imperative plural (הַלְלוּ) + shortened divine name (יָהּ)','"I will praise the LORD" — Piel Imperfect 1cs','"The LORD is praised" — Niphal passive'], ans:1, ok:'Correct! הַלְלוּ-יָהּ = Praise (Piel imperative plural of הלל) + Yah (shortened form of YHWH). It is a direct command to praise, addressed to a plural audience — the congregation of worshippers — found throughout the Psalms.', no:'הַלְלוּ-יָהּ = "Praise (imperative, plural) the LORD (Yah)!" A command to a congregation, not a statement.'},
    {q:'In Genesis 2:3, what two Piel actions does God perform toward the seventh day?', ch:'וַיְבָרֶךְ... וַיְקַדֵּשׁ', opts:['He created it and named it','He blessed it (וַיְבָרֶךְ) and sanctified it (וַיְקַדֵּשׁ)','He rested on it and worked through it','He destroyed it and remade it'], ans:1, ok:'Correct! God blessed (וַיְבָרֶךְ, Piel) and sanctified/made holy (וַיְקַדֵּשׁ, Piel) the seventh day. Both verbs show deliberate divine action — the Sabbath is not neutral time but time actively set apart and filled with blessing.', no:'God blessed (וַיְבָרֶךְ) and sanctified (וַיְקַדֵּשׁ) the seventh day — both Piel verbs expressing deliberate divine action toward the Sabbath.'},
  ],

  completionNote: 'You have learned the Piel stem — Hebrew\'s intensive/causative active voice. You now know all three foundational verb stems (Qal, Niphal, Piel) and can read the verbs for bless, sanctify, speak, and praise throughout Scripture.',
  nextDay: 'Day 5: Greek Participles →',
};
