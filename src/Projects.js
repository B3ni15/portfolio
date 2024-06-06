import React, { useState } from 'react';

const Projects = () => {
    const [projects, setProjects] = useState([
        {
            title: 'Teszt Projekt',
            description: 'Ez egy teszt projekt, amit a tanulás során készítettem.',
            link: 'https://github.com/B3ni15/'
        }
    ]);

    return (
        <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white px-4">
            <div className="w-full max-w-4xl">
                <h1 className="text-4xl font-bold mb-6 text-center">Projektjeim</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg border-solid border-2 border-cyan-700">
                            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                            <p className="text-lg mb-4">{project.description}</p>
                            <a href={project.link} className="text-cyan-500 hover:text-cyan-300 underline">
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
