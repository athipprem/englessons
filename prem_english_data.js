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
  updated:        '7 Jun 2026',
  coachStartDate: '2026-05-23',
  isaDate:        '2027-02-26',

  // ── Current state ────────────────────────────────────────────────
  currentUnit: {
    n:           9,
    status:      'Lessons In Progress',
    testPending: false
  },

  // Baseline = ASMOPSS 2025 assessment (reference — scores hardcoded in renderHero)
  baseline: {
    n: 'BL', label: 'Baseline', score: 67, outOf: 100, pct: 67,
    patternInsight: 'ASMOPSS 2025 &mdash; 67/100 (90th pct Thailand) &middot; Rank 227 / 2,441. Conversation 20/20 &#127775;. Cloze 10/20 (50%) with Basic-level error (red flag). Vocabulary &amp; Grammar 12/20 (60%) each &mdash; gaps at Intermediate/Applied. Reading 13/20 (65%) &mdash; strong on hard Qs but missed a Basic.',
  },

  // Last completed unit test (updated after each test)
  lastUnit: {
    n: 8, label: 'Unit 8 (Revamped)', score: 12, outOf: 20, pct: 60, delta: 1, prevScore: 11,

    patternLabel:   'Unit 8 (Revamped) &mdash; 7 Jun 2026 &middot; 12/20 (60%) &middot; Cloze 2/7 &middot; Grammar 4/7 &middot; Vocab 6/6 &#127775;',
    patternInsight: '<strong>Score: 12/20 (60%) &mdash; +1 from Unit 7.</strong> Vocabulary breakthrough: 6/6 (100%) &mdash; first perfect Vocab score since Unit 4. The Quote and Match method worked. Cloze regression to 2/7: structural level is the primary blocker &mdash; Q3 Q4 Q7 all involve sentence-starter vs clause-joiner type confusion; Q2 chose REASON (because) where CONTRAST (although) was needed at clause-joiner level; Q6 chose distractor (despite). Grammar improved to 4/7: Will Ban resolved (Q8 Q9 Q13 Q14 all correct). Remaining blockers: Had Test failure on noun phrase (Q11: &ldquo;had a larger budget&rdquo; = Second, not Third); missed &ldquo;today&rdquo; = Mixed signal (Q12); invalid Mixed form (Q10). Unit 9 targets: structural level rapid drill (Cloze) + 15-item Had Test drill (Grammar) + harder vocab passage anchoring.',

    analysisLabel:   'Unit 8 Revamped Result Analysis &mdash; 7 Jun 2026',
    analysisInsight: '<strong>Score: 12/20 (60%) &mdash; +1 from Unit 7 (11/20).</strong> Cloze 2/7 (29%): Q1 &#10003; B(consequently). Q2 &#10007; chose E(because) &mdash; needed A(although): comma = clause-joiner ✓; function = CONTRAST not REASON. Q3 &#10007; chose D(while) &mdash; needed C(furthermore): structure+function both wrong (clause-joiner TIME vs sentence-starter ADDITION). Q4 &#10007; chose G(meanwhile) &mdash; needed D(while): took sentence-starter for clause-joiner. Q5 &#10003; E(because). Q6 &#10007; chose H(despite) &mdash; distractor; needed G(meanwhile). Q7 &#10007; chose A(although) &mdash; needed F(however): took clause-joiner CONTRAST for sentence-starter CONTRAST. Grammar 4/7 (57%): Q8 Q9 Q13 Q14 all correct &mdash; Will Ban fully resolved. Q10 &#10007; invalid Mixed form. Q11 &#10007; &ldquo;had a larger budget&rdquo; = had + noun = Second if; &ldquo;would have expanded&rdquo; = Third result = mismatch &mdash; Had Test failure on noun phrase. Q12 &#10007; missed &ldquo;today&rdquo; = Mixed signal; chose A(would have been = Third) instead of B(would be = Mixed). Vocab 6/6 (100%) &#127775;: all correct; Q18 self-correction noted.',

    qSummary: '<strong>Cloze 2/7 &#10007;&#10007; (Q2 Q3 Q4 Q6 Q7 wrong &mdash; structural level confusion + distractor) &middot; Grammar 4/7 (Q10 Q11 Q12 wrong &mdash; Had Test failure + Mixed signal missed) &middot; Vocab 6/6 &#127775; (perfect &mdash; Quote and Match working).</strong>',

    qBreakdown: [
      { q:'Q1',  topic:'Cloze',   lvl:'b', pass:true,  note:'&#10003; Correctly chose B (consequently = RESULT sentence-starter). Full stop before gap ✓. Because Backwards: YES. RESULT sentence-starter ✓. Foundational.' },
      { q:'Q2',  topic:'Cloze',   lvl:'i', pass:false, note:'&#10007; Chose E (because = REASON clause-joiner) &mdash; needed A (although = CONTRAST clause-joiner). Comma = clause-joiner ✓. Function: because Backwards NO + Surprise YES = CONTRAST. although ✓. Structural type correct but function wrong. Developing.' },
      { q:'Q3',  topic:'Cloze',   lvl:'i', pass:false, note:'&#10007; Chose D (while = TIME clause-joiner) &mdash; needed C (furthermore = ADDITION sentence-starter). Both structure AND function wrong: full stop = sentence-starter; adding detail = ADDITION. furthermore ✓. Developing.' },
      { q:'Q4',  topic:'Cloze',   lvl:'b', pass:false, note:'&#10007; Chose G (meanwhile = TIME sentence-starter) &mdash; needed D (while = TIME clause-joiner). Function correct (TIME) but structure wrong: no full stop = clause-joiner. while ✓. Foundational.' },
      { q:'Q5',  topic:'Cloze',   lvl:'b', pass:true,  note:'&#10003; Correctly chose E (because = REASON clause-joiner). Comma = clause-joiner ✓. Because Backwards: YES. REASON ✓. Foundational.' },
      { q:'Q6',  topic:'Cloze',   lvl:'i', pass:false, note:'&#10007; Chose H (despite = distractor) &mdash; needed G (meanwhile = TIME sentence-starter). "Despite" cannot introduce a full subject+verb clause. Full stop = sentence-starter; simultaneous action = TIME. meanwhile ✓. Developing.' },
      { q:'Q7',  topic:'Cloze',   lvl:'i', pass:false, note:'&#10007; Chose A (although = CONTRAST clause-joiner) &mdash; needed F (however = CONTRAST sentence-starter). Function correct (CONTRAST) but structure wrong: full stop = sentence-starter. however ✓. Developing.' },
      { q:'Q8',  topic:'Grammar', lvl:'b', pass:true,  note:'&#10003; Correctly identified B as Second Conditional. Had Test: &ldquo;had fewer facilities&rdquo; = had + noun = simple past of have = Second. &ldquo;Would attract&rdquo; = Second result ✓. Foundational.' },
      { q:'Q9',  topic:'Grammar', lvl:'b', pass:true,  note:'&#10003; Correctly identified C as Third Conditional. Had Test: &ldquo;had been discovered&rdquo; = past participle = past perfect = Third. &ldquo;Would have changed&rdquo; = Third result ✓. Foundational.' },
      { q:'Q10', topic:'Grammar', lvl:'i', pass:false, note:'&#10007; Invalid Mixed form &mdash; needed C. Had Test: past perfect if-clause ✓. Time signal present. Chose D (invalid structure). Developing.' },
      { q:'Q11', topic:'Grammar', lvl:'i', pass:false, note:'&#10007; Had Test failure &mdash; needed D (mismatch). &ldquo;Had a larger budget&rdquo; = had + noun phrase = simple past of have = Second if. &ldquo;Would have expanded&rdquo; = Third result = MISMATCH. Chose B (correct Second Conditional). Developing.' },
      { q:'Q12', topic:'Grammar', lvl:'i', pass:false, note:'&#10007; Missed &ldquo;today&rdquo; = Mixed signal &mdash; needed B (would be = Mixed). Chose A (would have been = Third), which ignores the present-time word &ldquo;today&rdquo;. Time Signal check not applied. Developing.' },
      { q:'Q13', topic:'Grammar', lvl:'a', pass:true,  note:'&#10003; Correctly chose A (Mixed conditional completion). Past perfect if-clause + &ldquo;today&rdquo; in result = Mixed → would be ✓. Will Ban also avoided. Advanced.' },
      { q:'Q14', topic:'Grammar', lvl:'a', pass:true,  note:'&#10003; Correctly chose B. Had Test: past participle = Third ✓. &ldquo;Would have performed&rdquo; = Third result ✓. Mismatch check: both Third ✓. Advanced.' },
      { q:'Q15', topic:'Vocab',   lvl:'b', pass:true,  note:'&#10003; Correctly chose B for first target word. Quote and Match: clue found in passage, matched to correct option. Foundational.' },
      { q:'Q16', topic:'Vocab',   lvl:'b', pass:true,  note:'&#10003; Correctly chose A for second target word. Clue in same sentence, matched correctly. Foundational.' },
      { q:'Q17', topic:'Vocab',   lvl:'i', pass:true,  note:'&#10003; Correctly chose D for third target word. Clue one sentence before, sensory detail found. Developing.' },
      { q:'Q18', topic:'Vocab',   lvl:'i', pass:true,  note:'&#10003; Correctly chose C for fourth target word (self-correction noted). Developing.' },
      { q:'Q19', topic:'Vocab',   lvl:'i', pass:true,  note:'&#10003; Correctly chose A for fifth target word. Clue in surrounding sentences, topic-feel distractor eliminated. Developing.' },
      { q:'Q20', topic:'Vocab',   lvl:'a', pass:true,  note:'&#10003; Correctly chose B for sixth target word. Clue two sentences before, calm-acceptance reading correct. Advanced.' }
    ]
  },

  // ── Skills ───────────────────────────────────────────────────────
  // achievement % = sum(c) / sum(t) × 100
  // Current: 478 / 657 = 73%
  skills: [
    { name: 'Reading Compr.',    c: 65, t: 85 },   // U8: not tested; holding
    { name: 'Vocabulary',        c: 74, t: 82 },   // U8: 6/6 (100%) — breakthrough; up from 68
    { name: 'Grammar',           c: 58, t: 82 },   // U8: 4/7 (57%) — Will Ban resolved; up from 54
    { name: 'Cloze Test',        c: 50, t: 80 },   // U8: 2/7 (29%) — structural level errors; down from 53
    { name: 'Writing',           c: 65, t: 85 },
    { name: 'Conversation',      c: 95, t: 85 },
    { name: 'Critical Thinking', c: 50, t: 80 },
    { name: 'Figurative Lang.',  c: 42, t: 78 }
  ],

  // Radar axes order: Reading, Vocabulary, Grammar, Cloze, Writing, Conversation, CritThink, FigLang
  radarCurrent:  [65, 74, 58, 50, 65, 95, 50, 42],
  radarTarget:   [85, 82, 82, 80, 85, 85, 80, 78],
  radarBaseline: [62, 58, 58, 46, 65, 95, 50, 42],
  radarLegendUnit: 'Unit 8',

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
    { n:8, score:12, outOf:20, delta:1,    color:'#f6993f', star:false, label:'U8' }
  ],

  // ── Unit log (newest first) ────────────────────────────────────────
  unitLog: [
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
  // Reference lines
  var r87y = pctY(87), r93y = pctY(93);
  svg.appendChild(mk('line', { x1: x0, y1: r87y, x2: x1, y2: r87y, stroke: '#f6993f', 'stroke-width': '1.5', 'stroke-dasharray': '6,4' }));
  svg.appendChild(tx('87% mastery', { x: x1 + 5, y: r87y + 3.5, 'font-size': '8.5', fill: '#f6993f', 'font-weight': '700' }));
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
    { type: 'dash',    col: '#f6993f', label: '87% mastery' },
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

// ── Render: session log ───────────────────────────────────────────────
PREM_ENGLISH.renderSessionLog = function(containerId) {
  var el = document.getElementById(containerId);
  if (!el) return;
  if (!this.unitLog || this.unitLog.length === 0) {
    el.innerHTML = '<div style="text-align:center;color:#a0aec0;font-size:11px;padding:16px 0">No unit tests completed yet &mdash; Unit 1 lessons in progress</div>';
    return;
  }
  var html = '';
  this.unitLog.forEach(function(u) {
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
  if (b3v) b3v.textContent = this.scores.length;
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
