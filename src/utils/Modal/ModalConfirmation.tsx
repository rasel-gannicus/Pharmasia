import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { closeModal } from "@/utils/Redux/features/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "@/utils/Redux/hooks";

export const ModalConfirmation = ({ props }: any) => {
  const { modalStatus, setModalStatus, title } = props;
  //   const [open, setOpen] = useState(true);
  const dispatch = useAppDispatch();

  //   -- closing modal and logging out
  const handleModalClose = async () => {
    dispatch(closeModal(false));
  };

  return (
    <Dialog open={modalStatus} onOpenChange={() => setModalStatus(false)}>
      <DialogContent>
        <DialogHeader>
          {/* <DialogTitle>Modal Title</DialogTitle> */}
          {/* <DialogDescription>
            This is a description inside the modal.
          </DialogDescription> */}
        </DialogHeader>
        <p className="text-2xl font-semibold text-center my-5">{title}</p>
        <div className="flex justify-center items-center gap-4">
          <Button className="bg-red-700 min-w-20" onClick={handleModalClose}>
            No
          </Button>
          <Button
            className=" bg-[#1C8674] min-w-20 "
            onClick={() => setModalStatus(false)}
          >
            Yes
          </Button>
        </div>
        {/* <DialogClose asChild>
        </DialogClose> */}
      </DialogContent>
    </Dialog>
  );
};
