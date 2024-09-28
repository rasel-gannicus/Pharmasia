import { toast } from "react-toastify";

export const errorMessage = (msg : any) => {
  return toast.error(msg || "There was an error doing the operation !", {
    position: "bottom-center",
    autoClose:  2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export const successMessage = (msg : any) => {
  return toast.success(msg, {
    position: "bottom-center",
    autoClose:  2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};


