/* ═══════════════════════════════════════
   LESSON: Week 2 · Day 3 · Biblical Hebrew V
   Vowel Points — The Niqqud System
   ═══════════════════════════════════════ */

LESSONS['2-3-Hebrew'] = {
  color:    'gold',
  subtitle: 'Week 2 · Day 3 · Biblical Hebrew V',
  title:    'Reading the Vowels — The Niqqud System',
  intro:    'You know all 22 Hebrew consonants. But until now you have been reading a skeleton — consonants without vowels. Today you add the vowels. This is the lesson that transforms Hebrew from a collection of shapes into a readable, speakable language.',
  sections: ['Introduction','The Vowel System','The Vowels','Practice Reading','First Words','Quiz','Complete'],

  beforeYouBegin: `
    <p class="lesson-p"><strong>This lesson is different</strong> from the alphabet lessons. Instead of new letters, you are learning a system of dots and dashes that sit above and below the consonants you already know. Once you understand this system, you will be able to pronounce any Hebrew word.</p>
    <div class="box box-fact"><strong>📜 Why vowels were added late:</strong> Ancient Hebrew was written with consonants only — native speakers knew the vowels from the spoken language. But as Hebrew declined as a spoken tongue after the exile, Jewish scribes called the <em>Masoretes</em> (6th–10th centuries AD) developed the Niqqud system to preserve correct pronunciation. The vowel-pointed text you study is called the <em>Masoretic Text</em> — the basis of all modern Old Testament translations.</div>
    <div class="box box-tip"><strong>💡 Good news:</strong> The vowels are completely regular. Once you learn each symbol, it always makes the same sound. There are no exceptions.</div>`,

  alphabetIntro: 'Today\'s lesson introduces the Niqqud — the vowel pointing system. These symbols appear below, above, or inside Hebrew consonants.',
  alphabetNotes: `
    <div class="box box-note"><strong>How to read:</strong> In Hebrew you read a consonant, then pronounce its vowel point. So בָּ = "ba" (Bet + Qamets). The consonant always comes first, then its vowel sound.</div>`,

  alphabet: [
    {ch:'אָ', name:'Qamets',   sound:'A (long)',  n:1, t:true},
    {ch:'אַ', name:'Patach',   sound:'A (short)', n:2, t:true},
    {ch:'אֵ', name:'Tsere',    sound:'E (long)',  n:3, t:true},
    {ch:'אֶ', name:'Segol',    sound:'E (short)', n:4, t:true},
    {ch:'אִ', name:'Chirik',   sound:'I',         n:5, t:true},
    {ch:'אֹ', name:'Cholam',   sound:'O (long)',  n:6, t:true},
    {ch:'אָ', name:'Qamets Chatuf',sound:'O (short)',n:7, t:true},
    {ch:'אוּ', name:'Shureq',  sound:'U (long)',  n:8, t:true},
    {ch:'אֻ', name:'Qibbuts',  sound:'U (short)', n:9, t:true},
    {ch:'אְ', name:'Shewa',    sound:'e (half)',  n:10, t:true},
    {ch:'בּ', name:'Dagesh',   sound:'Hardens consonant',n:11, t:true},
  ],

  focusLetters: [
    {ch:'בָ', name:'Qamets',  trans:'Long A (father)', desc:'A T-shape under the letter', ex:'אָב — av (Father)'},
    {ch:'בַ', name:'Patach',  trans:'Short A (hat)',   desc:'A flat line under the letter', ex:'אַרְצָה — artsah (To the earth)'},
    {ch:'בֵ', name:'Tsere',   trans:'Long E (they)',   desc:'Two dots under the letter',   ex:'בֵּית — beit (House of)'},
    {ch:'בִ', name:'Chirik',  trans:'I (feet)',        desc:'One dot under the letter',    ex:'כִּי — ki (Because/That)'},
    {ch:'בֹ', name:'Cholam',  trans:'Long O (go)',     desc:'One dot above/left of letter',ex:'שָׁלוֹם — shalom (Peace)'},
  ],

  deepDive: `
    <div class="lesson-h3">The Seven Vowel Families</div>
    <p class="lesson-p">Hebrew vowels are organised around five vowel sounds — A, E, I, O, U — each with a long and short form. Here is the complete system:</p>

    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;overflow:hidden;margin:1.25rem 0;">
      <table style="width:100%;border-collapse:collapse;font-size:.9rem;">
        <thead>
          <tr style="background:var(--bg3);">
            <th style="padding:.6rem .85rem;text-align:left;font-family:var(--display);font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Name</th>
            <th style="padding:.6rem .85rem;text-align:left;font-family:var(--display);font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Symbol (on Aleph)</th>
            <th style="padding:.6rem .85rem;text-align:left;font-family:var(--display);font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Sound</th>
            <th style="padding:.6rem .85rem;text-align:left;font-family:var(--display);font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Position</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Qamets</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.5rem;color:var(--gold);">אָ</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Long A — as in "father"</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-dim);font-size:.82rem;">T-shape below</td></tr>
          <tr><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-mid);background:var(--bg2);">Patach</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.5rem;color:var(--gold);background:var(--bg2);">אַ</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-mid);background:var(--bg2);">Short A — as in "hat"</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-dim);font-size:.82rem;background:var(--bg2);">Flat line below</td></tr>
          <tr><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Tsere</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.5rem;color:var(--gold);">אֵ</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Long E — as in "they"</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-dim);font-size:.82rem;">Two dots below</td></tr>
          <tr><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-mid);background:var(--bg2);">Segol</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.5rem;color:var(--gold);background:var(--bg2);">אֶ</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-mid);background:var(--bg2);">Short E — as in "bed"</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-dim);font-size:.82rem;background:var(--bg2);">Triangle of 3 dots below</td></tr>
          <tr><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Chirik</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.5rem;color:var(--gold);">אִ</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-mid);">I — as in "feet"</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-dim);font-size:.82rem;">One dot below</td></tr>
          <tr><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-mid);background:var(--bg2);">Cholam</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.5rem;color:var(--gold);background:var(--bg2);">אֹ</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-mid);background:var(--bg2);">Long O — as in "go"</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-dim);font-size:.82rem;background:var(--bg2);">Dot above/left</td></tr>
          <tr><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Shureq</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.5rem;color:var(--gold);">וּ</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Long U — as in "moon"</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-dim);font-size:.82rem;">Dot inside Vav (וּ)</td></tr>
          <tr><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-mid);background:var(--bg2);">Qibbuts</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.5rem;color:var(--gold);background:var(--bg2);">אֻ</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-mid);background:var(--bg2);">Short U — as in "put"</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-dim);font-size:.82rem;background:var(--bg2);">Three diagonal dots below</td></tr>
          <tr><td style="padding:.55rem .85rem;color:var(--text-mid);">Shewa</td><td style="padding:.55rem .85rem;font-family:var(--hebrew);font-size:1.5rem;color:var(--gold);">אְ</td><td style="padding:.55rem .85rem;color:var(--text-mid);">Half-vowel — very short "e" or silent</td><td style="padding:.55rem .85rem;color:var(--text-dim);font-size:.82rem;">Two vertical dots below</td></tr>
        </tbody>
      </table>
    </div>

    <div class="lesson-h3">The Dagesh — Hardening Dot</div>
    <p class="lesson-p">The Dagesh (דָּגֵשׁ) is a dot placed <em>inside</em> a consonant. It has two functions: (1) <em>Dagesh Lene</em> — hardens the 6 letters ב,ג,ד,כ,פ,ת from their soft form to their hard form (e.g. Bet = V without dagesh, B with dagesh). (2) <em>Dagesh Forte</em> — doubles the consonant. Once you can spot the dagesh, you can always know which sound to use.</p>

    <div class="lesson-h3">The Shewa — Half Vowel</div>
    <p class="lesson-p">The Shewa (שְׁוָא) — two vertical dots under a consonant — is the most complex vowel mark. A <em>vocal shewa</em> at the start of a syllable makes a very short "e" sound. A <em>silent shewa</em> at the end of a syllable has no sound and closes the syllable. Context determines which it is, but in practice the first shewa in a word is almost always vocal.</p>
    <div class="box box-tip"><strong>💡 Start simple:</strong> For now, pronounce every shewa as a very short "e" — like the "e" in "the" said quickly. This is correct often enough to get you reading. You will refine later.</div>`,

  writing: [
    {ch:'אָ', name:'Qamets (Long A)',  steps:['A T-shape or small cross below the consonant','The horizontal line with a small dot or foot underneath','Represents the longest A sound — as in "father"','Practice writing: בָּ (ba) דָּ (da) מָ (ma) — say each aloud.']},
    {ch:'אַ', name:'Patach (Short A)', steps:['A simple flat horizontal line below the consonant — the simplest vowel mark','Shorter than Qamets — shorter sound too','Practice writing: בַּ (ba-short) כַ (kha) נַ (na) — say each aloud.']},
    {ch:'אֵ', name:'Tsere (Long E)',   steps:['Two dots side by side below the consonant','Long E sound — as in "they" or "vein"','Practice writing: בֵּ (bey) לֵ (ley) מֵ (mey) — say each aloud.']},
    {ch:'אִ', name:'Chirik (I)',       steps:['A single dot below the consonant — the simplest vowel to recognise','I sound — as in "feet" or "machine"','Practice writing: בִ (bi) כִ (khi) שִׁ (shi) — say each aloud.']},
    {ch:'אֹ', name:'Cholam (Long O)',  steps:['A dot that appears above and slightly to the left of the consonant','Long O — as in "go" or "stone"','Practice writing: בֹ (bo) שָׁלוֹם — see the Cholam above the Vav (וֹ)','Say shalom aloud: שׁ-Sh, אָ-a, לוֹ-lo, ם-m = sha-lom']},
  ],

  vocab: [
    {ch:'בְּרֵאשִׁית', trans:'be-re-SHIT',  meaning:'In the beginning',   note:'Shewa under Bet · Tsere under Resh · Chirik under Shin'},
    {ch:'אֱלֹהִים',   trans:'e-lo-HIM',    meaning:'God',                 note:'Segol under Aleph · Cholam under Lamed · Chirik under He'},
    {ch:'שָׁלוֹם',    trans:'sha-LOM',     meaning:'Peace',               note:'Qamets under Shin · Cholam on Vav'},
    {ch:'דָּבָר',     trans:'da-VAR',      meaning:'Word / Thing',        note:'Qamets under Dalet · Qamets under Bet'},
    {ch:'מֶלֶךְ',     trans:'ME-lekh',     meaning:'King',                note:'Segol under Mem · Segol under Lamed'},
    {ch:'נֶפֶשׁ',     trans:'NE-fesh',     meaning:'Soul',                note:'Segol under Nun · Segol under Pe'},
    {ch:'קָדוֹשׁ',    trans:'ka-DOSH',     meaning:'Holy',                note:'Qamets under Qof · Cholam on Vav'},
  ],

  scriptureRef: 'Psalm 23:1',
  scripture: {
    orig:  'יהוה רֹעִי לֹא אֶחְסָר',
    trans: 'YHWH ro\'i lo echsar',
    eng:   '"The LORD is my shepherd; I shall not want." — Psalm 23:1',
  },
  scriptureNote: 'Read each word: יהוה (YHWH — no vowels, a special case) · רֹעִי (ro-i — Cholam then Chirik) · לֹא (lo — Cholam) · אֶחְסָר (ech-sar — Segol then Shewa then Qamets).',
  scriptureTip:  '<strong>💡 You can read this:</strong> Psalm 23:1 uses vowel points you have just learned. Try reading it aloud: YHWH — ro-i — lo — ech-sar. "The LORD is my shepherd, I shall not want." This is real Hebrew. You are reading Scripture.',

  quiz: [
    {q:'What is the Niqqud system, and who developed it?', ch:'', opts:['Vowel points added by Moses at Sinai','Vowel points developed by the Masoretes in the 6th–10th centuries AD','Punctuation marks added by Greek translators','Accent marks used only in poetry'], ans:1, ok:'Correct! The Niqqud are vowel points developed by the Masoretes — Jewish scribes — in the 6th–10th centuries AD to preserve correct pronunciation of Hebrew as the spoken language declined.', no:'The Niqqud were developed by the Masoretes (6th–10th centuries AD) to preserve Hebrew pronunciation.'},
    {q:'Which vowel point is a simple flat horizontal line below a consonant?', ch:'אַ', opts:['Qamets (long A)','Chirik (I)','Patach (short A)','Shewa (half vowel)'], ans:2, ok:'Correct! The Patach (אַ) is a simple flat line below the consonant — the simplest vowel mark to recognise. It makes a short A sound as in "hat."', no:'The Patach (אַ) — a flat horizontal line below the consonant. Short A sound.'},
    {q:'What does a Dagesh (dot inside a consonant) do?', ch:'בּ', opts:['Makes the letter silent','Doubles the vowel sound','Hardens the consonant (e.g. V becomes B) or doubles it','Indicates a word boundary'], ans:2, ok:'Correct! The Dagesh hardens soft consonants (Bet ב = V without dagesh, בּ = B with dagesh) or doubles the consonant. The six letters affected are ב ג ד כ פ ת.', no:'The Dagesh hardens a consonant (e.g. Bet: ב = V, בּ = B) or doubles it.'},
    {q:'How do you pronounce שָׁלוֹם (shalom)?', ch:'שָׁלוֹם', opts:['sha-lim','sha-lom','she-lem','sho-lam'], ans:1, ok:'Correct! שָׁלוֹם = sha-LOM. Shin + Qamets (long A) = sha · Lamed + Cholam on Vav (long O) = lo · Final Mem = m. Sha-lom.', no:'שָׁלוֹם = sha-LOM. Qamets = long A · Cholam on Vav = long O.'},
    {q:'What is the Shewa (אְ) and how should you pronounce it as a beginner?', ch:'אְ', opts:['A long A sound','A long U sound','A very short "e" sound or silent — like the "e" in "the"','The same as the Patach'], ans:2, ok:'Correct! The Shewa is a half-vowel — two vertical dots below a consonant. As a beginner, pronounce it as a very short "e" (like "the" said quickly). It can also be silent depending on position.', no:'The Shewa = a very short "e" sound (like "the") or silent. Two vertical dots below the consonant.'},
  ],

  completionNote: 'You can now read any vowel-pointed Hebrew word. The consonants and vowels are complete. From here every lesson focuses on reading real Hebrew Scripture.',
  nextDay: 'Day 4: Greek IV →',
};
