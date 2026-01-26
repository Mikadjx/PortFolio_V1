import { motion } from 'framer-motion';
import { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "LULO STORE",
      role: "Chef de Projet E-commerce",
      description: "Site e-commerce PrestaShop de vente de t-shirts personnalisés sur le thème de l'Amérique latine avec système de paiement SumUp intégré",
      tech: ["PrestaShop", "PHP", "SumUp API", "MySQL"],
      color: "bg-sunset",
      image: "/images/lulo_store.jpg",
      details: {
        tasks: [
          "Création du cahier des charges",
          "Réunions régulières avec le client",
          "Intégration système de paiement SumUp",
          "Personnalisation thème PrestaShop",
          "Gestion catalogue produits personnalisés"
        ]
      }
    },
    {
      title: "POMPIERS CALENDAR",
      role: "Développeur Full-Stack",
      description: "Application responsive de gestion de tournée de calendriers pour pompiers volontaires avec cartographie dynamique et statistiques en temps réel",
      tech: ["ASP.NET MVC", "C#", "SQL Server", "Procédures stockées"],
      color: "bg-electric",
      image: "/images/logo_calendar.png",
      details: {
        tasks: [
          "Gestion des adresses de Saint-Pryvé saint mesmin",
          "Création et suivi des dons par adresse",
          "Système de statuts (absent/refus/repassage ect..)",
          "Secteurs géographiques pour pompiers",
          "Espace admin (chef de centre & trésorier)",
          "Carte dynamique interactive",
          "Dashboard avec statistiques",
          "Architecture avec procédures stockées"
        ]
      }
    },
    {
      title: "MATICES BAND",
      role: "Développeur Full-Stack",
      description: "Plateforme web complète pour groupe de rock avec gestion multimédia, espace membres et outils de collaboration musicale",
      tech: ["Symfony", "PHP", "MySQL", "JavaScript"],
      color: "bg-sunset",
      image: "/images/matices-band.png",
      details: {
        tasks: [
          "Présentation du groupe et contenu multimédia",
          "Intégration vidéos et galerie photos",
          "Formulaire de contact pour concerts",
          "Espace personnel par musicien",
          "Dépôt et partage de partitions",
          "Système de sondages pour répertoire",
          "Gestion du matériel musical",
          "Gestion présences répétitions avec mails auto",
          "Interface responsive mobile/desktop",
          "Panel admin modulable"
        ]
      }
    }
  ];

  const skills = [
    { name: "ASP.NET", level: 90 },
    { name: "C#", level: 85 },
    { name: "SQL Server", level: 80 },
    { name: "JavaScript", level: 85 },
    { name: "PHP", level: 75 },
    { name: "Symfony", level: 70 },
    { name: "PrestaShop", level: 65 },
    { name: "HTML & CSS", level: 90 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen grain overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-midnight/80 backdrop-blur-md border-b-4 border-electric"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
            
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-display font-bold text-electric"
            >
              MD_
            </motion.div>
            <div className="hidden md:flex gap-8 font-display text-sm">
              {['Accueil', 'Projets', 'Compétences', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.1, color: '#00FF94' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-electric transition-colors uppercase tracking-wider"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="accueil" className="min-h-screen flex items-center justify-center relative pt-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-electric/5 via-transparent to-sunset/5"></div>
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-6xl mx-auto text-center relative z-10"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <span className="inline-block px-6 py-2 bg-electric/10 border-2 border-electric text-electric font-display text-sm uppercase tracking-widest mb-8">
              Développeur Full-Stack
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-9xl font-display font-bold mb-6"
          >
            <span className="text-outline text-electric">MICKAEL</span>
            <br />
            <span className="text-concrete">DIJOUX</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl text-concrete/80 max-w-3xl mx-auto mb-12 leading-relaxed px-4"
          >
            Développeur ASP.NET passionné, alternant chez MSL CIRCUIT.
            <br />
            Ex-cuisinier reconverti. Pompier volontaire.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 md:gap-6 justify-center flex-wrap px-4"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 148, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Mikadjx"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 md:px-8 py-3 md:py-4 bg-electric text-midnight font-display font-bold uppercase tracking-wider border-4 border-electric hover:bg-transparent hover:text-electric transition-all text-sm md:text-base"
            >
              GitHub →
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 107, 53, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              href="mailto:dijoux_mickael@outlook.fr"
              className="px-6 md:px-8 py-3 md:py-4 bg-transparent text-sunset font-display font-bold uppercase tracking-wider border-4 border-sunset hover:bg-sunset hover:text-midnight transition-all text-sm md:text-base"
            >
              Contact
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
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
      </section>

      {/* Projects Section */}
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
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-full bg-concrete/5 border-4 border-concrete/20 hover:border-electric transition-all overflow-hidden">
                  {/* Image du projet */}
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent"></div>
                    <div className={`absolute top-4 right-4 w-12 h-12 ${project.color}`}></div>
                  </div>

                  {/* Contenu */}
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-display font-bold mb-2 text-concrete">
                      {project.title}
                    </h3>
                    <p className="text-electric font-display text-xs md:text-sm mb-3 md:mb-4 uppercase tracking-wide">
                      {project.role}
                    </p>
                    <p className="text-concrete/70 mb-4 md:mb-6 leading-relaxed text-sm md:text-base line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map(tech => (
                        <span
                          key={tech}
                          className="px-2 md:px-3 py-1 bg-midnight border border-electric/30 text-electric text-xs font-display uppercase"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-electric font-display text-sm uppercase group-hover:gap-4 transition-all">
                      <span>Voir détails</span>
                      <span className="group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnight/95 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-midnight border-4 border-electric max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-12"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-3xl md:text-5xl font-display font-bold text-electric mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-sunset font-display uppercase text-sm md:text-base tracking-wide">
                  {selectedProject.role}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedProject(null)}
                className="text-concrete hover:text-electric text-3xl font-display leading-none"
              >
                ×
              </motion.button>
            </div>

            {/* Image agrandie dans la modal */}
            <div className="mb-8 border-4 border-concrete/20 overflow-hidden">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-auto"
              />
            </div>

            <p className="text-concrete/80 text-lg mb-8 leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="mb-8">
              <h4 className="text-2xl font-display font-bold text-sunset mb-4 uppercase">
                Technologies utilisées
              </h4>
              <div className="flex flex-wrap gap-3">
                {selectedProject.tech.map(tech => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-concrete/10 border-2 border-electric/30 text-electric font-display uppercase text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-display font-bold text-sunset mb-4 uppercase">
                Fonctionnalités & Réalisations
              </h4>
              <ul className="space-y-3">
                {selectedProject.details.tasks.map((task, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3 text-concrete/80"
                  >
                    <span className="text-electric text-xl mt-1">▹</span>
                    <span>{task}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Skills Section */}
      <section id="compétences" className="py-20 md:py-32 px-4 bg-concrete/5">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-8xl font-display font-bold mb-12 md:mb-20 text-sunset"
          >
            SKILLS_
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-3">
                  <span className="font-display text-lg md:text-xl font-bold text-concrete">
                    {skill.name}
                  </span>
                  <span className="font-display text-electric">{skill.level}%</span>
                </div>
                <div className="h-3 bg-midnight border-2 border-concrete/20">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-electric to-sunset"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-20 p-6 md:p-12 border-4 border-sunset bg-sunset/5"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 md:mb-6 text-sunset">
              PARCOURS_ATYPIQUE
            </h3>
            <div className="grid grid-cols-3 gap-4 md:gap-8 text-concrete/80">
              <div>
                <div className="text-3xl md:text-5xl font-display font-bold text-electric mb-2">10</div>
                <p className="font-display uppercase text-xs md:text-sm">Ans comme cuisinier</p>
              </div>
              <div>
                <div className="text-3xl md:text-5xl font-display font-bold text-electric mb-2">3</div>
                <p className="font-display uppercase text-xs md:text-sm">Ans à l'étranger</p>
              </div>
              <div>
                <div className="text-3xl md:text-5xl font-display font-bold text-electric mb-2">∞</div>
                <p className="font-display uppercase text-xs md:text-sm">Passion pour le code</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-8xl font-display font-bold mb-8 md:mb-12"
          >
            <span className="text-outline text-electric">LET'S</span>{' '}
            <span className="text-concrete">TALK_</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-concrete/70 mb-8 md:mb-12 px-4"
          >
            Ouvert aux nouvelles opportunités et aux projets challengeants
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-4 md:gap-6 justify-center flex-wrap px-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:dijoux_mickael@outlook.fr"
              className="px-6 md:px-12 py-4 md:py-6 bg-electric text-midnight font-display font-bold text-base md:text-xl uppercase tracking-wider border-4 border-electric hover:bg-transparent hover:text-electric transition-all break-all"
            >
              dijoux_mickael@outlook.fr
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex gap-6 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.1, color: '#00FF94' }}
              href="https://github.com/Mikadjx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-concrete/60 hover:text-electric font-display uppercase text-sm tracking-wider transition-colors"
            >
              GitHub
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, color: '#FF6B35' }}
              href="https://www.linkedin.com/in/mickael-dijoux"
              target="_blank"
              rel="noopener noreferrer"
              className="text-concrete/60 hover:text-sunset font-display uppercase text-sm tracking-wider transition-colors"
            >
              LinkedIn
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-electric/20 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-display text-concrete/50 text-xs md:text-sm">
            © 2025 MICKAEL DIJOUX — Développé avec React + Vite + Tailwind
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;