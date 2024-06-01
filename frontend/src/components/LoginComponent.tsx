import { useState } from "react"
import loginDesign from "../assets/loginDesign.png"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { BACKEND_URL } from "../config";

export const LoginComponent = () => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState({
        username: "",
        password: ""
    });

    async function sendRequest(){
        try {
            const response = await axios.post(`${BACKEND_URL}/login`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token",jwt.jwt);
            navigate("/payslip")
        } catch (e) {
            console.log(e);
        }
    }


    return <div className="w-11/12 lg:w-1/2 h-[480px] grid grid-cols-1 sm:grid-cols-2 absolute top-[150px] border rounded-xl shadow-2xl">
        <div style={{backgroundColor: "rgb(245 191 191 / 54%)"}} className="rounded-xl">
            <div className="flex flex-col justify-center items-center h-full">
                <div className="text-2xl font-medium text-gray-600 mb-5">Login</div>
                <div className="flex flex-col items-center">
                    <input onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            username: e.target.value.toUpperCase()
                        }))
                    }} className="p-2 my-3 rounded-md shadow-sm focus:outline-none" type="text" placeholder="Username..." />
                    <input onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            password: e.target.value.toUpperCase()
                        }))
                    }} className="p-2 my-3 rounded-md shadow-sm focus:outline-none" type="password" placeholder="Password..." />
                    <button onClick={sendRequest} className="my-4 rounded-full border transition-all w-[130px] ease-in-out duration-500 px-6 h-10 border-gray-400 bg-red-300 text-white hover:bg-red-400 hover:font-medium">Log in</button>
                </div>
            </div>
        </div>
        <div className="hidden sm:block justify-self-end py-7">
            <div className="h-full flex flex-col justify-center">
                <img src={loginDesign} width={600} />
            </div>
        </div>
    </div>
}