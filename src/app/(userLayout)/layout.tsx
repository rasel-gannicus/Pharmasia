import ReduxProvider from "@/utils/Redux/ReduxProvider";
import { ubuntu } from "../(commonLayout)/layout";
import UserDashboardWrapper from "@/components/Wrapper Components/User Dashboard Wrapper/UserDashboardWrapper";
import { UserDashboardNavbar } from "@/components/User Dashboard/User Dashboard Navbar/UserDashboardNavbar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <UserDashboardNavbar>{children} </UserDashboardNavbar>
      {/* <UserDashboardWrapper>{children}</UserDashboardWrapper> */}
    </div>
  );
}
