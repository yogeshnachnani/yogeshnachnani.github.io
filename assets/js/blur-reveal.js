(function () {
  if (window.__blurRevealInit) return;
  window.__blurRevealInit = true;

  document.addEventListener('click', function (e) {
    var wrap = e.target.closest('.blur-reveal');
    if (!wrap) return;

    var img = wrap.querySelector('img.blurred');
    if (!img) return;

    e.preventDefault();
    e.stopPropagation();
    img.classList.remove('blurred');

    var hint = wrap.querySelector('.reveal-hint');
    if (hint) hint.remove();
  }, true);
})();
