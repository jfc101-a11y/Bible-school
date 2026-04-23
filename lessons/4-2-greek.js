/* ═══════════════════════════════════════
   LESSON: Week 4 · Day 2 · Koine Greek VI
   The Greek Verb — Present Active Indicative & εἰμί
   ═══════════════════════════════════════ */

LESSONS['4-2-Greek'] = {
  color:    'blue',
  subtitle: 'Week 4 · Day 2 · Koine Greek VI',
  title:    'The Greek Verb — Present Active',
  intro:    'You have learned Greek nouns and the case system. Now the verb. Greek verbs are richly expressive — a single verb can communicate person, number, tense, voice, and mood simultaneously. Today you learn the most fundamental form: the Present Active Indicative, plus the most important verb in the New Testament — εἰμί (I am).',
  sections: ['Introduction','The Verb System','Present Active','The Verb εἰμί','First Sentences','Quiz','Complete'],

  beforeYouBegin: `
    <p class="lesson-p"><strong>Greek verbs encode everything.</strong> Where English says "he loves" — a pronoun plus a verb — Greek says ἀγαπᾷ — one word that contains the person (he), the action (love), the tense (present), the voice (active), and the mood (indicative). This compactness is why Greek can express theological ideas with extraordinary precision.</p>
    <div class="box box-fact"><strong>📜 The Present tense in John:</strong> John's Gospel is famous for its present tense theological declarations. "ἐγώ εἰμι ἡ ὁδός" — "I AM the way." The present εἰμί is not merely "I am [right now]" — it echoes the divine name revealed in Exodus 3:14 (ἐγώ εἰμι ὁ ὤν — "I AM the one who is"). Every "I am" statement by Jesus carries this weight.</div>
    <div class="box box-tip"><strong>💡 The approach:</strong> Learn the ending pattern first. Once you know the six endings of the Present Active Indicative, you can conjugate any regular Greek verb in the present tense — and there are hundreds of them.</div>`,

  alphabetIntro: 'The Present Active Indicative paradigm — six forms covering all persons and numbers.',
  alphabetNotes: `<div class="box box-note"><strong>The pattern:</strong> Greek verb endings for the Present Active Indicative are: -ω, -εις, -ει, -ομεν, -ετε, -ουσι(ν). These six endings are the foundation of Greek verbal grammar. Learn them perfectly.</div>`,

  alphabet: [
    {ch:'-ω',      name:'1st sing.',  sound:'I [verb]',        n:1, t:true},
    {ch:'-εις',    name:'2nd sing.',  sound:'You [verb]',      n:2, t:true},
    {ch:'-ει',     name:'3rd sing.',  sound:'He/She/It [verb]',n:3, t:true},
    {ch:'-ομεν',   name:'1st plural', sound:'We [verb]',       n:4, t:true},
    {ch:'-ετε',    name:'2nd plural', sound:'You all [verb]',  n:5, t:true},
    {ch:'-ουσι(ν)',name:'3rd plural', sound:'They [verb]',     n:6, t:true},
    {ch:'εἰμί',   name:'I am',       sound:'eimi',            n:7, t:true},
    {ch:'εἶ',     name:'You are',    sound:'ei',              n:8, t:true},
    {ch:'ἐστίν',  name:'He/She is',  sound:'estin',           n:9, t:true},
    {ch:'ἐσμέν',  name:'We are',     sound:'esmen',           n:10,t:true},
  ],

  focusLetters: [
    {ch:'-ω',    name:'1st singular',  trans:'I love (ἀγαπῶ)', desc:'First person sing. ending',       ex:'πιστεύω — I believe'},
    {ch:'-εις',  name:'2nd singular',  trans:'You love',       desc:'Second person sing. ending',      ex:'πιστεύεις — you believe'},
    {ch:'-ει',   name:'3rd singular',  trans:'He/She loves',   desc:'Third person sing. ending',       ex:'πιστεύει — he/she believes'},
    {ch:'-ομεν', name:'1st plural',    trans:'We love',        desc:'First person plural ending',      ex:'πιστεύομεν — we believe'},
    {ch:'εἰμί',  name:'I am',         trans:'I am (εἰμί)',    desc:'Most important Greek verb',       ex:'ἐγώ εἰμι — I AM (divine echo)'},
  ],

  deepDive: `
    <div class="lesson-h3">The Six Endings — Learn These Perfectly</div>
    <p class="lesson-p">The Present Active Indicative endings are attached to the verb stem. Using λύω (luo = I loose/release) as the model verb:</p>

    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;overflow:hidden;margin:1.25rem 0;">
      <table style="width:100%;border-collapse:collapse;font-size:.9rem;">
        <thead><tr style="background:var(--bg3);"><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Person</th><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Ending</th><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">λύω (loose)</th><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">πιστεύω (believe)</th><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Translation</th></tr></thead>
        <tbody>
          <tr><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">1st sing.</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.2rem;color:var(--blue);">-ω</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.1rem;color:var(--blue);">λύω</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.1rem;color:var(--blue);">πιστεύω</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">I loose / I believe</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">2nd sing.</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.2rem;color:var(--blue);">-εις</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.1rem;color:var(--blue);">λύεις</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.1rem;color:var(--blue);">πιστεύεις</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">You loose / You believe</td></tr>
          <tr><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">3rd sing.</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.2rem;color:var(--blue);">-ει</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.1rem;color:var(--blue);">λύει</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.1rem;color:var(--blue);">πιστεύει</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">He/She looses / believes</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">1st plural</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.2rem;color:var(--blue);">-ομεν</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.1rem;color:var(--blue);">λύομεν</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.1rem;color:var(--blue);">πιστεύομεν</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">We loose / We believe</td></tr>
          <tr><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">2nd plural</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.2rem;color:var(--blue);">-ετε</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.1rem;color:var(--blue);">λύετε</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.1rem;color:var(--blue);">πιστεύετε</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">You all loose / believe</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.5rem .8rem;color:var(--text-mid);">3rd plural</td><td style="padding:.5rem .8rem;font-family:var(--greek);font-size:1.2rem;color:var(--blue);">-ουσι(ν)</td><td style="padding:.5rem .8rem;font-family:var(--greek);font-size:1.1rem;color:var(--blue);">λύουσιν</td><td style="padding:.5rem .8rem;font-family:var(--greek);font-size:1.1rem;color:var(--blue);">πιστεύουσιν</td><td style="padding:.5rem .8rem;color:var(--text-mid);">They loose / They believe</td></tr>
        </tbody>
      </table>
    </div>

    <div class="lesson-h3">The Verb εἰμί — I Am</div>
    <p class="lesson-p">εἰμί (I am) is the most important and most irregular Greek verb. It has no Active voice — it simply links subject to predicate. Its forms must be memorised separately:</p>

    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;overflow:hidden;margin:1.25rem 0;">
      <table style="width:100%;border-collapse:collapse;font-size:.9rem;">
        <thead><tr style="background:var(--bg3);"><th style="padding:.5rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Person</th><th style="padding:.5rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Form</th><th style="padding:.5rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Translation</th></tr></thead>
        <tbody>
          <tr><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">1st sing.</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.3rem;color:var(--blue);">εἰμί</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">I am</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">2nd sing.</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.3rem;color:var(--blue);">εἶ</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">You are</td></tr>
          <tr><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">3rd sing.</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.3rem;color:var(--blue);">ἐστίν</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">He/She/It is</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">1st plural</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.3rem;color:var(--blue);">ἐσμέν</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">We are</td></tr>
          <tr><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">2nd plural</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);font-family:var(--greek);font-size:1.3rem;color:var(--blue);">ἐστέ</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">You all are</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.45rem .8rem;color:var(--text-mid);">3rd plural</td><td style="padding:.45rem .8rem;font-family:var(--greek);font-size:1.3rem;color:var(--blue);">εἰσίν</td><td style="padding:.45rem .8rem;color:var(--text-mid);">They are</td></tr>
        </tbody>
      </table>
    </div>

    <div class="lesson-h3">The "I Am" Sayings of Jesus</div>
    <p class="lesson-p">Jesus uses ἐγώ εἰμι (ego eimi = I AM) seven times in John's Gospel for his great self-declarations. The emphatic pronoun ἐγώ makes the statement even stronger — "I myself AM." This deliberately echoes Exodus 3:14 where God says ἐγώ εἰμι ὁ ὤν (I AM the one who is). John presents Jesus as making a divine claim in every "I am" statement.</p>
    <div class="box box-fact"><strong>The Seven "I AM" Sayings in John:</strong> ἐγώ εἰμι ὁ ἄρτος τῆς ζωῆς (bread of life) · ἐγώ εἰμι τὸ φῶς τοῦ κόσμου (light of the world) · ἐγώ εἰμι ἡ θύρα (the door) · ἐγώ εἰμι ὁ ποιμὴν ὁ καλός (the good shepherd) · ἐγώ εἰμι ἡ ἀνάστασις (the resurrection) · ἐγώ εἰμι ἡ ὁδὸς καὶ ἡ ἀλήθεια καὶ ἡ ζωή (the way, truth, life) · ἐγώ εἰμι ἡ ἄμπελος ἡ ἀληθινή (the true vine). You now know the Greek verb at the centre of each one.</div>
    <div class="box box-tip"><strong>💡 Memory:</strong> Endings: -ω -εις -ει -ομεν -ετε -ουσιν · εἰμί: εἰμί εἶ ἐστίν ἐσμέν ἐστέ εἰσίν. Write each paradigm 3 times from memory.</div>`,

  writing: [
    {ch:'πιστεύω',   name:'I believe (1st sing.)', steps:['Stem: πιστευ- · Ending: -ω (1st person singular)','Pronunciation: pis-TYOO-oh','John 11:27: ναί, κύριε, ἐγὼ πεπίστευκα — Yes, Lord, I have believed','Write the full paradigm: πιστεύω πιστεύεις πιστεύει πιστεύομεν πιστεύετε πιστεύουσιν','Say each form aloud with its translation.']},
    {ch:'ἀγαπῶ',    name:'I love (contract verb)', steps:['ἀγαπάω contracts: ἀγαπά + ω = ἀγαπῶ','This is a contract verb — the stem vowel and ending blend','Pronunciation: a-ga-PO','John 3:16: οὕτως γὰρ ἠγάπησεν ὁ θεὸς τὸν κόσμον — For God so loved the world','Write it 10 times saying "I love."']},
    {ch:'ἐγώ εἰμι', name:'I AM', steps:['ἐγώ = emphatic pronoun "I myself"','εἰμι = 1st person singular of εἰμί','Together: "I AM" — the divine echo of Exodus 3:14','Write ἐγώ εἰμι 15 times. Meditate on the seven I AM sayings as you write.']},
    {ch:'ἐστίν',    name:'He/She/It is (3rd sing.)', steps:['3rd person singular of εἰμί','Pronunciation: es-TIN','Used constantly: θεὸς ἐστίν (God is) · Χριστός ἐστίν (Christ is)','Write it 10 times. Then write: ὁ θεὸς ἀγάπη ἐστίν (God is love — 1 John 4:8)']},
    {ch:'ὁ θεὸς ἀγάπη ἐστίν', name:'God is love (1 John 4:8)', steps:['ὁ θεὸς = the God (nom. subject)','ἀγάπη = love (nom. predicate — no article = qualitative)','ἐστίν = is (3rd sing. of εἰμί)','Write it 5 times. Notice ἀγάπη has no article — like θεός in John 1:1. The quality, not the identity.']},
  ],

  vocab: [
    {ch:'πιστεύω',  trans:'pisteuo',  meaning:'I believe / trust',     note:'John 3:16 — "that everyone who believes"'},
    {ch:'ἀγαπῶ',   trans:'agapo',    meaning:'I love',                 note:'Contract verb — ἀγαπάω'},
    {ch:'λέγω',     trans:'lego',     meaning:'I say / speak',          note:'Very common — λέγει = he says'},
    {ch:'ἔχω',      trans:'echo',     meaning:'I have',                 note:'John 10:10 — "that they may have (ἔχωσιν) life"'},
    {ch:'βλέπω',    trans:'blepo',    meaning:'I see',                  note:'Physical sight — contrast with ὁράω'},
    {ch:'γινώσκω',  trans:'ginosko',  meaning:'I know (by experience)', note:'Intimate knowledge — John 17:3'},
    {ch:'ἐστίν',   trans:'estin',    meaning:'He/She/It is',           note:'3rd sing. of εἰμί — most common form'},
  ],

  scriptureRef: 'John 3:16',
  scripture: {
    orig:  'οὕτως γὰρ ἠγάπησεν ὁ θεὸς τὸν κόσμον, ὥστε τὸν υἱὸν τὸν μονογενῆ ἔδωκεν.',
    trans: 'houtos gar egapesen ho theos ton kosmon, hoste ton huion ton monogene edoken.',
    eng:   '"For God so loved the world, that he gave his only Son." — John 3:16',
  },
  scriptureNote: 'Find the verbs: ἠγάπησεν (he loved — aorist of ἀγαπάω, 3rd sing.) · ἔδωκεν (he gave — aorist, 3rd sing.). Both are aorist (past completed) — you will learn the aorist in Week 6. For now notice: ὁ θεός (subject, nominative) · τὸν κόσμον (object, accusative).',
  scriptureTip: '<strong>💡 John 3:16 parsed:</strong> ὁ θεός (nominative — subject) + ἠγάπησεν (verb — loved) + τὸν κόσμον (accusative — the world). The cases you learned in Week 3 are doing the work here. Cases + verbs together give you the sentence.',

  quiz: [
    {q:'What is the 3rd person singular ending of the Present Active Indicative?', ch:'πιστεύει', opts:['-ω','-ομεν','-ει','-ουσιν'], ans:2, ok:'Correct! -ει is the 3rd person singular ending. πιστεύει = he/she/it believes. λύει = he/she/it looses. ἀγαπᾷ = he/she/it loves (contract verb).', no:'-ει = 3rd person singular. πιστεύει = he/she/it believes.'},
    {q:'What is the 3rd person singular form of εἰμί (to be)?', ch:'', opts:['εἰμί','εἶ','ἐστίν','ἐσμέν'], ans:2, ok:'Correct! ἐστίν is the 3rd person singular of εἰμί — "he/she/it is." ὁ θεὸς ἀγάπη ἐστίν = God is love (1 John 4:8).', no:'ἐστίν = 3rd person singular of εἰμί. "He/she/it is."'},
    {q:'Why is ἐγώ εἰμι (ego eimi) theologically significant in John\'s Gospel?', ch:'ἐγώ εἰμι', opts:['It is simply the Greek for "I am" — no special significance','The emphatic ἐγώ + εἰμί echoes the divine name in Exodus 3:14 — God\'s "I AM WHO I AM"','It shows Jesus was a good Greek speaker','It distinguishes Jesus from the disciples who use different pronouns'], ans:1, ok:'Correct! ἐγώ εἰμί echoes Exodus 3:14 (LXX: ἐγώ εἰμι ὁ ὤν — I AM the one who is). Jesus\' seven "I am" declarations in John are deliberate self-identification with the divine name. The Greek reader could not miss this.', no:'ἐγώ εἰμί echoes the divine name from Exodus 3:14. Jesus\' "I am" statements are claims to divine identity.'},
    {q:'What does πιστεύω (pisteuo) mean — and what is its full paradigm ending in the 1st plural?', ch:'', opts:['I know — πιστεύομεν (we know)','I believe — πιστεύομεν (we believe)','I love — πιστεύομεν (we love)','I see — πιστεύομεν (we see)'], ans:1, ok:'Correct! πιστεύω = I believe. The 1st plural (we believe) = πιστεύομεν — stem πιστευ- + ending -ομεν. "We believe" — the corporate confession of faith.', no:'πιστεύω = I believe. 1st plural = πιστεύομεν (we believe). Stem + -ομεν.'},
    {q:'In 1 John 4:8 — ὁ θεὸς ἀγάπη ἐστίν — why does ἀγάπη have no article?', ch:'ὁ θεὸς ἀγάπη ἐστίν', opts:['It is a scribal omission','ἀγάπη without article = qualitative predicate — God\'s nature IS love (not: God = all love there is)','Greek never uses articles with abstract nouns','ἐστίν takes the genitive, not the nominative'], ans:1, ok:'Correct! ἀγάπη without the article = qualitative predicate nominative. It describes the nature of God — God IS love in his very being. With the article it would mean God is identical to all love that exists. The grammar makes a precise theological statement.', no:'ἀγάπη without article = qualitative (God\'s nature is love). With article it would mean God = all love. The grammar is precise theology.'},
  ],

  completionNote: 'You know the Present Active Indicative paradigm and the verb εἰμί. You can now conjugate hundreds of Greek verbs and identify the "I am" sayings of Jesus in their original form.',
  nextDay: 'Day 3: Latin Verbs →',
};
