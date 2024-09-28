import Image from "next/image"
import Link from "next/link"
import { Clock, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FlashSaleCountdown from "../flash sale countdown/FlashSaleCountdown"

interface Medicine {
  _id: string
  Title: string
  Description: string
  Images: string
  Price: number
  DiscountedPrice?: number
  FlashSale: boolean
  flashSaleEndTime?: string
}

export default function FlashSaleCard({ data }: { data: Medicine }) {
  if (!data?.FlashSale) return null

  let discountedPrice = data?.Price * 0.6 ; 
  
  data = { ...data, DiscountedPrice: discountedPrice };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative">
          <Image
            src={data?.Images}
            alt={data?.Title}
            width={300}
            height={200}
            className="w-full object-cover h-48"
          />
          <Badge className="absolute top-2 left-2 bg-red-500">Flash Sale</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-2 line-clamp-1">{data?.Title}</h2>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{data?.Description}</p>
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold text-green-600">
              ${data?.DiscountedPrice?.toFixed(2)}
            </p>
            {data.Price !== data.DiscountedPrice && (
              <p className="text-sm text-gray-500 line-through">
                ${data.Price.toFixed(2)}
              </p>
            )}
          </div>
          <Badge variant="secondary" className="text-xs">
            Save {(((data?.Price - discountedPrice) / data?.Price) * 100).toFixed(0)}%
          </Badge>
        </div>
        {data?.flashSaleEndTime && (
          <div className="flex items-center gap-2 text-sm text-red-500 font-semibold">
            <Clock className="w-4 h-4" />
            <FlashSaleCountdown endTime={data?.flashSaleEndTime} />
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-wrap gap-2">
        <Button asChild className="flex-1 text-xs">
          <Link href={`/singleProduct/${data?._id}`}>View Details</Link>
        </Button>
        <Button variant="secondary" className="flex-1 text-xs">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}