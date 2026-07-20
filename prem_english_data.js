/*
  prem_english_data.js — Single source of truth for Prem's English Coach
  ========================================================================
  Edit ONLY this file to update scores, skills, and sessions.
  Both index.html and Prems_English_Coach_Dashboard.html read from it.

  After each unit test:
    1. Update lastUnit + currentUnit
    2. Push a new entry into scores[]
    3. Prepend a new entry into unitLog[]
    4. Adjust skills[] if needed
  That's it — both pages update automatically.
*/

var PREM_ENGLISH = {

  // ── Meta ─────────────────────────────────────────────────────────
  updated:        '20 Jul 2026',
  coachStartDate: '2026-05-23',
  isaDate:        '2027-02-26',

  // ── Current state ────────────────────────────────────────────────
  currentUnit: {
    n:           27,
    status:      'Cloze: Trigger Word First &middot; Grammar: Pencil Power Error Scan &middot; Test Ready, Awaiting Prem',
    testPending: true
  },

  // Baseline = ASMOPSS 2025 assessment (reference — scores hardcoded in renderHero)
  baseline: {
    n: 'BL', label: 'Baseline', score: 67, outOf: 100, pct: 67,
    patternInsight: 'ASMOPSS 2025 &mdash; 67/100 (90th pct Thailand) &middot; Rank 227 / 2,441. Conversation 20/20 &#127775;. Cloze 10/20 (50%) with Basic-level error (red flag). Vocabulary &amp; Grammar 12/20 (60%) each &mdash; gaps at Intermediate/Applied. Reading 13/20 (65%) &mdash; strong on hard Qs but missed a Basic.',
  },

  // Last completed assessment (Unit 26 — updated after each test)
  lastUnit: {
    n: 26, label: 'Unit 26', score: 11, outOf: 20, pct: 55, delta: -3, prevScore: 14,

    patternLabel:   'Unit 26 &mdash; 20 Jul 2026 &middot; 11/20 (55%) &middot; second-lowest score in the programme &mdash; but concentrated in 2 clearly-diagnosed causes, not a broad dip',
    patternInsight: '<strong>Score: 11/20 (55%), down from 14/20 &mdash; a low score with a narrow, well-defined cause.</strong> The written-labelling escalation for error-scan did NOT transfer to the unscaffolded test: 1/5 correct, and every wrong pick flagged a genuinely clean sentence rather than the real mismatch &mdash; the same &ldquo;surface impression&rdquo; signature as the last 3 tests, now confirmed across FOUR straight tests (1/10 total, 11%). Mixed-vs-Second Conditional, confirmed fixed with a clean 2/2 at Unit 25, backslid to a miss &mdash; a basic if-half identification slip, plausibly fatigue from three consecutive error-scan struggles right before it. Cloze&rsquo;s brand-new subjunctive strand failed ALL THREE attempts (0/3), but with a crystal-clear cause: every miss chose the ordinary &ldquo;-s&rdquo; agreement form instead of the base form &mdash; an old, deeply automatic habit overriding a brand-new rule, not misunderstanding. The OTHER new Cloze pattern, compound-adjective hyphenation, scored a clean 2/2. Vocabulary &amp; Reading stayed PERFECT (6/6) for a THIRD straight test.',

    analysisLabel:   'Unit 26 Result Analysis &mdash; 20 Jul 2026 (labelling escalation shows no transfer yet; subjunctive miss pattern is unusually clean and fixable)',
    analysisInsight: '<strong>Score: 11/20 (55%), FAIL by a wide margin &mdash; but NOT the Unit 13/22 overload-dip signature.</strong> Vocab is completely untouched (3rd straight 6/6) and one of two brand-new Cloze patterns (hyphenation) hit 100% &mdash; a true overload dip would catch previously-solid material broadly, including the anchor skill. The damage has two distinct, specific causes: (1) the click-to-reveal labelling built into the Unit 26 lesson didn&rsquo;t leave behind a routine Prem reproduces unprompted, with no click-through scaffold forcing the check on the real test; (2) the subjunctive pattern lost a direct competition against a much older, more automatic habit (ordinary subject-verb agreement) &mdash; a normal, very fixable first-exposure problem, not a comprehension failure. DECISION: Unit 27 stays at 2 lessons and does NOT introduce another new method &mdash; it scales up volume and removes scaffolding instead. Grammar switches from click-to-reveal to a high-volume, UNSCAFFOLDED written drill (10 items, mirroring the historical Had Test escalation) plus an explicit instruction to physically write labels on paper during the real test. Cloze gets one short lesson teaching a &ldquo;spot the trigger word first&rdquo; override habit, rather than reteaching the subjunctive concept itself (which Prem already understands &mdash; he&rsquo;s not guessing randomly, he&rsquo;s consistently defaulting to the wrong-but-familiar rule).',

    qSummary: '<strong>11/20 (55%), FAIL &mdash; a low score with two narrow, well-diagnosed causes. Error-scan\'s new labelling method scored 1/5 on the unscaffolded test, same &ldquo;flags a clean sentence&rdquo; signature as the last 3 tests (1/10 total across 4 tests). Mixed-vs-Second backslid once after a clean pass at Unit 25 &mdash; one data point, needs a retest. Subjunctive (brand new) went 0/3, every miss choosing the ordinary &ldquo;-s&rdquo; form &mdash; a fixable habit-override problem, not confusion. Hyphenation (also brand new) went a clean 2/2. Vocab/Reading PERFECT (6/6) for a 3rd straight test. Next: UNIT 27 &mdash; Grammar shifts to high-volume unscaffolded written drilling, Cloze gets a &ldquo;trigger word first&rdquo; override habit.</strong>',

    qBreakdown: [
      { q:'Q1',  topic:'Cloze', lvl:'b', pass:true,  note:'&#10003; 2-litre bottle (hyphenated, singular &mdash; describing &ldquo;bottle&rdquo;). Foundational.' },
      { q:'Q2',  topic:'Cloze', lvl:'b', pass:false, note:'&#10007; Chose &ldquo;displays&rdquo; (the &ndash;s agreement form); scored answer was &ldquo;display&rdquo; (base form after &ldquo;recommended that&rdquo;) &mdash; the ordinary SVA habit overriding the new subjunctive rule. Foundational.' },
      { q:'Q3',  topic:'Cloze', lvl:'b', pass:true,  note:'&#10003; although (CONTRAST, clause-joiner). Foundational.' },
      { q:'Q4',  topic:'Cloze', lvl:'i', pass:false, note:'&#10007; Chose &ldquo;explains&rdquo; (the &ndash;s agreement form); scored answer was &ldquo;explain&rdquo; (base form after &ldquo;insisted that&rdquo;) &mdash; same SVA-override pattern as Q2. Developing.' },
      { q:'Q5',  topic:'Cloze', lvl:'i', pass:true,  note:'&#10003; 3-metre string (hyphenated, singular &mdash; describing &ldquo;string&rdquo;). Developing.' },
      { q:'Q6',  topic:'Cloze', lvl:'a', pass:false, note:'&#10007; Chose &ldquo;so&rdquo; (RESULT); scored answer was &ldquo;however&rdquo; (CONTRAST) &mdash; a 3rd occurrence of the RESULT-vs-CONTRAST family confusion, though only one test item this unit. Advanced.' },
      { q:'Q7',  topic:'Cloze', lvl:'a', pass:false, note:'&#10007; Chose &ldquo;becomes&rdquo; (the &ndash;s agreement form); scored answer was &ldquo;become&rdquo; (base form after &ldquo;suggested that&rdquo;) &mdash; 3rd of 3 subjunctive misses, all the identical SVA-override pattern. Advanced.' },
      { q:'Q8',  topic:'Grammar', lvl:'b', pass:false, note:'&#10007; Error-scan miss &mdash; flagged a clean, matching sentence instead of the real mismatch. 1st of 4 misses this test on the identical sub-skill &mdash; now 4 consecutive tests, near-zero successful reps (1/10 total). Foundational.' },
      { q:'Q9',  topic:'Grammar', lvl:'b', pass:false, note:'&#10007; Error-scan miss &mdash; flagged a different clean sentence instead of the real mismatch. Foundational.' },
      { q:'Q10', topic:'Grammar', lvl:'i', pass:false, note:'&#10007; Error-scan miss &mdash; flagged a clean sentence instead of the real mismatch, same signature again. Developing.' },
      { q:'Q11', topic:'Grammar', lvl:'i', pass:false, note:'&#10007; Mixed-vs-Second fill-blank &mdash; chose &ldquo;was not / would not study&rdquo; instead of &ldquo;had not been / would not study&rdquo;, a basic if-half slip. Backslid after a clean 2/2 at Unit 25; sits right after 3 straight error-scan struggles, plausibly fatigue &mdash; needs a retest before calling it reopened. Developing.' },
      { q:'Q12', topic:'Grammar', lvl:'a', pass:true, note:'&#10003; Error-scan, correct &mdash; the ONE successful error-scan rep this test, keeping the thread from going fully to zero. Advanced.' },
      { q:'Q13', topic:'Grammar', lvl:'a', pass:true, note:'&#10003; Gerund/infinitive (&ldquo;never learning&rdquo;), correct &mdash; thread stays confirmed, 3rd correct rep running. Advanced.' },
      { q:'Q14', topic:'Grammar', lvl:'a', pass:false, note:'&#10007; Error-scan miss &mdash; flagged a clean sentence instead of the real mismatch, 4th of 4 misses this test. Advanced.' },
      { q:'Q15', topic:'Vocab', lvl:'b', pass:true,  note:'&#10003; Theme (helping others the way you wished someone had helped you is deeply rewarding). Foundational.' },
      { q:'Q16', topic:'Vocab', lvl:'b', pass:true,  note:'&#10003; Motivation (remembers struggling alone with fractions, wants to prevent that for others) &mdash; internal motivation, correct. Foundational.' },
      { q:'Q17', topic:'Vocab', lvl:'i', pass:true,  note:'&#10003; Detail-recall (nobody assigned him this job &mdash; the director only made a general request). Developing.' },
      { q:'Q18', topic:'Vocab', lvl:'i', pass:true,  note:'&#10003; ashamed = feeling embarrassed or bad about something. Developing.' },
      { q:'Q19', topic:'Vocab', lvl:'a', pass:true,  note:'&#10003; Motivation-inference (he directly gave someone else the help he once wished he&rsquo;d had). Advanced.' },
      { q:'Q20', topic:'Vocab', lvl:'a', pass:true,  note:'&#10003; proud = opposite of ashamed &mdash; near-opposite-check habit holds on a fresh word, avoiding the &ldquo;exhausted&rdquo; near-opposite trap. Advanced.' }
    ]
  },

  // ── Skills ───────────────────────────────────────────────────────
  // achievement % = sum(c) / sum(t) × 100
  // After U26 (a low score concentrated in 2 diagnosed causes, not a broad dip):
  // Reading/Vocabulary unchanged — both already at target, 3rd straight PERFECT test for Vocab/Reading combined;
  // Grammar -4 — error-scan now 1/10 across 4 tests (near-zero transfer), plus a one-off Mixed-vs-Second backslide;
  //   tempered by gerund/infinitive holding correct for a 3rd straight rep;
  // Cloze -4 — hyphenation (brand new) scored a clean 2/2, but subjunctive (also brand new) went 0/3 with a
  //   consistent, fixable SVA-override cause; RESULT-vs-CONTRAST also missed its one light-touch item;
  // Writing/Conversation/CritThink/FigLang untested by U26, held at prior levels
  skills: [
    { name: 'Reading Compr.',    c: 85, t: 85 },   // not tested standalone at U26 (folds into Vocab section); unchanged, already at target
    { name: 'Vocabulary',        c: 82, t: 82 },   // U26: 6/6 PERFECT — 3rd straight perfect test, already at target
    { name: 'Grammar',           c: 74, t: 82 },   // U26: 2/7 — error-scan now 1/10 across 4 tests, Mixed-vs-Second backslid once; gerund/infinitive still holding (3rd straight correct)
    { name: 'Cloze Test',        c: 60, t: 80 },   // U26: 3/7 — hyphenation (new) 2/2 clean, but subjunctive (new) 0/3 with a clear, fixable SVA-override cause
    { name: 'Writing',           c: 65, t: 85 },
    { name: 'Conversation',      c: 90, t: 85 },   // not tested at U26; unchanged
    { name: 'Critical Thinking', c: 62, t: 80 },   // not tested at U26; unchanged
    { name: 'Figurative Lang.',  c: 55, t: 78 }    // not tested at U26; unchanged
  ],

  // Radar axes order: Reading, Vocabulary, Grammar, Cloze, Writing, Conversation, CritThink, FigLang
  radarCurrent:  [85, 82, 74, 60, 65, 90, 62, 55],
  radarTarget:   [85, 82, 82, 80, 85, 85, 80, 78],
  radarBaseline: [62, 58, 58, 46, 65, 95, 50, 42],
  radarLegendUnit: 'Unit 26',

  // ── Score history (unit tests only — ASMOPSS shown separately) ────
  outOf: 20,
  scores: [
    { n:1, score:11, outOf:20, delta:null, color:'#fc4e4e', star:false, label:'U1' },
    { n:2, score:14, outOf:20, delta:3,    color:'#f6993f', star:false, label:'U2' },
    { n:3, score:13, outOf:20, delta:-1,   color:'#f6993f', star:false, label:'U3' },
    { n:4, score:14, outOf:20, delta:1,    color:'#f6993f', star:false, label:'U4' },
    { n:5, score:12, outOf:20, delta:-2,   color:'#fc4e4e', star:false, label:'U5' },
    { n:6, score:15, outOf:20, delta:3,    color:'#89F336', star:true,  label:'U6' },
    { n:7, score:11, outOf:20, delta:-4,   color:'#fc4e4e', star:false, label:'U7' },
    { n:8, score:12, outOf:20, delta:1,    color:'#f6993f', star:false, label:'U8' },
    { n:9, score:13, outOf:20, delta:1,    color:'#667eea', star:false, label:'U9' },
    { n:10, score:16, outOf:20, delta:3,   color:'#89F336', star:false, label:'U10' },
    { n:'M1', score:20, outOf:28, delta:null, color:'#9f7aea', star:false, label:'M1', milestone:true },
    { n:11, score:16, outOf:20, delta:0, color:'#89F336', star:false, label:'U11' },
    { n:12, score:12, outOf:20, delta:-4, color:'#fc4e4e', star:false, label:'U12' },
    { n:13, score:8, outOf:20, delta:-4, color:'#fc4e4e', star:false, label:'U13' },
    { n:14, score:14, outOf:20, delta:6, color:'#667eea', star:false, label:'U14' },
    { n:15, score:17, outOf:20, delta:3, color:'#89F336', star:false, label:'U15' },
    { n:16, score:13, outOf:20, delta:-4, color:'#667eea', star:false, label:'U16' },
    { n:17, score:17, outOf:20, delta:4,  color:'#89F336', star:false, label:'U17' },
    { n:18, score:17, outOf:20, delta:0,  color:'#89F336', star:false, label:'U18' },
    { n:19, score:16, outOf:20, delta:-5, color:'#667eea', star:false, label:'U19' },
    { n:20, score:16, outOf:20, delta:0,  color:'#667eea', star:false, label:'U20' },
    { n:'M2', score:92, outOf:125, delta:null, color:'#9f7aea', star:false, label:'M2', milestone:true },
    { n:21, score:18, outOf:20, delta:2, color:'#89F336', star:false, label:'U21' },
    { n:22, score:12, outOf:20, delta:-6, color:'#fc4e4e', star:false, label:'U22' },
    { n:23, score:15, outOf:20, delta:3, color:'#667eea', star:false, label:'U23' },
    { n:24, score:15, outOf:20, delta:0, color:'#667eea', star:false, label:'U24' },
    { n:25, score:14, outOf:20, delta:-1, color:'#667eea', star:false, label:'U25' },
    { n:26, score:11, outOf:20, delta:-3, color:'#fc4e4e', star:false, label:'U26' }
  ],

  // ── Unit log (newest first) ────────────────────────────────────────
  unitLog: [
    {
      n: 26,
      title: 'Unit 26 &mdash; Grammar Narrows to Error-Scan &middot; Cloze: Grammar Forms in the Blank &middot; Grammar: Label It to Find It',
      badge: '#fc4e4e',
      status: 'done',
      note: '11/20 (55%) &mdash; <strong>second-lowest score in the programme, but concentrated in 2 clearly-diagnosed causes, not a broad dip.</strong> The written-labelling escalation for error-scan did NOT transfer to the unscaffolded test &mdash; <strong>1/5 correct</strong>, and every wrong pick flagged a genuinely clean sentence rather than the real mismatch, the same signature as the last 3 tests, now confirmed across FOUR straight tests (1/10 total). Mixed-vs-Second backslid to a miss after a clean 2/2 at Unit 25 &mdash; one data point, needs a retest. <strong>Cloze&rsquo;s brand-new subjunctive strand failed all three attempts (0/3)</strong>, but with a crystal-clear cause: every miss chose the ordinary &ldquo;-s&rdquo; agreement form instead of the base form &mdash; an old habit overriding a new rule, not confusion. Compound-adjective hyphenation (also brand new) scored a clean 2/2. <strong>Vocab 6/6 &#9733; PERFECT</strong> for a THIRD straight test. Not a scattered overload dip &mdash; Vocab is untouched and one of two brand-new Cloze patterns hit 100%. &middot; Next: <strong>UNIT 27</strong> &mdash; Grammar shifts from click-labelling to high-volume unscaffolded written drilling, Cloze gets a &ldquo;trigger word first&rdquo; override habit for the subjunctive',
      tags: [
        { t:'Cloze 3/7 &#9888;', s:'background:#fff0f0;color:#c53030' },
        { t:'Grammar 2/7 &#10071;', s:'background:#fff0f0;color:#c53030' },
        { t:'Vocab 6/6 &#9733;', s:'background:#f0fff4;color:#276749' }
      ]
    },
    {
      n: 25,
      title: 'Unit 25 &mdash; Grammar Returns &middot; Cloze: RESULT vs CONTRAST Family Lock &middot; Grammar: Three Checks Reset &middot; Reading &amp; Vocab: Character Motivation',
      badge: '#667eea',
      status: 'done',
      note: '14/20 (70%) &mdash; <strong>a genuine mixed result, not a simple regression.</strong> The dedicated &ldquo;Three Checks Reset&rdquo; lesson worked exactly as designed for TWO of its three targets: <strong>Mixed-vs-Second Conditional discrimination is resolved (2/2)</strong> and <strong>gerund-vs-infinitive after &ldquo;regret&rdquo; is finally stable (2/2)</strong>, ending three straight tests of oscillation. But the third target &mdash; the &ldquo;which sentence contains an error?&rdquo; scan &mdash; failed BOTH attempts this unit, now missed on every single try across THREE consecutive tests (0/5 total). <strong>Cloze 4/7</strong> &mdash; regressed despite its own full dedicated RESULT-vs-CONTRAST lesson; two of the three misses confused the correct word with an UNUSED bank distractor, a new error shape. <strong>Vocab 6/6 &#9733; PERFECT</strong> for a second straight test, and the brand-new character-motivation skill passed cleanly on its first-ever real test. Not a scattered overload dip &mdash; Vocab is untouched and Grammar shows real, confirmed progress on 2 of 3 threads. &middot; Next: <strong>UNIT 26</strong> &mdash; Grammar narrows to just the error-scan format with a written/labelling-based approach, Cloze moves to its planned grammar-form-in-blank strand',
      tags: [
        { t:'Cloze 4/7 &#9888;', s:'background:#fff0f0;color:#c53030' },
        { t:'Grammar 4/7 (2/3 fixed &#127881;)', s:'background:#fff8e1;color:#744210' },
        { t:'Vocab 6/6 &#9733;', s:'background:#f0fff4;color:#276749' }
      ]
    },
    {
      n: 24,
      title: 'Unit 24 &mdash; Reading Strand Launches &middot; Cloze: So vs As a Result Lock &middot; Reading &amp; Vocab: Stories Behind the Lines',
      badge: '#667eea',
      status: 'done',
      note: '15/20 (75%) &mdash; <strong>same total as Unit 23, but a completely different shape.</strong> <strong>Vocab 6/6 &#9733; PERFECT</strong> on the Reading strand&rsquo;s first-ever narrative comprehension exposure &mdash; theme, detail-recall, and inference all correct cold. &ldquo;Futile&rdquo; finally fixed after two consecutive misses, and the near-opposite-check habit generalised to a THIRD brand-new word (&ldquo;resilient&rdquo;). <strong>Cloze 5/7</strong> &mdash; the so/as-a-result twin pair is now fully resolved in both directions, but a NEW RESULT-vs-CONTRAST family confusion surfaced (Q3, Q6, mirror-image misses). <strong>Grammar dropped to 4/7</strong> despite &ldquo;maintenance only&rdquo; status: Q9 EXACTLY repeats Unit 23&rsquo;s Q9 miss (now a confirmed 2-test repeat), Q12&rsquo;s gerund/infinitive item has oscillated missed&rarr;correct&rarr;missed across three straight tests, and Q8 is a new Mixed-vs-Second confusion, plausibly primed by recent Mixed Conditional teaching. Unlike Units 13/22, this is isolated to Grammar, not a scattered overload dip. &middot; Next: <strong>UNIT 25</strong> &mdash; Grammar gets a dedicated lesson again (3 evidence-based threads), Cloze gets a light RESULT-vs-CONTRAST family-lock touch, Reading/Vocab deepens with a new character-motivation skill',
      tags: [
        { t:'Cloze 5/7', s:'background:#fff8e1;color:#744210' },
        { t:'Grammar 4/7 &#9888;', s:'background:#fff0f0;color:#c53030' },
        { t:'Vocab 6/6 &#9733;', s:'background:#f0fff4;color:#276749' }
      ]
    },
    {
      n: 23,
      title: 'Unit 23 &mdash; CONSOLIDATION &middot; Cloze: Back to LEVEL Basics &middot; Grammar: Mixed Conditional Refresher',
      badge: '#667eea',
      status: 'done',
      note: '15/20 (75%) &mdash; <strong>still below the 80% pass bar, but a strong recovery from Unit 22&rsquo;s 60% &mdash; and the priority fix is CONFIRMED working.</strong> Q11, the direct retest of Unit 22&rsquo;s exact Mixed Conditional miss, was answered <strong>correctly</strong> &mdash; hard evidence the one-item refresher approach worked. The vocab near-opposite habit also <strong>generalised to a brand-new word</strong> (Q20, &ldquo;impartial&rdquo;), resisting a trap it was never taught on. <strong>Cloze 5/7</strong> &mdash; no cascade, though Q2/Q5 revealed a specific so/as-a-result twin-word mix-up hit in BOTH directions. <strong>Grammar 5/7</strong> &mdash; two new, isolated scan misses (Q9, Q13) unrelated to the fixed issue. <strong>Vocab 5/6</strong> &mdash; &ldquo;futile&rdquo; missed for a SECOND consecutive test, now a confirmed specific gap. Unlike Unit 22, this is not a scattered cross-section pattern &mdash; three narrow, nameable threads on top of real, confirmed progress. &middot; Next: <strong>UNIT 24</strong> &mdash; the Reading strand launches on schedule, with three light maintenance touches folded in for the residual threads',
      tags: [
        { t:'Cloze 5/7', s:'background:#fff8e1;color:#744210' },
        { t:'Grammar 5/7 (Q11 &#127881;)', s:'background:#fff8e1;color:#744210' },
        { t:'Vocab 5/6', s:'background:#fff8e1;color:#744210' }
      ]
    },
    {
      n: 22,
      title: 'Unit 22 &mdash; Cloze: Locked-In Check &middot; Grammar: More Error-ID (Gerund/Infinitive &amp; Plural) &middot; Vocab: Check for the Opposite',
      badge: '#fc4e4e',
      status: 'done',
      note: '12/20 (60%) &mdash; <strong>FAIL. A scattered, cross-section dip, not one clean skill gap &mdash; matches the Unit 13 overload signature.</strong> <strong>Cloze crashed to 3/7</strong> despite zero new lesson content that unit, incl. a LEVEL-only miss at Q5 (chose the clause-joiner &ldquo;so&rdquo; for a sentence-starter slot &mdash; more basic than the recent family mix-ups). <strong>Grammar 5/7</strong>: a previously-solid Mixed Conditional item (Q11) slipped alongside the two brand-new checks (Q12 gerund/infinitive, expected on first exposure); the and/but check (Q14, U21&rsquo;s miss) is now resolved. <strong>Vocab 4/6</strong>: missed &ldquo;futile&rdquo; (Q16) and &mdash; ironically &mdash; a near-opposite trap on &ldquo;audacious&rdquo; itself (Q20, chose &ldquo;ordinary&rdquo;), the very word that taught the opposite-check habit this unit. &middot; Next: <strong>UNIT 23 &mdash; CONSOLIDATION</strong> (2 lessons only, no new frameworks; Cloze LEVEL-check rapid drill, Grammar Mixed Conditional refresher + embedded vocab near-opposite generalisation check; normal-difficulty test; Reading strand pushed to Unit 24)',
      tags: [
        { t:'Cloze 3/7 &#9888;', s:'background:#fff0f0;color:#c53030' },
        { t:'Grammar 5/7', s:'background:#fff8e1;color:#744210' },
        { t:'Vocab 4/6', s:'background:#fff8e1;color:#744210' }
      ]
    },
    {
      n: 21,
      title: 'Unit 21 &mdash; Cloze: Anti-Cascade &amp; &ldquo;Despite&rdquo; &middot; Grammar: Beyond Conditionals (Solo Verbs &amp; And/But)',
      badge: '#89F336',
      status: 'done',
      note: '18/20 (90%) &mdash; <strong>PASS. The first direct test of the weighted U21&ndash;30 plan, and both priority fixes showed real progress.</strong> &ldquo;Despite&rdquo; as a genuine correct answer &mdash; the exact trap that triggered Milestone 2&rsquo;s Cloze cascade &mdash; was answered correctly (Q1), and there was <strong>NO cascade afterward</strong>: Q2&ndash;Q5 all correct, <strong>Cloze 6/7</strong>. The new SOLO-verb passive-restriction grammar check also landed correctly on its very first real-test exposure; the other brand-new check, and/but connector coherence, was missed once with no ripple effect &mdash; expected for a concept tested for the first time, <strong>Grammar 6/7</strong>. <strong>Vocabulary 6/6 &#9733; PERFECT.</strong> &middot; Next: <strong>UNIT 22</strong> &mdash; Grammar continues (gerund-vs-infinitive, singular/plural) with a light and/but recap folded in; Vocabulary adds the &ldquo;check for the opposite&rdquo; habit; Cloze at maintenance',
      tags: [
        { t:'Cloze 6/7', s:'background:#f0fff4;color:#276749' },
        { t:'Grammar 6/7', s:'background:#f0fff4;color:#276749' },
        { t:'Vocab 6/6 &#9733;', s:'background:#f0fff4;color:#276749' }
      ]
    },
    {
      n: 'M2',
      title: 'Milestone 2 &mdash; ASMOPSS-Structured (5 sections, 40 Q, weighted 2/3/5-pt scoring)',
      badge: '#9f7aea',
      status: 'done',
      note: '92/125 (74%) &mdash; <strong>did NOT clear the 80% pass bar, but this is one section&rsquo;s cascade sitting on top of four strong-to-perfect results.</strong> <strong>Vocabulary 8/8 &#9733; PERFECT</strong> (now MEETS TARGET) and <strong>Reading 8/8 &#9733; PERFECT</strong> &mdash; lands exactly on the long-identified ASMOPSS reading gap. <strong>Grammar 7/8</strong> incl. two brand-new error-ID items both correct COLD (never taught) &mdash; a genuinely good sign; the one miss (Q21) is plausibly primed by the today/now item right before it. <strong>Conversation 6/8</strong> on an entirely new, untaught idiom-comprehension format &mdash; still exceeds target cold. <strong>Cloze CRASHED to 1/8</strong>: gap 27 asked for &ldquo;despite&rdquo; as the CORRECT answer for the first time ever (previously only ever a distractor); getting it wrong triggered a genuine cascade through the next five gaps &mdash; the exact signature seen at U12 and U13, both SOFT/transient and fully recovered within 1&ndash;2 units. Achievement &asymp;87% (down slightly from 88%). &middot; Next: Prem sits the real ASMOPSS 2024 competition paper first, then <strong>UNIT 21</strong> with Cloze anti-cascade as the clear priority',
      tags: [
        { t:'Vocab 8/8 &#9733;', s:'background:#f0fff4;color:#276749' },
        { t:'Reading 8/8 &#9733;', s:'background:#f0fff4;color:#276749' },
        { t:'Grammar 7/8', s:'background:#f0fff4;color:#276749' },
        { t:'Conv 6/8', s:'background:#fff8e1;color:#744210' },
        { t:'Cloze 1/8 &#9888;', s:'background:#fff0f0;color:#c53030' }
      ]
    },
    {
      n: 20,
      title: 'Unit 20 &mdash; Cloze: Twin Words Mastery Check &middot; Grammar: &ldquo;Been&rdquo; Isn&rsquo;t the Test &middot; Reading &amp; Vocab: Inference &amp; Connotation',
      badge: '#667eea',
      status: 'done',
      note: '16/20 (80%) &mdash; <strong>the FIRST test ever completed in the new interactive single-page format &mdash; and both U19 target fixes are confirmed working.</strong> <strong>Grammar 5/7</strong> (up from 4/7): the &ldquo;been isn&rsquo;t the test&rdquo; fix held on a real DOER-type item (Q9), and the dormant mixed-conditional/&ldquo;today&rdquo; time-signal gap also closed (Q12) &mdash; real, confirmed progress. Two smaller new misses: a rushed basic ID slip (Q8) and a &ldquo;DOER=safe&rdquo; overcorrection (Q13, flagged a clean GETTER sentence while missing a real DOER-mismatch) &mdash; worth a light verbal reminder before Milestone 2. <strong>Cloze 6/7</strong>: one isolated CONTRAST-vs-TIME mix-up early in the passage (Q2), not a return of the resolved pacing pattern. <strong>Vocab 5/6</strong>: one unfamiliar-word miss (&ldquo;steadfast&rdquo;). Graded directly from the new JSON results schema &mdash; no manual transcription needed. &middot; Next: <strong>MILESTONE 2</strong> &mdash; ASMOPSS-structured (5 sections incl. Conversation + error-ID Grammar, 40 Q, weighted 2/3/5-pt scoring), test only, no lesson pack',
      tags: [
        { t:'Grammar 5/7 &#8593;', s:'background:#f0fff4;color:#276749' },
        { t:'Cloze 6/7', s:'background:#fff8e1;color:#744210' },
        { t:'Vocab 5/6', s:'background:#fff8e1;color:#744210' }
      ]
    },
    {
      n: 19,
      title: 'Unit 19 &mdash; Cloze: Twin Words Mastery &middot; Grammar: Been Isn&rsquo;t the Test &middot; Reading &amp; Vocab: Inference',
      badge: '#667eea',
      status: 'done',
      note: '16/20 (80%) &mdash; <strong>Cloze goes PERFECT for the first time in 9 units; Grammar surfaces one new, narrow, fixable confusion.</strong> <strong>Cloze 7/7 &#9733;</strong>: first perfect Cloze section since Unit 10 &mdash; the &ldquo;finish strong&rdquo; pacing fix fully resolved the fatigue slip that cost marks 3 units running (U15/U16/U18). <strong>Grammar 4/7</strong>: two misses (Q9, Q13) share one new cause &mdash; treating &ldquo;had + verb&rdquo; without &ldquo;been&rdquo; as automatically suspicious, when active-voice Thirds never need it (an over-correction from the U18 confirm-habit lesson); did NOT fall for a deliberate decoy, so the confirm-habit itself is working. The third miss (Q12) is a DORMANT mixed-conditional/time-signal pattern resurfacing. <strong>Vocab 5/6</strong>: one likely rush slip (&ldquo;reluctant&rdquo; &rarr; near-opposite). <strong>NEW: U20 is the FIRST unit delivered in the new interactive single-page HTML test format</strong> (docx retired from U20 onward, per Lui) &middot; Next: <strong>UNIT 20</strong> &mdash; dedicated Grammar fix (active/passive &ldquo;had&rdquo; + time-signal refresh), Cloze &amp; Vocab hold at maintenance',
      tags: [
        { t:'Cloze 7/7 &#9733;', s:'background:#f0fff4;color:#276749' },
        { t:'Grammar 4/7', s:'background:#fff8e1;color:#744210' },
        { t:'Vocab 5/6', s:'background:#fff8e1;color:#744210' }
      ]
    },
    {
      n: 18,
      title: 'Unit 18 &mdash; Cloze: While/Meanwhile Lock &middot; Grammar: Conditional Maintenance &middot; Reading &amp; Vocab: ASMOPSS Lift',
      badge: '#89F336',
      status: 'done',
      note: '17/20 (85%) &mdash; <strong>ties the programme high again, 3rd time in 4 units &mdash; and both misses are NEW, not repeats.</strong> <strong>Grammar 6/7</strong>: held steady; the one miss (Q9) was a false-positive &mdash; flagged a genuinely correct sentence just because its wording looked different, not a missed scan. <strong>Cloze 5/7</strong>: the targeted while/meanwhile fix WORKED (Q2 correct); a fresh moreover&harr;while swap hit the last two gaps &mdash; the same &ldquo;rushes the finish&rdquo; pacing pattern seen at U15/U16. <strong>Vocab 6/6 &#9733;</strong> &mdash; 4th clean sweep in 5 units. <strong>NEW:</strong> a quantitative script confirmed Prem&rsquo;s own feedback that MCQ correct answers are often the longest option and cluster toward B/C &mdash; anti-bias test-design rules now locked in from U19. &middot; Next: <strong>UNIT 19</strong> &mdash; cloze pacing habit, grammar confirm-step, continue the reading strand, apply the new MCQ balance rules',
      tags: [
        { t:'Grammar 6/7 &#127881;', s:'background:#f0fff4;color:#276749' },
        { t:'Cloze 5/7', s:'background:#fff8e1;color:#744210' },
        { t:'Vocab 6/6 &#9733;', s:'background:#f0fff4;color:#276749' }
      ]
    },
    {
      n: 17,
      title: 'Unit 17 &mdash; Cloze: Twin Words &amp; the Level &middot; Grammar: Error or Correct?',
      badge: '#89F336',
      status: 'done',
      note: '17/20 (85%) &mdash; <strong>a full recovery from the U16 dip &mdash; ties the programme high.</strong> <strong>Grammar 6/7</strong> &#127881;: removing the interleave and adding the &ldquo;circle ERROR or CORRECT first&rdquo; habit fixed the mode-switching problem immediately &mdash; Q8&ndash;Q13 all correct. The only miss, Q14, may be a test-design key ambiguity (two options are both arguably error-free) rather than a concept gap. <strong>Cloze 5/7</strong> &mdash; the twin-word slip moved from so/as-a-result to <em>while</em>&harr;<em>meanwhile</em> (Q2/Q3 swapped); the general twin rule held for the other two families. <strong>Vocab 6/6 &#9733;</strong> &mdash; back to perfect. &middot; Next: <strong>UNIT 18</strong> &mdash; isolate the while/meanwhile pair; keep the grammar approach unchanged; reopen a light 3rd strand (ASMOPSS reading) now that grammar is stable',
      tags: [
        { t:'Grammar 6/7 &#127881;', s:'background:#f0fff4;color:#276749' },
        { t:'Cloze 5/7', s:'background:#fff8e1;color:#744210' },
        { t:'Vocab 6/6 &#9733;', s:'background:#f0fff4;color:#276749' }
      ]
    },
    {
      n: 16,
      title: 'Unit 16 &mdash; Cloze: Finish Strong &middot; Grammar: Which One Is Correct?',
      badge: '#667eea',
      status: 'done',
      note: '13/20 (65%) &mdash; <strong>a dip after the 85% peak, but SOFT: it points at the test design, not lost knowledge.</strong> Grammar fell 6/7&rarr;3/7 YET the concepts held (Q8 identify, Q9 Will-Ban, Q11 Mixed all ✓, same as U15). The four scan items failed (Q10/Q12 find-error; Q13/Q14 which-correct) because the test INTERLEAVED the two directions &mdash; he reversed them (chose a correct sentence when asked for the error, and vice versa). <strong>Cloze 5/7</strong> (Q1/Q6 = a so&harr;as-a-result LEVEL swap &mdash; right function, wrong level). <strong>Vocab 5/6</strong> (jagged anti-clue slip). Coaching lesson: don&rsquo;t interleave error/correct; one direction, clearly flagged. &middot; Next: <strong>UNIT 17</strong> &mdash; &ldquo;circle the question word&rdquo; habit + twin-word cloze (punctuation decides the level)',
      tags: [
        { t:'Grammar 3/7 &#9888;', s:'background:#fff0f0;color:#c53030' },
        { t:'Cloze 5/7', s:'background:#fff8e1;color:#744210' },
        { t:'Vocab 5/6', s:'background:#fff8e1;color:#744210' }
      ]
    },
    {
      n: 15,
      title: 'Unit 15 &mdash; Cloze: Routine &amp; the Contrast Pair &middot; Grammar: The 4 Conditionals (standard)',
      badge: '#89F336',
      status: 'done',
      note: '17/20 (85%) &mdash; <strong>second straight rise (40&rarr;70&rarr;85) and the grammar breakthrough.</strong> &#127881; <strong>Grammar 6/7</strong> (up from 3/7): switching to the STANDARD 4 conditionals (tied to tenses) + &ldquo;read the result half first&rdquo; cracked the find-the-error format &mdash; he solved ALL THREE mismatch items (Q10/Q12/Q14) he&rsquo;d missed for months; only Q13 (reverse &ldquo;which is correct?&rdquo;) slipped. <strong>Vocab 6/6 &#9733;</strong> (solved). <strong>Cloze 5/7</strong> &mdash; the drilled although/however twins held (Q1,Q2 ✓); the only misses were Q5 &amp; Q7, a so&harr;moreover swap at the passage end. Lui&rsquo;s call (standard grammar + decision trees) fully vindicated. &middot; Next: <strong>UNIT 16</strong> &mdash; hold grammar (add a &ldquo;which is correct?&rdquo; drill); cloze finish-strong / so-vs-moreover',
      tags: [
        { t:'Grammar 6/7 &#127881;', s:'background:#f0fff4;color:#276749' },
        { t:'Vocab 6/6 &#9733;', s:'background:#f0fff4;color:#276749' },
        { t:'Cloze 5/7', s:'background:#fff8e1;color:#744210' }
      ]
    },
    {
      n: 14,
      title: 'Unit 14 &mdash; CONSOLIDATION &middot; Cloze: Decision Tree (from scratch) &middot; Grammar: Two Worlds (from scratch)',
      badge: '#667eea',
      status: 'done',
      note: '14/20 (70%) &mdash; <strong>a strong rebound (+30 pts off the U13 crash); the consolidation reset worked</strong> &middot; <strong>Cloze 5/7</strong> (more than doubled &mdash; from-scratch decision tree + &ldquo;master Step 1 first&rdquo;; the 2 misses were one although/however LEVEL swap, function right both times) &middot; <strong>Vocab 6/6 &#9733;</strong> (anchor restored &mdash; confirms U13 was rushing, not lost skill) &middot; <strong>Grammar 3/7</strong> (still the lone stuck skill: names a conditional + catches &ldquo;will&rdquo;, but every find-the-error item collapsed, default-guessing &ldquo;A&rdquo;). <strong>Prem said he doesn&rsquo;t get &ldquo;Maybe/Too-Late World&rdquo; &rarr; DROPPED.</strong> &middot; Next: <strong>UNIT 15</strong> &mdash; grammar rebuilt as the STANDARD 4 conditionals (Zero/First/Second/Third) tied to tenses; cloze keeps its tree + an although/however drill',
      tags: [
        { t:'Cloze 5/7', s:'background:#fff8e1;color:#744210' },
        { t:'Vocab 6/6 &#9733;', s:'background:#f0fff4;color:#276749' },
        { t:'Grammar 3/7 &#9888;', s:'background:#fff0f0;color:#c53030' }
      ]
    },
    {
      n: 13,
      title: 'Unit 13 &mdash; Cloze: Pencil &amp; Commit (decision tree) &middot; Grammar: Find the Error &middot; Writing &amp; Vocabulary',
      badge: '#fc4e4e',
      status: 'done',
      note: '8/20 (40%) &mdash; a sharp ALL-section dip; reads as <strong>overload + confidence, NOT lost skill</strong> (he was 80% three weeks ago) &middot; <strong>Cloze 2/7</strong> (engaged the tree but mislabelled the level on mid-sentence gaps, then cascaded; kept Q2 although + Q6 meanwhile) &middot; <strong>Grammar 2/7</strong> (Q8 Second-ID + Q9 Will Ban only &mdash; the find-the-error scan didn&rsquo;t fire, defaulted to guessing Q10&ndash;Q14) &middot; <strong>Vocab 4/6</strong> &mdash; even his anchor slipped, on two ANTI-CLUE misreads (ravenous&rarr;&ldquo;tired&rdquo;, dazzling&rarr;&ldquo;dark&rdquo;): the signature of rushing, not a gap. Trend U11 80 &rarr; U12 60 &rarr; U13 40. Cause points at coaching (a new framework almost every unit). DECISION: STOP adding &middot; Next: <strong>UNIT 14 = CONSOLIDATION</strong> (2 lessons, one locked method per skill, rebuild confidence; ease ASMOPSS pressure; check in with Prem)',
      tags: [
        { t:'Cloze 2/7', s:'background:#fff0f0;color:#c53030' },
        { t:'Grammar 2/7', s:'background:#fff0f0;color:#c53030' },
        { t:'Vocab 4/6', s:'background:#fff8e1;color:#744210' }
      ]
    },
    {
      n: 12,
      title: 'Unit 12 &mdash; Cloze: Caused or Surprise? &middot; Grammar: Two Worlds (Maybe/Too-Late) &middot; Reading &amp; Vocabulary',
      badge: '#fc4e4e',
      status: 'done',
      note: '12/20 (60%) &mdash; one section, one cause &middot; <strong>Vocab 6/6 &#9733; AGAIN</strong> (solved; now ~at target) &middot; Grammar 4/7 (can VERIFY a sentence &mdash; Q13 reverse cross-check, self-corrected &mdash; but cannot SCAN-and-FIND the 2|3 mismatch: Q10/Q12/Q14 all missed) &middot; <strong>Cloze 2/7 &mdash; a cascade/overload collapse</strong> (paper covered in crossings-out; kept only Q3 however + Q6 meanwhile). Cause: a new RESULT-vs-CONTRAST step stacked on the working level-split. Was 5/7 at U11 &mdash; should rebound. &middot; Next: UNIT 13 (simplify cloze + drill grammar FIND-the-error)',
      tags: [
        { t:'Vocab 6/6 &#9733;', s:'background:#f0fff4;color:#276749' },
        { t:'Grammar 4/7', s:'background:#fff8e1;color:#744210' },
        { t:'Cloze 2/7', s:'background:#fff0f0;color:#c53030' }
      ]
    },
    {
      n: 11,
      title: 'Unit 11 &mdash; Cloze: Same Word, Two Levels &middot; Grammar: The Two-Number Habit &middot; Reading &amp; Vocabulary',
      badge: '#89F336',
      status: 'done',
      note: '16/20 (80%) &mdash; strong Phase 2 opener, level with the programme high &middot; <strong>Vocab 6/6 &#9733;</strong> (first perfect since U8r &mdash; story-feel trap beaten: jubilant, unfazed) &middot; Cloze 5/7 (meanwhile/while level-split FIXED &mdash; Q3, Q4; 2 misses = a so&harr;however function swap at Q5/Q6) &middot; Grammar 5/7 (mismatch cross-check 2/4, up from 0/2 at M1, incl. a self-correction; Will Ban/Had/Mixed solid; Q10, Q12 still missed) &middot; Prem found the grammar lesson too tough &rarr; U12 goes gentler &middot; Next: UNIT 12',
      tags: [
        { t:'Vocab 6/6 &#9733;', s:'background:#f0fff4;color:#276749' },
        { t:'Cloze 5/7',   s:'background:#fff8e1;color:#744210' },
        { t:'Grammar 5/7', s:'background:#fff8e1;color:#744210' }
      ]
    },
    {
      n: 'M1',
      title: 'Milestone 1 &mdash; Phase 1 Review (28 marks): Cloze &middot; Grammar &middot; Vocabulary &middot; Reading',
      badge: '#9f7aea',
      status: 'done',
      note: '20/28 (71%) &mdash; Phase 1 complete, <strong>Phase 2 GREENLIT</strong> &middot; Reading 6/6 &#9733; (cold, never taught &mdash; incl. simile, author&rsquo;s purpose, critical evaluation; the supposed Phase 2 gaps are smaller than feared) &middot; Vocab 5/6 (best at difficulty; beat both trap types) &middot; Cloze 5/8 (core resolved &mdash; although + despite held; the 3 misses were all the Advanced meanwhile/while level-split) &middot; Grammar 4/8 (Had Test + Will Ban RESOLVED &amp; retired; mismatch cross-check still 0/2 &mdash; the #1 U11 focus) &middot; Next: UNIT 11 (Phase 2 begins)',
      tags: [
        { t:'Reading 6/6 &#9733;', s:'background:#e0f2f1;color:#00695c' },
        { t:'Vocab 5/6',   s:'background:#f0fff4;color:#276749' },
        { t:'Cloze 5/8',   s:'background:#fff8e1;color:#744210' },
        { t:'Grammar 4/8', s:'background:#fff8e1;color:#744210' }
      ]
    },
    {
      n: 10,
      title: 'Unit 10 &mdash; Cloze: Pencil Routine &middot; Grammar: Mismatch Cross-Check &middot; Vocabulary: Quote Verification',
      badge: '#89F336',
      status: 'done',
      note: '16/20 (80%) &#127775; PROGRAMME HIGH &mdash; +3 from U9; three consecutive rises; first score at the 80% mastery line &middot; Cloze 7/7 &#9733; (first perfect cloze ever &mdash; pencil routine executed on paper: S/J labels + &ldquo;DISTRACTOR&rdquo; written on despite; U9-replica trap at Q1 passed) &middot; Grammar 5/7 (Had Test 2/3 consecutive; Will Ban RESOLVED; Mixed stable; BOTH mismatch Qs missed &mdash; correct sentences flagged by feel, no pencil labels) &middot; Vocab 4/6 (painstaking word-feel + wistful topic-feel taken; triumphant trap rejected) &middot; Next: MILESTONE 1',
      tags: [
        { t:'Cloze 7/7 &#9733;', s:'background:#f0fff4;color:#276749' },
        { t:'Grammar 5/7', s:'background:#fff8e1;color:#744210' },
        { t:'Vocab 4/6',   s:'background:#fff8e1;color:#744210' }
      ]
    },
    {
      n: 9,
      title: 'Unit 9 &mdash; Cloze: Structural Level &middot; Grammar: Had Test Drill &middot; Vocabulary: Harder Anchoring',
      badge: '#667eea',
      status: 'done',
      note: '13/20 (65%) &mdash; +1 from U8r; second-best ever &middot; Cloze 3/7 (Q1 structural error &rarr; Q6 Q7 cascade; Q5 although/while function) &middot; Grammar 6/7 &#127775; (Had Test 3/3 after 4 failed tests &mdash; reflex drill worked; only Q14 Advanced mismatch missed) &middot; Vocab 4/6 at raised difficulty (Q16 eloquent word-feel trap + Q20 serene topic-feel trap &mdash; Step 3 verification skipped)',
      tags: [
        { t:'Cloze 3/7',   s:'background:#fff8e1;color:#744210' },
        { t:'Grammar 6/7', s:'background:#e6fffa;color:#1e8b68' },
        { t:'Vocab 4/6',   s:'background:#fff8e1;color:#744210' }
      ]
    },
    {
      n: 8,
      title: 'Unit 8 (Revamped) &mdash; Cloze: Clause-Joiner Functions &middot; Grammar: Conditional Consolidation &middot; Vocabulary: Passage Anchoring',
      badge: '#f6993f',
      status: 'done',
      note: '12/20 (60%) &mdash; +1 from U7 &middot; Cloze 2/7 &#10007;&#10007; (Q2 Q3 Q4 Q6 Q7 wrong &mdash; structural level + distractor) &middot; Grammar 4/7 (Q10 Q11 Q12 wrong &mdash; Had Test failure + Mixed signal missed) &middot; Vocab 6/6 &#127775; (perfect &mdash; Quote and Match breakthrough)',
      tags: [
        { t:'Cloze 2/7',   s:'background:#fff0f0;color:#c53030' },
        { t:'Grammar 4/7', s:'background:#fff8e1;color:#744210' },
        { t:'Vocab 6/6',   s:'background:#f0fff4;color:#276749' }
      ]
    },
    {
      n: 7,
      title: 'Unit 7 &mdash; Contrast Identification (Cloze) &middot; Grammar: Conditional Time Signals &amp; the &ldquo;had&rdquo; Test &middot; Vocabulary: Inner-State Words',
      badge: '#fc4e4e',
      status: 'done',
      note: '11/20 (55%) &mdash; ties U1 for lowest score &middot; Cloze 5/7 (Q1 Q4 wrong &mdash; RESULT/CONTRAST swap at clause-joiner level) &middot; Grammar 3/7 &#10007; (Q8 Q11 Q12 Q13 wrong &mdash; Will Ban regressed; &ldquo;had+adj&rdquo; unresolved; mismatch unspotted) &middot; Vocab 3/6 &#10007; (Q16 Q18 Q20 wrong &mdash; near-def missed; state vs quality; situation emotion)',
      tags: [
        { t:'Cloze 5/7',    s:'background:#fff8e1;color:#744210' },
        { t:'Grammar 3/7',  s:'background:#fff0f0;color:#c53030' },
        { t:'Vocab 3/6',    s:'background:#fff0f0;color:#c53030' }
      ]
    },
    {
      n: 6,
      title: 'Unit 6 &mdash; Sort First Fill Second (Cloze) &middot; Grammar: Conditional Flowchart &amp; Error Spotting &middot; Vocabulary: Near-Synonym Precision',
      badge: '#89F336',
      status: 'done',
      note: '15/20 (75%) &#127775; New high &middot; Cloze 5/7 &#10003; (Q2 distractor trap + Q3 CONTRAST function) &middot; Grammar 6/7 &#10003; (Q13 Mixed time signal missed; Q8 guessed) &middot; Vocab 4/6 (Q16 inner-state word + Q20 near-synonym trap)',
      tags: [
        { t:'Cloze 5/7',   s:'background:#e6fffa;color:#1e8b68' },
        { t:'Grammar 6/7', s:'background:#e6fffa;color:#1e8b68' },
        { t:'Vocab 4/6',   s:'background:#fff0f0;color:#c53030' }
      ]
    },
    {
      n: 5,
      title: 'Unit 5 &mdash; Sort First Fill Second (Cloze) &middot; Grammar: Mixed Conditional (Present Result) &middot; Subtle Vocabulary Inference',
      badge: '#fc4e4e',
      status: 'done',
      note: '12/20 (60%) &middot; Cloze 3/7 &#10007; (Q1 Q3 Q6 Q7 wrong &mdash; structural type confusion + distractor trap + function error) &middot; Grammar 4/7 (Q10 Q11 Q12 wrong &mdash; will/would + Mixed identification + if-clause mismatch) &middot; Vocab 5/6 (Q17 wrong &mdash; precision vs instinct)',
      tags: [
        { t:'Cloze 3/7',    s:'background:#fff0f0;color:#c53030' },
        { t:'Grammar 4/7',  s:'background:#fff0f0;color:#c53030' },
        { t:'Vocab 5/6',    s:'background:#fff8e1;color:#744210' }
      ]
    },
    {
      n: 4,
      title: 'Unit 4 &mdash; Connector Structures &middot; Grammar: Third &amp; Mixed Conditionals &middot; Vocabulary Inference',
      badge: '#f6993f',
      status: 'done',
      note: '14/20 (70%) &middot; Cloze 4/7 &#10003; (Q2 Q5 Q7 wrong &mdash; ADDITION vs RESULT confusion + distractor trap) &middot; Grammar 4/7 &#10007; (Q10 Q13 Q14 wrong &mdash; Mixed Conditional present-result form) &middot; Vocab 6/6 &#127775; (perfect)',
      tags: [
        { t:'Cloze 4/7',    s:'background:#fff8e1;color:#744210' },
        { t:'Grammar 4/7',  s:'background:#fff0f0;color:#c53030' },
        { t:'Vocab 6/6',    s:'background:#f0fff4;color:#276749' }
      ]
    },
    {
      n: 3,
      title: 'Unit 3 &mdash; Connector Function Mapping &middot; Grammar: Second Conditional &middot; Reading: Inference &amp; Main Idea',
      badge: '#f6993f',
      status: 'done',
      note: '13/20 (65%) &middot; Cloze 2/7 &#10007;&#10007; (structural confusion: sentence-starter vs clause-joiner + function errors) &middot; Grammar 6/7 &#10003; (Q12: First/Second hybrid error) &middot; Reading debut 5/6 &#10003; (Q18: &ldquo;undeterred&rdquo; inference miss)',
      tags: [
        { t:'Cloze 2/7',    s:'background:#fff0f0;color:#c53030' },
        { t:'Grammar 6/7',  s:'background:#e6fffa;color:#1e8b68' },
        { t:'Reading 5/6',  s:'background:#ebf4ff;color:#2b6cb0' }
      ]
    },
    {
      n: 2,
      title: 'Unit 2 &mdash; Connectors &amp; Signal Words &middot; Grammar: Zero &amp; First Conditionals &middot; Connotation &amp; Nuance',
      badge: '#f6993f',
      status: 'done',
      note: '14/20 (70%) &middot; Cloze 3/7 &#10007;&#10007; &middot; Grammar 5/7 &#10003; (major rebound) &middot; Vocab 6/6 &#10003;&#10003; &middot; Connector rotation error (Q1 Q4 Q5 Q6 &mdash; all 4 words known, misassigned by function) &middot; Zero vs First Conditional edge cases (Q8 Q14)',
      tags: [
        { t:'Cloze 3/7',    s:'background:#fff0f0;color:#c53030' },
        { t:'Grammar 5/7',  s:'background:#e6fffa;color:#1e8b68' },
        { t:'Vocab 6/6',    s:'background:#f0fff4;color:#276749' }
      ]
    },
    {
      n: 1,
      title: 'Unit 1 &mdash; Cloze &middot; Grammar: Conditionals &middot; Vocab in Context',
      badge: '#fc4e4e',
      status: 'done',
      note: '11/20 (55%) &middot; Cloze 5/7 &#10003; &middot; Grammar 1/7 &#10007;&#10007; (critical) &middot; Vocab 5/6 &#10003; &middot; Connector swap Q5/Q6 &middot; Conditional forms need re-teaching from Zero upward',
      tags: [
        { t:'Cloze 5/7',    s:'background:#e6fffa;color:#1e8b68' },
        { t:'Grammar 1/7',  s:'background:#fff0f0;color:#c53030' },
        { t:'Vocab 5/6',    s:'background:#f0fff4;color:#276749' }
      ]
    }
  ],

  // ── Priority gaps ────────────────────────────────────────────────
  priorityGaps: [
    {
      label:     'Cloze Test &mdash; systemic gap (Priority 1)',
      pill:      'p1', pillText: 'Priority &#9888;',
      score:     'ASMOPSS 10/20 (50%). Errors at ALL difficulty levels including Basic (Q23 &#10007;). Cloze is the intersection of grammar + vocabulary + text coherence. Must resolve Basic-level errors before advancing. Phase 1 focus: 2 cloze passages per session until Basic-level questions are 100% reliable.',
      fillClass: 'g1', fillPct: 18
    },
    {
      label:     'Vocabulary &mdash; Intermediate / Applied level',
      pill:      'p1', pillText: 'Priority &#9888;',
      score:     'ASMOPSS 12/20 (60%). Q8 &#10007; Intermediate, Q9 &#10007; Applied. Knows words at surface level but struggles with nuance, connotation, and advanced context usage. Phase 1 target: 10 new words/week with word family maps and context-based usage.',
      fillClass: 'g1', fillPct: 28
    },
    {
      label:     'Grammar &mdash; complex structures (Intermediate / Applied)',
      pill:      'p2', pillText: 'Monitor &#128992;',
      score:     'ASMOPSS 12/20 (60%). Q15 &#10007; Intermediate, Q17 &#10007; Applied. Conditionals, tense consistency, and clause embedding are not yet secure. Phase 1 focus: conditional sentences (if I went&hellip; I would), complex tenses, clause embedding.',
      fillClass: 'g2', fillPct: 35
    },
    {
      label:     'Writing precision &mdash; Proficient ceiling',
      pill:      'p2', pillText: 'Develop &#128218;',
      score:     'School writing 22/25 &mdash; all dimensions Proficient. Simple vocabulary (&ldquo;very hard&rdquo;, &ldquo;a lot more&rdquo;), repetitive sentence openings (&ldquo;I would also like&hellip;&rdquo; &times;2), tense slips in conditionals. Phase 2 target: 3 sentence types per paragraph, no two consecutive openings the same, 2+ above-grade-level words per paragraph.',
      fillClass: 'g2', fillPct: 42
    },
    {
      label:     'Higher-order reading &mdash; Evaluating &amp; Reflecting',
      pill:      'p2', pillText: 'Develop &#128218;',
      score:     'ISA 2026 (Gr.4) &mdash; at/above median for Grade 4, but inference, author&rsquo;s purpose, and evaluating &amp; reflecting are the hardest ISA reading domain. Literal retrieval is solid; higher-order tasks are where Top 5% scores are won. Phase 2 priority.',
      fillClass: 'g2', fillPct: 38
    },
    {
      label:     'Conversation &mdash; EXCEEDS TARGET',
      pill:      'ps', pillText: 'Solid &#10003;',
      score:     'ASMOPSS Conversation 20/20 (100%) &mdash; including Q6&#9733; (only 21.6% correct). Natural communicator. No work needed here &mdash; maintain and leverage as a confidence base.',
      fillClass: 'gs', fillPct: 100
    }
  ],

  radarLegendBaseline: 'Baseline'
};

