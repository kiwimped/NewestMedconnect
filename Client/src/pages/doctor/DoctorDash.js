import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProtectRoute } from "../../components/protectRoute";
import DoctorReview from "../../components/DoctorReview";


export const DoctorDash = () => {
  const [todaysAppointments, setTodaysAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const doctorName = "Dr. John Doe"; 

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('/appointments');
        setTodaysAppointments(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching appointments:", error);
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);


  return (
    <div>
      <header>
        <h1>Doctor Dashboard</h1>
      </header>
      <main>
        <section>
          <h2>Today's Appointments</h2>
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Patient Name</th>
                <th>Reason</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {todaysAppointments.map((appointment) => (
                <tr key={appointment._id}>
                  <td>{appointment.time}</td>
                  <td>{appointment.patientName}</td>
                  <td>{appointment.reason}</td>
                  <td>
                    <button>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
      <div>
        <h1>Doctor Dashboard</h1>
        <DoctorReview doctorName={doctorName} />
      </div>
    </div>
  );
};
