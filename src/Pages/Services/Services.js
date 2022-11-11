import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../Home/ServiceCard/ServiceCard';

const Services = () => {
    const services = useLoaderData();
    return (
        <div className='grid lg:grid-cols-3 gap-7'>
            {
                services.map(service =><ServiceCard key={service._id} service={service}></ServiceCard>)
            }
        </div>
    );
};

export default Services;