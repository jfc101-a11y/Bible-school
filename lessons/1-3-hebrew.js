/* ═══════════════════════════════════════
   LESSON: Week 1 · Day 3 · Biblical Hebrew II
   Letters 6–10: Vav, Zayin, Chet, Tet, Yod
   ═══════════════════════════════════════ */

LESSONS['1-3-Hebrew'] = {
  color:    'gold',
  subtitle: 'Week 1 · Day 3 · Biblical Hebrew II',
  title:    'Letters 6 to 10',
  intro:    'You already know the first five letters of the Hebrew alphabet. Today you add five more — including Vav, which doubles as a vowel, and Yod, the smallest letter in the alphabet that Jesus himself referenced in the Sermon on the Mount.',
  sections: ['Introduction','The Alphabet','Today\'s Letters','Writing Practice','First Words','Quiz','Complete'],

  beforeYouBegin: `
    <div class="box box-tip"><strong>💡 Review first:</strong> Before starting, write your five letters from Day 1 from memory — א ב ג ד ה. If you hesitate on any, write it 5 times before continuing. Today's letters build on that foundation.</div>
    <p class="lesson-p"><strong>Today's letters introduce two new concepts:</strong> <em>Vav</em> as a vowel letter, and the <em>guttural</em> Chet — a sound made deep in the throat that has no English equivalent.</p>
    <div class="box box-fact"><strong>📜 Did you know:</strong> The Hebrew letter Yod (י) is the smallest letter in the alphabet — a single small stroke. Jesus references it in Matthew 5:18: "Until heaven and earth pass away, not a jot (iota/yod) or tittle will pass from the Law." The word "jot" in English comes directly from Yod.</div>`,

  alphabetIntro: 'The full Hebrew alphabet. Letters 6–10 are highlighted today. Letters 1–5 from Day 1 are ones you already know.',
  alphabetNotes: `
    <div class="box box-tip"><strong>💡 Your progress:</strong> After today you will know 10 of the 22 Hebrew letters — nearly half the alphabet in just two sessions.</div>`,

  alphabet: [
    {ch:'א',name:'Aleph', sound:'Silent', n:1},
    {ch:'ב',name:'Bet',   sound:'B/V',   n:2},
    {ch:'ג',name:'Gimel', sound:'G',     n:3},
    {ch:'ד',name:'Dalet', sound:'D',     n:4},
    {ch:'ה',name:'He',    sound:'H',     n:5},
    {ch:'ו',name:'Vav',   sound:'V/W',   n:6,  t:true},
    {ch:'ז',name:'Zayin', sound:'Z',     n:7,  t:true},
    {ch:'ח',name:'Chet',  sound:'Ch',    n:8,  t:true},
    {ch:'ט',name:'Tet',   sound:'T',     n:9,  t:true},
    {ch:'י',name:'Yod',   sound:'Y',     n:10, t:true},
    {ch:'כ',name:'Kaf',   sound:'K/Kh',  n:11},
    {ch:'ל',name:'Lamed', sound:'L',     n:12},
    {ch:'מ',name:'Mem',   sound:'M',     n:13},
    {ch:'נ',name:'Nun',   sound:'N',     n:14},
    {ch:'ס',name:'Samekh',sound:'S',     n:15},
    {ch:'ע',name:'Ayin',  sound:'Silent',n:16},
    {ch:'פ',name:'Pe',    sound:'P/F',   n:17},
    {ch:'צ',name:'Tsadi', sound:'Ts',    n:18},
    {ch:'ק',name:'Qof',   sound:'Q',     n:19},
    {ch:'ר',name:'Resh',  sound:'R',     n:20},
    {ch:'ש',name:'Shin',  sound:'Sh/S',  n:21},
    {ch:'ת',name:'Tav',   sound:'T',     n:22},
  ],

  focusLetters: [
    {ch:'ו', name:'Vav',   trans:'V / W / vowel', desc:'Also functions as vowel letters O and U',   ex:'וְ — ve (And) — most common prefix in Bible'},
    {ch:'ז', name:'Zayin', trans:'Z',              desc:'Like English Z; ancient pictograph = weapon', ex:'זָהָב — zahav (Gold)'},
    {ch:'ח', name:'Chet',  trans:'Ch (guttural)',  desc:'Throat sound — like Scottish "loch"',        ex:'חַיִּים — chayyim (Life)'},
    {ch:'ט', name:'Tet',   trans:'T',              desc:'A second T letter — emphatic, deeper T',     ex:'טוֹב — tov (Good)'},
    {ch:'י', name:'Yod',   trans:'Y',              desc:'Smallest letter; root of the divine name',   ex:'יהוה — YHWH (LORD)'},
  ],

  deepDive: `
    <div class="lesson-h3">ו Vav — The Hook and the Connector</div>
    <p class="lesson-p">Vav makes a <strong>V or W sound</strong> as a consonant. But it is also one of the most important letters in the Bible because as a <em>prefix</em>, <strong>וְ (ve)</strong> means "and." The vast majority of Hebrew sentences in narrative begin with Vav — it strings the whole biblical story together. Open any page of Genesis and you will see it constantly.</p>
    <div class="box box-fact"><strong>In Scripture:</strong> Genesis 1 uses וְ relentlessly — "And God said... and there was light... and God saw..." The repeated Vav creates the rhythmic, cumulative momentum of the creation account. In Hebrew, this narrative style is called <em>Vav-consecutive</em> — one of the most important grammar concepts you will learn.</div>

    <div class="lesson-h3">ז Zayin — Z as in "Zone"</div>
    <p class="lesson-p">Zayin makes a <strong>Z sound</strong>. The ancient pictograph was a <em>weapon</em> or sword. The word זָהָב (zahav) means gold — the metal of the Temple, of the Ark, of the menorah. You will encounter this word throughout Exodus.</p>

    <div class="lesson-h3">ח Chet — The Guttural H</div>
    <p class="lesson-p">Chet makes a <strong>deep, guttural Ch sound</strong> — like the Scottish "loch" or the German "Bach." It is produced at the back of the throat. This is not the same as the soft H of He (ה). The word חַיִּים (chayyim) means <em>life</em> — you may recognise it from the Jewish toast "L'chayyim!" (To life!).</p>
    <div class="box box-tip"><strong>💡 He vs Chet:</strong> He (ה) = soft breath, like English H. Chet (ח) = hard guttural, like clearing your throat gently. They look different — He has a gap on the left; Chet is fully closed at the top.</div>

    <div class="lesson-h3">ט Tet — The Second T</div>
    <p class="lesson-p">Hebrew has two letters that make a T sound — Tet (ט) and Tav (ת). Tet is the <em>emphatic</em> T, produced further back in the mouth. The word טוֹב (tov) means <em>good</em> — it is the word God uses seven times in Genesis 1: "And God saw that it was good."</p>
    <div class="box box-fact"><strong>In Scripture:</strong> טוֹב (tov) appears 7 times in Genesis 1. Seven is the number of completeness in Hebrew. The word for "very good" at the end — טוֹב מְאֹד (tov me'od) — is God's verdict on the completed creation including humanity.</div>

    <div class="lesson-h3">י Yod — The Smallest Letter</div>
    <p class="lesson-p">Yod makes a <strong>Y sound</strong> and is the <em>smallest letter</em> in the Hebrew alphabet — just a small curved stroke, like an apostrophe. Yet it is extraordinarily significant. It is the first letter of the divine name יהוה (YHWH). Jesus says in Matthew 5:18 that "not a Yod" will pass from the Law until all is fulfilled.</p>
    <div class="box box-fact"><strong>The Divine Name:</strong> יהוה (Yod-He-Vav-He) — YHWH — is the covenant name of God revealed to Moses in Exodus 3:14. You now know all four letters of this name: Yod (י), He (ה), Vav (ו), He (ה). This is considered so sacred in Jewish tradition that it is never pronounced aloud — the word Adonai (Lord) is substituted instead.</div>
    <div class="box box-tip"><strong>💡 Memory:</strong> Vav = and/hook · Zayin = weapon/gold · Chet = guttural/life · Tet = good/emphatic T · Yod = smallest/divine name</div>`,

  writing: [
    {ch:'ו', name:'Vav',   steps:['A simple vertical stroke with a small head at the top','Like a nail or a hook — which is what "vav" means in Hebrew','Very similar to Yod (י) but slightly longer — pay attention to length','Write it 10 times.']},
    {ch:'ז', name:'Zayin', steps:['A vertical stroke with a horizontal bar across the top','Like an upside-down T, or a sword with a crossguard','The top bar extends slightly to the right','Write it 10 times.']},
    {ch:'ח', name:'Chet',  steps:['Two vertical strokes connected by a horizontal bar across the top','Like the letter ה (He) but the left stroke is attached to the top — no gap','Key: He has a gap at the top-left; Chet is fully closed','Write Chet and He side-by-side 5 times to see the difference.']},
    {ch:'ט', name:'Tet',   steps:['A circular or U-shape with a vertical stroke inside curling to the left','Looks like a vessel or pot — the ancient pictograph was a basket','The inner stroke curls inward and does not touch the outer curve at the bottom','Write it 10 times.']},
    {ch:'י', name:'Yod',   steps:['The simplest letter — just a small curved stroke, like a comma or apostrophe','It sits above the baseline, slightly suspended','Tiny but significant — do not make it too large','Write it 15 times, focusing on keeping it small and consistent.']},
  ],

  vocab: [
    {ch:'וְ',       trans:'ve-',     meaning:'And (prefix)',      note:'Vav — most common word in the Bible'},
    {ch:'זָהָב',   trans:'zahav',   meaning:'Gold',               note:'Zayin at start — Temple gold'},
    {ch:'חַיִּים', trans:'chayyim', meaning:'Life',               note:'Chet — "L\'chayyim!"'},
    {ch:'טוֹב',    trans:'tov',     meaning:'Good',               note:'Tet — said 7x in Genesis 1'},
    {ch:'יָד',     trans:'yad',     meaning:'Hand',               note:'Yod at start — also means "power"'},
    {ch:'יהוה',    trans:'YHWH',    meaning:'LORD (divine name)', note:'All four letters now known'},
    {ch:'חַיָּה',  trans:'chayyah', meaning:'Living creature',    note:'Chet — root of all animal life'},
  ],

  scriptureRef: 'Genesis 1:4',
  scripture: {
    orig:  'וַיַּרְא אֱלֹהִים אֶת־הָאוֹר כִּי־טוֹב',
    trans: 'Vayar Elohim et-ha\'or ki-tov',
    eng:   '"And God saw the light, that it was good." — Genesis 1:4',
  },
  scriptureNote: 'Find: Vav (וַ) at the very start — the Vav-consecutive · Aleph (א) in אֱלֹהִים · Tet (ט) in טוֹב (good) · He (ה) in הָאוֹר (the light).',
  scriptureTip:  '<strong>💡 Vav-consecutive:</strong> The וַ at the start of וַיַּרְא is a Vav-consecutive — it converts the verb tense and drives the narrative forward. Almost every sentence in biblical narrative begins this way. You have just seen the engine of Hebrew storytelling.',

  quiz: [
    {q:'What is the name of the smallest letter in the Hebrew alphabet?', ch:'י', opts:['Vav','Aleph','Yod','Zayin'], ans:2, ok:'Correct! Yod (י) is the smallest Hebrew letter. Jesus references it in Matthew 5:18 — "not a jot (Yod) will pass from the Law."', no:'The smallest letter is Yod (י) — a tiny curved stroke. Jesus mentions it in Matthew 5:18.'},
    {q:'What does the prefix וְ (Vav) mean at the start of a Hebrew word?', ch:'וְ', opts:['The','In','And','From'], ans:2, ok:'Correct! וְ means "and." It is the most frequently occurring word in the Hebrew Bible, connecting the entire narrative.', no:'וְ means "and." It is the most common prefix in the Hebrew Bible.'},
    {q:'What does טוֹב (tov) mean — the word God repeats 7 times in Genesis 1?', ch:'טוֹב', opts:['Holy','Good','Great','True'], ans:1, ok:'Correct! טוֹב (tov) means "good." God declares his creation tov seven times in Genesis 1, climaxing with "very good" (tov me\'od) after creating humanity.', no:'טוֹב (tov) means "good." God uses it seven times in Genesis 1.'},
    {q:'Which two Hebrew letters look very similar but differ by a gap at the top-left?', ch:'', opts:['Tet and Tav','Vav and Yod','He and Chet','Zayin and Vav'], ans:2, ok:'Correct! He (ה) has a gap at the top-left; Chet (ח) is fully closed. Confusing them changes the meaning of words significantly.', no:'He (ה) and Chet (ח) — He has a gap at the top-left; Chet is fully closed.'},
    {q:'Which four letters make up the divine name יהוה (YHWH)?', ch:'יהוה', opts:['Yod, He, Vet, He','Yod, He, Vav, He','Yod, Chet, Vav, He','Aleph, He, Vav, He'], ans:1, ok:'Correct! יהוה = Yod (י) + He (ה) + Vav (ו) + He (ה). You now know all four letters of God\'s covenant name revealed to Moses in Exodus 3.', no:'יהוה = Yod (י) + He (ה) + Vav (ו) + He (ה) — YHWH, the covenant name of God.'},
  ],

  completionNote: 'You now know 10 of the 22 Hebrew letters — nearly half the alphabet. You have learned the divine name יהוה and the word that drives all biblical narrative: וְ (and).',
  nextDay: 'Day 4: Greek II →',
};
