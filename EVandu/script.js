const SAMPLE_NOTES = [
  {
    id: "note-cs-btree-301",
    title: "CS 301: B-Trees and Database Indexing",
    subject: "Computer Science",
    tags: ["Algorithms", "Databases", "Exams"],
    content: `## What is a B-Tree?
A B-Tree is a self-balancing search tree designed to optimize disk I/O operations by maintaining sorted data with logarithmic time complexity for insertions, deletions, and lookups.

### Key Properties:
• Every node has at most **M** children (where M is the tree order).
• Internal nodes (except root) contain at least ⌈M/2⌉ children.
• All leaf nodes remain at the exact same depth.
• Keys within a node are stored in strictly ascending order.

### B-Tree vs B+ Tree:
In a standard B-Tree, keys and satellite data pointers exist across all internal nodes. In contrast, B+ Trees store all actual record pointers strictly in leaf nodes linked via bidirectional pointers—making range queries \`SELECT * WHERE age BETWEEN 20 AND 30\` drastically faster.

\`\`\`sql
CREATE INDEX idx_student_gpa ON students (gpa);
-- Underneath, Postgres uses a B+Tree index structure!
\`\`\`

> Exam Tip: Remember that disk seek times dominate query latency. Larger node block sizes minimize disk head movement!`,
    isPinned: true,
    isFavorite: true,
    createdAt: "2026-10-02T09:30:00.000Z",
    updatedAt: "2026-10-08T16:45:00.000Z"
  },
  {
    id: "note-math-eigen-240",
    title: "MATH 240: Eigenvalues & Principal Component Analysis",
    subject: "Mathematics",
    tags: ["LinearAlgebra", "DataScience", "Calculus"],
    content: `## Geometric Intuition of Eigenvectors
When an \(n \times n\) transformation matrix **A** acts upon a vector **v**, it generally rotates and scales the vector. An eigenvector is a special vector that only undergoes scaling:

\`A · v = λ · v\`

Where \`λ\` (lambda) is the scalar eigenvalue corresponding to eigenvector \`v\`.

### Step-by-Step Calculation:
1. Formulate the characteristic equation: \`det(A - λI) = 0\`
2. Solve the polynomial roots to find eigenvalues \`λ₁, λ₂, ...\`
3. Substitute each \`λ\` into \`(A - λI)v = 0\` to obtain non-trivial nullspace solutions.

### Application to PCA (Dimensionality Reduction):
In machine learning, Principal Component Analysis finds the directions of maximum variance in high-dimensional datasets:
• Compute the sample covariance matrix **Σ**.
• Calculate the eigenvectors of **Σ**.
• The principal components are ordered from largest eigenvalue to smallest.`,
    isPinned: true,
    isFavorite: false,
    createdAt: "2026-10-04T11:15:00.000Z",
    updatedAt: "2026-10-07T14:20:00.000Z"
  },
  {
    id: "note-phys-maxwell-210",
    title: "PHYS 210: Maxwell's Equations & Wave Propagation",
    subject: "Physics",
    tags: ["Electrodynamics", "Formulas", "Physics"],
    content: `## The Four Pillars of Classical Electrodynamics
James Clerk Maxwell unified electricity and magnetism into four differential equations:

1. **Gauss's Law**: \`∇ · E = ρ / ε₀\`
   (Electric charges generate divergent electric fields)

2. **Gauss's Law for Magnetism**: \`∇ · B = 0\`
   (Magnetic monopoles do not exist; magnetic field lines form closed loops)

3. **Faraday's Law of Induction**: \`∇ × E = -∂B / ∂t\`
   (A time-varying magnetic field induces a swirling electric field)

4. **Ampère-Maxwell Law**: \`∇ × B = μ₀J + μ₀ε₀(∂E / ∂t)\`
   (Electric currents and displacement currents generate magnetic fields)

### Speed of Light Derivation:
In a vacuum (\`ρ = 0, J = 0\`), taking the curl of Faraday's law yields the electromagnetic wave equation with velocity:
\`c = 1 / √(μ₀ * ε₀) ≈ 3.00 × 10⁸ m/s\``,
    isPinned: false,
    isFavorite: true,
    createdAt: "2026-09-28T14:00:00.000Z",
    updatedAt: "2026-10-06T10:10:00.000Z"
  },
  {
    id: "note-lit-stream-105",
    title: "LIT 105: The Stream of Consciousness in Modernist Novels",
    subject: "Literature",
    tags: ["Modernism", "Essay", "Woolf"],
    content: `## Literary Technique & Psychological Realism
Modernist writers turned inward, moving away from 19th-century linear, omniscient narration to reflect the raw texture of human cognition.

### Key Characteristics:
• **Temporal Elasticity**: A single day can span hundreds of pages (e.g., Virginia Woolf's *Mrs. Dalloway* or Joyce's *Ulysses*).
• **Associative Logic**: Memory triggers occur spontaneously via sensory impressions (the chiming of Big Ben, a bouquet of flowers).
• **Blurring of Boundaries**: The line between interior thought and external dialogue becomes porous.

> "Mrs. Dalloway said she would buy the flowers herself. For Lucy had her work cut out for her."
> — Virginia Woolf, *Mrs. Dalloway* (1925)

### Analytical Takeaway for Term Paper:
Compare Clarissa Dalloway's preservation of interior privacy against Septimus Warren Smith's psychological fragmentation as post-war trauma symptoms.`,
    isPinned: false,
    isFavorite: false,
    createdAt: "2026-10-01T16:40:00.000Z",
    updatedAt: "2026-10-05T08:50:00.000Z"
  },
  {
    id: "note-bio-crispr-180",
    title: "BIO 180: CRISPR-Cas9 Gene Editing Mechanisms",
    subject: "Biology",
    tags: ["Genetics", "Biotech", "Lab"],
    content: `## CRISPR-Cas9 Architecture & Precision Cleavage
Clustered Regularly Interspaced Short Palindromic Repeats (CRISPR) originated as an adaptive immune defense in bacteria against bacteriophages.

### Structural Components:
• **Cas9 Endonuclease**: The molecular "scissors" that create targeted double-strand breaks (DSBs).
• **Guide RNA (gRNA)**: A synthetic hybrid combining crRNA (target recognition sequence, ~20 nucleotides) and tracrRNA (structural scaffold).
• **PAM Site (Protospacer Adjacent Motif)**: Specific short sequence (typically \`5'-NGG-3'\`) necessary adjacent to target for Cas9 binding.

### Cellular Repair Pathways:
1. **NHEJ (Non-Homologous End Joining)**: Error-prone direct ligation often introducing insertions or deletions (indels), perfect for gene knockouts.
2. **HDR (Homology-Directed Repair)**: High-fidelity template-dependent pathway utilized for precise gene insertion or correction.`,
    isPinned: false,
    isFavorite: true,
    createdAt: "2026-10-03T13:20:00.000Z",
    updatedAt: "2026-10-09T09:15:00.000Z"
  },
  {
    id: "note-econ-game-202",
    title: "ECON 202: Game Theory: Nash Equilibrium & Payoffs",
    subject: "Economics",
    tags: ["Economics", "GameTheory", "Strategy"],
    content: `## Fundamentals of Strategic Decision Making
In non-cooperative game theory, every agent seeks to maximize their individual expected payoff given the anticipated rational actions of other players.

### Nash Equilibrium Definition:
A strategy profile \`(s₁*, s₂*, ..., sₙ*)\` is a Nash Equilibrium if no player has an incentive to unilaterally deviate to an alternative strategy:
\`uᵢ(sᵢ*, s₋ᵢ*) ≥ uᵢ(sᵢ, s₋ᵢ*) for all sᵢ ∈ Sᵢ\`

### The Classic Prisoner's Dilemma:
• If both cooperate: Payoff (3, 3)
• If player A defects while B cooperates: Payoff (5, 0)
• If both defect: Payoff (1, 1)

**Dominant Strategy**: Defecting is strictly dominant for both, leading to (Defect, Defect) as the unique Nash equilibrium, even though (Cooperate, Cooperate) is Pareto optimal!`,
    isPinned: false,
    isFavorite: false,
    createdAt: "2026-09-30T10:00:00.000Z",
    updatedAt: "2026-10-04T15:30:00.000Z"
  }
];