// ── Computed helpers ──────────────────────────────────────────────────
PREM_ENGLISH.skillSum    = function() { return this.skills.reduce(function(s,k){ return s+k.c; }, 0); };
PREM_ENGLISH.targetSum   = function() { return this.skills.reduce(function(s,k){ return s+k.t; }, 0); };
PREM_ENGLISH.achievement = function() { return Math.round(this.skillSum() / this.targetSum() * 100); };
PREM_ENGLISH.skillColor  = function(c, t) {
  var r = c / t;
  return r >= 1 ? '#43e97b' : r >= 0.85 ? '#f6993f' : '#fc4e4e';
};

// ── Render: unit status badge (topbar) ────────────────────────────────
PREM_ENGLISH.renderUnitBadge = function(id) {
  var el = document.getElementById(id);
  if (!el) return;
  var cu = this.currentUnit;
  el.textContent = 'Unit ' + cu.n + ' — ' + cu.status;
  el.className = el.className.replace(/\btb-orange\b|\btb-green\b/g,'').trim();
  el.className += (cu.status === 'Test Pending') ? ' tb-orange' : ' tb-green';
};

// ── Render: skill bars ────────────────────────────────────────────────
PREM_ENGLISH.renderSkillBars = function(containerId, showGap) {
  var el = document.getElementById(containerId);
  if (!el) return;
  var html = '';
  this.skills.forEach(function(s) {
    var col = PREM_ENGLISH.skillColor(s.c, s.t);
    var w   = Math.min(100, Math.round(s.c / s.t * 100));
    var gap = s.t - s.c;
    var gapStyle = gap > 0
      ? (gap > 15 ? 'color:#c53030' : 'color:#f6993f')
      : 'color:#43e97b';
    html += '<div class="skill-row">';
    html += '<div class="skill-name">' + s.name + '</div>';
    html += '<div class="skill-track"><div class="skill-fill" style="width:' + w + '%;background:' + col + '"></div></div>';
    if (showGap) {
      html += '<div class="skill-pct">' + s.c + '</div>';
      html += '<div class="skill-gap" style="' + gapStyle + '">' + (gap > 0 ? '+' + gap : '&#10003;') + '</div>';
    } else {
      html += '<span class="skill-pct">' + s.c + '</span>';
    }
    html += '</div>';
  });
  el.innerHTML = html;
};

