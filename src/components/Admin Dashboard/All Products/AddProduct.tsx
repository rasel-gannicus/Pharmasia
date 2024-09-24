import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAddProductMutation } from "@/utils/Redux/features/products/productsApi";
import { Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

const AddProduct = ({ isAddProductOpen, setIsAddProductOpen }: any) => {
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
  // Get the addProduct mutation function from RTK Query
  const [addProduct, { isLoading: addProductLoading }] =
    useAddProductMutation();

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
  return (
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
  );
};

export default AddProduct;
