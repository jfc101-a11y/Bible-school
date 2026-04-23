/* ═══════════════════════════════════════
   LESSON: Week 3 · Day 4 · Ecclesiastical Latin II
   Latin Grammar I — First & Second Declension Nouns
   ═══════════════════════════════════════ */

LESSONS['3-4-Latin'] = {
  color:    'gold',
  subtitle: 'Week 3 · Day 4 · Ecclesiastical Latin II',
  title:    'Latin Grammar I — Nouns and Cases',
  intro:    'Latin, like Greek, is an inflected language — nouns change their endings to show their grammatical function. Today you learn the Latin case system and the two most important noun declensions. These patterns unlock the creeds, the Vulgate, and the Church Fathers.',
  sections: ['Introduction','The Cases','First Declension','Second Declension','First Words','Quiz','Complete'],

  beforeYouBegin: `
    <p class="lesson-p"><strong>You have already encountered the case system in Greek.</strong> Latin works on the same principle — nouns change endings to show who is the subject, who is the object, and who possesses what. Latin has six cases (one more than Greek) and five declensions (groups of nouns with similar endings).</p>
    <div class="box box-fact"><strong>📜 Why learn Latin cases?</strong> The Nicene Creed, the Lord's Prayer, the Gloria, the Sanctus — all are in Latin, and their meanings depend on knowing the cases. "Credo in unum Deum" — I believe in one God. Why is Deum in the accusative? Because the preposition "in" takes the accusative. Grammar unlocks meaning at every level.</div>
    <div class="box box-tip"><strong>💡 Latin vs Greek cases:</strong> Greek has 5 cases. Latin has 6 — it adds the Ablative, which handles many functions that Greek spreads across the Genitive and Dative. The cases are: Nominative, Genitive, Dative, Accusative, Ablative, Vocative.</div>`,

  alphabetIntro: 'The Latin case system — six cases across five declensions.',
  alphabetNotes: `<div class="box box-note"><strong>The six Latin cases:</strong> Nominative (subject) · Genitive (of) · Dative (to/for) · Accusative (object) · Ablative (by/with/from) · Vocative (address). The Ablative is the new one — it handles separation, means, and accompaniment.</div>`,

  alphabet: [
    {ch:'-a',   name:'1st Nom. Sing.',  sound:'Subject (fem.)',    n:1, t:true},
    {ch:'-ae',  name:'1st Gen. Sing.',  sound:'Of (fem.)',         n:2, t:true},
    {ch:'-ae',  name:'1st Dat. Sing.',  sound:'To/For (fem.)',     n:3, t:true},
    {ch:'-am',  name:'1st Acc. Sing.',  sound:'Object (fem.)',     n:4, t:true},
    {ch:'-ā',   name:'1st Abl. Sing.',  sound:'By/With (fem.)',    n:5, t:true},
    {ch:'-us',  name:'2nd Nom. Sing.',  sound:'Subject (masc.)',   n:6, t:true},
    {ch:'-i',   name:'2nd Gen. Sing.',  sound:'Of (masc.)',        n:7, t:true},
    {ch:'-o',   name:'2nd Dat. Sing.',  sound:'To/For (masc.)',    n:8, t:true},
    {ch:'-um',  name:'2nd Acc. Sing.',  sound:'Object (masc.)',    n:9, t:true},
    {ch:'-o',   name:'2nd Abl. Sing.',  sound:'By/With (masc.)',   n:10,t:true},
  ],

  focusLetters: [
    {ch:'vita',   name:'Vita (life)',    trans:'1st Decl. Fem.',  desc:'vita, vitae, vitae, vitam, vita',    ex:'Vita aeterna — eternal life'},
    {ch:'gratia', name:'Gratia (grace)', trans:'1st Decl. Fem.',  desc:'gratia, gratiae, gratiae, gratiam',  ex:'Sola Gratia — by grace alone'},
    {ch:'Deus',   name:'Deus (God)',     trans:'2nd Decl. Masc.', desc:'Deus, Dei, Deo, Deum, Deo',         ex:'Gloria Dei — glory of God'},
    {ch:'Verbum', name:'Verbum (Word)',  trans:'2nd Decl. Neut.', desc:'Verbum, Verbi, Verbo, Verbum, Verbo',ex:'Verbum Dei — Word of God'},
    {ch:'filius', name:'Filius (son)',   trans:'2nd Decl. Masc.', desc:'filius, filii, filio, filium, filio', ex:'Filius Dei — Son of God'},
  ],

  deepDive: `
    <div class="lesson-h3">The Six Latin Cases</div>

    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;overflow:hidden;margin:1.25rem 0;">
      <table style="width:100%;border-collapse:collapse;font-size:.88rem;">
        <thead><tr style="background:var(--bg3);"><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);text-align:left;">Case</th><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);text-align:left;">Function</th><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);text-align:left;">English</th><th style="padding:.55rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);text-align:left;">Example</th></tr></thead>
        <tbody>
          <tr><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text);font-weight:600;">Nominative</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Subject</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">"God loves"</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">Deus amat</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text);font-weight:600;">Genitive</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Possession</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">"of God," "God's"</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">Gloria Dei</td></tr>
          <tr><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text);font-weight:600;">Dative</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Indirect object</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">"to God," "for God"</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">Deo gratias</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text);font-weight:600;">Accusative</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Direct object</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">"God" (receiving)</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">in Deum</td></tr>
          <tr><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text);font-weight:600;">Ablative</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">By/with/from/in</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">"by God," "from God"</td><td style="padding:.5rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;">a Deo</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.5rem .8rem;color:var(--text);font-weight:600;">Vocative</td><td style="padding:.5rem .8rem;color:var(--text-mid);">Direct address</td><td style="padding:.5rem .8rem;color:var(--text-mid);">"O God!"</td><td style="padding:.5rem .8rem;color:var(--gold);font-style:italic;">O Domine!</td></tr>
        </tbody>
      </table>
    </div>

    <div class="lesson-h3">First Declension — Feminine Nouns (-a stem)</div>
    <p class="lesson-p">First declension nouns mostly end in <strong>-a</strong> in the nominative singular and are usually feminine. Key pattern using <em>vita</em> (life):</p>

    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;overflow:hidden;margin:1rem 0 1.5rem;">
      <table style="width:100%;border-collapse:collapse;font-size:.9rem;">
        <thead><tr style="background:var(--bg3);"><th style="padding:.5rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Case</th><th style="padding:.5rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Singular</th><th style="padding:.5rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Translation</th></tr></thead>
        <tbody>
          <tr><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Nominative</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;font-size:1.05rem;">vita</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">life (subject)</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Genitive</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;font-size:1.05rem;">vitae</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">of life</td></tr>
          <tr><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Dative</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;font-size:1.05rem;">vitae</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">to/for life</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Accusative</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;font-size:1.05rem;">vitam</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">life (object)</td></tr>
          <tr><td style="padding:.45rem .8rem;color:var(--text-mid);">Ablative</td><td style="padding:.45rem .8rem;color:var(--gold);font-style:italic;font-size:1.05rem;">vitā</td><td style="padding:.45rem .8rem;color:var(--text-mid);">by/with/from life</td></tr>
        </tbody>
      </table>
    </div>

    <div class="lesson-h3">Second Declension — Masculine Nouns (-us stem)</div>
    <p class="lesson-p">Second declension masculine nouns end in <strong>-us</strong> in the nominative. Key pattern using <em>Deus</em> (God):</p>

    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;overflow:hidden;margin:1rem 0 1.5rem;">
      <table style="width:100%;border-collapse:collapse;font-size:.9rem;">
        <thead><tr style="background:var(--bg3);"><th style="padding:.5rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Case</th><th style="padding:.5rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Singular</th><th style="padding:.5rem .8rem;font-family:var(--display);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border);">Translation</th></tr></thead>
        <tbody>
          <tr><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Nominative</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;font-size:1.05rem;">Deus</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">God (subject)</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Genitive</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;font-size:1.05rem;">Dei</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">of God</td></tr>
          <tr><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Dative</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;font-size:1.05rem;">Deo</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">to/for God</td></tr>
          <tr style="background:var(--bg2);"><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">Accusative</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--gold);font-style:italic;font-size:1.05rem;">Deum</td><td style="padding:.45rem .8rem;border-bottom:1px solid var(--border);color:var(--text-mid);">God (object)</td></tr>
          <tr><td style="padding:.45rem .8rem;color:var(--text-mid);">Ablative</td><td style="padding:.45rem .8rem;color:var(--gold);font-style:italic;font-size:1.05rem;">Deo</td><td style="padding:.45rem .8rem;color:var(--text-mid);">by/with/from God</td></tr>
        </tbody>
      </table>
    </div>
    <div class="box box-tip"><strong>💡 Deo gratias:</strong> "Thanks to God" — Deo is Dative of Deus. The Dative shows the receiver: "thanks [given] TO God." This phrase ends the Mass. Now you know why Deo is that form.</div>`,

  writing: [
    {ch:'Gloria Dei',  name:'Glory of God',    steps:['Gloria = 1st decl. nom. sing. (subject) — glory','Dei = 2nd decl. gen. sing. — of God (Deus → Dei)','Together: "The glory of God" — Gloria is the subject, Dei shows possession','Write 10 times. Say: GLO-ria DAY-ee.']},
    {ch:'Deo gratias', name:'Thanks to God',   steps:['Deo = 2nd decl. dative sing. — to God','gratias = 1st decl. accusative plural — thanks (given)','Together: "Thanks to God" — dative shows the receiver','Write 10 times. Say: DAY-oh GRAT-sias.']},
    {ch:'Verbum Dei',  name:'Word of God',     steps:['Verbum = 2nd decl. neut. nom. sing. — word (subject)','Dei = 2nd decl. gen. sing. — of God','Genitive shows possession: "the word OF God"','Write 10 times. Say: VER-bum DAY-ee.']},
    {ch:'Filius Dei',  name:'Son of God',      steps:['Filius = 2nd decl. masc. nom. sing. — son (subject)','Dei = 2nd decl. gen. sing. — of God','This phrase appears throughout the NT and the creeds','Write 10 times. Say: FEE-lee-oos DAY-ee.']},
    {ch:'in vitam aeternam', name:'Into eternal life', steps:['in + accusative = direction/motion toward','vitam = 1st decl. acc. sing. — life (object after in)','aeternam = adjective in acc. sing. agreeing with vitam','From the Creed: "I believe in... life eternal"','Write 10 times. Say: in VEE-tam eh-TER-nam.']},
  ],

  vocab: [
    {ch:'vita, vitae',   trans:'VEE-ta',   meaning:'Life (f.)',        note:'1st decl. — vita aeterna (eternal life)'},
    {ch:'gratia, gratiae',trans:'GRAT-sia', meaning:'Grace (f.)',       note:'1st decl. — sola gratia'},
    {ch:'gloria, gloriae',trans:'GLO-ria',  meaning:'Glory (f.)',       note:'1st decl. — gloria in excelsis'},
    {ch:'Deus, Dei',     trans:'DAY-oos',  meaning:'God (m.)',         note:'2nd decl. — Dei = of God'},
    {ch:'Verbum, Verbi', trans:'VER-bum',  meaning:'Word (n.)',        note:'2nd decl. neut. — John 1:1'},
    {ch:'filius, filii', trans:'FEE-lee-oos',meaning:'Son (m.)',       note:'2nd decl. — Filius Dei'},
    {ch:'Dominus, Domini',trans:'DO-mi-noos',meaning:'Lord (m.)',      note:'2nd decl. — Kyrie = O Lord'},
  ],

  scriptureRef: 'Nicene Creed (Latin)',
  scripture: {
    orig:  'Credo in unum Deum, Patrem omnipotentem, factorem caeli et terrae.',
    trans: 'KRAY-do in OO-num DAY-um, PAT-rem om-ni-PO-ten-tem, FAK-to-rem CHEH-lee et TER-reh.',
    eng:   '"I believe in one God, the Father Almighty, maker of heaven and earth."',
  },
  scriptureNote: 'Identify the cases: Deum = accusative (object after "in") · Patrem = accusative (in apposition) · caeli = genitive (of heaven) · terrae = genitive (of earth). The cases do the grammatical work — not the word order.',
  scriptureTip:  '<strong>💡 Credo:</strong> "I believe" — the first word of the Creed. In Latin it is a single verb — cred + o (the -o ending = I). Just as Hebrew and Greek encode the subject in the verb, so does Latin. "Credo in unum Deum" — I-believe in one God. You are reading the most recited sentence in Christian history.',

  quiz: [
    {q:'What case is Deum in "Credo in unum Deum"?', ch:'Deum', opts:['Nominative — it is the subject','Genitive — it means "of God"','Accusative — it is the object after "in"','Ablative — it means "from God"'], ans:2, ok:'Correct! Deum is accusative. The preposition "in" (when expressing direction or motion toward) takes the accusative case. "I believe toward/into one God." Deus → Deum in accusative.', no:'Deum is accusative — the object after the preposition "in" (which takes accusative for direction). Deus → Deum.'},
    {q:'What is the genitive singular of Deus (God)?', ch:'', opts:['Deum','Deo','Deus','Dei'], ans:3, ok:'Correct! The genitive of Deus is Dei — "of God." Gloria Dei = glory of God. Verbum Dei = Word of God. Filius Dei = Son of God. The 2nd declension genitive ending is -i.', no:'Genitive of Deus = Dei ("of God"). Gloria Dei = glory of God. The 2nd decl. genitive ending is -i.'},
    {q:'What is the Latin case that has no equivalent in Greek — handling "by/with/from"?', ch:'', opts:['Nominative','Genitive','Vocative','Ablative'], ans:3, ok:'Correct! The Ablative is the case unique to Latin (Greek spreads its functions across Genitive and Dative). It expresses means ("by"), accompaniment ("with"), separation ("from"), and manner.', no:'The Ablative is the case unique to Latin. It handles "by," "with," "from," and "in" — functions Greek spreads across other cases.'},
    {q:'In "Deo gratias" (thanks to God), why is Deo in the Dative?', ch:'Deo gratias', opts:['Because Deo is the subject of the sentence','Because the Dative shows the receiver — thanks given TO God','Because gratias requires the Dative','Because Deo follows a preposition'], ans:1, ok:'Correct! The Dative shows the indirect object — the receiver. "Thanks [given] TO God." Deo is the dative of Deus. The Dative answers "to whom?" or "for whom?" — to God.', no:'Deo is Dative because it is the receiver of the thanks — "thanks TO God." Dative = indirect object/receiver.'},
    {q:'What does "Sola Gratia" mean — and what case is Gratia?', ch:'Sola Gratia', opts:['"Only Grace" — Gratia is nominative (grace alone is the agent)','By Grace — Gratia is ablative','Of Grace — Gratia is genitive','To Grace — Gratia is dative'], ans:0, ok:'Correct! Sola Gratia = "by grace alone" or "grace alone" — one of the five Solas of the Reformation. Sola is an adjective agreeing with Gratia in the ablative of means: "saved BY grace ALONE." The ablative expresses the means of salvation.', no:'Sola Gratia = "by grace alone" — ablative of means. Saved by grace alone. One of the five Reformation Solas.'},
  ],

  completionNote: 'You have learned the Latin case system and the first two declensions. You can now parse the opening of the Nicene Creed and understand why every word takes its particular form.',
  nextDay: 'Day 5: Reading John 1:1 in Three Languages →',
};
