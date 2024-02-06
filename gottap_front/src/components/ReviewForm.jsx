import { useNavigate } from "react-router-dom";
import { useState } from "react";
const API = import.meta.env.VITE_API_KEY;

function ReviewForm() {
  const navigate = useNavigate();
  const [review, setReview] = useState({
    comment: "",
    rating: "",
  });
  const addNewReview = () => {
    const newReviewData = {
      comment: review.comment,
      rating: review.rating,
    };
    try {
      fetch(`${API}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReviewData),
      })
        .then((res) => res.json())
        .then((res) => {
          // console.log(res)
          // setReview(newReviewData)
          navigate(`/reviews`);
        });
    } catch (error) {
      console.error(error.respon);
    }
  };
  const handleNewFormTextChange = (e) => {
    setReview({ ...review, [e.target.id]: e.target.value });
  };
  const handleRatingChange = (e) => {
    setReview({ ...review, rating: e.target.value });
  };
  const handleNewFormSubmit = (e) => {
    e.preventDefault();
    setReview(addNewReview());
  };
  return (
    <div>
      <form onSubmit={handleNewFormSubmit}>
        <label htmlFor="reviews">Review: </label>
        <textarea
          id="comment"
          value={review.comment}
          type="text"
          onChange={handleNewFormTextChange}
          placeholder="Add Your Review Here!!"
          required
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating: </label>
        <input
          id="rating"
          value={review.rating}
          type="number"
          onChange={handleRatingChange}
          placeholder="Rate 1 - 5"
          required
        />
        <br />
        <br />
        <button type="submit">Add New Review</button>
      </form>
      <br />
    </div>
  );
}
export default ReviewForm;
