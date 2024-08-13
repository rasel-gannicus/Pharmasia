import DiscountSection1 from "@/components/for home page/Discount Section/DiscountSection1/DiscountSection1";
import Banner from "@/components/for home page/banner/banner";
import FlashSale from "@/components/for home page/flash sale/FlashSale";
import MostPopularProducts from "@/components/for home page/most popular products/MostPopularProducts";
import TopBrands from "@/components/for home page/top brands/TopBrands";

export default function Home() {
  return (
    <div className="mx-auto">
      <Banner />
      <div className="lg:max-w-[1450px] container mx-auto">
        <DiscountSection1 />
        {/* <FlashSale /> */}
        <TopBrands />
        <MostPopularProducts />
      </div>
    </div>
  );
}
