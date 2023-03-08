import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <ul className="nav nav-pills nav-fill nav-justified">
                <li className="nav-item">
                    <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                    >
                        Blog
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/loginPage">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="./familyTree">
                        Family Tree
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
