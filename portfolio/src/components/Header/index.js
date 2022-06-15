import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="flex flex-row flex-wrap justify-between content-center border-b-2 rounded-md shadow-md" >
            <div className='flex flex-col justify-center mx-auto md:ml-8 md:my-auto'>
                <h1 className="mx-auto mt-4 text-5xl">Zachary Davis</h1>
                <p className="mx-auto my-2 text-xl">Full stack Web Developer</p>
            </div>
            <nav className="mx-auto md:mx-4 md:my-auto">
                <ul className="flex flex-wrap justify-evenly">
                    <Link to='/' className="text-2xl m-2 md:text-xl hover:font-bold">About Me</Link>
                    <Link to='/portfolio' className="text-2xl m-2 md:text-xl hover:font-bold">Portfolio</Link>
                    <Link to='/contact' className="text-2xl m-2 md:text-xl hover:font-bold">Contact Me</Link>
                    <Link to='/resume' className="text-2xl m-2 md:text-xl hover:font-bold">Resume</Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;