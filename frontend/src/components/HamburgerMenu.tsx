import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface inputs{
    loginStatus: boolean;
    name?: string;
}

export const HamburgerMenu = ({ loginStatus, name }: inputs) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div className="relative">
            {isOpen?<FaTimes className="text-2xl font-light cursor-pointer text-gray-600" onClick={toggleMenu} />:<FaBars className="text-2xl cursor-pointer text-gray-600" onClick={toggleMenu} />} 
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
                    {loginStatus ? (
                        <>
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                            >
                                {name}
                            </button>
                            <button
                                onClick={() => {
                                    handleLogout();
                                    setIsOpen(false);
                                }}
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={() => {
                                navigate("/login");
                                setIsOpen(false);
                            }}
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                        >
                            Login
                        </button>
                    )}
                    <button
                        onClick={() => {
                            navigate("/contact");
                            setIsOpen(false);
                        }}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                    >
                        Contact
                    </button>
                </div>
            )}
        </div>
    );
};

