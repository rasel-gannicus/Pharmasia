import { ModalForDeleteConfirmation } from "@/utils/Modal/ModalForDeleteConfirmation";
import React, { useEffect, useState } from "react";
import userPic from "@/assets/img/user(1).png";
import adminPic from "@/assets/img/user(2).png";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUpdateUserRoleMutation } from "@/utils/Redux/features/user/userApi";
import { Badge } from "@/components/ui/badge";
import { toast as hotToast } from "react-hot-toast";
import { FaSackDollar } from "react-icons/fa6";

const UserRow = ({ props }: any) => {
  const { item, email, allOrders, allCartItems, allRatings } = props;
  //   console.log("🚀 ~ UserRow ~ item:", allOrders);
  const [modalStatus2, setModalStatus2] = useState(false);
  const [isAgree2, setIsAgree2] = useState(false);

  // --- dropdown menu for taking action as admin ('block','make admin', 'remove admin')
  const [selectMenu, setSelectMenu] = useState(item?.status || "");

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
        cart?.user?.email == item?.email &&
        cart?.status !== "deleted" &&
        cart?.quantity > 0
    ).length || 0;

  // --- showing wishlist quanity for each user
  let totalWishlistQuantity =
    allCartItems?.filter(
      (cart: any) => cart?.user?.email == item?.email && cart?.wishlist
    ).length || 0;

  const [updateUserRole, { data: updatedUserRole, isLoading }] =
    useUpdateUserRoleMutation();

  const handleUpdateUserRole = () => {
    setModalStatus2(true);
  };
  useEffect(() => {
    let toastId: any;
    if (isAgree2) {
      (async () => {
        try {
          // --- creating a loading toast notification for user role update
          toastId = hotToast.loading("Updating User...", {
            position: "bottom-center",
          });
          await updateUserRole({
            email: item?.email,
            updates: { role: selectMenu },
          }).unwrap();
          //   --- showing success notification after updating user role
          hotToast.success("User updated successfully!", {
            id: toastId,
          });
          setIsAgree2(false);
          setSelectMenu("");
        } catch (err) {
          //   --- showing success notification after updating user role
          hotToast.error("There was an error updating the user role", {
            id: toastId,
          });
        } finally {
          setIsAgree2(false);
        }
      })();
    }
  }, [isAgree2]);

  let conditionalButton = !selectMenu || item?.role.toLowerCase() == selectMenu; // -- making 'action' button disabled

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
          {item?.role != "blocked" && item?.role != "deleted" && (
            <Badge className="bg-teal-600" variant="default">
              Active
            </Badge>
          )}
          {(item?.role === "blocked" || item?.role === "deleted") && (
            <Badge variant="destructive">Inactive</Badge>
          )}
        </td>

        {/* --- dropdown menu for taking action as admin ('block','make admin', 'remove admin') */}
        <td className="p-4 text-center flex flex-col gap-2 justify-center items-center">
          {item?.email !== "admin@pharmasia.com" && (
            <>
              <Select value={selectMenu} onValueChange={setSelectMenu}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder={item?.status || "Take Action"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="deleted">Delete User</SelectItem>
                  <SelectItem value="blocked">Block User</SelectItem>
                  <SelectItem value="admin">Make Admin</SelectItem>
                  <SelectItem
                    disabled={
                      item?.role != "admin" ||
                      item?.email == "admin@pharmasia.com"
                    }
                    value="user"
                  >
                    Remove Admin
                  </SelectItem>
                  <SelectItem
                    disabled={
                      item?.role == "user" ||
                      item?.email == "admin@pharmasia.com"
                    }
                    value="user"
                  >
                    Make User
                  </SelectItem>
                </SelectContent>
              </Select>
              <div className=" flex gap-1 w-[150px]">
                <button
                  onClick={handleUpdateUserRole}
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
            </>
          )}
        </td>

        <td className="p-4 text-center ">{totalOrdersQuantity}</td>
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
          title: "Proceed the action ? ",
        }}
      />
    </>
  );
};

export default UserRow;
