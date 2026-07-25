document.addEventListener('DOMContentLoaded', function () {
  var sections = document.querySelectorAll('.section');

  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(function (s) { revealObserver.observe(s); });
});
