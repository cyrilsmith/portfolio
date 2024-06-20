import React from 'react';
import { useSpring, animated } from '@react-spring/web';

function Projects() {
  const projectData = [
    {
      title: 'Project 1',
      description: 'Description for project 1',
    },
    {
      title: 'Project 2',
      description: 'Description for project 2',
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="p-8 bg-white">
      <h2 className="text-4xl mb-4 font-bold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

const ProjectCard = ({ project }) => {
  const springProps = useSpring({
    to: { transform: 'scale(1)' },
    from: { transform: 'scale(0.8)' },
    config: { tension: 220, friction: 120 }
  });

  return (
    <animated.div style={springProps} className="bg-gray-200 p-4 rounded-lg shadow-md transform transition-transform duration-300">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-sm text-gray-600">{project.description}</p>
    </animated.div>
  );
}

export default Projects;
