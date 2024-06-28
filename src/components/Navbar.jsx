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
        <nav className="fixed  bg-gradient-to-r from-gray-800 to-gray-600 text-white flex justify-between p-6 z-50 w-screen">
            <h1 className="md:text-3xl text-3xl">Muhammed Shibil</h1>
            <div className="hidden md:flex gap-4">
                {links.map((item) => (
                    <li key={item.id} className="cursor-pointer list-none">
                        {item.name}
                    </li>
                ))}
            </div>
            <div className="md:hidden">
                {toggle ? (
                    <FiX
                        size={24}
                        onClick={() => setToggle(!toggle)}
                        className="cursor-pointer z-50 relative"
                    />
                ) : (
                    <FiMenu
                        size={24}
                        onClick={() => setToggle(!toggle)}
                        className="cursor-pointer z-50 relative"
                    />
                )}
            </div>
            {toggle && (
                <ul className="flex flex-col justify-center items-center fixed top-0 left-0 h-screen w-full bg-gradient-to-r from-gray-800 to-gray-600 z-40">
                    {links.map((item) => (
                        <li key={item.id} className="cursor-pointer py-4 capitalize text-2xl">
                            {item.name}
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
