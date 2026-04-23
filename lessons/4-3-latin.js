/* ═══════════════════════════════════════
   LESSON: Week 4 · Day 3 · Ecclesiastical Latin III
   Latin Verbs — Present Tense & esse (to be)
   ═══════════════════════════════════════ */

LESSONS['4-3-Latin'] = {
  color:    'gold',
  subtitle: 'Week 4 · Day 3 · Ecclesiastical Latin III',
  title:    'Latin Verbs — The Present Tense',
  intro:    'You have learned Latin nouns. Now the verb — the engine of the sentence. Latin verbs are beautifully systematic. Once you learn the four conjugation patterns and the verb esse (to be), you can work with the vast majority of verbs in the Vulgate and the Church Fathers.',
  sections: ['Introduction','Verb Basics','First Conjugation','The Verb esse','First Sentences','Quiz','Complete'],

  beforeYouBegin: `
    <p class="lesson-p"><strong>Latin verbs encode person and number in their endings</strong> — just like Greek and Hebrew. A single Latin verb is a complete sentence. <em>Amo</em> = I love. <em>Credimus</em> = we believe. <em>Venit</em> = he comes. No pronoun needed.</p>
    <div class="box box-fact"><strong>📜 The four conjugations:</strong> Latin verbs are grouped into four conjugations based on their stem vowel: 1st (-āre), 2nd (-ēre), 3rd (-ere), 4th (-īre). Today you master the 1st conjugation — the largest group, including amare (to love), orare (to pray), and laudare (to praise) — the vocabulary of worship.</div>
    <div class="box box-tip"><strong>💡 The key ending to learn first:</strong> The 1st conjugation present endings are: -o, -as, -at, -amus, -atis, -ant. Six endings. Once memorised, you can conjugate any 1st conjugation verb immediately.</div>`,

  alphabetIntro: 'The Latin 1st conjugation Present Active paradigm — using amare (to love) as the model verb.',
  alphabetNotes: `<div class="box box-note"><strong>The stem:</strong> Remove -are from the infinitive to get the stem. amare → am-. Then add the endings: am + o = amo (I love). am + as = amas (you love). The stem stays constant; the endings change.</div>`,

  alphabet: [
    {ch:'amo',    name:'1st sing.',  sound:'I love',       n:1,  t:true},
    {ch:'amas',   name:'2nd sing.',  sound:'You love',     n:2,  t:true},
    {ch:'amat',   name:'3rd sing.',  sound:'He/She loves', n:3,  t:true},
    {ch:'amamus', name:'1st plural', sound:'We love',      n:4,  t:true},
    {ch:'amatis', name:'2nd plural', sound:'You all love', n:5,  t:true},
    {ch:'amant',  name:'3rd plural', sound:'They love',    n:6,  t:true},
    {ch:'sum',    name:'I am',       sound:'esse: sum',    n:7,  t:true},
    {ch:'es',     name:'You are',    sound:'esse: es',     n:8,  t:true},
    {ch:'est',    name:'He/She is',  sound:'esse: est',    n:9,  t:true},
    {ch:'sumus',  name:'We are',     sound:'esse: sumus',  n:10, t:true},
  ],

  focusLetters: [
    {ch:'amo',   name:'I love',        trans:'1st sing. pres.', desc:'Stem am- + ending -o',     ex:'Deum amo — I love God'},
    {ch:'amat',  name:'He/She loves',  trans:'3rd sing. pres.', desc:'Stem am- + ending -at',    ex:'Deus amat mundum — God loves the world'},
    {ch:'amant', name:'They love',     trans:'3rd plural pres.',desc:'Stem am- + ending -ant',   ex:'Discipuli amant Dominum — disciples love the Lord'},
    {ch:'sum',   name:'I am',          trans:'esse 1st sing.',  desc:'Most irregular Latin verb', ex:'Credo, ergo sum — I believe, therefore I am'},
    {ch:'est',   name:'He/She/It is',  trans:'esse 3rd sing.',  desc:'Most common form of esse', ex:'Deus est — God is / God exists'},
  ],

  deepDive: `
    <div class="lesson-h3">The Four Conjugations — Overview</div>
    <p class="lesson-p">Latin verbs are classified by the vowel at the end of their stem:</p>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;overflow:hidden;margin:1rem 0 1.5rem;">
      <table style="width:100%;border-collapse:collapse;font-size:.9rem;">
        <thead><tr style="background:var(--bg3);"><th style="padding:.5rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Conj.</th><th style="padding:.5rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Infinitive ending</th><th style="padding:.5rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Examples</th></tr></thead>
        <tbody>
          <tr><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text);font-weight:600;">1st</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">-āre</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">amare (love), orare (pray), laudare (praise), vocare (call)</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">2nd</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);font-style:italic;">-ēre</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">habere (have), videre (see), manere (remain)</td></tr>
          <tr><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">3rd</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);font-style:italic;">-ere</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">credere (believe), mittere (send), dicere (say)</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.45rem .8rem;color:var(--text-mid);">4th</td><td style="padding:.45rem .8rem;color:var(--text-mid);font-style:italic;">-īre</td><td style="padding:.45rem .8rem;color:var(--text-mid);">venire (come), audire (hear), scire (know)</td></tr>
        </tbody>
      </table>
    </div>

    <div class="lesson-h3">First Conjugation — Full Present Paradigm</div>
    <p class="lesson-p">Using <em>orare</em> (to pray) — one of the most important verbs for the Church:</p>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;overflow:hidden;margin:1rem 0 1.5rem;">
      <table style="width:100%;border-collapse:collapse;font-size:.9rem;">
        <thead><tr style="background:var(--bg3);"><th style="padding:.5rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Person</th><th style="padding:.5rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Ending</th><th style="padding:.5rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">amo (love)</th><th style="padding:.5rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">oro (pray)</th><th style="padding:.5rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Translation</th></tr></thead>
        <tbody>
          <tr><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">1st sing.</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">-o</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">amo</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">oro</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">I love / I pray</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">2nd sing.</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">-as</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">amas</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">oras</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">You love / pray</td></tr>
          <tr><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">3rd sing.</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">-at</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">amat</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">orat</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">He/She loves / prays</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">1st plural</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">-amus</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">amamus</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">oramus</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">We love / pray</td></tr>
          <tr><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">2nd plural</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">-atis</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">amatis</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">oratis</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">You all love / pray</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.45rem .8rem;color:var(--text-mid);">3rd plural</td><td style="padding:.45rem .8rem;color:var(--gold);font-style:italic;">-ant</td><td style="padding:.45rem .8rem;color:var(--gold);font-style:italic;">amant</td><td style="padding:.45rem .8rem;color:var(--gold);font-style:italic;">orant</td><td style="padding:.45rem .8rem;color:var(--text-mid);">They love / pray</td></tr>
        </tbody>
      </table>
    </div>

    <div class="lesson-h3">The Verb esse — To Be</div>
    <p class="lesson-p">Esse (to be) is the most irregular Latin verb — like εἰμί in Greek and הָיָה in Hebrew. Its forms must be memorised separately:</p>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;overflow:hidden;margin:1rem 0 1.5rem;">
      <table style="width:100%;border-collapse:collapse;font-size:.9rem;">
        <thead><tr style="background:var(--bg3);"><th style="padding:.5rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Person</th><th style="padding:.5rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Form</th><th style="padding:.5rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Translation</th></tr></thead>
        <tbody>
          <tr><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">1st sing.</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">sum</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">I am</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">2nd sing.</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">es</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">You are</td></tr>
          <tr><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">3rd sing.</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">est</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">He/She/It is</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">1st plural</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">sumus</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">We are</td></tr>
          <tr><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">2nd plural</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">estis</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">You all are</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.45rem .8rem;color:var(--text-mid);">3rd plural</td><td style="padding:.45rem .8rem;color:var(--gold);font-style:italic;">sunt</td><td style="padding:.45rem .8rem;color:var(--text-mid);">They are</td></tr>
        </tbody>
      </table>
    </div>
    <div class="box box-tip"><strong>💡 sum es est sumus estis sunt.</strong> Say this sequence aloud 10 times until it flows automatically. These six forms unlock hundreds of Latin theological sentences.</div>`,

  writing: [
    {ch:'Credo',        name:'I believe (credo)',      steps:['From credere (3rd conj.) — stem cred- + -o','Pronunciation: KRAY-do','The first word of the Nicene Creed — I believe','Write Credo 15 times. This word opens the confession of faith of the whole Church.']},
    {ch:'Deus est',     name:'God is (Deus est)',      steps:['Deus = nominative (subject) · est = 3rd sing. of esse','Pronunciation: DAY-oos est','A complete sentence — two words, one of the most profound statements possible','Write Deus est 10 times. Add: Deus amor est (God is love — 1 John 4:8 Vulgate)']},
    {ch:'oramus',       name:'We pray (oramus)',       steps:['From orare (1st conj.) — stem or- + -amus','Pronunciation: o-RA-moos','1st person plural — the corporate prayer of the Church','Write the full paradigm: oro oras orat oramus oratis orant']},
    {ch:'laudamus te',  name:'We praise you',          steps:['laudamus = we praise (1st conj.) · te = you (accusative pronoun)','From the Te Deum: "Te Deum laudamus" — We praise you, God','Pronunciation: lau-DA-moos teh','Write Te Deum laudamus 10 times.']},
    {ch:'venit',        name:'He comes (venit)',        steps:['From venire (4th conj.) — stem ven- + -it','Pronunciation: VAY-nit','"Et Verbum caro factum est et habitavit in nobis" — And the Word became flesh (John 1:14)','Write venit 10 times. Then: Veni, Sancte Spiritus — Come, Holy Spirit']},
  ],

  vocab: [
    {ch:'amo, amare',    trans:'A-mo',    meaning:'To love',          note:'1st conj. — Deus amat mundum'},
    {ch:'oro, orare',    trans:'O-ro',    meaning:'To pray',          note:'1st conj. — oramus (we pray)'},
    {ch:'laudo, laudare',trans:'LAU-do',  meaning:'To praise',        note:'1st conj. — Te Deum laudamus'},
    {ch:'credo, credere',trans:'KRAY-do', meaning:'To believe',       note:'3rd conj. — Credo in unum Deum'},
    {ch:'voco, vocare',  trans:'VO-ko',   meaning:'To call',          note:'1st conj. — vocatus (called)'},
    {ch:'sum, esse',     trans:'sum',     meaning:'To be',            note:'Irregular — est (he is)'},
    {ch:'venit',         trans:'VAY-nit', meaning:'He/She comes',     note:'4th conj. venire — Et Verbum caro factum est'},
  ],

  scriptureRef: 'Nicene Creed',
  scripture: {
    orig:  'Credo in unum Deum, Patrem omnipotentem, factorem caeli et terrae, visibilium omnium et invisibilium.',
    trans: 'KRAY-do in OO-num DAY-um, PAT-rem om-ni-PO-ten-tem, FAK-to-rem CHEH-lee et TER-reh, vi-SI-bi-lee-um OM-nee-um et in-vi-SI-bi-lee-um.',
    eng:   '"I believe in one God, the Father Almighty, maker of heaven and earth, and of all things visible and invisible."',
  },
  scriptureNote: 'Find the verb: Credo (I believe — 1st sing. of credere, 3rd conj.). Find the genitives: caeli (of heaven), terrae (of earth), omnium (of all things). The rest are accusatives in apposition to Deum — all describing "one God."',
  scriptureTip: '<strong>💡 Credo:</strong> This single verb — I believe — is the entire Creed in one word. Everything that follows is the content of that belief. When you say Credo you are not reporting information — you are committing yourself. The Latin captures this active, personal quality that the English "I believe" sometimes loses.',

  quiz: [
    {q:'What are the six 1st conjugation present active endings in order?', ch:'', opts:['-o -es -et -emus -etis -ent','-o -as -at -amus -atis -ant','-m -s -t -mus -tis -nt','-o -is -it -imus -itis -iunt'], ans:1, ok:'Correct! -o -as -at -amus -atis -ant. These six endings apply to all 1st conjugation (-are) verbs. amare: amo amas amat amamus amatis amant.', no:'-o -as -at -amus -atis -ant. These are the 1st conjugation present active endings.'},
    {q:'What is the 1st person plural of esse (to be)?', ch:'', opts:['estis','sunt','sumus','es'], ans:2, ok:'Correct! sumus = we are. The esse paradigm: sum es est sumus estis sunt. Sumus is 1st plural — the corporate "we are."', no:'sumus = we are. Esse paradigm: sum es est sumus estis sunt.'},
    {q:'How do you form the stem of a 1st conjugation verb?', ch:'', opts:['Take the infinitive as-is','Add -are to the present tense','Remove -are from the infinitive','Take the first syllable only'], ans:2, ok:'Correct! Remove -are from the infinitive to get the stem. amare → am- · orare → or- · laudare → laud-. Then add the personal endings to the stem.', no:'Remove -are from the infinitive. amare → am- (stem). Then add endings: amo, amas, amat...'},
    {q:'What does "Deus amor est" mean — and where does it appear?', ch:'Deus amor est', opts:['"God has love" — implies God possesses love as a quality','"God is love" — love describes God\'s essential nature (1 John 4:8 Vulgate)','"God loves us" — a statement of action','"The love of God" — a genitive phrase'], ans:1, ok:'Correct! Deus amor est = God is love. This is 1 John 4:8 in the Vulgate. amor is a predicate nominative — it describes God\'s essential being, not a quality he possesses.', no:'Deus amor est = God is love (1 John 4:8 Vulgate). amor as predicate nominative = describes God\'s nature.'},
    {q:'In "Credo in unum Deum" — what conjugation and form is Credo?', ch:'Credo', opts:['1st conjugation, 3rd singular — he believes','3rd conjugation, 1st singular — I believe','2nd conjugation, 1st plural — we believe','4th conjugation, imperative — believe!'], ans:1, ok:'Correct! Credo is 3rd conjugation (credere), 1st person singular — "I believe." The -o ending marks 1st person singular across all conjugations. Credo = I believe.', no:'Credo = 3rd conjugation (credere), 1st person singular. The -o ending = "I." I believe.'},
  ],

  completionNote: 'You have learned the Latin present tense and the verb esse. You can now read and conjugate the key verbs of the Vulgate, the Creed, and the Church Fathers.',
  nextDay: 'Day 4: Hebrew Construct Chains →',
};
