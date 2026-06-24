/* ═══════════════════════════════════════
   LESSON: Week 6 · Day 3 · Ecclesiastical Latin V
   Latin Imperfect & Future Tenses
   ═══════════════════════════════════════ */

LESSONS['6-3-Latin'] = {
  color:    'gold',
  subtitle: 'Week 6 · Day 3 · Ecclesiastical Latin V',
  title:    'Latin Imperfect & Future Tenses',
  intro:    'You know the Latin present tense. Today you add two more: the Imperfect (ongoing past action — "was loving") and the Future (action yet to come — "will love"). With these three tenses you can read narrative, prophecy, and promise across the whole Vulgate.',
  sections: ['Introduction','The Imperfect','The Future','Key Verbs','First Sentences','Quiz','Complete'],

  beforeYouBegin: `
    <p class="lesson-p"><strong>Latin tenses are built systematically from the present stem</strong> — once you know amo, amas, amat (present), the imperfect and future follow predictable patterns of their own. Today's two tenses complete your basic toolkit for narrative Latin.</p>
    <div class="box box-fact"><strong>📜 Why these tenses matter for the Vulgate:</strong> The Imperfect describes ongoing past scenes — "Maria... cogitabat" (Mary was pondering, Luke 2:19). The Future appears throughout prophecy and covenant promise — "non derelinquet" (he will not abandon, Psalm 16, Vulgate numbering 15:10, quoted in Acts 2:27). Both tenses are essential for reading biblical narrative and prophetic literature.</div>
    <div class="box box-tip"><strong>💡 The pattern to learn:</strong> Imperfect 1st conjugation: stem + -ba- + personal endings (amabam, amabas, amabat...). Future 1st conjugation: stem + -bi- (mostly) + endings (amabo, amabis, amabit...). Notice both use a "b" — a helpful memory anchor.</div>`,

  alphabetIntro: 'The Latin Imperfect and Future paradigms — 1st conjugation, using amare (to love).',
  alphabetNotes: `<div class="box box-note"><strong>Quick contrast:</strong> Present: amo (I love, now). Imperfect: amabam (I was loving / I used to love, continuous past). Future: amabo (I will love).</div>`,

  alphabet: [
    {ch:'amabam',  name:'Imperf. 1st sing.', sound:'I was loving',      n:1, t:true},
    {ch:'amabas',  name:'Imperf. 2nd sing.', sound:'You were loving',  n:2, t:true},
    {ch:'amabat',  name:'Imperf. 3rd sing.', sound:'He/She was loving',n:3, t:true},
    {ch:'amabamus',name:'Imperf. 1st plural',sound:'We were loving',   n:4, t:true},
    {ch:'amabant', name:'Imperf. 3rd plural',sound:'They were loving', n:5, t:true},
    {ch:'amabo',   name:'Future 1st sing.',  sound:'I will love',      n:6, t:true},
    {ch:'amabis',  name:'Future 2nd sing.',  sound:'You will love',    n:7, t:true},
    {ch:'amabit',  name:'Future 3rd sing.',  sound:'He/She will love', n:8, t:true},
    {ch:'amabimus',name:'Future 1st plural', sound:'We will love',     n:9, t:true},
    {ch:'amabunt', name:'Future 3rd plural', sound:'They will love',   n:10,t:true},
  ],

  focusLetters: [
    {ch:'-bam',  name:'Imperfect 1st sing.', trans:'I was [verb]ing',  desc:'Stem + ba + m',         ex:'amabam — I was loving'},
    {ch:'-bat',  name:'Imperfect 3rd sing.', trans:'He/She was [verb]ing',desc:'Stem + ba + t',      ex:'cogitabat — she was pondering (Luke 2:19)'},
    {ch:'-bo',   name:'Future 1st sing.',    trans:'I will [verb]',     desc:'Stem + b + o',          ex:'amabo — I will love'},
    {ch:'-bit',  name:'Future 3rd sing.',    trans:'He/She will [verb]',desc:'Stem + bi + t',         ex:'derelinquet — he will abandon (irregular but same -b- pattern in spirit)'},
    {ch:'erat / erit', name:'esse: was / will be', trans:'Irregular esse forms', desc:'esse does not follow -ba-/-bi- exactly', ex:'erat = he was (imperfect) · erit = he will be (future)'},
  ],

  deepDive: `
    <div class="lesson-h3">The Imperfect — Ongoing Past Action</div>
    <p class="lesson-p">The Imperfect describes an action that <em>was happening</em>, repeated, or habitual in the past — not a single completed event. It is formed with the stem + <strong>-ba-</strong> + personal endings:</p>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;overflow:hidden;margin:1.25rem 0;">
      <table style="width:100%;border-collapse:collapse;font-size:.9rem;">
        <thead><tr style="background:var(--bg3);"><th style="padding:.5rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Person</th><th style="padding:.5rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">amare (love)</th><th style="padding:.5rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Translation</th></tr></thead>
        <tbody>
          <tr><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">1st sing.</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">amabam</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">I was loving / used to love</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">2nd sing.</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">amabas</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">You were loving</td></tr>
          <tr><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">3rd sing.</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">amabat</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">He/She was loving</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">1st plural</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">amabamus</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">We were loving</td></tr>
          <tr><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">2nd plural</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">amabatis</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">You all were loving</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.45rem .8rem;color:var(--text-mid);">3rd plural</td><td style="padding:.45rem .8rem;color:var(--gold);font-style:italic;">amabant</td><td style="padding:.45rem .8rem;color:var(--text-mid);">They were loving</td></tr>
        </tbody>
      </table>
    </div>

    <div class="lesson-h3">The Future — Action Yet to Come</div>
    <p class="lesson-p">The Future is formed with the stem + <strong>-bi-</strong> (in most forms) + personal endings:</p>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;overflow:hidden;margin:1.25rem 0;">
      <table style="width:100%;border-collapse:collapse;font-size:.9rem;">
        <thead><tr style="background:var(--bg3);"><th style="padding:.5rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Person</th><th style="padding:.5rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">amare (love)</th><th style="padding:.5rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Translation</th></tr></thead>
        <tbody>
          <tr><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">1st sing.</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">amabo</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">I will love</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">2nd sing.</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">amabis</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">You will love</td></tr>
          <tr><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">3rd sing.</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">amabit</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">He/She will love</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">1st plural</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">amabimus</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">We will love</td></tr>
          <tr><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">2nd plural</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">amabitis</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">You all will love</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.45rem .8rem;color:var(--text-mid);">3rd plural</td><td style="padding:.45rem .8rem;color:var(--gold);font-style:italic;">amabunt</td><td style="padding:.45rem .8rem;color:var(--text-mid);">They will love</td></tr>
        </tbody>
      </table>
    </div>

    <div class="lesson-h3">The Irregular esse — Imperfect and Future</div>
    <p class="lesson-p">As always, esse (to be) does not follow the regular pattern. You already know <strong>erat</strong> (he/she/it was — imperfect, from John 1:1 "In principio erat Verbum"). The future of esse is <strong>erit</strong> (he/she/it will be). Full imperfect: eram, eras, erat, eramus, eratis, erant. Full future: ero, eris, erit, erimus, eritis, erunt.</p>
    <div class="box box-fact"><strong>Erit in prophecy:</strong> "Et vocabitur nomen eius... erit magnum imperium eius" — "his name will be called... his dominion will be great" (Isaiah 9:6–7, Vulgate). The future tense of esse carries the weight of messianic promise throughout the prophetic books.</div>
    <div class="box box-tip"><strong>💡 Memory:</strong> Imperfect marker = -ba- (think "imperfect" has a B... sort of). Future marker = -bi- (mostly). Both use "b" as the tense formative — a useful anchor for memory.</div>`,

  writing: [
    {ch:'cogitabat',     name:'She was pondering (Luke 2:19)', steps:['From cogitare (1st conj.) — to think/ponder/consider','cogita- (stem) + -bat (imperfect 3rd sing.)','Pronunciation: ko-gi-TA-bat','"Maria autem conservabat omnia verba haec, conferens in corde suo" — Mary kept all these things, pondering them in her heart','Write it 10 times.']},
    {ch:'amabo',          name:'I will love (future)',          steps:['ama- (stem) + -bo (future 1st sing.)','Pronunciation: a-MA-bo','Write the full future paradigm: amabo amabis amabit amabimus amabitis amabunt','Say each form aloud with its translation.']},
    {ch:'erat',           name:'He/it was (esse, imperfect)',   steps:['Irregular imperfect of esse','Already familiar from John 1:1: In principio erat Verbum','Pronunciation: EH-rat','Write the full imperfect paradigm: eram eras erat eramus eratis erant']},
    {ch:'erit',           name:'He/it will be (esse, future)',  steps:['Irregular future of esse','Pronunciation: EH-rit','Used throughout messianic prophecy in the Vulgate','Write the full future paradigm: ero eris erit erimus eritis erunt']},
    {ch:'non derelinquet', name:'He will not abandon (Ps 16/15)', steps:['non = not · derelinquet = future 3rd sing. of derelinquere (to abandon)','Pronunciation: non deh-reh-LIN-kwet','Psalm 15:10 (Vulgate numbering) — quoted in Acts 2:27 of Christ\'s resurrection','Write it 5 times. A future-tense promise fulfilled in the resurrection.']},
  ],

  vocab: [
    {ch:'cogito, cogitare', trans:'KO-gi-to',  meaning:'To think / ponder',     note:'1st conj. — Mary "pondered" in Luke 2:19'},
    {ch:'eram, eras, erat', trans:'EH-ram',    meaning:'I/you/he was (esse)',    note:'Imperfect of esse — irregular'},
    {ch:'ero, eris, erit',  trans:'EH-ro',     meaning:'I/you/he will be (esse)',note:'Future of esse — irregular'},
    {ch:'derelinquo, -ere', trans:'deh-reh-LIN-kwo',meaning:'To abandon/forsake',note:'3rd conj. — Psalm 15/16:10'},
    {ch:'veniet',           trans:'VEH-nee-et',meaning:'He will come',          note:'Future of venire — messianic expectation'},
    {ch:'regnabit',         trans:'reg-NA-bit',meaning:'He will reign',         note:'Future of regnare — Luke 1:33 "regnabit in domo Iacob"'},
    {ch:'manebat',          trans:'ma-NEH-bat',meaning:'He/she/it remained',    note:'Imperfect of manere — to remain/abide'},
  ],

  scriptureRef: 'Luke 1:32–33 (Vulgate)',
  scripture: {
    orig:  'Hic erit magnus, et Filius Altissimi vocabitur... et regnabit in domo Iacob in aeternum, et regni eius non erit finis.',
    trans: 'Hik EH-rit MAG-noos, et FEE-lee-oos al-TIS-si-mee vo-ka-BEE-toor... et reg-NA-bit in DO-mo YA-kob in eh-TER-noom, et REG-nee EH-yoos non EH-rit FEE-nis.',
    eng:   '"He will be great, and will be called the Son of the Most High... and he will reign over the house of Jacob forever, and of his kingdom there will be no end." — Luke 1:32–33 (Vulgate)',
  },
  scriptureNote: 'Identify all the future tense verbs: erit (will be) · vocabitur (will be called — future passive) · regnabit (will reign) · erit (will be, again, at the end). Four futures in one prophetic announcement — Gabriel\'s message to Mary is entirely future tense.',
  scriptureTip: '<strong>💡 The grammar of promise:</strong> The angel Gabriel\'s announcement to Mary is built almost entirely from future tense verbs — erit, vocabitur, regnabit, erit. This is the grammar of covenant promise: not yet, but certain. The Latin future tense captures the same prophetic certainty as the Hebrew construct chains and Greek aorists you have already studied — different grammar, same confident hope.',

  quiz: [
    {q:'What does the Latin Imperfect tense express?', ch:'cogitabat', opts:['A single completed action in the past','Ongoing, repeated, or habitual action in the past','Action that will happen in the future','Present, ongoing action'], ans:1, ok:'Correct! The Imperfect expresses ongoing, repeated, or habitual past action. cogitabat = "she was pondering / kept pondering" — an extended, continuous mental action, not a single completed event.', no:'Imperfect = ongoing/repeated/habitual PAST action. cogitabat = "she was pondering" — continuous, not a single event.'},
    {q:'What is the tense marker for the Latin Imperfect (1st conjugation)?', ch:'amabam', opts:['-avi-','-ba-','-bi-','-eri-'], ans:1, ok:'Correct! -ba- is the Imperfect marker. amabam = ama- (stem) + -ba- (imperfect) + -m (1st sing. ending) = "I was loving."', no:'-ba- = Imperfect marker. amabam = ama + ba + m. Contrast with Future -bi-.'},
    {q:'What is erit — and where does it commonly appear in Scripture?', ch:'erit', opts:['"He was" — imperfect of esse, used in narrative','"He will be" — future of esse, used throughout messianic prophecy','"He is" — present of esse','"Let him be" — subjunctive of esse'], ans:1, ok:'Correct! erit = "he/she/it will be" — the future of esse. It appears throughout messianic prophecy: Luke 1:32–33 uses it twice describing the coming reign of Christ. The future tense carries the weight of covenant promise.', no:'erit = "he will be" — future of esse. Used throughout prophecy, e.g. Luke 1:32-33 about Christ\'s eternal reign.'},
    {q:'In "Maria... cogitabat" (Mary was pondering, Luke 2:19), why is the imperfect tense fitting?', ch:'cogitabat', opts:['Because Mary only pondered once, briefly','Because the imperfect captures an extended, continuous mental activity — Mary kept pondering, not a single momentary thought','Because Latin requires the imperfect after the name Maria','Because the imperfect is used only for women in Latin grammar'], ans:1, ok:'Correct! The imperfect aspect (ongoing, continuous) perfectly captures Mary\'s extended contemplation — she did not just think once, she kept pondering these things in her heart. The grammar matches the emotional and spiritual reality of sustained reflection.', no:'The imperfect captures ongoing, continuous action — Mary KEPT pondering, an extended contemplative state, not a single momentary thought.'},
    {q:'What does "non derelinquet" mean — and where is it quoted in the New Testament?', ch:'non derelinquet', opts:['"He will not remember" — Psalm 103','"He will not abandon" — Psalm 15/16:10, quoted in Acts 2:27 regarding Christ\'s resurrection','"He will not return" — a statement of permanent departure','"He will not forgive" — a statement of judgment'], ans:1, ok:'Correct! non derelinquet = "he will not abandon/forsake" — Psalm 15:10 (Vulgate numbering, Psalm 16:10 in English Bibles). Peter quotes this verse in Acts 2:27 to argue that David prophesied Christ\'s resurrection — God would not abandon his Holy One to decay.', no:'non derelinquet = "he will not abandon." Psalm 15/16:10 — quoted by Peter in Acts 2:27 as a prophecy of Christ\'s resurrection.'},
  ],

  completionNote: 'You have learned the Latin Imperfect and Future tenses. You can now read ongoing narrative scenes and follow the grammar of prophetic promise throughout the Vulgate.',
  nextDay: 'Day 4: Hebrew Piel Stem →',
};
