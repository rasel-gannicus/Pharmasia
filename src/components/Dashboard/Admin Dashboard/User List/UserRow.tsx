import { Button } from "@/components/ui/button";
import { ModalForDeleteConfirmation } from "@/utils/Modal/ModalForDeleteConfirmation";
import { ModalforRatings } from "@/utils/Modal/ModalForRatings";
import RatingsDiv from "@/utils/Ratings/RatingsDiv";
import { useModifyOrdersMutation } from "@/utils/Redux/features/products/productsApi";
import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { TailSpin } from "react-loader-spinner";
import userPic from "@/assets/img/user(1).png";
import adminPic from "@/assets/img/user(2).png";
import Image from "next/image";

// --- button for user action like 'cancel order', 'delete order', 'rate order'
// const userActionButtonOrderInventory = (
//   item: any,
//   setModalStatus2: any,
//   setModalStatus: any
// ) => {
//   let actionButton = null;
//   if (item.status == "newOrder") {
//     return (actionButton = (
//       <td className=" text-center">
//         <button onClick={() => setModalStatus2(true)} title="Delete">
//           <FaRegTrashAlt className="text-lg text-red-500" />
//         </button>
//       </td>
//     ));
//   } else if (item.status.toLowerCase() == "packaged") {
//     return (actionButton = (
//       <td className=" text-center">
//         <button title="Delete" disabled>
//           <FaRegTrashAlt className="text-lg text-slate-500" />
//         </button>
//       </td>
//     ));
//   } else if (
//     item.status.toLowerCase() == "shipping" ||
//     item.status.toLowerCase() == "shipped"
//   ) {
//     return (actionButton = (
//       <td className=" text-center">
//         <button title="Delete" disabled>
//           <FaRegTrashAlt className="text-lg text-slate-500" />
//         </button>
//       </td>
//     ));
//   } else if (item.status.toLowerCase() == "delivered") {
//     return (actionButton = (
//       <td className=" text-center">
//         <Button
//           onClick={() => setModalStatus(true)}
//           title="Delete"
//           className="flex mx-auto text-sm bg-yellow-300  text-black justify-center items-center gap-2 h-9 px-3 rounded hover:text-white "
//         >
//           Review
//           <MdReviews className="" />
//         </Button>
//       </td>
//     ));
//   } else if (item.status.toLowerCase() == "cancelled" || item?.isCancelled) {
//     return (actionButton = (
//       <td className=" text-center">
//         <p className="text-sm text-gray-300">Order Cancelled</p>
//       </td>
//     ));
//   }else if (item.status.toLowerCase() == "reviewed") {
//     return (actionButton = (
//       <td className=" text-center">
//         <Button
//           onClick={() => setModalStatus(true)}
//           disabled
//           // title="Delete"
//           className="flex mx-auto text-sm bg-green-600  text-white justify-center items-center gap-2 h-9 px-3 rounded hover:text-white "
//         >
//           Rated
//           <MdReviews className="" />
//         </Button>
//       </td>
//     ));
//   }
// };

const UserRow = ({ props }: any) => {
  const { item, email, allOrders, allCartItems, allRatings } = props;
  //   console.log("🚀 ~ UserRow ~ item:", allOrders);
  const [modalStatus2, setModalStatus2] = useState(false);
  const [isAgree2, setIsAgree2] = useState(false);

  //   --- total order for each user
  let totalOrdersPerUser = allOrders?.filter(
    (order: any) => order?.user?.email == item?.email
  );

  //   --- showing order quanity for each user
  let totalOrdersQuantity = totalOrdersPerUser?.length || 0;

  //   --- showing pending order quanity for each user
  const pendingOrdersPerUser =
    totalOrdersPerUser?.filter((order: any) =>
      ["newOrder", "pending"].includes(order?.status)
    ).length || 0;

  //   --- showing pending order quanity for each user
  const onProcessingOrdersPerUser =
    totalOrdersPerUser?.filter((order: any) =>
      ["processing"].includes(order?.status)
    ).length || 0;

  //   --- showing packaged order quanity for each user
  const packagedOrdersPerUser =
    totalOrdersPerUser?.filter((order: any) =>
      ["packaged"].includes(order?.status)
    ).length || 0;

  // --- showing shipping order quanity for each user
  const shippingOrdersPerUser =
    totalOrdersPerUser?.filter((order: any) =>
      ["shipping"].includes(order?.status)
    ).length || 0;

  // --- showing shipped order quanity for each user
  const shippedOrdersPerUser =
    totalOrdersPerUser?.filter((order: any) =>
      ["shipped"].includes(order?.status)
    ).length || 0;

  // --- showing delivered order quanity for each user
  const deliveredOrdersPerUser =
    totalOrdersPerUser?.filter((order: any) =>
      ["delivered"].includes(order?.status)
    ).length || 0;

  // --- showing reviewed order quanity for each user
  const reviewedOrdersPerUser =
    totalOrdersPerUser?.filter((order: any) =>
      ["rated", "reviewed"].includes(order?.status)
    ).length || 0;

  // --- showing cart quanity for each user
  let totalCartQuantity =
    allCartItems?.filter(
      (cart: any) =>
        cart?.user?.email == item?.email && cart?.status !== "deleted"  && cart?.quantity > 0 
    ).length || 0;

  // --- showing wishlist quanity for each user
  let totalWishlistQuantity =
    allCartItems?.filter(
      (cart: any) =>
        cart?.user?.email == item?.email && cart?.wishlist
    ).length || 0;

  return (
    <>
      <tr
        className={` ${
          item.role === "admin" ? "bg-red-100" : "odd:bg-blue-50 "
        }`}
      >
        <td className="px-4 py-2 text-sm">
          <div className="flex items-center cursor-pointer w-max">
            <Image
              src={
                item?.userInfo?.photoURL ||
                (item.role === "admin" ? adminPic : userPic)
              }
              alt="user image"
              width={56}
              height={56}
              className="w-14 h-14 rounded-full"
            />
            <div className="ml-4">
              <p className="text-sm text-black">{item.email}</p>
              <p className="text-xs text-gray-500 mt-0.5">
                Name : {item?.userInfo?.displayName || "N/A"}
              </p>
            </div>
          </div>
        </td>
        <td className={`p-4 text-sm text-center text-black `}>{item?.role}</td>
        <td className="p-4 text-sm text-center text-black">
          {item?.role != "blocked" && "Active"}
        </td>
        <td className="p-4 text-center">{totalOrdersQuantity}</td>
        <td className="p-4 text-center">{pendingOrdersPerUser}</td>
        <td className="p-4 text-center">{onProcessingOrdersPerUser}</td>
        <td className="p-4 text-center">{packagedOrdersPerUser}</td>
        <td className="p-4 text-center">{shippingOrdersPerUser}</td>
        <td className="p-4 text-center">{shippedOrdersPerUser}</td>
        <td className="p-4 text-center">{deliveredOrdersPerUser}</td>
        <td className="p-4 text-center">{reviewedOrdersPerUser}</td>
        <td className="p-4 text-center">{totalCartQuantity}</td>
        <td className="p-4 text-center">{totalWishlistQuantity}</td>
      </tr>

      <ModalForDeleteConfirmation
        props={{
          modalStatus2,
          setModalStatus2,
          setIsAgree2,
          title: "Do you want to cancel the order ? ",
        }}
      />
    </>
  );
};

export default UserRow;

{
  /* {isLoading ? (
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
      )} */
}
