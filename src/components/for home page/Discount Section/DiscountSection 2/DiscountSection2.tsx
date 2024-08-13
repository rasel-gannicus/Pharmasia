import SectionCard from './Section Card/SectionCard';
import SectionCard2 from './Section Card/SectionCard2';

const DiscountSection2 = () => {
    return (
        <div className='my-20 grid md:grid-cols-2 lg:grid-cols-2 gap-9 mx-auto'>
            <SectionCard /> 
            <SectionCard2 /> 
        </div>
    );
};

export default DiscountSection2;