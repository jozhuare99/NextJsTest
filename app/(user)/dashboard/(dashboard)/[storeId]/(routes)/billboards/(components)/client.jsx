"use client";

import { Button } from "@/components/ui/button";
import Header from "@/components/ui/heading";
import {Plus} from "react-bootstrap-icons";
import {useParams, useRouter} from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/dataTable";
import { columns } from "./columns";


export const BillboardClient = ({data}) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
    <div className="flex items-center justify-between">
      <Header title={`Billboard (${data.length})`} description="manage your billboard heading" />
      <Button variant="outline">
        <Plus className="w-4 h-4 mr-2"/> Add New
      </Button>
    </div>
    <Separator />
    <DataTable searchKey="label" columns={columns} data={data}/>
    <Header title="API" description="API Call for billboard" />
    <Separator />
    
    </>
  )
}