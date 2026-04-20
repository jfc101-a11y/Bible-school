/* ═══════════════════════════════════════
   LESSON: Week 1 · Day 4 · Koine Greek II
   Letters 6–10: Zeta, Eta, Theta, Iota, Kappa
   ═══════════════════════════════════════ */

LESSONS['1-4-Greek'] = {
  color:    'blue',
  subtitle: 'Week 1 · Day 4 · Koine Greek II',
  title:    'Letters 6 to 10',
  intro:    'You know the first five Greek letters. Today you add five more — including Theta, which gives us the word "theology," and Iota, the smallest Greek letter that Jesus references alongside the Hebrew Yod in the Sermon on the Mount.',
  sections: ['Introduction','The Alphabet','Today\'s Letters','Writing Practice','First Words','Quiz','Complete'],

  beforeYouBegin: `
    <div class="box box-tip"><strong>💡 Review first:</strong> Write your five letters from Day 2 from memory — Α Β Γ Δ Ε (both upper and lowercase). If you hesitate on any, write it 5 times before continuing.</div>
    <p class="lesson-p"><strong>Today introduces two important distinctions:</strong> Eta (Η) vs Epsilon (Ε) — long E vs short E — and Theta (Θ) which produces the "Th" sound and anchors the word for God.</p>
    <div class="box box-fact"><strong>📜 Did you know:</strong> The Greek letter Iota (ι) is so small that Jesus uses it as the ultimate example of permanence in Matthew 5:18: "Not an iota, not a dot, will pass from the Law." The word "iota" entered English directly from Greek — we still use it today meaning "the smallest amount."</div>`,

  alphabetIntro: 'The full Greek alphabet. Letters 6–10 are highlighted today. Letters 1–5 from Day 2 are ones you already know.',
  alphabetNotes: `
    <div class="box box-tip"><strong>💡 Your progress:</strong> After today you will know 10 of the 24 Greek letters — nearly half the alphabet in just two Greek sessions.</div>
    <div class="box box-note"><strong>Watch carefully:</strong> Some of today's letters look like English letters but make different sounds. Eta (Η) looks like our H but sounds like a long E. Iota (Ι) looks like our I and actually sounds like I — one of the easier ones!</div>`,

  alphabet: [
    {ch:'Α α', name:'Alpha',   sound:'A (long)',   n:1},
    {ch:'Β β', name:'Beta',    sound:'B',          n:2},
    {ch:'Γ γ', name:'Gamma',   sound:'G (hard)',   n:3},
    {ch:'Δ δ', name:'Delta',   sound:'D',          n:4},
    {ch:'Ε ε', name:'Epsilon', sound:'E (short)',  n:5},
    {ch:'Ζ ζ', name:'Zeta',    sound:'Z / DZ',     n:6,  t:true},
    {ch:'Η η', name:'Eta',     sound:'E (long)',   n:7,  t:true},
    {ch:'Θ θ', name:'Theta',   sound:'Th',         n:8,  t:true},
    {ch:'Ι ι', name:'Iota',    sound:'I',          n:9,  t:true},
    {ch:'Κ κ', name:'Kappa',   sound:'K',          n:10, t:true},
    {ch:'Λ λ', name:'Lambda',  sound:'L',          n:11},
    {ch:'Μ μ', name:'Mu',      sound:'M',          n:12},
    {ch:'Ν ν', name:'Nu',      sound:'N',          n:13},
    {ch:'Ξ ξ', name:'Xi',      sound:'X/Ks',       n:14},
    {ch:'Ο ο', name:'Omicron', sound:'O (short)',  n:15},
    {ch:'Π π', name:'Pi',      sound:'P',          n:16},
    {ch:'Ρ ρ', name:'Rho',     sound:'R',          n:17},
    {ch:'Σ σ/ς',name:'Sigma',  sound:'S',          n:18},
    {ch:'Τ τ', name:'Tau',     sound:'T',          n:19},
    {ch:'Υ υ', name:'Upsilon', sound:'U/Y',        n:20},
    {ch:'Φ φ', name:'Phi',     sound:'Ph/F',       n:21},
    {ch:'Χ χ', name:'Chi',     sound:'Ch (hard)',  n:22},
    {ch:'Ψ ψ', name:'Psi',     sound:'Ps',         n:23},
    {ch:'Ω ω', name:'Omega',   sound:'O (long)',   n:24},
  ],

  focusLetters: [
    {ch:'Ζζ', name:'Zeta',  trans:'Z (or DZ)',   desc:'Z sound; gives us "zeal" and "zodiac"',      ex:'ζωή — zoe (Life)'},
    {ch:'Ηη', name:'Eta',   trans:'E (long)',     desc:'Long E — distinct from short Epsilon (ε)',   ex:'ἡμέρα — hemera (Day)'},
    {ch:'Θθ', name:'Theta', trans:'Th',           desc:'Th as in "theology" — never silent',         ex:'θεός — theos (God)'},
    {ch:'Ιι', name:'Iota',  trans:'I (ee/ih)',    desc:'Smallest Greek letter; Jesus references it', ex:'Ἰησοῦς — Iesous (Jesus)'},
    {ch:'Κκ', name:'Kappa', trans:'K',            desc:'Hard K; gives us "kyrie" and "Christ"',      ex:'κύριος — kyrios (Lord)'},
  ],

  deepDive: `
    <div class="lesson-h3">Ζ ζ Zeta — Z as in "Zeal"</div>
    <p class="lesson-p">Zeta makes a <strong>Z sound</strong> (some scholars say DZ in ancient pronunciation). The word ζωή (zoe) means <em>life</em> — specifically the divine, eternal life that God possesses and gives. John uses it constantly: "I am the resurrection and the ζωή" (John 11:25). This is distinct from βίος (bios) which means biological life.</p>
    <div class="box box-fact"><strong>Zoe vs Bios:</strong> Greek has two words for life. βίος (bios) = physical, biological life — root of "biology." ζωή (zoe) = divine, eternal life — root of "zoology" but also the life Jesus offers in John 10:10: "I came that they may have ζωή and have it abundantly."</div>

    <div class="lesson-h3">Η η Eta — Long E</div>
    <p class="lesson-p">Eta makes a <strong>long E sound</strong> as in "they" or "feet." This is the critical distinction from Epsilon (ε) which is short E. The uppercase Η looks exactly like our letter H — but makes no H sound whatsoever. ἡμέρα (hemera) means <em>day</em> — root of "ephemeral" (lasting only a day).</p>
    <div class="box box-tip"><strong>💡 Eta vs Epsilon:</strong> Η η = long E (like "they") · Ε ε = short E (like "bed"). This distinction is crucial in Greek grammar — verb and noun endings change meaning based on whether they use Eta or Epsilon.</div>

    <div class="lesson-h3">Θ θ Theta — Th as in "Theology"</div>
    <p class="lesson-p">Theta makes a <strong>Th sound</strong> as in "thin" or "theology." The word θεός (theos) = God begins with Theta — giving us theology, theocracy, theophany, atheist. The uppercase Θ is a circle with a horizontal line through the middle — easy to remember as a symbol of the divine.</p>
    <div class="box box-fact"><strong>Key theological words beginning with Θ:</strong> θεός (theos) = God · θέλημα (thelema) = will ("Thy will be done") · θλῖψις (thlipsis) = tribulation · θάνατος (thanatos) = death · θαῦμα (thauma) = wonder/miracle. You will meet all of these in the New Testament.</div>

    <div class="lesson-h3">Ι ι Iota — The Smallest Letter</div>
    <p class="lesson-p">Iota makes an <strong>I sound</strong> (like "ee" or "ih"). It is the smallest Greek letter — a simple vertical stroke. The name of Jesus in Greek is Ἰησοῦς (Iesous) — it begins with Iota. The abbreviation IHS or IHΣ seen on churches and vestments comes from the first three letters of ΙΗΣΟΥΣ.</p>
    <div class="box box-fact"><strong>The Name of Jesus:</strong> Ἰησοῦς (Iesous) is the Greek form of the Hebrew יְהוֹשׁוּעַ (Yehoshua) — Joshua — meaning "YHWH saves." So the name of Jesus literally means "God saves." Every time you see Ἰησοῦς in the Greek NT, you are reading a name that proclaims salvation.</div>

    <div class="lesson-h3">Κ κ Kappa — K as in "Kyrie"</div>
    <p class="lesson-p">Kappa makes a hard <strong>K sound</strong>. The word κύριος (kyrios) means <em>Lord</em> — it is the word used throughout the New Testament for Jesus as Lord, and it is the word used in the Septuagint (the Greek Old Testament) to translate יהוה (YHWH). When Paul writes "Jesus is κύριος" (Lord) in Philippians 2:11, he is applying the divine name to Christ.</p>
    <div class="box box-tip"><strong>💡 Memory:</strong> Zeta = life/zoe · Eta = long E/day · Theta = theology/God · Iota = smallest/Jesus · Kappa = Lord/kyrios</div>`,

  writing: [
    {ch:'Ζζ', name:'Zeta',  steps:['Uppercase Ζ: like our Z — horizontal top, diagonal, horizontal bottom','Lowercase ζ: a curved Z with a descending tail below the baseline','The tail drops below the line — similar to our lowercase z but with a curl','Write Ζζ 10 times each.']},
    {ch:'Ηη', name:'Eta',   steps:['Uppercase Η: looks exactly like our H — two verticals, one crossbar','Lowercase η: like our n but with the right leg extending below the baseline','WARNING: Uppercase Η looks like English H but sounds like E — memorise this','Write Ηη 10 times each. Say "long E" as you write each one.']},
    {ch:'Θθ', name:'Theta', steps:['Uppercase Θ: a circle with a horizontal line through the middle','Lowercase θ: same — a smaller circle with a line through it','Think of it as the symbol for God — a circle (wholeness) divided by truth','Write Θθ 10 times each.']},
    {ch:'Ιι', name:'Iota',  steps:['Uppercase Ι: a simple vertical line, often with serifs at top and bottom','Lowercase ι: same but smaller, sits on the baseline — like a simple i without a dot','The simplest letter to write — but do not confuse with Latin i','Write Ιι 15 times. Say "Jesus" (Ἰησοῦς) as you write.']},
    {ch:'Κκ', name:'Kappa', steps:['Uppercase Κ: like our K — vertical stroke, upper diagonal out, lower diagonal out','Lowercase κ: same shape but smaller, the diagonals are slightly curved','Looks just like English K — same sound too','Write Κκ 10 times each.']},
  ],

  vocab: [
    {ch:'ζωή',      trans:'zoe',     meaning:'Life (divine/eternal)',  note:'Zeta — distinct from bios'},
    {ch:'ἡμέρα',   trans:'hemera',  meaning:'Day',                     note:'Eta — root of "ephemeral"'},
    {ch:'θεός',    trans:'theos',   meaning:'God',                     note:'Theta — root of "theology"'},
    {ch:'Ἰησοῦς', trans:'Iesous',  meaning:'Jesus',                   note:'Iota — "YHWH saves"'},
    {ch:'κύριος',  trans:'kyrios',  meaning:'Lord',                    note:'Kappa — applied to Christ'},
    {ch:'θέλημα',  trans:'thelema', meaning:'Will / Purpose',          note:'Theta — "Thy will be done"'},
    {ch:'ζηλωτής', trans:'zelotes', meaning:'Zealot',                  note:'Zeta — Simon the Zealot'},
  ],

  scriptureRef: 'John 10:10',
  scripture: {
    orig:  'ἐγὼ ἦλθον ἵνα ζωὴν ἔχωσιν καὶ περισσὸν ἔχωσιν.',
    trans: 'ego elthon hina zoen echosin kai perisson echosin.',
    eng:   '"I came that they may have life and have it abundantly." — John 10:10',
  },
  scriptureNote: 'Find: Zeta (ζ) in ζωὴν (life) — the divine life Jesus gives · Eta (η) in ζωὴν · Iota (ι) scattered throughout · Kappa (κ) in καὶ (and).',
  scriptureTip:  '<strong>💡 Zoe:</strong> The word ζωή (zoe) here is not biological life (bios) but divine, eternal life. Jesus is not promising a longer biological existence — he is offering participation in God\'s own life. This distinction, only visible in the Greek, is theologically profound.',

  quiz: [
    {q:'What is the difference between ζωή (zoe) and βίος (bios)?', ch:'', opts:['They are synonyms','Zoe = eternal/divine life; Bios = biological life','Bios = eternal life; Zoe = daily life','Zoe is Hebrew; Bios is Greek'], ans:1, ok:'Correct! ζωή (zoe) = divine, eternal life. βίος (bios) = biological, physical life. John 10:10 uses zoe — Jesus offers participation in God\'s own life.', no:'ζωή (zoe) = divine/eternal life. βίος (bios) = biological life. John 10:10 uses zoe.'},
    {q:'Uppercase Η looks like our letter H. What sound does it actually make?', ch:'Η', opts:['H as in "help"','K as in "key"','Long E as in "they"','Silent'], ans:2, ok:'Correct! Uppercase Η looks like English H but makes a LONG E sound. This is one of the most important "false friend" letters in Greek.', no:'Η makes a LONG E sound — not H. This false friend trips up many beginners.'},
    {q:'The name Ἰησοῦς (Jesus) begins with Iota. What does the name mean?', ch:'Ἰησοῦς', opts:['Son of God','Lamb of God','YHWH saves','Light of the world'], ans:2, ok:'Correct! Ἰησοῦς is the Greek form of Joshua (Yehoshua) — meaning "YHWH saves." Every use of the name Jesus proclaims salvation.', no:'Ἰησοῦς = Greek form of Joshua (Yehoshua) = "YHWH saves."'},
    {q:'What does κύριος (kyrios) mean, and why is it significant?', ch:'κύριος', opts:['Saviour','Lord — used for Jesus and as translation of YHWH','Teacher','Son'], ans:1, ok:'Correct! κύριος (kyrios) = Lord. It is used for Jesus throughout the NT and is the Septuagint\'s translation of יהוה (YHWH). When Paul says "Jesus is kyrios," he applies the divine name to Christ.', no:'κύριος (kyrios) = Lord — used for Jesus and as the Greek translation of YHWH in the Septuagint.'},
    {q:'Which Greek letter is shaped like a circle with a line through the middle?', ch:'', opts:['Omicron (Ο)','Phi (Φ)','Theta (Θ)','Omega (Ω)'], ans:2, ok:'Correct! Theta (Θ θ) is a circle with a horizontal line through the middle. It begins θεός (theos, God) — you can think of it as a symbol of the divine.', no:'Theta (Θ θ) — a circle with a line through it. It begins θεός (theos, God).'},
  ],

  completionNote: 'You now know 10 of the 24 Greek letters. You have learned the words for Life (ζωή), God (θεός), Lord (κύριος), and the name of Jesus himself (Ἰησοῦς).',
  nextDay: 'Day 5: Hebrew III →',
};
