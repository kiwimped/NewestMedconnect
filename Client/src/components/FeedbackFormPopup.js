import { useState } from "react";
import Button from "./Button";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
export default function FeedbackFormPopup({ setShow }) {
    const User = useContext(UserContext)
    const [data,setData] = useState({
        title:'',
        context:'',
        fromName: User.name,
        toName:'',
        date: new Date().toISOString(),
        rate:0,

})
const handleSubmit = async(e)=>{
    e.preventDefault()
        const {title,context,fromName,toName,rate} = data
        try {
            const {data} = await axios.post('/postreview',{
                title,context,fromName,toName,rate
            });
            if(data.error){
                toast.error(data.error)
            }else{
                if (data.token) {
                    localStorage.setItem('authToken', data.token); // Add the token to localStorage
                    
                }
                setData({});
                setShow(false);
                
            }
            console.log({ title, context, fromName, toName, rate });

        } catch (error) {
            console.log(error)
        }
}
    return (
        <div className="fixed inset-0 bg-white md:bg-black md:bg-opacity-80 flex md:item-center">

            <div className="w-full">
                <div className="bg-white md:max-w-2xl md:mx-auto md:rounded overflow-hidden">
                    <button onClick={() => setShow(false)} className="text-right">CLOSE</button>
                    <h2 className="py-4 text-center border-b">Make suggession</h2>
                    <form className="p-8" onSubmit={handleSubmit}>
                    <input
                        className="w-full border p-2 rounded"
                        type="text"
                        placeholder="A short, descriptive title"
                        name="title"
                        value={data.title}
                        onChange={(e)=>setData({...data,title: e.target.value})}
                        required
                    />

                    {/* Context/Details Field */}
                    <label className="block mt-4 mb-2">Details</label>
                    <textarea
                        className="w-full border p-2 rounded"
                        placeholder="Please include details"
                        name="context"
                        value={data.context}
                        onChange={(e)=>setData({...data,context: e.target.value})}
                        required
                    ></textarea>

                    {/* To Name Field */}
                    <label className="block mt-4 mb-2">To Name</label>
                    <input
                        className="w-full border p-2 rounded"
                        type="text"
                        placeholder="Enter recipient name"
                        name="toName"
                        value={data.toName}
                        onChange={(e)=>setData({...data,toName: e.target.value})}
                        required
                    />

                    {/* Rating Field */}
                    <label className="block mt-4 mb-2">Rating</label>
                    <input
                        className="w-full border p-2 rounded"
                        type="number"
                        placeholder="Rate out of 5"
                        name="rate"
                        value={data.rate}
                        onChange={(e)=>setData({...data,rate: e.target.value})}
                        min="0"
                        max="5"
                        required
                    />

                    {/* Submit Button */}
                    <div className="flex gap-2 mt-4">
                        <Button primary type="submit">
                            Submit Feedback
                        </Button>
                        <Button onClick={() => setShow(false)}>Cancel</Button>
                    </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}