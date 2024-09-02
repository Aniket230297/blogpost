import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="blog-header">
      <div className="container">
        <h3>Subscribe</h3>
        <h1 className="blog-title">Large</h1>
       
        <div className="actions">
          <input type="text" placeholder="Search..." />
          <button className="btn-signup">Sign up</button>
        </div>
      </div>
      <hr />
      <nav className="nav">
          <a href="#">World</a>
          <a href="#">U.S.</a>
          <a href="#">Technology</a>
          <a href="#">Design</a>
          <a href="#">Culture</a>
          <a href="#">Business</a>
          <a href="#">Politics</a>
          <a href="#">Opinion</a>
          <a href="#">Science</a>
          <a href="#">Health</a>
          <a href="#">Style</a>
          <a href="#">Travel</a>
        </nav>
    </header>
  );
};

export default Header;
