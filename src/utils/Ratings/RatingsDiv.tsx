import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";

const RatingsDiv = ({ ratings }: { ratings: number }) => {
  switch (ratings) {
    case 1:
      return (
        <div className=" text-[#FACC16] ">
          <FaStar />
        </div>
      );

    case 2:
      return (
        <div className=" text-[#FACC16] flex justify-start items-center  ">
          <FaStar />
          <FaStar />
        </div>
      );

    case 3:
      return (
        <div className=" text-[#FACC16] flex justify-start items-center  ">
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      );

    case 4:
      return (
        <div className=" text-[#FACC16] flex justify-start items-center  ">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      );

    case 5:
      return (
        <div className=" text-[#FACC16] flex justify-start items-center  ">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      );

    default:
      break;
  }
  
  if (ratings > 0 && ratings < 1) {
    return (
      <div className=" text-[#FACC16]  flex justify-start items-center  ">
        <FaRegStarHalfStroke />
      </div>
    );
  }

  if (ratings > 1 && ratings < 2) {
    return (
      <div className=" text-[#FACC16]  flex justify-start items-center  ">
        <FaStar />
        <FaRegStarHalfStroke />
      </div>
    );
  }

  if (ratings > 2 && ratings < 3) {
    return (
      <div className=" text-[#FACC16]  flex justify-start items-center  ">
        <FaStar />
        <FaStar />
        <FaRegStarHalfStroke />
      </div>
    );
  }

  if (ratings > 3 && ratings < 4) {
    return (
      <div className=" text-[#FACC16]  flex justify-start items-center  ">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStarHalfStroke />
      </div>
    );
  }

  if (ratings > 4 && ratings < 5) {
    return (
      <div className=" text-[#FACC16]  flex justify-start items-center  ">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStarHalfStroke />
      </div>
    );
  }


  return (
    <div className="flex justify-start items-center text-gray-400">
      <FaRegStar />
      <FaRegStar />
      <FaRegStar />
      <FaRegStar />
      <FaRegStar />
    </div>
  );
};

export default RatingsDiv;