// ── Render: achievement % bar ─────────────────────────────────────────
PREM_ENGLISH.renderAchievement = function(pctId, barId, labelId) {
  var pct = this.achievement();
  var p = document.getElementById(pctId); if (p) p.textContent = pct + '%';
  var b = document.getElementById(barId); if (b) b.style.width  = pct + '%';
  var l = document.getElementById(labelId); if (l) l.textContent = 'vs Top 5% target · ' + pct + '% achieved';
};

// ── Render: score line chart (SVG) ───────────────────────────────────
PREM_ENGLISH.renderScoreChart = function(containerId) {
  var container = document.getElementById(containerId);
  if (!container) return;
  var scores = this.scores;
  if (!scores || scores.length === 0) {
    container.innerHTML = '<div style="text-align:center;color:#a0aec0;font-size:11px;padding:20px 0">No unit tests yet &mdash; Unit 1 in progress</div>';
    return;
  }
  var logMap = {};
  (this.unitLog || []).forEach(function(u) { logMap[u.n] = u; });
  var outOf = this.outOf || 20;
  var ns = 'http://www.w3.org/2000/svg';
  var W = 540, H = 224;
  var PL = 44, PR = 82, PT = 18, PB = 56;
  var pw = W - PL - PR, ph = H - PT - PB;
  var x0 = PL, y0 = PT, x1 = PL + pw, y1 = PT + ph;
  var yMin = 40, yMax = 100;
  function pctY(pct) { return y0 + ph * (yMax - pct) / (yMax - yMin); }
  function ptX(i, tot) { return tot <= 1 ? x0 + pw / 2 : x0 + (i / (tot - 1)) * pw; }
  function dotCol(pct) {
    if (pct >= 75) return '#1e8b68';
    if (pct >= 65) return '#667eea';
    if (pct >= 55) return '#f6993f';
    return '#fc4e4e';
  }
  function mk(tag, attrs) {
    var e = document.createElementNS(ns, tag);
    for (var k in attrs) { if (attrs.hasOwnProperty(k)) e.setAttribute(k, attrs[k]); }
    return e;
  }
  function tx(content, attrs) {
    var e = document.createElementNS(ns, 'text');
    for (var k in attrs) { if (attrs.hasOwnProperty(k)) e.setAttribute(k, attrs[k]); }
    e.textContent = content;
    return e;
  }
  var svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
  svg.setAttribute('width', '100%');
  svg.style.cssText = 'display:block;overflow:visible';
  // Y-axis grid
  [40, 50, 60, 70, 80, 90, 100].forEach(function(pct) {
    var y = pctY(pct);
    svg.appendChild(mk('line', { x1: x0, y1: y, x2: x1, y2: y, stroke: '#e8edf5', 'stroke-width': '1' }));
    svg.appendChild(tx(pct + '%', { x: x0 - 6, y: y + 3.5, 'text-anchor': 'end', 'font-size': '9', fill: '#a0aec0' }));
  });
  // Reference lines (mastery threshold revised 87% → 80%, 12 Jun 2026)
  var r80y = pctY(80), r93y = pctY(93);
  svg.appendChild(mk('line', { x1: x0, y1: r80y, x2: x1, y2: r80y, stroke: '#f6993f', 'stroke-width': '1.5', 'stroke-dasharray': '6,4' }));
  svg.appendChild(tx('80% mastery', { x: x1 + 5, y: r80y + 3.5, 'font-size': '8.5', fill: '#f6993f', 'font-weight': '700' }));
  svg.appendChild(mk('line', { x1: x0, y1: r93y, x2: x1, y2: r93y, stroke: '#1e8b68', 'stroke-width': '1.5', 'stroke-dasharray': '6,4' }));
  svg.appendChild(tx('93% target', { x: x1 + 5, y: r93y + 3.5, 'font-size': '8.5', fill: '#1e8b68', 'font-weight': '700' }));
  // Data points
  var n = scores.length;
  var pts = scores.map(function(s, i) {
    var oof = s.outOf || outOf;
    var pct = s.score / oof * 100;
    return { x: ptX(i, n), y: pctY(pct), pct: pct, s: s, oof: oof };
  });
  // Rolling 3-unit average
  var rollAvg = pts.map(function(p, i) {
    var sl = pts.slice(Math.max(0, i - 2), i + 1);
    return sl.reduce(function(a, q) { return a + q.pct; }, 0) / sl.length;
  });
  if (n >= 2) {
    var btop = rollAvg.map(function(a, i) { return { x: pts[i].x, y: pctY(Math.min(yMax, a + 4)) }; });
    var bbot = rollAvg.map(function(a, i) { return { x: pts[i].x, y: pctY(Math.max(yMin, a - 4)) }; });
    var bPts = btop.map(function(p) { return p.x + ',' + p.y; })
                   .concat(bbot.slice().reverse().map(function(p) { return p.x + ',' + p.y; })).join(' ');
    svg.appendChild(mk('polygon', { points: bPts, fill: 'rgba(159,122,234,0.1)', stroke: 'none' }));
    var avgD = rollAvg.map(function(a, i) { return (i === 0 ? 'M' : 'L') + pts[i].x + ',' + pctY(a); }).join('');
    svg.appendChild(mk('path', { d: avgD, fill: 'none', stroke: '#9f7aea', 'stroke-width': '1.5', 'stroke-dasharray': '6,4' }));
    var lineD = pts.map(function(p, i) { return (i === 0 ? 'M' : 'L') + p.x + ',' + p.y; }).join('');
    svg.appendChild(mk('path', { d: lineD, fill: 'none', stroke: '#cbd5e0', 'stroke-width': '2' }));
  }
  // Tooltip
  var tip = document.createElement('div');
  tip.style.cssText = 'position:absolute;background:#1a1a2e;color:#fff;border-radius:8px;padding:8px 12px;font-size:11px;line-height:1.7;pointer-events:none;opacity:0;transition:opacity 0.15s;z-index:200;box-shadow:0 4px 16px rgba(0,0,0,0.3);max-width:230px;white-space:normal';
  container.style.position = 'relative';
  // Markers
  pts.forEach(function(p, i) {
    var s = p.s;
    var isMilestone = !!s.milestone;
    var isPerfect = s.score === p.oof;
    var col = dotCol(p.pct);
    if (isPerfect) {
      svg.appendChild(mk('circle', { cx: p.x, cy: p.y, r: '9', fill: '#ffd700', stroke: '#b7791f', 'stroke-width': '1.5' }));
      svg.appendChild(tx('★', { x: p.x, y: p.y + 4.5, 'text-anchor': 'middle', 'font-size': '11', fill: '#744210' }));
    } else if (isMilestone) {
      var d = 8;
      svg.appendChild(mk('polygon', {
        points: [p.x+','+(p.y-d),(p.x+d)+','+p.y,p.x+','+(p.y+d),(p.x-d)+','+p.y].join(' '),
        fill: '#9f7aea', stroke: '#6b46c1', 'stroke-width': '1.5'
      }));
      svg.appendChild(tx('M', { x: p.x, y: p.y + 3.5, 'text-anchor': 'middle', 'font-size': '8', fill: 'white', 'font-weight': '700' }));
    } else {
      svg.appendChild(mk('circle', { cx: p.x, cy: p.y, r: '8', fill: col, stroke: 'white', 'stroke-width': '2' }));
      svg.appendChild(tx(String(s.score), { x: p.x, y: p.y + 3.5, 'text-anchor': 'middle', 'font-size': '9', fill: 'white', 'font-weight': '700' }));
    }
    var hit = mk('circle', { cx: p.x, cy: p.y, r: '14', fill: 'transparent', cursor: 'pointer' });
    svg.appendChild(hit);
    var logEntry = logMap[s.n];
    var titleRaw = logEntry ? logEntry.title : '';
    var topicsPart = titleRaw.replace(/&mdash;/g, '-').replace(/&middot;/g, '·')
                             .replace(/&amp;/g, '&').replace(/&ldquo;/g, '"').replace(/&rdquo;/g, '"')
                             .replace(/<[^>]*>/g, '');
    var dIdx = topicsPart.indexOf(' - ');
    var topics = dIdx > -1 ? topicsPart.substring(dIdx + 3) : topicsPart;
    if (topics.length > 65) topics = topics.substring(0, 62) + '...';
    var delta = s.delta;
    var dStr  = (delta === null || delta === undefined) ? '' : (delta >= 0 ? ' (+' + delta + ' ↑)' : ' (' + delta + ' ↓)');
    var dCol  = (delta === null || delta === undefined) ? '' : (delta >= 0 ? 'color:#43e97b' : 'color:#f6993f');
    var tipHtml = '<strong style="font-size:12px;color:#89F336">' + (s.label || ('U' + s.n)) + '</strong><br>' +
      '<span style="color:#e2e8f0">' + s.score + '/' + p.oof + '   ' + Math.round(p.pct) + '%' +
      (dStr ? '<span style="' + dCol + '">' + dStr + '</span>' : '') + '</span>';
    if (topics) tipHtml += '<br><span style="color:#a0aec0;font-size:10px">' + topics + '</span>';
    (function(hx, hy, html) {
      hit.addEventListener('mouseenter', function() {
        tip.innerHTML = html;
        var cR = container.getBoundingClientRect();
        var sR = svg.getBoundingClientRect();
        var sx = sR.width / W, sy = sR.height / H;
        var px = (hx * sx) + (sR.left - cR.left);
        var py = (hy * sy) + (sR.top  - cR.top);
        var tipW = 220;
        tip.style.left = Math.max(0, Math.min(px - tipW / 2, cR.width - tipW - 4)) + 'px';
        tip.style.top  = Math.max(0, py - 80) + 'px';
        tip.style.opacity = '1';
      });
      hit.addEventListener('mouseleave', function() { tip.style.opacity = '0'; });
    })(p.x, p.y, tipHtml);
  });
  // X-axis labels
  pts.forEach(function(p) {
    svg.appendChild(tx(p.s.label || ('U' + p.s.n), {
      x: p.x, y: y1 + 14, 'text-anchor': 'middle', 'font-size': '9.5', fill: '#4a5568', 'font-weight': '600'
    }));
    svg.appendChild(tx(Math.round(p.pct) + '%', {
      x: p.x, y: y1 + 26, 'text-anchor': 'middle', 'font-size': '8.5', fill: '#a0aec0'
    }));
  });
  // Legend
  var legY = H - 10;
  var legItems = [
    { type: 'circle',  col: '#667eea', label: 'Unit test' },
    { type: 'diamond', col: '#9f7aea', label: 'Milestone' },
    { type: 'star',    col: '#ffd700', label: 'Perfect' },
    { type: 'dash',    col: '#9f7aea', label: '3-unit avg' },
    { type: 'dash',    col: '#f6993f', label: '80% mastery' },
    { type: 'dash',    col: '#1e8b68', label: '93% target' }
  ];
  var lx = x0;
  legItems.forEach(function(item) {
    if (item.type === 'circle') {
      svg.appendChild(mk('circle', { cx: lx+5, cy: legY, r: '4', fill: item.col, stroke: 'white', 'stroke-width': '1' }));
    } else if (item.type === 'diamond') {
      var d = 4;
      svg.appendChild(mk('polygon', { points:[(lx+5)+','+(legY-d),(lx+9)+','+legY,(lx+5)+','+(legY+d),(lx+1)+','+legY].join(' '), fill: item.col }));
    } else if (item.type === 'star') {
      svg.appendChild(mk('circle', { cx: lx+5, cy: legY, r: '4', fill: item.col }));
      svg.appendChild(tx('★', { x: lx+5, y: legY+2.5, 'text-anchor': 'middle', 'font-size': '6', fill: '#744210' }));
    } else {
      svg.appendChild(mk('line', { x1: lx+1, y1: legY, x2: lx+11, y2: legY, stroke: item.col, 'stroke-width': '1.5', 'stroke-dasharray': '4,3' }));
    }
    svg.appendChild(tx(item.label, { x: lx+14, y: legY+3.5, 'font-size': '8.5', fill: '#718096' }));
    lx += item.label.length * 5.2 + 20;
  });
  container.innerHTML = '';
  container.style.position = 'relative';
  container.appendChild(svg);
  container.appendChild(tip);
};