const STUDY_TIPS = [
  "Spaced repetition and active recall transform today's notes into lasting exam mastery.",
  "The Feynman Technique: Explain a complex concept in plain words to reveal knowledge gaps.",
  "Cornell Method: Dedicate 30% of your notes page to summary cues and review questions.",
  "Interleaving: Rotate between related subjects instead of cramming one topic for 5 hours straight.",
  "Dual Coding: Pair concise conceptual notes with quick visual diagrams to boost memory retention."
];

// App State
const state = {
  notes: [],
  activeView: 'all',          // 'all' | 'favorites' | 'pinned'
  activeSubject: 'all',       // 'all' | string subject
  activeTag: null,            // null | string tag
  searchQuery: '',
  sortOrder: 'updated-desc',  // 'updated-desc' | 'created-desc' | 'created-asc' | 'title-asc' | 'words-desc'
  viewMode: 'grid',           // 'grid' | 'list'
  tipIndex: 0,
  pendingDeleteId: null,
  activeReaderNoteId: null
};

// ==========================================================================
// 2. Storage & Initialization
// ==========================================================================

const STORAGE_KEY = 'notenest_student_notes';

function loadNotes() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // First launch only: seed sample notes
      state.notes = [...SAMPLE_NOTES];
      saveNotes();
    } else {
      const parsed = JSON.parse(raw);
      state.notes = Array.isArray(parsed) && parsed.length > 0 ? parsed : [...SAMPLE_NOTES];
    }
  } catch (err) {
    console.error('Error loading notes from localStorage:', err);
    state.notes = [...SAMPLE_NOTES];
  }
}

function saveNotes() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.notes));
  } catch (err) {
    console.error('Error saving notes to localStorage:', err);
  }
}

function resetToSampleData() {
  state.notes = JSON.parse(JSON.stringify(SAMPLE_NOTES));
  saveNotes();
  state.activeSubject = 'all';
  state.activeTag = null;
  state.activeView = 'all';
  state.searchQuery = '';
  
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  
  renderAll();
  showToast('Demo sample notes restored successfully!', 'info');
}

// ==========================================================================
// 3. UI Helpers & Formatting Utilities
// ==========================================================================

function escapeHTML(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function countWords(str) {
  if (!str) return 0;
  const trimmed = str.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).filter(Boolean).length;
}

function calculateReadingTime(wordCount) {
  const wordsPerMin = 200;
  const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMin));
  return `${minutes} min read`;
}

