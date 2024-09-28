"use client";
import { useEffect, useMemo, useState } from "react";
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
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "@/utils/Redux/features/products/productsApi";
import AddProductModal from "./Modal/AddProductModal";
import EditProductModal from "./Modal/EditProductModal";
import { ModalForDeleteConfirmation } from "@/utils/Modal/ModalForDeleteConfirmation";
import { toast } from "react-hot-toast";
import Loader from "@/utils/Loading Spinner/Loader";

export const AllProducts = () => {
  // State for managing the search term for filtering products
  const [searchTerm, setSearchTerm] = useState("");

  // State for controlling the visibility of the "Add Product" & "Edit Product" dialog
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  const [iseditProductOpen, setIseditProductOpen] = useState(false);

  // Fetch all products using the useGetAllProductsQuery hook from RTK Query
  const { data, isLoading, isError, error }: any =
    useGetAllProductsQuery(undefined);

  const [productIdForEdit, setProductIdForEdit] = useState("");

  // ! --- product delete functionality
  // Get the deleteProduct mutation function from RTK Query
  const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();

  const [isDelete, setIsDelete] = useState(false);
  const [modalStatus2, setModalStatus2] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  useEffect(() => {
    if (isDelete) {
      const toastId = toast.loading("Deleting product...");
      try {
        // Call the deleteProduct function to delete the product
        deleteProduct(deleteId).unwrap();
        toast.success("Product Deleted successfully!", {
          id: toastId,
          position: "bottom-right",
        });
        setIsDelete(false);
        setDeleteId("");
      } catch (err) {
        // Log an error if the product deletion fails
        console.error("Failed to delete the product: ", err);
        toast.error("There was an error deleting the product !", {
          id: toastId,
        });
      }
    }
  }, [isDelete, modalStatus2, deleteId]);

  // Function to handle deleting a product
  const handleDeleteProduct = async (productId: string) => {
    setModalStatus2(true);
    setDeleteId(productId);
  };

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
    return <Loader /> || <div>Loading...</div>;
  }

  // Display an error message if fetching products fails
  if (isError) {
    toast.error("There was an error with backened !");
    return <div>Error: {error.message}</div>;
  }

  // Function to handle page change
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Function to handle products per page change
  const handleProductsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setProductsPerPage(parseInt(event.target.value));
    setCurrentPage(1); // Reset to the first page whenever products per page changes
  };

  return (
    <div className="md:max-w-full grid w-full overflow-x-auto shadow-md py-10 px-1">
      <div className="mb-5 grid grid-cols-1  lg:flex lg:justify-between items-center gap-5">
        {/* --- modal for adding a product --- */}
        <AddProductModal
          isAddProductOpen={isAddProductOpen}
          setIsAddProductOpen={setIsAddProductOpen}
        />
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 ">
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="md:w-64 w-full"
          />
          {/* --- Products Per Page Select --- */}
          <div className="flex w-full justify-center items-center gap-2">
            <p className="text-right text-sm">Products per page :</p>
            <select
              value={productsPerPage}
              onChange={handleProductsPerPageChange}
              className="border border-gray-300 rounded px-2 py-2 "
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>
      </div>
      <Table className="min-h-[50vh] ">
        <TableHeader>
          <TableRow>
            <TableHead>Item Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Ratings</TableHead>
            <TableHead>Flash Sale</TableHead>
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
                <div className="flex items-center">
                  <span>{product?.FlashSale ? "Yes" : "No"}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  {/* --- edit button --- */}
                  <Button
                    onClick={() => {
                      setIseditProductOpen(true);
                      setProductIdForEdit(product?._id);
                    }}
                    variant={"outline"}
                  >
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Button>

                  {/* --- delete button --- */}
                  <Button
                    className="bg-red-600"
                    onClick={() => handleDeleteProduct(product?._id)}
                  >
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
      {/* --- modal for deleting a product --- */}
      <ModalForDeleteConfirmation
        props={{
          modalStatus2,
          setModalStatus2,
          title: "Do you want to delete the item ?",
          setIsAgree2: setIsDelete,
        }}
      />
    </div>
  );
};
