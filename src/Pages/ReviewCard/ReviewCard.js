import React from 'react';

const ReviewCard = ({review}) => {
    const {comment} = review;
    return (
        <div>
            <p>{comment}</p>
        </div>
    );
};

export default ReviewCard;