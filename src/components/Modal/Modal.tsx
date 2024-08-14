import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { closeModal } from "@/utils/Redux/features/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "@/utils/Redux/hooks";
import auth from "@/utils/firebase.init";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import { toast } from "../ui/use-toast";
import { addUserToRedux } from "@/utils/Redux/features/user/userSlice";
import { errorMessage, successMessage } from "@/utils/Redux/toastMsg";

const Modal = () => {
  //   const [open, setOpen] = useState(true);
  const modalStatus = useAppSelector((state) => state.modalSlice.modalStatus);
  const dispatch = useAppDispatch();

  const [signOut, loading, error] = useSignOut(auth);


  //   -- closing modal and logging out
  const handleModalClose = async() => {
    dispatch(closeModal(false));
    const success = await signOut() ;
    if(success){
      dispatch(addUserToRedux({user : null}))
      successMessage('Logged out successfully !') ;
    }
  };

  useEffect(()=>{
    if(error){
      errorMessage(error?.message || 'An error happened while logging out !' )
    }

  },[loading, error])
  return (
    <Dialog open={modalStatus} onOpenChange={() => dispatch(closeModal(false))}>
      <DialogContent>
        <DialogHeader>
          {/* <DialogTitle>Modal Title</DialogTitle> */}
          {/* <DialogDescription>
            This is a description inside the modal.
          </DialogDescription> */}
        </DialogHeader>
        <p className="text-2xl font-semibold text-center my-5">
          Want to Log out ?
        </p>
        <div className="flex justify-center items-center gap-4">
          <Button className="bg-red-700" onClick={handleModalClose}>
            Logout
          </Button>
          <Button className="" onClick={() => dispatch(closeModal(false))}>
            Cancel
          </Button>
        </div>
        {/* <DialogClose asChild>
        </DialogClose> */}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
