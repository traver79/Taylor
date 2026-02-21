# 🌟 Swiftie Universe PWA

Una Progressive Web App dedicada a Taylor Swift — toda su discografía, sistema de favoritas, reproducción en Spotify/YouTube y letras en Genius.

## ✨ Características

- 📀 **15 álbumes** con todas sus canciones (incluyendo Taylor's Versions y The Tortured Poets Department)
- ♡ **Sistema de favoritas** guardado en el dispositivo
- 🎵 **Reproducir** directamente en Spotify
- 📺 **Ver en YouTube**
- 📝 **Seguir la letra** vía Genius
- 📱 **Instalable** en iPhone (Safari) y Android
- 🌙 **Funciona offline** gracias al Service Worker

---

## 🚀 Publicar en GitHub Pages

### Paso 1: Crear repositorio
1. Ve a [github.com/new](https://github.com/new)
2. Nómbralo `swiftie-universe` (o como quieras)
3. Márcalo como **público**
4. Haz clic en **Create repository**

### Paso 2: Subir archivos
Opción A — Desde la web:
1. Arrastra todos los archivos de esta carpeta al repositorio
2. Haz clic en **Commit changes**

Opción B — Con Git:
```bash
git init
git add .
git commit -m "🌟 Swiftie Universe PWA"
git remote add origin https://github.com/TU_USUARIO/swiftie-universe.git
git branch -M main
git push -u origin main
```

### Paso 3: Activar GitHub Pages
1. Ve a tu repo → **Settings** → **Pages**
2. En "Source" selecciona **Deploy from a branch**
3. Selecciona rama **main** y carpeta **/ (root)**
4. Haz clic en **Save**

### Paso 4: ¡Lista!
Tu URL será:
```
https://TU_USUARIO.github.io/swiftie-universe/
```

---

## 📱 Instalar como app en iPhone

1. Abre la URL en **Safari** (importante: no Chrome ni Firefox)
2. Toca el botón de compartir (⬆️)
3. Selecciona **"Añadir a pantalla de inicio"**
4. Toca **Añadir** — ¡ya tienes la app! ✦

---

## 📁 Estructura de archivos

```
swiftie-universe/
├── index.html      → HTML principal
├── style.css       → Estilos (dark luxury + gold)
├── app.js          → Lógica de la app
├── data.js         → Discografía completa
├── sw.js           → Service Worker (offline)
├── manifest.json   → Config PWA
└── icons/
    ├── icon-192.png
    └── icon-512.png
```
