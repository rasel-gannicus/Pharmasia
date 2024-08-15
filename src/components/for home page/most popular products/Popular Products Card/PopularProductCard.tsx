import { Button } from "@/components/ui/button";
import { TCloths } from "@/types/types";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";

const PopularProductCard = ({ data }: { data: TCloths }) => {
  return (
    <div className="md:max-w-80 w-[95%] mx-auto hover:shadow-lg group duration-300 rounded-lg py-2">
      <div className="rounded overflow-hidden relative ">
        <Link href={`/singleProduct/${data._id}`}>
          <img src={data.Images} alt="" />
        </Link>
        {/* --- card overlay with animation --- */}
        <div className="absolute bg-[rgba(71,85,105,0.85)] top-0 bottom-0 left-[900px] -right-[900px] group-hover:right-0 group-hover:left-0  flex flex-col justify-center items-center gap-5 duration-300">
          <Button className="rounded py-6 bg-white min-w-[230px] text-black hover:text-white">
            <CgDetailsMore className="me-3 text-xl text-[#5092C7] " />
            View Details
          </Button>
          <Button className="rounded py-6 bg-white min-w-[230px] text-black hover:text-white">
            <FaShoppingCart className="me-3 text-xl text-slate-500 " /> Add to
            cart
          </Button>
          <Button className="rounded py-6 bg-white min-w-[230px] text-black hover:text-white">
            <MdFavoriteBorder className="me-2 text-xl text-[#FF594D] " />
            Add to favourite
          </Button>
        </div>
      </div>
      <div className="my-3 mx-3">
        <h2 className="text-lg font-semibold text-gray-600">{data.Title}</h2>
        <p className="text-gray-400 text-sm">Ratings : {data.Ratings} </p>
        <div className="flex justify-between items-center my-1">
          <p className="text-sm">Price : ${data.Price}</p>
          <Button className=" bg-slate-600 border-slate-600 hover:bg-white hover:text-black border-2 rounded btn-xs ">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PopularProductCard;
