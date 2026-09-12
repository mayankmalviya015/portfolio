
import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Password Manager",
      description:
        "A secure application that stores, manages, and protects users  passwords in one centralized place. 🔐",
      technologies: ["React", "Node.js", "Tailwind CSS","JavaScript"],
      link: "https://password-manager-iota-six.vercel.app/",
    },

    {
      title: "Todo List",
      description:
        "A simple task management application that helps users organize, track, and complete their daily tasks efficiently.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Node.js"],
      link: "https://todolist-kappa-woad.vercel.app/",
    },

    {
      title: "Tic-Toc-Toe",
      description:
        "A classic two-player game where players take turns placing X and O to get three matching symbols in a row.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://tic-tac-toe-zeta-woad-10.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#0b0f19] text-white px-6 md:px-12 lg:px-20 py-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-cyan-400 tracking-[0.3em] text-sm font-semibold mb-3">
            MY WORK
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            Here are some of the projects I have built while learning
            and working with modern web technologies.
          </p>

        </div>


        {/* Project List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group
                bg-white/[0.03]
                border border-white/10
                rounded-2xl
                p-7
                hover:border-cyan-400/50
                hover:-translate-y-2
                transition-all
                duration-300
                flex
                flex-col
              "
            >

              {/* Project Number */}
              <div className="flex justify-between items-center mb-6">

                <span className="text-4xl font-bold text-white/10">
                  0{index + 1}
                </span>

                <span className="text-cyan-400 text-xl">
                  ↗
                </span>

              </div>


              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition">
                {project.title}
              </h3>


              {/* Description */}
              <p className="text-gray-400 leading-7 mb-6">
                {project.description}
              </p>


              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-8">

                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="
                      px-3
                      py-1
                      text-xs
                      rounded-full
                      bg-cyan-400/10
                      text-cyan-400
                      border
                      border-cyan-400/20
                    "
                  >
                    {tech}
                  </span>
                ))}

              </div>


              {/* View Button */}
              <div className="mt-auto">

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-5
                    py-3
                    rounded-lg
                    border
                    border-cyan-400
                    text-cyan-400
                    font-semibold
                    hover:bg-cyan-400
                    hover:text-[#0b0f19]
                    transition-all
                    duration-300
                  "
                >
                  View Project
                  <span>↗</span>
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;

