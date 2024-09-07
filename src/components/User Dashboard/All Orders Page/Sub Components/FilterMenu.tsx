import { FaFilter } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const FilterMenu = ({ props }: { props: any }) => {
  const {
    showLess50,
    setShowLess50,
    showPending,
    setShowPending,
    showDelivered,
    setShowDelivered,
    showRated,
    setShowRated,
    showCancelled,
    setShowCancelled,
    priceHigh,
    priceLow,
    handlePriceFilter,
    handleClearFilter,
  } = props;
  return (
    <div className="order-first">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className=" flex justify-center items-center gap-2 text-lg text-slate-500  "
          >
            Filter by
            <FaFilter className="w-3 h-3 text-slate-400 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Filter your orders by</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={showLess50}
            onCheckedChange={setShowLess50}
          >
            {`Price less than < 50`}
          </DropdownMenuCheckboxItem>

          <DropdownMenuCheckboxItem
            checked={showPending}
            onCheckedChange={setShowPending}
          >
            Pending
          </DropdownMenuCheckboxItem>

          <DropdownMenuCheckboxItem
            checked={showDelivered}
            onCheckedChange={setShowDelivered}
          >
            Delivered
          </DropdownMenuCheckboxItem>

          <DropdownMenuCheckboxItem
            checked={showRated}
            onCheckedChange={setShowRated}
          >
            Rated
          </DropdownMenuCheckboxItem>

          <DropdownMenuCheckboxItem
            checked={showCancelled}
            onCheckedChange={setShowCancelled}
          >
            Cancelled
          </DropdownMenuCheckboxItem>

          <DropdownMenuCheckboxItem
            checked={priceHigh}
            onCheckedChange={() => handlePriceFilter("high")}
          >
            Price high to low
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={priceLow}
            onCheckedChange={() => handlePriceFilter("low")}
          >
            Price low to high
          </DropdownMenuCheckboxItem>

          <DropdownMenuCheckboxItem
            // checked={priceLow}
            // onCheckedChange={() => handlePriceFilter("low")}
            onClick={handleClearFilter}
          >
            Clear all filter
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default FilterMenu;
