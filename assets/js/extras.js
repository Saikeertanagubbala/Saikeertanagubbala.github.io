(function () {
  // ---------- off the clock: photos + articles ----------
  // Photos live in /assets/js/photos.js. Articles are listed below, newest first, e.g.
  //   { title: 'Article title', outlet: 'Impact 89FM', url: 'https://...' },
  var articles = [
    { title: 'The Braymores | Impact89FM Interview at Green Door', outlet: 'Impact 89FM', url: 'https://www.youtube.com/watch?v=CClNHOwqYYA' },
    { title: 'Cry Baby: Vince Staples at the Majestic Theatre', outlet: 'Impact 89FM', url: 'https://impact89fm.org/132398/music/cry-baby-vince-staples-at-the-majestic-theatre/' },
    { title: 'Love Is the Law: Love Spells at Third Man Records', outlet: 'Impact 89FM', url: 'https://impact89fm.org/131953/music/love-is-the-law-love-spells-at-third-man-records/' }
  ];

  function esc(s) {
    return String(s || '').replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  var all = window.KG_PHOTOS || [];

  function figure(p) {
    var i = all.indexOf(p);
    return '<figure><button data-i="' + i + '" aria-label="view photo: ' + esc(p.caption) + '">' +
      '<img src="' + esc(p.src) + '" alt="' + esc(p.caption) + '" loading="lazy"' + (p.full ? ' class="full"' : '') + '></button>' +
      '<figcaption>' + esc(p.caption) + '</figcaption></figure>';
  }

  // photo viewer (both pages)
  var box = document.getElementById('lightbox');
  if (box) {
    var lbImg = document.getElementById('lbImg');
    var lbCap = document.getElementById('lbCap');
    document.addEventListener('click', function (e) {
      var b = e.target.closest('.gallery button[data-i]');
      if (!b) return;
      var p = all[+b.getAttribute('data-i')];
      lbImg.src = p.src;
      lbImg.alt = p.caption;
      lbCap.textContent = p.caption;
      if (box.showModal) box.showModal(); else box.setAttribute('open', '');
    });
    document.getElementById('lbClose').addEventListener('click', function () { box.close(); });
    box.addEventListener('click', function (e) { if (e.target === box) box.close(); });
  }

  // home page: the featured photos + a link to the rest
  var gallery = document.getElementById('gallery');
  if (gallery && all.length) {
    document.getElementById('photoBlock').hidden = false;
    var featured = all.filter(function (p) { return p.featured; });
    gallery.innerHTML = (featured.length ? featured : all.slice(0, 4)).map(figure).join('');
  }

  // photography page: every photo
  var more = document.getElementById('moreGallery');
  if (more) more.innerHTML = all.map(figure).join('');

  // articles (home page)
  var list = document.getElementById('articles');
  if (list && articles.length) {
    document.getElementById('writingBlock').hidden = false;
    list.innerHTML = articles.map(function (a, i) {
      return '<li><a href="' + esc(a.url) + '" target="_blank" rel="noopener">' +
        '<span class="a-num">' + (i + 1 < 10 ? '0' : '') + (i + 1) + '</span>' +
        '<span class="a-title">' + esc(a.title) + '</span>' +
        '<span class="a-meta">' + esc(a.outlet) + (a.date ? ' · ' + esc(a.date) : '') + '</span>' +
        '<span class="a-arrow" aria-hidden="true">↗</span></a></li>';
    }).join('');
  }
})();
