import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showLivePreview, setShowLivePreview] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Fermer les overlays avec Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setShowLivePreview(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Fermer le menu mobile au redimensionnement
  useEffect(() => {
    const close = () => { if (window.innerWidth >= 768) setMobileMenuOpen(false); };
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  const navLinks = [
    { label: 'Accueil', id: 'accueil' },
    { label: 'À propos', id: 'a-propos' },
    { label: 'Projets', id: 'projets' },
    { label: 'Expérience', id: 'experience' },
    { label: 'Compétences', id: 'competences' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  /* ─── Données projets ─────────────────────────────────────── */

  const projects = [
    {
      title: 'LULO STORE',
      role: 'Chef de Projet E-commerce',
      description:
        "Site e-commerce PrestaShop de vente de t-shirts personnalisés sur le thème de l'Amérique latine. Intégration du système de paiement SumUp, personnalisation du thème et gestion du catalogue.",
      tech: ['PrestaShop', 'PHP', 'SumUp API', 'MySQL'],
      color: 'bg-sunset',
      image: '/images/lulo_store.jpg',
      website: 'https://lulo.fabdevlab.fr/',
      github: null,
      details: {
        context:
          "Projet client mené de bout en bout : analyse du besoin, cahier des charges, intégration et mise en ligne. Rôle de chef de projet avec un interlocuteur unique côté client.",
        tasks: [
          "Rédaction du cahier des charges avec le client",
          "Réunions régulières de suivi et validation",
          "Intégration et configuration du paiement SumUp",
          "Personnalisation avancée du thème PrestaShop",
          "Gestion du catalogue de produits personnalisés",
          "Mise en ligne, tests et suivi post-déploiement",
        ],
      },
    },
    {
      title: 'POMPIERS CALENDAR',
      role: 'Développeur Full-Stack',
      description:
        "Application responsive de gestion de tournée de calendriers pour pompiers volontaires. Cartographie dynamique, suivi des dons et tableau de bord statistiques.",
      tech: ['ASP.NET MVC', 'C#', 'SQL Server', 'Procédures stockées'],
      color: 'bg-electric',
      image: '/images/logo_calendar.png',
      website: null,
      github: null,
      details: {
        context:
          "Outil interne développé pour le centre de secours de Saint-Pryvé-Saint-Mesmin. Simplifie la coordination des tournées de vente de calendriers et le suivi des dons.",
        tasks: [
          "Gestion des adresses et des secteurs géographiques",
          "Suivi et création des dons par adresse",
          "Système de statuts : absent, refus, à repasser…",
          "Répartition des secteurs par pompier",
          "Espace administrateur (chef de centre & trésorier)",
          "Carte dynamique interactive des tournées",
          "Dashboard avec statistiques en temps réel",
          "Architecture optimisée via procédures stockées",
        ],
      },
    },
    {
      title: 'MATICES BAND',
      role: 'Développeur Full-Stack',
      description:
        "Plateforme web complète pour groupe de rock. Vitrine publique, espace membres sécurisé, gestion multimédia, partage de partitions et outils de collaboration.",
      tech: ['Symfony', 'PHP', 'MySQL', 'JavaScript'],
      color: 'bg-sunset',
      image: '/images/matices-band.png',
      website: 'https://matices-project.pages.dev/',
      github: null,
      details: {
        context:
          "Projet personnel. Couvre la vitrine publique du groupe autant que les outils internes pour les membres : répétitions, partitions, matériel.",
        tasks: [
          "Présentation du groupe et contenu multimédia",
          "Intégration de vidéos et galerie photos",
          "Formulaire de contact pour demandes de concert",
          "Espace personnel sécurisé par musicien",
          "Dépôt et partage de partitions",
          "Système de sondages pour le répertoire",
          "Gestion du matériel musical",
          "Suivi des présences aux répétitions avec e-mails automatiques",
          "Panel d'administration modulable",
        ],
      },
    },
  ];

  /* ─── Expériences professionnelles ──────────────────────────── */

  const experiences = [
    {
      company: 'MSL Circuit',
      role: 'Développeur informatique',
      type: 'Alternance — Mastère Manager en architecture et applications des systèmes d’information',
      period: '2024 — 2026',
      location: 'Orléans',
      current: true,
      tasks: [
        "Développement et maintenance d'applications web métier",
        "Stack principale : ASP.NET MVC, SQL Server(procedures stockées), jQuery",
        "Mise en place de pipelines CI/CD",
        "Tests unitaires et participation aux revues de code",
        "Travail en équipe avec méthode agile",
      ],
    },
    {
      company: 'Hutchinson',
      role: 'Développeur Web',
      type: 'Alternance — Bachelor concepteur développeur d’applications',
      period: '2023 — 2024',
      location: 'Orléans',
      current: false,
      tasks: [
        "Développement d'outils de suivi et stockage de machine de production interne",
        "Stack : ASP.NET MVC, Angular, postgreSQL",
        "Maintenance et évolution d'applications existantes",
        "Analyse des besoins et rédaction de spécifications techniques",
      ],
    },
  ];

  /* ─── Compétences techniques ────────────────────────────────── */

  const skillCategories = [
    {
      title: 'Back-end',
      skills: [
        { name: 'C# / ASP.NET', level: 90 },
        { name: 'PHP / Symfony', level: 75 },
        { name: 'Node.js', level: 65 },
      ],
    },
    {
      title: 'Front-end',
      skills: [
        { name: 'HTML / CSS / Sass', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Angular', level: 75 },
      ],
    },
    {
      title: 'Bases de données',
      skills: [
        { name: 'SQL Server', level: 80 },
        { name: 'MySQL', level: 75 },
      ],
    },
    {
      title: 'Outils',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Bootstrap', level: 80 },
        { name: 'Docker', level: 60 },
      ],
    },
  ];

  /* ─── Variantes d'animation ────────────────────────────────── */

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const fadeUp = {
    hidden: { y: 24, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  /* ─── JSX ──────────────────────────────────────────────────── */

  return (
    <div className="min-h-screen grain overflow-x-hidden">

      {/* ━━━ NAVIGATION ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-midnight/90 backdrop-blur-md border-b-4 border-electric"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollTo('accueil')}
              className="text-2xl font-display font-bold text-electric"
            >
              MD_
            </motion.button>

            {/* Liens desktop */}
            <div className="hidden md:flex gap-5 lg:gap-8 font-display text-xs lg:text-sm">
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollTo(link.id)}
                  className="text-concrete/70 hover:text-electric transition-colors uppercase tracking-wider"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            {/* Hamburger mobile */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Menu"
            >
              <motion.span
                className="w-6 h-0.5 bg-electric block"
                animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-electric block"
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-electric block"
                animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              />
            </button>
          </div>
        </div>

        {/* Menu déroulant mobile */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-midnight border-t-2 border-electric/30 overflow-hidden"
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className="text-left text-concrete/70 hover:text-electric font-display uppercase tracking-wider text-sm py-3 border-b border-concrete/10 last:border-0 transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ━━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        id="accueil"
        className="min-h-screen flex items-center justify-center relative pt-20 px-4"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-electric/5 via-transparent to-sunset/5" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-6xl mx-auto text-center relative z-10"
        >

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-9xl font-display font-bold mb-6 leading-none"
          >
            <span className="text-outline text-electric">MICKAEL</span>
            <br />
            <span className="text-concrete">DIJOUX</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl lg:text-2xl text-concrete/80 max-w-3xl mx-auto mb-12 leading-relaxed px-4"
          >
            Développeur ASP.NET & Symfony passionné, en alternance chez MSL Circuit.
            <br className="hidden sm:block" />
            Ex-cuisinier reconverti par conviction. Pompier volontaire. Batteur.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex gap-4 md:gap-6 justify-center flex-wrap px-4"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,255,148,0.5)' }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Mikadjx"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 md:px-8 py-3 md:py-4 bg-electric text-midnight font-display font-bold uppercase tracking-wider border-4 border-electric hover:bg-transparent hover:text-electric transition-all text-sm md:text-base"
            >
              GitHub →
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255,107,53,0.5)' }}
              whileTap={{ scale: 0.95 }}
              href="mailto:mickael.dijoux97@gmail.com"
              className="px-6 md:px-8 py-3 md:py-4 bg-transparent text-sunset font-display font-bold uppercase tracking-wider border-4 border-sunset hover:bg-sunset hover:text-midnight transition-all text-sm md:text-base"
            >
              Me contacter
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Formes décoratives */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="hidden lg:block absolute bottom-10 left-10 w-32 h-32 border-4 border-electric/20 rotate-12"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="hidden lg:block absolute top-40 right-20 w-24 h-24 border-4 border-sunset/20 -rotate-12"
        />

        {/* Indicateur de scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-electric/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-electric/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ━━━ À PROPOS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="a-propos" className="py-20 md:py-32 px-4 bg-concrete/5">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-8xl font-display font-bold mb-12 md:mb-20 text-sunset"
          >
            À PROPOS_
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Récit */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-xl md:text-2xl text-concrete leading-relaxed font-body">
                Développeur{' '}
                <span className="text-electric font-bold">Fullstack</span>{' '}
                orienté web, avec une expertise en conception d'applications robustes et en gestion de bases de données.
              </p>
              <p className="text-lg text-concrete/80 leading-relaxed">
                Je conçois et développe des solutions complètes, de l'interface
                utilisateur jusqu'au déploiement, en m'appuyant sur des stacks
                telles que{' '}
                <span className="text-sunset">ASP.NET MVC</span>,{' '}
                <span className="text-sunset">Symfony</span> ou tout autre
                environnement adapté aux besoins du projet.
              </p>

              {/* Points clés */}
              <ul className="space-y-3 pt-2">
                {[
                  'Réalisation de projets end-to-end (front-end, back-end, déploiement)',
                  'Mise en place de pipelines CI/CD (tests automatisés, qualité, monitoring)',
                  'Approche centrée sur la performance, la maintenabilité et les bonnes pratiques',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-concrete/75 text-base">
                    <span className="text-electric text-lg mt-0.5 flex-shrink-0">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <p className="text-lg text-concrete/80 leading-relaxed">
                Curieux et adaptable, je suis à l'aise pour monter rapidement
                en compétence sur de nouvelles technologies et m'intégrer à
                différents environnements techniques.
              </p>

              {/* Liens */}
              <div className="flex flex-wrap gap-4 pt-2">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href="https://github.com/Mikadjx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-electric text-midnight font-display font-bold uppercase text-xs tracking-wider border-2 border-electric hover:bg-transparent hover:text-electric transition-all"
                >
                  GitHub →
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href="mailto:mickael.dijoux97@gmail.com"
                  className="px-5 py-2.5 border-2 border-sunset text-sunset font-display font-bold uppercase text-xs tracking-wider hover:bg-sunset hover:text-midnight transition-all"
                >
                  mickael.dijoux97@gmail.com
                </motion.a>
              </div>
            </motion.div>

            {/* Stats + disponibilité */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="space-y-6"
            >
              {/* Chiffres clés */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '3+', label: "ans d'expérience", color: 'text-electric' },
                  { value: '30', label: 'ans à la reprise', color: 'text-sunset' },
                  { value: '10', label: 'ans en cuisine', color: 'text-electric' },
                  { value: 'Oct. 2026', label: 'disponible CDI', color: 'text-sunset' },
                ].map(({ value, label, color }) => (
                  <div key={label} className="p-5 md:p-6 border-2 border-concrete/20 bg-midnight">
                    <div className={`text-2xl md:text-4xl font-display font-bold ${color} mb-1`}>
                      {value}
                    </div>
                    <p className="font-display uppercase text-xs text-concrete/50">{label}</p>
                  </div>
                ))}
              </div>

              {/* Disponibilité */}
              <div className="p-6 border-2 border-electric/30 bg-electric/5">
                <p className="font-display text-xs uppercase tracking-widest text-electric mb-4">
                  Disponibilité
                </p>
                <ul className="space-y-2 text-concrete/70 text-sm font-body">
                  <li className="flex items-center gap-2">
                    <span className="text-electric">▹</span> Actuellement en fin d'études
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-electric">▹</span> CDI à partir d'octobre 2026
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-electric">▹</span> France, international, télétravail
                  </li>
                </ul>
              </div>

              {/* Centres d'intérêt */}
              <div>
                <p className="font-display text-xs uppercase tracking-widest text-concrete/50 mb-4">
                  En dehors du code
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Pompier volontaire', 'Batterie', 'Cuisine', 'Sport'].map((interest) => (
                    <span
                      key={interest}
                      className="px-4 py-2 bg-midnight border-2 border-concrete/20 text-concrete/70 font-display text-sm uppercase tracking-wide"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━ PROJETS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="projets" className="py-20 md:py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-8xl font-display font-bold mb-12 md:mb-20 text-electric"
          >
            PROJETS_
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="group flex flex-col"
              >
                <div className="flex flex-col h-full bg-concrete/5 border-4 border-concrete/20 hover:border-electric transition-all duration-300 overflow-hidden">

                  {/* Aperçu image */}
                  <div className="relative overflow-hidden" style={{ height: '220px' }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent" />
                    <div className={`absolute top-4 right-4 w-2 h-14 ${project.color}`} />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-electric font-display text-xs uppercase tracking-widest mb-1">
                        {project.role}
                      </p>
                      <h3 className="text-xl md:text-2xl font-display font-bold text-concrete">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Corps de la card */}
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-concrete/70 text-sm leading-relaxed mb-5 flex-1">
                      {project.description}
                    </p>

                    {/* Badges techno */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-midnight border border-electric/30 text-electric text-xs font-display uppercase"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Boutons d'action */}
                    <div className="flex gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 py-3 bg-electric text-midnight font-display font-bold uppercase text-xs tracking-wider border-2 border-electric hover:bg-transparent hover:text-electric transition-all"
                      >
                        Voir le projet →
                      </motion.button>
                      {project.website && (
                        <motion.a
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.97 }}
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-3 border-2 border-concrete/30 text-concrete/50 hover:border-electric hover:text-electric font-display text-xs uppercase tracking-wider transition-all"
                          title="Ouvrir le site"
                        >
                          ↗
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ MODAL PROJET ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnight/95 backdrop-blur-sm"
            onClick={() => { setSelectedProject(null); setShowLivePreview(false); }}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', damping: 26, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-midnight border-4 border-electric max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* En-tête collant */}
              <div className="sticky top-0 z-10 bg-midnight border-b-2 border-electric/30 px-6 md:px-10 py-5 flex justify-between items-center">
                <div>
                  <h3 className="text-2xl md:text-4xl font-display font-bold text-electric">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sunset font-display uppercase text-xs md:text-sm tracking-widest mt-1">
                    {selectedProject.role}
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => { setSelectedProject(null); setShowLivePreview(false); }}
                  className="text-concrete hover:text-electric text-3xl font-display leading-none ml-4 flex-shrink-0"
                >
                  ×
                </motion.button>
              </div>

              <div className="p-6 md:p-10">

                {/* Zone preview */}
                <div className="mb-8">
                  {!showLivePreview ? (
                    <div className="space-y-3">
                      <div className="border-4 border-concrete/20 overflow-hidden">
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          className="w-full h-auto"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedProject.website ? (
                          <>
                            <motion.button
                              onClick={() => setShowLivePreview(true)}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="py-4 bg-electric/10 border-2 border-electric text-electric font-display uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-electric hover:text-midnight transition-all text-sm"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                              </svg>
                              Aperçu en direct
                            </motion.button>
                            <motion.a
                              href={selectedProject.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="py-4 bg-sunset/10 border-2 border-sunset text-sunset font-display uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-sunset hover:text-midnight transition-all text-sm"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              Ouvrir le site
                            </motion.a>
                          </>
                        ) : (
                          <div className="sm:col-span-2 py-4 bg-concrete/5 border-2 border-concrete/20 text-concrete/40 font-display uppercase tracking-wider flex items-center justify-center text-sm">
                            Application interne — pas de démo publique
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* Navigateur intégré */
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="border-4 border-electric overflow-hidden"
                    >
                      {/* Chrome du navigateur */}
                      <div className="bg-midnight border-b-2 border-electric/30 px-4 py-3 flex items-center gap-3">
                        <div className="flex gap-2">
                          <button
                            onClick={() => setShowLivePreview(false)}
                            className="w-3 h-3 rounded-full bg-sunset hover:opacity-75 transition-opacity"
                            title="Fermer"
                          />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                          <a
                            href={selectedProject.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-3 h-3 rounded-full bg-electric hover:opacity-75 transition-opacity block"
                            title="Ouvrir dans un onglet"
                          />
                        </div>
                        <div className="flex-1 bg-concrete/10 border border-concrete/20 rounded-full px-4 py-1 flex items-center gap-2 min-w-0">
                          <svg className="w-3 h-3 text-electric flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                          <span className="text-concrete/60 text-xs font-mono truncate">
                            {selectedProject.website}
                          </span>
                        </div>
                        <a
                          href={selectedProject.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-concrete/40 hover:text-electric transition-colors flex-shrink-0"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>

                      {/* Iframe */}
                      <div className="relative bg-white" style={{ height: '420px' }}>
                        <iframe
                          src={selectedProject.website}
                          title={`Aperçu ${selectedProject.title}`}
                          className="w-full h-full border-0"
                          loading="lazy"
                        />
                        <motion.div
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 0 }}
                          transition={{ delay: 1.2, duration: 0.5 }}
                          className="absolute inset-0 bg-midnight flex items-center justify-center pointer-events-none"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-8 h-8 border-4 border-electric border-t-transparent rounded-full"
                          />
                        </motion.div>
                      </div>

                      <button
                        onClick={() => setShowLivePreview(false)}
                        className="w-full py-3 bg-midnight border-t-2 border-electric/30 text-concrete/50 hover:text-electric font-display uppercase text-xs tracking-wider flex items-center justify-center gap-2 transition-colors"
                      >
                        ← Retour à la présentation
                      </button>
                    </motion.div>
                  )}
                </div>

                {/* Contexte du projet */}
                {selectedProject.details.context && (
                  <p className="text-concrete/70 text-base mb-8 leading-relaxed border-l-4 border-electric/30 pl-5 italic">
                    {selectedProject.details.context}
                  </p>
                )}

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-lg font-display font-bold text-sunset mb-4 uppercase tracking-wide">
                    Technologies utilisées
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-concrete/5 border-2 border-electric/30 text-electric font-display uppercase text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Réalisations */}
                <div>
                  <h4 className="text-lg font-display font-bold text-sunset mb-4 uppercase tracking-wide">
                    Fonctionnalités & réalisations
                  </h4>
                  <ul className="space-y-3">
                    {selectedProject.details.tasks.map((task, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-3 text-concrete/75"
                      >
                        <span className="text-electric text-lg mt-0.5 flex-shrink-0">▹</span>
                        <span>{task}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ━━━ EXPÉRIENCE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="experience" className="py-20 md:py-32 px-4 bg-concrete/5">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-8xl font-display font-bold mb-12 md:mb-20 text-electric"
          >
            EXPÉRIENCE_
          </motion.h2>

          <div className="relative">
            {/* Ligne de timeline */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-electric/20 hidden md:block" />

            <div className="space-y-8 md:space-y-10">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="md:pl-20 relative"
                >
                  {/* Point sur la timeline */}
                  <div
                    className={`hidden md:block absolute left-8 top-8 w-4 h-4 border-4 -translate-x-1/2 -translate-y-1/2 ${
                      exp.current
                        ? 'bg-electric border-electric'
                        : 'bg-midnight border-concrete/40'
                    }`}
                  />

                  <div
                    className={`p-6 md:p-8 border-4 ${
                      exp.current
                        ? 'border-electric bg-electric/5'
                        : 'border-concrete/20 bg-midnight/50'
                    }`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                      <div>
                        <div className="flex items-center gap-3 flex-wrap mb-1">
                          <h3
                            className={`text-xl md:text-2xl font-display font-bold ${
                              exp.current ? 'text-electric' : 'text-concrete'
                            }`}
                          >
                            {exp.company}
                          </h3>
                          {exp.current && (
                            <span className="px-2 py-0.5 bg-electric text-midnight font-display text-xs uppercase font-bold">
                              Actuel
                            </span>
                          )}
                        </div>
                        <p className="text-sunset font-display uppercase text-sm tracking-wide">
                          {exp.role}
                        </p>
                        <p className="text-concrete/40 font-display text-xs uppercase tracking-wide mt-1">
                          {exp.type}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-concrete/70 font-display text-sm">{exp.period}</p>
                        <p className="text-concrete/40 font-display text-xs uppercase mt-1">
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-3 text-concrete/70 text-sm">
                          <span className="text-electric mt-0.5 flex-shrink-0">▹</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ COMPÉTENCES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="competences" className="py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-8xl font-display font-bold mb-12 md:mb-20 text-sunset"
          >
            COMPÉTENCES_
          </motion.h2>

          {/* Grille par catégories */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
            {skillCategories.map((category, catIdx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.08 }}
              >
                <h3 className="font-display text-xs uppercase tracking-widest text-electric mb-5 pb-3 border-b border-electric/20">
                  {category.title}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-display text-base font-bold text-concrete">
                          {skill.name}
                        </span>
                        <span className="font-display text-electric text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2.5 bg-midnight border-2 border-concrete/15">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.2,
                            delay: catIdx * 0.08 + skillIdx * 0.1,
                            ease: 'easeOut',
                          }}
                          className="h-full bg-gradient-to-r from-electric to-sunset"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Carte parcours atypique */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 border-4 border-sunset bg-sunset/5"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-2 text-sunset">
              PARCOURS_ATYPIQUE
            </h3>
            {/* <p className="text-concrete/60 text-sm font-body mb-8 max-w-xl">
              La cuisine m'a tout appris : rigueur, gestion du stress, esprit d'équipe, créativité.
              Le développement logiciel, c'est exactement la même chose — et c'est pour ça que ça me convient.
            </p> */}
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              {[
                { value: '10', label: 'Ans en cuisine', sub: 'Avant la reconversion' },
                { value: '3+', label: 'Ans en dev', sub: 'Hutchinson & MSL Circuit' },
                { value: '∞', label: 'Passion du code', sub: "Et c'est tant mieux" },
              ].map(({ value, label, sub }) => (
                <div key={label} className="text-center">
                  <div className="text-3xl md:text-6xl font-display font-bold text-electric mb-1">
                    {value}
                  </div>
                  <p className="font-display uppercase text-xs md:text-sm text-concrete mb-1">{label}</p>
                  <p className="font-body text-xs text-concrete/40 hidden md:block">{sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ━━━ CONTACT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="contact" className="py-20 md:py-32 px-4 bg-concrete/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-8xl font-display font-bold mb-6 md:mb-8 leading-tight"
          >
            {/* <span className="text-outline text-electric">ON SE</span>{' '}
            <span className="text-concrete">PARLE ?</span> */}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-concrete/70 mb-10 px-4 leading-relaxed"
          >
            Disponible en{' '}
            <span className="text-electric font-bold">CDI à partir d'octobre 2026</span>.
            <br />
            Ouvert aux projets challengeants — France, international, télétravail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10 px-4"
          >
            <motion.a
              whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(0,255,148,0.4)' }}
              whileTap={{ scale: 0.97 }}
              href="mailto:mickael.dijoux97@gmail.com"
              className="px-6 md:px-10 py-4 md:py-5 bg-electric text-midnight font-display font-bold text-sm md:text-base uppercase tracking-wider border-4 border-electric hover:bg-transparent hover:text-electric transition-all"
            >
              mickael.dijoux97@gmail.com →
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="tel:+33675291452"
              className="px-6 md:px-10 py-4 md:py-5 border-4 border-sunset text-sunset font-display font-bold text-sm md:text-base uppercase tracking-wider hover:bg-sunset hover:text-midnight transition-all"
            >
              06 75 29 14 52
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex gap-8 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com/Mikadjx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-concrete/50 hover:text-electric font-display uppercase text-sm tracking-wider transition-colors"
            >
              GitHub
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.linkedin.com/in/mickael-dijoux"
              target="_blank"
              rel="noopener noreferrer"
              className="text-concrete/50 hover:text-sunset font-display uppercase text-sm tracking-wider transition-colors"
            >
              LinkedIn
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ━━━ FOOTER ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <footer className="border-t-4 border-electric/20 py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="font-display text-2xl font-bold text-electric mb-3">MD_</p>
              <p className="text-concrete/50 text-sm font-body leading-relaxed">
                DIJOUX Mickael
                <br />
                Développeur Full-Stack
              </p>
            </div>
            <div>
              <p className="font-display text-xs uppercase tracking-widest text-concrete/40 mb-4">
                Contact
              </p>
              <div className="space-y-2 text-sm">
                <a
                  href="mailto:mickael.dijoux97@gmail.com"
                  className="block text-concrete/60 hover:text-electric transition-colors"
                >
                  mickael.dijoux97@gmail.com
                </a>
                <a
                  href="tel:+33675291452"
                  className="block text-concrete/60 hover:text-electric transition-colors"
                >
                  {/* 06 75 29 14 52 */}
                </a>
              </div>
            </div>
            {/* <div>
              <p className="font-display text-xs uppercase tracking-widest text-concrete/40 mb-4">
                Disponibilité
              </p>
              <p className="text-concrete/60 text-sm">CDI — Octobre 2026</p>
              <p className="text-concrete/40 text-xs mt-1">
                France · International · Télétravail
              </p>
            </div> */}
          </div>
          <div className="border-t border-electric/10 pt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="font-display text-concrete/30 text-xs">© 2026 MICKAEL DIJOUX</p>
            <p className="font-display text-concrete/30 text-xs">React · Vite · Tailwind</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
