import React from 'react';

import './GiftsListToPrint.css';

export const GiftsListToPrint = React.forwardRef(({gifts}, ref) => {
    return (

        <>
            <h1 className='title'>Your gifts list</h1>

            {/* Using the ref to print all the content inside the div */}
            <div ref={ref} className='container'>
                {
                    gifts.map((gift, i) => (
                        <div className='main' key={i}>
                            <img className='gift-image' alt={gift.name} src={gift.image} />

                            <div className='info'>
                                <span>{gift.name} ({gift.quantity})</span>
                                <span>To: {gift.person}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>

    )
});