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
import { useGetAllProductsQuery } from "@/utils/Redux/features/products/productsApi";
import AddProductModal from "./Modal/AddProductModal";
import EditProductModal from "./Modal/EditProductModal";

export const AllProducts = () => {
  // State for managing the search term for filtering products
  const [searchTerm, setSearchTerm] = useState("");
  
  // State for controlling the visibility of the "Add Product" & "Edit Product" dialog
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  const [iseditProductOpen, setIseditProductOpen] = useState(false);

  // Fetch all products using the useGetAllProductsQuery hook from RTK Query
  const { data, isLoading, isError, error }: any = useGetAllProductsQuery(undefined);

  const [productIdForEdit, setProductIdForEdit] = useState("");

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10); // Initial products per page

  // Calculate total pages
  const totalPages = useMemo(() => {
    return Math.ceil((data?.length || 0) / productsPerPage);
  }, [data, productsPerPage]);

  // Calculate the products to display on the current page
  const currentProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return data?.slice(startIndex, endIndex);
  }, [data, currentPage, productsPerPage]);

  // Use a memoized function to filter products based on the search term
  const filteredProducts = useMemo(() => {
    return currentProducts?.filter((product: any) =>
      product?.Title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [currentProducts, searchTerm]);

  // Display a loading message while fetching products
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Display an error message if fetching products fails
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // Function to handle page change
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Function to handle products per page change
  const handleProductsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setProductsPerPage(parseInt(event.target.value));
    setCurrentPage(1); // Reset to the first page whenever products per page changes
  };

  return (
    <div className="space-y-4 container my-5">
      <ToastContainer position="bottom-center" />
      <div className="flex justify-between items-center">
        {/* --- modal for adding a product --- */}
        <AddProductModal
          isAddProductOpen={isAddProductOpen}
          setIsAddProductOpen={setIsAddProductOpen}
        />
        <div className="flex items-center space-x-2">
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64"
          />
          {/* --- Products Per Page Select --- */}
          <select
            value={productsPerPage}
            onChange={handleProductsPerPageChange}
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>
      <Table className="min-h-[50vh] ">
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
                    onClick={() => {
                      setIseditProductOpen(true);
                      setProductIdForEdit(product?._id);
                    }}
                    variant={"outline"}
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
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

      {/* --- Pagination Controls --- */}
      <div className="flex justify-center items-center space-x-2 mt-4">
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>

      {/* --- modal for editing a product --- */}
      <EditProductModal
        iseditProductOpen={iseditProductOpen}
        setIseditProductOpen={setIseditProductOpen}
        productIdForEdit={productIdForEdit}
        setProductIdForEdit={setProductIdForEdit}
      />
    </div>
  );
};