import React, { useState } from 'react';
import { PROJECTS } from '../assets/constants';
import { ProjectCard } from './ProjectCard';
import { ProjectFilter } from './ProjectFilter';

const ALL_CATEGORIES = ['All', 'UI design', 'Applications', 'Web development'];
const INITIAL_DISPLAY_COUNT = 6; 

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleProjectsCount, setVisibleProjectsCount] = useState(INITIAL_DISPLAY_COUNT);

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(project => project.category === selectedCategory);

  const displayedProjects = filteredProjects.slice(0, visibleProjectsCount);

  const handleViewMore = () => {
    setVisibleProjectsCount(prevCount => prevCount + 6);
  };

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 " />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Explore our latest work and innovations
          </p>
        </div>

        <div className="mt-12 ">
          <ProjectFilter
            categories={ALL_CATEGORIES}
            selectedCategory={selectedCategory}
            onSelectCategory={(category) => {
              setSelectedCategory(category);
              setVisibleProjectsCount(INITIAL_DISPLAY_COUNT);
            }}
          />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>

        {visibleProjectsCount < filteredProjects.length && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={handleViewMore}
              className="rounded-full bg-gradient-to-r from-blue-600 to-violet-600  hover:bg-slate-800 px-6 py-3 text-white transition  "
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
