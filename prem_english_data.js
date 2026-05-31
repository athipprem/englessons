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
  updated:        '31 May 2026',
  coachStartDate: '2026-05-23',
  isaDate:        '2027-02-26',

  // ── Current state ────────────────────────────────────────────────
  currentUnit: {
    n:           6,
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
    n: 5, label: 'Unit 5', score: 12, outOf: 20, pct: 60, delta: -2, prevScore: 14,

    patternLabel:   'Unit 5 &mdash; 3 Jun 2026 &middot; 12/20 (60%) &middot; Cloze 3/7 &middot; Grammar 4/7 &middot; Vocab 5/6',
    patternInsight: '<strong>Score dipped to 12/20 (60%) &mdash; second-lowest result, down 2 marks from Unit 4.</strong> Cloze regressed from 4/7 to 3/7: the structural type confusion (sentence-starter vs clause-joiner) appeared for the third unit running in Q1 &mdash; chose B (however, sentence-starter) for a clause-joiner slot. Q3 had both wrong function and wrong type. Q6 shows the Because Backwards test IS starting to work (correctly identified RESULT function) but picked the distractor H instead of E &mdash; two RESULT words in the bank, grabbed the wrong one. Q7 placed a RESULT connector in a CONTRAST slot. Grammar held at 4/7: Q10 repeated the &ldquo;will have&rdquo; error from Unit 4; Q11 cannot yet identify Mixed Conditional by sight (fill-in works, recognition does not); Q12 used simple past if-clause with a Mixed result &mdash; new if-clause mismatch error type. Vocab dropped one mark (6&rarr;5): Q17 chose &ldquo;careful and diplomatic&rdquo; for &ldquo;candid&rdquo; &mdash; selected by positive-sounding instinct rather than matching the exact passage clue.',

    analysisLabel:   'Unit 5 Result Analysis &mdash; 3 Jun 2026',
    analysisInsight: '<strong>Score: 12/20 (60%) &mdash; 8 questions wrong. &minus;2 from Unit 4 (70%&rarr;60%).</strong> Cloze 3/7 (43%): Q1 &#10007; chose B (however) &mdash; needed F (although). CONTRAST function correct, structural type wrong: however is a sentence-starter, although is a clause-joiner &mdash; same error as Unit 3 Q1. Q3 &#10007; chose F (although) &mdash; needed A (furthermore). Wrong function (CONTRAST for ADDITION) AND wrong structural type (clause-joiner for sentence-starter). Q6 &#10007; chose H (as a result) &mdash; needed E (therefore). Both are RESULT sentence-starters: distractor grab. Q7 &#10007; chose E (therefore = RESULT) &mdash; needed B (however = CONTRAST). Function error. Grammar 4/7 (57%): Q10 &#10007; chose D (had not demolished / will have) &mdash; needed B (would have). &ldquo;will&rdquo; banned in conditional result. Q11 &#10007; chose A (Third Conditional sentence) &mdash; question asked to identify Mixed; cannot yet discriminate Mixed by sight. Q12 &#10007; chose C (was not / would be) &mdash; needed A (had not been / would be). If-clause mismatch: simple past &ldquo;was not&rdquo; paired with Mixed result &ldquo;would be&rdquo;; needs past perfect &ldquo;had not been&rdquo;. Vocab 5/6 (83%): Q17 &#10007; chose A (careful and diplomatic) &mdash; needed B (frank and direct). Passage said &ldquo;always said exactly what she thought, without hesitation or sugar-coating&rdquo; &mdash; a near-definition of candid. Chose by positive connotation instead of exact clue.',

    qSummary: '<strong>Cloze 3/7 &#10007; (Q1 Q3 Q6 Q7 wrong &mdash; structural type confusion + distractor trap + function error) &middot; Grammar 4/7 &#10007; (Q10 Q11 Q12 wrong &mdash; will/would, Mixed identification, if-clause mismatch) &middot; Vocab 5/6 (Q17 wrong &mdash; precision vs instinct).</strong>',

    qBreakdown: [
      { q:'Q1',  topic:'Cloze',   lvl:'b', pass:false, note:'&#10007; Chose B (however) &mdash; needed F (although). CONTRAST function correct but structural type wrong. However is a sentence-starter (needs full stop before it); although is a clause-joiner (sits inside the sentence). Same error as Unit 3 Q1. Period Test not applied. Foundational.' },
      { q:'Q2',  topic:'Cloze',   lvl:'b', pass:true,  note:'&#10003; Correctly chose C (consequently) &mdash; RESULT sentence-starter. Full stop before gap. Because Backwards confirmed: the result was caused by the earlier action. Foundational.' },
      { q:'Q3',  topic:'Cloze',   lvl:'i', pass:false, note:'&#10007; Chose F (although) &mdash; needed A (furthermore). Double error: wrong function (CONTRAST for ADDITION) and wrong structural type (clause-joiner for sentence-starter). Full stop before gap = sentence-starter needed. The ideas were additive, not contrasting. Developing.' },
      { q:'Q4',  topic:'Cloze',   lvl:'b', pass:true,  note:'&#10003; Correctly chose G (while) &mdash; TIME clause-joiner. No full stop before gap. Simultaneous action. Foundational.' },
      { q:'Q5',  topic:'Cloze',   lvl:'b', pass:true,  note:'&#10003; Correctly chose D (moreover) &mdash; ADDITION sentence-starter. Full stop before gap. Because Backwards: NO causation &rarr; ADDITION. Foundational.' },
      { q:'Q6',  topic:'Cloze',   lvl:'i', pass:false, note:'&#10007; Chose H (as a result) &mdash; needed E (therefore). Both are RESULT sentence-starters: distractor trap. Function identification was correct (RESULT) but grabbed the wrong word. Cross-off rule: if therefore and as a result are both in the bank, mark each as used &mdash; one will remain unused as the distractor. Developing.' },
      { q:'Q7',  topic:'Cloze',   lvl:'i', pass:false, note:'&#10007; Chose E (therefore = RESULT) &mdash; needed B (however = CONTRAST). Function error: the two ideas are contrasting, not one causing the other. Because Backwards: NO &rarr; CONTRAST, not RESULT. Full stop before gap = sentence-starter. Developing.' },
      { q:'Q8',  topic:'Grammar', lvl:'b', pass:true,  note:'&#10003; Correctly chose B &mdash; Foundational conditional form. Correct.' },
      { q:'Q9',  topic:'Grammar', lvl:'b', pass:true,  note:'&#10003; Correctly chose B &mdash; Foundational conditional identification. Correct.' },
      { q:'Q10', topic:'Grammar', lvl:'i', pass:false, note:'&#10007; Chose D (had not demolished / will have) &mdash; needed B (would have). &ldquo;will&rdquo; is banned from Second, Third, and Mixed Conditional result clauses. Always &ldquo;would&rdquo; in the result. This same error appeared in Unit 4 Q10. Developing.' },
      { q:'Q11', topic:'Grammar', lvl:'i', pass:false, note:'&#10007; Chose A &mdash; needed B. Question asked to identify the Mixed Conditional. A is a correct Third Conditional sentence (past condition + past result = would have earned). B is the Mixed Conditional (past condition + present result today). Fill-in practice works but identification by sight is not yet secure. Developing.' },
      { q:'Q12', topic:'Grammar', lvl:'i', pass:false, note:'&#10007; Chose C (was not / would be) &mdash; needed A (had not been / would be). If-clause mismatch: &ldquo;was not&rdquo; is a simple past (Second Conditional structure); the result &ldquo;would be&rdquo; is a Mixed/present result. These two forms cannot go together. Mixed Conditional needs past perfect if-clause: &ldquo;had not been&rdquo;. Got the result clause right, if-clause wrong. Developing.' },
      { q:'Q13', topic:'Grammar', lvl:'a', pass:true,  note:'&#10003; Correctly chose D &mdash; Advanced error-spotting. Correct.' },
      { q:'Q14', topic:'Grammar', lvl:'a', pass:true,  note:'&#10003; Correctly chose A &mdash; Advanced conditional form with time signal. Correct.' },
      { q:'Q15', topic:'Vocab',   lvl:'b', pass:true,  note:'&#10003; Correctly chose B (fervent = showing strong and sincere feeling). Behaviour clue matched. Foundational.' },
      { q:'Q16', topic:'Vocab',   lvl:'b', pass:true,  note:'&#10003; Correctly chose C (daunting = seeming difficult and intimidating). Tone and context clue matched. Foundational.' },
      { q:'Q17', topic:'Vocab',   lvl:'i', pass:false, note:'&#10007; Chose A (careful and diplomatic) &mdash; needed B (frank and direct). Passage: &ldquo;always said exactly what she thought, without hesitation or sugar-coating.&rdquo; This is the definition of frank and direct. Diplomatic means careful not to offend &mdash; the opposite of saying exactly what you think. Selected by positive connotation rather than matching the specific passage clue. Developing.' },
      { q:'Q18', topic:'Vocab',   lvl:'b', pass:true,  note:'&#10003; Correctly chose C (adept = highly skilled). Behaviour clue matched the action in the passage. Foundational.' },
      { q:'Q19', topic:'Vocab',   lvl:'i', pass:true,  note:'&#10003; Correctly chose B (scarce = in very short supply). Context/consequence clue: the shortage caused visible effects in the passage. Developing.' },
      { q:'Q20', topic:'Vocab',   lvl:'i', pass:true,  note:'&#10003; Correctly chose C (vivid = producing strong, clear mental images). Degree/intensity clue matched the descriptive language in the passage. Developing.' }
    ]
  },

  // ── Skills ───────────────────────────────────────────────────────
  // achievement % = sum(c) / sum(t) × 100
  // Current: 470 / 657 = 72%
  skills: [
    { name: 'Reading Compr.',    c: 65, t: 85 },   // U5: not tested; holding
    { name: 'Vocabulary',        c: 72, t: 82 },   // U5: 5/6 (83%) — one slip; nudged down from 74
    { name: 'Grammar',           c: 58, t: 82 },   // U5: 4/7 (57%) — same as U4; holding
    { name: 'Cloze Test',        c: 48, t: 80 },   // U5: 3/7 (43%) — regression; nudged down from 52
    { name: 'Writing',           c: 65, t: 85 },
    { name: 'Conversation',      c: 95, t: 85 },
    { name: 'Critical Thinking', c: 50, t: 80 },
    { name: 'Figurative Lang.',  c: 42, t: 78 }
  ],

  // Radar axes order: Reading, Vocabulary, Grammar, Cloze, Writing, Conversation, CritThink, FigLang
  radarCurrent:  [65, 72, 58, 48, 65, 95, 50, 42],
  radarTarget:   [85, 82, 82, 80, 85, 85, 80, 78],
  radarBaseline: [62, 58, 58, 46, 65, 95, 50, 42],
  radarLegendUnit: 'Unit 5',

  // ── Score history (unit tests only — ASMOPSS shown separately) ────
  outOf: 20,
  scores: [
    { n:1, score:11, outOf:20, delta:null, color:'#fc4e4e', star:false, label:'U1' },
    { n:2, score:14, outOf:20, delta:3,    color:'#f6993f', star:false, label:'U2' },
    { n:3, score:13, outOf:20, delta:-1,   color:'#f6993f', star:false, label:'U3' },
    { n:4, score:14, outOf:20, delta:1,    color:'#f6993f', star:false, label:'U4' },
    { n:5, score:12, outOf:20, delta:-2,   color:'#fc4e4e', star:false, label:'U5' }
  ],

  // ── Unit log (newest first) ────────────────────────────────────────
  unitLog: [
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

// ── Render: score bar chart ───────────────────────────────────────────
PREM_ENGLISH.renderScoreChart = function(containerId) {
  var el = document.getElementById(containerId);
  if (!el) return;
  if (!this.scores || this.scores.length === 0) {
    el.innerHTML = '<div style="text-align:center;color:#a0aec0;font-size:11px;padding:20px 0">No unit tests yet &mdash; Unit 1 in progress</div>';
    return;
  }
  var outOf = this.outOf;
  var html = '';
  this.scores.forEach(function(s) {
    var effectiveOutOf = s.outOf || outOf;
    var h  = Math.round(s.score / effectiveOutOf * 100);
    var dl = s.delta === null ? '' :
             (s.delta > 0 ? '+' + s.delta + '&#11014;' : '&minus;' + Math.abs(s.delta) + '&#11015;');
    var dlColor = s.delta === null ? '' : (s.delta > 0 ? 'color:#43e97b' : 'color:#f6993f');
    html += '<div class="bc-unit">';
    html += '<div class="bc-bar-wrap"><div class="bc-bar" style="height:' + h + '%;background:' + s.color + '"></div></div>';
    html += '<div class="bc-score">' + s.score + (s.star ? '&#127775;' : '') + '</div>';
    if (dl) html += '<div class="bc-delta" style="' + dlColor + '">' + dl + '</div>';
    html += '<div class="bc-lbl">' + (s.label || ('U' + s.n)) + '</div>';
    html += '</div>';
  });
  el.innerHTML = html;
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
  html += '<div class="card-hd"><span class="dot" style="background:#f6993f"></span>' + (u.label || ('Unit ' + u.n)) + ' &mdash; Question Breakdown (' + u.score + '/' + u.outOf + ' &middot; ' + u.pct + '%)</div>';
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
