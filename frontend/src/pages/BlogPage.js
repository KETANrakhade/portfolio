import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaArrowLeft, FaClock, FaCalendar, FaUser } from 'react-icons/fa';
import './BlogPage.css';

const BlogPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`/api/blogs/${slug}`);
        setBlog(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog:', error);
        setLoading(false);
      }
    };

    fetchBlog();
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div className="blog-page-loading">
        <div className="loader"></div>
        <p>Loading article...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="blog-page-error">
        <h2>Blog post not found</h2>
        <button onClick={() => navigate('/')} className="back-btn">
          <FaArrowLeft /> Back to Home
        </button>
      </div>
    );
  }

  return (
    <motion.div
      className="blog-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="blog-hero" style={{ backgroundImage: `url(${blog.image})` }}>
        <div className="blog-hero-overlay">
          <div className="container">
            <motion.button
              className="back-btn"
              onClick={() => navigate('/')}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ x: -5 }}
            >
              <FaArrowLeft /> Back to Home
            </motion.button>

            <motion.div
              className="blog-hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="blog-tags-hero">
                {blog.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="blog-hero-title">{blog.title}</h1>

              <div className="blog-meta-hero">
                <div className="meta-item">
                  <FaUser />
                  <span>{blog.author}</span>
                </div>
                <div className="meta-item">
                  <FaCalendar />
                  <span>
                    {new Date(blog.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <div className="meta-item">
                  <FaClock />
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="blog-content-wrapper"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="container">
          <article className="blog-article glass-effect">
            <div
              className="blog-content-text"
              dangerouslySetInnerHTML={{
                __html: blog.content.replace(/\n/g, '<br />'),
              }}
            />
          </article>

          <div className="blog-footer">
            <button onClick={() => navigate('/')} className="back-btn-bottom">
              <FaArrowLeft /> Back to Portfolio
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BlogPage;
