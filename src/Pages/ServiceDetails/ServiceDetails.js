import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';

const ServiceDetails = () => {
    const service = useLoaderData();
    const {img, description, title} = service;
    return (
        <div className='grid lg:grid-cols-2 gap-10'>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className='' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
                </div>
            <div>
                <Reviews service = {service}></Reviews>
            </div>
        </div>
    );
};

export default ServiceDetails;