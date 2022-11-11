import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext/UserContext';
import './AddReview.css';

const AddReview = () => {
    const {user} = useContext(AuthContext);
    const service = useLoaderData();
    const navigate = useNavigate();
    
    const {price, title, img, _id} = service;

    const handleReviewAdd = (event) =>{
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
       
        const addReview = {
            name: user?.displayName, 
            email: user?.email,
            comment: review,
            img: user?.photoURL,
            title,
            price, 
            placeImg: img
        }
        console.log(addReview)

        fetch("https://tourist-service-server-ebon.vercel.app/reviews",{
           method:"POST",
           headers:{
            "content-type": "application/json"
           } ,
           body: JSON.stringify(addReview)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

    }

    return (
       <div className='review'>
         <div className='lg:w-1/2 mx-auto text-center'>
            <form onSubmit={handleReviewAdd}>
                <p>Add Review</p>
                <textarea className='border border-sky-600' name="review" id="" cols="30" rows="5"></textarea><br />
                <button className='btn' type="submit">Send Review</button>
            </form>
        </div>
       </div>
    );
};

export default AddReview;