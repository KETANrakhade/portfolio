import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss, SiNextdotjs, SiJavascript } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', icon: <FaReact />, level: 95, color: '#61DAFB' },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 90, color: '#000000' },
        { name: 'JavaScript', icon: <SiJavascript />, level: 93, color: '#F7DF1E' },
        { name: 'HTML5', icon: <FaHtml5 />, level: 98, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 95, color: '#1572B6' },
        { name: 'Tailwind', icon: <SiTailwindcss />, level: 92, color: '#06B6D4' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 93, color: '#339933' },
        { name: 'Express.js', icon: <SiExpress />, level: 91, color: '#000000' },
        { name: 'REST API', icon: <FaDatabase />, level: 94, color: '#00f5ff' },
        { name: 'JWT Auth', icon: <FaDatabase />, level: 89, color: '#ff00ff' },
      ],
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, level: 92, color: '#47A248' },
        { name: 'Git', icon: <FaGitAlt />, level: 90, color: '#F05032' },
      ],
    },
  ];

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.2 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-card glass-effect"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: catIndex * 0.2 + skillIndex * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <div className="skill-info">
                      <h4>{skill.name}</h4>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: catIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                          style={{
                            background: `linear-gradient(90deg, ${skill.color}, var(--primary))`,
                          }}
                        />
                      </div>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
