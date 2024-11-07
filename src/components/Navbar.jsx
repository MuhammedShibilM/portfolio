import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from 'framer-motion';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const links = [
        { id: 1, name: "Home", href: "#home" },
        { id: 2, name: "About", href: "#about" },
        { id: 3, name: "Portfolio", href: "#portfolio" },
        { id: 4, name: "Contact", href: "#contact" },
    ];

    const handleClick = (e, href) => {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });
        setToggle(false); // Close the menu after clicking
    };

    const varients = {
        hidden: { opacity: 0 },
        visible: (i) => ({
            opacity: 1,
            transition: {
                delay: i * 0.3
            }
        })
    }

  

    return (
        <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-6 z-50">
            <motion.h1 initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="md:text-3xl text-xl font-mono tracking-widest">
                <svg width="200" height="60" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: '#4f46e5', stopOpacity: 1 }} /> 
                            <stop offset="50%" style={{ stopColor: '#a855f7', stopOpacity: 1 }} /> 
                            <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} /> 
                        </linearGradient>
                    </defs>
                    <text x="10" y="40" fontFamily="Verdana" fontSize="35" fill="url(#gradient1)">
                        Shibil
                    </text>
                </svg>
            </motion.h1>
            <motion.ul className="hidden md:flex gap-4" variants={varients} initial={"hidden"} animate={"visible"}>
                {links.map((item, index) => (
                    <motion.li key={item.id} className="cursor-pointer list-none border-none py-2 px-4 rounded-md hover:-translate-y-1 transition-transform duration-300" variants={varients} custom={index} >
                        <a className="hover:border-b-2 border-b-purple-400" href={item.href} onClick={(e) => handleClick(e, item.href)}>{item.name}</a>
                    </motion.li>
                ))}
            </motion.ul>
            <div className="md:hidden">
                {toggle ? (
                    <FiX
                        size={24}
                        onClick={() => setToggle(!toggle)}
                        className="cursor-pointer z-50 relative"
                        aria-label="Close menu"
                        role="button"
                    />
                ) : (
                    <FiMenu
                        size={24}
                        onClick={() => setToggle(!toggle)}
                        className="cursor-pointer z-50 relative"
                        aria-label="Open menu"
                        role="button"
                    />
                )}
            </div>
            {toggle && (
                <motion.ul className="flex flex-col justify-center items-center fixed top-0 left-0 h-screen w-full bg-[#090909]" variants={varients} initial={"hidden"} whileInView={"visible"}>
                    {links.map((item, index) => (
                        <motion.li key={item.id} className="cursor-pointer py-4 capitalize text-2xl  hover:-translate-y-1 transition-transform duration-300" variants={varients} custom={index}>
                            <a className="hover:border-b-2 border-b-purple-400" href={item.href} onClick={(e) => handleClick(e, item.href)}>{item.name}</a>
                        </motion.li>
                    ))}
                </motion.ul>
            )}
        </nav>
    );
};

export default Navbar;
