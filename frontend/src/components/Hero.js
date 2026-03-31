import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiRedux, SiJavascript } from 'react-icons/si';
import ParticleBackground from './ParticleBackground';
import './Hero.css';

const Hero = () => {
  const cubeRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMouseMove = (e) => {
    const rect = cubeRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    setRotation({ x: -(dy / 4), y: dx / 4 });
  };

  const orbitIcons = [
    { icon: <FaReact />,      color: '#61DAFB', label: 'React',      orbit: 1, speed: 8,  angle: 0   },
    { icon: <FaNodeJs />,     color: '#68A063', label: 'Node.js',    orbit: 1, speed: 8,  angle: 90  },
    { icon: <SiMongodb />,    color: '#4DB33D', label: 'MongoDB',    orbit: 1, speed: 8,  angle: 180 },
    { icon: <SiExpress />,    color: '#ffffff', label: 'Express',    orbit: 1, speed: 8,  angle: 270 },
    { icon: <SiRedux />,      color: '#764ABC', label: 'Redux',      orbit: 2, speed: 12, angle: 45  },
    { icon: <SiJavascript />, color: '#F7DF1E', label: 'JS',         orbit: 2, speed: 12, angle: 225 },
    { icon: <FaDatabase />,   color: '#00F5FF', label: 'Database',   orbit: 2, speed: 12, angle: 135 },
  ];

  return (
    <section id="home" className="hero">
      <ParticleBackground />
      
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            className="hero-greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm
          </motion.h3>

          <motion.p
            className="hero-role"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            MERN Stack Developer
          </motion.p>

          <motion.h1
            className="hero-name gradient-text"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Ketan Rakhade
          </motion.h1>

          <div className="hero-typing">
            <TypeAnimation
              sequence={[
                'I build scalable web applications',
                2000,
                'I create stunning user experiences',
                2000,
                'I develop full-stack solutions',
                2000,
                'I optimize for performance',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="typing-text"
            />
          </div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Passionate about crafting exceptional digital experiences with modern technologies.
            <br />
            Specializing in React, Node.js, Express, and MongoDB.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              View Projects
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-3d"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          ref={cubeRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Orbit rings */}
          <div className="orbit-ring orbit-ring-1"></div>
          <div className="orbit-ring orbit-ring-2"></div>

          {/* Orbiting icons */}
          {orbitIcons.map((item, i) => (
            <div
              key={i}
              className={`orbit-icon orbit-${item.orbit}`}
              style={{
                '--orbit-angle': `${item.angle}deg`,
                '--orbit-speed': `${item.speed}s`,
                '--icon-color': item.color,
              }}
            >
              <span className="orbit-icon-inner" title={item.label}>
                {item.icon}
              </span>
            </div>
          ))}

          {/* Cube */}
          <div
            className="floating-cube"
            style={isHovered ? {
              transform: `translate(-50%, -50%) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              transition: 'transform 0.1s ease-out',
              animation: 'none',
            } : {}}
          >
            <div className="cube-face front"></div>
            <div className="cube-face back"></div>
            <div className="cube-face left"></div>
            <div className="cube-face right"></div>
            <div className="cube-face top"></div>
            <div className="cube-face bottom"></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        {/* <div className="mouse"></div>
        <p>Scroll Down</p> */}
      </motion.div>
    </section>
  );
};

export default Hero;
