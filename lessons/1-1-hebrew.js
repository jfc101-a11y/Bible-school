/* ═══════════════════════════════════════
   LESSON: Week 1 · Day 1 · Biblical Hebrew
   To add this lesson: ensure LESSONS object
   exists in app, then this file adds to it.
   ═══════════════════════════════════════ */

LESSONS['1-1-Hebrew'] = {
  color:    'gold',
  subtitle: 'Week 1 · Day 1 · Biblical Hebrew',
  title:    'The Language of the Old Testament',
  intro:    '"In the beginning, God created the heavens and the earth." — These words were first written in Hebrew. Today you start learning to read them as they were written.',
  sections: ['Introduction','The Alphabet','Today\'s Letters','Writing Practice','First Words','Quiz','Complete'],

  beforeYouBegin: `
    <p class="lesson-p"><strong>Hebrew reads right to left.</strong> The first letter — Aleph — appears on the <em>right</em> side of a page. This becomes natural very quickly.</p>
    <div class="box box-fact"><strong>📜 Historical Note:</strong> Biblical Hebrew is a Semitic language spoken in ancient Canaan and Israel from roughly 1200 BC onward. The Old Testament was composed over about 1,000 years. It has 22 consonants. Vowel points were added by the Masoretes in the 6th–10th centuries AD.</div>
    <div class="box box-tip"><strong>💡 Study Tip:</strong> Don't try to memorise everything at once. Your brain learns letters through repeated exposure over days. Trust the process.</div>`,

  alphabetIntro: 'The Hebrew alphabet has 22 letters — all consonants. Today\'s five are highlighted in gold.',
  alphabetNotes: `
    <div class="box box-tip"><strong>💡 Right to left:</strong> Aleph (א) is #1. In a Hebrew text you begin reading from the top-right corner and move left across each line.</div>`,

  alphabet: [
    {ch:'א',name:'Aleph', sound:'Silent',  n:1,  t:true},
    {ch:'ב',name:'Bet',   sound:'B/V',     n:2,  t:true},
    {ch:'ג',name:'Gimel', sound:'G',       n:3,  t:true},
    {ch:'ד',name:'Dalet', sound:'D',       n:4,  t:true},
    {ch:'ה',name:'He',    sound:'H',       n:5,  t:true},
    {ch:'ו',name:'Vav',   sound:'V/W',     n:6},
    {ch:'ז',name:'Zayin', sound:'Z',       n:7},
    {ch:'ח',name:'Chet',  sound:'Ch',      n:8},
    {ch:'ט',name:'Tet',   sound:'T',       n:9},
    {ch:'י',name:'Yod',   sound:'Y',       n:10},
    {ch:'כ',name:'Kaf',   sound:'K/Kh',    n:11},
    {ch:'ל',name:'Lamed', sound:'L',       n:12},
    {ch:'מ',name:'Mem',   sound:'M',       n:13},
    {ch:'נ',name:'Nun',   sound:'N',       n:14},
    {ch:'ס',name:'Samekh',sound:'S',       n:15},
    {ch:'ע',name:'Ayin',  sound:'Silent',  n:16},
    {ch:'פ',name:'Pe',    sound:'P/F',     n:17},
    {ch:'צ',name:'Tsadi', sound:'Ts',      n:18},
    {ch:'ק',name:'Qof',   sound:'Q',       n:19},
    {ch:'ר',name:'Resh',  sound:'R',       n:20},
    {ch:'ש',name:'Shin',  sound:'Sh/S',    n:21},
    {ch:'ת',name:'Tav',   sound:'T',       n:22},
  ],

  focusLetters: [
    {ch:'א', name:'Aleph',   trans:'(silent)', desc:'Vowel carrier; no intrinsic sound',  ex:'אֱלֹהִים — Elohim (God)'},
    {ch:'ב', name:'Bet/Vet', trans:'B or V',   desc:'Dot inside = B; no dot = V',          ex:'בַּיִת — Bayit (House)'},
    {ch:'ג', name:'Gimel',   trans:'G (hard)', desc:'Always hard G; never soft',            ex:'גָּדוֹל — Gadol (Great)'},
    {ch:'ד', name:'Dalet',   trans:'D',         desc:'Sharp corner — compare Resh ר',      ex:'דָּבָר — Davar (Word)'},
    {ch:'ה', name:'He',      trans:'H',         desc:'Soft breath; also הַ = "the"',       ex:'הַשָּׁמַיִם — The heavens'},
  ],

  deepDive: `
    <div class="lesson-h3">א Aleph — The Silent Letter</div>
    <p class="lesson-p">Aleph has <strong>no sound of its own</strong>. It carries vowels — the sound you pronounce is whatever vowel is attached to it. In ancient pictographic Hebrew, Aleph represented an <em>ox</em>.</p>
    <div class="box box-fact"><strong>In Scripture:</strong> The first word of the Bible — <strong>בְּרֵאשִׁית</strong> — begins with Bet. But the Ten Commandments begin with Aleph: <em>Anokhi</em> (אָנֹכִי, "I am"). God's first word to Israel is the silent letter made audible.</div>
    <div class="lesson-h3">ב Bet / Vet — B or V</div>
    <p class="lesson-p">With a dot (Dagesh) = <strong>B</strong>: בּ. Without = <strong>V</strong>: ב. Bet means <em>house</em>. The prefix בְּ means "in" — so בְּרֵאשִׁית = "in the beginning."</p>
    <div class="lesson-h3">ג Gimel — G as in "Good"</div>
    <p class="lesson-p">Always a hard <strong>G</strong>. The ancient pictograph was a <em>camel</em> (gamal). Gimel is associated with <em>gemilut chasadim</em> — acts of loving kindness.</p>
    <div class="lesson-h3">ד Dalet — D as in "Door"</div>
    <p class="lesson-p">Makes a <strong>D</strong> sound. Watch the difference between Dalet (ד) and Resh (ר) — nearly identical. Dalet has a sharp corner; Resh is rounded.</p>
    <div class="lesson-h3">ה He — H as in "Help"</div>
    <p class="lesson-p">Soft <strong>H</strong> sound. It appears twice in יהוה (YHWH). As the prefix הַ it means "the."</p>
    <div class="box box-tip"><strong>💡 Memory:</strong> Aleph = silent ox · Bet = house · Gimel = camel · Dalet = door · He = breath</div>`,

  writing: [
    {ch:'א', name:'Aleph',  steps:['Diagonal stroke from upper-right to lower-left','Small Yod stroke at the upper left','Small Yod stroke at the lower right','Result: looks like an X with a diagonal spine','Write it 10 times.']},
    {ch:'ב', name:'Bet',    steps:['Horizontal line across the top (right to left)','Vertical stroke down the right side','Short foot at the bottom-left','Open box — a house without a left wall','Write 10 times. Add a dot for בּ (Dagesh).']},
    {ch:'ג', name:'Gimel',  steps:['Short vertical stroke downward','At the bottom curve right, then bring a foot leftward','Think of a leg taking a stride — a camel\'s stride','Write it 10 times.']},
    {ch:'ד', name:'Dalet',  steps:['Horizontal stroke across the top','Straight vertical line down from the right end','Sharp right-angle corner — unlike Resh (ר) which is rounded','Write Dalet and Resh side-by-side 5 times.']},
    {ch:'ה', name:'He',     steps:['Same horizontal top and right vertical as Dalet','Short unattached stroke on the left — does NOT touch the top','He = Dalet with an inner post — like a window','Write He and Dalet side-by-side 5 times. The gap is the key.']},
  ],

  vocab: [
    {ch:'אָב',         trans:'av',        meaning:'Father',            note:'Aleph + Vet'},
    {ch:'בַּיִת',      trans:'bayit',     meaning:'House',             note:'Bet at start'},
    {ch:'גָּדוֹל',    trans:'gadol',     meaning:'Great / Big',       note:'Gimel + Dalet'},
    {ch:'דָּבָר',     trans:'davar',     meaning:'Word / Thing',      note:'Dalet at start'},
    {ch:'הַ',          trans:'ha-',       meaning:'The (article)',     note:'He as prefix'},
    {ch:'אֱלֹהִים',   trans:'Elohim',    meaning:'God',               note:'Aleph — silent carrier'},
    {ch:'בְּרֵאשִׁית', trans:'Bereshit',  meaning:'In the beginning',  note:'Bet prefix = "in"'},
  ],

  scriptureRef: 'Genesis 1:1',
  scripture: {
    orig:  'בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ',
    trans: 'Bereshit bara Elohim et hashamayim ve\'et ha\'aretz',
    eng:   '"In the beginning, God created the heavens and the earth." — Genesis 1:1',
  },
  scriptureNote: 'Find: Bet (בּ) at the very start · Aleph (א) inside אֱלֹהִים · He (ה) in הַשָּׁמַיִם and הָאָרֶץ.',
  scriptureTip:  '<strong>💡 Davar and Logos:</strong> The Hebrew word דָּבָר (davar) means both "word" and "thing." In Hebrew thought, a spoken word creates reality. When John writes "In the beginning was the Word," he draws a direct line to Genesis 1:1.',

  quiz: [
    {q:'What is the name of this letter?',       ch:'א', opts:['Bet','Aleph','He','Ayin'],                                               ans:1, ok:'Correct! Aleph (א) is the first letter — silent, acting as a vowel carrier.',                                                                     no:'This is Aleph (א) — the first and silent letter of the Hebrew alphabet.'},
    {q:'Which letter makes the soft "H" sound and is the definite article prefix?', ch:'',   opts:['ב','ד','ה','ג'],                        ans:2, ok:'Correct! He (ה) = soft H. As prefix הַ = "the." It appears twice in יהוה.',                                                                       no:'The answer is ה (He). ב=B/V, ד=D, ג=G.'},
    {q:'What does the prefix בְּ mean when attached to a Hebrew word?', ch:'בְּרֵאשִׁית',  opts:['The','And','In','Of'],                  ans:2, ok:'Correct! בְּ means "in" — so בְּרֵאשִׁית = "In the beginning."',                                                                               no:'בְּ means "in." So בְּרֵאשִׁית = "In the beginning."'},
    {q:'What is the Hebrew word for "Word / Thing / Matter"?', ch:'',                        opts:['בַּיִת (bayit)','דָּבָר (davar)','אָב (av)','גָּדוֹל (gadol)'], ans:1, ok:'Correct! דָּבָר (davar) = word/thing. Begins with Dalet (ד) — it echoes the Greek Logos.', no:'The answer is דָּבָר (davar) — starting with Dalet (ד).'},
    {q:'Which two letters look very similar and must be carefully distinguished?', ch:'',     opts:['Aleph and Ayin','Bet and Vet','Dalet and Resh','Gimel and Nun'],   ans:2, ok:'Correct! Dalet (ד) has a sharp corner; Resh (ר) has a rounded top. Confusing them changes word meaning.', no:'Dalet (ד) and Resh (ר) — sharp corner vs. rounded top.'},
  ],

  completionNote: 'You have taken your first steps in Biblical Hebrew — five letters, seven words, and Genesis 1:1 in the original tongue.',
  nextDay: 'Day 2: Koine Greek →',
};
