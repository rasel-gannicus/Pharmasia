import React from "react";
import { TailSpin } from "react-loader-spinner";

type LoaderProps = {
  size?: string;
  color?: string;
}

const Loader = ({ size, color }: LoaderProps) => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-6 justify-center items-center">
      <TailSpin
        visible={true}
        height={size || "50"}
        width={size || "50"}
        color={color || "#3F70B9"}
        ariaLabel="tail-spin-loading"
        radius="4"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <h2 className="text-4xl font-normal text-slate-500">Loading...</h2>
    </div>
  );
};

export default Loader;
