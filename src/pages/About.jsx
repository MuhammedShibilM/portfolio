/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import Cards from "../components/Cards";
// import avathar from "../assets/Photo.svg"

const About = () => {
    const [set, useSet] = useState("education");
    const selectedData = {
        "education":[["2019","10th","Vmcghss wandoor"],["2019-2021","12th","Gvhss Mampad"],["2021-2024","BTech Computer Science and Engineering","Eranad Knowledge City Technical Campus"]],
        "experience": [["1+ year","Web Development",""],["0+ year","Application Development",""],["0+ year","Ai",""]],
        "skills": [["1+ year","Web Development",""],["0+ year","Application Development",""],["0+ year","Ai",""]],
    }
    return (
        <section id="about" className=" w-full h-screen md:px-10">
            <div className="text-center p-20 ">
                <h1 className="font-semibold text-gray-400 text-sm">Get To Know More</h1>
                <h1 className="text-4xl font-bold">About me</h1>
            </div>
            <div className="flex justify-between">
                <div className="flex-1  hidden md:block">
                    <div className="flex justify-center items-center">
                        {/* <img className="shadow-lg" src={avathar} alt="avathar" width={300} /> */}
                    </div>
                </div>
                {/* Datas */}
                <div className='flex flex-col items-center md:items-stretch  space-y-3 space-x-2 mx-auto flex-1'>
                    <div className='font-semibold p-3'>
                        <p className='leading-relaxed'>
                            Hello, I’m Muhammed Shibil M, a BTech student in Computer Science and Engineering at Eranad Knowledge City Technical Campus, Malappuram. I’m passionate about Flutter and web development, enjoying the process of turning code into meaningful experiences. Committed to continuous learning, I aim to stay ahead in the tech landscape.
                        </p>
                    </div>
                    <div className="w-full space-y-2">
                        {/* sections */}
                        <div className="flex justify-between w-3/6 font-bold text-lg"><h3 className={set == "education" ? "border-b-2 border-pink-600" : "border-none"} onClick={() => useSet("education")}>Educations</h3> <h3 className={set == "experience" ? "border-b-2 border-pink-600" : "border-none"} onClick={() => useSet("experience")}>Experience</h3> <h3 className={set == "skills" ? "border-b-2 border-pink-600" : "border-none"} onClick={() => useSet("skills")}>Skills</h3></div>
                        {/* section datas */}
                        <div className={set == "education" ? "w-full grid grid-cols-2 grid-rows-3 gap-5": set == "experience" ? "w-full grid grid-cols-2 grid-rows-3 gap-5": "w-full grid grid-cols-2 grid-rows-3 gap-5"}>
                           {
                            set == "education" ? selectedData.education.map((data, index) => {
                                return (
                                    <Cards key={index} year={data[0]} title={data[1]} description={data[2]} />
                                )
                            }) : set == "experience" ? selectedData.experience.map((data, index) => {
                                return (
                                    <Cards key={index} year={data[0]} title={data[1]} description={data[2]} />
                                )
                            }) : selectedData.skills.map((data, index) => {
                                return (
                                    <Cards key={index} year={data[0]} title={data[1]} description={data[2]} />
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About