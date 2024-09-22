import { MdOutlinePendingActions } from "react-icons/md";
import { dashboardCardClass } from "../../AdminProfileDashboard";
import { TailSpin } from "react-loader-spinner";

interface AdminDashboardCardProps {
  orders: { status: string }[];
  isLoading: boolean;
}
const AdminDashboardCard = ({ orders, isLoading }: AdminDashboardCardProps) => {
  const pendingOrders = orders?.filter((item) => item.status === "newOrder");
  return (
    <div
      className={`${dashboardCardClass} bg-gradient-to-b from-orange-50 mx-auto to-white w-full`}
    >
      <div className=" bg-[#FF7555] w-[80px] h-[80px] rounded-full flex items-center justify-center text-white text-3xl ">
        <MdOutlinePendingActions />
      </div>
      <h2 className="text-lg font-semibold">Pending</h2>
      <p className="text-slate-400 text-sm ">Orders to be delivered</p>
      <h2 className="text-2xl lg:text-3xl font-semibold text-[#FF7555] ">
        {isLoading ? (
          <TailSpin
            height="40"
            width="40"
            color="#FF7555"
            ariaLabel="tail-spin-loading"
            radius="4"
          />
        ) : (
          pendingOrders?.length || 0
        )}
      </h2>
    </div>
  );
};

export default AdminDashboardCard;
