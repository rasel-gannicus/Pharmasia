"use client";
// Import necessary components from React and UI library
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Search, Edit, Trash2 } from "lucide-react";
import Image from "next/image";
// Import the query hook for fetching product data
import { useGetAllProductsQuery } from "@/utils/Redux/features/products/productsApi";


export const AllProducts = () => {
  // State variable for managing the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch product data using the query hook
  const { data, isLoading, isError, error }: any =
    useGetAllProductsQuery(undefined);

//   useEffect(() => {
//   }, [data, isLoading, isError, error]);

  // Filter the products based on the search term
  const filteredProducts = data?.filter((product: any) =>
    product?.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4 container my-5">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Products</h2>
        <div className="flex items-center space-x-2">
          {/* Input field for searching products */}
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64"
          />
          {/* Button for triggering the search */}
          <Button>
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>
      </div>
      {/* Table to display the products */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Ratings</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Map through the filtered products and render table rows */}
          {filteredProducts?.map((product: any) => (
            <TableRow key={product?._id}>
              <TableCell className="font-medium">
                <div className="flex items-center space-x-3">
                  {/* Display product image */}
                  <Image
                    src={product?.Images}
                    alt={product?.Title}
                    width={40}
                    height={40}
                    className="rounded-md"
                  />
                  <span>{product?.Title}</span>
                </div>
              </TableCell>
              <TableCell>
                {/* Display product category as a badge */}
                <Badge variant="secondary">{product?.Category}</Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  {/* Display product rating with a star icon */}
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  <span>{product?.Ratings?.toFixed(1)}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  {/* Buttons for editing and deleting a product */}
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  <Button variant="destructive" size="sm">
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
