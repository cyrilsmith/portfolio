import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSpring, animated } from '@react-spring/web';

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  });

  useEffect(() => {
    axios.get('/api/blogs')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the blogs!', error);
      });
  }, []);

  return (
    <animated.section style={fadeIn} id="blog" className="p-8 bg-white">
      <h2 className="text-4xl mb-4 font-bold">Blog</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog._id} className="mb-4 p-4 bg-gray-200 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p>{blog.content}</p>
            <p className="text-sm text-gray-600"><small>{new Date(blog.date).toLocaleDateString()}</small></p>
          </li>
        ))}
      </ul>
    </animated.section>
  );
}

export default Blog;
