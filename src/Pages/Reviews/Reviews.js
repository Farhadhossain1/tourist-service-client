import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext/UserContext';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = ({service}) => {
    const {_id, title} = service;
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?title=${title}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[title])
    return (
        <div>
            <div>
                {reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)}
            </div>
           {
            user?.uid ? <Link to={`/addReview/${_id}`}>YOU CAN REVIEW NOW</Link> : <Link to='/login'>YOU ARE LOG OUT, PLEASE LOG IN</Link>
           }
        </div>
    );
};

export default Reviews;