import React from 'react';
import { useTrail, animated } from '@react-spring/web';

function Skills() {
  const skillsData = [
    'JavaScript',
    'React',
    'Node.js',
    'MongoDB',
    // Add more skills as needed
  ];

  const trail = useTrail(skillsData.length, {
    from: { opacity: 0, transform: 'translate3d(-100px,0,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0,0)' },
    config: { tension: 200, friction: 20 }
  });

  return (
    <section id="skills" className="p-8 bg-gray-100">
      <h2 className="text-4xl mb-4 font-bold">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {trail.map((props, index) => (
          <animated.div key={index} style={props} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{skillsData[index]}</h3>
          </animated.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
