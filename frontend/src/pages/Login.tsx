
import { LoginComponent } from "../components/LoginComponent"
import { Navbar } from "../components/Navbar"

export const Login = () => {
    return <div>
        <Navbar loginStatus={false} />
        <div className="w-full flex justify-center">
            <LoginComponent />
        </div>
    </div>
}