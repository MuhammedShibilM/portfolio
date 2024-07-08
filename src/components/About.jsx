import { FaIdBadge } from 'react-icons/fa';
import photo from '../assets/profile.svg';
const About=()=>{
    return(
       <section id="about" className="h-screen w-full ">
            <div className="text-center p-20 ">
                <h1 className="font-semibold text-gray-200 text-sm">Get To Know More</h1>
                <h1 className="text-4xl font-bold">About me</h1>
            </div>
            <div className="flex justify-center items-center lg:space-x-6">
                {/* image  */}
                <div className='hidden lg:block'>
                <div className="flex justify-center items-center rounded-lg bg-gray-200 w-60 h-60 md:w-96 md:h-96 overflow-hidden">
                    <img src={photo} alt="" className="h-full w-full object-cover grayscale" />
                </div>
                </div>
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
                        Hello, I'm Muhammed Shibil M, currently pursuing a BTech in Computer Science and Engineering at Eranad Knowledge City Technical Campus College, Mallapuram. <br />

I am passionate about Flutter and web development, where I thrive on turning lines of code into meaningful experiences. <br /> Proficient in CSS, JavaScript, HTML, and Java, I enjoy crafting seamless user interfaces and exploring backend intricacies. <br />

Continuously expanding my skills, I'm committed to staying ahead in the ever-evolving tech landscape. <br /> Whether pushing the boundaries of Flutter or mastering Git, I'm driven by the learning journey. <br />
                        </p>
                    </div>
                </div>
            </div>
       </section>
    );
}

export default About