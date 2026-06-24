/* ═══════════════════════════════════════
   LESSON: Week 6 · Day 1 · Biblical Hebrew XII
   The Niphal Stem — Passive Voice
   ═══════════════════════════════════════ */

LESSONS['6-1-Hebrew'] = {
  color:    'gold',
  subtitle: 'Week 6 · Day 1 · Biblical Hebrew XII',
  title:    'The Niphal Stem — Passive Voice',
  intro:    'Every Hebrew verb you have learned so far has been Qal — the simple active stem. Today you learn the Niphal — the simple passive/reflexive stem. This is the verbal form behind some of the most important theological statements in Scripture, including the doctrine of being "blessed" and the prophetic promise that God\'s people will be "found" and "gathered."',
  sections: ['Introduction','The Niphal Pattern','The Paradigm','Reading Practice','First Sentences','Quiz','Complete'],

  beforeYouBegin: `
    <p class="lesson-p"><strong>The Niphal stem changes who receives the action.</strong> In the Qal, the subject performs the action: שָׁמַר (he kept). In the Niphal, the subject receives the action: נִשְׁמַר (he was kept / he kept himself). This single shift — from active to passive/reflexive — unlocks an enormous number of theologically rich verbs.</p>
    <div class="box box-fact"><strong>📜 Why the Niphal matters:</strong> The Niphal is identifiable by its prefixed נ (Nun) in the Perfect, and by a distinctive vowel pattern in the Imperfect. Genesis 12:3 promises that through Abraham "all the families of the earth shall be blessed (וְנִבְרְכוּ)" — a Niphal. The passive voice is not a grammatical footnote; it is the voice of grace — things being done TO God's people, not just BY them.</div>
    <div class="box box-tip"><strong>💡 Recognition tip:</strong> Niphal Perfect = נ prefix on the root (נִקְטַל pattern). Niphal Imperfect = the נ assimilates into the first root letter, doubling it (יִקָּטֵל pattern — note the dagesh in the second root letter). This is more complex than Qal — take it slowly.</div>`,

  alphabetIntro: 'The Niphal paradigm — Perfect and Imperfect — built on the root קָטַל (to kill), the grammarian\'s model verb.',
  alphabetNotes: `<div class="box box-note"><strong>Two patterns to learn:</strong> Niphal Perfect: נִקְטַל (niqtal — he was killed). Niphal Imperfect: יִקָּטֵל (yiqqatel — he will be killed, note the doubled middle letter from the assimilated Nun).</div>`,

  alphabet: [
    {ch:'נִקְטַל',   name:'Niphal Perf. 3ms',   sound:'niqtal — he was killed',     n:1, t:true},
    {ch:'נִקְטְלָה', name:'Niphal Perf. 3fs',   sound:'niqtelah — she was killed',  n:2, t:true},
    {ch:'נִקְטַלְתִּי',name:'Niphal Perf. 1cs', sound:'niqtalti — I was killed',    n:3, t:true},
    {ch:'יִקָּטֵל',  name:'Niphal Imperf. 3ms', sound:'yiqqatel — he will be killed',n:4, t:true},
    {ch:'תִּקָּטֵל',  name:'Niphal Imperf. 3fs', sound:'tiqqatel — she will be killed',n:5,t:true},
    {ch:'נִשְׁמַר',   name:'Niphal — he was kept',sound:'nishmar',                    n:6, t:true},
    {ch:'נִמְצָא',    name:'Niphal — he was found',sound:'nimtsa',                    n:7, t:true},
    {ch:'נוֹלַד',     name:'Niphal — he was born', sound:'nolad',                      n:8, t:true},
    {ch:'נִקְרָא',    name:'Niphal — he was called',sound:'niqra',                     n:9, t:true},
    {ch:'וְנִבְרְכוּ',name:'Niphal — they will be blessed',sound:'venivrekhu',          n:10,t:true},
  ],

  focusLetters: [
    {ch:'נ',      name:'The Niphal marker',  trans:'Passive/reflexive prefix',desc:'Nun prefixed to the root in the Perfect',     ex:'נִשְׁמַר — he was kept (cf. Qal שָׁמַר — he kept)'},
    {ch:'נִמְצָא', name:'Nimtsa',            trans:'He was found',            desc:'Niphal Perfect 3ms of מצא (to find)',          ex:'Used of God being found by those who seek him'},
    {ch:'נוֹלַד',  name:'Nolad',             trans:'He was born',             desc:'Niphal Perfect 3ms of ילד (to bear/give birth)',ex:'Isaiah 9:6 — "a child is born (יֻלַּד) to us"'},
    {ch:'נִקְרָא', name:'Niqra',             trans:'He was called/named',     desc:'Niphal Perfect 3ms of קרא (to call)',          ex:'Used for naming and for being summoned'},
    {ch:'יִקָּטֵל',name:'The doubled letter',trans:'Imperfect pattern',       desc:'Assimilated Nun doubles the 2nd root letter (dagesh)', ex:'Compare יִשָּׁמֵר (he will be kept) — doubled Shin'},
  ],

  deepDive: `
    <div class="lesson-h3">What the Niphal Does</div>
    <p class="lesson-p">The Niphal stem typically expresses one of three things:</p>
    <p class="lesson-p"><strong>1. Passive voice:</strong> The subject receives the action. נִשְׁמַר = "he was kept" (someone else did the keeping).</p>
    <p class="lesson-p"><strong>2. Reflexive voice:</strong> The subject acts on itself. הִתְקַדֵּשׁ-type ideas can sometimes appear as Niphal: "he kept himself."</p>
    <p class="lesson-p"><strong>3. Middle/stative voice:</strong> A state resulting from an action. נִמְצָא = "he was found" / "he exists, is present."</p>

    <div class="lesson-h3">The Niphal Perfect Paradigm</div>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;overflow:hidden;margin:1.25rem 0;">
      <table style="width:100%;border-collapse:collapse;font-size:.88rem;">
        <thead><tr style="background:var(--bg3);"><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Person</th><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Hebrew</th><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Translation</th></tr></thead>
        <tbody>
          <tr><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">3ms</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.3rem;color:var(--gold);">נִקְטַל</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">he was killed</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">3fs</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.3rem;color:var(--gold);">נִקְטְלָה</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">she was killed</td></tr>
          <tr><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">2ms</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.3rem;color:var(--gold);">נִקְטַלְתָּ</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">you (m.) were killed</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">1cs</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--hebrew);font-size:1.3rem;color:var(--gold);">נִקְטַלְתִּי</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">I was killed</td></tr>
          <tr><td style="padding:.5rem .8rem;color:var(--text-mid);">3cp</td><td style="padding:.5rem .8rem;font-family:var(--hebrew);font-size:1.3rem;color:var(--gold);">נִקְטְלוּ</td><td style="padding:.5rem .8rem;color:var(--text-mid);">they were killed</td></tr>
        </tbody>
      </table>
    </div>

    <div class="lesson-h3">The Niphal Imperfect — The Assimilated Nun</div>
    <p class="lesson-p">In the Niphal Imperfect, the prefixed Nun of the Perfect <strong>assimilates</strong> into the first letter of the root — meaning it disappears but leaves behind a Dagesh (doubling dot) in the next consonant. This is why יִקָּטֵל (he will be killed) has a doubled ק (with the dagesh) rather than a visible Nun.</p>
    <div class="box box-fact"><strong>Recognising assimilation:</strong> Qal Imperfect: יִקְטֹל (he will kill) — no doubling. Niphal Imperfect: יִקָּטֵל (he will be killed) — doubled middle letter (look for the dagesh) and a different vowel pattern (Qamets-Tsere instead of Qamets-Cholam). The doubling is your clue that a Nun has assimilated.</div>

    <div class="lesson-h3">Key Theological Niphal Verbs</div>
    <p class="lesson-p"><strong>נִמְצָא (nimtsa)</strong> — he was found. Jeremiah 29:13: "You will seek me and find me when you seek me with all your heart." The Niphal of being found by God carries the sense of accessibility — God allows himself to be found.</p>
    <p class="lesson-p"><strong>וְנִבְרְכוּ (venivrekhu)</strong> — they will be blessed. Genesis 12:3: "in you all the families of the earth shall be blessed." This Niphal verb is the foundation of the Abrahamic covenant's global scope — blessing flows TO the nations through Abraham; they are the recipients.</p>
    <p class="lesson-p"><strong>נוֹלַד (nolad)</strong> — he was born. The passive of being born emphasizes that birth happens TO a person, not something they do themselves — a fitting grammatical form for the most passive moment of human existence.</p>
    <div class="box box-tip"><strong>💡 Memory:</strong> Niphal Perfect = נ prefix (visible). Niphal Imperfect = doubled middle letter (Nun assimilated, dagesh visible). Passive/reflexive meaning throughout.</div>`,

  writing: [
    {ch:'נִשְׁמַר',   name:'Nishmar — he was kept',    steps:['Root: שׁ-מ-ר (compare Qal שָׁמַר = he kept)','Niphal Perfect 3ms — נ prefix added','Pronunciation: nish-MAR','Contrast with Qal: שָׁמַר (he kept, active) vs נִשְׁמַר (he was kept, passive)','Write it 10 times.']},
    {ch:'נִמְצָא',    name:'Nimtsa — he was found',     steps:['Root: מ-צ-א (to find)','Niphal Perfect 3ms','Pronunciation: nim-TSA','Jeremiah 29:13 — "you will find me" uses this root','Write it 10 times.']},
    {ch:'יִקָּטֵל',   name:'Yiqqatel — he will be killed', steps:['The model Niphal Imperfect form','Notice: no visible Nun — it assimilated into the doubled ק (with dagesh)','Pronunciation: yik-ka-TEL','Compare with Qal Imperfect יִקְטֹל (he will kill) — no doubling','Write it 10 times, paying attention to the doubled letter.']},
    {ch:'נוֹלַד',      name:'Nolad — he was born',       steps:['Root: י-ל-ד (to bear/give birth)','Niphal Perfect 3ms — note the Yod of the root becomes Vav-Cholam in this stem','Pronunciation: no-LAD','Isaiah 9:6 (in the Imperfect): יֻלַּד-לָנוּ — a child is born to us','Write it 10 times.']},
    {ch:'וְנִבְרְכוּ', name:'Venivrekhu — they will be blessed', steps:['Root: ב-ר-כ (to bless)','וְ (and) + נִבְרְכוּ (Niphal Perfect 3cp, used with future sense in context)','Pronunciation: ve-niv-re-KHU','Genesis 12:3 — the Abrahamic covenant\'s promise to the nations','Write it 10 times. This verb carries the whole missionary scope of Genesis 12.']},
  ],

  vocab: [
    {ch:'נִשְׁמַר', trans:'nishmar', meaning:'He was kept/guarded',  note:'Niphal of שׁמר — passive of Qal שָׁמַר'},
    {ch:'נִמְצָא',  trans:'nimtsa',  meaning:'He was found',         note:'Jeremiah 29:13 — "you will find me"'},
    {ch:'נוֹלַד',   trans:'nolad',   meaning:'He was born',          note:'Isaiah 9:6 — "a child is born to us"'},
    {ch:'נִקְרָא',  trans:'niqra',   meaning:'He was called/named',  note:'Niphal of קרא — passive naming'},
    {ch:'נִרְאָה',  trans:'nireh',   meaning:'He appeared (lit. was seen)',note:'Niphal of ראה — God "appeared" to the patriarchs'},
    {ch:'נֶחְשַׁב',  trans:'nechshav',meaning:'He was reckoned/counted',note:'Genesis 15:6 — Abraham\'s faith "was counted" as righteousness'},
    {ch:'וְנִבְרְכוּ',trans:'venivrekhu',meaning:'They will be blessed',note:'Genesis 12:3 — the Abrahamic covenant'},
  ],

  scriptureRef: 'Genesis 12:2–3',
  scripture: {
    orig:  'וְאֶעֶשְׂךָ לְגוֹי גָּדוֹל וַאֲבָרֶכְךָ וַאֲגַדְּלָה שְׁמֶךָ וֶהְיֵה בְּרָכָה וְנִבְרְכוּ בְךָ כֹּל מִשְׁפְּחֹת הָאֲדָמָה',
    trans: "Ve'e'eskha legoy gadol va'avarekhekha va'agadelah shemekha veheyeh berakhah venivrekhu vekha kol mishpechot ha'adamah",
    eng:   '"And I will make you into a great nation, and I will bless you and make your name great, so that you will be a blessing. And all the families of the earth shall be blessed through you." — Genesis 12:2–3',
  },
  scriptureNote: 'Find the Niphal: וְנִבְרְכוּ (venivrekhu — they will be blessed). Compare with the active Qal forms around it: וַאֲבָרֶכְךָ (I will bless you — Piel, active) and וֶהְיֵה בְּרָכָה (you will be a blessing). Abraham receives blessing (passive recipient via the Niphal applied to others) and becomes an active conduit of it.',
  scriptureTip: '<strong>💡 The missionary heart of the OT:</strong> The Niphal וְנִבְרְכוּ — "they will be blessed" — extends God\'s covenant promise beyond Abraham\'s family to "all the families of the earth." This single passive verb is the theological seed of the entire missionary movement of Scripture, fulfilled when Paul quotes this very verse in Galatians 3:8 to explain the gospel going to the Gentiles.',

  quiz: [
    {q:'What does the Niphal stem typically express?', ch:'', opts:['Intensive/repeated action','Causative action ("to cause to do")','Passive or reflexive voice — the subject receives the action','Simple active action, identical to Qal'], ans:2, ok:'Correct! The Niphal expresses passive voice (the subject receives the action) or reflexive voice (the subject acts on itself). נִשְׁמַר = he was kept (passive) — contrast with Qal שָׁמַר = he kept (active).', no:'Niphal = passive/reflexive voice. The subject receives the action rather than performing it.'},
    {q:'How do you recognise a Niphal Perfect form?', ch:'נִשְׁמַר', opts:['A doubled letter in the middle of the root','A Tav suffix at the end','A prefixed Nun (נ) before the root','A Mem prefix before the root'], ans:2, ok:'Correct! The Niphal Perfect is marked by a prefixed Nun (נ) before the root. נִשְׁמַר = נ + שׁמר. This Nun is visible and is the clearest marker of the Niphal Perfect.', no:'Niphal Perfect = prefixed Nun (נ) before the root. נִשְׁמַר = נ + שׁמר (he was kept).'},
    {q:'In the Niphal Imperfect (e.g. יִקָּטֵל), what happened to the expected Nun prefix?', ch:'יִקָּטֵל', opts:['It was simply dropped with no trace','It assimilated into the first root letter, leaving a doubling dagesh as evidence','It moved to the end of the word as a suffix','Niphal Imperfect never had a Nun to begin with'], ans:1, ok:'Correct! In the Niphal Imperfect, the Nun assimilates into (merges with) the first letter of the root, leaving behind a dagesh (doubling dot) as the only visible trace. יִקָּטֵל has a doubled ק where the assimilated Nun used to be.', no:'The Nun assimilates into the first root letter, leaving a doubling dagesh. This is why Niphal Imperfect forms show a doubled letter rather than a visible Nun.'},
    {q:'What does נִמְצָא (nimtsa) mean, and where is it significant?', ch:'נִמְצָא', opts:['He was lost — opposite of finding','He was found — used in Jeremiah 29:13 of God being found by seekers','He was forgotten','He was hidden from view'], ans:1, ok:'Correct! נִמְצָא = he was found (Niphal Perfect 3ms of מצא). Jeremiah 29:13: "You will seek me and find me when you seek me with all your heart." The passive form suggests God\'s accessibility — he allows himself to be found.', no:'נִמְצָא = he was found. Used of God being found by sincere seekers in Jeremiah 29:13.'},
    {q:'What is the theological significance of וְנִבְרְכוּ (venivrekhu) in Genesis 12:3?', ch:'וְנִבְרְכוּ', opts:['It shows Abraham blessing himself','It is the foundation of the Abrahamic covenant\'s global scope — all nations as passive recipients of blessing through Abraham, quoted by Paul in Galatians 3:8','It refers only to Abraham\'s immediate family','It has no New Testament connection'], ans:1, ok:'Correct! וְנִבְרְכוּ ("they will be blessed") extends covenant blessing to "all the families of the earth" as passive recipients through Abraham. Paul quotes this exact verse in Galatians 3:8 to explain that the gospel reaching the Gentiles was promised from the very beginning.', no:'וְנִבְרְכוּ = "they will be blessed" — the global scope of the Abrahamic covenant. Paul quotes this in Galatians 3:8 regarding the gospel to the Gentiles.'},
  ],

  completionNote: 'You have learned the Niphal stem — Hebrew\'s passive/reflexive voice. You can now identify and translate verbs describing what is done TO God\'s people, not just by them — the grammar of grace.',
  nextDay: 'Day 2: Greek Aorist Tense →',
};
