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
import {
  useAddProductMutation,
  useEditProductMutation,
  useGetSingleProductQuery,
} from "@/utils/Redux/features/products/productsApi";
import { Edit, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
const EditProductModal = ({
  iseditProductOpen,
  setIseditProductOpen,
  productIdForEdit,
}: any) => {
  const { data, isLoading } = useGetSingleProductQuery(productIdForEdit, {
    skip: !productIdForEdit,
  });

  // State for storing the data of the product being edited
  const [editedProduct, setEditedProduct] = useState<any>({});

  // Update editedProduct when data from API loads using conditional fetching
  useEffect(() => {
    if (data) {
      setEditedProduct(data);
    }
  }, [data]);
  
  // Get the editProduct mutation function from RTK Query
  const [editProduct, { isLoading: isEditing }] = useEditProductMutation();

  // Function to handle editing the product
  const handleEditProduct = async () => {
    const toastId = toast.loading("Editing product...", { position: "bottom-right"});
    try {
      // Call the editProduct mutation and unwrap the result
      await editProduct({ ...editedProduct, id: productIdForEdit }).unwrap();
      toast.success("Product edited successfully!", { id: toastId });

      // Close the "Edit Product" dialog
      setIseditProductOpen(false);
    } catch (err: any) {
      // Log an error if the product edit fails
      console.error("Failed to edit the product: ", err.message);
      toast.error("There was an error editing the product !", {id: toastId,});
    }
  };
  return (
    <Dialog open={iseditProductOpen} onOpenChange={setIseditProductOpen} >
      <DialogTrigger asChild>
        {/* <Button variant={"outline"}>
          <Edit className="w-4 h-4 mr-2" />
          Edit
        </Button> */}
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* --- product title --- */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              value={editedProduct.Title}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, Title: e.target.value })
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
              value={editedProduct.Price}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, Price: e.target.value })
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
              value={editedProduct.Description}
              onChange={(e) =>
                setEditedProduct({
                  ...editedProduct,
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
              value={editedProduct.Images}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, Images: e.target.value })
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
              value={editedProduct.Brand}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, Brand: e.target.value })
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
                setEditedProduct({ ...editedProduct, Category: value })
              }
              value={editedProduct.Category}
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
                checked={editedProduct?.Flashsale}
                onChange={() =>
                  setEditedProduct({ ...editedProduct, Flashsale: true })
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
                checked={!editedProduct.Flashsale}
                onChange={() =>
                  setEditedProduct({ ...editedProduct, Flashsale: false })
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
          <Button disabled={isEditing} onClick={handleEditProduct}>
            {isEditing ? "Editing..." : "Edit Product"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditProductModal;
