"use client";
import { ToastContainer, toast } from "react-toastify";
import { useMemo, useState } from "react";
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
import { Star, Search, Edit, Trash2, Plus } from "lucide-react";
import Image from "next/image";
import {
  useAddProductMutation,
  useGetAllProductsQuery,
} from "@/utils/Redux/features/products/productsApi";
import AddProduct from "./AddProduct";

export const AllProducts = () => {
  // State for managing the search term for filtering products
  const [searchTerm, setSearchTerm] = useState("");
  // State for controlling the visibility of the "Add Product" dialog
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);


  // Fetch all products using the useGetAllProductsQuery hook from RTK Query
  const { data, isLoading, isError, error }: any =
    useGetAllProductsQuery(undefined);


  // Use a memoized function to filter products based on the search term
  const filteredProducts = useMemo(() => {
    return data?.filter((product: any) =>
      product?.Title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

 

  // Display a loading message while fetching products
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Display an error message if fetching products fails
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="space-y-4 container my-5">
      <ToastContainer position="bottom-center" />
      <div className="flex justify-between items-center">
        <AddProduct isAddProductOpen={isAddProductOpen} setIsAddProductOpen={setIsAddProductOpen}  />
        <div className="flex items-center space-x-2">
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64"
          />
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Ratings</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredProducts?.map((product: any) => (
            <TableRow key={product?._id}>
              <TableCell className="font-medium">
                <div className="flex items-center space-x-3">
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
                <div className="flex items-center">
                  <span>$ {product?.Price}</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="secondary">{product?.Category}</Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  <span>{product?.Ratings?.toFixed(1)}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    onClick={() => setIsAddProductOpen(true)}
                    variant="outline"
                    size="sm"
                  >
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
