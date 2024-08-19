import { useModifyCartMutation } from "@/utils/Redux/features/products/productsApi";
import { errorMessage } from "@/utils/Redux/toastMsg";
import React, { useEffect } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
<FaPlus />;

const Card = (data: any) => {
  const [
    modifyCart,
    { data: modifiedData, isLoading, isError, isSuccess, error },
  ]: any = useModifyCartMutation();

  const { _id, Images, Ratings, Title, quantity, Price, status } = data.data;
console.log(quantity);
  const handleModify = (type: string) => {
    modifyCart({ ...data, modifyType: type, email: data.email });
  };
  useEffect(() => {
    if (isError && error) {
      errorMessage(error?.data?.error);
    }
  }, [isError, modifiedData, isLoading, isError]);
  return (
    quantity > 0 && <div>
    <div className="grid grid-cols-3 items-start gap-4">
      <div className="col-span-2 flex items-start gap-4">
        <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
          <img src={Images} alt="" className="w-full h-full object-contain" />
        </div>

        <div className="flex flex-col">
          <h3 className="text-base font-bold text-gray-800">{Title}</h3>
          <p className="text-xs font-semibold text-gray-500 mt-0.5">
            Size: MD
          </p>

          <button
            onClick={() => handleModify("delete")}
            type="button"
            disabled={isLoading}
            className="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-current inline"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                data-original="#000000"
              ></path>
              <path
                d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                data-original="#000000"
              ></path>
            </svg>
            REMOVE
          </button>
        </div>
      </div>

      <div className="ml-auto">
        <h4 className="text-lg max-sm:text-base font-bold text-gray-800">
          ${Price}
        </h4>

        {/* --- increase decrease button --- */}
        <div className="mt-6 flex items-center px-3 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
          {isLoading ? (
            "loading ... "
          ) : (
            <>
              <button
                onClick={() => handleModify("decrease")}
                className="hover:text-red-500"
              >
                <FaMinus />
              </button>

              <span className="mx-3 font-bold">{quantity}</span>

              <button
                onClick={() => handleModify("increase")}
                className="hover:text-blue-500"
              >
                <FaPlus />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
    <hr className="border-gray-300 my-3" />
  </div>
  );
};

export default Card;
