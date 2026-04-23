/* ═══════════════════════════════════════
   LESSON: Week 1 · Day 5 · Biblical Hebrew III
   Letters 11–15: Kaf, Lamed, Mem, Nun, Samekh
   ═══════════════════════════════════════ */

LESSONS['1-5-Hebrew'] = {
  color:    'gold',
  subtitle: 'Week 1 · Day 5 · Biblical Hebrew III',
  title:    'Letters 11 to 15',
  intro:    'You are more than halfway through the Hebrew alphabet. Today\'s five letters include Lamed — the tallest letter — and Mem and Nun, which both have special "final" forms when they appear at the end of a word. This is your last Hebrew lesson of Week 1.',
  sections: ['Introduction','The Alphabet','Today\'s Letters','Writing Practice','First Words','Quiz','Complete'],

  beforeYouBegin: `
    <div class="box box-tip"><strong>💡 Review first:</strong> Write all ten letters you know from memory — א ב ג ד ה ו ז ח ט י. Check each one. Fix any you miss before continuing.</div>
    <p class="lesson-p"><strong>Today introduces an important new concept:</strong> <em>Final forms</em>. Five Hebrew letters have a different shape when they appear at the end of a word. Today you meet two of them — Mem (מ/ם) and Nun (נ/ן).</p>
    <div class="box box-fact"><strong>📜 Did you know:</strong> The Hebrew word for king is מֶלֶךְ (melech). It contains three of today's letters — Mem, Lamed, and Kaf. You will see this word hundreds of times in the Old Testament, from the books of Samuel through to the Psalms: "The LORD is King (מֶלֶךְ) forever."</div>`,

  alphabetIntro: 'The full Hebrew alphabet. Letters 11–15 are highlighted today. You already know letters 1–10.',
  alphabetNotes: `
    <div class="box box-tip"><strong>💡 Almost there:</strong> After today you will know 15 of the 22 Hebrew letters — two thirds of the complete alphabet after just one week.</div>
    <div class="box box-note"><strong>Final forms:</strong> Mem (מ) becomes ם at word end. Nun (נ) becomes ן at word end. Both appear in the alphabet grid — notice the difference in shape.</div>`,

  alphabet: [
    {ch:'א', name:'Aleph', sound:'Silent', n:1},
    {ch:'ב', name:'Bet',   sound:'B/V',   n:2},
    {ch:'ג', name:'Gimel', sound:'G',     n:3},
    {ch:'ד', name:'Dalet', sound:'D',     n:4},
    {ch:'ה', name:'He',    sound:'H',     n:5},
    {ch:'ו', name:'Vav',   sound:'V/W',   n:6},
    {ch:'ז', name:'Zayin', sound:'Z',     n:7},
    {ch:'ח', name:'Chet',  sound:'Ch',    n:8},
    {ch:'ט', name:'Tet',   sound:'T',     n:9},
    {ch:'י', name:'Yod',   sound:'Y',     n:10},
    {ch:'כ', name:'Kaf',   sound:'K/Kh',  n:11, t:true},
    {ch:'ל', name:'Lamed', sound:'L',     n:12, t:true},
    {ch:'מ', name:'Mem',   sound:'M',     n:13, t:true},
    {ch:'נ', name:'Nun',   sound:'N',     n:14, t:true},
    {ch:'ס', name:'Samekh',sound:'S',     n:15, t:true},
    {ch:'ע', name:'Ayin',  sound:'Silent',n:16},
    {ch:'פ', name:'Pe',    sound:'P/F',   n:17},
    {ch:'צ', name:'Tsadi', sound:'Ts',    n:18},
    {ch:'ק', name:'Qof',   sound:'Q',     n:19},
    {ch:'ר', name:'Resh',  sound:'R',     n:20},
    {ch:'ש', name:'Shin',  sound:'Sh/S',  n:21},
    {ch:'ת', name:'Tav',   sound:'T',     n:22},
  ],

  focusLetters: [
    {ch:'כ', name:'Kaf/Khaf', trans:'K or Kh',    desc:'With dagesh = K; without = Kh (guttural)',  ex:'כָּבוֹד — kavod (Glory/Honour)'},
    {ch:'ל', name:'Lamed',    trans:'L',            desc:'Tallest Hebrew letter; shaped like a staff', ex:'לֵב — lev (Heart)'},
    {ch:'מ', name:'Mem',      trans:'M',            desc:'Final form ם at end of word',               ex:'מֶלֶךְ — melech (King)'},
    {ch:'נ', name:'Nun',      trans:'N',            desc:'Final form ן at end of word',               ex:'נֶפֶשׁ — nefesh (Soul)'},
    {ch:'ס', name:'Samekh',   trans:'S',            desc:'A closed circle — fully enclosed',          ex:'סֵפֶר — sefer (Book/Scroll)'},
  ],

  deepDive: `
    <div class="lesson-h3">כ Kaf / Khaf — K or Kh</div>
    <p class="lesson-p">Like Bet, Kaf has two pronunciations. With a Dagesh dot = hard <strong>K</strong>: כּ. Without = guttural <strong>Kh</strong> (like "Bach" or "loch"): כ. The word כָּבוֹד (kavod) means <em>glory</em> or <em>honour</em> — it is the great theological word for the weight and majesty of God's presence. When the Psalms speak of the glory of the LORD, this is the word used.</p>
    <div class="box box-fact"><strong>Kaf also has a final form:</strong> When Kaf appears at the end of a word it becomes ךְ or ךּ (Final Kaf) — a long descending stroke. You will see this often. The same dual-form rule applies as the regular Kaf.</div>

    <div class="lesson-h3">ל Lamed — The Shepherd's Staff</div>
    <p class="lesson-p">Lamed makes an <strong>L sound</strong> and is the <em>tallest letter</em> in the Hebrew alphabet — its upper loop rises above all other letters. The ancient pictograph was a shepherd's staff or ox-goad. Lamed as a prefix means "to" or "for." The word לֵב (lev) means <em>heart</em> — the seat of will, emotion, and intellect in Hebrew thought (not just emotion as in English).</p>
    <div class="box box-fact"><strong>Shema:</strong> The most important verse in Judaism — Deuteronomy 6:5 — uses Lamed: "You shall love the LORD your God with all your לֵבָב (levav, heart)." Jesus quotes this as the greatest commandment in Matthew 22:37. The heart (lev) in Hebrew is the whole inner person.</div>

    <div class="lesson-h3">מ Mem — Water and Final Form</div>
    <p class="lesson-p">Mem makes an <strong>M sound</strong>. The ancient pictograph was <em>water</em> (mayim — מַיִם). At the start or middle of a word: מ. At the <em>end</em> of a word: ם (Final Mem — a closed square). The word מֶלֶךְ (melech) means <em>king</em> and מָשִׁיחַ (mashiach) means <em>anointed one</em> — Messiah. Both begin with Mem.</p>
    <div class="box box-note"><strong>Final Mem:</strong> מ (open, at start/middle) → ם (closed square, at end of word). Same sound, different shape. You will see ם very frequently.</div>

    <div class="lesson-h3">נ Nun — Fish and Final Form</div>
    <p class="lesson-p">Nun makes an <strong>N sound</strong>. The ancient pictograph was a <em>fish</em>. At the start or middle: נ. At the end: ן (Final Nun — a long descending stroke that drops below the line). The word נֶפֶשׁ (nefesh) means <em>soul</em> or <em>living being</em> — it is used in Genesis 2:7 when God breathes life into Adam and he becomes a נֶפֶשׁ חַיָּה (nefesh chayyah) — a living soul.</p>
    <div class="box box-fact"><strong>Nefesh in Genesis 2:7:</strong> "Then the LORD God formed the man of dust from the ground and breathed into his nostrils the breath of life, and the man became a living soul (נֶפֶשׁ חַיָּה)." This is the moment of human creation — and it uses two of today's letters: Nun (נ) and Chet (ח from Day 3).</div>

    <div class="lesson-h3">ס Samekh — The Closed Circle</div>
    <p class="lesson-p">Samekh makes an <strong>S sound</strong> and is distinctive for being a <em>fully closed circle</em> or rounded rectangle. Like Pe (פ) it looks enclosed. The word סֵפֶר (sefer) means <em>book</em> or <em>scroll</em> — the root of the words for scribe (סוֹפֵר, sofer) and literature. The five books of Moses are called חֲמִשָּׁה חוּמְשֵׁי תוֹרָה — but each individual scroll is a סֵפֶר.</p>
    <div class="box box-tip"><strong>💡 Memory:</strong> Kaf = glory/K · Lamed = tallest/heart · Mem = water/king/final-ם · Nun = fish/soul/final-ן · Samekh = closed circle/book</div>`,

  writing: [
    {ch:'כ', name:'Kaf',    steps:['A curved stroke bending to the right — like a cupped hand','Think of it as an open palm facing left','Without dagesh it sounds guttural (Kh); with dagesh it sounds hard (K)','The final form ךְ is a long straight stroke descending below the line','Write כ 10 times, then ך 5 times.']},
    {ch:'ל', name:'Lamed',  steps:['Start with a curved base (like a backwards C or J)','Then add a tall upward loop rising well above the other letters','Lamed is the only letter that rises above the top line — it is the tallest','Think of a shepherd\'s staff hooking up into the sky','Write it 10 times, ensuring the top loop rises clearly above the line.']},
    {ch:'מ', name:'Mem',    steps:['The regular Mem (מ) looks like a squared-off shape open at the bottom-right','The Final Mem (ם) is a completely closed square','Practice both forms — they appear constantly in Hebrew text','Write מ 10 times, then ם 10 times side by side.']},
    {ch:'נ', name:'Nun',    steps:['The regular Nun (נ) is a short diagonal stroke with a foot — like a small J','The Final Nun (ן) is a long straight stroke descending below the baseline','The final form is one of the longest descending strokes in the alphabet','Write נ 10 times, then ן 10 times.']},
    {ch:'ס', name:'Samekh', steps:['A rounded closed shape — like a circle or rounded rectangle','Fully enclosed — no openings anywhere','Compare with Mem (מ) which is open at the bottom-right','Write it 10 times, keeping the shape fully closed.']},
  ],

  vocab: [
    {ch:'כָּבוֹד',  trans:'kavod',   meaning:'Glory / Honour',     note:'Kaf — the weight of God\'s presence'},
    {ch:'לֵב',     trans:'lev',     meaning:'Heart',               note:'Lamed — whole inner person'},
    {ch:'מֶלֶךְ',  trans:'melech',  meaning:'King',                note:'Mem + Lamed + Kaf'},
    {ch:'נֶפֶשׁ',  trans:'nefesh',  meaning:'Soul / Living being', note:'Nun — Genesis 2:7'},
    {ch:'סֵפֶר',   trans:'sefer',   meaning:'Book / Scroll',       note:'Samekh — root of scribe'},
    {ch:'מָשִׁיחַ', trans:'mashiach',meaning:'Messiah / Anointed',  note:'Mem — the anointed King'},
    {ch:'מַיִם',   trans:'mayim',   meaning:'Water',               note:'Mem — ancient pictograph'},
  ],

  scriptureRef: 'Psalm 24:10',
  scripture: {
    orig:  'יהוה צְבָאוֹת הוּא מֶלֶךְ הַכָּבוֹד',
    trans: 'YHWH Tseva\'ot hu melech hakavod',
    eng:   '"The LORD of hosts — he is the King of Glory." — Psalm 24:10',
  },
  scriptureNote: 'Find: Yod (י) starting יהוה · He (ה) twice in יהוה · Mem (מ) in מֶלֶךְ (king) · Kaf (כ) in כָּבוֹד (glory) · He (ה) in הַכָּבוֹד (the glory).',
  scriptureTip:  '<strong>💡 Melech HaKavod:</strong> This phrase — King of Glory — uses two of today\'s key words: מֶלֶךְ (melech, king) and כָּבוֹד (kavod, glory). The Psalm asks "Who is this King of Glory?" and answers: יהוה — the very name whose letters you learned this week. You are beginning to read Scripture.',

  quiz: [
    {q:'What does לֵב (lev) mean in Hebrew — and how does it differ from the English word "heart"?', ch:'לֵב', opts:['Physical heart only','The emotion of love only','The whole inner person — will, intellect, and emotion','The spirit separate from the body'], ans:2, ok:'Correct! In Hebrew, לֵב (lev) means the whole inner person — will, mind, and emotion combined. It is richer than the English word "heart" which we tend to limit to emotion.', no:'לֵב (lev) = the whole inner person — will, intellect, and emotion. Richer than the English "heart."'},
    {q:'Mem (מ) and Nun (נ) both have final forms. What triggers the use of the final form?', ch:'', opts:['When the word is a noun','When the letter appears at the end of a word','When the letter has a dagesh','When the word is holy'], ans:1, ok:'Correct! Final forms are used when Mem or Nun appear at the END of a word. Mem: מ → ם. Nun: נ → ן. Same sound, different shape.', no:'Final forms are used when the letter appears at the END of a word. Mem: מ → ם. Nun: נ → ן.'},
    {q:'What does כָּבוֹד (kavod) mean?', ch:'כָּבוֹד', opts:['Peace','Glory / Honour','Blessing','Strength'], ans:1, ok:'Correct! כָּבוֹד (kavod) = glory or honour. It carries the sense of weight and majesty — the overwhelming presence of God. Used in Psalm 24:10: "The King of Glory."', no:'כָּבוֹד (kavod) = glory/honour — the weight and majesty of God\'s presence.'},
    {q:'What does מָשִׁיחַ (mashiach) mean?', ch:'מָשִׁיחַ', opts:['Prophet','Priest','Anointed One — Messiah','King of kings'], ans:2, ok:'Correct! מָשִׁיחַ (mashiach) = Anointed One — this is the Hebrew word "Messiah." The Greek equivalent is Χριστός (Christos) — Christ. Both mean the same thing: the anointed King.', no:'מָשִׁיחַ (mashiach) = Anointed One — Messiah. Greek equivalent: Χριστός (Christos) = Christ.'},
    {q:'Which letter is the tallest in the Hebrew alphabet, rising above all others?', ch:'', opts:['Aleph (א)','Lamed (ל)','Kaf (כ)','Nun (נ)'], ans:1, ok:'Correct! Lamed (ל) is the tallest Hebrew letter — its upper loop rises above the top line of the text. The ancient pictograph was a shepherd\'s staff.', no:'Lamed (ל) is the tallest letter in the Hebrew alphabet — its loop rises above all others.'},
  ],

  completionNote: 'You now know 15 of 22 Hebrew letters — two thirds of the alphabet after just one week. You have learned King (מֶלֶךְ), Glory (כָּבוֹד), Soul (נֶפֶשׁ), Heart (לֵב), and Messiah (מָשִׁיחַ).',
  nextDay: 'Week 2 · Day 1: Hebrew IV →',
};
