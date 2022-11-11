import React from 'react';
import toast from "react-hot-toast";

const AddService = () => {

    const handleAddService = event =>{
        event.preventDefault();
        const form = event.target;
        const title = form.placeName.value;
        const img = form.photo.value;
        const price = form.price.value;
        const description = form.description.value;
       
        const addService = {
            title,
            img,
            price,
            description
        }
        fetch("http://localhost:5000/services",{
            method: "POST",
            headers : {
                "content-type" : "application/json"
            },
            body: JSON.stringify(addService)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                toast.success('Successfully Added Service!')
                form.reset();
            }
        })
    }


    return (
        <div className=' bg-slate-600  lg:w-2/5 mx-auto text-center font-semibold my-10'>
            <form onSubmit={handleAddService} className='p-5'>
                <p className='text-3xl mb-3'>Add Your Service</p>
                    <p  className=' text-white'>Place Name: </p>
                    <input type="text" className='py-3 px-16 rounded-lg mb-3' name="placeName" id="" required />
                    <p className=' text-white'>Photo Url</p>
                    <input type="text" className='py-3 px-16 rounded-lg mb-3' name="photo" id="" required />
                    <p className=' text-white'>Price</p>
                    <input type="text" className='py-3 px-16 rounded-lg mb-3' name="price" id="" required />
                    <p className=' text-white'>Description</p>
                    <textarea name="description" className='py-3 px-16 rounded-lg mb-3' required id="" cols="30" rows="4"></textarea>
                    <div>
                        <button type="submit" className='btn my-5 px-16'>Submit</button>
                    </div>
            </form>
        </div>
    );
};

export default AddService;