
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

export default function dashboard(){
    const {user} = useContext(UserContext)
    return(
        <div>
             {!!user && user.name && <div>{user.name}!</div>}
        </div>
       

    )
}