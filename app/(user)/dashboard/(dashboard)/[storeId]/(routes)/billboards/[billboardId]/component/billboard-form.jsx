"use client";

import { AlertModal } from "@/components/modal/alert-modal";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import Header from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Trash } from "react-bootstrap-icons";
import {useForm} from "react-hook-form";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import { ImageUpload } from "@/components/ui/image-upload";
import { Input } from "@/components/ui/input";
import {useRouter,useParams} from "next/navigation";
import {toast} from "react-hot-toast"

const formSchema = z.object({
  label: z.string().min(1),
  imageUrl: z.string().min(1),
});

const BillboardForm = ({initialData}) => {
  const router = useRouter();
  const params = useParams();
  const [open,setOpen] = useState(false);
  const [loading,setLoading] = useState(false);
  const title = initialData ? 'Edit billboard' : 'Create billboard';
  const description = initialData ? 'Edit a billboard' : 'Add a new billboard';
  const onDelete = async () => {
    try {
      setLoading(true);
      fetch(`/api/${params.storeId}/billboards/${params.billboardId}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Billboard deleted successfully!', data);
        })
        .catch((error) => {
          console.error('Error deleting billboard:', error);
        });
      router.refresh();
      router.push(`/${params.storeId}/billboards`);
      toast.success('Billboard deleted.');
    } catch (error) {
      toast.error('Make sure You remove all categories that are connected on this billboard first.')
    } finally {
      setLoading(false);
      setOpen(false);
    }
  }
  const form = useForm({
    // resolver: zodResolver(formSchema),
    defaultValues: initialData 
  });
  const action = initialData ? 'Save Changes' : 'Create';
  // console.log(form);
  return (
    <>
      <AlertModal isOpen={open} onClose={()=>setOpen(false)} onConfirm={onDelete}  loading={loading} />
      <div className="flex items-center justify-between">
        <Header title={title} description={description} />
        { initialData && ( <Button disabled={loading} variant="description" size="sm" onClick={()=>setOpen(true)}><Trash className="w-4 h-4" /></Button> ) }
      </div>
      <Separator />
      <Form {...form}>
        <form className="w-full space-y-8">
          <FormField control={form.control} name="imageUrl" 
          render={(a) => {
            // console.log(form.control)
            console.log(a)
            return (
            <FormItem>
              <FormLabel>Background Image</FormLabel>
              <FormControl>
                <ImageUpload value={a.field.value ? [a.field.value] : []} disabled={loading} onChange={(url) => a.field.onChange(url)} onRemove={()=>a.field.onChange('')} />
              </FormControl>
            </FormItem>
          )}}/>
          <div className="gap-8 md:grid md:grid-cols-3">
            <FormField control={form.control} name="label" render={
              ({field}) => (
                <FormItem>
                  <FormLabel>Label</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Billboard Label" {...field} />
                  </FormControl>
                </FormItem>
              )
            } />
          </div>
          <Button disabled={loading} className="ml-auto" type="submit">
            {action}
          </Button>
        </form>
      </Form>
    </>
  )
}

export {BillboardForm}