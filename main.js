
const NAV_TOGGLE = document.querySelector('.mobile-toggle');
const NAV_LINKS = document.querySelector('.nav-links');
if (NAV_TOGGLE && NAV_LINKS) {
  NAV_TOGGLE.addEventListener('click', () => NAV_LINKS.classList.toggle('open'));
}

function formatDate(dateStr) {
  try {
    return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch {
    return dateStr;
  }
}

function slugify(input) {
  return String(input || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function getStorage(key, fallback) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
}

function setStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
