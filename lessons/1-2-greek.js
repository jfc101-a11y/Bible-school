/* ═══════════════════════════════════════
   LESSON: Week 1 · Day 2 · Koine Greek
   ═══════════════════════════════════════ */

LESSONS['1-2-Greek'] = {
  color:    'blue',
  subtitle: 'Week 1 · Day 2 · Koine Greek',
  title:    'The Language of the New Testament',
  intro:    '"In the beginning was the Word, and the Word was with God, and the Word was God." — John wrote these words in Greek. Today you begin to read them as he wrote them.',
  sections: ['Introduction','The Alphabet','Today\'s Letters','Writing Practice','First Words','Quiz','Complete'],

  beforeYouBegin: `
    <p class="lesson-p"><strong>Greek reads left to right</strong> — just like English. Greek has both <em class="blue">uppercase and lowercase</em> letters and you need to recognise both forms of each letter.</p>
    <div class="box box-fact"><strong>📜 Historical Note:</strong> Koine Greek (Κοινὴ Ἑλληνική) means "Common Greek." It was the lingua franca of the Roman Empire from roughly 300 BC to AD 300 — which is precisely why the New Testament was written in it. Every literate person in the Mediterranean world could read it.</div>
    <div class="box box-tip"><strong>💡 You already know some Greek:</strong> Alpha (Α), Beta (Β), Delta (Δ), Pi (Π), Omega (Ω) — these appear in mathematics, science, and Revelation 1:8: "I am the Alpha and the Omega."</div>`,

  alphabetIntro: 'The Greek alphabet has 24 letters with uppercase and lowercase forms. Today\'s five are highlighted in blue.',
  alphabetNotes: `
    <div class="box box-tip"><strong>💡 Left to right:</strong> Greek reads left to right. Letter #1, Alpha (Α), starts at the top-left. Many letters will look familiar — they are the ancestors of our own alphabet.</div>
    <div class="box box-note"><strong>Sigma note:</strong> Sigma has two forms — Σ/σ at the start or middle of a word, and ς (final sigma) at the end. Both make the same S sound.</div>`,

  alphabet: [
    {ch:'Α α', name:'Alpha',   sound:'A (long)',    n:1,  t:true},
    {ch:'Β β', name:'Beta',    sound:'B',           n:2,  t:true},
    {ch:'Γ γ', name:'Gamma',   sound:'G (hard)',    n:3,  t:true},
    {ch:'Δ δ', name:'Delta',   sound:'D',           n:4,  t:true},
    {ch:'Ε ε', name:'Epsilon', sound:'E (short)',   n:5,  t:true},
    {ch:'Ζ ζ', name:'Zeta',    sound:'Z',           n:6},
    {ch:'Η η', name:'Eta',     sound:'E (long)',    n:7},
    {ch:'Θ θ', name:'Theta',   sound:'Th',          n:8},
    {ch:'Ι ι', name:'Iota',    sound:'I',           n:9},
    {ch:'Κ κ', name:'Kappa',   sound:'K',           n:10},
    {ch:'Λ λ', name:'Lambda',  sound:'L',           n:11},
    {ch:'Μ μ', name:'Mu',      sound:'M',           n:12},
    {ch:'Ν ν', name:'Nu',      sound:'N',           n:13},
    {ch:'Ξ ξ', name:'Xi',      sound:'X/Ks',        n:14},
    {ch:'Ο ο', name:'Omicron', sound:'O (short)',   n:15},
    {ch:'Π π', name:'Pi',      sound:'P',           n:16},
    {ch:'Ρ ρ', name:'Rho',     sound:'R',           n:17},
    {ch:'Σ σ/ς',name:'Sigma',  sound:'S',           n:18},
    {ch:'Τ τ', name:'Tau',     sound:'T',           n:19},
    {ch:'Υ υ', name:'Upsilon', sound:'U/Y',         n:20},
    {ch:'Φ φ', name:'Phi',     sound:'Ph/F',        n:21},
    {ch:'Χ χ', name:'Chi',     sound:'Ch (hard)',   n:22},
    {ch:'Ψ ψ', name:'Psi',     sound:'Ps',          n:23},
    {ch:'Ω ω', name:'Omega',   sound:'O (long)',    n:24},
  ],

  focusLetters: [
    {ch:'Αα', name:'Alpha',   trans:'A (father)',  desc:'Most common vowel; also means "first"',       ex:'ἀγάπη — agape (Love)'},
    {ch:'Ββ', name:'Beta',    trans:'B',            desc:'Alpha + Beta = "alphabet"',                   ex:'βίβλος — biblos (Book/Bible)'},
    {ch:'Γγ', name:'Gamma',   trans:'G (hard)',     desc:'Before γ,κ,χ sounds like "ng"',               ex:'γῆ — ge (Earth/Geography)'},
    {ch:'Δδ', name:'Delta',   trans:'D',            desc:'Uppercase Δ = triangle; used in math/science',ex:'δόξα — doxa (Glory/Doxology)'},
    {ch:'Εε', name:'Epsilon', trans:'E (short)',    desc:'Short E — contrast with long Eta (η)',         ex:'ἐκκλησία — ekklesia (Church)'},
  ],

  deepDive: `
    <div class="lesson-h3">Α α Alpha — The First</div>
    <p class="lesson-p">Alpha = <strong>A</strong> as in "father." The most common vowel in Greek. Jesus calls himself "the Alpha and the Omega" (Revelation 1:8). Alpha begins ἀγάπη (agape — love) and ἀλήθεια (aletheia — <em class="blue">truth</em>, the name of this seminary).</p>
    <div class="box box-fact"><strong>Aletheia:</strong> ἀλήθεια means Truth — from ἀ (not) + λήθη (concealment). Truth is that which is unconcealed, brought into the light. Jesus says "I am the way, the truth (ἀλήθεια), and the life" — John 14:6.</div>
    <div class="lesson-h3">Β β Beta — The Second</div>
    <p class="lesson-p">Beta = <strong>B</strong>. Alpha + Beta = "alphabet." βίβλος (biblos) = book or scroll — it gives us the word "Bible." The ancient city of Byblos was famous for exporting papyrus.</p>
    <div class="lesson-h3">Γ γ Gamma — G as in "Good"</div>
    <p class="lesson-p">Hard <strong>G</strong>. But before γ, κ, χ it sounds like "ng" — so ἄγγελος (angelos, angel) is pronounced "ang-elos." γῆ (ge) = earth, root of "geography" and "geology."</p>
    <div class="lesson-h3">Δ δ Delta — D as in "Door"</div>
    <p class="lesson-p">Delta = <strong>D</strong>. Uppercase Δ is a triangle you've seen in mathematics. δόξα (doxa) = glory, root of "doxology" (a hymn of praise to God).</p>
    <div class="lesson-h3">Ε ε Epsilon — Short E</div>
    <p class="lesson-p">Short <strong>E</strong> as in "bed." Contrast with Eta (η) = long E. ἐκκλησία (ekklesia) = church, "called out ones." Epsilon starts the word for the gathered people of God.</p>
    <div class="box box-tip"><strong>💡 Memory:</strong> Alpha = first/truth · Beta = second/Bible · Gamma = earth/angel · Delta = triangle/glory · Epsilon = short E/church</div>`,

  writing: [
    {ch:'Αα', name:'Alpha',   steps:['Uppercase Α: two diagonal strokes meeting at top, crossbar in middle','Lowercase α: small circle with curved tail to the right — like cursive "a"','The uppercase looks like our A because Greek gave us the Latin alphabet','Write Αα 10 times each.']},
    {ch:'Ββ', name:'Beta',    steps:['Uppercase Β: vertical stroke with two bumps on the right (like our B)','Lowercase β: starts like a "b" but the loop extends above the baseline','This letter + Alpha gave us the word "alphabet"','Write Ββ 10 times each.']},
    {ch:'Γγ', name:'Gamma',   steps:['Uppercase Γ: upside-down L — horizontal top, vertical drop on right','Lowercase γ: like a "y" — small curve dropping below the baseline','When two Gammas appear (γγ) they sound like "ng" as in angel (ἄγγελος)','Write Γγ 10 times each.']},
    {ch:'Δδ', name:'Delta',   steps:['Uppercase Δ: a triangle — three strokes forming a pyramid','Lowercase δ: a circle with a curved stroke rising from the top-right over the circle','The Δ appears in mathematics for "change" or "difference"','Write Δδ 10 times each.']},
    {ch:'Εε', name:'Epsilon', steps:['Uppercase Ε: like our letter E — vertical stroke with three horizontal lines','Lowercase ε: like a backwards 3 — two horizontal strokes with a curve','Key: Epsilon = SHORT E. Eta (η) = LONG E. You must distinguish these.','Write Εε 10 times each.']},
  ],

  vocab: [
    {ch:'λόγος',     trans:'logos',    meaning:'Word / Reason',     note:'John 1:1 — the pre-incarnate Christ'},
    {ch:'θεός',      trans:'theos',    meaning:'God',                note:'Root of "theology" — Theta (θ)'},
    {ch:'ἀγάπη',    trans:'agape',    meaning:'Love (divine)',      note:'Unconditional love — Alpha (α)'},
    {ch:'βίβλος',   trans:'biblos',   meaning:'Book / Scripture',   note:'Root of "Bible" — Beta (β)'},
    {ch:'γῆ',        trans:'ge',       meaning:'Earth / Land',       note:'Gamma (γ) — root of "geography"'},
    {ch:'δόξα',     trans:'doxa',     meaning:'Glory / Praise',     note:'Delta (δ) — root of "doxology"'},
    {ch:'ἐκκλησία', trans:'ekklesia', meaning:'Church / Assembly',  note:'Epsilon (ε) — "called out ones"'},
  ],

  scriptureRef: 'John 1:1',
  scripture: {
    orig:  'Ἐν ἀρχῇ ἦν ὁ λόγος, καὶ ὁ λόγος ἦν πρὸς τὸν θεόν, καὶ θεὸς ἦν ὁ λόγος.',
    trans: 'En arche en ho logos, kai ho logos en pros ton theon, kai theos en ho logos.',
    eng:   '"In the beginning was the Word, and the Word was with God, and the Word was God." — John 1:1',
  },
  scriptureNote: 'Find: Alpha (α) in ἀρχῇ (beginning) · the word λόγος (logos) — can you spot the letters? · θεόν (God) in the second clause.',
  scriptureTip:  '<strong>💡 The Logos:</strong> Greek philosophers used λόγος for the rational principle governing the universe. John takes that concept and declares: the Logos is not a principle — he is a Person, and "the Word became flesh" (John 1:14).',

  quiz: [
    {q:'What is the name of this Greek letter?',                       ch:'Α',          opts:['Lambda','Alpha','Omega','Eta'],                                   ans:1, ok:'Correct! Alpha (Α α) is the first Greek letter. Jesus says "I am the Alpha and the Omega" in Revelation 1:8.',                                        no:'This is Alpha (Α) — the first Greek letter, used by Jesus in Revelation 1:8.'},
    {q:'Which Greek word gives us the root of "theology"?',            ch:'θεός',       opts:['γῆ (ge)','θεός (theos)','δόξα (doxa)','λόγος (logos)'],         ans:1, ok:'Correct! θεός (theos) = God. Theo-logy = study of God. Theo-cracy = rule by God.',                                                               no:'θεός (theos) = God — root of theology, theocracy, theophany. Begins with Theta (Θ).'},
    {q:'What does λόγος (logos) mean in John 1:1?',                    ch:'',           opts:['Love','God','Word / Reason','Church'],                             ans:2, ok:'Correct! λόγος (logos) = Word or Reason. John 1:1: "In the beginning was the Logos" — the pre-incarnate Christ.',                                  no:'λόγος (logos) = Word/Reason. John 1:1: "In the beginning was the Logos."'},
    {q:'What is the difference between Epsilon (ε) and Eta (η)?',      ch:'',           opts:['Epsilon is a consonant; Eta is a vowel','Epsilon is short E; Eta is long E','Epsilon is long E; Eta is short E','They are the same sound'], ans:1, ok:'Correct! Epsilon (Ε ε) = short E. Eta (Η η) = long E. This distinction matters for Greek grammar.',              no:'Epsilon (ε) = short E. Eta (η) = long E.'},
    {q:'What does ἐκκλησία (ekklesia) literally mean?',                ch:'ἐκκλησία',  opts:['Glory of God','Heart of God','Word of God','Called out ones'],    ans:3, ok:'Correct! ἐκκλησία = church/assembly — literally "called out ones." The standard NT word for the Church.',                                          no:'ἐκκλησία (ekklesia) = Church/Assembly — literally "called out ones." Root of "ecclesiastical."'},
  ],

  completionNote: 'You have taken your first steps in Koine Greek — five letters, seven vocabulary words, and John 1:1 in the language of the New Testament.',
  nextDay: 'Day 3: Hebrew II →',
};
