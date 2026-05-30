/* ═══════════════════════════════════════
   LESSON: Week 5 · Day 3 · Ecclesiastical Latin IV
   The Lord's Prayer in Latin
   ═══════════════════════════════════════ */

LESSONS['5-3-Latin'] = {
  color:    'gold',
  subtitle: 'Week 5 · Day 3 · Ecclesiastical Latin IV',
  title:    'The Pater Noster — The Lord\'s Prayer',
  intro:    'The Pater Noster is the most prayed Latin text in history. For over a thousand years it was the prayer of the Western Church — memorised by every Christian, recited at every Mass. Today you read it line by line in Jerome\'s Latin, understanding every word.',
  sections: ['Introduction','Lines 1–3','Lines 4–6','Lines 7–9','Word Study','Quiz','Complete'],

  beforeYouBegin: `
    <p class="lesson-p"><strong>You already know more of this than you think.</strong> You have learned the case system, the first and second declensions, the verb esse, and key vocabulary like Deus, gloria, Verbum, vita. Today you apply all of it to the most famous prayer ever prayed.</p>
    <div class="box box-fact"><strong>📜 The Latin Pater Noster:</strong> Jerome translated the Lord's Prayer (Matthew 6:9–13) into Latin around AD 400. His translation became the standard form used in the Roman Mass for over a millennium. The words you learn today are the words Augustine prayed, Aquinas prayed, Francis of Assisi prayed. Every reformer and mystic of the Western Church knew this prayer in Latin.</div>
    <div class="box box-tip"><strong>💡 Pronunciation reminder:</strong> Pater = PA-ter · Noster = NOS-ter · caelum = CHEH-loom · sanctificetur = sank-ti-fi-CHEH-toor · adveniat = ad-VEH-nee-aht · fiat = FEE-aht</div>`,

  alphabetIntro: 'The Pater Noster — line by line with grammatical and theological commentary.',
  alphabetNotes: `<div class="box box-note"><strong>Two new forms today:</strong> The Subjunctive mood (expressing wishes/commands) — sanctificetur, adveniat, fiat, da, dimitte. And the Imperative (direct commands) — da (give!), dimitte (forgive!), ne inducas (do not lead), libera (free!). These are the grammar of prayer.</div>`,

  alphabet: [
    {ch:'Pater',         name:'Father',           sound:'PA-ter',          n:1, t:true},
    {ch:'noster',        name:'our',               sound:'NOS-ter',         n:2, t:true},
    {ch:'sanctificetur', name:'be hallowed',       sound:'sank-ti-fi-CHEH-toor',n:3,t:true},
    {ch:'adveniat',      name:'may it come',       sound:'ad-VEH-nee-aht',  n:4, t:true},
    {ch:'fiat',          name:'may it be done',    sound:'FEE-aht',         n:5, t:true},
    {ch:'da',            name:'give!',             sound:'dah',             n:6, t:true},
    {ch:'panem',         name:'bread (acc.)',      sound:'PA-nem',          n:7, t:true},
    {ch:'dimitte',       name:'forgive! (imper.)', sound:'di-MIT-teh',      n:8, t:true},
    {ch:'debita',        name:'debts (neut. pl.)', sound:'DEB-i-ta',        n:9, t:true},
    {ch:'libera',        name:'free! deliver!',    sound:'LEE-beh-ra',      n:10,t:true},
  ],

  focusLetters: [
    {ch:'Pater noster', name:'Our Father',      trans:'Vocative + adjective',desc:'Pater = voc. of pater (father) · noster = our',    ex:'The prayer begins with address — bold intimacy'},
    {ch:'sanctificetur',name:'Be hallowed',     trans:'Pres. pass. subjunctive',desc:'Let your name be made holy — passive wish',     ex:'nomen tuum = your name (acc.)'},
    {ch:'fiat voluntas tua',name:'Your will be done',trans:'Subjunctive of fieri', desc:'fiat = let it be done · voluntas = will · tua = your', ex:'sicut in caelo et in terra'},
    {ch:'panem... quotidianum',name:'Daily bread',trans:'Acc. noun + adj.',      desc:'panem = bread (acc.) · quotidianum = daily',   ex:'da nobis hodie = give us today'},
    {ch:'libera nos a malo',name:'Deliver us from evil',trans:'Imperative + abl.',desc:'libera = deliver! · nos = us · a malo = from evil', ex:'The final petition'},
  ],

  deepDive: `
    <div class="lesson-h3">Lines 1–3 — The Address and the Three Petitions for God</div>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;padding:1.25rem 1.5rem;margin:1rem 0 1.5rem;">
      <div style="font-size:1.3rem;color:var(--gold);font-style:italic;line-height:2.2;margin-bottom:.75rem;">
        Pater noster, qui es in caelis,<br>
        sanctificetur nomen tuum.<br>
        Adveniat regnum tuum.<br>
        Fiat voluntas tua, sicut in caelo et in terra.
      </div>
      <div style="font-size:.85rem;color:var(--text-mid);font-style:italic;margin-bottom:.5rem;">PA-ter NOS-ter, kwee es in CHEH-lees, sank-ti-fi-CHEH-toor NO-men TOO-um. ad-VEH-nee-aht REG-noom TOO-um. FEE-aht vo-LOON-tas TOO-a, SEE-koot in CHEH-lo et in TER-ra.</div>
      <div style="font-size:1rem;color:var(--text);font-weight:600;margin-bottom:1rem;">"Our Father, who art in heaven, hallowed be thy name. Thy kingdom come. Thy will be done, on earth as it is in heaven."</div>
      <div style="font-size:.88rem;color:var(--text-mid);line-height:1.9;">
        <strong style="color:var(--text);">Pater noster</strong> = Our Father (vocative — direct address) &nbsp;·&nbsp;
        <strong style="color:var(--text);">qui es in caelis</strong> = who are in the heavens (qui = who · es = you are · caelis = ablative plural of caelum) &nbsp;·&nbsp;
        <strong style="color:var(--text);">sanctificetur</strong> = let it be hallowed (present passive subjunctive 3s of sanctificare) &nbsp;·&nbsp;
        <strong style="color:var(--text);">nomen tuum</strong> = your name (nomen = nom/acc neut · tuum = your) &nbsp;·&nbsp;
        <strong style="color:var(--text);">adveniat</strong> = let it come (present subjunctive 3s of advenire) &nbsp;·&nbsp;
        <strong style="color:var(--text);">fiat voluntas tua</strong> = let your will be done (fiat = subjunctive of fieri · voluntas = will · tua = your)
      </div>
    </div>

    <div class="lesson-h3">Lines 4–6 — The Three Petitions for Us</div>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;padding:1.25rem 1.5rem;margin:1rem 0 1.5rem;">
      <div style="font-size:1.3rem;color:var(--gold);font-style:italic;line-height:2.2;margin-bottom:.75rem;">
        Panem nostrum quotidianum da nobis hodie.<br>
        Et dimitte nobis debita nostra,<br>
        sicut et nos dimittimus debitoribus nostris.
      </div>
      <div style="font-size:.85rem;color:var(--text-mid);font-style:italic;margin-bottom:.5rem;">PA-nem NOS-trum kwoh-ti-di-A-num da NO-bees HO-di-eh. et di-MIT-teh NO-bees DEB-i-ta NOS-tra, SEE-koot et nos di-MIT-ti-moos deh-bi-TOR-i-boos NOS-trees.</div>
      <div style="font-size:1rem;color:var(--text);font-weight:600;margin-bottom:1rem;">"Give us this day our daily bread. And forgive us our debts, as we also have forgiven our debtors."</div>
      <div style="font-size:.88rem;color:var(--text-mid);line-height:1.9;">
        <strong style="color:var(--text);">Panem nostrum</strong> = our bread (accusative — direct object of da) &nbsp;·&nbsp;
        <strong style="color:var(--text);">quotidianum</strong> = daily (adjective agreeing with panem) &nbsp;·&nbsp;
        <strong style="color:var(--text);">da</strong> = give! (imperative of dare) &nbsp;·&nbsp;
        <strong style="color:var(--text);">nobis</strong> = to us (dative plural) &nbsp;·&nbsp;
        <strong style="color:var(--text);">hodie</strong> = today &nbsp;·&nbsp;
        <strong style="color:var(--text);">dimitte</strong> = forgive! (imperative of dimittere) &nbsp;·&nbsp;
        <strong style="color:var(--text);">debita</strong> = debts (neuter plural accusative) &nbsp;·&nbsp;
        <strong style="color:var(--text);">dimittimus</strong> = we forgive (present indicative 1st plural — note: we forgive as a present ongoing action)
      </div>
    </div>

    <div class="lesson-h3">Lines 7–9 — Temptation and Deliverance</div>
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:4px;padding:1.25rem 1.5rem;margin:1rem 0 1.5rem;">
      <div style="font-size:1.3rem;color:var(--gold);font-style:italic;line-height:2.2;margin-bottom:.75rem;">
        Et ne nos inducas in tentationem,<br>
        sed libera nos a malo.<br>
        Amen.
      </div>
      <div style="font-size:.85rem;color:var(--text-mid);font-style:italic;margin-bottom:.5rem;">et neh nos in-DOO-chas in ten-ta-tsee-OH-nem, sed LEE-beh-ra nos a MA-lo. A-men.</div>
      <div style="font-size:1rem;color:var(--text);font-weight:600;margin-bottom:1rem;">"And lead us not into temptation, but deliver us from evil. Amen."</div>
      <div style="font-size:.88rem;color:var(--text-mid);line-height:1.9;">
        <strong style="color:var(--text);">ne nos inducas</strong> = do not lead us (ne + subjunctive = negative wish · inducas = subjunctive of inducere) &nbsp;·&nbsp;
        <strong style="color:var(--text);">in tentationem</strong> = into temptation (in + accusative = motion toward) &nbsp;·&nbsp;
        <strong style="color:var(--text);">sed</strong> = but (adversative conjunction) &nbsp;·&nbsp;
        <strong style="color:var(--text);">libera</strong> = deliver/free! (imperative of liberare) &nbsp;·&nbsp;
        <strong style="color:var(--text);">a malo</strong> = from evil (a/ab + ablative = separation from)
      </div>
    </div>

    <div class="lesson-h3">The Structure of the Prayer</div>
    <p class="lesson-p">The Pater Noster has a perfect chiastic structure. The first three petitions (sanctificetur, adveniat, fiat) are directed at God — his name, his kingdom, his will. The last three (da, dimitte, libera) are directed toward us — our bread, our forgiveness, our deliverance. The prayer moves from God to us, and the pivot point is "on earth as in heaven."</p>
    <div class="box box-tip"><strong>💡 The subjunctive of prayer:</strong> Latin uses the subjunctive mood for wishes and petitions. Sanctificetur (let it be hallowed), adveniat (let it come), fiat (let it be done) — these are not predictions but prayers. The grammar itself expresses the posture of petition.</div>`,

  writing: [
    {ch:'Pater noster, qui es in caelis', name:'The address — say from memory', steps:['Read aloud: PA-ter NOS-ter, kwee es in CHEH-lees','Our Father, who art in heaven','Pater = vocative (address) · noster = our · qui es = who are · in caelis = in the heavens (ablative)','Write 5 times. Say the pronunciation aloud each time.']},
    {ch:'sanctificetur nomen tuum',       name:'First petition', steps:['Read aloud: sank-ti-fi-CHEH-toor NO-men TOO-um','Let your name be hallowed','sanctificetur = present passive subjunctive — a wish directed at God','nomen tuum = your name (accusative — the thing being hallowed)','Write 5 times.']},
    {ch:'fiat voluntas tua',              name:'Third petition', steps:['Read aloud: FEE-aht vo-LOON-tas TOO-a','Thy will be done','fiat = subjunctive of fieri — let it be/happen','voluntas = will · tua = your','Write 5 times. Three languages: יְהִי (Heb.) · γενηθήτω (Grk.) · fiat (Lat.)']},
    {ch:'da nobis hodie',                 name:'Give us today', steps:['Read aloud: da NO-bees HO-di-eh','Give us today','da = imperative of dare (to give)','nobis = dative plural (to us) · hodie = today','Write 5 times. The prayer asks only for today — not tomorrow.']},
    {ch:'libera nos a malo',              name:'Deliver us from evil', steps:['Read aloud: LEE-beh-ra nos a MA-lo','Deliver us from evil','libera = imperative of liberare (to free, to deliver)','a + ablative = from · malo = evil/the evil one','Write 5 times. This is the final cry of the prayer.']},
  ],

  vocab: [
    {ch:'Pater, patris',   trans:'PA-ter',   meaning:'Father (m.)',           note:'3rd decl. — vocative = Pater'},
    {ch:'nomen, nominis',  trans:'NO-men',   meaning:'Name (n.)',              note:'3rd decl. — nomen tuum = your name'},
    {ch:'regnum, regni',   trans:'REG-num',  meaning:'Kingdom (n.)',           note:'2nd decl. neut. — adveniat regnum tuum'},
    {ch:'voluntas, -tatis',trans:'vo-LOON-tas',meaning:'Will (f.)',           note:'3rd decl. — fiat voluntas tua'},
    {ch:'panis, panis',    trans:'PA-nis',   meaning:'Bread (m.)',             note:'3rd decl. — panem (accusative)'},
    {ch:'debitum, -i',     trans:'DEB-i-tum',meaning:'Debt (n.)',             note:'2nd decl. — debita nostra (our debts)'},
    {ch:'malum, -i',       trans:'MA-lum',   meaning:'Evil / The evil one',   note:'2nd decl. — a malo (from evil, ablative)'},
  ],

  scriptureRef: 'Matthew 6:9–13 (Vulgate)',
  scripture: {
    orig:  'Pater noster, qui es in caelis, sanctificetur nomen tuum, adveniat regnum tuum, fiat voluntas tua sicut in caelo et in terra.',
    trans: 'PA-ter NOS-ter, kwee es in CHEH-lees, sank-ti-fi-CHEH-toor NO-men TOO-um, ad-VEH-nee-aht REG-noom TOO-um, FEE-aht vo-LOON-tas TOO-a SEE-koot in CHEH-lo et in TER-ra.',
    eng:   '"Our Father, who art in heaven, hallowed be thy name, thy kingdom come, thy will be done, on earth as it is in heaven." — Matthew 6:9–10 (Vulgate)',
  },
  scriptureNote: 'Identify the subjunctives: sanctificetur (let it be hallowed) · adveniat (let it come) · fiat (let it be done) · ne inducas (do not lead). Identify the imperatives: da (give!) · dimitte (forgive!) · libera (deliver!). The grammar of the prayer IS the prayer.',
  scriptureTip: '<strong>💡 Fiat lux / Fiat voluntas tua:</strong> In Genesis 1:3 (Vulgate): Fiat lux — Let there be light. In the Lord\'s Prayer: Fiat voluntas tua — Let your will be done. The same word. Creation happens when God says fiat. The prayer asks that God\'s will would happen with the same creative power. You are now reading two of the most important fiats in Latin Scripture.',

  quiz: [
    {q:'What mood are sanctificetur, adveniat, and fiat — and what does this mood express in the context of prayer?', ch:'', opts:['Indicative — statements of fact','Imperative — direct commands to God','Subjunctive — wishes and petitions directed toward God','Infinitive — abstract concepts'], ans:2, ok:'Correct! All three are present passive/active subjunctives — expressing wishes or petitions. Sanctificetur (let it be hallowed), adveniat (let it come), fiat (let it be done). The subjunctive mood IS the grammar of prayer in Latin.', no:'Subjunctive — the mood of wishes and petitions. Sanctificetur, adveniat, fiat all express petition, not statement.'},
    {q:'What case is nobis in "da nobis hodie" — and why?', ch:'da nobis hodie', opts:['Nominative — nobis is the subject','Accusative — nobis is the direct object','Dative — nobis is the indirect object (to us / for us)','Ablative — nobis indicates separation'], ans:2, ok:'Correct! nobis is dative plural — "to us / for us." da (give) requires a direct object (panem = bread, accusative) and an indirect object (nobis = to us, dative). Give [what?] bread [to whom?] to us. Cases do the work of prepositions.', no:'nobis = dative — indirect object (to us). da = give · panem = bread (accusative, direct object) · nobis = to us (dative, indirect object).'},
    {q:'What does "a malo" mean in "libera nos a malo" — and what case is malo?', ch:'libera nos a malo', opts:['In evil — ablative of location','Into evil — accusative of direction','From evil — ablative of separation (a/ab + ablative)','Of evil — genitive of possession'], ans:2, ok:'Correct! a/ab + ablative = separation from. malo is ablative of malum (evil). "Deliver us FROM evil" — the preposition a/ab always takes the ablative to express separation or origin.', no:'a + ablative = from. malo = ablative of malum. Libera nos a malo = Deliver us from evil.'},
    {q:'What is the structural pattern of the Pater Noster — how is it divided?', ch:'', opts:['Random petitions with no structure','Three petitions for God (name/kingdom/will) + three petitions for us (bread/forgiveness/deliverance)','Seven identical petitions for different needs','Two equal halves with no theological distinction'], ans:1, ok:'Correct! The prayer divides perfectly: three God-directed petitions (sanctificetur, adveniat, fiat — name, kingdom, will) then three human-directed petitions (da, dimitte, libera — bread, forgiveness, deliverance). God first, then us.', no:'Three for God (name/kingdom/will) + three for us (bread/forgiveness/deliverance). God-ward, then human-ward.'},
    {q:'What is the Latin word fiat — and where else does it appear in the Vulgate?', ch:'fiat', opts:['"Amen" — the closing affirmation','A noun meaning "command"','Present passive/active subjunctive of fieri meaning "let it be/happen" — also fiat lux (let there be light, Genesis 1:3)','An imperative meaning "go!"'], ans:2, ok:'Correct! fiat = subjunctive of fieri — "let it be / let it happen." Genesis 1:3 Vulgate: Fiat lux! Let there be light! The Lord\'s Prayer: Fiat voluntas tua. Let your will be done. The same word connects creation and the prayer Jesus taught.', no:'fiat = subjunctive "let it be." Genesis 1:3: Fiat lux (let there be light). The Lord\'s Prayer: Fiat voluntas tua. The same word connects creation and prayer.'},
  ],

  completionNote: 'You have read the Pater Noster in Jerome\'s Latin — word by word, case by case, clause by clause. The most prayed prayer in Western Christian history is now open to you in its original ecclesiastical form.',
  nextDay: 'Day 4: Genesis 1:1–5 in Hebrew →',
};
