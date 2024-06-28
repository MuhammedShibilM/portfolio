import photo from '../assets/profile.svg';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <main className="min-h-screen relative bg-gradient-to-r from-gray-800 to-gray-600 flex flex-col items-center justify-center text-white w-full h-full pt-16 md:pt-24">
            <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-auto space-y-6 md:space-y-0 md:space-x-12">
                <div className="text-center md:text-left md:max-w-md">
                    <h1 className="md:text-5xl text-3xl ">
                        Hi, there <br />
                        <span className="text-emerald-500">Muhammed Shibil</span> here!
                    </h1>
                    <p className="text-gray-400 mt-4">
                        Im currently a web developer, app developer, and Cybersecurity Expert
                    </p>
                    <motion.button
                        className='hidden md:block border-2 border-black px-4 py-3 mt-2'
                        whileHover={{
                            background: "linear-gradient(to right, #10B981, #065F46)",
                            color: "#fff",
                            transition: { duration: 0.3 }
                        }}
                    >
                        Resume
                    </motion.button>
                </div>
                <div className="relative md:w-96 md:h-96 w-60 h-60 mt-6 md:mt-0">
                    <motion.div
                        className="absolute inset-0 border-4 border-dashed border-green-500 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                    ></motion.div>
                    <div className="md:w-96 md:h-96 w-60 h-60 p-2">
                        <img
                            src={photo}
                            alt="Profile picture of Muhammed Shibil"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
