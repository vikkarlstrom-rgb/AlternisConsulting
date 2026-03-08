
function qs(sel, root=document) { return root.querySelector(sel); }
function qsa(sel, root=document) { return Array.from(root.querySelectorAll(sel)); }

const adminPanels = qsa('.admin-panel');
qsa('[data-panel]').forEach(btn => {
  btn.addEventListener('click', () => {
    qsa('[data-panel]').forEach(b => b.classList.remove('btn-primary'));
    qsa('[data-panel]').forEach(b => b.classList.add('btn-secondary'));
    btn.classList.add('btn-primary');
    btn.classList.remove('btn-secondary');
    adminPanels.forEach(panel => panel.classList.toggle('active', panel.id === btn.dataset.panel));
  });
});

function collectForm(form, type) {
  const payload = Object.fromEntries(new FormData(form).entries());
  const id = payload.id || `${type}-${Date.now()}`;
  const slug = payload.slug ? slugify(payload.slug) : slugify(payload.title);
  return {
    id,
    type,
    slug,
    title: payload.title,
    summary: payload.summary,
    author: payload.author,
    date: payload.date,
    published: payload.published === 'on',
    tags: payload.tags.split(',').map(tag => tag.trim()).filter(Boolean),
    seoTitle: payload.seoTitle,
    seoDescription: payload.seoDescription,
    image: payload.imageData || '',
    body: payload.body
  };
}

function loadImageToHidden(fileInput, hiddenInput) {
  const file = fileInput.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    hiddenInput.value = reader.result;
  };
  reader.readAsDataURL(file);
}

function renderAdminList(type, mountId, formId) {
  const items = getContentCollection(type).sort((a, b) => new Date(b.date) - new Date(a.date));
  const mount = qs(`#${mountId}`);
  const form = qs(`#${formId}`);
  if (!mount || !form) return;
  mount.innerHTML = items.length ? items.map(item => `
    <div class="admin-item">
      <div>
        <strong>${item.title}</strong>
        <div class="small">${item.slug} · ${item.published ? 'Published' : 'Draft'} · ${formatDate(item.date)}</div>
      </div>
      <div class="btn-row">
        <button class="btn btn-secondary" data-edit="${item.id}" data-type="${type}">Edit</button>
        <button class="btn btn-secondary" data-delete="${item.id}" data-type="${type}">Delete</button>
      </div>
    </div>
  `).join('') : '<div class="empty-state">No content yet.</div>';

  qsa('[data-edit]', mount).forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = getContentCollection(type).find(item => item.id === btn.dataset.edit);
      if (!selected) return;
      form.id.value = selected.id;
      form.title.value = selected.title;
      form.slug.value = selected.slug;
      form.summary.value = selected.summary;
      form.author.value = selected.author;
      form.date.value = selected.date;
      form.tags.value = (selected.tags || []).join(', ');
      form.seoTitle.value = selected.seoTitle;
      form.seoDescription.value = selected.seoDescription;
      form.body.value = selected.body;
      form.published.checked = !!selected.published;
      form.imageData.value = selected.image || '';
      window.scrollTo({ top: form.getBoundingClientRect().top + window.scrollY - 120, behavior: 'smooth' });
    });
  });

  qsa('[data-delete]', mount).forEach(btn => {
    btn.addEventListener('click', () => {
      deleteItem(type, btn.dataset.delete);
      renderAdminList(type, mountId, formId);
    });
  });
}

function wireForm(formId, type, mountId) {
  const form = qs(`#${formId}`);
  if (!form) return;
  const fileInput = form.querySelector('input[type="file"]');
  const hiddenInput = form.querySelector('input[name="imageData"]');
  if (fileInput && hiddenInput) fileInput.addEventListener('change', () => loadImageToHidden(fileInput, hiddenInput));

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    upsertItem(type, collectForm(form, type));
    form.reset();
    form.imageData.value = '';
    renderAdminList(type, mountId, formId);
  });

  qs(`[data-reset="${type}"]`)?.addEventListener('click', () => {
    resetContent(type);
    form.reset();
    form.imageData.value = '';
    renderAdminList(type, mountId, formId);
  });
}

wireForm('caseStudyForm', 'case-study', 'caseStudyList');
wireForm('insightForm', 'insight', 'insightList');
renderAdminList('case-study', 'caseStudyList', 'caseStudyForm');
renderAdminList('insight', 'insightList', 'insightForm');
