import { FaDotCircle } from "react-icons/fa";

const frotend = [
    { skill: "HTML", level: "Experienced" },
    { skill: "CSS", level: "Intermediate" },
    { skill: "JS", level: "Intermediate" },
    { skill: "SASS", level: "Basic" },
    { skill: "Flutter", level: "Intermediate" },
    { skill: "React", level: "Intermediate" },
];

const backend=[
    { skill: "Nodejs", level: "Basic" },
    { skill: "Django", level: "Intermediate" },
    { skill: "Git", level: "Intermediate" },
    { skill: "MySQL", level: "Intemediate" },
    { skill: "Mongodb", level: "Basic" },
]

const Experience = () => {
    return (
        <section className=" w-full mt-24">
            <div className="text-center pb-10">
                <h1 className="font-semibold text-gray-400 text-sm">Explore my</h1>
                <h1 className="text-4xl font-bold">Experience</h1>
            </div>
            <div className="md:flex justify-around  space-y-2 ">
                <div className="border-4 border-black min-w-96  p-4 ">
                    <h1 className="text-2xl font-bold text-center mb-6">Front end</h1>
                    <div className="grid grid-cols-2 grid-rows-3 gap-4">
                        {frotend.map((e) => (
                            <div key={e.skill} className="flex items-center">
                                <FaDotCircle className="mr-3" />
                                <div className="text-left">
                                    <h1 className="text-xl font-bold">{e.skill}</h1>
                                    <p className="text-gray-500 text-sm">{e.level}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="border-4 border-black min-w-96 p-4">
                    <h1 className="text-2xl font-bold text-center mb-6">Back end</h1>
                    <div className="grid grid-cols-2 grid-rows-3 gap-4">
                        {backend.map((e) => (
                            <div key={e.skill} className="flex items-center">
                                <FaDotCircle className="mr-3" />
                                <div className="text-left">
                                    <h1 className="text-xl font-bold">{e.skill}</h1>
                                    <p className="text-gray-500 text-sm">{e.level}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
