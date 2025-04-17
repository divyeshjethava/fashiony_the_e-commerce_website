import React, { useState, useEffect } from 'react'
import exOff from '../images/offer3.jpg'

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 25);

const OfferTimer = () => {
    const [remtime, Setremtime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const calculateRemtime = () => {
            const now = new Date();
            const target = new Date(targetDate);
            const differnce = target - now;

            if (differnce > 0) {
                const days = Math.floor(differnce / (1000 * 60 * 60 * 24));
                const hours = Math.floor(differnce / (1000 * 60 * 60) % 24);
                const minutes = Math.floor(differnce / (1000 * 60) % 60);
                const seconds = Math.floor((differnce / 1000) % 60);

                Setremtime({ days, hours, minutes, seconds });

            } else {
                Setremtime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };
        const timeId = setInterval(calculateRemtime, 1000);
        return () => clearInterval(timeId);

    }, []);
    return (

        <div className="time_con">
            <div>
                <span className='remDay'>{String(remtime.days).padStart(2, '0')}</span>
                <span className='day_span'>Days</span>
            </div>
            <div>
                <span className='remDay'>{String(remtime.hours).padStart(2, '0')} </span>
                <span className='day_span'>Hours</span>
            </div>
            <div>
                <span className='remDay'>{String(remtime.minutes).padStart(2, '0')} </span>
                <span className='day_span'>Minutes</span>
            </div>

        </div>



    );
};

export default function ExOffer() {
    return (
        <div className='ExOff_ContainerMain' >
            <div className='ExOff_Container'>

                <div className='img_con'>
                    <img src={exOff} />
                </div>
                <div className='Ex_con'>
                    <h1>Exclusive Offers</h1>
                    <p>Unlock the ultimate style upgrade with our exclusive offer Enjoy savings of up to 40% off on our latest New Arrivals </p>
                    <OfferTimer />
                    <button className='of_btn'>BUY NOW</button>
                </div>

            </div>
        </div>

    )
}
