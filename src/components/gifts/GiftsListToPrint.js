import React from 'react';

import '../../styles.css';

export const GiftsListToPrint = React.forwardRef(({gifts}, ref) => {
    return (
        // Usingf the ref to print all the content inside the div
        <div ref={ref}>

            <h1 className='title'>Your list of gifts</h1>

            {
                gifts.map((gift, i) => (
                    <div className='main' key={i}>
                        <img className='gift-image' alt={gift.name} src={gift.image} />

                        <div className='info'>
                            <span>{gift.name} ({gift.quantity})</span>
                            <span>{gift.person}</span>
                        </div>
                    </div>
                ))
            }

        </div>
    )
});