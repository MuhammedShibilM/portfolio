import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const links = [
        { id: 1, name: "Home" },
        { id: 2, name: "About" },
        { id: 3, name: "Portfolio" },
        { id: 4, name: "Contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-6 z-50 ">
            <h1 className="md:text-3xl text-xl">Muhammed Shibil</h1>
            <ul className="hidden md:flex gap-4">
                {links.map((item) => (
                    <li key={item.id} className="cursor-pointer list-none hover:border-b-4 hover:border-gray-200">
                        {item.name}
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
                        <li key={item.id} className="cursor-pointer py-4 capitalize text-2xl hover:border-b-4 hover:border-gray-200">
                            {item.name}
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
