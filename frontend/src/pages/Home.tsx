import { useNavigate } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import homeElement from "../assets/payslip.png"
import { Footer } from "../components/Footer";

export const Home = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("User");
    const [loginStatus, setLoginStatus] = useState(false);

    useEffect(() => {
        userDetails();
    },[])

    async function userDetails() {
        try{
            const response = await axios.get(`${BACKEND_URL}/user`,{
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            });
            if(response.status){
                setLoginStatus(true);
                setName(response.data.name)
            }
            console.log(name)
        }catch(e){
            console.log(e);
        }
    }
    return <div>
        <Navbar loginStatus={loginStatus} name={name} />
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="text-center text-5xl sm:text-6xl font-bold my-3 text-gray-500"><span style={{color:"#d60000"}}>CHOICE</span> ENTERPRISES</div>
            <div className="text-2xl sm:text-3xl font-medium mb-5 text-gray-700">Trusted labour contractor</div>
            <div className="text-md sm:text-lg text-center mb-5 w-[350px] sm:w-[450px] text-gray-800">Secure Login for Quick and Convenient Retrieval of Your Payment Information Anytime, Anywhere.</div>
            <div className="flex">
                <button onClick={()=>{
                    navigate(loginStatus ? "/payslip" : "/login")
                }} className="mx-1 sm:mx-3 transition-all w-[160px] sm:w-[200px] ease-in-out duration-500 px-8 h-12 bg-gray-400 text-white border border-gray-400 rounded-full hover:bg-gray-500 hover:font-medium">{loginStatus ? "Payslip" : "Login"}</button>
                <button onClick={() => navigate("/contact")} className="mx-1 sm:mx-3 transition-all w-[160px] sm:w-[200px] ease-in-out duration-500 px-8 h-12 border border-gray-400 rounded-full hover:bg-gray-200 hover:font-medium">Contact us</button>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-slate-300 w-full py-14">
            <div className="mt-10 mb-16 text-white text-3xl font-medium drop-shadow-xl">Access Your Payslip Anytime, Anywhere with Ease.</div>
            <img src={homeElement} alt="payslip template" className="shadow-2xl mb-5" />
        </div>
        <Footer />
    </div>
}