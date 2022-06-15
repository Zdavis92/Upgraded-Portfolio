import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import menuIcon from '../../Images/menu.png';
import closeIcon from '../../Images/close.png';

const MobileNavbar = () => {
    const [open, setOpen] = useState(false);

    const openNav = () => {
        setOpen(true)
    };

    const closeNav = () => {
        setOpen(false)
    };

    return (
        <div>
            {open ? 
            (<img className="w-10 p-1.5 mx-auto my-auto border-2 shadow hover:cursor-pointer md:hidden" onClick={closeNav} src={closeIcon}></img>
            ):(
            <img className="w-10 mx-auto my-auto border-2 shadow hover:cursor-pointer md:hidden" onClick={openNav} src={menuIcon}></img>)}
            {open && <ul className="absolute top-24 right-0 bg-white opacity-80 hover:opacity-100 rounded-md shadow flex flex-col items-end md:hidden">
                <Link to='/' className="text-2xl m-2 md:text-xl hover:font-bold" onClick={closeNav}>About Me</Link>
                <Link to='/portfolio' className="text-2xl m-2 md:text-xl hover:font-bold" onClick={closeNav}>Portfolio</Link>
                <Link to='/contact' className="text-2xl m-2 md:text-xl hover:font-bold" onClick={closeNav}>Contact Me</Link>
                <Link to='/resume' className="text-2xl m-2 md:text-xl hover:font-bold" onClick={closeNav}>Resume</Link>
            </ul>}
        </div>
    );
};

export default MobileNavbar;