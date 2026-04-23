/* ═══════════════════════════════════════
   LESSON: Week 2 · Day 2 · Koine Greek III
   Letters 11–17: Lambda, Mu, Nu, Xi, Omicron, Pi, Rho
   ═══════════════════════════════════════ */

LESSONS['2-2-Greek'] = {
  color:    'blue',
  subtitle: 'Week 2 · Day 2 · Koine Greek III',
  title:    'Letters 11 to 17',
  intro:    'You know ten Greek letters. Today you add seven more — bringing you past the halfway mark of the Greek alphabet. Today\'s letters include Pi (the mathematical constant), Rho (the rolling R), and several letters that will look immediately familiar from English.',
  sections: ['Introduction','The Alphabet','Today\'s Letters','Writing Practice','First Words','Quiz','Complete'],

  beforeYouBegin: `
    <div class="box box-tip"><strong>💡 Review first:</strong> Write your ten letters from memory — Α Β Γ Δ Ε Ζ Η Θ Ι Κ (both upper and lowercase for each). Fix any gaps before continuing.</div>
    <p class="lesson-p"><strong>Good news:</strong> Several of today's letters look almost identical to their English counterparts — Mu (M), Nu (N), Omicron (O), Pi (Π), Rho (P shape but R sound). The challenge is that some <em>look</em> like English letters but make different sounds — pay close attention.</p>
    <div class="box box-fact"><strong>📜 Did you know:</strong> The Greek letter Pi (Π) is the origin of the mathematical constant π (3.14159...) — named after the first letter of the Greek word περιφέρεια (periphereia, circumference). Every time you see π in mathematics you are reading a Greek letter that also begins the word for "faith" in the New Testament: πίστις (pistis).</div>`,

  alphabetIntro: 'The full Greek alphabet. Letters 11–17 are highlighted today. You already know letters 1–10.',
  alphabetNotes: `
    <div class="box box-tip"><strong>💡 Progress:</strong> After today you will know 17 of 24 Greek letters — over two thirds complete.</div>
    <div class="box box-note"><strong>False friends warning:</strong> Rho (Ρ ρ) looks like English P but sounds like R. Nu (Ν ν) looks like English N — and actually sounds like N, so that one is fine. Mu (Μ μ) looks like English M — also fine. Omicron (Ο ο) looks like English O — also fine.</div>`,

  alphabet: [
    {ch:'Α α',name:'Alpha',   sound:'A',        n:1},  {ch:'Β β',name:'Beta',    sound:'B',       n:2},
    {ch:'Γ γ',name:'Gamma',   sound:'G',        n:3},  {ch:'Δ δ',name:'Delta',   sound:'D',       n:4},
    {ch:'Ε ε',name:'Epsilon', sound:'E (short)',n:5},  {ch:'Ζ ζ',name:'Zeta',    sound:'Z',       n:6},
    {ch:'Η η',name:'Eta',     sound:'E (long)', n:7},  {ch:'Θ θ',name:'Theta',   sound:'Th',      n:8},
    {ch:'Ι ι',name:'Iota',    sound:'I',        n:9},  {ch:'Κ κ',name:'Kappa',   sound:'K',       n:10},
    {ch:'Λ λ',name:'Lambda',  sound:'L',        n:11, t:true},
    {ch:'Μ μ',name:'Mu',      sound:'M',        n:12, t:true},
    {ch:'Ν ν',name:'Nu',      sound:'N',        n:13, t:true},
    {ch:'Ξ ξ',name:'Xi',      sound:'X / Ks',   n:14, t:true},
    {ch:'Ο ο',name:'Omicron', sound:'O (short)',n:15, t:true},
    {ch:'Π π',name:'Pi',      sound:'P',        n:16, t:true},
    {ch:'Ρ ρ',name:'Rho',     sound:'R',        n:17, t:true},
    {ch:'Σ σ/ς',name:'Sigma', sound:'S',        n:18},
    {ch:'Τ τ',name:'Tau',     sound:'T',        n:19}, {ch:'Υ υ',name:'Upsilon',sound:'U/Y',     n:20},
    {ch:'Φ φ',name:'Phi',     sound:'Ph/F',     n:21}, {ch:'Χ χ',name:'Chi',    sound:'Ch',      n:22},
    {ch:'Ψ ψ',name:'Psi',     sound:'Ps',       n:23}, {ch:'Ω ω',name:'Omega',  sound:'O (long)',n:24},
  ],

  focusLetters: [
    {ch:'Λλ', name:'Lambda',  trans:'L',         desc:'Looks like an upside-down V or a tent',        ex:'λόγος — logos (Word)'},
    {ch:'Μμ', name:'Mu',      trans:'M',         desc:'Looks like English M — same sound too',        ex:'μαθητής — mathetes (Disciple)'},
    {ch:'Νν', name:'Nu',      trans:'N',         desc:'Looks like English N — same sound',            ex:'νόμος — nomos (Law)'},
    {ch:'Ξξ', name:'Xi',      trans:'X / Ks',    desc:'Makes a Ks sound — like "axe" or "box"',      ex:'ξένος — xenos (Stranger/Foreigner)'},
    {ch:'Οο', name:'Omicron', trans:'O (short)', desc:'Short O — contrast with long Omega (ω)',       ex:'ὁδός — hodos (Way/Road)'},
    {ch:'Ππ', name:'Pi',      trans:'P',         desc:'Uppercase Π like two pillars — the math symbol!', ex:'πίστις — pistis (Faith)'},
    {ch:'Ρρ', name:'Rho',     trans:'R',         desc:'Looks like English P — but sounds like R!',   ex:'ῥῆμα — rhema (Word/Utterance)'},
  ],

  deepDive: `
    <div class="lesson-h3">Λ λ Lambda — L as in "Logos"</div>
    <p class="lesson-p">Lambda makes an <strong>L sound</strong>. The uppercase Λ looks like an inverted V or a tent — the ancient pictograph. The word λόγος (logos) — which you already know — begins with Lambda. Lambda is also used in physics for wavelength and in mathematics. In the NT, λαός (laos) means "people" — giving us "laity."</p>

    <div class="lesson-h3">Μ μ Mu — M as in "Messiah"</div>
    <p class="lesson-p">Mu makes an <strong>M sound</strong>. Uppercase Μ and lowercase μ both closely resemble English M. The word μαθητής (mathetes) means <em>disciple</em> or <em>learner</em> — root of "mathematics" (learning). Jesus calls twelve μαθηταί (mathetai, disciples). Every follower of Christ is called to be a mathetes — a lifelong learner.</p>
    <div class="box box-fact"><strong>Mathetes:</strong> The word μαθητής comes from the verb μανθάνω (manthano) = to learn. A disciple is literally one who learns. The Great Commission (Matthew 28:19) uses this word: "make disciples (μαθητεύσατε) of all nations." Discipleship is fundamentally an educational calling.</div>

    <div class="lesson-h3">Ν ν Nu — N as in "Nomos"</div>
    <p class="lesson-p">Nu makes an <strong>N sound</strong>. Uppercase Ν looks like English N; lowercase ν looks like a small v with a flat bottom. The word νόμος (nomos) means <em>law</em> — it is Paul's word for the Mosaic Law in Romans and Galatians. "Christ is the end (τέλος) of the νόμος" (Romans 10:4). Understanding nomos is essential for understanding Paul.</p>

    <div class="lesson-h3">Ξ ξ Xi — Ks as in "Axios"</div>
    <p class="lesson-p">Xi makes a <strong>Ks sound</strong> — like the "x" in "axe" or "box." The uppercase Ξ looks like three horizontal lines; the lowercase ξ is one of the more complex letter shapes. The word ξένος (xenos) means <em>stranger, foreigner, guest</em> — root of "xenophobia." In Hebrews 13:2: "Do not neglect to show hospitality to ξένοι (strangers), for thereby some have entertained angels unawares."</p>

    <div class="lesson-h3">Ο ο Omicron — Short O</div>
    <p class="lesson-p">Omicron makes a <strong>short O sound</strong> — like the O in "hot." Contrast with Omega (ω) which is a long O. "Omicron" literally means "little O" (mikron = small). The word ὁδός (hodos) means <em>way, road, path</em> — Jesus says "I am the ὁδός" (John 14:6). The earliest Christians were called followers of "the Way" (ἡ ὁδός) in Acts.</p>

    <div class="lesson-h3">Π π Pi — Faith and Pillars</div>
    <p class="lesson-p">Pi makes a <strong>P sound</strong>. The uppercase Π looks like two pillars connected by a crossbar — you recognise it from mathematics. The word πίστις (pistis) means <em>faith, trust, faithfulness</em> — it is one of the most important words in the New Testament. "For we walk by πίστις, not by sight" (2 Corinthians 5:7). Related: πιστεύω (pisteuo) = to believe/trust.</p>
    <div class="box box-fact"><strong>Pistis:</strong> πίστις (pistis) can mean faith, trust, belief, or faithfulness depending on context. When Paul writes about "faith in Christ" vs "the faithfulness of Christ" — both uses of pistis — this single Greek word contains the entire debate. Learning to read the Greek helps you engage these questions directly.</div>

    <div class="lesson-h3">Ρ ρ Rho — R (not P!)</div>
    <p class="lesson-p">Rho makes an <strong>R sound</strong> — but it looks exactly like an English P. This is the most important false friend in the Greek alphabet. Uppercase Ρ = English P shape, Greek R sound. Lowercase ρ = like a p with a tail. The word ῥῆμα (rhema) means <em>word or utterance</em> — specifically a spoken word. "Man shall not live by bread alone, but by every ῥῆμα that comes from the mouth of God" (Matthew 4:4).</p>
    <div class="box box-tip"><strong>💡 Memory:</strong> Lambda = L/tent · Mu = M/disciple · Nu = N/law · Xi = Ks/stranger · Omicron = short O/Way · Pi = P/faith · Rho = R (looks like P!)</div>`,

  writing: [
    {ch:'Λλ', name:'Lambda',  steps:['Uppercase Λ: two diagonal strokes meeting at a point at the top — like a tent or inverted V','Lowercase λ: a diagonal stroke from top-left meeting a curved stroke from the right','The lowercase looks like a stylised 2 or a branch','Write Λλ 10 times each.']},
    {ch:'Μμ', name:'Mu',      steps:['Uppercase Μ: like English M — two verticals with two diagonals meeting in the middle','Lowercase μ: two curved downstrokes with the right one extending below the baseline','The lowercase tail below the line distinguishes it from English m','Write Μμ 10 times each.']},
    {ch:'Νν', name:'Nu',      steps:['Uppercase Ν: like English N — two verticals with one diagonal from top-left to bottom-right','Lowercase ν: like a small v but with a flat bottom rather than a sharp point — or a small u with straight sides','Do not confuse lowercase ν with English v','Write Νν 10 times each.']},
    {ch:'Ξξ', name:'Xi',      steps:['Uppercase Ξ: three horizontal strokes — top, middle, and bottom, like the mathematical equals sign with an extra line','Lowercase ξ: a curved shape with multiple bends — one of the more complex letters to write','Take your time with ξ — practice slowly','Write Ξξ 10 times each.']},
    {ch:'Οο', name:'Omicron', steps:['Uppercase Ο and lowercase ο: both are simple circles or ovals — identical to English O','The only distinction is size — uppercase is larger','Easy to write but remember: short O sound, not long','Write Οο 15 times.']},
    {ch:'Ππ', name:'Pi',      steps:['Uppercase Π: a horizontal bar at the top with two vertical strokes hanging down — like a gate or the mathematical symbol','Lowercase π: same shape but smaller, often with the top bar extending slightly beyond the legs','Write Ππ 10 times each. Say "faith" (pistis) as you write.']},
    {ch:'Ρρ', name:'Rho',     steps:['Uppercase Ρ: looks exactly like English P — a vertical stroke with a loop on the upper right','Lowercase ρ: looks like English p with a descending tail below the baseline','CRITICAL: Ρ ρ sounds like R, not P. Write it 15 times saying "R" aloud each time.']},
  ],

  vocab: [
    {ch:'πίστις',   trans:'pistis',   meaning:'Faith / Trust / Faithfulness', note:'Pi — 2 Corinthians 5:7'},
    {ch:'μαθητής',  trans:'mathetes', meaning:'Disciple / Learner',           note:'Mu — Great Commission'},
    {ch:'νόμος',    trans:'nomos',    meaning:'Law',                           note:'Nu — Paul\'s term for Torah'},
    {ch:'ὁδός',     trans:'hodos',    meaning:'Way / Road / Path',             note:'Omicron — John 14:6'},
    {ch:'λόγος',    trans:'logos',    meaning:'Word / Reason',                 note:'Lambda — John 1:1'},
    {ch:'ῥῆμα',    trans:'rhema',    meaning:'Word / Utterance (spoken)',      note:'Rho — Matthew 4:4'},
    {ch:'ξένος',    trans:'xenos',    meaning:'Stranger / Foreigner / Guest',  note:'Xi — Hebrews 13:2'},
  ],

  scriptureRef: 'John 14:6',
  scripture: {
    orig:  'ἐγώ εἰμι ἡ ὁδὸς καὶ ἡ ἀλήθεια καὶ ἡ ζωή.',
    trans: 'ego eimi he hodos kai he aletheia kai he zoe.',
    eng:   '"I am the way, and the truth, and the life." — John 14:6',
  },
  scriptureNote: 'Find: Omicron (ο) in ὁδὸς (way) · Lambda (λ) in ἀλήθεια (truth — the name of our seminary!) · Zeta (ζ) in ζωή (life) · Nu (ν) in καὶ (and) — appearing twice.',
  scriptureTip:  '<strong>💡 Aletheia:</strong> ἀλήθεια — the name of this seminary — appears in this verse: "I am the way, the truth (ἀλήθεια), and the life." You are studying at a school named after the word Jesus used to describe himself. Every letter of that word you can now read in the original Greek.',

  quiz: [
    {q:'Rho (Ρ ρ) looks like an English P. What sound does it actually make?', ch:'Ρ', opts:['P as in "Peter"','F as in "phone"','R as in "road"','B as in "Bible"'], ans:2, ok:'Correct! Rho (Ρ ρ) makes an R sound — not P. This is the most important false friend in the Greek alphabet. Ρ = R, always.', no:'Rho (Ρ ρ) makes an R sound, not P. This false friend is one of the most common beginner mistakes.'},
    {q:'What does πίστις (pistis) mean?', ch:'πίστις', opts:['Hope','Love','Peace','Faith / Trust / Faithfulness'], ans:3, ok:'Correct! πίστις (pistis) = faith, trust, or faithfulness. It is one of the most theologically important words in the NT — used throughout Paul\'s letters and Hebrews.', no:'πίστις (pistis) = faith/trust/faithfulness — one of the most important NT words.'},
    {q:'What does μαθητής (mathetes) mean — and what does it tell us about discipleship?', ch:'', opts:['Servant — one who serves','Learner — one who learns','Worker — one who labours','Follower — one who walks behind'], ans:1, ok:'Correct! μαθητής (mathetes) = learner/disciple, from the verb "to learn." Discipleship is fundamentally an educational calling — the Great Commission says "make learners of all nations."', no:'μαθητής (mathetes) = learner/disciple. Discipleship is fundamentally a learning relationship.'},
    {q:'What does ὁδός (hodos) mean in John 14:6 — "I am the ὁδός"?', ch:'ὁδός', opts:['Truth','Life','Way / Road / Path','Light'], ans:2, ok:'Correct! ὁδός (hodos) = way, road, or path. "I am the Way" — Jesus claims to be the path itself, not merely to point the way. Early Christians were called followers of "the Way" (ἡ ὁδός) in Acts.', no:'ὁδός (hodos) = way, road, or path. Jesus says "I am the ὁδός" — the path itself.'},
    {q:'What is the difference between ῥῆμα (rhema) and λόγος (logos) — both translated "word"?', ch:'', opts:['They are identical synonyms','Logos = spoken word; Rhema = written word','Logos = word/reason/divine principle; Rhema = specific spoken utterance','Logos is Hebrew; Rhema is Greek'], ans:2, ok:'Correct! λόγος (logos) = word, reason, divine principle — the eternal Word of John 1:1. ῥῆμα (rhema) = a specific spoken utterance, a word that is said aloud — as in Matthew 4:4.', no:'λόγος = word/reason/principle. ῥῆμα = specific spoken utterance. Both are translated "word" in English.'},
  ],

  completionNote: 'You now know 17 of 24 Greek letters. You have learned faith (πίστις), disciple (μαθητής), law (νόμος), way (ὁδός), and the name of this seminary — ἀλήθεια — in the verse where Jesus uses it.',
  nextDay: 'Day 3: Hebrew Vowels →',
};
