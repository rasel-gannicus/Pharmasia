"use client";
import { FC, use, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../firebase.init"; // Adjust the path to your firebase initialization file
import { useRouter } from "next/navigation";
import { ThreeCircles } from "react-loader-spinner";
import { successMessage } from "../Redux/toastMsg";
import { useAddUserDataMutation } from "../Redux/features/user/userApi";
import { toast } from "react-hot-toast";

const PublicRoute = (WrappedComponent: FC) => {
  return function ProtectComponent(props: any) {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    const router = useRouter();

    const [addUserToMongoDb, { data, isLoading, isError, isSuccess }] =
      useAddUserDataMutation();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user?.email != null || undefined || "") {
          setAuthenticated(true);
          router.replace("/"); // Redirect to the homepage
          // toast.success(`Welcome ${user?.displayName || 'User'} !`);
          addUserToMongoDb({ email: user?.email, userInfo: user });
        } else {
          setAuthenticated(false);
        }
        setLoading(false);
      });

      return () => unsubscribe();
    }, [router, data, isLoading, isError, isSuccess]);


    if (loading) {
      return (
        <div className="loader-in-middle">
          <div>
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

    return !authenticated ? <WrappedComponent {...props} /> : null;
  };
};

export default PublicRoute;
