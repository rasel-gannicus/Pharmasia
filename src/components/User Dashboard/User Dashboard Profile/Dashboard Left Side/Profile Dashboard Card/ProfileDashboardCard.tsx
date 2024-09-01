import { MdOutlinePendingActions } from "react-icons/md";
import { dashboardCardClass } from "../../ProfileDashboard";
import { TailSpin } from "react-loader-spinner";

const ProfileDashboardCard = ({ props }: any) => {
  const { userInfo, isLoading } = props;
  let pendingOrders = userInfo?.orders?.filter(
    (item: any) => item.status === "newOrder"
  );

  return (
    <div
      className={`${dashboardCardClass} bg-gradient-to-b from-orange-50  to-white`}
    >
      <div className=" bg-[#FF7555] w-[80px] h-[80px] rounded-full flex flex-col justify-center items-center text-white text-3xl ">
        <MdOutlinePendingActions />
      </div>
      <h2 className="text-lg font-semibold">Pending</h2>
      <p className="text-slate-400 text-sm ">Orders to be delivered</p>
      <h2 className="text-2xl lg:text-3xl font-semibold text-[#FF7555] ">
        {isLoading ? (
          <TailSpin
            visible={true}
            height="40"
            width= "40"
            color="#FF7555"
            ariaLabel="tail-spin-loading"
            radius="4"
            wrapperStyle={{}}
            wrapperClass=""
          />
        ) : (
          pendingOrders?.length || 0
        )}
      </h2>
    </div>
  );
};

export default ProfileDashboardCard;
