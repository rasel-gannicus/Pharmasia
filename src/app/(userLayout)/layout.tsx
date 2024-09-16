import UserDashboardWrapper from "@/components/Wrapper Components/User Dashboard Wrapper/UserDashboardWrapper";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* <UserDashboardNavbar>{children} </UserDashboardNavbar> */}
      <UserDashboardWrapper>{children}</UserDashboardWrapper>
    </div>
  );
}
