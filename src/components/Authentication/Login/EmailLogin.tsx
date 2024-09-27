"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAddUserDataMutation } from "@/utils/Redux/features/user/userApi";
import { errorMessage, successMessage } from "@/utils/Redux/toastMsg";
import auth from "@/utils/firebase.init";
import { Link } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { TailSpin } from "react-loader-spinner";

const EmailLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();


  // --- logging user with firebase
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (error) {
      errorMessage(
        error.code ||
          error.message ||
          "There was an error creating the account, please try again later"
      );
    }
    if (user) {
      // successMessage("Logged in successfully");
      // console.log(user);
      // addUserToMongoDb({email : user?.email, name : user?.displayName});
      // router.push("/authentication/login");
    }
  }, [loading, error, user]);

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
          placeholder="rasel@example.com"
          required
        />
      </div>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="password">Password</Label>
          <Link href="#" className="ml-auto inline-block text-sm underline">
            Forgot your password?
          </Link>
        </div>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
          required
        />
      </div>
      <Button type="submit" className="w-full bg-[#488EAF] " disabled={loading}>
        {loading ? (
          <TailSpin
            visible={true}
            height="30"
            width="30"
            color="white"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
          />
        ) : (
          "Login"
        )}
      </Button>
    </form>
  );
};

export default EmailLogin;
