import { FaShoppingCart } from "react-icons/fa";
import { dashboardCardClass } from "../../AdminProfileDashboard";
import { TailSpin } from "react-loader-spinner";

const AdminDashboardCard4 = ({ allCartfromAllUsers, isLoading }: any) => {
  const cartQuantity = allCartfromAllUsers?.reduce((acc: number, item: any) => {
    return item?.quantity > 0 ? acc + item.quantity : acc;
  }, 0);
  return (
    <div
      className={`${dashboardCardClass} bg-gradient-to-b from-blue-100  to-white mx-auto w-full`}
    >
      <div className=" bg-[#3E5189] w-[80px] h-[80px] rounded-full flex flex-col justify-center items-center text-white text-3xl ">
        <FaShoppingCart />
      </div>
      <h2 className="text-lg font-semibold"> Carts</h2>
      <p className="text-slate-400 text-sm ">
        `Total quantity of items in all user's cart`
      </p>
      <h2 className="text-2xl lg:text-3xl font-bold text-[#3E5189] ">
        {isLoading ? (
          <TailSpin
            height="40"
            width="40"
            color="#3E5189"
            ariaLabel="tail-spin-loading"
            radius="4"
          />
        ) : (
          cartQuantity || 0
        )}
      </h2>
    </div>
  );
};

export default AdminDashboardCard4;
