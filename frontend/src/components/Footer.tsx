import { useNavigate } from "react-router-dom"
import logoNew from "../assets/logoNew.png"

export const Footer = () => {
    const navigate = useNavigate();
    return <div className="w-full grid grid-cols-2 sm:grid-cols-3 h-52 py-5">
        <div className="logo h-24 col-span-2 sm:col-span-1 flex justify-center items-center mt-3 px-6">
            <img className="cursor-pointer w-[150px] sm:w-[200px]" onClick={() => navigate("/")} src={logoNew} alt="logo" />
        </div>
        <div className="flex justify-center">
            <ul className="flex flex-col justify-between py-6 h-full">
                <li className="font-medium mb-4">Quick links</li>
                <li className="cursor-pointer" onClick={() => navigate("/login")}>Login</li>
                <li className="cursor-pointer" onClick={() => navigate("/contact")}>Contact</li>
                <li><a href="http://choiceenterprises.atwebpages.com/">Previous website</a></li>
            </ul>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
            <p>© 2024 Choice Enterprises.</p><p>All Rights Reserved.</p>
        </div>
    </div>
}