import ReduxProvider from "@/utils/Redux/ReduxProvider";
import UserDashboardWrapper from "@/components/Wrapper Components/User Dashboard Wrapper/UserDashboardWrapper";
import { UserDashboardNavbar } from "@/components/User Dashboard/User Dashboard Navbar/UserDashboardNavbar";
import { ubuntu } from "./(commonLayout)/layout";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body className={ubuntu.className}>
          {children}
        </body>
      </html>
    </ReduxProvider>
  );
}
