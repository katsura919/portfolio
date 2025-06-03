// ProjectsSection.tsx
// A section to showcase projects with screenshot and GitHub link.

import React from "react";

const projects = [
  {
    name: "Project One",
    image: "https://placehold.co/400x250?text=Project+One",
    github: "https://github.com/yourusername/project-one",
  },
  {
    name: "Project Two",
    image: "https://placehold.co/400x250?text=Project+Two",
    github: "https://github.com/yourusername/project-two",
  },
  // Add more projects as needed
];

const ProjectsSection = () => {
  return (
    <section className="w-full py-16 bg-gray-900 text-white flex flex-col items-center" id="projects">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div key={project.name} className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center">
            <img src={project.image} alt={project.name} className="w-72 h-44 object-cover rounded mb-4 border border-gray-700" />
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary rounded text-white font-medium hover:bg-primary/80 transition"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