function formatRelativeDate(isoString) {
  if (!isoString) return 'Recently';
  const date = new Date(isoString);
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins} min ago`;
  if (diffHours < 24) return `${diffHours} hr${diffHours > 1 ? 's' : ''} ago`;
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;

  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
  });
}

function formatFullDate(isoString) {
  if (!isoString) return '';
  const date = new Date(isoString);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

/**
 * Safely format markdown-style text into rich HTML for reading
 */
function renderFormattedMarkdown(rawText) {
  if (!rawText) return '';

  const safe = escapeHTML(rawText);
  const lines = safe.split('\n');
  const output = [];
  let inCodeBlock = false;
  let codeBuffer = [];
  let inList = false;

  for (let line of lines) {
    // Code block toggle ```
    if (line.trim().startsWith('```')) {
      if (inCodeBlock) {
        output.push(`<pre><code>${codeBuffer.join('\n')}</code></pre>`);
        codeBuffer = [];
        inCodeBlock = false;
      } else {
        if (inList) { output.push('</ul>'); inList = false; }
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      continue;
    }

    // Unordered lists
    if (line.trim().startsWith('• ') || line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
      if (!inList) {
        output.push('<ul>');
        inList = true;
      }
      const itemContent = line.trim().substring(2);
      output.push(`<li>${parseInlineMarkdown(itemContent)}</li>`);
      continue;
    } else if (inList) {
      output.push('</ul>');
      inList = false;
    }

    // Headings
    if (line.startsWith('### ')) {
      output.push(`<h3>${parseInlineMarkdown(line.substring(4))}</h3>`);
      continue;
    }
    if (line.startsWith('## ')) {
      output.push(`<h2>${parseInlineMarkdown(line.substring(3))}</h2>`);
      continue;
    }
    if (line.startsWith('# ')) {
      output.push(`<h2>${parseInlineMarkdown(line.substring(2))}</h2>`);
      continue;
    }

    // Blockquote
    if (line.startsWith('&gt; ') || line.startsWith('> ')) {
      const quoteText = line.replace(/^(&gt;|>)\s?/, '');
      output.push(`<blockquote>${parseInlineMarkdown(quoteText)}</blockquote>`);
      continue;
    }

    // Empty lines
    if (!line.trim()) {
      output.push('<br>');
      continue;
    }

    // Standard paragraph line
    output.push(`<p>${parseInlineMarkdown(line)}</p>`);
  }

  if (inCodeBlock) {
    output.push(`<pre><code>${codeBuffer.join('\n')}</code></pre>`);
  }
  if (inList) {
    output.push('</ul>');
  }

  return output.join('\n');
}

function parseInlineMarkdown(text) {
  // Bold **text**
  text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Italic *text*
  text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
  // Inline code `code`
  text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
  return text;
}

// ==========================================================================
// 4. Filtering & Sorting Engine
// ==========================================================================

function getFilteredNotes() {
  let list = [...state.notes];

  // 1. Sidebar View Filter (all / favorites / pinned)
  if (state.activeView === 'favorites') {
    list = list.filter(n => n.isFavorite);
  } else if (state.activeView === 'pinned') {
    list = list.filter(n => n.isPinned);
  }

  // 2. Subject Filter
  if (state.activeSubject && state.activeSubject !== 'all') {
    list = list.filter(n => n.subject.toLowerCase() === state.activeSubject.toLowerCase());
  }

  // 3. Tag Filter
  if (state.activeTag) {
    list = list.filter(n => Array.isArray(n.tags) && n.tags.some(t => t.toLowerCase() === state.activeTag.toLowerCase()));
  }

  // 4. Search Filter
  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    list = list.filter(n => {
      const matchTitle = n.title.toLowerCase().includes(q);
      const matchContent = n.content.toLowerCase().includes(q);
      const matchSubject = n.subject.toLowerCase().includes(q);
      const matchTags = Array.isArray(n.tags) && n.tags.some(t => t.toLowerCase().includes(q));
      return matchTitle || matchContent || matchSubject || matchTags;
    });
  }

  // 5. Sorting
  list.sort((a, b) => {
    // If not actively filtering by pinned only, maintain pinned notes at the top!
    if (state.activeView !== 'pinned') {
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;
    }

    switch (state.sortOrder) {
      case 'updated-desc':
        return new Date(b.updatedAt || b.createdAt) - new Date(a.updatedAt || a.createdAt);
      case 'created-desc':
        return new Date(b.createdAt) - new Date(a.createdAt);
      case 'created-asc':
        return new Date(a.createdAt) - new Date(b.createdAt);
      case 'title-asc':
        return a.title.localeCompare(b.title);
      case 'words-desc':
        return countWords(b.content) - countWords(a.content);
      default:
        return 0;
    }
  });

  return list;
}

// ==========================================================================
// 5. DOM Rendering Engine
// ==========================================================================

function renderAll() {
  renderSidebarNav();
  renderSidebarSubjects();
  renderSidebarTags();
  renderStats();
  renderNotesGrid();
  renderActiveFilterBadge();
  updateHeroDate();
}

