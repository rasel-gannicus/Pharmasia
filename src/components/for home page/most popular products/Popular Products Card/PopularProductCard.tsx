"use client";
import { Button } from "@/components/ui/button";
import { TCloths } from "@/types/types";
import Link from "next/link";
import CardOverlay from "@/utils/Card Overlay/CardOverlay";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/utils/firebase.init";

const PopularProductCard = ({ data }: { data: TCloths }) => {
  const [user] = useAuthState(auth);

  return (
    <div className="md:max-w-80 w-[95%] mx-auto hover:shadow-lg group duration-300 rounded-lg py-2">
      <div className="rounded overflow-hidden relative ">
        <img src={data.Images} alt="" />

        {/* --- card overlay with animation --- */}
        <CardOverlay data={data} />
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
