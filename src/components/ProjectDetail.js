import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSpring, animated } from '@react-spring/web';

function ProjectDetail({ match }) {
  const projectId = match.params.id;
  const [project, setProject] = useState(null);

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  });

  useEffect(() => {
    // Fetch project data from backend (replace with your actual API endpoint)
    axios.get(`/api/projects/${projectId}`)
      .then(response => {
        setProject(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the project data!', error);
      });
  }, [projectId]);

  if (!project) {
    return <p>Loading project details...</p>;
  }

  return (
    <animated.section style={fadeIn} className="p-8 bg-white">
      <h2 className="text-4xl mb-4 font-bold">{project.title}</h2>
      <p className="text-lg mb-4">{project.description}</p>
      <ul className="mb-4">
        {project.technologies.map((tech, index) => (
          <li key={index} className="inline-block mr-2 px-2 py-1 bg-gray-200 rounded">
            {tech}
          </li>
        ))}
      </ul>
      <a href={project.link} className="text-blue-600 hover:underline">View Project</a>
    </animated.section>
  );
}

export default ProjectDetail;
