import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <ul className="flex-wrap justify-evenly text-sky-800 hidden md:flex">
            <Link to='/Upgraded-Portfolio/' className="text-2xl m-2 md:text-xl hover:font-bold">About Me</Link>
            <Link to='/Upgraded-Portfolio/Portfolio' className="text-2xl m-2 md:text-xl hover:font-bold">Portfolio</Link>
            <Link to='/Upgraded-Portfolio/Contact' className="text-2xl m-2 md:text-xl hover:font-bold">Contact Me</Link>
            <Link to='/Upgraded-Portfolio/Resume' className="text-2xl m-2 md:text-xl hover:font-bold">Resume</Link>
        </ul>
    );
};

export default Navbar;