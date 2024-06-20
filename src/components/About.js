import React from 'react';
import { useSpring, animated } from '@react-spring/web';

function About() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  });

  return (
    <animated.section style={fadeIn} id="about" className="p-8 bg-gray-100">
      <h2 className="text-4xl mb-4 font-bold">About Me</h2>
      <p className="text-lg leading-relaxed">
        Hello! I have 7 years of experience with over 30 of the most popular programming languages. 
        I'm passionate about creating exceptional digital experiences. 
        My journey in tech started from a simple curiosity and has led me to become proficient in both 
        frontend and backend development.
      </p>
    </animated.section>
  );
}

export default About;

