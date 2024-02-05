import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import ProjectsList from "./ProjectsList";
import NewProject from "./NewProject";
import SingleProject from "./SingleProject";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header />
                {/* <NewProject /> */}
                {/* <ProjectsList /> */}
                <Routes>
                    <Route exact path="/" element={<ProjectsList />}></Route>
                    <Route path="/create" element={<NewProject />}></Route>
                    <Route path="/:id" element={<SingleProject />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById("app")) {
    const Index = ReactDOM.createRoot(document.getElementById("app"));

    Index.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
