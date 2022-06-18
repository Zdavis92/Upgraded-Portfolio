import React from "react";
import { Link } from 'react-router-dom';

const Resume = () => {
    return (
        <main>
            <div className="flex flex-col text-center">
                <div className="m-4 w-10/12 mx-auto md:w-3/4 md:my-4 lg:mb-4">
                    <h2 className="font-bold text-2xl text-sky-800">Summary</h2>
                    <p>Detail-oriented, organized and meticulous employee. Excellent critical thinking and problem solving skills.
                        Consistently recognized for dependability and multi-tasking skills. Superb work ethic and eager to expand
                        current knowledge and skills. Experience working with teams remotely. Assisted in development and
                        testing of multiple web-based applications</p>
                </div>
                <div className="lg:flex lg:flex-row lg:justify-evenly lg:bg-cyan-50 lg:border-2 lg:rounded-md lg:shadow-lg lg:m-4">
                    <div className="bg-cyan-50 border-2 rounded-md shadow-lg m-4 lg:flex-1 lg:border-0 lg:shadow-none">
                        <h2 className="mt-2 font-bold text-2xl md:mt-4 text-sky-800">Skills</h2>
                        <ul className="mb-2 md:mb-4 font-semibold">
                            <li>HTML, CSS, JavaScript</li>
                            <li>Bootstrap, Tailwind CSS</li>
                            <li>React.js</li>
                            <li>Node.js</li>
                            <li>MongoDB, SQL</li>
                            <li>RESTful APIs, GraphQL</li>
                        </ul>
                    </div>
                    <div className="m-2 md:m-4 lg:flex-1">
                        <h2 className="font-bold text-2xl text-sky-800">Education</h2>
                        <h3 className="font-bold w-10/12 mx-auto text-sky-800">The University of Texas At Austin, Austin, TX - Certification</h3>
                        <ul className="list-disc w-3/4 mx-auto md:w-1/2">
                            <li>Elected Project Team Lead for all major projects during the course</li>
                            <li>Graduated with an overall score of 97.21%</li>
                            <li>Received certificate of completion from the university.</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-cyan-50 border-2 rounded-md shadow-lg m-4 lg:bg-white lg:border-0 lg:rounded-none lg:shadow-none">
                    <h2 className="font-bold text-2xl md:mt-4 text-sky-800">Work Experience</h2>
                    <p className="italic">Apl 2021 - Present</p>
                    <h3 className="font-bold w-10/12 mx-auto text-sky-800">Buttermilk Cafe, New Braunfels, TX - Section Leader</h3>
                    <ul className="mb-2 list-disc w-3/4 mx-auto md:mb-4 lg:w-3/6 2xl:w-2/5">
                        <li>Delivered in-depth training to workers in food preparation to promote strong team performance</li>
                        <li>Obtained and enhanced quality benchmarks by developing and implementing standard practices</li>
                        <li>Coordinated safety improvement activities and training to promote safety awareness</li>
                        <li>Liaised with the owner to discuss adverse trends and identify and resolve production issues</li>
                    </ul>
                </div>
                <div className="m-2 md:m-4">
                    <p className="italic">Oct 2011 - Apl 2021</p>
                    <h3 className="font-bold w-10/12 mx-auto text-sky-800">River City Smoked Meats, New Braunfels, TX - Kitchen Manager</h3>
                    <ul className="list-disc w-3/4 mx-auto 2xl:w-3/5">
                        <li>Created and deployed successful strategies to boost restaurant performance, streamline food prep processes and reduce waste</li>
                        <li>Delivered in-depth training to workers in food preparation and customer-facing roles to promote strong team performance</li>
                        <li>Coordinated with the events organizer to ensure quality and timely food deliveries</li>
                        <li>Developed kitchen staff through training, disciplinary action and performance reviews</li>
                        <li>Spearheaded regular maintenance and repair operations to keep building and equipment in peak condition</li>
                        <li>Scheduled and received food and beverage deliveries, adhering to food cost and budget</li>
                        <li>Kept the facility compliant with health codes, sanitation requirements and license regulations, alleviating potentially heavy fines</li>
                        <li>Handled escalated customer concerns with speed and knowledgeable support to achieve optimal satisfaction and maintain long-term loyalty</li>
                        <li>Addressed security concerns including facility accessibility, disgruntled customers, and former employees</li>
                    </ul>
                </div>
                <Link className="bg-RoseyBrown w-40 rounded-md shadow-lg text-white p-1 mx-auto lg:my-4" to="https://github.com/Zdavis92/Upgraded-Portfolio/raw/gh-pages/Zachary%20Davis's%20Resume.pdf" target='_blank' download>Download Resume</Link>
            </div>
        </main>
    )
}

export default Resume;