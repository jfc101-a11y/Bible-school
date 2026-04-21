/* ═══════════════════════════════════════
   LESSON: Week 2 · Day 1 · Biblical Hebrew IV
   Letters 16–22 + Final Forms — Completing the Alphabet
   ═══════════════════════════════════════ */

LESSONS['2-1-Hebrew'] = {
  color:    'gold',
  subtitle: 'Week 2 · Day 1 · Biblical Hebrew IV',
  title:    'Completing the Hebrew Alphabet',
  intro:    'Today you learn the final seven Hebrew letters — and with them, you complete the entire Aleph-Bet. By the end of this lesson you will be able to identify every letter in the Hebrew Bible. This is a major milestone.',
  sections: ['Introduction','The Alphabet','Today\'s Letters','Writing Practice','First Words','Quiz','Complete'],

  beforeYouBegin: `
    <div class="box box-tip"><strong>💡 Full review first:</strong> Write all 15 letters you know from memory — א ב ג ד ה ו ז ח ט י כ ל מ נ ס. Take your time. Fix any gaps before continuing. Today completes the set.</div>
    <p class="lesson-p"><strong>Today also completes the final forms.</strong> You already know Mem (מ/ם) and Nun (נ/ן). Today you meet the remaining three: Pe (פ/ף), Tsadi (צ/ץ), and Kaf (כ/ך). These five letters all have special shapes at word endings.</p>
    <div class="box box-fact"><strong>📜 The final seven:</strong> Ayin, Pe, Tsadi, Qof, Resh, Shin, and Tav. These letters contain some of the most theologically rich words in the Old Testament — including שָׁלוֹם (shalom, peace), תּוֹרָה (Torah, law/instruction), and קָדוֹשׁ (kadosh, holy).</div>`,

  alphabetIntro: 'The complete Hebrew alphabet. Today\'s final seven letters are highlighted. After this lesson you know all 22.',
  alphabetNotes: `
    <div class="box box-tip"><strong>💡 You did it:</strong> Learning all 22 letters in four sessions is a genuine achievement. From here every lesson builds your ability to actually read Hebrew text.</div>
    <div class="box box-note"><strong>Final forms summary:</strong> Five letters change shape at word end — כ→ך, מ→ם, נ→ן, פ→ף, צ→ץ. Same sound, different shape. You now know all five pairs.</div>`,

  alphabet: [
    {ch:'א',name:'Aleph', sound:'Silent', n:1},  {ch:'ב',name:'Bet',   sound:'B/V',  n:2},
    {ch:'ג',name:'Gimel', sound:'G',     n:3},   {ch:'ד',name:'Dalet', sound:'D',    n:4},
    {ch:'ה',name:'He',    sound:'H',     n:5},   {ch:'ו',name:'Vav',   sound:'V/W',  n:6},
    {ch:'ז',name:'Zayin', sound:'Z',     n:7},   {ch:'ח',name:'Chet',  sound:'Ch',   n:8},
    {ch:'ט',name:'Tet',   sound:'T',     n:9},   {ch:'י',name:'Yod',   sound:'Y',    n:10},
    {ch:'כ',name:'Kaf',   sound:'K/Kh',  n:11},  {ch:'ל',name:'Lamed', sound:'L',    n:12},
    {ch:'מ',name:'Mem',   sound:'M',     n:13},  {ch:'נ',name:'Nun',   sound:'N',    n:14},
    {ch:'ס',name:'Samekh',sound:'S',     n:15},
    {ch:'ע',name:'Ayin',  sound:'Silent',n:16, t:true},
    {ch:'פ',name:'Pe',    sound:'P/F',   n:17, t:true},
    {ch:'צ',name:'Tsadi', sound:'Ts',    n:18, t:true},
    {ch:'ק',name:'Qof',   sound:'Q',     n:19, t:true},
    {ch:'ר',name:'Resh',  sound:'R',     n:20, t:true},
    {ch:'ש',name:'Shin',  sound:'Sh/S',  n:21, t:true},
    {ch:'ת',name:'Tav',   sound:'T',     n:22, t:true},
  ],

  focusLetters: [
    {ch:'ע', name:'Ayin',  trans:'(silent)',  desc:'Silent like Aleph — but guttural throat stop', ex:'עֹלָם — olam (Eternity/World)'},
    {ch:'פ', name:'Pe/Fe', trans:'P or F',    desc:'With dagesh = P; without = F. Final form: ף',  ex:'פֶּה — peh (Mouth)'},
    {ch:'צ', name:'Tsadi', trans:'Ts',        desc:'Like "ts" in "bits". Final form: ץ',            ex:'צֶדֶק — tsedek (Righteousness)'},
    {ch:'ק', name:'Qof',   trans:'Q (deep K)',desc:'Deeper K from back of throat',                  ex:'קָדוֹשׁ — kadosh (Holy)'},
    {ch:'ר', name:'Resh',  sound:'R',         trans:'R',  desc:'Rolled R — watch confusion with Dalet (ד)', ex:'רוּחַ — ruach (Spirit/Wind/Breath)'},
  ],

  deepDive: `
    <div class="lesson-h3">ע Ayin — The Second Silent Letter</div>
    <p class="lesson-p">Like Aleph, Ayin is a <strong>silent consonant</strong> — but its silence is different. Aleph is simply a neutral carrier; Ayin represents a <em>guttural stop</em> produced deep in the throat, almost imperceptible in modern pronunciation. The word עֹלָם (olam) means <em>eternity</em> or <em>world</em> — "He has made everything beautiful in its time. He has also set עֹלָם in the human heart." (Ecclesiastes 3:11)</p>
    <div class="box box-fact"><strong>Ayin means "eye":</strong> The ancient pictograph for Ayin was an eye. This silent letter that "sees" without making a sound is one of Hebrew's most poetic letters. The word עַיִן (ayin) itself means both the letter and the word "eye/spring."</div>

    <div class="lesson-h3">פ Pe / Fe — Mouth and Word</div>
    <p class="lesson-p">Pe makes a <strong>P sound</strong> with dagesh: פּ. Without dagesh: <strong>F sound</strong>: פ. The final form is ף (a long descending stroke). The word פֶּה (peh) means <em>mouth</em> — and in fact the letter Pe means mouth, since ancient writing connected each letter to a picture. God speaks creation into existence with his mouth — the connection between Pe and creation is deep in Hebrew thought.</p>

    <div class="lesson-h3">צ Tsadi — Righteousness</div>
    <p class="lesson-p">Tsadi makes a <strong>Ts sound</strong> — like the "ts" in "bits" or the German "Zeit." The final form is ץ. The word צֶדֶק (tsedek) means <em>righteousness</em> — one of the central theological words of the Old Testament. Related: צַדִּיק (tsaddik) = righteous one, צְדָקָה (tsedakah) = righteous acts/charity. Abraham "believed God and it was counted to him as צְדָקָה" (Genesis 15:6).</p>
    <div class="box box-fact"><strong>Tsedakah in the NT:</strong> The Greek word δικαιοσύνη (dikaiosyne, righteousness) translates צְדָקָה throughout the Septuagint. When Paul writes about righteousness in Romans, he is building on this Hebrew foundation. The word you are learning now underlies Paul's entire theology of justification.</div>

    <div class="lesson-h3">ק Qof — Holiness</div>
    <p class="lesson-p">Qof makes a <strong>deep K sound</strong> produced at the very back of the throat. The word קָדוֹשׁ (kadosh) means <em>holy</em> — set apart, other, transcendent. It is the word the seraphim cry in Isaiah 6:3: "קָדוֹשׁ קָדוֹשׁ קָדוֹשׁ יהוה צְבָאוֹת" — Holy, holy, holy is the LORD of hosts. The triple repetition is the Hebrew superlative — the holiest possible holiness.</div>

    <div class="lesson-h3">ר Resh — Spirit and Warning</div>
    <p class="lesson-p">Resh makes an <strong>R sound</strong>. Critical warning: Resh (ר) and Dalet (ד) look nearly identical. Dalet has a sharp corner at the top-right; Resh is rounded. The word רוּחַ (ruach) means <em>spirit, wind,</em> or <em>breath</em> — it is the word used in Genesis 1:2 ("the Spirit of God was hovering over the waters") and throughout the Psalms and Prophets.</p>

    <div class="lesson-h3">ש Shin / Sin — Two Sounds, One Letter</div>
    <p class="lesson-p">Shin is unique — it makes <strong>two different sounds</strong> depending on a small dot. A dot on the upper right (שׁ) = <strong>Sh</strong> sound. A dot on the upper left (שׂ) = <strong>S</strong> sound. The word שָׁלוֹם (shalom) means <em>peace, completeness, wholeness</em> — far richer than the English "peace." It implies total well-being in every dimension.</p>

    <div class="lesson-h3">ת Tav — The Last Letter</div>
    <p class="lesson-p">Tav makes a <strong>T sound</strong> and is the final letter of the Hebrew alphabet. The word תּוֹרָה (Torah) means <em>instruction, teaching, law</em> — the five books of Moses, but also God's entire teaching. Jesus says he came not to abolish the Torah but to fulfil it (Matthew 5:17). From Aleph to Tav — the Hebrew equivalent of "from A to Z" — means totality and completion.</p>
    <div class="box box-tip"><strong>💡 Memory:</strong> Ayin = silent eye/eternity · Pe = mouth/P or F · Tsadi = righteousness/Ts · Qof = holy/deep K · Resh = spirit/rounded R · Shin = peace/Sh or S · Tav = Torah/last letter</div>`,

  writing: [
    {ch:'ע', name:'Ayin',  steps:['Two curved strokes meeting at a point at the bottom — like a V with curved arms','Think of two eyes looking down, or a chalice shape','Unlike Aleph, Ayin has no inner diagonal stroke','Write it 10 times.']},
    {ch:'פ', name:'Pe',    steps:['A curved stroke bending to the right with a small inner hook','Looks like a bent nose or a mouth — fitting, since Pe means mouth','The final form ף is a long straight stroke descending below the line','Write פ 10 times, then ף 5 times.']},
    {ch:'צ', name:'Tsadi', steps:['A Nun (נ) shape on the right with a Yod (י) attached on the upper left','Think of two strokes combining — complex but distinctive','The final form ץ extends the right stroke far below the baseline','Write צ 10 times, then ץ 5 times.']},
    {ch:'ק', name:'Qof',   steps:['A circle or oval on the left with a vertical stroke descending on the right','The vertical stroke extends below the baseline — one of the few letters to do so','Think of a head with a hanging tail — or a lasso','Write it 10 times.']},
    {ch:'ר', name:'Resh',  steps:['A horizontal stroke at the top curving down on the right into a vertical','Key: the top is ROUNDED — not a sharp corner like Dalet (ד)','Write Resh and Dalet side by side 10 times — make the distinction clear','Write ר 10 times.']},
    {ch:'ש', name:'Shin',  steps:['Three upward strokes from a common base — like a trident or three flames','The rightmost stroke is slightly taller','Dot upper-right = שׁ (Sh) · Dot upper-left = שׂ (S)','Write שׁ 10 times, then שׂ 5 times.']},
    {ch:'ת', name:'Tav',   steps:['A horizontal stroke at the top with a vertical stroke on the right and a left foot','Looks like a backwards lower-case "h" or a doorpost','The foot at the lower-left is distinctive','Write it 10 times.']},
  ],

  vocab: [
    {ch:'שָׁלוֹם',  trans:'shalom',  meaning:'Peace / Wholeness',    note:'Shin — total well-being'},
    {ch:'תּוֹרָה',  trans:'Torah',   meaning:'Law / Instruction',    note:'Tav — the five books of Moses'},
    {ch:'קָדוֹשׁ',  trans:'kadosh',  meaning:'Holy',                 note:'Qof — Isaiah 6:3'},
    {ch:'רוּחַ',   trans:'ruach',   meaning:'Spirit / Wind / Breath',note:'Resh — Genesis 1:2'},
    {ch:'צֶדֶק',   trans:'tsedek',  meaning:'Righteousness',         note:'Tsadi — root of tsaddik'},
    {ch:'עֹלָם',   trans:'olam',    meaning:'Eternity / World',      note:'Ayin — Ecclesiastes 3:11'},
    {ch:'פֶּה',    trans:'peh',     meaning:'Mouth',                 note:'Pe — God speaks creation'},
  ],

  scriptureRef: 'Isaiah 6:3',
  scripture: {
    orig:  'קָדוֹשׁ קָדוֹשׁ קָדוֹשׁ יהוה צְבָאוֹת מְלֹא כָל־הָאָרֶץ כְּבוֹדוֹ',
    trans: 'Kadosh kadosh kadosh YHWH Tseva\'ot melo khal-ha\'arets kevodo',
    eng:   '"Holy, holy, holy is the LORD of hosts; the whole earth is full of his glory." — Isaiah 6:3',
  },
  scriptureNote: 'Find: Qof (ק) starting קָדוֹשׁ three times · Resh (ר) in אָרֶץ (earth) · Shin (שׁ) in קָדוֹשׁ · Kaf (כ) in כְּבוֹדוֹ (his glory) · Mem (מ) in מְלֹא (full of).',
  scriptureTip:  '<strong>💡 The Trisagion:</strong> "Holy, holy, holy" — the triple repetition is the Hebrew superlative. There is no comparative or superlative form in Hebrew grammar, so repetition expresses degree. This verse is quoted in Revelation 4:8 by the four living creatures around the throne — connecting Isaiah\'s vision directly to John\'s. You can now identify every letter in this verse.',

  quiz: [
    {q:'Which Hebrew word means "Holy" — repeated three times by the seraphim in Isaiah 6:3?', ch:'קָדוֹשׁ', opts:['שָׁלוֹם (shalom)','תּוֹרָה (Torah)','קָדוֹשׁ (kadosh)','צֶדֶק (tsedek)'], ans:2, ok:'Correct! קָדוֹשׁ (kadosh) = holy. The triple repetition in Isaiah 6:3 is the Hebrew superlative — the absolute degree of holiness. This verse is also quoted in Revelation 4:8.', no:'קָדוֹשׁ (kadosh) = holy. Repeated three times in Isaiah 6:3 — the Hebrew superlative.'},
    {q:'What does רוּחַ (ruach) mean — the word used in Genesis 1:2?', ch:'רוּחַ', opts:['Fire','Water','Light','Spirit / Wind / Breath'], ans:3, ok:'Correct! רוּחַ (ruach) = spirit, wind, or breath. Genesis 1:2: "the Spirit (ruach) of God was hovering over the waters." The same word means all three — spirit, wind, and breath.', no:'רוּחַ (ruach) = spirit, wind, or breath. All three meanings are present in the same Hebrew word.'},
    {q:'Shin (ש) makes two different sounds. What determines which sound it makes?', ch:'', opts:['Its position in the word','A dot on the upper-right (Sh) or upper-left (S)','Whether it has a dagesh','Whether it is at the start of a word'], ans:1, ok:'Correct! A dot on the upper-right (שׁ) = Sh sound. A dot on the upper-left (שׂ) = S sound. One letter, two sounds, distinguished by the position of a single dot.', no:'A dot upper-right (שׁ) = Sh · A dot upper-left (שׂ) = S. Same letter, two sounds.'},
    {q:'What does שָׁלוֹם (shalom) mean — and why is it richer than the English "peace"?', ch:'שָׁלוֹם', opts:['Silence and rest only','Total well-being — peace, wholeness, completeness in every dimension','The absence of war only','A greeting with no deep meaning'], ans:1, ok:'Correct! שָׁלוֹם (shalom) = total well-being — physical, spiritual, relational, and social wholeness. Far richer than the English "peace" which often just means absence of conflict.', no:'שָׁלוֹם (shalom) = total well-being and wholeness in every dimension — far richer than "peace."'},
    {q:'You now know all 22 Hebrew letters. How many have a special "final form" when at the end of a word?', ch:'', opts:['3','4','5','7'], ans:2, ok:'Correct! Five letters have final forms: Kaf (כ/ך), Mem (מ/ם), Nun (נ/ן), Pe (פ/ף), and Tsadi (צ/ץ). Same sound, different shape at word end.', no:'Five letters have final forms: Kaf (כ/ך), Mem (מ/ם), Nun (נ/ן), Pe (פ/ף), and Tsadi (צ/ץ).'},
  ],

  completionNote: 'You have completed the entire Hebrew alphabet — all 22 letters plus 5 final forms. This is a genuine foundation. Every Hebrew word in the Old Testament is built from these letters.',
  nextDay: 'Day 2: Greek III →',
};
