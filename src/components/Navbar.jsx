import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

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

    return (
        <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-6 z-50">
            <h1 className="md:text-3xl text-xl">Muhammed Shibil</h1>
            <ul className="hidden md:flex gap-4">
                {links.map((item) => (
                    <li key={item.id} className="cursor-pointer list-none hover:bg-gray-200 py-2 px-4 rounded-md">
                        <a href={item.href} onClick={(e) => handleClick(e, item.href)}>{item.name}</a>
                    </li>
                ))}
            </ul>
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
                <ul className="flex flex-col justify-center items-center fixed top-0 left-0 h-screen w-full bg-white text-black">
                    {links.map((item) => (
                        <li key={item.id} className="cursor-pointer py-4 capitalize text-2xl hover:text-gray-500 ">
                            <a href={item.href} onClick={(e) => handleClick(e, item.href)}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
