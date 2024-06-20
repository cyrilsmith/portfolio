import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';

function Header() {
  const logoSpring = useSpring({
    from: { transform: 'translateY(-100px)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
    config: { tension: 200, friction: 20 }
  });

  return (
    <header className="bg-blue-600 p-4 text-white flex justify-between items-center shadow-lg">
      <animated.h1 style={logoSpring} className="text-3xl font-bold">My Portfolio</animated.h1>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">About</Link></li>
          <li><Link to="/projects" className="hover:underline">Projects</Link></li>
          <li><Link to="/skills" className="hover:underline">Skills</Link></li>
          <li><Link to="/blog" className="hover:underline">Blog</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          <li><Link to="/testimonials" className="hover:underline">Testimonials</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