// ── Render: session log (with filter: recent5 | all | pending | done | milestones) ─
PREM_ENGLISH.isMilestoneEntry = function(u) {
  return typeof u.n === 'string' && u.n.charAt(0) === 'M';
};
PREM_ENGLISH.renderSessionLog = function(containerId, filter, countId) {
  var el = document.getElementById(containerId);
  if (!el) return;
  var all = this.unitLog || [];
  filter = filter || 'recent5';

  if (all.length === 0) {
    if (countId) { var c0 = document.getElementById(countId); if (c0) c0.textContent = 'Showing 0 of 0'; }
    el.innerHTML = '<div style="text-align:center;color:#a0aec0;font-size:11px;padding:16px 0">No unit tests completed yet &mdash; Unit 1 lessons in progress</div>';
    return;
  }

  var isMs = this.isMilestoneEntry;
  var list;
  if (filter === 'all')        list = all;
  else if (filter === 'pending')   list = all.filter(function(u){ return u.status === 'pending'; });
  else if (filter === 'done')      list = all.filter(function(u){ return u.status === 'done'; });
  else if (filter === 'milestones') list = all.filter(isMs);
  else                          list = all.slice(0, 5); // recent5 (default)

  if (countId) {
    var cEl = document.getElementById(countId);
    if (cEl) cEl.textContent = 'Showing ' + list.length + ' of ' + all.length;
  }

  if (list.length === 0) {
    el.innerHTML = '<div style="text-align:center;color:#a0aec0;font-size:11px;padding:16px 0">No entries match this filter</div>';
    return;
  }

  var html = '';
  list.forEach(function(u) {
    var pad = (typeof u.n === 'number' && u.n < 10) ? '0' + u.n : '' + u.n;
    var statusHtml = u.status === 'pending'
      ? '<span class="sstatus" style="background:#fff5e6;color:#c05621;border:1px solid #fbd38d">&#9201; Pending</span>'
      : '<span class="sstatus sdone">&#10003; Done</span>';
    var tagsHtml = '';
    u.tags.forEach(function(tg) {
      var cls = tg.c ? ' class="tag ' + tg.c + '"' : ' class="tag"';
      var sty = tg.s ? ' style="' + tg.s + '"' : '';
      tagsHtml += '<span' + cls + sty + '>' + tg.t + '</span>';
    });
    html += '<div class="session-item">';
    html += '<div class="ut-badge" style="background:' + u.badge + '"><div class="ut">UT</div>' + pad + '</div>';
    html += '<div class="session-body"><strong>' + u.title + '</strong>';
    html += '<div class="tags">' + tagsHtml + '</div>';
    html += '<div class="snote">' + u.note + '</div></div>';
    html += statusHtml + '</div>';
  });
  el.innerHTML = html;
};

