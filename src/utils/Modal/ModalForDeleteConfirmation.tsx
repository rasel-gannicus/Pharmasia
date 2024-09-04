import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";
import { closeModal } from "@/utils/Redux/features/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "@/utils/Redux/hooks";

export const ModalForDeleteConfirmation = ({ props }: any) => {
  const { modalStatus2, setModalStatus2, title, setIsAgree2 } = props;
  //   const [open, setOpen] = useState(true);
  const dispatch = useAppDispatch();

  //   -- closing modal and logging out
  const handleModalClose = () => {
    dispatch(closeModal(false));
    setModalStatus2(false);
    setIsAgree2(false);
  };

  const handleModalButton = (tryMe: boolean) => {
    setModalStatus2(false);
    setIsAgree2(tryMe);
  };

  return (
    <Dialog open={modalStatus2} onOpenChange={() => {}}>
      <DialogContent>
        <DialogHeader>
          {/* <DialogTitle>Modal Title</DialogTitle> */}
          {/* <DialogDescription>
            This is a description inside the modal.
          </DialogDescription> */}
        </DialogHeader>
        <p className="text-2xl font-semibold text-center my-5">{title}</p>
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
            &times;
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};
