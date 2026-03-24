import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiRedux, SiStripe, SiJsonwebtokens } from 'react-icons/si';
import './Projects.css';

const techIcons = {
  'React.js': <SiReact color="#61DAFB" />,
  'Node.js': <SiNodedotjs color="#68A063" />,
  'Express.js': <SiExpress color="#fff" />,
  'MongoDB': <SiMongodb color="#4DB33D" />,
  'Redux': <SiRedux color="#764ABC" />,
  'Stripe': <SiStripe color="#635BFF" />,
  'JWT': <SiJsonwebtokens color="#F7DF1E" />,
};

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [flipped, setFlipped] = useState(false);

  const project = {
    title: 'Pyramid E-commerce',
    subtitle: 'Full-Stack MERN Application',
    description: 'A full-featured e-commerce platform with user authentication, product management, shopping cart, payment integration, order tracking, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Stripe', 'JWT'],
    github: 'https://github.com/KETANrakhade',
    demo: 'https://e-commerce-iota-azure-72.vercel.app',
    features: [
      'User Authentication & Authorization',
      'Product Search & Filtering',
      'Shopping Cart & Wishlist',
      'Secure Payment Integration',
      'Order Management System',
      'Admin Dashboard',
      'Responsive Design',
      'Real-time Notifications',
    ],
    stats: [
      { label: 'Pages', value: '15+' },
      { label: 'Components', value: '40+' },
      { label: 'API Routes', value: '25+' },
    ],
  };

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Project</span>
          </h2>
          <div className="title-underline"></div>
        </motion.div>

        <motion.div
          className="project-showcase"
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="flip-container" onClick={() => setFlipped(!flipped)}>
            <div className={`flip-card ${flipped ? 'flipped' : ''}`}>

              {/* FRONT */}
              <div className="flip-front">
                {/* Image with overlay */}
                <div className="card-image-wrap">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="card-image-overlay" />
                  <div className="card-badge">MERN Stack</div>
                  <div className="flip-hint-btn">
                    <FaArrowRight /> Flip for details
                  </div>
                </div>

                {/* Content */}
                <div className="card-body">
                  <div className="card-header-row">
                    <div>
                      <p className="card-subtitle">{project.subtitle}</p>
                      <h3 className="card-title">{project.title}</h3>
                    </div>
                    <div className="card-stats">
                      {project.stats.map((s, i) => (
                        <div key={i} className="stat-item">
                          <span className="stat-value">{s.value}</span>
                          <span className="stat-label">{s.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="card-description">{project.description}</p>

                  <div className="tech-stack">
                    {project.tech.map((t, i) => (
                      <span key={i} className="tech-pill">
                        <span className="tech-icon">{techIcons[t]}</span>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* BACK */}
              <div className="flip-back">
                <div className="back-glow-1" />
                <div className="back-glow-2" />
                <div className="back-content">
                  <p className="card-subtitle">Key Features</p>
                  <h3 className="card-title">{project.title}</h3>

                  <div className="features-grid">
                    {project.features.map((f, i) => (
                      <motion.div
                        key={i}
                        className="feature-item"
                        initial={{ opacity: 0, x: -10 }}
                        animate={flipped ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + i * 0.06 }}
                      >
                        <span className="feature-dot" />
                        {f}
                      </motion.div>
                    ))}
                  </div>

                  <div className="back-links" onClick={(e) => e.stopPropagation()}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-btn link-github">
                      <FaGithub /> View Code
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link-btn link-demo">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>

                  <p className="back-flip-hint">Click card to go back</p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
