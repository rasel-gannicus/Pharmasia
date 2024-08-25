import { FaStar } from "react-icons/fa";
import { dashboardCardClass } from "../ProfileDashboard";

const ProfileDashboardCard3 = () => {
  return (
    <div className={`${dashboardCardClass} bg-gradient-to-b from-yellow-50  to-white`}>
      <div className=" bg-[#FDB458] w-[80px] h-[80px] rounded-full flex flex-col justify-center items-center text-white text-3xl ">
        <FaStar />
      </div>
      <h2 className="text-lg font-semibold"> Reviews</h2>
      <p className="text-slate-400 text-sm ">You completed</p>
      <h2 className="text-2xl font-semibold text-[#FDB458] ">$ 2500</h2>
    </div>
  );
};

export default ProfileDashboardCard3;
