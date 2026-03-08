(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const urlInput = form.querySelector('input[name="_url"]');
  const nextInput = form.querySelector('input[name="_next"]');
  const successBox = document.getElementById('contact-success');
  const params = new URLSearchParams(window.location.search);

  if ((window.location.protocol === 'http:' || window.location.protocol === 'https:') && urlInput && nextInput) {
    const pageUrl = window.location.href.split('?')[0];
    urlInput.value = pageUrl;
    nextInput.value = pageUrl + '?sent=1';
  }

  if (params.get('sent') === '1' && successBox) {
    successBox.style.display = 'block';
    form.reset();
    if (window.history.replaceState) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }
})();
