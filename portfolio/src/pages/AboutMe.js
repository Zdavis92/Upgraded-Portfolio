import React from "react";
import waves from "../Images/20220108_174710.jpg"

const AboutMe = () => {
    return (
        <main>
            <div className="flex flex-col items-center mx-auto text-center">
                <h1 className="text-6xl m-2">Welcome!</h1>
                <div className="flex flex-row flex-wrap w-11/12">
                    <img className="w-screen max-w-xs mx-auto sm:flex-1 sm:m-4 rounded-2xl shadow" src={waves} alt="Zachary Davis"></img>
                    <div className="sm:flex-1 sm:my-auto sm:m-4 flex flex-col">
                        <h3 className="text-2xl m-1">A little about myself</h3>
                        <p className="m-2"> Hi! My name is Zachary Davis. I am a recent graduate from The University of Texas at Austin's Full Stack Web Development program, and I'm
                            extremely excited to begin a new career as a web developer. Though it was challenging at times, I really developed a passion for coding
                            and problem solving. After months of practice I feel ready to take the next step and get my foot in the door of this
                            industry. I want to learn much more and gain the experience to become one of the best!
                        </p>
                    </div>
                </div>
                <div className="bg-sky-50">
                    <p className="m-4 w-11/12 sm:w-9/12 sm:mx-auto sm:my-24"> Over the past year I have taught myself a great deal, either on my own or through school. I am now familiar with the basic components
                        of web development and have worked on several solo and collaborative projects. Using technologies from HTML, CSS, and Javascript
                        to the MERN (Mongo, Express, React, and Node) stack taught in the course I took. I also have experience with RESTful apis, GraphQL, MySQL,
                        and ORMs like Sequelize and Mongoose. I have contributed to projects using all of these technologies and by doing so found that I
                        have a strength in backend coding. I enjoy solving the challenges that come with working with data and feel a great sense
                        of accomplishment as I become progressively better in doing so.
                    </p>
                </div>
                <div>
                <p className="m-4 w-11/12 sm:w-9/12 sm:mx-auto sm:my-24"> As you gain knowledge in a subject, you realize how much more there is to learn about it. I find that web development
                    is not an exception to this. Though I have managed to reach a level proficiency that I believe allows for me to be an asset, I look for every
                    opportunity to expand on what I know. My hope is that I may find a place of employment where I can continue to do so while contributing
                    to the greatest extent that I am capable. I would like to share what I have learned with others, just as others have done for me!
                </p>
                </div>
            </div>
        </main>
    )
}

export default AboutMe;