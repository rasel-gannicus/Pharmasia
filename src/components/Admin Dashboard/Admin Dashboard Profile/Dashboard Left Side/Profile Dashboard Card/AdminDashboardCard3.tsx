import { FaStar } from "react-icons/fa";
import { dashboardCardClass } from "../../AdminProfileDashboard";

interface AdminDashboardCard3Props {
  allratingsfromAllUsers?: Number[]; 
  isLoading: boolean;
}
const AdminDashboardCard3 = ({ allratingsfromAllUsers, isLoading }: AdminDashboardCard3Props) => {
  const ratingList = allratingsfromAllUsers || []; 
  return (
    <div
      className={`${dashboardCardClass} bg-gradient-to-b from-green-50 to-white mx-auto w-full`}
    >
      <div className="bg-[#1C8674] w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl">
        <FaStar />
      </div>
      <h2 className="text-lg font-semibold">Reviews</h2>
      <p className="text-slate-400 text-sm">Completed by all users</p>
      <h2 className="text-2xl font-semibold text-[#1C8674]">
        {ratingList.length}
      </h2>
    </div>
  );
};

export default AdminDashboardCard3;
