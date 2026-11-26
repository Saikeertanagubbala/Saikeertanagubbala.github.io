// Concert photography, grouped by show. Used by the home page preview and /photography.
// To add a show: put the images in /assets/img/photos/ and add a block below.
// `featured: true` photos appear in the home page preview (keep it to about 4).
// Shows with no photos yet are skipped.
window.KG_PHOTOS = [
  {
    artist: 'Love Spells', opener: 'Orca', venue: 'Third Man Records',
    article: 'https://impact89fm.org/131953/music/love-is-the-law-love-spells-at-third-man-records/',
    photos: [
      { src: '/assets/img/photos/love-spells-1.jpg', featured: true },
      { src: '/assets/img/photos/love-spells-2.jpg' },
      { src: '/assets/img/photos/love-spells-3.jpg' },
      { src: '/assets/img/photos/orca-1.jpg', who: 'Orca (opener)' }
    ]
  },
  {
    artist: 'Vince Staples', opener: 'Duckwrth', venue: 'Majestic Theatre, Detroit',
    article: 'https://impact89fm.org/132398/music/cry-baby-vince-staples-at-the-majestic-theatre/',
    photos: [
      { src: '/assets/img/photos/vince-staples-1.jpg', featured: true },
      { src: '/assets/img/photos/duckwrth-1.jpg', who: 'Duckwrth (opener)' }
    ]
  },
  {
    artist: 'Strange Skin', venue: 'The Basement, Impact 89FM',
    photos: []
  },
  {
    artist: 'Jackson Marshall', venue: 'Green Door, Lansing',
    photos: [
      { src: '/assets/img/photos/jackson-marshall-1.jpg', featured: true }
    ]
  },
  {
    artist: 'The Braymores', venue: 'Green Door, Lansing',
    photos: [
      { src: '/assets/img/photos/the-braymores-1.jpg', featured: true }
    ]
  }
];
