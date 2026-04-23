/* ═══════════════════════════════════════
   LESSON: Week 4 · Day 5 · Integrative Review
   All Three Languages — Weeks 1–4 Synthesis
   ═══════════════════════════════════════ */

LESSONS['4-5-Hebrew'] = {
  color:    'gold',
  subtitle: 'Week 4 · Day 5 · Integrative Review',
  title:    'Four Weeks — What You Now Know',
  intro:    'You have completed four weeks of serious language study. Today you review and consolidate everything — testing yourself across Hebrew, Greek, and Latin, reading Scripture in all three languages, and seeing how the grammar you have learned connects across all three traditions.',
  sections: ['Introduction','Hebrew Review','Greek Review','Latin Review','Reading Synthesis','Quiz','Complete'],

  beforeYouBegin: `
    <p class="lesson-p"><strong>This is a review and synthesis lesson.</strong> No new grammar — instead you test what you have learned, identify gaps, and consolidate your knowledge. The quiz at the end draws from all four weeks across all three languages.</p>
    <div class="box box-tip"><strong>💡 How to use this lesson:</strong> Work through each review section honestly. When you encounter something you have forgotten, do not just read the answer — write it out 5 times from memory before continuing. Retrieval practice is the most effective form of consolidation.</div>
    <div class="box box-fact"><strong>📜 What you have covered in four weeks:</strong> The complete Hebrew alphabet (22 letters + 5 final forms) · The Hebrew vowel system (Niqqud) · The Qal Perfect and Imperfect · Hebrew construct chains · The complete Greek alphabet (24 letters) · Greek noun cases and first declension · Greek Present Active Indicative and εἰμί · Latin pronunciation · Latin 1st and 2nd declension nouns · Latin 1st conjugation verbs and esse · John 1:1 in all three languages.</div>`,

  alphabetIntro: 'Review grid — key paradigms from all three languages side by side.',
  alphabetNotes: `<div class="box box-note"><strong>Your milestone:</strong> A student who has completed Weeks 1–4 knows enough of each language to begin reading simple texts with lexical aids. That is where you are. Everything from Week 5 onward builds reading fluency.</div>`,

  alphabet: [
    {ch:'בָּרָא',  name:'Heb. Qal Perf. 3ms',sound:'He created',       n:1, t:true},
    {ch:'יִשְׁמֹר',name:'Heb. Qal Imperf. 3ms',sound:'He will keep',   n:2, t:true},
    {ch:'דְּבַר', name:'Heb. Construct',       sound:'Word of',         n:3, t:true},
    {ch:'λύω',    name:'Grk. Pres. Act. 1s',   sound:'I loose',         n:4, t:true},
    {ch:'ἐστίν',  name:'Grk. εἰμί 3s',         sound:'He/She/It is',   n:5, t:true},
    {ch:'ἡ ἀγάπη',name:'Grk. 1st Decl. Nom.',  sound:'The love',        n:6, t:true},
    {ch:'amo',    name:'Lat. 1st Conj. 1s',     sound:'I love',          n:7, t:true},
    {ch:'est',    name:'Lat. esse 3s',           sound:'He/She/It is',   n:8, t:true},
    {ch:'Dei',    name:'Lat. 2nd Decl. Gen.',   sound:'Of God',          n:9, t:true},
    {ch:'Credo',  name:'Lat. 3rd Conj. 1s',     sound:'I believe',       n:10,t:true},
  ],

  focusLetters: [
    {ch:'שָׁמַר', name:'Hebrew root',   trans:'To keep/guard',  desc:'Qal Perfect: שָׁמַר · Imperfect: יִשְׁמֹר',  ex:'יִשְׁמֹר יהוה צֵאתְךָ — The LORD will keep your going out'},
    {ch:'λόγος',  name:'Greek noun',    trans:'Word (nom.)',     desc:'Gen: λόγου · Dat: λόγῳ · Acc: λόγον',        ex:'ὁ λόγος ἦν πρὸς τὸν θεόν'},
    {ch:'Verbum', name:'Latin noun',    trans:'Word (nom.)',     desc:'Gen: Verbi · Dat: Verbo · Acc: Verbum',       ex:'In principio erat Verbum'},
    {ch:'יהוה',   name:'Divine name',   trans:'The LORD',       desc:'All four letters now known: י-ה-ו-ה',        ex:'יהוה רֹעִי — The LORD is my shepherd'},
    {ch:'ἐγώ εἰμι',name:'I AM (Greek)', trans:'ego eimi',       desc:'Echoes Exodus 3:14 — divine name claim',      ex:'ἐγώ εἰμι ἡ ὁδὸς — I am the way'},
  ],

  deepDive: `
    <div class="lesson-h3">Hebrew — What You Know</div>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;padding:1.25rem 1.5rem;margin:1rem 0 1.5rem;">
      <p style="color:var(--text-mid);font-size:.92rem;margin-bottom:.75rem;"><strong style="color:var(--text);">Alphabet:</strong> All 22 letters + 5 final forms (כ→ך, מ→ם, נ→ן, פ→ף, צ→ץ)</p>
      <p style="color:var(--text-mid);font-size:.92rem;margin-bottom:.75rem;"><strong style="color:var(--text);">Vowels:</strong> Complete Niqqud system — Qamets, Patach, Tsere, Segol, Chirik, Cholam, Shureq, Qibbuts, Shewa</p>
      <p style="color:var(--text-mid);font-size:.92rem;margin-bottom:.75rem;"><strong style="color:var(--text);">Verbs:</strong> Qal Perfect (suffixes: __, ָה, תָּ, תְּ, תִּי, וּ, תֶּם, תֶּן, נוּ) · Qal Imperfect (prefixes: יִ, תִּ, אֶ, נִ) · Vav-consecutive</p>
      <p style="color:var(--text-mid);font-size:.92rem;margin-bottom:.75rem;"><strong style="color:var(--text);">Grammar:</strong> Construct chains · Four key prefixes (הַ, וְ, בְּ, לְ) · No present "to be"</p>
      <p style="color:var(--text-mid);font-size:.92rem;"><strong style="color:var(--text);">Texts read:</strong> Genesis 1:1–3 · Psalm 23:1–3 · Isaiah 6:3</p>
    </div>

    <div class="lesson-h3">Greek — What You Know</div>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;padding:1.25rem 1.5rem;margin:1rem 0 1.5rem;">
      <p style="color:var(--text-mid);font-size:.92rem;margin-bottom:.75rem;"><strong style="color:var(--text);">Alphabet:</strong> All 24 letters with uppercase and lowercase</p>
      <p style="color:var(--text-mid);font-size:.92rem;margin-bottom:.75rem;"><strong style="color:var(--text);">Cases:</strong> Nominative · Genitive · Dative · Accusative · Vocative — with the article (ὁ ἡ τό)</p>
      <p style="color:var(--text-mid);font-size:.92rem;margin-bottom:.75rem;"><strong style="color:var(--text);">Verbs:</strong> Present Active Indicative (-ω -εις -ει -ομεν -ετε -ουσιν) · εἰμί (εἰμί εἶ ἐστίν ἐσμέν ἐστέ εἰσίν)</p>
      <p style="color:var(--text-mid);font-size:.92rem;margin-bottom:.75rem;"><strong style="color:var(--text);">Declension:</strong> First declension feminine nouns (-η / -α)</p>
      <p style="color:var(--text-mid);font-size:.92rem;"><strong style="color:var(--text);">Texts read:</strong> John 1:1 · John 3:16 · John 14:6 · 1 Corinthians 13:13 · Revelation 22:13</p>
    </div>

    <div class="lesson-h3">Latin — What You Know</div>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;padding:1.25rem 1.5rem;margin:1rem 0 1.5rem;">
      <p style="color:var(--text-mid);font-size:.92rem;margin-bottom:.75rem;"><strong style="color:var(--text);">Pronunciation:</strong> Ecclesiastical rules — C before e/i = ch · G before e/i = j · V = always v · TI before vowel = tsi</p>
      <p style="color:var(--text-mid);font-size:.92rem;margin-bottom:.75rem;"><strong style="color:var(--text);">Cases:</strong> Six cases — Nominative · Genitive · Dative · Accusative · Ablative · Vocative</p>
      <p style="color:var(--text-mid);font-size:.92rem;margin-bottom:.75rem;"><strong style="color:var(--text);">Nouns:</strong> 1st declension (-a stem, fem.) · 2nd declension (-us/-um stem, masc./neut.)</p>
      <p style="color:var(--text-mid);font-size:.92rem;margin-bottom:.75rem;"><strong style="color:var(--text);">Verbs:</strong> 1st conjugation present (-o -as -at -amus -atis -ant) · esse (sum es est sumus estis sunt)</p>
      <p style="color:var(--text-mid);font-size:.92rem;"><strong style="color:var(--text);">Texts read:</strong> John 1:1 Vulgate · Nicene Creed · Gloria · Agnus Dei</p>
    </div>

    <div class="lesson-h3">The Three Languages Side by Side</div>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;overflow:hidden;margin:1.25rem 0;">
      <table style="width:100%;border-collapse:collapse;font-size:.88rem;">
        <thead><tr style="background:var(--bg3);"><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Concept</th><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Hebrew</th><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Greek</th><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Latin</th></tr></thead>
        <tbody>
          <tr><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">I love</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.2rem;color:var(--gold);">אָהַבְתִּי</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.1rem;color:var(--blue);">ἀγαπῶ</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">amo</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">God is</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.2rem;color:var(--gold);">אֱלֹהִים [implied]</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.1rem;color:var(--blue);">θεὸς ἐστίν</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">Deus est</td></tr>
          <tr><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Word</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.2rem;color:var(--gold);">דָּבָר</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.1rem;color:var(--blue);">λόγος</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">Verbum</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Spirit</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.2rem;color:var(--gold);">רוּחַ</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.1rem;color:var(--blue);">πνεῦμα</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">Spiritus</td></tr>
          <tr><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Life</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.2rem;color:var(--gold);">חַיִּים</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.1rem;color:var(--blue);">ζωή</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">vita</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.5rem .8rem;color:var(--text-mid);">Peace</td><td style="padding:.5rem .8rem;font-family:var(--hebrew);font-size:1.2rem;color:var(--gold);">שָׁלוֹם</td><td style="padding:.5rem .8rem;font-family:var(--greek);font-size:1.1rem;color:var(--blue);">εἰρήνη</td><td style="padding:.5rem .8rem;color:var(--gold);font-style:italic;">pax</td></tr>
        </tbody>
      </table>
    </div>`,

  writing: [
    {ch:'יהוה רֹעִי', name:'The LORD is my shepherd (Heb.)', steps:['Write this from memory — Psalm 23:1','יהוה = the divine name (four letters)','רֹעִי = my shepherd (Cholam + Chirik-Yod suffix)','No verb "is" — it is implied','Write 5 times. This is the psalm Jesus knew by heart.']},
    {ch:'ἐγώ εἰμι ἡ ὁδός', name:'I am the way (Greek)', steps:['Write this from memory — John 14:6','ἐγώ εἰμι = I AM (emphatic — divine echo)','ἡ ὁδός = the way (article + nominative)','Write 5 times. You are writing Jesus\' self-declaration in his original language.']},
    {ch:'Credo in unum Deum', name:'I believe in one God (Latin)', steps:['Write this from memory — Nicene Creed','Credo = I believe (3rd conj. 1st sing.)','in unum Deum = in one God (accusative after in)','Write 5 times. Billions of Christians have spoken these words.']},
    {ch:'בְּרֵאשִׁית בָּרָא אֱלֹהִים', name:'In the beginning God created (Heb.)', steps:['Write this from memory — Genesis 1:1','בְּרֵאשִׁית = in the beginning (Bet prefix + noun)','בָּרָא = he created (Qal Perfect 3ms)','אֱלֹהִים = God (subject after verb)','Write 5 times right to left.']},
    {ch:'Ἐν ἀρχῇ ἦν ὁ λόγος', name:'In the beginning was the Word (Greek)', steps:['Write this from memory — John 1:1','Ἐν ἀρχῇ = in the beginning (prep. + dative)','ἦν = was (imperfect of εἰμί)','ὁ λόγος = the Word (article + nominative)','Write 5 times.']},
  ],

  vocab: [
    {ch:'אָהַב',    trans:'ahav',    meaning:'He loved (Heb. Qal Perf. 3ms)',  note:'Root א-ה-ב — John 3:16 in Hebrew'},
    {ch:'ἀγαπῶ',   trans:'agapo',   meaning:'I love (Grk. Pres. Act. 1s)',     note:'Contract verb — 1 John 4:8'},
    {ch:'amo',      trans:'amo',     meaning:'I love (Lat. 1st conj. 1s)',      note:'1st conjugation model verb'},
    {ch:'יִשְׁמֹר', trans:'yishmor', meaning:'He will keep (Heb. Qal Imperf.)', note:'Yod prefix — Psalm 121'},
    {ch:'πιστεύει', trans:'pisteuei',meaning:'He/She believes (Grk. 3rd sing.)',note:'-ει ending — John 3:16'},
    {ch:'est',      trans:'est',     meaning:'He/She/It is (Lat. esse 3s)',     note:'Most common form of esse'},
    {ch:'דְּבַר יהוה',trans:"devar YHWH",meaning:'Word of the LORD (construct)',note:'Prophetic formula — 250+ times'},
  ],

  scriptureRef: 'Psalm 121:5–7',
  scripture: {
    orig:  'יהוה שֹׁמְרֶךָ יהוה צִלְּךָ עַל-יַד יְמִינֶךָ׃ יוֹמָם הַשֶּׁמֶשׁ לֹא-יַכֶּכָּה וְיָרֵחַ בַּלָּיְלָה׃ יהוה יִשְׁמָר-אוֹתְךָ מִכָּל-רָע יִשְׁמֹר אֶת-נַפְשֶׁךָ',
    trans: 'YHWH shomrekha YHWH tsilkha al-yad yeminekha. Yomam hashemesh lo-yakkekha veyareach ballaylah. YHWH yishmar-otkha mikol-ra yishmor et-nafshekha.',
    eng:   '"The LORD is your keeper; the LORD is your shade on your right hand. The sun shall not strike you by day, nor the moon by night. The LORD will keep you from all evil; he will keep your soul." — Psalm 121:5–7',
  },
  scriptureNote: 'Find: יהוה (three times — the covenant name whose letters you know) · יִשְׁמָר and יִשְׁמֹר (Qal Imperfect 3ms of שׁמר — he will keep) · נַפְשֶׁךָ (your soul — נֶפֶשׁ with suffix).',
  scriptureTip: '<strong>💡 The Keeper:</strong> שָׁמַר (shamar — to keep) is the verb whose paradigm you learned this week. Here it appears twice as a Qal Imperfect: יִשְׁמֹר (he will keep). The same verb you conjugated in the abstract is here keeping your soul in the Word of God. Grammar and devotion are never separate.',

  quiz: [
    {q:'What are the four prefix letters of the Hebrew Qal Imperfect (mnemonic: YTAN)?', ch:'', opts:['Yod, Shin, Mem, Nun','Yod, Tav, Aleph, Nun','Aleph, Bet, Gimel, He','Kaf, Lamed, Mem, Nun'], ans:1, ok:'Correct! YTAN — Yod (3rd m.), Tav (3rd f./2nd), Aleph (1st sing.), Nun (1st plural). These four letters at the start of a verb = Qal Imperfect. A pattern you will see on every page of the Hebrew Bible.', no:'YTAN — Yod, Tav, Aleph, Nun. The four Imperfect prefix letters. See them on every page of the Hebrew Bible.'},
    {q:'What are the six Greek Present Active Indicative endings in order?', ch:'', opts:['-ω -εις -ει -ομεν -ετε -ουσιν','-μι -ς -σι -μεν -τε -ασι','-ω -ης -η -ωμεν -ητε -ωσιν','-ο -ας -ατ -αμους -ατις -αντ'], ans:0, ok:'Correct! -ω -εις -ει -ομεν -ετε -ουσιν. These are the Present Active Indicative endings. λύω λύεις λύει λύομεν λύετε λύουσιν. Write them from memory 3 more times.', no:'-ω -εις -ει -ομεν -ετε -ουσιν. The Present Active Indicative endings. Learn these perfectly.'},
    {q:'What case does the Latin preposition "in" take when expressing direction or motion toward?', ch:'Credo in unum Deum', opts:['Nominative','Genitive','Dative','Accusative'], ans:3, ok:'Correct! Latin "in" takes the Accusative when expressing direction or motion (in unum Deum = into/toward one God). It takes the Ablative when expressing location (in terra = on/in the earth). The same preposition, two different cases, two different meanings.', no:'"In" + accusative = direction/motion. "In" + ablative = location. In unum Deum = Credo toward one God.'},
    {q:'What is a Hebrew construct chain — give the example of "Word of the LORD"?', ch:'דְּבַר יהוה', opts:['A verb + direct object: אָמַר יהוה (God said)','Two nouns joined to express possession/relationship: דְּבַר יהוה (Word of the LORD)','A noun + adjective: דָּבָר גָּדוֹל (a great word)','A prefix + noun: הַדָּבָר (the word)'], ans:1, ok:'Correct! A construct chain = two nouns joined — the first in construct state, the second in absolute state — replacing the English "of." דְּבַר יהוה = Word [of] the LORD. The prophetic formula.', no:'Construct chain = two nouns joined — replacing "of." דְּבַר יהוה = Word of the LORD.'},
    {q:'What is the Latin esse (to be) 1st person singular — and its Greek equivalent?', ch:'', opts:['est / ἐστίν','sum / εἰμί','sumus / ἐσμέν','es / εἶ'], ans:1, ok:'Correct! sum (Latin) = εἰμί (Greek) = I am. The most important verb in both languages. In Hebrew there is no present "to be" — it is implied. Three languages, three approaches to expressing divine existence.', no:'sum (Latin) = εἰμί (Greek) = I am. Both are the most important verbs in their languages.'},
  ],

  completionNote: 'Four weeks complete. You know three ancient alphabets, two complete verb systems, the Latin present tense, Greek case endings, Hebrew construct chains, and can read Scripture in the original languages. You are no longer a complete beginner.',
  nextDay: 'Week 5 · Day 1: Reading Psalm 23 in Full →',
};
