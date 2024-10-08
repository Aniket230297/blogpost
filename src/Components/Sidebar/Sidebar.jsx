import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="about">
        <h3>About</h3>
        <p>Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. A enean lacinnia bibendum nulla sed consectetur.</p>
      </div>
      <div className="archives">
        <h3>Archives</h3>
        <ul>
          <li><a href="#">March 2014</a></li>
          <li><a href="#">February 2014</a></li>
          <li><a href="#">January 2014</a></li>
          <li><a href="#">December 2013</a></li>
          <li><a href="#">November 2013</a></li>
          <li><a href="#">October 2013</a></li>
          <li><a href="#">September 2013</a></li>
          <li><a href="#">August 2013</a></li>
          <li><a href="#">July 2013</a></li>
          <li><a href="#">June 2013</a></li>
          <li><a href="#">May 2013</a></li>
          <li><a href="#">March 2013</a></li>
          
        </ul>
      </div>
      <div className="elsewhere">
        <h3>Elsewhere</h3>
        <ul>
          <li><a href="#">GitHub</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Facebook</a></li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
