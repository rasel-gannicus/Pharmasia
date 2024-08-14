import Image from "next/image";
import SectionCard from "./Section Card/SectionCard";
import discountImg from "@/assets/img/discount 7.jpg";

const DiscountSection3 = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-3">
      <SectionCard />
      <div className=" flex-col flex justify-center items-center gap-4  w-full">
        <div className="bg-[#FF594D] text-white min-h-[250px] flex flex-col justify-center items-center rounded-lg w-full ">
          <h2 className="text-4xl font-semibold my-4">Sale 50% off</h2>
          <button>More . . . </button>
        </div>

        <div className="bg-green-400 min-h-[250px] flex flex-col justify-center items-center rounded-lg  w-full relative overflow-hidden">
          <div className="absolute top-0 bottom-0 left-0 right-0 z-0">
            <Image
              alt="discount image"
              src={discountImg}
              className="w-[100%] h-full object-cover "
            />
          </div>
          <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center text-white">
            <h2 className="text-4xl font-semibold my-4 z-50 text-center">Nutrition for every life</h2>
            <button>More . . . </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountSection3;
