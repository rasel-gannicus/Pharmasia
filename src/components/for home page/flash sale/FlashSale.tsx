
import FlashSaleCard from "./flash sale card/FlashSaleCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const FlashSale = async () => {
  // --- fetching data with ISR method
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKENED_URL}/allProducts`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const data = await res.json();
  return (
    <div className=" mx-auto md:w-full ">
      <div>
        <h2 className=" text-xl md:text-4xl font-bold text-center mt-20">
          Our Current Flash Sales Items
        </h2>
        <hr className="border-2 w-3/4 mx-auto my-5" />
        <div className="py-5 grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6 px-1">
          {data?.length > 0 ? (
            data?.filter((item: any) => item?.Flashsale).map((item: any) => (
              <FlashSaleCard key={item._id} data={item} />
            ))
          ) : (
            <h2>No data found</h2>
          )}
        </div>
        <div className="text-center my-10">
          <Link href={"/flash-sale"}>
            <Button className="btn  rounded-none px-10  btn-neutral btn-lg mx-auto">
              See All
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
