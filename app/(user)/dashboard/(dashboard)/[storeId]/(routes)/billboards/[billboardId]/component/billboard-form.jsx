"use client";

import { AlertModal } from "@/components/modal/alert-modal";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Header from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Trash } from "react-bootstrap-icons";
import {useForm} from "react-hook-form";

const BillboardForm = ({initialData}) => {
  const [open,setOpen] = useState(false);
  const [loading,setLoading] = useState(false);
  const title = initialData ? 'Edit billboard' : 'Create billboard';
  const description = initialData ? 'Edit a billboard' : 'Add a new billboard';
  const form = useForm();
  return (
    <>
      <AlertModal isOpen={open} onClose={()=>setOpen(false)} onConfirm={()=>{}}  loading={loading} />
      <div className="flex items-center justify-between">
        <Header title={title} description={description} />
        { initialData && ( <Button disabled={loading} variant="description" size="sm" onClick={()=>setOpen(true)}><Trash className="w-4 h-4" /></Button> ) }
      </div>
      <Separator />
      <Form {...form}>
        <form>
          
        </form>
      </Form>
    </>
  )
}

export {BillboardForm}