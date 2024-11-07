import photo from '../assets/profile.svg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from "framer-motion";

const Home = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
    };

    return (
        <main id='home' className="md:h-screen container mx-auto flex flex-col justify-center items-center md:flex-row md:space-x-6 space-y-2  px-4">
            <div className="p-20">
                <motion.div initial={{opacity: 0, scale: 0}} animate={{opacity: 1,scale: 1}} transition={{type: "spring", stiffness: 50}} className="flex justify-center items-center rounded-full bg-gray-300 w-60 h-60 md:w-96 md:h-96 overflow-hidden">
                    <img
                        src={photo}
                        alt="avathar"
                    />
                </motion.div>
            </div>

            <div>
                <motion.div
                    className='flex flex-col justify-center items-center space-y-4 text-center md:text-left'
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h4 className='font-semibold' variants={itemVariants}>
                        Hello, I&apos;m
                    </motion.h4>
                    <motion.h1 className='font-bold text-4xl' variants={itemVariants}>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500'>
                            Muhammed Shibil M
                        </span>
                    </motion.h1>
                    <motion.h2 className='text-2xl font-semibold' variants={itemVariants}>
                        Full Stack Web Developer
                    </motion.h2>
                    <motion.div className='space-x-3' variants={itemVariants}>
                        <button className='rounded-full py-2 px-5 font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:m-4 hover:shadow-lg hover:-translate-y-1 transition-transform duration-300'>
                            Download CV
                        </button>
                        <a href="#contact">
                            <button className='rounded-full border-2 border-white bg-dark text-white py-2 px-5 font-semibold hover:-translate-y-1 transition-transform duration-300'>
                                Contact Info
                            </button>
                        </a>
                    </motion.div>
                    <motion.div className='flex space-x-2' variants={itemVariants}>
                        <a className='scale-75 hover:scale-100 duration-300' href="https://www.linkedin.com/in/muhammedshibilm">
                            <FaLinkedin size={35} />
                        </a>
                        <a className='scale-75 hover:scale-100 duration-300' href="https://github.com/muhammedshibilm">
                            <FaGithub size={35} />
                        </a>
                    </motion.div>
                </motion.div>

            </div>
        </main>
    );
};

export default Home;
