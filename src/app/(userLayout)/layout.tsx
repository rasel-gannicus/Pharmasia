import ReduxProvider from "@/utils/Redux/ReduxProvider";
import { ubuntu } from "../(commonLayout)/layout";
import UserDashboardWrapper from "@/components/Wrapper Components/User Dashboard Wrapper/UserDashboardWrapper";

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
            <UserDashboardWrapper>{children}</UserDashboardWrapper>
          </div>
        </body>
      </html>
    </ReduxProvider>
  );
}
