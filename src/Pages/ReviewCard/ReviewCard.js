import React from 'react';

const ReviewCard = ({review}) => {
    const {comment, img, name} = review;
    console.log(img)
    return (
        <div className='my-8'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <div className="avatar">
                <div className="w-full h-20 rounded-full">
                    <img src={img}  alt=""/>
                </div>
                </div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{comment}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default ReviewCard;