import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "./Button";

const DoctorReview = ({ doctorName }) => {
  const [reviews, setReviews] = useState([]); 
  const [data, setData] = useState({
    title: "",
    context: "",
    toName: doctorName,
    rate: 0,
  });

  // Fetchs existing reviews for the doctor when the component loads
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await axios.get("/postreview");
        setReviews(data.filter((review) => review.toName === doctorName)); 
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviews();
  }, [doctorName]);

  // Handles review submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Posts the review to the backend
      const { data: newReview } = await axios.post("/postreview", data);

      // Immediately updates the UI with the new review
      setReviews((prevReviews) => [...prevReviews, newReview]);

      // Resets the form
      setData({ ...data, title: "", context: "", rate: 0 });
    } catch (error) {
      console.error("Error posting review:", error);
    }
  };

  return (
    <div className="doctor-review-section">
      <h2>Reviews for {doctorName}</h2>

      <div className="reviews-list">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review._id} className="review-item">
              <strong>{review.title}</strong>
              <p>{review.context}</p>
              <strong>Rating:</strong> {review.rate} / 5
            </div>
          ))
        ) : (
          <p>No reviews yet. Be the first to leave a review!</p>
        )}
      </div>



    </div>
  );
};

export default DoctorReview;