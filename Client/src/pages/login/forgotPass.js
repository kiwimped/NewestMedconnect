import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-hot-toast'
export default function ForgotPassword(){
    const navigate = useNavigate()
    const [data,setData] = useState({
        email:'',
    })
    
    const loginUser = async (e) => {
        e.preventDefault()
        const {email} = data
        try {
            const {data} = await axios.post('/login/ForgotPassword',{email});
            if(data.error){
                toast.error(data.error)
            }else{
                if (data.token) {
                    localStorage.setItem('authToken', data.token); // Add the token to localStorage
                    
                }
                setData({});
                    navigate('/login')
                
            }
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div>
            <form onSubmit={loginUser}>
                <label>Email</label>
                <input type="email" placeholder="enter email" value={data.email} onChange={(e)=>setData({...data,email: e.target.value})}></input>

                <button type='submit'>Login</button>
            </form>
            <div>
            Already got an account?{" "}
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => navigate("/login")}
        >
          Register here
        </span>
        
            

     
            </div>
            
        </div>
    )
}