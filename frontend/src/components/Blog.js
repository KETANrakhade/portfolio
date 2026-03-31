import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaClock, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import API_BASE_URL from '../config';
import './Blog.css';

const Blog = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/blogs`);
        const data = Array.isArray(response.data) ? response.data : [];
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleBlogClick = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <section id="blog" className="blog" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">
            Latest <span className="gradient-text">Blog Posts</span>
          </h2>
          <div className="title-underline"></div>
        </motion.div>

        {loading ? (
          <div className="loading">Loading blogs...</div>
        ) : (
          <div className="blog-grid">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog._id}
                className="blog-card glass-effect"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                onClick={() => handleBlogClick(blog.slug)}
              >
                <div className="blog-image">
                  <img src={blog.image} alt={blog.title} loading="lazy" />
                  <div className="blog-overlay">
                    <FaArrowRight className="read-icon" />
                  </div>
                </div>

                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date">
                      {new Date(blog.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="blog-read-time">
                      <FaClock /> {blog.readTime}
                    </span>
                  </div>

                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-preview">{blog.preview}</p>

                  <div className="blog-tags">
                    {blog.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="blog-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="read-more">
                    Read More <FaArrowRight />
                  </button>
                  {blog.hashnodeUrl && (
                    <a
                      className="hashnode-link"
                      href={blog.hashnodeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Read on Hashnode <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
