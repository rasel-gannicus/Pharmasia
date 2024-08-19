"use client";
import { FC, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../firebase.init";
import { useRouter } from "next/navigation";
import { ThreeCircles } from "react-loader-spinner";
import { errorMessage } from "../Redux/toastMsg";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

const PrivateRoute = (WrappedComponent: any) => {
  return function ProtectComponent(props: any) {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setAuthenticated(true);
        } else {
          toast({
            title: "You need to login first !"
          });
          router.push("/authentication/login");
        }
        setLoading(false);
      });

      return () => unsubscribe();
    }, [router]);

    if (loading) {
      return (
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
      );
    }

    return authenticated ? <WrappedComponent {...props} /> : null;
  };
};

export default PrivateRoute;
