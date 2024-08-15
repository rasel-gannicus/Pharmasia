"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import React, { useEffect } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import {
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

import auth from "../../../utils/firebase.init";
import { errorMessage } from "@/utils/Redux/toastMsg";

const SocialLogin = () => {
  // sign up with 'google'
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  // sign up with 'google'
  const [signInWithGithub, gitUser, gitLoading, gitError] =
    useSignInWithGithub(auth);

  useEffect(() => {
    // console.log({ gitUser, gitLoading, gitError });
    if((!loading && !gitLoading) && (error || gitError)){
      console.log({error, gitError});
      errorMessage(gitError?.code || error?.code || 'An error happened')
    }
  }, [gitUser, gitLoading, gitError, user, loading, error]);

  return (
    <div>
      <p className="text-center font-semibold text-slate-500 my-4">
        Or Sign in with
      </p>
      <div className="flex justify-center items-center gap-4">
        <Button
          variant="outline"
          onClick={() => signInWithGithub()}
          className=""
        >
          <FaGithub className="font-bold mx-5 w-5 h-5" />
        </Button>
        {/* <Button variant="outline" className="">
          <FaFacebook className="font-bold mx-5 w-5 h-5" />
        </Button> */}
        <Button
          onClick={() => signInWithGoogle()}
          variant="outline"
          className=""
        >
          <FaGoogle className="font-bold mx-5 w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
