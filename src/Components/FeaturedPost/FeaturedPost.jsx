import React from 'react';
import './FeaturedPost.css';

const FeaturedPost = () => {
  return (
    <section className="featured-post">
    <div className='featured-post-section'>
      <h2 className="featured-title">Title of a longer featured blog post</h2>
      <p className="featured-description">
        Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.
      </p>
      <a href="#" className="continue-reading">Continue reading...</a>
      </div>
      
    </section>
  );
};

export default FeaturedPost;
