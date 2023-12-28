"use client";
import {Plus} from  "react-bootstrap-icons";
import {useParams,useRouter} from "next/navigation";
import Header from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/dataTable";
import { columns } from "./columns";
import { ApiList } from "@/components/ui/api-list";

const CategoriesClient = ({data}) => {
  const params = useParams();
  const router = useRouter();
  return (
    <>
    <div className="flex items-center justify-between">
      <Header title={`Categories (${data.length})`} description="Manage Categories for your store" />
      <Button onClick={()=> router.push(`/dashboard/${params.storeId}/categories/new`)}>
        <Plus className="w-4 h-4 mr-2" /> Add New
      </Button>
    </div>
    <Separator />
    <DataTable searchKey="name" columns={columns} data={data} />
    <Header title="API" description="API Calls for Categories" />
    <Separator />
    <ApiList entityName="categories" entityIdName="categoryId" />
    </>
  )
}

export {CategoriesClient}