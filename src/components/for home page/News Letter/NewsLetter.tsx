import { Button } from '@/components/ui/button';
import React from 'react';

const NewsLetter = () => {
    return (
        <div className="my-24 flex flex-col justify-center items-center bg-contain  bg-[url('https://medi.arenacommerce.com/cdn/shop/files/home1-bg-newsletter_1080x.png?v=1613561493')]">
            <h2 className='text-center text-xl lg:text-5xl font-bold text-blue-900'>Join our newsletter and get <br />$20% discount on your first order</h2>
            <div className="my-10 flex flex-col lg:flex-row justify-center items-center gap-5">
                <input type="email" placeholder='Your email' className='lg:h-14 h-10 lg:min-w-[500px] px-5 rounded-full bg-[#F0F2F5] text-blue-900 ' />
                <button className='rounded-full px-16 lg:h-14 h-10 bg-orange-500 text-white'>Subscribe</button>
            </div>
        </div>
    );
};

export default NewsLetter;