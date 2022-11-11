import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/UserContext/UserContext';

const MyReview = () => {
    const {user} = useContext(AuthContext);

    const [myReview, setMyReview] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/myReviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setMyReview(data))
    },[user?.email])

    return (
        <div>
           
        </div>
    );
};

export default MyReview;