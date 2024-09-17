import UserDashboardWrapper from "@/components/Wrapper Components/User Dashboard Wrapper/UserDashboardWrapper";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <UserDashboardWrapper>{children}</UserDashboardWrapper>
    </div>
  );
}
