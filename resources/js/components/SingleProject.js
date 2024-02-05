import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleProject = () => {
    let projectId = useParams();
    const [project, setProject] = useState("");
    const [taskTitle, setTaskTitle] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    React.useEffect(() => {
        axios
            .get(`/api/projects/${projectId.id}`)
            .then((response) => {
                // console.log(response.data);
                setProject(response.data);
            })
            .catch((error) => {
                // console.log(error);
                setError("Something went wrong!");
            });
    }, [success]);

    const handleAddTask = (e) => {
        e.preventDefault();
        setSuccess("");
        axios
            .post("/api/tasks", {
                title: taskTitle,
                project_id: projectId.id,
            })
            .then((response) => {
                console.log(response);
                setSuccess("Success! A new task has been created.");
            })
            .catch((error) => {
                setError(error.response.data.message);
            });
    };

    const markTaskComplete = (taskId) => {
        console.log("Test");
        axios
            .post(`/api/tasks/${taskId}`)
            .then((response) => {
                console.log(response);
                setSuccess("Success! Task has been marked as complete.");
            })
            .catch((error) => {
                setError(error.response.data.message);
            });
    };

    const markProjectComplete = () => {
        axios
            .post(`/api/projects/${projectId.id}`)
            .then((response) => {
                console.log(response);
                setSuccess("Success! Project has been marked as complete.");
            })
            .catch((error) => {
                setError("Something went wrong!");
            });
    };

    return (
        <>
            <div className="mt-10 grid place-items-center w-full">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-5 border-b-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2  bg-gray-100  font-bold rounded-t px-4 py-2">
                            {project.name}
                        </label>
                        <label>{project.description}</label>
                        <div>
                            <button
                                className="mt-2 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={markProjectComplete}
                            >
                                Mark as Complete
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="border-b-2 mb-10">
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={taskTitle}
                                id="title"
                                onChange={(e) => setTaskTitle(e.target.value)}
                            />
                            <button
                                className="mt-2 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={handleAddTask}
                            >
                                Add Task
                            </button>
                            {success ? (
                                <div
                                    className="flex items-center bg-teal-500 text-white text-sm font-bold px-4 py-3"
                                    role="alert"
                                >
                                    <p>{success}</p>
                                </div>
                            ) : error ? (
                                <div
                                    className="flex items-center bg-red-500 text-white text-sm font-bold px-4 py-3"
                                    role="alert"
                                >
                                    <p>{error}</p>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>

                        {project.tasks
                            ? project.tasks.map((task) => (
                                  <div
                                      className="grid grid-cols-2 gap-2"
                                      key={task.id}
                                  >
                                      <div className="mt-2">{task.title}</div>
                                      <button
                                          className="ml-10 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                          onClick={() =>
                                              markTaskComplete(task.id)
                                          }
                                      >
                                          Mark as Complete
                                      </button>
                                  </div>
                              ))
                            : ""}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProject;