// ── Render: skill summary footer ──────────────────────────────────────
PREM_ENGLISH.renderSkillSummary = function(containerId) {
  var el = document.getElementById(containerId);
  if (!el) return;
  var cs = this.skillSum(), ts = this.targetSum(), pct = this.achievement();
  el.innerHTML = 'Current sum ' + cs + ' &nbsp;|&nbsp; Target sum ' + ts + ' &nbsp;|&nbsp; <strong>' + pct + '% to top 5%</strong>';
};

// ── Render: hero stat boxes ───────────────────────────────────────────
PREM_ENGLISH.renderHero = function() {
  var u = this.lastUnit;
  var c = this.currentUnit;
  var pct = this.achievement();

  var b1s = document.getElementById('dash-hero-skill-sub');
  if (b1s) b1s.textContent = 'Baseline set — ' + pct + '% to top 5%';

  var b2v = document.getElementById('dash-hero-score-val');
  var b2l = document.getElementById('dash-hero-score-lbl');
  var b2s = document.getElementById('dash-hero-score-sub');
  if (b2v) { b2v.textContent = '67 / 100'; b2v.style.color = '#718096'; }
  if (b2l) b2l.textContent = 'Baseline (ASMOPSS 2025)';
  if (b2s) { b2s.textContent = '90th pct · Rank 227 / 2,441'; b2s.style.color = '#1e8b68'; }

  var b3v = document.getElementById('dash-hero-units-val');
  var b3s = document.getElementById('dash-hero-units-sub');
  if (b3v) {
    var milestonesDone = this.scores.filter(function(s){ return s.milestone === true; }).length;
    var unitsDone = this.scores.length - milestonesDone;
    b3v.textContent = unitsDone + '+' + milestonesDone;
  }
  if (b3s) { b3s.textContent = 'U' + c.n + ' — ' + c.status.toLowerCase(); b3s.style.color = '#a0aec0'; }

  var rlu = document.getElementById('dash-radar-legend-unit');
  if (rlu) rlu.textContent = 'Now (' + this.radarLegendUnit + ')';
};

