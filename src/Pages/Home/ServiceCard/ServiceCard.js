import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {title, description, price , img} =service;
    console.log(service)
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
            <figure><img className='w-full' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-[tomato]'>Price: ${price}</p>
                <p>{description.slice(0,100)}.....</p>
                <div className="card-actions justify-end">
                <Link to={`/service/${service._id}`}><button className="btn btn-primary font-serif">View Details</button></Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ServiceCard;