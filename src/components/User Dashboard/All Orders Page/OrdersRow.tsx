import { Button } from "@/components/ui/button";
import RatingsDiv from "@/utils/Ratings/RatingsDiv";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdReviews } from "react-icons/md";

const OrdersRow = ({ props }: any) => {
  const { item } = props;
  // console.log(item);
  let status;
  if (item.status == "newOrder") {
    status = "Pending";
  }
  let actionButton = null;

  if (item.status == "newOrder") {
    actionButton = (
      <td className=" text-center">
        <button title="Delete">
          <FaRegTrashAlt className="text-lg text-red-500" />
        </button>
      </td>
    );
  } else if (item.status.toLowerCase() == "packaged") {
    actionButton = (
      <td className=" text-center">
        <button title="Delete" disabled>
          <FaRegTrashAlt className="text-lg text-slate-500" />
        </button>
      </td>
    );
  } else if (
    item.status.toLowerCase() == "shipping" ||
    item.status.toLowerCase() == "shipped"
  ) {
    actionButton = (
      <td className=" text-center">
        <button title="Delete" disabled>
          <FaRegTrashAlt className="text-lg text-slate-500" />
        </button>
      </td>
    );
  }else if (item.status.toLowerCase() == "delivered") {
    actionButton = (
      <td className=" text-center">
        <Button title="Delete" className="flex mx-auto text-sm bg-yellow-300  text-black justify-center items-center gap-2 h-9 px-3 rounded hover:text-white ">
          Review
          <MdReviews className="" />
        </Button>
      </td>
    );
  }
  return (
    <tr className="odd:bg-blue-50 ">
      <td className="px-4 py-2 text-sm">
        <div className="flex items-center cursor-pointer w-max">
          <img
            src={item.Images || "https://readymadeui.com/profile_4.webp"}
            className="w-14 h-14 rounded-full shrink-0"
          />
          <div className="ml-4">
            <p className="text-sm text-black">{item.Title}</p>
            <p className="text-xs text-gray-500 mt-0.5">
              Quantity : {item.quantity || 0}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
              Price/Unit : $ {item.Price || 0}
            </p>
          </div>
        </div>
      </td>
      <td className="p-4 text-sm text-black uppercase ">
        {status || item.status}
      </td>
      <td className="p-4 text-sm text-black">
        $ {item.quantity * item.Price || 0}
      </td>
      <td className="p-4">
        <RatingsDiv ratings={item.ratings} />
      </td>
      {actionButton}
    </tr>
  );
};

export default OrdersRow;
