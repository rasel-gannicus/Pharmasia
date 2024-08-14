import loginImg from "@/assets/img/Register.png";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SocialLogin from "../Social Login/SocialLogin";
import EmailRegister from "./EmailRegister";

const Register = async () => {
  // // --- fetching data with SSG(Static Site Generation) method
  // const res = await fetch(
  //   `https://server-for-assignment-8.vercel.app/cloths/${params.productId}`,
  //   {
  //     cache: "force-cache",
  //   }
  // );
  // const data = await res.json();
  return (
    <div className="w-full lg:grid lg:min-h-[500px] lg:grid-cols-2 xl:min-h-[300px] ">
      <div className="flex items-center justify-center py-10 lg:border-t lg:border-l lg:border-b">
        <div className="mx-auto max-w-sm border-none">
          <CardHeader>
            <CardTitle className="text-xl text-[#476382] ">Sign Up</CardTitle>
            <CardDescription>
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            
            {/* --- email-password login --- */}
            <EmailRegister />

            {/* --- social login --- */}
            <SocialLogin />

            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/authentication/login" className="underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </div>
      </div>
      <div className="hidden bg-muted lg:block relative max-w-[500px] overflow-hidden">
        <Image
          src={loginImg}
          alt="Image"
          className=" object-cover absolute left-0 right-0 top-0 bottom-0 "
        />
      </div>
    </div>
  );
};

export default Register;
