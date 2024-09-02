import React from 'react';
import './PostCards.css';

const PostCards = () => {
  return (
    <section className="post-cards">
      <div className="card">
        <div className='card-div'>
        <div className="category">World</div>
        <h3 className="post-title">Featured post</h3>
        <p className="post-date">Nov 12</p>
        <p className="post-description">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="continue-reading">Continue reading...</a>
        </div>
        <div className="thumbnail">Thumbnail</div>

      </div>
      <div className="card">
      <div className='card-div'>
        <div className="category">Design</div>
        <h3 className="post-title">Post title</h3>
        <p className="post-date">Nov 11</p>
        <p className="post-description">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="continue-reading">Continue reading...</a>
        </div>
        <div className="thumbnail">Thumbnail</div>
      </div>
    </section>
  );
};

export default PostCards;
