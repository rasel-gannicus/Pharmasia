import UserDashboardNavbar from "@/components/shared/navbar/User Dashboard Navbar/UserDashboardNavbar";

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
