import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Loader from "@/utils/Loading Spinner/Loader";
import medicineIMG from "@/assets/img/capsule 2.png";
import Image from "next/image";

export function DropdownNotifications({ props }: any) {
  const { email, data, isloading, isError, error, notificationLoading } = props;

  return (
    <Tabs
      defaultValue="account"
      className="  max-w-[600px] max-h-[80vh] overflow-y-auto "
    >
      <TabsList className="grid w-full grid-cols-1">
        <TabsTrigger value="allNotifications">
          <span className="text-gray-400">Notifications</span>
        </TabsTrigger>
        {/* <TabsTrigger value="unread">Unread</TabsTrigger> */}
      </TabsList>
      <TabsContent value="allNotifications">
        <Card>
          <CardContent className="  px-0 ">
            <Table>
              <TableBody>
                {isloading || notificationLoading ? (
                  <Loader />
                ) : (
                  data?.map((item: any) => (
                    <TableRow key={item?.createdAt}>
                      <TableCell className="font-medium text-slate-500 f">
                        <div className="flex justify-center items-center gap-2 ">
                          <div className="rounded-full overflow-hidden w-[90px] h-[90px] ">
                            <Image
                              src={item?.productImg || medicineIMG}
                              alt="notification image"
                              className="w-full"
                              width={100}
                              height={100}
                            />
                          </div>
                          <div className="w-full">
                            <p>{item?.details}</p>
                          </div>
                        </div>
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
