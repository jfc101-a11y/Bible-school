/* ═══════════════════════════════════════
   LESSON: Week 3 · Day 1 · Ecclesiastical Latin I
   The Latin Alphabet & Ecclesiastical Pronunciation
   ═══════════════════════════════════════ */

LESSONS['3-1-Latin'] = {
  color:    'gold',
  subtitle: 'Week 3 · Day 1 · Ecclesiastical Latin I',
  title:    'The Language of the Church Fathers',
  intro:    'Latin is the language of Augustine, Jerome, Anselm, and Aquinas. It is the tongue in which the Western Church prayed, argued, and preserved the faith for over a thousand years. Jerome translated the entire Bible into Latin — the Vulgate — and that translation shaped Christianity more than any other single document until the Reformation.',
  sections: ['Introduction','The Alphabet','Pronunciation','Writing Practice','First Words','Quiz','Complete'],

  beforeYouBegin: `
    <p class="lesson-p"><strong>Latin is the third language of this programme</strong> — and in many ways the most accessible. Its alphabet is our own. You already know every letter. What you are learning today is <em>how to pronounce</em> those letters the way the Church has pronounced them for centuries — not Classical Latin, but <em>Ecclesiastical</em> (Church) Latin.</p>
    <div class="box box-fact"><strong>📜 Why Ecclesiastical, not Classical?</strong> Classical Latin (the pronunciation used in Caesar's Rome) differs from Ecclesiastical Latin (used by the Church from roughly the 4th century onward). Since our goal is reading the Church Fathers, the Vulgate, and the creeds — not Julius Caesar — we use Ecclesiastical pronunciation. It is also easier: C is always "ch" before E and I, and V is always "v."</div>
    <div class="box box-tip"><strong>💡 Your advantage:</strong> You already know Hebrew (right-to-left, no vowels originally, 22 consonants) and Greek (24 letters, uppercase and lowercase). Latin uses 23 letters you already recognise. This is by far the easiest alphabet of the three.</div>`,

  alphabetIntro: 'The Latin alphabet — 23 letters (no W, and J/U are variants of I/V). You already know every shape. Today you learn the ecclesiastical sounds.',
  alphabetNotes: `
    <div class="box box-note"><strong>Missing letters:</strong> Classical Latin had no W. The letters J and U were introduced later as variants of I and V. In many Latin texts you will see "Iesu" instead of "Jesu" and "VNVS" instead of "UNUS." Both forms are correct.</div>
    <div class="box box-tip"><strong>💡 The key rule:</strong> In Ecclesiastical Latin, C before E, I, Y, AE, OE = "ch" as in "church." C before anything else = hard "k." This single rule unlocks most pronunciation differences.</div>`,

  alphabet: [
    {ch:'A', name:'A',  sound:'ah (father)',   n:1,  t:true},
    {ch:'B', name:'B',  sound:'b',             n:2,  t:true},
    {ch:'C', name:'C',  sound:'k or ch',       n:3,  t:true},
    {ch:'D', name:'D',  sound:'d',             n:4,  t:true},
    {ch:'E', name:'E',  sound:'eh (bed)',      n:5,  t:true},
    {ch:'F', name:'F',  sound:'f',             n:6,  t:true},
    {ch:'G', name:'G',  sound:'g or j',        n:7,  t:true},
    {ch:'H', name:'H',  sound:'mostly silent', n:8,  t:true},
    {ch:'I', name:'I',  sound:'ee or y',       n:9,  t:true},
    {ch:'K', name:'K',  sound:'k (rare)',      n:10, t:true},
    {ch:'L', name:'L',  sound:'l',             n:11, t:true},
    {ch:'M', name:'M',  sound:'m',             n:12, t:true},
    {ch:'N', name:'N',  sound:'n',             n:13, t:true},
    {ch:'O', name:'O',  sound:'oh',            n:14, t:true},
    {ch:'P', name:'P',  sound:'p',             n:15, t:true},
    {ch:'Q', name:'Q',  sound:'kw (always qu)',n:16, t:true},
    {ch:'R', name:'R',  sound:'r (rolled)',    n:17, t:true},
    {ch:'S', name:'S',  sound:'s (never z)',   n:18, t:true},
    {ch:'T', name:'T',  sound:'t or tsi',      n:19, t:true},
    {ch:'V', name:'V',  sound:'v',             n:20, t:true},
    {ch:'X', name:'X',  sound:'ks',            n:21, t:true},
    {ch:'Y', name:'Y',  sound:'ee (Greek words)',n:22,t:true},
    {ch:'Z', name:'Z',  sound:'dz',            n:23, t:true},
  ],

  focusLetters: [
    {ch:'C', name:'C',  trans:'K or CH',    desc:'Before e,i,y,ae,oe = "ch"; before all else = "k"', ex:'Caelum = CHAY-lum (heaven)'},
    {ch:'G', name:'G',  trans:'G or J',     desc:'Before e,i = "j"; before all else = hard "g"',     ex:'Gloria = GLO-ria'},
    {ch:'V', name:'V',  trans:'V (always)', desc:'Never "w" in Ecclesiastical Latin',                 ex:'Verbum = VER-bum (word)'},
    {ch:'TI',name:'TI', trans:'TSI',        desc:'TI before a vowel = "tsi" (e.g. gratia = GRAT-sia)', ex:'Gratia = GRAT-sia (grace)'},
    {ch:'SC',name:'SC', trans:'SH',         desc:'SC before e,i = "sh" sound',                        ex:'Descendit = de-SHEN-dit'},
  ],

  deepDive: `
    <div class="lesson-h3">The Key Pronunciation Rules</div>
    <p class="lesson-p">Ecclesiastical Latin pronunciation is governed by a small set of rules that, once mastered, let you read any Latin text aloud correctly. Here are the most important:</p>

    <div class="lesson-h3">1. The Letter C</div>
    <p class="lesson-p">This is the most important rule. <strong>C before E, I, Y, AE, or OE</strong> = <strong>"ch"</strong> as in "church." <strong>C before anything else</strong> = hard <strong>"k."</strong></p>
    <div class="box box-note"><strong>Examples:</strong> Caelum (heaven) = CHAY-lum · Crux (cross) = KROOKS · Credo = KRAY-do · Ecce (behold) = EH-cheh · Crucifixus = kroo-chi-FIX-oos</div>

    <div class="lesson-h3">2. The Letter G</div>
    <p class="lesson-p"><strong>G before E or I</strong> = <strong>"j"</strong> sound. <strong>G before anything else</strong> = hard <strong>"g."</strong></p>
    <div class="box box-note"><strong>Examples:</strong> Gloria = GLO-ria (hard G) · Agnus = AH-gnoos · Virginem = veer-JI-nem (soft G before I)</div>

    <div class="lesson-h3">3. The Letters V and U</div>
    <p class="lesson-p">In Ecclesiastical Latin, <strong>V is always pronounced "v"</strong> — never "w" as in Classical Latin. U and V were originally the same letter; in Church Latin they are distinguished: V = consonant "v," U = vowel "oo."</p>

    <div class="lesson-h3">4. The Combination TI</div>
    <p class="lesson-p"><strong>TI before a vowel</strong> = <strong>"tsi"</strong> sound. This is one of the most distinctive features of ecclesiastical pronunciation.</p>
    <div class="box box-note"><strong>Examples:</strong> Gratia (grace) = GRAT-sia · Patientia (patience) = pa-tsee-EN-tsia · Natio (nation) = NA-tsio</div>

    <div class="lesson-h3">5. Double Letters</div>
    <p class="lesson-p">In Latin, double consonants are both pronounced — the sound is held slightly longer. <strong>LL</strong> = both L's sounded · <strong>CC</strong> before E/I = "tch" · <strong>GN</strong> = "ny" as in Italian (like "canyon").</p>

    <div class="lesson-h3">6. Vowels are Pure</div>
    <p class="lesson-p">Latin vowels are pure and consistent — unlike English. A = "ah," E = "eh," I = "ee," O = "oh," U = "oo." They do not glide or diphthongise. Every vowel is pronounced clearly.</p>

    <div class="lesson-h3">The Latin Diphthongs</div>
    <p class="lesson-p"><strong>AE</strong> = "eh" (as in "bed") · <strong>OE</strong> = "eh" (same) · <strong>AU</strong> = "ow" (as in "how") · <strong>EU</strong> = "eh-oo."</p>
    <div class="box box-fact"><strong>Caelum:</strong> The Latin word for heaven is Caelum (or Coelum). The AE diphthong = "eh," and C before AE = "ch." So: CHEH-loom. You hear this in the Creed: "maker of heaven (caeli) and earth."</div>
    <div class="box box-tip"><strong>💡 The simplest summary:</strong> Pronounce Latin like Italian. The ecclesiastical tradition was preserved in Italy, and Italian pronunciation mirrors Latin closely. If you can say "pizza," "ciao," and "cappuccino" — you already have a feel for it.</div>`,

  writing: [
    {ch:'C',  name:'C — The Key Letter', steps:['Write a C and practice both sounds side by side','Before E/I/Y/AE/OE: say "ch" · Before everything else: say "k"','Try: Crux (KROOKS) · Caelum (CHEH-loom) · Credo (KRAY-do) · Ecce (EH-cheh)','Write each word 5 times, pronouncing aloud.']},
    {ch:'V',  name:'V — Always V',       steps:['In Ecclesiastical Latin V is always "v" — never "w"','Try: Verbum (VER-bum, word) · Veni (VAY-nee, come) · Vita (VEE-ta, life)','Write each word 5 times, pronouncing aloud.']},
    {ch:'TI', name:'TI — The TSI Sound', steps:['TI before a vowel = "tsi"','Try: Gratia (GRAT-sia) · Gloria in excelsis Deo','Write Gratia 10 times. Say it as GRAT-sia each time.','This sound appears constantly in hymns, prayers, and theological texts.']},
    {ch:'GN', name:'GN — The NY Sound', steps:['GN = "ny" as in Italian or the "ny" in "canyon"','Try: Agnus (AH-nyoos) Dei — Lamb of God','Agnus = lamb. Dei = of God. Agnus Dei = Lamb of God.','Write Agnus Dei 10 times and pronounce correctly.']},
    {ch:'AE', name:'AE — The Diphthong', steps:['AE is a diphthong pronounced "eh" — like "bed"','Combined with C: CAE = "cheh"','Try: Caelum (CHEH-loom, heaven) · Aeternum (eh-TER-noom, eternal)','Write Caelum 10 times saying CHEH-loom.']},
  ],

  vocab: [
    {ch:'Verbum',    trans:'VER-bum',      meaning:'Word',                 note:'John 1:1 in the Vulgate — "In principio erat Verbum"'},
    {ch:'Deus',      trans:'DAY-oos',      meaning:'God',                  note:'Root of "deity" — Deus meus (my God)'},
    {ch:'Gratia',    trans:'GRAT-sia',     meaning:'Grace',                note:'TI = tsi — "gratia plena" (full of grace)'},
    {ch:'Gloria',    trans:'GLO-ria',      meaning:'Glory',                note:'Hard G — Gloria in excelsis Deo'},
    {ch:'Pax',       trans:'PAHKS',        meaning:'Peace',                note:'Root of "Pacific," "pacify" — Pax Dei'},
    {ch:'Lux',       trans:'LOOKS',        meaning:'Light',                note:'"Lux mundi" — Light of the world (John 8:12)'},
    {ch:'Caelum',    trans:'CHEH-loom',    meaning:'Heaven / Sky',         note:'C before AE = ch — Pater noster in caelis'},
  ],

  scriptureRef: 'John 1:1 (Vulgate)',
  scripture: {
    orig:  'In principio erat Verbum, et Verbum erat apud Deum, et Deus erat Verbum.',
    trans: 'In PRIN-chi-pee-oh EH-raht VER-bum, et VER-bum EH-raht AH-pood DAY-oom, et DAY-oos EH-raht VER-bum.',
    eng:   '"In the beginning was the Word, and the Word was with God, and the Word was God." — John 1:1 (Vulgate)',
  },
  scriptureNote: 'This is the same verse you read in Greek. Find: C in principio (hard K before "p") · V in Verbum (always "v") · Deum and Deus (God in accusative and nominative). Say it aloud following the pronunciation guide.',
  scriptureTip:  '<strong>💡 The Verbum:</strong> Jerome translated the Greek λόγος (logos) as Verbum — "word." This was a profound interpretive choice. The Latin Verbum influenced all Western theology and every subsequent Bible translation. When the KJV says "In the beginning was the Word" — that "Word" flows directly from Jerome\'s Verbum.',

  quiz: [
    {q:'How is the letter C pronounced in Ecclesiastical Latin before the letter E?', ch:'', opts:['Hard K as in "cat"','S as in "city"','CH as in "church"','Silent'], ans:2, ok:'Correct! In Ecclesiastical Latin, C before E, I, Y, AE, or OE = "ch" as in "church." So Caelum = CHEH-loom, Ecce = EH-cheh, Crucifixus = kroo-chi-FIX-oos.', no:'C before E, I, Y, AE, OE = "ch" as in church. This is the most important rule in Ecclesiastical Latin pronunciation.'},
    {q:'How is the combination TI pronounced before a vowel?', ch:'Gratia', opts:['T-I separately (tee-ee)','TSI as in "rats-ia"','SH as in "nation" (English style)','TH as in "thin"'], ans:1, ok:'Correct! TI before a vowel = "tsi." Gratia = GRAT-sia. Patientia = pa-tsee-EN-tsia. This is one of the most distinctive features of ecclesiastical pronunciation.', no:'TI before a vowel = "tsi." Gratia = GRAT-sia — not "grash-a" as in English.'},
    {q:'What does Verbum mean — and why is it theologically significant?', ch:'Verbum', opts:['Spirit','Truth','Word — Jerome\'s Vulgate translation of the Greek Logos','Life'], ans:2, ok:'Correct! Verbum = Word. Jerome used it to translate the Greek λόγος (logos) in John 1:1. This translation shaped all Western theology and every subsequent Latin-influenced Bible translation.', no:'Verbum = Word — Jerome\'s translation of λόγος (logos). It shaped all of Western theology.'},
    {q:'How is V pronounced in Ecclesiastical Latin?', ch:'', opts:['"W" as in Classical Latin','Always "v" — never "w"','Sometimes "v", sometimes "w" depending on position','Silent before consonants'], ans:1, ok:'Correct! In Ecclesiastical Latin, V is always pronounced "v" — never "w" as in Classical Latin. Verbum = VER-bum. Vita = VEE-ta. Veni = VAY-nee.', no:'In Ecclesiastical Latin, V is always "v" — never "w." This is different from Classical Latin.'},
    {q:'What is the meaning and correct pronunciation of "Agnus Dei"?', ch:'', opts:['"Lamb of God" — AHG-noos DAY-ee','Kingdom of God — AG-noos DAY-ee','Son of God — AH-nyoos DAY-ee','Lamb of God — AH-nyoos DAY-ee'], ans:3, ok:'Correct! Agnus Dei = "Lamb of God" — AH-nyoos DAY-ee. GN = "ny" sound. This phrase appears in the Mass and in countless hymns and is one of the oldest Christian liturgical texts.', no:'Agnus Dei = Lamb of God — AH-nyoos DAY-ee. GN = "ny" sound as in Italian.'},
  ],

  completionNote: 'You have learned the ecclesiastical pronunciation of Latin and can read John 1:1 from Jerome\'s Vulgate aloud. The Church Fathers are beginning to open to you.',
  nextDay: 'Day 2: Greek Grammar I →',
};
