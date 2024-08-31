import { FaShoppingCart } from "react-icons/fa";
import { dashboardCardClass } from "../../ProfileDashboard";

const ProfileDashboardCard4 = ({ props }: any) => {
  const { userInfo } = props;
  let cartQuantity = userInfo?.cart?.filter((item: any) => item.quantity > 0 );
  return (
    <div
      className={`${dashboardCardClass} bg-gradient-to-b from-blue-100  to-white `}
    >
      <div className=" bg-[#3E5189] w-[80px] h-[80px] rounded-full flex flex-col justify-center items-center text-white text-3xl ">
        <FaShoppingCart />
      </div>
      <h2 className="text-lg font-semibold"> Carts</h2>
      <p className="text-slate-400 text-sm ">You have items to order</p>
      <h2 className="text-2xl lg:text-3xl font-bold text-[#3E5189] ">{cartQuantity?.length || 0}</h2>
    </div>
  );
};

export default ProfileDashboardCard4;
