"use client";

import { AlertModal } from "@/components/modal/alert-modal";
import Header from "@/components/ui/heading";
import {Trash} from "react-bootstrap-icons";
import  {useParams,useRouter} from "next/navigation"
import { useState } from "react";
import {toast} from "react-hot-toast";
import { Separator } from "@/components/ui/separator";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const CategoryForm = ({initialData, billboards}) => {
  const params = useParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading,setLoading] = useState(false);

  const title = initialData ? "Edit Category" : "Create Category";
  const description = initialData ? "Edit a Category":"Add a new Category";
  const toastMessage = initialData ? "Category Updated.":"Category Created";
  const action = initialData? "Save Changes" : "Create";
  const form = useForm({defaultValues:  initialData || {
    name: '',
    billboardId:''
  }});
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      if(initialData){
        const response = await fetch(`https://localhost:3000/api/${params.storeId}/categories/${params.categoryId}`, {
          method: "PATCH",
          header: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        })
        if(!response.ok){
          throw new Error(`Patch request failed with status ${response.status}`)
        }
      } else {
        const response = await fetch(`https://localhost:3000/api/${params.storeId}/categories`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data),
        });
        if(!response.ok){
          throw new Error(`POST request failed with status ${response.status}`);
        }
      }
      router.refresh();
router.push(`/dashboard/${params.storeId}/categories`);
toast.success(toastMessage);
    } catch (error) {
      toast.error("Something went wrong.")
    } finally {
      setLoading(false);
    }
  }
  const onDelete = async () => {
    try {
      setLoading(true);
      const deleteResponse = await fetch(`/api/${params.storeId}/categories/${params.categoryId}`,{
        method: "DELETE"
      });
      if(!deleteResponse.ok){
        throw new Error(`DELETE request failed with status ${deleteResponse.status}`);
      }
      router.refresh();
      router.push(`/dashboard/${params.storeId}/categories`);
      toast.success("Category Deleted.");
    } catch (error) {
      toast.error("Make sure you removed all products that are using this category first.");
    } finally {
      setLoading(false);
      setOpen(false);
    }
  }

  return (
    <>
    <AlertModal
      isOpen={open}
      onClose={() => setOpen(false)}
      onConfirm={onDelete}
      loading={loading}
      />
      <div className="flex items-center justify-between">
        <Header title={title} description={description} />
        {initialData && (
          <Button disable={loading} variant="destructive" size="sm" onClick={() => setOpen(true)}>
            <Trash className="w-4 h-4" />
          </Button>
        )}
      </div>
      <Separator />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
          <div className="gap-8 md:grid md:grid-cols-3">
            <FormField control={form.control} name="name" render={({field}) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input disable={loading} placeHolder="Category Name" {...field} />
                </FormControl>
              </FormItem>
            )}
            />
          </div>
        </form>
      </Form>
    </>
  )
}