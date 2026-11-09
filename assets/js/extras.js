(function () {
  // ---------- off the clock: photos + articles ----------
  // Each section stays hidden until it has at least one entry.

  // Concert photos. Put the image files in /assets/img/photos/ and list them here, e.g.
  //   { src: '/assets/img/photos/artist-venue.jpg', caption: 'Artist · Venue, Oct 2025' },
  var photos = [
    { src: '/assets/img/photos/love-spells-1.jpg', caption: 'Love Spells · Third Man Records' },
    { src: '/assets/img/photos/love-spells-2.jpg', caption: 'Love Spells · Third Man Records' },
    { src: '/assets/img/photos/love-spells-3.jpg', caption: 'Love Spells · Third Man Records' },
    { src: '/assets/img/photos/orca-1.jpg', caption: 'Orca (opener) · Third Man Records' }
  ];

  // Articles and interviews, e.g.
  //   { title: 'Article title', outlet: 'Impact 89FM', date: 'Oct 2025', url: 'https://...' },
  var articles = [
    { title: 'Love Is the Law: Love Spells at Third Man Records', outlet: 'Impact 89FM', url: 'https://impact89fm.org/131953/music/love-is-the-law-love-spells-at-third-man-records/' }
  ];

  function esc(s) {
    return String(s || '').replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  // photos
  var gallery = document.getElementById('gallery');
  var box = document.getElementById('lightbox');
  var lbImg = document.getElementById('lbImg');
  var lbCap = document.getElementById('lbCap');

  if (photos.length) {
    document.getElementById('photoBlock').hidden = false;
    gallery.innerHTML = photos.map(function (p, i) {
      return '<figure><button data-i="' + i + '" aria-label="view photo: ' + esc(p.caption) + '">' +
        '<img src="' + esc(p.src) + '" alt="' + esc(p.caption) + '" loading="lazy"></button>' +
        (p.caption ? '<figcaption>' + esc(p.caption) + '</figcaption>' : '') + '</figure>';
    }).join('');

    gallery.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-i]');
      if (!b) return;
      var p = photos[+b.getAttribute('data-i')];
      lbImg.src = p.src;
      lbImg.alt = p.caption || '';
      lbCap.textContent = p.caption || '';
      if (box.showModal) box.showModal(); else box.setAttribute('open', '');
    });
    document.getElementById('lbClose').addEventListener('click', function () { box.close(); });
    box.addEventListener('click', function (e) { if (e.target === box) box.close(); });
  }

  // articles
  if (articles.length) {
    document.getElementById('writingBlock').hidden = false;
    document.getElementById('articles').innerHTML = articles.map(function (a, i) {
      return '<li><a href="' + esc(a.url) + '" target="_blank" rel="noopener">' +
        '<span class="a-num">' + (i + 1 < 10 ? '0' : '') + (i + 1) + '</span>' +
        '<span class="a-title">' + esc(a.title) + '</span>' +
        '<span class="a-meta">' + esc(a.outlet) + (a.date ? ' · ' + esc(a.date) : '') + '</span>' +
        '<span class="a-arrow" aria-hidden="true">↗</span></a></li>';
    }).join('');
  }
})();