function renderSidebarNav() {
  const totalCount = state.notes.length;
  const favCount = state.notes.filter(n => n.isFavorite).length;
  const pinCount = state.notes.filter(n => n.isPinned).length;

  document.getElementById('countAllNotes').textContent = totalCount;
  document.getElementById('countFavorites').textContent = favCount;
  document.getElementById('countPinned').textContent = pinCount;

  // Active state on sidebar links
  const links = [
    { id: 'navAllNotes', view: 'all' },
    { id: 'navFavorites', view: 'favorites' },
    { id: 'navPinned', view: 'pinned' }
  ];

  links.forEach(l => {
    const btn = document.getElementById(l.id);
    if (!btn) return;
    if (state.activeView === l.view && state.activeSubject === 'all' && !state.activeTag) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Quick filter pills sync
  document.querySelectorAll('#quickFilterPills .filter-pill').forEach(pill => {
    const pValue = pill.getAttribute('data-pill');
    if (pValue === state.activeView && !state.activeTag && state.activeSubject === 'all') {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });

  // Update Breadcrumb & Heading
  let viewTitle = 'All Notes';
  if (state.activeView === 'favorites') viewTitle = 'Favorites';
  else if (state.activeView === 'pinned') viewTitle = 'Pinned Notes';

  if (state.activeSubject !== 'all') {
    viewTitle = state.activeSubject;
  } else if (state.activeTag) {
    viewTitle = `#${state.activeTag}`;
  } else if (state.searchQuery) {
    viewTitle = `Search: "${state.searchQuery}"`;
  }

  document.getElementById('breadcrumbActive').textContent = viewTitle;
  document.getElementById('notesSectionHeading').textContent = viewTitle;
}

function renderSidebarSubjects() {
  const listEl = document.getElementById('sidebarSubjectList');
  const selectEl = document.getElementById('subjectFilterSelect');
  const clearBtn = document.getElementById('navFilterClearBtn');
  if (!listEl) return;

  // Compute subjects and counts
  const subjectMap = {};
  state.notes.forEach(n => {
    const s = n.subject || 'General';
    subjectMap[s] = (subjectMap[s] || 0) + 1;
  });

  const subjects = Object.keys(subjectMap).sort();

  // Populate Sidebar List
  let html = `
    <li>
      <button class="subject-nav-item ${state.activeSubject === 'all' ? 'active' : ''}" data-subject="all">
        <span class="subject-nav-left">
          <span class="subject-dot" style="background:#5B5BD6"></span>
          <span class="subject-name">All Subjects</span>
        </span>
        <span class="subject-count">${state.notes.length}</span>
      </button>
    </li>
  `;

  // Color mapping dots
  const dotColors = {
    'Computer Science': '#5B5BD6',
    'Mathematics': '#D97706',
    'Physics': '#0284C7',
    'Biology': '#16A34A',
    'Literature': '#DB2777',
    'Economics': '#7C3AED',
    'Chemistry': '#EA580C',
    'General': '#6B7280'
  };

  subjects.forEach(subj => {
    const isAct = state.activeSubject.toLowerCase() === subj.toLowerCase();
    const dot = dotColors[subj] || '#5B5BD6';
    html += `
      <li>
        <button class="subject-nav-item ${isAct ? 'active' : ''}" data-subject="${escapeHTML(subj)}">
          <span class="subject-nav-left">
            <span class="subject-dot" style="background:${dot}"></span>
            <span class="subject-name">${escapeHTML(subj)}</span>
          </span>
          <span class="subject-count">${subjectMap[subj]}</span>
        </button>
      </li>
    `;
  });

  listEl.innerHTML = html;

  // Clear button visibility
  if (clearBtn) {
    clearBtn.style.display = (state.activeSubject !== 'all' || state.activeTag) ? 'inline-block' : 'none';
  }

  // Populate Dropdown Select in controls
  if (selectEl) {
    let selectHtml = `<option value="all">All Subjects (${state.notes.length})</option>`;
    subjects.forEach(subj => {
      const selected = state.activeSubject.toLowerCase() === subj.toLowerCase() ? 'selected' : '';
      selectHtml += `<option value="${escapeHTML(subj)}" ${selected}>${escapeHTML(subj)} (${subjectMap[subj]})</option>`;
    });
    selectEl.innerHTML = selectHtml;
    selectEl.value = state.activeSubject;
  }
}

function renderSidebarTags() {
  const container = document.getElementById('sidebarTagsList');
  if (!container) return;

  const tagCounts = {};
  state.notes.forEach(n => {
    if (Array.isArray(n.tags)) {
      n.tags.forEach(t => {
        const clean = t.trim();
        if (clean) tagCounts[clean] = (tagCounts[clean] || 0) + 1;
      });
    }
  });

  const sortedTags = Object.keys(tagCounts).sort((a, b) => tagCounts[b] - tagCounts[a]).slice(0, 8);

  if (sortedTags.length === 0) {
    container.innerHTML = '<span style="font-size:0.75rem; color:#9DA0B8; padding:4px;">No tags yet</span>';
    return;
  }

  container.innerHTML = sortedTags.map(tag => {
    const isAct = state.activeTag && state.activeTag.toLowerCase() === tag.toLowerCase();
    return `
      <button class="sidebar-tag-pill ${isAct ? 'active' : ''}" data-tag="${escapeHTML(tag)}">
        #${escapeHTML(tag)}
      </button>
    `;
  }).join('');
}

function renderStats() {
  const totalNotes = state.notes.length;
  const uniqueSubjects = new Set(state.notes.map(n => n.subject)).size;
  const totalFavs = state.notes.filter(n => n.isFavorite).length;
  const totalWords = state.notes.reduce((acc, curr) => acc + countWords(curr.content), 0);

  document.getElementById('statTotalNotes').textContent = totalNotes;
  document.getElementById('statTotalSubjects').textContent = uniqueSubjects;
  document.getElementById('statTotalFavorites').textContent = totalFavs;
  document.getElementById('statTotalWords').textContent = totalWords.toLocaleString();
}

function renderActiveFilterBadge() {
  const badgeWrap = document.getElementById('activeFilterBadge');
  const badgeText = document.getElementById('activeFilterBadgeText');
  if (!badgeWrap || !badgeText) return;

  const filters = [];
  if (state.activeSubject !== 'all') filters.push(`Subject: ${state.activeSubject}`);
  if (state.activeTag) filters.push(`Tag: #${state.activeTag}`);
  if (state.searchQuery) filters.push(`Search: "${state.searchQuery}"`);

  if (filters.length > 0) {
    badgeText.textContent = filters.join(' • ');
    badgeWrap.style.display = 'inline-flex';
  } else {
    badgeWrap.style.display = 'none';
  }
}

function renderNotesGrid() {
  const container = document.getElementById('notesContainer');
  const emptyState = document.getElementById('emptyState');
  const countChip = document.getElementById('visibleNotesCount');

  const filtered = getFilteredNotes();
  countChip.textContent = filtered.length;

  if (filtered.length === 0) {
    container.innerHTML = '';
    container.style.display = 'none';
    emptyState.style.display = 'flex';

    const titleEl = document.getElementById('emptyStateTitle');
    const textEl = document.getElementById('emptyStateText');

    if (state.searchQuery) {
      titleEl.textContent = 'No matching notes found';
      textEl.textContent = `No notes matched "${state.searchQuery}". Check for typos or clear your search.`;
    } else if (state.activeView === 'favorites') {
      titleEl.textContent = 'No favorite notes yet';
      textEl.textContent = 'Click the star icon on any note card to add it to your quick study favorites.';
    } else if (state.activeView === 'pinned') {
      titleEl.textContent = 'No pinned notes';
      textEl.textContent = 'Pin your highest-priority lecture notes to keep them anchored at the top.';
    } else if (state.activeSubject !== 'all') {
      titleEl.textContent = `No notes in ${state.activeSubject}`;
      textEl.textContent = `You haven't written any notes under ${state.activeSubject} yet. Create one now!`;
    } else {
      titleEl.textContent = 'Your knowledge nest is empty';
      textEl.textContent = 'Start capturing ideas, formulas, and lecture summaries to organize your semester.';
    }
    return;
  }

  emptyState.style.display = 'none';
  container.style.display = state.viewMode === 'list' ? 'flex' : 'grid';

  container.innerHTML = filtered.map(note => createNoteCardHTML(note)).join('');
}

function createNoteCardHTML(note) {
  const words = countWords(note.content);
  const timeStr = calculateReadingTime(words);
  const dateStr = formatRelativeDate(note.updatedAt || note.createdAt);

  // Strip markdown formatting for preview
  const plainPreview = note.content
    .replace(/^#+\s+/gm, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/^>\s+/gm, '')
    .replace(/•\s+/g, '')
    .trim();

  const tagsHTML = Array.isArray(note.tags) && note.tags.length > 0
    ? note.tags.map(t => `<span class="note-tag" data-tag="${escapeHTML(t)}">#${escapeHTML(t)}</span>`).join('')
    : '';

  return `
    <article class="note-card ${note.isPinned ? 'is-pinned' : ''}" data-id="${note.id}" tabindex="0">
      <div class="card-header">
        <div class="card-badges-left">
          <span class="subject-badge" data-subject="${escapeHTML(note.subject)}">
            ${escapeHTML(note.subject)}
          </span>
          ${note.isPinned ? `<span class="pin-indicator-chip" title="Pinned to top">📌 Pinned</span>` : ''}
        </div>
        <div class="card-actions-right">
          <button 
            type="button" 
            class="btn-card-action ${note.isFavorite ? 'active-fav' : ''}" 
            data-action="toggle-fav" 
            data-id="${note.id}"
            title="${note.isFavorite ? 'Remove from favorites' : 'Mark as favorite'}"
            aria-label="Toggle favorite"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="${note.isFavorite ? '#F59E0B' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </button>
          <button 
            type="button" 
            class="btn-card-action ${note.isPinned ? 'active-pin' : ''}" 
            data-action="toggle-pin" 
            data-id="${note.id}"
            title="${note.isPinned ? 'Unpin note' : 'Pin note'}"
            aria-label="Toggle pin"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="17" x2="12" y2="22"></line>
              <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.89A4 4 0 0 1 14 9V5a2 2 0 0 0-2-2h0a2 2 0 0 0-2 2v4a4 4 0 0 1-2.11 3.56l-1.78.89A2 2 0 0 0 5 15.24V17z"></path>
            </svg>
          </button>
        </div>
      </div>

      <div class="card-main-content">
        <h3 class="card-title">${escapeHTML(note.title)}</h3>
        <p class="card-preview">${escapeHTML(plainPreview)}</p>
      </div>

      ${tagsHTML ? `<div class="card-tags">${tagsHTML}</div>` : ''}

      <div class="card-footer">
        <div class="card-date-meta">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          <span>${dateStr} • ${timeStr}</span>
        </div>
        <div class="card-read-hint">
          <span>Read</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </div>
      </div>
    </article>
  `;
}

function updateHeroDate() {
  const dayEl = document.getElementById('currentDay');
  const fullEl = document.getElementById('currentFullDate');
  if (!dayEl || !fullEl) return;

  const now = new Date();
  const dayName = now.toLocaleDateString('en-US', { weekday: 'long' });
  const fullDate = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  dayEl.textContent = dayName;
  fullEl.textContent = fullDate;
}

// ==========================================================================
// 6. Modal Controllers (Editor, Reader, Delete Confirm)
// ==========================================================================

// --- Editor Modal ---
function openEditor(noteToEdit = null) {
  const modal = document.getElementById('editorModal');
  const titleInput = document.getElementById('editorTitle');
  const subjectSelect = document.getElementById('editorSubject');
  const tagsInput = document.getElementById('editorTags');
  const contentArea = document.getElementById('editorContent');
  const isPinnedCheck = document.getElementById('editorIsPinned');
  const isFavCheck = document.getElementById('editorIsFavorite');
  const modalTitle = document.getElementById('editorModalTitle');
  const submitText = document.getElementById('editorSubmitText');
  const noteIdInput = document.getElementById('editorNoteId');

  if (noteToEdit) {
    modalTitle.textContent = 'Edit Note';
    submitText.textContent = 'Save Changes';
    noteIdInput.value = noteToEdit.id;
    titleInput.value = noteToEdit.title;
    subjectSelect.value = noteToEdit.subject || 'General';
    tagsInput.value = Array.isArray(noteToEdit.tags) ? noteToEdit.tags.join(', ') : '';
    contentArea.value = noteToEdit.content;
    isPinnedCheck.checked = !!noteToEdit.isPinned;
    isFavCheck.checked = !!noteToEdit.isFavorite;
  } else {
    modalTitle.textContent = 'Create New Note';
    submitText.textContent = 'Save Note';
    noteIdInput.value = '';
    titleInput.value = '';
    subjectSelect.value = state.activeSubject !== 'all' ? state.activeSubject : 'Computer Science';
    tagsInput.value = '';
    contentArea.value = '';
    isPinnedCheck.checked = state.activeView === 'pinned';
    isFavCheck.checked = state.activeView === 'favorites';
  }

  updateEditorMetrics();
  modal.classList.add('open');
  setTimeout(() => titleInput.focus(), 150);
}

function closeEditor() {
  const modal = document.getElementById('editorModal');
  modal.classList.remove('open');
}

function handleEditorSubmit(e) {
  e.preventDefault();
  const noteId = document.getElementById('editorNoteId').value;
  const title = document.getElementById('editorTitle').value.trim();
  const subject = document.getElementById('editorSubject').value;
  const tagsRaw = document.getElementById('editorTags').value;
  const content = document.getElementById('editorContent').value.trim();
  const isPinned = document.getElementById('editorIsPinned').checked;
  const isFavorite = document.getElementById('editorIsFavorite').checked;

  if (!title || !content) {
    showToast('Please provide both a title and note content', 'warning');
    return;
  }

  const tags = tagsRaw
    .split(',')
    .map(t => t.trim().replace(/^#/, ''))
    .filter(Boolean);

  const now = new Date().toISOString();

  if (noteId) {
    // Edit existing note
    const idx = state.notes.findIndex(n => n.id === noteId);
    if (idx !== -1) {
      state.notes[idx] = {
        ...state.notes[idx],
        title,
        subject,
        tags,
        content,
        isPinned,
        isFavorite,
        updatedAt: now
      };
      saveNotes();
      renderAll();
      showToast('Note updated successfully! ✨', 'success');

      // If reader is currently open with this note, refresh reader
      if (state.activeReaderNoteId === noteId) {
        openReader(state.notes[idx]);
      }
    }
  } else {
    // Create fresh note
    const newNote = {
      id: `note-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      title,
      subject,
      tags,
      content,
      isPinned,
      isFavorite,
      createdAt: now,
      updatedAt: now
    };
    state.notes.unshift(newNote);
    saveNotes();
    renderAll();
    showToast('New note created! 📝', 'success');
  }

  closeEditor();
}

function updateEditorMetrics() {
  const content = document.getElementById('editorContent').value;
  const wordCount = countWords(content);
  const charCount = content.length;
  const readTime = calculateReadingTime(wordCount);

  document.getElementById('editorWordCount').textContent = wordCount;
  document.getElementById('editorCharCount').textContent = charCount;
  document.getElementById('editorReadTime').textContent = readTime;
}

function insertEditorFormat(formatType) {
  const textarea = document.getElementById('editorContent');
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const text = textarea.value;
  const selected = text.substring(start, end);

  let replacement = '';
  let cursorOffset = 0;

  switch (formatType) {
    case 'bold':
      replacement = `**${selected || 'bold text'}**`;
      cursorOffset = 2;
      break;
    case 'italic':
      replacement = `*${selected || 'italic text'}*`;
      cursorOffset = 1;
      break;
    case 'h2':
      replacement = `\n## ${selected || 'Upload From Files'}\n`;
      cursorOffset = 4;
      break;
    case 'bullet':
      replacement = `\n• ${selected || 'Key concept'}\n`;
      cursorOffset = 3;
      break;
    case 'quote':
      replacement = `\n> ${selected || 'Important takeaway'}\n`;
      cursorOffset = 3;
      break;
    case 'code':
      replacement = selected.includes('\n')
        ? `\n\`\`\`\n${selected || '// code block'}\n\`\`\`\n`
        : `\`${selected || 'code snippet'}\``;
      cursorOffset = 1;
      break;
  }

  textarea.value = text.substring(0, start) + replacement + text.substring(end);
  textarea.focus();
  textarea.setSelectionRange(start + cursorOffset, start + replacement.length - cursorOffset);
  updateEditorMetrics();
}

// --- Reading View Modal ---
function openReader(note) {
  if (!note) return;
  state.activeReaderNoteId = note.id;

  const modal = document.getElementById('readerModal');
  const subjBadge = document.getElementById('readerSubjectBadge');
  const pinBadge = document.getElementById('readerPinBadge');
  const favBadge = document.getElementById('readerFavBadge');
  const titleEl = document.getElementById('readerTitle');
  const dateMeta = document.getElementById('readerDateMeta');
  const wordMeta = document.getElementById('readerWordMeta');
  const timeMeta = document.getElementById('readerTimeMeta');
  const tagsRow = document.getElementById('readerTagsRow');
  const contentEl = document.getElementById('readerContent');
  const pinBtn = document.getElementById('readerTogglePinBtn');
  const favBtn = document.getElementById('readerToggleFavBtn');

  subjBadge.textContent = note.subject;
  subjBadge.setAttribute('data-subject', note.subject);

  pinBadge.style.display = note.isPinned ? 'inline-block' : 'none';
  favBadge.style.display = note.isFavorite ? 'inline-block' : 'none';

  pinBtn.classList.toggle('active-pin', !!note.isPinned);
  favBtn.classList.toggle('active-fav', !!note.isFavorite);

  titleEl.textContent = note.title;
  dateMeta.textContent = `Updated ${formatRelativeDate(note.updatedAt || note.createdAt)}`;

  const words = countWords(note.content);
  wordMeta.textContent = `${words} words`;
  timeMeta.textContent = calculateReadingTime(words);

  // Render tags
  if (Array.isArray(note.tags) && note.tags.length > 0) {
    tagsRow.style.display = 'flex';
    tagsRow.innerHTML = note.tags.map(t => `<span class="note-tag" data-tag="${escapeHTML(t)}">#${escapeHTML(t)}</span>`).join('');
  } else {
    tagsRow.style.display = 'none';
    tagsRow.innerHTML = '';
  }

  // Render markdown content
  contentEl.innerHTML = renderFormattedMarkdown(note.content);

  modal.classList.add('open');
}

function closeReader() {
  const modal = document.getElementById('readerModal');
  modal.classList.remove('open');
  state.activeReaderNoteId = null;
}

// --- Delete Modal ---
function openDeleteModal(noteId) {
  const note = state.notes.find(n => n.id === noteId);
  if (!note) return;

  state.pendingDeleteId = noteId;
  document.getElementById('deleteNoteTitlePreview').textContent = `"${note.title}"`;
  document.getElementById('deleteConfirmModal').classList.add('open');
}

function closeDeleteModal() {
  document.getElementById('deleteConfirmModal').classList.remove('open');
  state.pendingDeleteId = null;
}

function confirmDeleteNote() {
  if (!state.pendingDeleteId) return;

  const id = state.pendingDeleteId;
  const deletedNote = state.notes.find(n => n.id === id);
  state.notes = state.notes.filter(n => n.id !== id);
  saveNotes();

  closeDeleteModal();
  if (state.activeReaderNoteId === id) {
    closeReader();
  }

  renderAll();
  showToast(`Deleted note "${deletedNote ? deletedNote.title : ''}" 🗑️`, 'danger');
}

// ==========================================================================
// 7. Toast Notification System
// ==========================================================================

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const iconMap = {
    success: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    danger: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
    warning: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`,
    info: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`
  };

  toast.innerHTML = `
    <div class="toast-icon">${iconMap[type] || iconMap.info}</div>
    <div class="toast-message">${escapeHTML(message)}</div>
    <button class="toast-close-btn" aria-label="Close notification">✕</button>
  `;

  container.appendChild(toast);

  const dismiss = () => {
    toast.classList.add('hiding');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 250);
  };

  toast.querySelector('.toast-close-btn').addEventListener('click', dismiss);
  setTimeout(dismiss, 3800);
}

// ==========================================================================
// 8. Event Listeners & Interactive Bindings
// ==========================================================================

function bindEventListeners() {
  // Mobile Sidebar Hamburger & Close
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const sidebarCloseBtn = document.getElementById('sidebarCloseBtn');

  function openSidebar() {
    sidebar.classList.add('open');
    sidebarOverlay.classList.add('active');
  }
  function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('active');
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openSidebar);
  if (sidebarCloseBtn) sidebarCloseBtn.addEventListener('click', closeSidebar);
  if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

  // Create Note Buttons
  const openCreateHandler = () => {
    openEditor(null);
    closeSidebar();
  };
  document.getElementById('sidebarCreateBtn').addEventListener('click', openCreateHandler);
  document.getElementById('topbarNewBtn').addEventListener('click', openCreateHandler);
  document.getElementById('emptyCreateBtn').addEventListener('click', openCreateHandler);

  // Demo Reset Button
  document.getElementById('resetDemoBtn').addEventListener('click', () => {
    if (confirm('Restore the original competition sample notes? This will reset demo data.')) {
      resetToSampleData();
    }
  });

  // Sidebar Library Navigation (All, Favorites, Pinned)
  document.querySelectorAll('.sidebar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const view = link.getAttribute('data-filter-value');
      state.activeView = view;
      state.activeSubject = 'all';
      state.activeTag = null;
      renderAll();
      closeSidebar();
    });
  });

  // Sidebar Subject Navigation
  document.getElementById('sidebarSubjectList').addEventListener('click', (e) => {
    const item = e.target.closest('.subject-nav-item');
    if (!item) return;
    const subj = item.getAttribute('data-subject');
    state.activeSubject = subj;
    state.activeTag = null;
    renderAll();
    closeSidebar();
  });

  // Clear Subject Filter button
  const navClearBtn = document.getElementById('navFilterClearBtn');
  if (navClearBtn) {
    navClearBtn.addEventListener('click', () => {
      state.activeSubject = 'all';
      state.activeTag = null;
      renderAll();
    });
  }

  // Sidebar Tags Click
  document.getElementById('sidebarTagsList').addEventListener('click', (e) => {
    const tagBtn = e.target.closest('.sidebar-tag-pill');
    if (!tagBtn) return;
    const tag = tagBtn.getAttribute('data-tag');
    state.activeTag = state.activeTag === tag ? null : tag;
    renderAll();
    closeSidebar();
  });

  // Quick Filter Pills (All / Pinned / Favorites)
  document.getElementById('quickFilterPills').addEventListener('click', (e) => {
    const pill = e.target.closest('.filter-pill');
    if (!pill) return;
    state.activeView = pill.getAttribute('data-pill');
    state.activeTag = null;
    state.activeSubject = 'all';
    renderAll();
  });

  // Active Filter Badge Clear button
  document.getElementById('clearActiveFilterBtn').addEventListener('click', () => {
    state.activeSubject = 'all';
    state.activeTag = null;
    state.searchQuery = '';
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
    document.getElementById('searchClearBtn').classList.remove('visible');
    renderAll();
  });

  // Subject Dropdown Filter in Controls
  document.getElementById('subjectFilterSelect').addEventListener('change', (e) => {
    state.activeSubject = e.target.value;
    state.activeTag = null;
    renderAll();
  });

  // Sort Order Dropdown
  document.getElementById('sortOrderSelect').addEventListener('change', (e) => {
    state.sortOrder = e.target.value;
    renderNotesGrid();
  });

  // View Switcher (Grid vs List)
  const gridBtn = document.getElementById('viewGridBtn');
  const listBtn = document.getElementById('viewListBtn');
  const notesContainer = document.getElementById('notesContainer');

  gridBtn.addEventListener('click', () => {
    state.viewMode = 'grid';
    gridBtn.classList.add('active');
    listBtn.classList.remove('active');
    notesContainer.classList.remove('list-view');
    notesContainer.classList.add('grid-view');
    renderNotesGrid();
  });

  listBtn.addEventListener('click', () => {
    state.viewMode = 'list';
    listBtn.classList.add('active');
    gridBtn.classList.remove('active');
    notesContainer.classList.remove('grid-view');
    notesContainer.classList.add('list-view');
    renderNotesGrid();
  });

  // Search Bar Interactions
  const searchInput = document.getElementById('searchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');

  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim();
    if (state.searchQuery) {
      searchClearBtn.classList.add('visible');
    } else {
      searchClearBtn.classList.remove('visible');
    }
    renderAll();
  });

  searchClearBtn.addEventListener('click', () => {
    searchInput.value = '';
    state.searchQuery = '';
    searchClearBtn.classList.remove('visible');
    renderAll();
    searchInput.focus();
  });

  // Empty State Action: Clear Filters
  document.getElementById('emptyClearFiltersBtn').addEventListener('click', () => {
    state.activeView = 'all';
    state.activeSubject = 'all';
    state.activeTag = null;
    state.searchQuery = '';
    searchInput.value = '';
    searchClearBtn.classList.remove('visible');
    renderAll();
  });

  // Study Tip Rotator
  document.getElementById('refreshTipBtn').addEventListener('click', () => {
    state.tipIndex = (state.tipIndex + 1) % STUDY_TIPS.length;
    document.getElementById('studyTipText').textContent = `"${STUDY_TIPS[state.tipIndex]}"`;
  });

  // Note Cards Grid Click Delegation
  notesContainer.addEventListener('click', (e) => {
    // 1. Favorite toggle
    const favBtn = e.target.closest('[data-action="toggle-fav"]');
    if (favBtn) {
      e.stopPropagation();
      const id = favBtn.getAttribute('data-id');
      const note = state.notes.find(n => n.id === id);
      if (note) {
        note.isFavorite = !note.isFavorite;
        saveNotes();
        renderAll();
        showToast(note.isFavorite ? 'Saved to Favorites ⭐' : 'Removed from Favorites', 'info');
      }
      return;
    }

    // 2. Pin toggle
    const pinBtn = e.target.closest('[data-action="toggle-pin"]');
    if (pinBtn) {
      e.stopPropagation();
      const id = pinBtn.getAttribute('data-id');
      const note = state.notes.find(n => n.id === id);
      if (note) {
        note.isPinned = !note.isPinned;
        saveNotes();
        renderAll();
        showToast(note.isPinned ? 'Pinned to top 📌' : 'Unpinned from top', 'info');
      }
      return;
    }

    // 3. Tag click
    const tagEl = e.target.closest('.note-tag');
    if (tagEl) {
      e.stopPropagation();
      const tag = tagEl.getAttribute('data-tag');
      state.activeTag = tag;
      renderAll();
      return;
    }

    // 4. Open Reader on Card Click
    const card = e.target.closest('.note-card');
    if (card) {
      const id = card.getAttribute('data-id');
      const note = state.notes.find(n => n.id === id);
      if (note) {
        openReader(note);
      }
    }
  });

  // Editor Modal Events
  document.getElementById('editorCloseBtn').addEventListener('click', closeEditor);
  document.getElementById('editorCancelBtn').addEventListener('click', closeEditor);
  document.getElementById('noteEditorForm').addEventListener('submit', handleEditorSubmit);
  document.getElementById('editorContent').addEventListener('input', updateEditorMetrics);

  // Editor Formatting Buttons
  document.querySelectorAll('.toolbar-buttons .tool-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const format = btn.getAttribute('data-format');
      insertEditorFormat(format);
    });
  });

  // Reader Modal Events
  document.getElementById('readerCloseBtn').addEventListener('click', closeReader);
  document.getElementById('readerCloseFooterBtn').addEventListener('click', closeReader);

  // Reader: Edit Button
  document.getElementById('readerEditBtn').addEventListener('click', () => {
    if (!state.activeReaderNoteId) return;
    const note = state.notes.find(n => n.id === state.activeReaderNoteId);
    if (note) {
      closeReader();
      openEditor(note);
    }
  });

  // Reader: Toggle Pin
  document.getElementById('readerTogglePinBtn').addEventListener('click', () => {
    if (!state.activeReaderNoteId) return;
    const note = state.notes.find(n => n.id === state.activeReaderNoteId);
    if (note) {
      note.isPinned = !note.isPinned;
      saveNotes();
      openReader(note);
      renderAll();
      showToast(note.isPinned ? 'Note pinned! 📌' : 'Note unpinned', 'info');
    }
  });

  // Reader: Toggle Favorite
  document.getElementById('readerToggleFavBtn').addEventListener('click', () => {
    if (!state.activeReaderNoteId) return;
    const note = state.notes.find(n => n.id === state.activeReaderNoteId);
    if (note) {
      note.isFavorite = !note.isFavorite;
      saveNotes();
      openReader(note);
      renderAll();
      showToast(note.isFavorite ? 'Added to favorites ⭐' : 'Removed from favorites', 'info');
    }
  });

  // Reader: Copy Text to Clipboard
  document.getElementById('readerCopyBtn').addEventListener('click', () => {
    if (!state.activeReaderNoteId) return;
    const note = state.notes.find(n => n.id === state.activeReaderNoteId);
    if (note) {
      const fullText = `${note.title}\nSubject: ${note.subject}\n\n${note.content}`;
      navigator.clipboard.writeText(fullText).then(() => {
        showToast('Note copied to clipboard! 📋', 'success');
      }).catch(() => {
        showToast('Unable to copy to clipboard', 'warning');
      });
    }
  });

  // Reader: Delete Button
  document.getElementById('readerDeleteBtn').addEventListener('click', () => {
    if (!state.activeReaderNoteId) return;
    openDeleteModal(state.activeReaderNoteId);
  });

  // Delete Confirmation Modal Events
  document.getElementById('deleteCancelBtn').addEventListener('click', closeDeleteModal);
  document.getElementById('deleteConfirmBtn').addEventListener('click', confirmDeleteNote);

  // Close modals on clicking backdrop
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        if (backdrop.id === 'editorModal') closeEditor();
        else if (backdrop.id === 'readerModal') closeReader();
        else if (backdrop.id === 'deleteConfirmModal') closeDeleteModal();
      }
    });
  });

  // Keyboard Shortcuts
  document.addEventListener('keydown', (e) => {
    // Esc: close active modal or sidebar
    if (e.key === 'Escape') {
      const editor = document.getElementById('editorModal');
      const reader = document.getElementById('readerModal');
      const del = document.getElementById('deleteConfirmModal');

      if (editor.classList.contains('open')) closeEditor();
      else if (reader.classList.contains('open')) closeReader();
      else if (del.classList.contains('open')) closeDeleteModal();
      else closeSidebar();
      return;
    }

    // Ctrl+K or /: focus search
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      searchInput.focus();
      return;
    }

    if (e.key === '/' && document.activeElement !== searchInput && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      searchInput.focus();
      return;
    }

    // Ctrl+Enter: Save Note inside Editor
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      const editor = document.getElementById('editorModal');
      if (editor.classList.contains('open')) {
        e.preventDefault();
        document.getElementById('noteEditorForm').requestSubmit();
      }
    }
  });
}

// ==========================================================================
// 9. Application Bootstrap
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  loadNotes();
  bindEventListeners();
  renderAll();
});
