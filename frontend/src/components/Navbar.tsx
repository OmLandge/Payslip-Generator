
import { useNavigate } from "react-router-dom"
import logoNew from "../assets/logoNew.png"
import { LogoutIcon } from "./LogoutIcon";
import { HamburgerMenu } from "./HamburgerMenu";

interface input{
    loginStatus: boolean;
    name?: string;
}

export const Navbar = ({loginStatus, name} : input) => {
    const navigate = useNavigate();
    return <div className="w-full h-24 border-b-4 fixed bg-white/90 backdrop:blur-3xl z-10">
        <div className="flex justify-between items-center">
            <div className="logo h-24 flex items-center px-6">
                <img className="cursor-pointer" onClick={() => navigate("/")} src={logoNew} alt="logo" width={200} />
            </div>
            <div className="mx-7">
                {loginStatus ? 
                    <div className="hidden sm:flex">
                        <button onClick={()=>{
                            (loginStatus) ? null : navigate("/login");
                        }} className="transition-all ease-in-out duration-500 px-8 mx-3 h-12 border-2 text-gray-600 border-gray-400 rounded-md hover:bg-gray-200 hover:font-medium">{loginStatus ? name:"Login"}</button>
                        <button onClick={()=>{
                            localStorage.removeItem("token");
                            navigate("/login");
                        }} className="transition-all ease-in-out duration-500 px-8 h-12 border-2 border-gray-400 rounded-md hover:bg-gray-200 hover:font-medium">
                            <LogoutIcon />
                        </button>
                    </div>
                :
                    <button onClick={()=>{
                        (loginStatus) ? null : navigate("/login");
                    }} className="hidden sm:block transition-all ease-in-out duration-500 px-8 h-12 border-2 border-gray-400 rounded-md hover:bg-gray-200 hover:font-medium">{loginStatus ? name:"Login"}</button>
                 }
                <div className="sm:hidden flex items-center">
                    <HamburgerMenu loginStatus={loginStatus} name={name} />
                </div>
            </div>
        </div>
    </div>
}