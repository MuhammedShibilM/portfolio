import {  LiaLinkedinIn } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
const date = new Date()


const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
  }
};


const Contact= ()=>{


  return(
    <section className="h-screen w-full flex  flex-col justify-between" id="contact">
          <div className="text-center p-20 ">
                <h1 className="font-semibold text-gray-400 text-sm">Get In Touch</h1>
                <h1 className="text-4xl font-bold">Contact me</h1>
            </div>
         
            <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" width="200" height="200"
       className="item"
    >
      <motion.path
        d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 004.39.83 1 1 0 011 1v3.5a1 1 0 01-1 1A19.92 19.92 0 012 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.83 4.39 1 1 0 01-.27 1.11l-2.2 2.2z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
    </motion.svg>
              
            <div className="flex  justify-center items-center">
                <div className="border-2 border-black rounded-2xl  flex flex-col md:flex-row justify-between text-lg">
                     <div className="flex justify-between items-center space-x-4 p-4">
                      <div className="bg-black p-1 rounded-full"> <a href="mailto:muhammedshibilm321@gmail.com"><MdEmail color="white" className="w-5"/></a></div>
                     <p>muhammedshibilm321@gmail.com</p>
                     </div>
                     <div className="flex space-x-4 p-4">
                         <div className="bg-black p-1 rounded-full"> <a href="https://www.linkedin.com/in/muhammedshibilm"> <LiaLinkedinIn color="white" className="w-5"/></a></div>
                        <p>LinkedIn</p>
                     </div>
                </div>
            </div>
            <div className="p-10">
              <p className="text-center text-gray-500">Copyright ©️ {date.getFullYear()} Muhammed Shibil M. All  Rights Reverved</p>
            </div>
    </section>
  );
}

export default Contact