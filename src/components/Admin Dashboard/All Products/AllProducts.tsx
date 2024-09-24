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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const AllProducts = () => {
  // State for managing the search term for filtering products
  const [searchTerm, setSearchTerm] = useState("");
  // State for controlling the visibility of the "Add Product" dialog
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  // State for storing the data of the new product being added
  const [newProduct, setNewProduct] = useState({
    Title: "",
    Category: "",
    Price: "",
    Images: "",
    Description: "",
    Brand: "",
    Flashsale: false,
    Ratings: 0,
  });

  // Fetch all products using the useGetAllProductsQuery hook from RTK Query
  const { data, isLoading, isError, error }: any =
    useGetAllProductsQuery(undefined);

  // Get the addProduct mutation function from RTK Query
  const [addProduct, { isLoading: addProductLoading }] =
    useAddProductMutation();

  // Use a memoized function to filter products based on the search term
  const filteredProducts = useMemo(() => {
    return data?.filter((product: any) =>
      product?.Title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  // Function to handle adding a new product
  const handleAddProduct = async () => {
    const toastId = toast.loading("Adding product...");
    try {
      // Call the addProduct mutation and unwrap the result
      await addProduct(newProduct).unwrap();
      toast.update(toastId, {
        render: "Product added successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
      // Reset the newProduct state to clear the form
      setNewProduct({
        Title: "",
        Category: "",
        Price: "",
        Images: "",
        Description: "",
        Brand: "",
        Flashsale: false,
        Ratings: 0,
      });
      // Close the "Add Product" dialog
      setIsAddProductOpen(false);
    } catch (err) {
      // Log an error if the product addition fails
      console.error("Failed to add the product: ", err);
      toast.update(toastId, {
        render: "Failed to add product. Please try again.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

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
        <h2 className="text-2xl font-bold">Products</h2>
        <div className="flex items-center space-x-2">
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64"
          />
          <Dialog open={isAddProductOpen} onOpenChange={setIsAddProductOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Product
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Product</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                {/* --- product title --- */}
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="title" className="text-right">
                    Title
                  </Label>
                  <Input
                    id="title"
                    value={newProduct.Title}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, Title: e.target.value })
                    }
                    className="col-span-3"
                  />
                </div>

                {/* --- product price --- */}
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="price" className="text-right">
                    Price
                  </Label>
                  <Input
                    id="price"
                    value={newProduct.Price}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, Price: e.target.value })
                    }
                    className="col-span-3"
                    type="number"
                  />
                </div>
                {/* --- product description --- */}
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                  <textarea
                    id="description"
                    value={newProduct.Description}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        Description: e.target.value,
                      })
                    }
                    className="col-span-3 border rounded-md p-2"
                  />
                </div>

                {/* --- product images --- */}
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="title" className="text-right">
                    Image Link
                  </Label>
                  <Input
                    id="images"
                    value={newProduct.Images}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, Images: e.target.value })
                    }
                    className="col-span-3"
                  />
                </div>

                {/* --- product brand --- */}
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="brand" className="text-right">
                    Brand
                  </Label>
                  <Input
                    id="brand"
                    value={newProduct.Brand}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, Brand: e.target.value })
                    }
                    className="col-span-3"
                  />
                </div>

                {/* --- product category --- */}
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="category" className="text-right">
                    Category
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      setNewProduct({ ...newProduct, Category: value })
                    }
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Shirts">Shirts</SelectItem>
                      <SelectItem value="Dresses">Dresses</SelectItem>
                      <SelectItem value="Hoodies">Hoodies</SelectItem>
                      <SelectItem value="Trousers">Trousers</SelectItem>
                      <SelectItem value="Activewear">Activewear</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* --- product flash sale --- */}
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="flashsale" className="text-right">
                    Flash Sale
                  </Label>
                  <div className="col-span-3 flex items-center space-x-4">
                    <input
                      type="radio"
                      id="flashsale-yes"
                      name="flashsale"
                      value="true"
                      checked={newProduct.Flashsale}
                      onChange={() =>
                        setNewProduct({ ...newProduct, Flashsale: true })
                      }
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <Label htmlFor="flashsale-yes" className="cursor-pointer">
                      Yes
                    </Label>
                    <input
                      type="radio"
                      id="flashsale-no"
                      name="flashsale"
                      value="false"
                      checked={!newProduct.Flashsale}
                      onChange={() =>
                        setNewProduct({ ...newProduct, Flashsale: false })
                      }
                      className="h-4 w-4  rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <Label htmlFor="flashsale-no" className="cursor-pointer">
                      No
                    </Label>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Button disabled={addProductLoading} onClick={handleAddProduct}>
                  {addProductLoading ? "Adding..." : "Add Product"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
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
