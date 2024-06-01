import { useEffect, useState } from "react"
import { Navbar } from "../components/Navbar"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { PayslipComponent } from "../components/PayslipComponent"
import { useNavigate } from "react-router-dom"
import { Footer } from "../components/Footer"

export const Payslip = () => {
    const [name, setName] = useState("User")
    const navigate = useNavigate();

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
            
            setName(response.data.name);
        }catch(e){
            console.log(e);
            alert("You are not logged in!")
            navigate("/login");
        }
    }

    return <div>
        <Navbar loginStatus={true} name={name} />
        <div style={{height:"120vh"}}>
            <PayslipComponent />
        </div>
        <hr className="border"/>
        <Footer />
    </div>
}