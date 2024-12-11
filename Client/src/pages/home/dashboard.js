
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import DoctorReview from "../../components/DoctorReview";
import FeedbackFormPopup from "../../components/FeedbackFormPopup";

export default function Dashboard() {
    const doctorName = "Dr. John Doe"; 
    const [showPopup, setShowPopup] = useState(false)
    function openPopup() {
      setShowPopup(true)
    }
    const { user } = useContext(UserContext)
    return (
        <div>
            <h1>Doctor Dashboard</h1>
            <DoctorReview doctorName={doctorName} />

        </div>


    )
}