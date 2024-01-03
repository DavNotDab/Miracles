import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav>
            <ul className="navigation">
                <li className="navigation-home">
                    <Link to="/">Home</Link>
                </li>
                <li className="navigation-miracles">
                    <Link to="/miracles">Miracles</Link>
                </li>
                <li className="navigation-create">
                    <Link to="/create">Create Miracle</Link>
                </li>
                <li className="navigation-login">
                    <Link to="/login">Log in</Link>
                </li>
                <li className="navigation-registration">
                    <Link to="/registration">Join us</Link>
                </li>
            </ul>
        </nav>
    );
}
