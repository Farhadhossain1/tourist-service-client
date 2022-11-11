import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/UserContext/UserContext';
import MyReviewCard from '../MyReviewCard/MyReviewCard';

const MyReview = () => {
    const {user} = useContext(AuthContext);

    const [myReviews, setMyReviews] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/myReviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setMyReviews(data))
    },[user?.email])


    const handleDelete = id =>{
        fetch(`http://localhost:5000/myReviews/${id}`,{
            method : "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                const remain = myReviews.filter(mr => mr._id !== id);
                setMyReviews(remain);
                alert("Deleted Successfully")
            }
        })
    }
    

    return (
        <div>
            {
                myReviews.length === 0 ? <p className='text-3xl text-center my-2  font-semibold'>You Have No Review !!</p> : <div className='lg:grid grid-cols-2 gap-7  my-10'>
                {
                  myReviews.map(myReview => <MyReviewCard key={myReview._id} handleDelete={handleDelete} myReview={myReview}></MyReviewCard>)
                 }
                </div>
            }
          
        </div>
    );
};

export default MyReview;