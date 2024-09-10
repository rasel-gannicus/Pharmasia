import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loader = ({ size, color }: any) => {
  return (
    <div className="w-full flex justify-center items-center">
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
    </div>
  );
};

export default Loader;
