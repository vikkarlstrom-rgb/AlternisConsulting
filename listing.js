
function renderCards(type, mountSelector, limit = null) {
  const mount = document.querySelector(mountSelector);
  if (!mount) return;
  let items = getPublishedItems(type);
  if (limit) items = items.slice(0, limit);
  if (!items.length) {
    mount.innerHTML = '<div class="empty-state">No published content yet.</div>';
    return;
  }
  mount.innerHTML = items.map(item => {
    const href = type === 'case-study' ? `case-study.html?slug=${item.slug}` : `insight.html?slug=${item.slug}`;
    const tagRow = (item.tags || []).map(tag => `<span class="tag">${tag}</span>`).join('');
    const media = item.image ? `<img src="${item.image}" alt="${item.title}" style="border-radius:18px; margin-bottom:1rem; aspect-ratio: 16 / 9; object-fit:cover; width:100%;">` : '';
    return `
      <article class="card path-card">
        ${media}
        <div class="kicker">${type === 'case-study' ? 'Case study' : 'Insight'}</div>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
        <div class="article-meta">
          <span>${formatDate(item.date)}</span>
          <span>${item.author}</span>
        </div>
        <div class="tag-row">${tagRow}</div>
        <div class="btn-row"><a class="btn btn-link" href="${href}">Read more →</a></div>
      </article>
    `;
  }).join('');
}
