import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-sky-900 flex flex-row flex-wrap justify-between content-center" >
            <h1 className="text-white mx-auto mt-4 text-5xl sm:p-2 sm:m-5 sm:ml-8">Zachary Davis</h1>
            <nav className="m-5 mr-7">
                <ul className="flex flex-wrap justify-evenly">
                    <Link to='/' className="text-xl p-2 m-2">About Me</Link>
                    <Link to='/portfolio' className="text-xl p-2 m-2">Portfolio</Link>
                    <Link to='/contact' className="text-xl p-2 m-2">Contact Me</Link>
                    <Link to='/resume' className="text-xl p-2 m-2">Resume</Link>
                   
                </ul>
            </nav>
        </header>
    );
};

export default Header;