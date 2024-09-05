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
    <Dialog open={modalStatus} onOpenChange={() => {}}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="pb-3">{title}</DialogTitle>
            <hr className="pt-5" />
          {/* --- modal body --- */}
          <div className="modal-description grid grid-cols-2 gap-3 my-14">
            <div className="">
              <img src={item.Images} alt="product image" />
            </div>
            <div className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold text-[#1C8674] ">{item.Title}</h2>
                <p>Your rating : </p>
            </div>
          </div>
        </DialogHeader>

        {/* <p className="text-2xl font-semibold text-center my-5">{title}</p> */}
        <div className="flex justify-center items-center gap-4">
          <Button
            className="bg-red-700 min-w-20"
            onClick={() => handleModalButton(false)}
          >
            No
          </Button>
          <Button
            className=" bg-[#1C8674] min-w-20 "
            onClick={() => handleModalButton(true)}
          >
            Yes
          </Button>
        </div>
        <DialogClose asChild>
          <button
            className="absolute w-6 h-6 flex justify-center items-center rounded-full text-white bg-slate-700 z-[500] hover:z-[500] top-2 right-2"
            onClick={handleModalClose}
          >
            <IoMdClose />
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};
