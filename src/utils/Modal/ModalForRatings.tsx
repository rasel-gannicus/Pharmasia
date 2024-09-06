import { Textarea } from "@/components/ui/textarea";
import { closeModal } from "@/utils/Redux/features/modal/modalSlice";
import { useAppDispatch } from "@/utils/Redux/hooks";
import { useEffect, useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useAddRatingsMutation, useModifyOrdersMutation } from "../Redux/features/products/productsApi";
import { errorMessage, successMessage } from "../Redux/toastMsg";

export const ModalforRatings = ({ props }: any) => {
  const { modalStatus, setModalStatus, item, email , modifyOrders } = props;
  const dispatch = useAppDispatch();

  // State to keep track of the user's rating and the current hover position
  const [hoveredStar, setHoveredStar] = useState<number>(0);
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>("");

  // Function to close the modal
  const handleModalClose = () => {
    dispatch(closeModal(false));
    setModalStatus(false);
  };

  // Array to represent the number of stars (5 stars in this case)
  const stars = [1, 2, 3, 4, 5];

  const [addRating, { data, isLoading, isError, error }] =
    useAddRatingsMutation();

  // const [modifyOrders] = useModifyOrdersMutation() ; 

  const handleRatings = () => {
    if (!rating) {
      return errorMessage("You have not given any rating !");
    }
    addRating({ data: item, email, rating, review });
  };


  useEffect(() => {
    if (data) {
      successMessage("You have successfully rated !");
      handleModalClose();
      modifyOrders({
        data: item,
        modifyType: "reviewed",
        email,
      });
    }
  }, [isLoading, data]);

  return (
    modalStatus && (
      <div className="bg-[rgba(0,0,0,0.28)] fixed top-0 left-0 bottom-0 right-0 z-50">
        <div className="bg-white min-w-[350px] lg:min-w-[500px]  fixed left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] rounded-lg p-6 shadow-lg pt-0">
          <div className="relative">
            <div className="w-full   flex justify-center items-center bg-slate-200 rounded-lg ">
              <div className="w-48 h-48 bg-white rounded-full overflow-hidden shadow-lg p-5 absolute -top-[50%] translate-y-[50%] ">
                <img
                  src={item?.Images}
                  alt={item?.Title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="overflow-y-auto">
              <div className="mt-24 text-center">
                <h2 className="text-xl font-bold text-slate-500">
                  Your Ratings
                </h2>
                <div className="text-slate-400 text-3xl flex justify-center items-center gap-2 mt-3">
                  {/* Map through the stars array */}
                  {stars.map((star) => (
                    <button
                      key={star}
                      onMouseEnter={() => setHoveredStar(star)} // Highlight stars on hover
                      onMouseLeave={() => setHoveredStar(0)} // Reset highlight on mouse leave
                      onClick={() => setRating(star)} // Set the rating on click
                    >
                      {rating >= star || hoveredStar >= star ? (
                        <FaStar className="text-[#F8D001]" />
                      ) : (
                        <FaRegStar />
                      )}
                    </button>
                  ))}
                </div>
                <div className="my-5">
                  <h2 className="text-slate-400 mt-10 mb-4 font-semibold">
                    Share your experience :{" "}
                  </h2>
                  <Textarea
                    className="text-center"
                    rows={5}
                    onChange={(e) => setReview(e.target.value)}
                    value={review}
                    placeholder="Say something about the product"
                  />
                </div>
              </div>

              <div className="flex justify-center items-center mt-6">
                <button
                  className={`${
                    isLoading ? "bg-blue-400" : "bg-blue-500"
                  } text-white px-6 py-2 rounded-md mr-4`}
                  onClick={() => {
                    handleRatings();
                  }}
                  disabled={isLoading}
                >
                  {isLoading ? "Rating..." : "Submit"}
                </button>
                <button
                  className="bg-gray-400 text-white px-6 py-2 rounded-md"
                  onClick={() => handleModalClose()}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
