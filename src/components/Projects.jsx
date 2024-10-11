import { PROJECTS } from "../assets/constants"
import React, { useState } from 'react';

function Projects() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleFilter = (category) => {
        setSelectedCategory(category);
    };

    const filteredProjects = selectedCategory === 'All' 
        ? PROJECTS 
        : PROJECTS.filter(project => project.category === selectedCategory);

    return (
        <div className="pb-4">
            <h2 className="my-20 text-center text-4xl">
                Projects
            </h2>
            <div className="flex justify-center gap-3 mb-20 mt-10  text-sm md:gap-10 md:text-lg lg:gap-14">
                <button className={`text-center hover:text-orange-600 ${selectedCategory === 'All' ? 'text-orange-600' : ''}`} onClick={() => handleFilter('All')}>All</button>
                <button className={`text-center hover:text-orange-600 ${selectedCategory === 'UI design' ? 'text-orange-600' : ''}`} onClick={() => handleFilter('UI design')}>UI design</button>
                <button className={`text-center hover:text-orange-600 ${selectedCategory === 'Applications' ? 'text-orange-600' : ''}`} onClick={() => handleFilter('Applications')}>Applications</button>
                <button className={`text-center hover:text-orange-600 ${selectedCategory === 'Web development' ? 'text-orange-600' : ''}`} onClick={() => handleFilter('Web development')}>Web development</button>
            </div>

            <div className="ml-8">
                {filteredProjects.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">
                            <img src={project.image}
                                width={250}
                                height={250}
                                alt={project.title}
                                className="mb-6 rounded" />
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h3 className="mb2 font-semibold text-2xl">{project.title}</h3>
                            <p className="mb-4 text-stone-400">{project.description}</p>
                            {project.technologies.map((tech, index) => (
                                <span className="mr-2 rounded bg-stone-900 p-2" key={index}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects