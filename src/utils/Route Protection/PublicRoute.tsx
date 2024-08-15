"use client";
import { FC, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../firebase.init"; // Adjust the path to your firebase initialization file
import { useRouter } from "next/navigation";
import { ThreeCircles } from "react-loader-spinner";
import { successMessage } from "../Redux/toastMsg";
import { useAddUserDataMutation } from "../Redux/features/user/userApi";

const PublicRoute = (WrappedComponent: FC) => {
  return function ProtectComponent(props: any) {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    const router = useRouter();

    const [addUserToMongoDb, { data, isLoading, isError, isSuccess }] =
      useAddUserDataMutation();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setAuthenticated(true);
          router.replace("/"); // Redirect to the homepage
          // console.log(user);
          successMessage(`Welcome ${user.displayName}`);
          addUserToMongoDb({ email: user.email });
        } else {
          setAuthenticated(false);
        }
        setLoading(false);
      });

      return () => unsubscribe();
    }, [router]);

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
