import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProjectsList = () => {
    const [projects, setProjects] = useState(null);

    React.useEffect(() => {
        axios.get("/api/projects").then((response) => {
            setProjects(response.data);
        });
    }, []);

    if (!projects) return null;

    const handleClick = () => {};

    return (
        <div className="mt-20 grid place-items-center dark:text-gray-800">
            <button
                className="mb-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleClick}
            >
                <Link to="/create">New project</Link>
            </button>
            <div className="grid grid-cols-1 gap-2 max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                {projects.map((project) => (
                    <Link
                        className="flex items-center"
                        to={`/${project.id}`}
                        key={project.id}
                    >
                        {project.name}
                        <span className="ml-20 bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                            {project.tasks_count}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProjectsList;
