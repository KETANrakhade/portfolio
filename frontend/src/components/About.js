import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaRocket, FaLightbulb } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const highlights = [
    {
      icon: <FaCode />,
      title: 'Passionate about Full-Stack Development',
      description: 'Building end-to-end solutions with modern technologies and best practices.',
    },
    {
      icon: <FaRocket />,
      title: 'Experience in Scalable Applications',
      description: 'Architecting and deploying applications that handle real-world traffic.',
    },
    {
      icon: <FaLightbulb />,
      title: 'Focus on Performance & Clean Code',
      description: 'Writing maintainable, optimized code that stands the test of time.',
    },
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="about-intro">
              I'm Ketan Rakhade, a passionate MERN Stack Developer with a love for creating exceptional digital experiences. 
              Currently working at <span className="highlight">Codeberg IT</span>, where I contribute to building 
              innovative web solutions that make a difference.
            </p>
            <p className="about-description">
              My journey in web development has been driven by curiosity and a constant desire to learn. 
              I specialize in building full-stack applications using React, Node.js, Express, and MongoDB, 
              with a strong focus on performance, scalability, and user experience.
            </p>
            <p className="about-description">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community through technical writing.
            </p>
          </motion.div>

          <motion.div
            className="about-highlights"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="highlight-card glass-effect"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="highlight-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
