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

// export const showCnToast = (msg : any, isAction = false) => {
//   return toast({
//     title: msg,
//     action: isAction && (
//       <ToastAction
//         className="bg-blue-900 text-white hover:text-black"
//         onClick={() => router.push("/authentication/login")}
//         altText="Try again"
//       >
//         Login
//       </ToastAction>
//     ),
//   });
// };
