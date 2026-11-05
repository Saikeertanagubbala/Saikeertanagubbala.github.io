(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- intro: typewriter + popup ----------
  var typed = document.getElementById('typed');
  var title = document.querySelector('.hero-title');
  var popup = document.querySelector('.popup');
  var photo = document.querySelector('.hero-photo');
  var hero = document.querySelector('.hero');

  var text = 'keertana gubbala.\ni bridge.';
  var speed = 110;
  var i = 0;

  function render(n) {
    typed.innerHTML = text.slice(0, n).replace('\n', '<br>') + (n === text.length ? '<span class="pink">*</span>' : '');
  }

  function type() {
    if (i <= text.length) {
      render(i);
      i++;
      setTimeout(type, speed);
    } else {
      popup.classList.add('show');
      setTimeout(function () {
        popup.classList.remove('show');
        i = 0;
        render(0);
        setTimeout(type, 400);
      }, 2200);
    }
  }

  requestAnimationFrame(function () {
    photo.classList.add('show');
    title.classList.add('in');
    if (reduce) {
      render(text.length);
      popup.classList.add('show');
    } else {
      type();
    }
  });

  // ---------- fade hero on scroll ----------
  function onScroll() {
    var y = window.scrollY;
    hero.classList.toggle('hide', y > 200);
    photo.classList.toggle('show', y <= 400);
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);

  // ---------- project dropdowns ----------
  document.querySelectorAll('.project').forEach(function (project) {
    var row = project.querySelector('.project-row');
    var detail = project.querySelector('.detail');

    row.addEventListener('click', function () {
      var open = project.classList.toggle('open');
      row.setAttribute('aria-expanded', open);

      if (open && reduce) {
        detail.style.height = 'auto';
      } else if (open) {
        detail.style.height = detail.scrollHeight + 'px';
        detail.addEventListener('transitionend', function done(e) {
          if (e.propertyName !== 'height') return;
          if (project.classList.contains('open')) detail.style.height = 'auto';
          detail.removeEventListener('transitionend', done);
        });
      } else {
        detail.style.height = detail.scrollHeight + 'px';
        detail.offsetHeight; // force reflow so the collapse animates
        detail.style.height = '0px';
      }
    });
  });
})();
