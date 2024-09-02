// App.js
import React, { useState } from 'react';
import Header from './Components/Header/Header.jsx';
import FeaturedPost from './Components/FeaturedPost/FeaturedPost.jsx';
import PostCards from './Components/PostCards/PostCards.jsx';
import BlogPosts from './Components/BlogPosts/BlogPosts.jsx';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import BlogForm from './Components/BlogForm/BlogForm.jsx';
import BlogList from './Components/BlogList/BlogList.jsx';
import './App.css';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const addBlog = (newBlog) => {
    setBlogs([...blogs, newBlog]);
    setIsFormOpen(false); // Close the form after submitting
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <FeaturedPost />
        <PostCards />
        <div className="post-content">
          <BlogPosts />
          <Sidebar />
        </div>
        <div className="form-section">
          <button onClick={toggleForm} className="open-form-button">
            {isFormOpen ? 'Close Form' : 'Submit New Blog'}
          </button>
          {isFormOpen && <BlogForm addBlog={addBlog} />}
        </div>
        <BlogList blogs={blogs} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
