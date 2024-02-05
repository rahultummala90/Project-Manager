import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewProject = () => {
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("/api/projects", {
                name: e.target.name.value,
                description: e.target.description.value,
            })
            .then((response) => {
                console.log(response);
                // setSuccess("Success! A new project has been created.");
                setSuccess("Success! A new project has been created.");
                setTimeout(function () {
                    navigate("/");
                }, 5000);
            })
            .catch((error) => {
                console.log(error);
                setError("Holy smokes! Something seriously bad happened.");
            });
    };

    return (
        <div className="grid place-items-center w-full bg-gray-100">
            {error ?? ""}
            <form
                className="mt-10 w-1/2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit}
            >
                <div className="mb-5 flex justify-center">
                    <label className="w-1/4 block text-gray-700 text-sm font-bold mb-2  bg-gray-100  font-bold rounded-t px-4 py-2">
                        Create a new project
                    </label>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="projectname"
                    >
                        Project Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Project Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="projectdescription"
                    >
                        Project Description
                    </label>
                    <textarea
                        id="description"
                        rows="10"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Project Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <button
                    className="mb-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    n
                >
                    Create
                </button>
            </form>

            {success ? (
                <div
                    className="flex items-center bg-teal-500 text-white text-sm font-bold px-4 py-3"
                    role="alert"
                >
                    <p>{success}</p>
                </div>
            ) : (
                ""
            )}

            {error ? (
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
    );
};

export default NewProject;
