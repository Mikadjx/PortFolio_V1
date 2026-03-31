# Portfolio

**Site en ligne** : https://portfolio-v1-d5a.pages.dev/

Portfolio moderne et ultra-rapide construit avec **React + Vite + Tailwind CSS + Framer Motion**.

![React](https://img.shields.io/badge/React-18.3-blue)
![Vite](https://img.shields.io/badge/Vite-6.0-purple)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-cyan)

## Stack Technique

- **React 18.3** - Framework UI moderne
- **Vite 6.0** - Build tool ultra-rapide (HMR instantané)
- **Tailwind CSS 3.4** - Framework CSS utility-first
- **Framer Motion 11** - Animations fluides et performantes
- **Google Fonts** - Space Mono + DM Sans

## Installation & Lancement

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev

# Le site s'ouvre sur http://localhost:5173
```

## Build pour Production

```bash
# Créer le build optimisé
npm run build

# Tester le build en local
npm run preview
```

Le dossier `dist/` contient tous les fichiers optimisés et prêts à être déployés.

## Design

**Style néo-brutaliste moderne** avec :

- Palette de couleurs audacieuse
  - Electric Green: `#00FF94`
  - Sunset Orange: `#FF6B35`
  - Midnight Blue: `#0A0E27`
  - Concrete: `#E8E8E8`
  
-  Typographie distinctive
  - Display: Space Mono (monospace)
  - Body: DM Sans (sans-serif)
  
- Animations fluides avec Framer Motion
  - Fade in au scroll
  - Hover effects sophistiqués
  - Stagger animations
  - Smooth page transitions
  
-  Design moderne
  - Bordures épaisses et contrastes forts
  - Effet grain subtle pour la texture
  - Micro-interactions partout
  - 100% responsive (mobile first)

##  Déploiement

### Option 1: Netlify (Recommandé - Gratuit)

1. Push ton code sur GitHub
2. Va sur [netlify.com](https://netlify.com)
3. "Add new site" → "Import from Git"
4. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Deploy! 

### Option 2: Vercel (Gratuit)

1. Push sur GitHub
2. Va sur [vercel.com](https://vercel.com)
3. "Import Project" → Sélectionne ton repo
4. Vercel détecte automatiquement Vite
5. Deploy! 

### Option 3: GitHub Pages (Gratuit)

```bash
# Installer gh-pages
npm install -D gh-pages
# Déployer
npm run deploy
```

## Responsive Design

Le portfolio est optimisé pour tous les écrans :

- **Mobile** (< 768px): Layout empilé, navigation simplifiée
- **Tablet** (768px - 1024px): Grid 2 colonnes
- **Desktop** (> 1024px): Grid 3 colonnes, animations complètes

## Performance

- Vite garantit un démarrage instantané (< 1s)
- Code splitting automatique
- Lazy loading des animations
- CSS optimisé avec PurgeCSS
- Bundle ultra-léger (~50KB gzippé)
- Score Lighthouse: 95+

## Personnalisation

### Modifier les couleurs

Édite `tailwind.config.js`:

```js
colors: {
  'electric': '#00FF94',  // Ton vert
  'sunset': '#FF6B35',    // Ton orange
  'midnight': '#0A0E27',  // Ton fond
  'concrete': '#E8E8E8',  // Ton texte
}
```

### Modifier le contenu

Tout est dans `src/App.jsx`:

- **Projects**: Tableau `projects`
- **Skills**: Tableau `skills`
- **Contact**: Section contact

### Changer les polices

Édite `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=TaPolice:wght@400;700&display=swap');
```

Puis dans `tailwind.config.js`:

```js
fontFamily: {
  'display': ['"TaPolice"', 'sans-serif'],
}
```

## 🔧 Structure du Projet

```
portfolio/
├── src/
│   ├── App.jsx           # Composant principal
│   ├── main.jsx          # Point d'entrée React
│   └── index.css         # Styles Tailwind
├── public/               # Assets statiques
├── index.html            # HTML de base
├── vite.config.js        # Config Vite
├── tailwind.config.js    # Config Tailwind
├── postcss.config.js     # Config PostCSS
└── package.json          # Dépendances
```

## Sections du Portfolio

1. **Hero** - Intro avec titre animé et CTA
2. **Projets** - Grid de projets avec hover effects
3. **Compétences** - Barres de progression animées
4. **Contact** - Email et liens sociaux

## Animations

Utilise **Framer Motion** pour :

- Fade in progressif au scroll
- Hover effects sur les cartes
- Animations de barres de compétences
- Transitions de page fluides
- Stagger animations (décalage)

## Dépannage

**Problème**: `npm install` échoue
```bash
# Solution: Nettoyer le cache
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

**Problème**: Animations lentes
```bash
# Solution: Désactiver les animations en dev
# Dans App.jsx, ajoute:
const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
```

**Problème**: Erreur de build
```bash
# Vérifier la version de Node
node --version  # Doit être >= 18

# Mettre à jour Node si nécessaire
```

## Documentation Utile

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)

## Contact

**Mickael Dijoux**
- Email: mickael.dijoux97@gmail.com
- GitHub: [Mikadjx](https://github.com/Mikadjx)
- LinkedIn: Mickael Dijoux

## Licence

Libre d'utilisation - Personnalise à ta guise ! 🎉

---

**Fait avec ❤️ et beaucoup de ☕**

