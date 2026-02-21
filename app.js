// app.js — Swiftie Universe PWA

// --- STATE ---
let favorites = JSON.parse(localStorage.getItem('swiftie-favs') || '[]');
let currentSong = null;

// --- UTILS ---
const slugify = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '-');
const isFav = (songId) => favorites.includes(songId);
const saveFavs = () => localStorage.setItem('swiftie-favs', JSON.stringify(favorites));

const getSongId = (albumId, song) => `${albumId}::${slugify(song)}`;

const spotifySearch = (song, album) =>
  `https://open.spotify.com/search/${encodeURIComponent(song + ' Taylor Swift')}`;

const youtubeSearch = (song) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(song + ' Taylor Swift official')}`;

const lyricsSearch = (song) =>
  `https://genius.com/search?q=${encodeURIComponent(song + ' Taylor Swift')}`;

// --- RENDER ALBUMS ---
function renderAlbums() {
  const grid = document.getElementById('albums-grid');
  grid.innerHTML = '';

  ALBUMS.forEach(album => {
    const section = document.createElement('div');
    section.className = 'album-section';
    section.innerHTML = `
      <div class="album-header" style="--album-color: ${album.color}; --album-accent: ${album.accent}">
        <div class="album-emoji">${album.emoji}</div>
        <div class="album-info">
          <h3 class="album-name">${album.name}</h3>
          <span class="album-year">${album.year} · ${album.songs.length} canciones</span>
        </div>
        <button class="album-toggle" aria-label="Expandir">▾</button>
      </div>
      <div class="album-songs hidden">
        ${album.songs.map((song, i) => renderSongRow(song, album, i)).join('')}
      </div>
    `;

    // Toggle expand
    const header = section.querySelector('.album-header');
    const songsList = section.querySelector('.album-songs');
    const btn = section.querySelector('.album-toggle');
    header.addEventListener('click', () => {
      songsList.classList.toggle('hidden');
      btn.classList.toggle('open');
    });

    grid.appendChild(section);
  });

  // Attach fav buttons
  document.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFav(btn.dataset.id);
      updateFavBtn(btn, isFav(btn.dataset.id));
    });
  });

  // Attach song row click (modal)
  document.querySelectorAll('.song-row').forEach(row => {
    row.addEventListener('click', () => {
      const albumId = row.dataset.album;
      const song = row.dataset.song;
      const album = ALBUMS.find(a => a.id === albumId);
      openModal(song, album);
    });
  });
}

function renderSongRow(song, album, index) {
  const id = getSongId(album.id, song);
  const fav = isFav(id);
  return `
    <div class="song-row" data-album="${album.id}" data-song="${song}" style="animation-delay: ${index * 30}ms">
      <span class="song-number">${String(index + 1).padStart(2, '0')}</span>
      <span class="song-name">${song}</span>
      <button class="fav-btn ${fav ? 'active' : ''}" data-id="${id}" title="Favorita">
        ${fav ? '♥' : '♡'}
      </button>
    </div>
  `;
}

function updateFavBtn(btn, active) {
  btn.classList.toggle('active', active);
  btn.textContent = active ? '♥' : '♡';
}

// --- FAVORITES ---
function toggleFav(songId) {
  if (isFav(songId)) {
    favorites = favorites.filter(id => id !== songId);
  } else {
    favorites.push(songId);
  }
  saveFavs();
  updateFavCount();
  renderFavorites();
}

function updateFavCount() {
  const badge = document.getElementById('fav-count');
  badge.textContent = favorites.length > 0 ? favorites.length : '';
}

function renderFavorites() {
  const list = document.getElementById('favorites-list');
  const subtitle = document.getElementById('fav-subtitle');

  if (favorites.length === 0) {
    list.innerHTML = '';
    subtitle.textContent = 'Guarda canciones tocando el ♡';
    return;
  }

  subtitle.textContent = `${favorites.length} canción${favorites.length > 1 ? 'es' : ''} guardada${favorites.length > 1 ? 's' : ''}`;

  list.innerHTML = '';
  favorites.forEach(id => {
    const [albumId, ...songSlug] = id.split('::');
    const album = ALBUMS.find(a => a.id === albumId);
    if (!album) return;

    const slug = songSlug.join('::');
    const song = album.songs.find(s => slugify(s) === slug);
    if (!song) return;

    const div = document.createElement('div');
    div.className = 'fav-song-row';
    div.innerHTML = `
      <div class="fav-song-info" style="border-left: 3px solid ${album.accent}">
        <span class="fav-song-name">${song}</span>
        <span class="fav-album-label" style="color: ${album.accent}">${album.emoji} ${album.name}</span>
      </div>
      <div class="fav-actions">
        <button class="fav-open-btn" title="Ver opciones">▶</button>
        <button class="fav-remove-btn" data-id="${id}" title="Quitar de favoritas">✕</button>
      </div>
    `;

    div.querySelector('.fav-open-btn').addEventListener('click', () => openModal(song, album));
    div.querySelector('.fav-remove-btn').addEventListener('click', () => {
      toggleFav(id);
      // update any visible fav btn
      document.querySelectorAll(`.fav-btn[data-id="${id}"]`).forEach(b => updateFavBtn(b, false));
    });

    list.appendChild(div);
  });
}

// --- MODAL ---
function openModal(song, album) {
  currentSong = { song, album };
  const modal = document.getElementById('song-modal');
  document.getElementById('modal-title').textContent = song;
  document.getElementById('modal-album').textContent = `${album.emoji} ${album.name} · ${album.year}`;
  document.getElementById('modal-color').style.background = `linear-gradient(135deg, ${album.color}, ${album.accent})`;

  const id = getSongId(album.id, song);
  const favBtn = document.getElementById('modal-fav');
  favBtn.textContent = isFav(id) ? '♥' : '♡';
  favBtn.classList.toggle('active', isFav(id));
  favBtn.onclick = () => {
    toggleFav(id);
    favBtn.textContent = isFav(id) ? '♥' : '♡';
    favBtn.classList.toggle('active', isFav(id));
    // sync with list
    document.querySelectorAll(`.fav-btn[data-id="${id}"]`).forEach(b => updateFavBtn(b, isFav(id)));
  };

  document.getElementById('modal-spotify').href = spotifySearch(song, album.name);
  document.getElementById('modal-youtube').href = youtubeSearch(song);
  document.getElementById('modal-lyrics').href = lyricsSearch(song);

  modal.classList.remove('hidden');
  requestAnimationFrame(() => modal.classList.add('visible'));
}

function closeModal() {
  const modal = document.getElementById('song-modal');
  modal.classList.remove('visible');
  setTimeout(() => modal.classList.add('hidden'), 300);
}

document.getElementById('modal-close').addEventListener('click', closeModal);
document.querySelector('.modal-backdrop').addEventListener('click', closeModal);

// --- TABS ---
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(`view-${target}`).classList.add('active');

    if (target === 'favorites') renderFavorites();
  });
});

// --- INIT ---
function init() {
  renderAlbums();
  updateFavCount();

  // Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
}

init();
