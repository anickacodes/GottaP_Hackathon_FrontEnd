import { useNavigate} from "react-router-dom";
import {useState} from "react";
const API = import.meta.env.VITE_API_KEY
function ReviewForm() {
    const navigate = useNavigate()
    const [review, setReview] = useState({
        comment: "",
        rating: ""
    })
    const addNewReview = ()=>{
        const newReviewData = {
            comment:review.comment,
            rating: review.rating
        }
        try {
            fetch(`${API}/reviews`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newReviewData)
            })
            .then(res=>res.json())
            .then(()=>navigate(`/reviews`))
        } catch (error) {
            return error
        }
    }
    const handleNewFormTextChange = (e)=>{
        setReview({ ...review, [e.target.id]: e.target.value})
    };
    const handleNewFormSubmit = (e)=>{
    e.preventDefault()
        addNewReview()
    };
    return (
        <div>
            <form onSubmit={handleNewFormSubmit}>
            <label htmlFor="review">Review: </label>
            <input
                id="review"
                value={review.comment}
                type="text"
                onChange={handleNewFormTextChange}
                placeholder="Add Your Review Here!!"
                required
            />
            <br/>
            <br/>
            <label htmlFor="review">Review: </label>
            <input
                id="review"
                value={review.rating}
                type="number"
                onChange={handleNewFormSubmit}
                placeholder="Rate 1 - 5"
                required
            />
            <br/>
            <br/>
            <button type="submit">Add  New Review</button>
            </form>
            <br/>
        </div>
    )
}
export default ReviewForm