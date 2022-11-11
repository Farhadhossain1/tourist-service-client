import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext/UserContext';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = ({service}) => {
    const {_id, title} = service;
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch(`https://tourist-service-server-ebon.vercel.app/reviews?title=${title}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[title])
    return (
        <div className='my-8'>
            <div>
                {reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)}
            </div>

           {
            user?.uid ? <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">YOU CAN REVIEW NOW</h2>
              <div className="card-actions justify-end">
                <Link to={`/addReview/${_id}`}><button className="btn btn-primary">Go to Review</button></Link>
              </div>
            </div>
          </div> : <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">You Are Log Out. To Review , Please Log In</h2>
    <div className="card-actions justify-end">
    <Link to="/login"><button className="btn btn-primary">Login</button></Link>
    </div>
  </div>
</div>
           }
        </div>
    );
};

export default Reviews;
          