// ── Render: overview pattern insight ─────────────────────────────────
PREM_ENGLISH.renderPatternInsight = function(containerId) {
  var el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = '<div class="insight-lbl il-orange">&#128269; ' + this.lastUnit.patternLabel + '</div><p>' + this.lastUnit.patternInsight + '</p>';
};

// ── Render: priority gaps ─────────────────────────────────────────────
PREM_ENGLISH.renderPriorityGaps = function(containerId) {
  var el = document.getElementById(containerId);
  if (!el) return;
  var gaps = this.priorityGaps;
  var html = '';
  gaps.forEach(function(g, i) {
    var mb = (i === gaps.length - 1) ? 'margin-bottom:0' : '';
    html += '<div class="gap-item" style="' + mb + '">';
    html += '<div class="gap-header"><span class="gap-label">' + g.label + '</span><span class="gpill ' + g.pill + '">' + g.pillText + '</span></div>';
    html += '<div class="gap-score">' + g.score + '</div>';
    html += '<div class="gap-bar"><div class="gap-fill ' + g.fillClass + '" style="width:' + g.fillPct + '%"></div></div>';
    html += '</div>';
  });
  el.innerHTML = html;
};

// ── Render: Q breakdown table ─────────────────────────────────────────
PREM_ENGLISH.renderQBreakdown = function(containerId) {
  var el = document.getElementById(containerId);
  if (!el) return;
  var u = this.lastUnit;
  if (!u.qBreakdown || !u.qBreakdown.length) return;
  var lvlClass = { b:'lb', i:'li', a:'la' };
  var lvlText  = { b:'Basic', i:'Interm.', a:'Applied' };
  var html = '';
  html += '<div class="card-hd"><span class="dot" style="background:#f6993f"></span>' + (u.label || ('Unit ' + u.n)) + ' — Question Breakdown (' + u.score + '/' + u.outOf + ' · ' + u.pct + '%)</div>';
  if (u.qSummary) {
    html += '<div style="background:#fff8e1;border:1px solid #fbd38d;border-radius:8px;padding:9px 12px;margin-bottom:12px;font-size:11px;color:#744210">' + u.qSummary + '</div>';
  }
  html += '<table class="q-table"><tr><th>Q</th><th>Topic</th><th>Lvl</th><th>Result</th><th>Note</th></tr>';
  u.qBreakdown.forEach(function(q) {
    var lc  = lvlClass[q.lvl] || 'li';
    var lt  = lvlText[q.lvl]  || q.lvl;
    var res = q.pass ? '<td class="q-pass">&#10003;</td>' : '<td class="q-fail">&#10007;</td>';
    html += '<tr><td>' + q.q + '</td><td>' + q.topic + '</td><td><span class="' + lc + '">' + lt + '</span></td>' + res + '<td>' + q.note + '</td></tr>';
  });
  html += '</table>';
  el.innerHTML = html;
};

// ── Render: results analysis insight ─────────────────────────────────
PREM_ENGLISH.renderAnalysisInsight = function(containerId) {
  var el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = '<div class="insight-lbl il-orange">&#128269; ' + this.lastUnit.analysisLabel + '</div><p>' + this.lastUnit.analysisInsight + '</p>';
};
