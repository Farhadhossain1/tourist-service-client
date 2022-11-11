import React from 'react';

const ServiceCard = ({service}) => {
    const {title, description, price , img} =service;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='w-full' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-[tomato]'>Price: ${price}</p>
                <p>{description.slice(0,100)}.....</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ServiceCard;