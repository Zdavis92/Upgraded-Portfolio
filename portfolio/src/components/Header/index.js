import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-sky-900 flex flex-row flex-wrap justify-between content-center" >
            <div className='flex flex-col justify-center mx-auto md:ml-8 md:my-auto'>
                <h1 className="text-white mx-auto mt-4 text-5xl">Zachary Davis</h1>
                <p className="text-white mx-auto my-2 text-xl">Full stack Web Developer</p>
            </div>
            <nav className="mx-auto md:mx-4 md:my-auto">
                <ul className="flex flex-wrap justify-evenly">
                    <Link to='/' className="text-2xl m-2 md:text-xl hover:underline hover:font-bold hover:text-blue-600">About Me</Link>
                    <Link to='/portfolio' className="text-2xl m-2 md:text-xl hover:underline hover:font-bold hover:text-blue-600">Portfolio</Link>
                    <Link to='/contact' className="text-2xl m-2 md:text-xl hover:underline hover:font-bold hover:text-blue-600">Contact Me</Link>
                    <Link to='/resume' className="text-2xl m-2 md:text-xl hover:underline hover:font-bold hover:text-blue-600">Resume</Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;