import React from 'react';

const MyReviewCard = ({myReview, handleDelete}) => {
    console.log(myReview)
    const {name, title, img, placeImg, comment, price, _id } = myReview
    return (
        <div>
            <div className="card w-[500px] bg-base-100 shadow-xl">
        <div className="card-body">
            <div className="card-actions justify-end">
                    <button onClick={()=>handleDelete(_id)} className="btn btn-square btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    </div>
                  <div className='lg:flex gap-3'>
                  <div><img className='lg:w-[120px] h-[120px] ' src={placeImg} alt="" /></div>
                    <div>
                        <p className='text-xl font-semibold'>{title}</p>
                    <p className=''>{comment}</p>
                    <div className='flex mt-5 '>
                    <div className="avatar">
                <div className="w-12 h-12 rounded-full">
                    <img src={img}  alt=""/>
                </div>
                <div className='ml-2'>
                            <p>{name}</p>
                            <p className='text-[tomato]'>Price: {price}</p>
                        </div>
                </div>
                    </div>
                </div>
                  </div>
                </div>
                </div>
        </div>
    );
};

export default MyReviewCard;