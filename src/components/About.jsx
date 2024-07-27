import { FaIdBadge } from 'react-icons/fa';

const About=()=>{
    return(
       <section id="about" className=" w-full md:px-10">
            <div className="text-center p-20 ">
                <h1 className="font-semibold text-gray-400 text-sm">Get To Know More</h1>
                <h1 className="text-4xl font-bold">About me</h1>
            </div>
            <div className="flex justify-center items-center lg:space-x-6">
             
                {/* Datas */}
                <div className='flex flex-col items-center md:items-stretch     space-y-3 space-x-2 mx-auto'>
                    <div className='md:flex justify-between  space-y-3 md:space-y-0  px-3'>
                        <div className='border-2  border-black py-6 md:px-24  rounded-lg flex flex-col items-center space-y-2 min-w-96'>
                            <FaIdBadge size={24}/>
                            <h1 className='text-xl  font-bold'>Experience</h1>
                            <p className='font-semibold text-sm'>1+ year</p>
                            <p className='font-semibold text-sm'>Full Stack Developer</p>
                        </div>
                        <div className='border-2  border-black py-6 md:px-24 rounded-lg flex flex-col items-center space-y-2 min-w-96'>
                            <FaIdBadge size={24}/>
                            <h1 className='text-xl  font-bold'>Education</h1>
                            <p className='font-semibold text-sm text-center'>B.Tech Computer Science <br />and Engineering</p>
                        </div>
                    </div>
                    <div className='font-semibold p-3'>
                        <p className='leading-relaxed'>
                        Hello, I'm Muhammed Shibil M, currently pursuing a BTech in Computer Science and Engineering at Eranad Knowledge City Technical Campus College, Malappuram. 

I am passionate about Flutter and web development, where I thrive on turning lines of code into meaningful experiences. Proficient in CSS, JavaScript, HTML, and Java, I enjoy crafting seamless user interfaces and exploring backend intricacies.

Continuously expanding my skills, I'm committed to staying ahead in the ever-evolving tech landscape.  Whether pushing the boundaries of Flutter or mastering Git, I'm driven by the learning journey. 
                        </p>
                    </div>
                </div>
            </div>
       </section>
    );
}

export default About