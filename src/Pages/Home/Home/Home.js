import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Home = () => {
    const services = useLoaderData(); 
    console.log(services)
    return (
        <div>
            <div className='grid lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className='text-center my-5'>
                <Link to="/services"><button className='btn'>SEE ALL</button></Link>
            </div>
        </div>
    );
};

export default Home;