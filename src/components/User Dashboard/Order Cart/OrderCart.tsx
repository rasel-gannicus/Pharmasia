"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import SummaryCard from "./Order Summary/SummaryCard";
import {
  useGetProductCartQuery,
  useModifyCartMutation,
} from "@/utils/Redux/features/products/productsApi";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/utils/firebase.init";
import PrivateRoute from "@/utils/Route Protection/PrivateRoute";
import { ThreeCircles } from "react-loader-spinner";
import { useCart } from "@/utils/Hooks/useCart";
import { ModalConfirmation } from "@/utils/Modal/ModalConfirmation";
import CheckoutPage from "./Checkout Page/CheckoutPage";
import { FaRegTrashCan } from "react-icons/fa6";
import { ModalForDeleteConfirmation } from "@/utils/Modal/ModalForDeleteConfirmation";

const OrderCart = () => {
  const [user, loading, error] = useAuthState(auth); //-- getting user info from firebase
  const [modalStatus, setModalStatus] = useState(false); //-- activating modal
  const [isAgree, setIsAgree] = useState(false); //-- activating modal

  const [modalStatus2, setModalStatus2] = useState(false); //-- activating modal
  const [isAgree2, setIsAgree2] = useState(false); //--- deleting checked items

  let { data, isLoading, isError, isSuccess }: any = useGetProductCartQuery(
    user?.email
  ); //-- getting the cart for every individual user

  // --- checking how many items are in cart
  let cart: any = useCart(user?.email, true);

  // --- 'Check all' button functionality
  const [checkAll, setCheckAll] = useState(false);

  const [checkedItems, setCheckedItems] = useState<any[]>([]); // Track checked items
  const [totalPrice, setTotalPrice] = useState(0); // Track total price

  // --- handling checked all items if user click 'Check All'
  useEffect(() => {
    const checkboxes = document.querySelectorAll(".cart-checkbox");
    checkboxes.forEach((checkbox: any) => {
      checkbox.checked = checkAll;
    });

    if (checkAll) {
      const updatedCheckedItems =
        data?.cart?.filter((item: any) => item.quantity > 0) || [];
      setCheckedItems(updatedCheckedItems);
      const price = updatedCheckedItems.reduce(
        (acc: any, item: any) => acc + item.quantity * item.Price,
        0
      );
      setTotalPrice(price);
    } else {
      setCheckedItems([]);
      setTotalPrice(0);
    }
  }, [checkAll]);

  // --- handling single item check
  const handleItemCheck = (item: any, isChecked: boolean) => {
    let updatedItems;
    if (isChecked) {
      let isExists = checkedItems.find((index) => index._id == item.data._id);
      if (isExists) {
        // console.log(item.data);
        updatedItems = checkedItems.filter((i) => i._id !== item.data._id);
        // const latestItemsFromDb = data.cart.find((i : any) => i._id == item.data._id) ;
        // console.log(latestItemsFromDb);
        updatedItems = [...updatedItems, item.data];
      } else {
        updatedItems = [...checkedItems, item.data];
      }
    } else {
      updatedItems = checkedItems.filter((i) => i._id !== item.data._id);
    }
    // console.log(updatedItems);
    setCheckedItems(updatedItems);
    const price = updatedItems.reduce(
      (acc, item) => acc + item.Price * item.quantity,
      0
    );
    setTotalPrice(price);
  };

  // --- using this function to 'Delete, Increase, Decrease' a product from Cart
  const [
    modifyCart,
    {
      data: modifiedData,
      isLoading: loadingForDelete,
      isError: isErrorForDelete,
      isSuccess: isSuccessForDelete,
      isError: errorForDelete,
    },
  ]: any = useModifyCartMutation();

  const [deleteMessage, setDeleteMessage] = useState("");
  // --- deleting checked items
  useEffect(() => {
    if (modalStatus2) {
      if (checkedItems.length == 1) {
        setDeleteMessage("Delete 1 item ?");
      } else if (checkedItems.length > 1) {
        setDeleteMessage(`Delete all ${checkedItems.length} items ?`);
      } else {
        setDeleteMessage("Delete items ?");
      }
    }
    if (isAgree2) {
      modifyCart({
        data: checkedItems,
        modifyType: "delete",
        email: user?.email,
      });
    }
  }, [isAgree2, modalStatus2]);

  return !isAgree ? (
    <div className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 min-h-[90vh] ">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Order Inventory</h1>
      </div>

      {/* --- check box for all items  --- */}
      <div className=" grid grid-cols-3">
        <div className="col-span-2 flex justify-between items-center ">
          <label draggable className="shrink-0  p-2 rounded-md cursor-pointer">
            <input
              type="checkbox"
              className="mt-2 w-3 h-3 me-5 cursor-pointer border-b-2 border-gray-300 "
              checked={checkAll}
              onChange={() => setCheckAll(!checkAll)}
            />
            <span
              className={` ${
                !checkAll ? "text-gray-400" : "font-bold text-black"
              }`}
            >
              {checkAll ? "All checked" : "Check all"}
            </span>
          </label>

          {/* --- Remove all button --- */}
          {checkAll && (
            <button
              onClick={() => setModalStatus2(true)}
              className="flex border-2 px-2 py-1 rounded border-red-500 font-bold text-red-500 hover:bg-red-600 hover:text-white duration-200 justify-center items-center gap-2"
            >
              <FaRegTrashCan /> Remove
            </button>
          )}
        </div>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm px-3"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="max-w-5xl max-md:max-w-xl mx-auto bg-white py-4">
          <div className="grid md:grid-cols-3 gap-8 ">
            <div className="md:col-span-2 space-y-4">
              {/* --- Checkbox card --- */}
              {cart?.length > 0 ? (
                cart.map((index: any) => (
                  <Card
                    key={index._id}
                    data={index}
                    email={user?.email}
                    checkAll={checkAll}
                    handleItemCheck={handleItemCheck} // Pass handleItemCheck to each Card
                  />
                ))
              ) : (
                <p className="text-center text-gray-400">Your cart is empty</p>
              )}
              {isLoading && (
                <div className="min-h-screen flex justify-center items-center">
                  <div className="">
                    <ThreeCircles
                      visible={true}
                      height="100"
                      width="100"
                      color="#9FC4DA"
                      ariaLabel="three-circles-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  </div>
                </div>
              )}
            </div>

            {/* --- order summary card --- */}
            <SummaryCard
              totalPrice={totalPrice}
              setModalStatus={setModalStatus}
            />
          </div>
        </div>
      </div>
      <ModalConfirmation
        props={{
          modalStatus,
          setModalStatus,
          title: "Proceed to Checkout ? ",
          isAgree,
          setIsAgree,
        }}
      />
      <ModalForDeleteConfirmation
        props={{
          modalStatus2,
          setModalStatus2,
          title: deleteMessage,
          isAgree2,
          setIsAgree2,
        }}
      />
    </div>
  ) : (
    <CheckoutPage props={{ checkedItems, email: user?.email }} />
  );
};

export default PrivateRoute(OrderCart);
