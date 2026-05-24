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
  updated:        '24 May 2026',
  coachStartDate: '2026-05-23',
  isaDate:        '2027-02-26',

  // ── Current state ────────────────────────────────────────────────
  currentUnit: {
    n:           2,
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
    n: 1, label: 'Unit 1', score: 11, outOf: 20, pct: 55, delta: null, prevScore: null,

    patternLabel:   'Unit 1 &mdash; 24 May 2026 &middot; 11/20 (55%) &middot; Cloze 5/7 &middot; Grammar 1/7 &middot; Vocab 5/6',
    patternInsight: '<strong>Grammar Conditionals collapsed (1/7 = 14%) &mdash; the critical result of Unit 1.</strong> Prem got every structural question wrong (Q8&ndash;Q13). He can spot an error in a given sentence (Q14 &#10003;) but cannot identify or apply Zero / First / Second Conditional forms. This needs re-teaching from scratch before Unit 2 Grammar. Cloze was decent (5/7 = 71%) with one telling error: Q5 and Q6 were swapped &mdash; he knows &ldquo;however&rdquo; and &ldquo;consequently&rdquo; individually but confused which connector fits which context. Vocabulary was the standout (5/6 = 83%) &mdash; only Q15 wrong, where he chose &ldquo;covered in sand&rdquo; for <em>arid</em> despite the clue &ldquo;no rain for three years&rdquo; pointing clearly to dryness. His vocabulary instincts are solid; he needs to slow down and read context clues more deliberately.',

    analysisLabel:   'Unit 1 Result Analysis &mdash; 24 May 2026',
    analysisInsight: '<strong>Score: 11/20 (55%) &mdash; 9 questions wrong.</strong> Cloze 5/7 &#10003; (71%): Q5 &#10007; wrote F (consequently) needed A (however); Q6 &#10007; wrote A (however) needed F (consequently) &mdash; a straight connector swap, both words known but positions confused. Grammar 1/7 &#10007;&#10007; (14%): Q8 &#10007; chose Second Cond. for Zero Cond. Q; Q9 &#10007; wrote &ldquo;had arrived&rdquo; (Third Cond.) for First Cond. fill-in; Q10 &#10007; chose First Cond. sentence as Second Cond.; Q11 &#10007; identified Second Cond. sentence as First Cond.; Q12 &#10007; spotted wrong element as the tense error; Q13 &#10007; clause embedding not secure; Q14 &#10003; correctly identified Third Cond. error. Vocabulary 5/6 &#10003; (83%): Q15 &#10007; chose &ldquo;covered in sand&rdquo; for <em>arid</em> &mdash; missed the &ldquo;no rain for three years&rdquo; context clue; Q16&ndash;Q20 all correct including the Advanced word-root question (Q20 &#10003; demolition).',

    qSummary: '<strong>Cloze 5/7 (Q5 &#10007; Q6 &#10007; &mdash; connector swap) &middot; Grammar 1/7 &#10007;&#10007; (Q8&ndash;Q13 all wrong &mdash; Conditional forms not yet understood) &middot; Vocab 5/6 (Q15 &#10007; &mdash; context clue miss on &ldquo;arid&rdquo;).</strong>',

    qBreakdown: [
      { q:'Q1',  topic:'Cloze',    lvl:'i', pass:true,  note:'&#10003; Correctly chose C (discovery) &mdash; Developing.' },
      { q:'Q2',  topic:'Cloze',    lvl:'b', pass:true,  note:'&#10003; Correctly chose D (precision) &mdash; Foundational.' },
      { q:'Q3',  topic:'Cloze',    lvl:'b', pass:true,  note:'&#10003; Correctly chose E (damage) &mdash; Foundational.' },
      { q:'Q4',  topic:'Cloze',    lvl:'b', pass:true,  note:'&#10003; Correctly chose G (silent) &mdash; Foundational.' },
      { q:'Q5',  topic:'Cloze',    lvl:'i', pass:false, note:'&#10007; Wrote F (consequently) &mdash; needed A (however). Connector swap with Q6. Contrast vs result signal confused.' },
      { q:'Q6',  topic:'Cloze',    lvl:'i', pass:false, note:'&#10007; Wrote A (however) &mdash; needed F (consequently). Connector swap with Q5. Both words known but context positions confused.' },
      { q:'Q7',  topic:'Cloze',    lvl:'i', pass:true,  note:'&#10003; Correctly chose B (lit) &mdash; Developing.' },
      { q:'Q8',  topic:'Grammar',  lvl:'b', pass:false, note:'&#10007; Chose C (&ldquo;If you heated ice, it would melt&rdquo; = Second Cond.) &mdash; needed B (Zero Cond.). Cannot identify Zero Conditional.' },
      { q:'Q9',  topic:'Grammar',  lvl:'i', pass:false, note:'&#10007; Chose D (had arrived = Third Cond. form) &mdash; needed C (arrives = present simple for First Cond. if-clause).' },
      { q:'Q10', topic:'Grammar',  lvl:'b', pass:false, note:'&#10007; Chose A (First Cond. sentence) &mdash; needed B (Second Cond.). Cannot distinguish First from Second Conditional.' },
      { q:'Q11', topic:'Grammar',  lvl:'i', pass:false, note:'&#10007; Identified as First Conditional &mdash; it was Second Conditional (&ldquo;went out / would shut down&rdquo;).' },
      { q:'Q12', topic:'Grammar',  lvl:'i', pass:false, note:'&#10007; Chose A (&ldquo;studied should be study&rdquo;) &mdash; actual error is B (&ldquo;will pass should be would pass&rdquo; for Second Cond. result clause).' },
      { q:'Q13', topic:'Grammar',  lvl:'a', pass:false, note:'&#10007; Chose A &mdash; needed C (&ldquo;She will, if she practises daily, improve her skills&rdquo;). Clause embedding not secure.' },
      { q:'Q14', topic:'Grammar',  lvl:'a', pass:true,  note:'&#10003; Correctly chose A &mdash; &ldquo;would have listened&rdquo; should be &ldquo;had listened&rdquo; (Third Cond. if-clause). Good error-spotting instinct.' },
      { q:'Q15', topic:'Vocab',    lvl:'i', pass:false, note:'&#10007; Chose D (covered in sand) for <em>arid</em> &mdash; needed B (extremely dry). Missed &ldquo;no rain for three years&rdquo; context clue.' },
      { q:'Q16', topic:'Vocab',    lvl:'i', pass:true,  note:'&#10003; Correctly chose A &mdash; <em>exquisite</em> used correctly with positive connotation (chef&rsquo;s meal).' },
      { q:'Q17', topic:'Vocab',    lvl:'b', pass:true,  note:'&#10003; Correctly chose C (victory) &mdash; same word family as <em>victorious</em>. Foundational.' },
      { q:'Q18', topic:'Vocab',    lvl:'i', pass:true,  note:'&#10003; Correctly chose B (dragged) &mdash; near synonym of <em>shuffled</em> in context.' },
      { q:'Q19', topic:'Vocab',    lvl:'i', pass:true,  note:'&#10003; Correctly chose C &mdash; <em>tedious</em> = negative connotation (boring and tiring).' },
      { q:'Q20', topic:'Vocab',    lvl:'a', pass:true,  note:'&#10003; Correctly chose B (planned destruction of a building) &mdash; Advanced word-root inference for <em>demolition</em>.' }
    ]
  },

  // ── Skills ───────────────────────────────────────────────────────
  // achievement % = sum(c) / sum(t) × 100
  // Current: 476 / 657 = 72%
  skills: [
    { name: 'Reading Compr.',    c: 62, t: 85 },
    { name: 'Vocabulary',        c: 63, t: 82 },   // U1: 5/6 (83%) — nudged up
    { name: 'Grammar',           c: 50, t: 82 },   // U1: 1/7 (14%) — critical drop; Conditionals not understood
    { name: 'Cloze Test',        c: 50, t: 80 },   // U1: 5/7 (71%) — improvement from baseline
    { name: 'Writing',           c: 65, t: 85 },
    { name: 'Conversation',      c: 95, t: 85 },
    { name: 'Critical Thinking', c: 50, t: 80 },
    { name: 'Figurative Lang.',  c: 42, t: 78 }
  ],

  // Radar axes order: Reading, Vocabulary, Grammar, Cloze, Writing, Conversation, CritThink, FigLang
  radarCurrent:  [62, 63, 50, 50, 65, 95, 50, 42],
  radarTarget:   [85, 82, 82, 80, 85, 85, 80, 78],
  radarBaseline: [62, 58, 58, 46, 65, 95, 50, 42],
  radarLegendUnit: 'Unit 1',

  // ── Score history (unit tests only — ASMOPSS shown separately) ────
  outOf: 20,
  scores: [
    { n:1, score:11, outOf:20, delta:null, color:'#fc4e4e', star:false, label:'U1' }
  ],

  // ── Unit log (newest first) ────────────────────────────────────────
  unitLog: [
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
