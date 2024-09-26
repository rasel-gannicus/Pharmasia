import { Button } from "@/components/ui/button";
import { ModalForDeleteConfirmation } from "@/utils/Modal/ModalForDeleteConfirmation";
import { ModalforRatings } from "@/utils/Modal/ModalForRatings";
import RatingsDiv from "@/utils/Ratings/RatingsDiv";
import { useModifyOrdersMutation } from "@/utils/Redux/features/products/productsApi";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import profilePhoto from "@/assets/img/profile.png";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { TailSpin } from "react-loader-spinner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useModifyNotificationsMutation } from "@/utils/Redux/features/user/userApi";

const OrdersRow = ({ props }: any) => {
  const { item, email } = props;
  const [modalStatus2, setModalStatus2] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);
  const [isAgree2, setIsAgree2] = useState(false);

  // --- showing order status in table
  let status;
  if (item.status == "newOrder") {
    status = "Pending";
  }

  // --- dropdown menu for taking action as admin ('pending','shipping', 'delivered') for each order
  const [selectMenu, setSelectMenu] = useState(item?.status || "");

  //   --- making notifications
  const [
    modifyNotifications,
    { data: modifiedNotifications, isLoading: notificationLoading },
  ] = useModifyNotificationsMutation();

  const handleNotifications = (status: string) => {
    modifyNotifications({
      email: item?.user?.email,
      modifyType: status,
      productImg : item.Images,
      productTitle : item.Title 
    });
  };

  // --- making changes for order status from the admin dashboard
  let [modifyOrders, { data, isLoading, isError }] = useModifyOrdersMutation();

  useEffect(() => {
    if (isAgree2) {
      modifyOrders({
        data: item,
        modifyType: selectMenu,
        email: item?.user?.email,
      });
    }
    setIsAgree2(false);
  }, [isAgree2, modalStatus2, isLoading, data]);

  useEffect(() => {
    // --- making new notification for particular user if the order status changes for that user
    if (data) {
      handleNotifications(selectMenu);
    }
  }, [data]);

  let conditionalButton = !selectMenu || item?.status == selectMenu; // -- making 'order status action' button disabled

  return (
    <tr className="odd:bg-blue-50 ">
      <td className={`p-4 text-sm text-black `}>
        <div className="flex justify-start gap-2 items-center">
          <div className="rounded-full overflow-hidden">
            <Image
              src={item?.user?.photoURL || profilePhoto}
              alt="user image"
              width={50}
              height={50}
            />
          </div>
          <div className="text-gray-400">
            <p className="text-gray-600">{item?.user?.displayName}</p>
            <p>{item?.user?.email}</p>
          </div>
        </div>
      </td>
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
        {isLoading ? (
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
        ) : (
          status || item.status
        )}
      </td>
      <td className="p-4 text-sm text-black">
        $ {item.quantity * item.Price || 0}
      </td>
      <td className="p-4 flex flex-col gap-2 justify-center items-center">
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
          <Select value={selectMenu} onValueChange={setSelectMenu}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder={item?.status || "Action"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newOrder">Pending</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="packaged">Packaged</SelectItem>
              <SelectItem value="shipping">Shipping</SelectItem>
              <SelectItem value="shipped">Shipped</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
              <SelectItem value="cancelled">Cancel</SelectItem>
            </SelectContent>
          </Select>
        )}
        <div className=" flex gap-1 w-[150px]">
          <button
            onClick={() => setModalStatus2(true)}
            disabled={conditionalButton}
            className={` text-xs px-2 w-full py-1 rounded ${
              !conditionalButton
                ? "bg-green-400 text-gray-600"
                : "bg-gray-300 text-gray-400"
            }`}
          >
            Ok
          </button>
          <button
            disabled={conditionalButton}
            onClick={() => setSelectMenu("")}
            className={`text-xs px-2 w-full py-1 rounded ${
              !conditionalButton
                ? "bg-yellow-400 text-gray-600"
                : "bg-gray-300 text-gray-400"
            }`}
          >
            Cancel
          </button>
        </div>
      </td>

      <ModalForDeleteConfirmation
        props={{
          modalStatus2,
          setModalStatus2,
          setIsAgree2,
          title: "Proceed the action ? ",
        }}
      />
    </tr>
  );
};

export default OrdersRow;
