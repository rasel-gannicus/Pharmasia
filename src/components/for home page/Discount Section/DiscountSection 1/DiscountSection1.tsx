import React from 'react';
import SectionCard from './Section Card/SectionCard';
import SectionCard2 from './Section Card/SectionCard2';
import SectionCard3 from './Section Card/SectionCard3';

const DiscountSection1 = () => {
    return (
        <div className='my-20 grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto'>
            <SectionCard />
            <SectionCard2 />
            <SectionCard3 />
        </div>
    );
};

export default DiscountSection1;