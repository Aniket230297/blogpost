import React from 'react';
import './BlogPosts.css';

const BlogPosts = () => {
  return (
    <section className="blog-posts">
      <h2>Sample blog post</h2>
      <p>January 1, 2014 by <a href="#">Mark</a></p>
      <p>This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>
      
      <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>

       <p>Curabitur blandit tempus porttior. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolorid nibh ultricies ut id elit.</p>
      
      <p>Etiam porta sem malesuada mgna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aeneam lacinia bibendum nulla sed consectetur.</p>

      <h3>Heading</h3>
      <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      
      <h4>Sub-heading</h4>
      <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
      
      <p><code>Example code block</code></p>
      
      <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
      
      <h4>Sub-heading</h4>
      <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>

      <ul>
        <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
        <li>Donec id elit non mi porta gravida at eget metus.</li>
        <li>Nulla vitae elit libero, a pharetra augue.</li>
      </ul>

      <p>Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue.</p>

      <h2>Another blog post</h2>
      <p>December 23, 2013 by <a href="#">Jacob</a></p>
      <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>

      <h2>New feature</h2>
      <p>December 14, 2013 by <a href="#">Chris</a></p>
      <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
    
      <div className="post-navigation">
        <a href="#" className="older-posts">Older</a>
        <a href="#" className="newer-posts">Newer</a>
      </div>
    </section>
  );
};

export default BlogPosts;
