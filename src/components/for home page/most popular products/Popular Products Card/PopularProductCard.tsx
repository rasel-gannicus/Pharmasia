import { Button } from "@/components/ui/button";
import { TCloths } from "@/types/types";
import Link from "next/link";

const PopularProductCard = ({ data }: { data: TCloths }) => {
  return (
    <div className="md:max-w-80 w-[95%] mx-auto hover:shadow-lg rounded-lg py-5">
      <div className="rounded overflow-hidden">
        <Link  href={`/singleProduct/${data._id}`}>
          <img src={data.Images} alt="" />
        </Link>
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
