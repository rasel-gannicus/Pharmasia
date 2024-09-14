"use client";
import Image from "next/image";
import Link from "next/link";
import SocialLogin from "../Social Login/SocialLogin";
import loginImg from "@/assets/img/login.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import EmailLogin from "./EmailLogin";
import PublicRoute from "@/utils/Route Protection/PublicRoute";

const Login = () => {
  return (
    <div className="w-full lg:grid lg:min-h-[400px] lg:grid-cols-2 xl:min-h-[300px] my-10">
      <div className="flex items-center justify-center py-7 lg:border-t lg:border-l lg:border-b">
        <div className="mx-auto max-w-sm border-none">
          <CardHeader>
            <CardTitle className="text-2xl text-[#21406A] ">Login</CardTitle>
            <CardDescription>
              Enter your credentials to login to your account
              <div className="text-center text-blue-300 font-semibold">
                <p> --- You may try this credential : --- </p>
                <p>(Email : <span className="font-bold text-gray-400">rasel@gmail.com</span> </p>
                <p>Password : <span className="font-bold text-gray-400">aaaaaa</span> )</p>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* --- email/password login */}
            <EmailLogin />

            {/* --- social account login --- */}
            <SocialLogin />

            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account ?{" "}
              <Link
                href="/authentication/register"
                className="font-bold text-[#488EAF]"
              >
                Register
              </Link>
            </div>
          </CardContent>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src={loginImg}
          alt="Image"
          className=" w-[450px] object-contain"
        />
      </div>
    </div>
  );
};

export default PublicRoute(Login);
