import React from 'react';
import Navbar from '../Navbar/deskNavbar';
import MobileNavber from '../Navbar/mobileNav';

const Header = () => {
    return (
        <header className="flex flex-row md:flex-wrap justify-between content-center mb-4 border-b-2 rounded-md shadow" >
            <div className='flex flex-col basis-3/4 md:basis-auto justify-center md:ml-8 lg:ml-10'>
                <h1 className="mx-auto mt-4 text-4xl sm:text-5xl">Zachary Davis</h1>
                <p className="mx-auto my-2 text-xl">Full stack Web Developer</p>
            </div>
            <nav className="mx-auto my-auto basis-1/4 md:basis-auto md:mx-4 md:my-auto lg:mx-6">
                <Navbar />
                <MobileNavber />
            </nav>
        </header>
    );
};

export default Header;