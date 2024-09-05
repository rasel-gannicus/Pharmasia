import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { closeModal } from "@/utils/Redux/features/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "@/utils/Redux/hooks";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";

export const ModalforRatings = ({ props }: any) => {
  const { modalStatus, setModalStatus, title, setIsAgree, item } = props;
  //   const [open, setOpen] = useState(true);
  const dispatch = useAppDispatch();

  //   -- closing modal and logging out
  const handleModalClose = () => {
    dispatch(closeModal(false));
    setModalStatus(false);
    // setIsAgree(false);
  };

  const handleModalButton = (tryMe: boolean) => {
    setModalStatus(false);
    // setIsAgree(tryMe);
  };

  return (
    <div className="bg-[rgba(0,0,0,0.28)] fixed top-0 left-0 bottom-0 right-0 ">
      <div className="bg-white min-w-[300px] min-h-[400px] absolute left-[50%] -translate-x-[50%] -top-40% translate-y-[40%] rounded-lg ">
        <div className=" relative bg-green-400 w-full h-full">
          <div className="w-[200px] h-[200px] bg-white rounded-full overflow-hidden absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] shadow-lg p-5">
            <img src={item?.Images} alt="" />
          </div>
        </div>

        <div className="mt-[130px] text-center">
          <h2 className="text-xl font-bold text-slate-500">Your Ratings </h2>
        </div>
      </div>
    </div>
  );
};
