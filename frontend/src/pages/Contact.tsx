
import { Navbar } from "../components/Navbar"
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Footer } from "../components/Footer";
import { ContactComponent } from "../components/ContactComponent";

export const Contact = () => {
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
            <div className="text-3xl font-semibold text-gray-500 mb-8 text-center">Contact us</div>
            <ContactComponent />
        </div>
        <hr className="border" />
        <Footer />
    </div>
}