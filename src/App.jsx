import { motion } from 'framer-motion';
import { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      title: "MSL CIRCUIT",
      role: "Développeur ASP.NET",
      description: "Applications industrielles pour cartes électroniques automobile",
      tech: ["ASP.NET", "C#", "SQL Server"],
      color: "bg-electric"
    },
    {
      title: "Hutchinson R&I",
      role: "Développeur Full-Stack",
      description: "Application de gestion des machines du centre innovation",
      tech: ["JavaScript", "PHP", "MySQL"],
      color: "bg-sunset"
    },
    {
      title: "Projet AFPA",
      role: "Concepteur Développeur",
      description: "Application web et mobile complète",
      tech: ["Angular", "Symfony", "Bootstrap"],
      color: "bg-electric"
    }
  ];

  const skills = [
    { name: "ASP.NET", level: 90 },
    { name: "C#", level: 85 },
    { name: "SQL Server", level: 80 },
    { name: "JavaScript", level: 85 },
    { name: "PHP", level: 75 },
    { name: "Symfony", level: 70 }
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
                className="group relative"
              >
                <div className="h-full bg-concrete/5 border-4 border-concrete/20 p-6 md:p-8 hover:border-electric transition-all">
                  <div className={`w-12 h-12 md:w-16 md:h-16 ${project.color} mb-4 md:mb-6 group-hover:scale-110 transition-transform`}></div>
                  
                  <h3 className="text-xl md:text-2xl font-display font-bold mb-2 text-concrete">
                    {project.title}
                  </h3>
                  <p className="text-electric font-display text-xs md:text-sm mb-3 md:mb-4 uppercase tracking-wide">
                    {project.role}
                  </p>
                  <p className="text-concrete/70 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <span
                        key={tech}
                        className="px-2 md:px-3 py-1 bg-midnight border border-electric/30 text-electric text-xs font-display uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
