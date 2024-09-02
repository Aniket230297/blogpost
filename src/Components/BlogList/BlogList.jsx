import React from 'react';
import './BlogList.css';

const BlogList = ({ blogs }) => {
  return (
    <section className="blog-list">
      {blogs.length === 0 ? (
        <p>No blogs available. Submit a new blog!</p>
      ) : (
        blogs.map((blog, index) => (
          <div key={index} className="blog-post">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))
      )}
    </section>
  );
};

export default BlogList;
