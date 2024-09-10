import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Loader from "@/utils/Loading Spinner/Loader";

export function DropdownNotifications({ props }: any) {
  const { email, data, isloading, isError, error, notificationLoading } = props;

  return (
    <Tabs defaultValue="account" className="  max-w-[400px] max-h-[80vh] overflow-y-auto ">
      <TabsList className="grid w-full grid-cols-1">
        <TabsTrigger value="allNotifications">
          <span className="text-gray-400">Notifications</span>
        </TabsTrigger>
        {/* <TabsTrigger value="unread">Unread</TabsTrigger> */}
      </TabsList>
      <TabsContent value="allNotifications">
        <Card>
          <CardContent className=" pt-10 ">
            <Table>
              <TableBody>
                {isloading || notificationLoading ? (
                  <Loader />
                ) : (
                  data.map((item: any) => (
                    <TableRow key={item?.details}>
                      <TableCell className="font-medium text-slate-500">
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
