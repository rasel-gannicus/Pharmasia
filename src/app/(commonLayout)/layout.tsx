import type { Metadata } from "next";
import { Inter, Josefin_Sans, Poppins, Ubuntu } from "next/font/google";
import "@/app/globals.css";
import Footer from "@/components/shared/footer/footer";
import CustomWrapper from "@/components/Custom Wrapper/CustomWrapper";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as HotToaster } from "react-hot-toast";

import ReduxProvider from "@/utils/Redux/ReduxProvider";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/shared/navbar/Common Layout Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "700", "800"],
});

export const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});
export const joseph = Josefin_Sans({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pharmasia",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen mx-auto">
        <CustomWrapper>{children}</CustomWrapper>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}
