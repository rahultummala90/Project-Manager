import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="bg-gray-50 dark:bg-gray-700">
            <div className="max-w-screen-xl px-4 py-3 mx-auto">
                <div className="flex items-center">
                    <Link className="navbar-brand" to="/">
                        Task Manager
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;
