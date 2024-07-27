import {  LiaLinkedinIn } from "react-icons/lia";
import { MdEmail } from "react-icons/md";

const date = new Date()


const Contact= ()=>{

  return(
    <footer className="h-screen w-full flex  flex-col justify-between" id="contact">
          <div className="text-center p-20 ">
                <h1 className="font-semibold text-gray-400 text-sm">Get In Touch</h1>
                <h1 className="text-4xl font-bold">Contact me</h1>
            </div>
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
            

    </footer>
  );
}

export default Contact