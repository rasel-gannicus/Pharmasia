import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Loader from "@/utils/Loading Spinner/Loader";
import { useModifyNotificationsMutation } from "@/utils/Redux/features/user/userApi";
import { TailSpin } from "react-loader-spinner";

export function DropdownNotifications({ props }: any) {
  const { email, data, isloading, isError, error, notificationLoading } = props;

  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-1">
        <TabsTrigger value="allNotifications">
          <span className="text-gray-400">Notifications</span>
        </TabsTrigger>
        {/* <TabsTrigger value="unread">Unread</TabsTrigger> */}
      </TabsList>
      <TabsContent value="allNotifications">
        <Card>
          <CardContent className=" pt-10">
            <Table>
              <TableBody>
                {isloading || notificationLoading ? (
                  <Loader />
                ) : (
                  data.map((item: any) => (
                    <TableRow key={item?.details}>
                      <TableCell className="font-medium">
                        {item?.details}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>{/* <Button>Save changes</Button> */}</CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
