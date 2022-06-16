import React from "react";
import connectedImg from '../Images/Connected-screenshot.png';
import weHelpImg from '../Images/We-help-austin-homepage.png';

const Portfolio = () => {
    return (
        <main className="flex flex-col items-center text-center w-11/12 mx-auto">
            <h1 className="text-3xl m-4 font-bold text-sky-800">Some Of My Work</h1>
            <div className="flex flex-col">
                <div className="lg:flex lg:flex-row lg:m-4">
                    <div className="bg-cyan-50 rounded border-2 shadow-md m-2">
                        <h2 className="m-2 text-2xl font-medium text-sky-800">Connected</h2>
                        <a href="https://connected-jobsearch-engine.herokuapp.com/" target="_blank" rel="noreferrer"><img className="rounded-2xl shadow-md w-11/12 aspect-video mx-auto" src={connectedImg} alt=""></img></a>
                        <p className="m-2">Full stack web application created with React, MongoDB, Node, and Express.
                            Intended to gather multiple web development job posts from several sites and compile them in one app for easier searching</p>
                    </div>
                    <div className="sm:m-4 lg:my-auto">
                        <h3 className="text-xl font-medium text-sky-800 border-b-2 w-9/12 mx-auto">My contributions</h3>
                        <ul className="list-disc w-9/12 mx-auto">
                            <li>Devised web scraping functions to gather the data, restructure it, and store in the database</li>
                            <li>Implemented GraphQl to make request to the server and formulated functions to handle to incoming data to be displayed</li>
                            <li>Oversaw debugging during merges and tests</li>
                        </ul>
                    </div>
                </div>
                <div className="lg:flex lg:flex-row lg:m-4 lg:mb-10">
                    <div className="bg-cyan-50 rounded border-2 shadow-md m-2 lg:order-2">
                        <h2 className="m-2 text-2xl font-medium text-sky-800">We Help Austin!</h2>
                        <a href="https://we-help-austin.herokuapp.com/" target='_blank' rel="noreferrer"><img className="rounded-2xl shadow-md aspect-video w-11/12 mx-auto" src={weHelpImg} alt=""></img></a>
                        <p className="m-2">A Full stack web application created with Handlebars, SQL database, Node and Express.
                            Intended to help Austin community volunteers connect with people seeking help and vice versa</p>
                    </div>
                    <div className="sm:m-4 lg:order-1 lg:my-auto">
                        <h3 className="text-xl font-medium text-sky-800 border-b-2 w-9/12 mx-auto">My contributions</h3>
                        <ul className="list-disc w-9/12 mx-auto">
                            <li>Developed entire backend code including RESTful APIs with Sequelize and SQL tables</li>
                            <li>Implemented frontend JavaScript for fetch request and data handling</li>
                            <li>Oversaw debugging during merges and tests</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Portfolio;