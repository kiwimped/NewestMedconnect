import { Outlet,Navigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { useContext } from "react";
const ProtectedRoutes = () =>{
    const {user} = useContext(UserContext);
    if (user === null){
        return <div>Loading....</div>
    }
    return user.isDoctor ? <Outlet/>:<Navigate to="/error"/>
}
export default ProtectedRoutes