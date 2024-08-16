import ReduxProvider from "@/utils/Redux/ReduxProvider";
import { ubuntu } from "../(commonLayout)/layout";
import UserDashboardWrapper from "@/components/Wrapper Components/User Dashboard Wrapper/UserDashboardWrapper";
import UserDashboardNavbar from "@/components/User Dashboard/User Dashboard Navbar/UserDashboardNavbar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body className={ubuntu.className}>
          <div className="min-h-screen mx-auto">
            <UserDashboardNavbar />
            <UserDashboardWrapper>{children}</UserDashboardWrapper>
          </div>
        </body>
      </html>
    </ReduxProvider>
  );
}
