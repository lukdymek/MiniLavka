(() => {
  const root = document.documentElement;
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  let saved;
  try { saved = localStorage.getItem('ml-theme'); } catch (_) {}
  let explicit = saved === 'light' || saved === 'dark';
  root.dataset.theme = explicit ? saved : preference.matches ? 'dark' : 'light';
  function updateButton() {
    const button = document.getElementById('theme-toggle');
    if (!button) return;
    const dark = root.dataset.theme === 'dark';
    const labels = {
      en: ['Dark mode', 'Light mode'],
      lv: ['Tumšais režīms', 'Gaišais režīms'],
      ru: ['Тёмный режим', 'Светлый режим']
    };
    const label = (labels[root.lang] || labels.en)[dark ? 1 : 0];
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
    button.setAttribute('aria-pressed', String(dark));
  }
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('theme-toggle').addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      explicit = true;
      try { localStorage.setItem('ml-theme', root.dataset.theme); } catch (_) {}
      updateButton();
    });
    updateButton();
  });
  document.addEventListener('languagechange', updateButton);
  preference.addEventListener('change', event => {
    if (!explicit) { root.dataset.theme = event.matches ? 'dark' : 'light'; updateButton(); }
  });
})();
