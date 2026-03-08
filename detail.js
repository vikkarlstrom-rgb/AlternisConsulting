
function setMeta(name, content, attr = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content || '');
}

(function renderDetailPage() {
  const mount = document.querySelector('[data-detail-root]');
  if (!mount) return;
  const params = new URLSearchParams(location.search);
  const type = mount.dataset.type;
  const slug = params.get('slug');
  const item = findItemBySlug(type, slug);
  if (!item || !item.published) {
    mount.innerHTML = '<div class="empty-state"><h3>Content not found</h3><p>Please return to the overview page and select another entry.</p></div>';
    return;
  }
  const backHref = type === 'case-study' ? 'case-studies.html' : 'insights.html';
  const backLabel = type === 'case-study' ? 'Case Studies' : 'Insights';
  const tags = (item.tags || []).map(tag => `<span class="tag">${tag}</span>`).join('');
  const media = item.image ? `<img src="${item.image}" alt="${item.title}" style="border-radius:24px; margin-bottom:1.4rem; aspect-ratio: 16 / 8.5; object-fit:cover; width:100%;">` : '';
  mount.innerHTML = `
    <div class="article-content">
      <div class="kicker">${type === 'case-study' ? 'Case study' : 'Insight'}</div>
      <h1 style="font-size: clamp(2.2rem, 5vw, 4.1rem);">${item.title}</h1>
      <p class="lead">${item.summary}</p>
      <div class="article-meta"><span>${formatDate(item.date)}</span><span>${item.author}</span></div>
      <div class="tag-row">${tags}</div>
      <div style="height:1.2rem"></div>
      ${media}
      ${item.body}
    </div>
  `;
  document.title = item.seoTitle || item.title;
  setMeta('description', item.seoDescription);
  setMeta('og:title', item.seoTitle || item.title, 'property');
  setMeta('og:description', item.seoDescription, 'property');
})();
