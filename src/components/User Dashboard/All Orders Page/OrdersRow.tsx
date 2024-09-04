import { Button } from "@/components/ui/button";
import { ModalForDeleteConfirmation } from "@/utils/Modal/ModalForDeleteConfirmation";
import RatingsDiv from "@/utils/Ratings/RatingsDiv";
import { useModifyOrdersMutation } from "@/utils/Redux/features/products/productsApi";
import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { TailSpin } from "react-loader-spinner";

const OrdersRow = ({ props }: any) => {
  const { item, email } = props;
  const [modalStatus2, setModalStatus2] = useState(false);
  const [isAgree2, setIsAgree2] = useState(false);

  // --- showing order status in table
  let status;
  if (item.status == "newOrder") {
    status = "Pending";
  }
  let actionButton = null;

  if (item.status == "newOrder") {
    actionButton = (
      <td className=" text-center">
        <button onClick={() => setModalStatus2(true)} title="Delete">
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
  } else if (item.status.toLowerCase() == "delivered") {
    actionButton = (
      <td className=" text-center">
        <Button
          title="Delete"
          className="flex mx-auto text-sm bg-yellow-300  text-black justify-center items-center gap-2 h-9 px-3 rounded hover:text-white "
        >
          Review
          <MdReviews className="" />
        </Button>
      </td>
    );
  } else if (item.status.toLowerCase() == "cancelled" || item?.isCancelled) {
    actionButton = (
      <td className=" text-center">
        <p className="text-sm text-gray-300">Order Cancelled</p>
      </td>
    );
  }

  const [modifyOrders, { data, isLoading, isError }] =
    useModifyOrdersMutation();

  useEffect(() => {
    if (isAgree2) {
      // --- deleting checked items from cart
      modifyOrders({
        data: item,
        modifyType: "cancel",
        email,
      });
    }
    setIsAgree2(false) ;
  }, [isAgree2, modalStatus2, isLoading, data]);


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
      <td
        className={`p-4 text-sm text-black uppercase ${
          item.isCancelled && "text-red-600 font-semibold"
        }`}
      >
        {status || item.status}
      </td>
      <td className="p-4 text-sm text-black">
        $ {item.quantity * item.Price || 0}
      </td>
      <td className="p-4">
        <RatingsDiv ratings={item.ratings} />
      </td>
      {isLoading ? (
        <td className="w-full flex justify-center items-center">
          <TailSpin
            visible={true}
            height="50"
            width="50"
            color="#1C8674"
            ariaLabel="tail-spin-loading"
            radius="4"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </td>
      ) : (
        actionButton
      )}
      <ModalForDeleteConfirmation
        props={{
          modalStatus2,
          setModalStatus2,
          setIsAgree2,
          title: "Do you want to cancel the order ? ",
        }}
      />
    </tr>
  );
};

export default OrdersRow;
