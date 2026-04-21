/* ═══════════════════════════════════════
   LESSON: Week 2 · Day 5 · Biblical Hebrew VI
   Reading First Hebrew Sentences
   ═══════════════════════════════════════ */

LESSONS['2-5-Hebrew'] = {
  color:    'gold',
  subtitle: 'Week 2 · Day 5 · Biblical Hebrew VI',
  title:    'Reading Your First Hebrew Sentences',
  intro:    'You know all 22 letters and the vowel system. Today you stop drilling and start reading — real Hebrew sentences from the Psalms and Genesis. This is the moment the alphabet becomes Scripture.',
  sections: ['Introduction','How Hebrew Works','Reading Practice','The Verb','First Sentences','Quiz','Complete'],

  beforeYouBegin: `
    <p class="lesson-p"><strong>Today is different.</strong> There are no new letters to learn. Instead you will spend the full session reading and understanding actual Hebrew sentences from the Bible — working through each word, understanding the grammar, and feeling the language come alive.</p>
    <div class="box box-tip"><strong>💡 The approach:</strong> We work through each sentence word by word. For each word you will see: (1) the Hebrew, (2) a pronunciation guide, (3) the grammatical breakdown, (4) the meaning. Read each word aloud before moving on.</div>
    <div class="box box-fact"><strong>📜 Why start with the Psalms:</strong> The Psalms were Jesus' prayer book. He quoted them on the cross. They represent the full range of human emotion — lament, praise, trust, despair, joy. They also use relatively straightforward Hebrew, making them ideal for beginning readers. Psalm 23 is the perfect starting point.</div>`,

  alphabetIntro: 'Review — the complete Hebrew alphabet with vowel examples. Every letter and vowel you need for today\'s reading.',
  alphabetNotes: `<div class="box box-tip"><strong>💡 Reading direction:</strong> Remember — Hebrew reads right to left. When you see a Hebrew sentence, start at the right end and move left, word by word.</div>`,

  alphabet: [
    {ch:'אָ',name:'Aleph+Qamets', sound:'a (long)', n:1, t:true},
    {ch:'בֵּ',name:'Bet+Tsere',   sound:'be',       n:2, t:true},
    {ch:'גָּ',name:'Gimel+Qamets',sound:'ga',       n:3, t:true},
    {ch:'דָ', name:'Dalet+Qamets',sound:'da',       n:4, t:true},
    {ch:'הַ', name:'He+Patach',   sound:'ha',       n:5, t:true},
    {ch:'וְ', name:'Vav+Shewa',   sound:'ve',       n:6, t:true},
    {ch:'זָ', name:'Zayin+Qamets',sound:'za',       n:7, t:true},
    {ch:'חַ', name:'Chet+Patach', sound:'cha',      n:8, t:true},
    {ch:'טוֹ',name:'Tet+Cholam',  sound:'to',       n:9, t:true},
    {ch:'יִ', name:'Yod+Chirik',  sound:'yi',       n:10,t:true},
    {ch:'כִּ',name:'Kaf+Chirik',  sound:'ki',       n:11,t:true},
    {ch:'לֵ', name:'Lamed+Tsere', sound:'le',       n:12,t:true},
    {ch:'מֶ', name:'Mem+Segol',   sound:'me',       n:13,t:true},
    {ch:'נֶ', name:'Nun+Segol',   sound:'ne',       n:14,t:true},
    {ch:'סֵ', name:'Samekh+Tsere',sound:'se',       n:15,t:true},
    {ch:'עֹ', name:'Ayin+Cholam', sound:'o',        n:16,t:true},
    {ch:'פֶּ',name:'Pe+Segol',    sound:'pe',       n:17,t:true},
    {ch:'צֶ', name:'Tsadi+Segol', sound:'tse',      n:18,t:true},
    {ch:'קָ', name:'Qof+Qamets',  sound:'qa',       n:19,t:true},
    {ch:'רֹ', name:'Resh+Cholam', sound:'ro',       n:20,t:true},
    {ch:'שָׁ', name:'Shin+Qamets',sound:'sha',      n:21,t:true},
    {ch:'תּ', name:'Tav+Dagesh',  sound:'ta',       n:22,t:true},
  ],

  focusLetters: [
    {ch:'יהוה', name:'YHWH',     trans:'The LORD',   desc:'The divine name — four letters, no vowels', ex:'Psalm 23:1 — יהוה רֹעִי'},
    {ch:'הַ',   name:'Ha- (The)',trans:'The',        desc:'Definite article — He with Patach prefix',  ex:'הַמֶּלֶךְ — the king'},
    {ch:'וְ',   name:'Ve- (And)',trans:'And',        desc:'Vav conjunction — most common prefix',      ex:'וְאַתָּה — and you'},
    {ch:'בְּ',  name:'Be- (In)', trans:'In / With',  desc:'Bet prefix — preposition',                  ex:'בְּרֵאשִׁית — in the beginning'},
    {ch:'לְ',   name:'Le- (To)', trans:'To / For',   desc:'Lamed prefix — preposition',               ex:'לְדָוִד — of/for David'},
  ],

  deepDive: `
    <div class="lesson-h3">How Hebrew Sentences Work</div>
    <p class="lesson-p">Hebrew sentence structure differs from English in important ways you need to understand before reading.</p>

    <p class="lesson-p"><strong>1. Verb-Subject-Object order (VSO).</strong> English says "God created the heavens." Hebrew says "Created God the heavens" — the verb often comes first. This is not always the case but is the default narrative order.</p>

    <p class="lesson-p"><strong>2. No "to be" in the present tense.</strong> Hebrew has no present tense form of "to be." So "יהוה רֹעִי" (YHWH ro'i) literally means "LORD shepherd-mine" — the English verb "is" is implied. When you see a sentence with no verb, the verb "is" or "are" is understood.</p>

    <p class="lesson-p"><strong>3. Prefixes carry prepositions and conjunctions.</strong> Where English uses separate words ("in," "to," "and"), Hebrew attaches them directly to the following word as prefixes: בְּ (in), לְ (to/for), מִ (from), כְּ (like/as), וְ (and).</p>

    <p class="lesson-p"><strong>4. Gender matters.</strong> Every Hebrew noun is either masculine or feminine — not based on natural gender but grammatical convention. Adjectives, verbs, and pronouns must agree in gender with their noun.</p>

    <div class="lesson-h3">The Four Key Prefixes</div>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;overflow:hidden;margin:1.25rem 0;">
      <table style="width:100%;border-collapse:collapse;font-size:.9rem;">
        <thead><tr style="background:var(--bg3);"><th style="padding:.6rem .85rem;text-align:left;font-family:var(--display);font-size:.62rem;letter-spacing:.15em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Prefix</th><th style="padding:.6rem .85rem;text-align:left;font-family:var(--display);font-size:.62rem;letter-spacing:.15em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Hebrew</th><th style="padding:.6rem .85rem;text-align:left;font-family:var(--display);font-size:.62rem;letter-spacing:.15em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Meaning</th><th style="padding:.6rem .85rem;text-align:left;font-family:var(--display);font-size:.62rem;letter-spacing:.15em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Example</th></tr></thead>
        <tbody>
          <tr><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text);">The (definite article)</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.4rem;color:var(--gold);">הַ</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Ha- = the</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.2rem;color:var(--gold);">הַמֶּלֶךְ = the king</td></tr>
          <tr><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text);background:var(--bg2);">And</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.4rem;color:var(--gold);background:var(--bg2);">וְ</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-mid);background:var(--bg2);">Ve- = and</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.2rem;color:var(--gold);background:var(--bg2);">וְשָׁלוֹם = and peace</td></tr>
          <tr><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text);">In / With</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.4rem;color:var(--gold);">בְּ</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Be- = in/with/by</td><td style="padding:.55rem .85rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.2rem;color:var(--gold);">בְּיֹום = in a day</td></tr>
          <tr><td style="padding:.55rem .85rem;color:var(--text);background:var(--bg2);">To / For</td><td style="padding:.55rem .85rem;font-family:var(--hebrew);font-size:1.4rem;color:var(--gold);background:var(--bg2);">לְ</td><td style="padding:.55rem .85rem;color:var(--text-mid);background:var(--bg2);">Le- = to/for/of</td><td style="padding:.55rem .85rem;font-family:var(--hebrew);font-size:1.2rem;color:var(--gold);background:var(--bg2);">לְדָוִד = of David</td></tr>
        </tbody>
      </table>
    </div>`,

  writing: [
    {ch:'יהוה', name:'YHWH — The Divine Name', steps:['The four letters: Yod (י) + He (ה) + Vav (ו) + He (ה)','No vowels are written — it is read as Adonai (Lord) out of reverence','Write the four letters right to left: י then ה then ו then ה','This is the most sacred combination of letters in the Hebrew Bible','Write it 10 times slowly and thoughtfully.']},
    {ch:'הַ', name:'Ha- (The)', steps:['He (ה) with a Patach vowel (flat line below) and a Dagesh in the following letter','The Dagesh in the next letter is how you know it is the definite article','Before gutturals (א ה ח ע) the vowel changes — but for now, recognise הַ as "the"','Practice: הַמֶּלֶךְ (the king) · הָאָרֶץ (the earth) · הַשָּׁמַיִם (the heavens)']},
    {ch:'בְּרֵאשִׁית', name:'Bereshit — In the beginning', steps:['Break it down: בְּ (in) + רֵאשִׁית (beginning)','בְּ = Bet with Shewa (in/with)','רֵ = Resh with Tsere (re-)','אשִׁ = Aleph + Shin with Chirik (-shi)','ית = Yod + Tav (-it)','Together: be-re-SHIT = "in beginning" = "in the beginning"','Say it aloud 10 times while looking at the Hebrew.']},
    {ch:'אֱלֹהִים', name:'Elohim — God', steps:['Break it down: אֱ (e-) + לֹ (lo-) + הִ (hi-) + ים (-im)','אֱ = Aleph with Hateph-Segol (short e)','לֹ = Lamed with Cholam (lo)','הִ = He with Chirik (hi)','ים = Yod + Mem (plural suffix)','Together: e-lo-HIM','Elohim is grammatically plural but used with singular verbs — the plural of majesty','Say it aloud 10 times.']},
    {ch:'טוֹב', name:'Tov — Good', steps:['Three letters: ט (Tet) + וֹ (Cholam on Vav) + ב (Vet)','ט = Tet (T sound)','וֹ = Vav with Cholam dot above (long O)','ב = Vet without dagesh (V sound)','Together: TOV = "good"','This is the word God says 7 times in Genesis 1','Say it aloud 10 times. You already know this word — now you can read it.']},
  ],

  vocab: [
    {ch:'רֹעִי',     trans:"ro'i",    meaning:'My shepherd',       note:'Resh+Cholam · Ayin+Chirik+Yod (my)'},
    {ch:'לֹא',      trans:'lo',      meaning:'No / Not',          note:'Lamed+Cholam · Aleph'},
    {ch:'אֶחְסָר',  trans:'echsar',  meaning:'I shall lack/want', note:'Psalm 23:1 — I shall not want'},
    {ch:'נַפְשִׁי', trans:'nafshi',  meaning:'My soul',           note:'Nefesh + Yod (my)'},
    {ch:'יְשׁוֹבֵב',trans:"yeshovev",meaning:'He restores',       note:'Psalm 23:3 — he restores my soul'},
    {ch:'אִירָא',   trans:"ira'",    meaning:'I will fear',       note:'Psalm 23:4 — I will fear no evil'},
    {ch:'כִּי',     trans:'ki',      meaning:'Because / For / That',note:'The most common conjunction in Hebrew'},
  ],

  scriptureRef: 'Psalm 23:1–3',
  scripture: {
    orig:  'יהוה רֹעִי לֹא אֶחְסָר׃ בִּנְאוֹת דֶּשֶׁא יַרְבִּיצֵנִי עַל־מֵי מְנֻחוֹת יְנַהֲלֵנִי׃ נַפְשִׁי יְשׁוֹבֵב',
    trans: 'YHWH ro\'i lo echsar. Bin\'ot deshe yarbitseni, al-mei menuchot yenahhaleni. Nafshi yeshovev.',
    eng:   '"The LORD is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul." — Psalm 23:1–3',
  },
  scriptureNote: 'Work through each word: יהוה (YHWH) · רֹעִי (my shepherd — Cholam + Chirik) · לֹא (not — Cholam) · אֶחְסָר (I shall lack — Segol then Qamets) · נַפְשִׁי (my soul — Patach).',
  scriptureTip:  '<strong>💡 Read it aloud:</strong> YHWH ro\'i — lo echsar. Say these words. They are the same words David sang. The same words Jesus prayed. The same words that have sustained God\'s people for three thousand years. You are reading them now in the original language they were written in.',

  quiz: [
    {q:'Hebrew has no present tense of "to be." How is יהוה רֹעִי (YHWH ro\'i) translated?', ch:'יהוה רֹעִי', opts:['"YHWH was my shepherd"','"YHWH my shepherd" — the verb "is" is implied','"YHWH will be my shepherd"','"YHWH and my shepherd"'], ans:1, ok:'Correct! Hebrew has no present tense "to be." So יהוה רֹעִי literally means "LORD shepherd-mine" and the "is" is understood from context. This is translated "The LORD is my shepherd."', no:'Hebrew has no present "to be." יהוה רֹעִי = "LORD shepherd-mine" — the "is" is implied.'},
    {q:'What does the prefix הַ (ha-) mean when attached to a Hebrew word?', ch:'הַמֶּלֶךְ', opts:['And','In','The (definite article)','To/For'], ans:2, ok:'Correct! הַ (ha-) is the Hebrew definite article meaning "the." It is written as a prefix attached directly to the word — not as a separate word like in English. הַמֶּלֶךְ = the king.', no:'הַ (ha-) = "the" — the Hebrew definite article, written as a prefix attached to the word.'},
    {q:'What is the standard word order in Hebrew narrative sentences?', ch:'', opts:['Subject-Verb-Object (like English)','Object-Subject-Verb','Verb-Subject-Object (verb often first)','There is no standard order'], ans:2, ok:'Correct! Hebrew narrative typically uses Verb-Subject-Object order. "Created God the heavens" rather than "God created the heavens." The verb often comes first, which is opposite to standard English.', no:'Hebrew narrative order is typically Verb-Subject-Object. The verb comes first — opposite to English.'},
    {q:'What does נַפְשִׁי (nafshi) mean in Psalm 23:3?', ch:'נַפְשִׁי', opts:['My heart','My strength','My soul','My life (biologically)'], ans:2, ok:'Correct! נַפְשִׁי = my soul. נֶפֶשׁ (nefesh) = soul/self + י (yod suffix = my). "He restores my soul" — the inner self, the whole person.', no:'נַפְשִׁי = my soul. נֶפֶשׁ (nefesh) + י (my) = my soul/self.'},
    {q:'Which of these is NOT a Hebrew prefix preposition you learned today?', ch:'', opts:['בְּ (be- = in/with)','לְ (le- = to/for)','וְ (ve- = and)','אֶ (e- = from)'], ans:3, ok:'Correct! אֶ is not a prefix preposition — it is a vowel pattern (Patach under Aleph). The prefix meaning "from" is מִ (mi-), not אֶ. The four key prefixes are הַ (the), וְ (and), בְּ (in), and לְ (to/for).', no:'אֶ is not a prefix — it is a vowel. The "from" prefix is מִ (mi-). The four key prefixes are הַ וְ בְּ לְ.'},
  ],

  completionNote: 'You have read your first Hebrew sentences from Psalm 23 — the Psalm Jesus knew by heart. The letters, vowels, and basic sentence structure are now in your hands.',
  nextDay: 'Week 3 · Day 1: Latin I →',
};
