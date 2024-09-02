
import React, { useState } from 'react';
import './BlogForm.css';

const BlogForm = ({ addBlog }) => {
  const [title, setTitle] = useState('');
  const [subheading, setSubheading] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      title,
      subheading,
      content
    };
    addBlog(newBlog);
    setTitle('');
    setSubheading('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="blog-form">
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="subheading">Subheading:</label>
        <input
          type="text"
          id="subheading"
          value={subheading}
          onChange={(e) => setSubheading(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Add Blog</button>
    </form>
  );
};

export default BlogForm;
