"use client";

import axios from "axios";
import {useState} from "react";
import {Copy, PencilSquare,ThreeDots,Trash} from "react-bootstrap-icons";
import {toast} from "react-hot-toast";
import {useParams,useRouter} from "next/navigation";
import { AlertModal } from "@/components/modal/alert-modal";
import { DropDownMenu, DropDownMenuContent, DropDownMenuItem, DropDownMenuLabel, DropDownMenuTrigger } from "@/components/ui/dropdownMenu";
import Button from "app/component/buttons/button";

export const CellAction = ({data}) => {
  const router = useRouter();
  const params = useParams();
  const [open,setOpen] = useState(false);
  const [loading,setLoading] = useState(false);
  const onConfirm = async () => {

  }
  const onCopy = (id) => {
    navigator.clipboard.writeText(id);
    toast.success("Category ID copied to clipboard.");
  }
  return (
    <>
      <AlertModal 
      isOpen={open}
      onClose={()=>setOpen(false)}
      onConfirm={onConfirm}
      loading={loading}
      />
      <DropDownMenu>
        <DropDownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center justify-center w-8 h-8 p-0">
            <span className="sr-only">Open Menu</span>
            <ThreeDots className="w-4 h-4" />
          </Button>
        </DropDownMenuTrigger>
        <DropDownMenuContent align="end" className="bg-white">
          <DropDownMenuLabel>Actions</DropDownMenuLabel>
          <DropDownMenuItem onClick={() => onCopy(data.id)}>
          <svg width="16" height="16"className="w-4 h-4 mr-2" viewBox="0 0 16 16">
            <path d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
          </svg> 
          Copy Id
          </DropDownMenuItem>
          <DropDownMenuItem onClick={() => router.push(`/dashboard/${params.storeId}/categories/${data.id}`)} >
            <PencilSquare className="w-4 h-4 mr-2" />Update
          </DropDownMenuItem>
          <DropDownMenuItem onClick={() => setOpen(true)}>
            <Trash className="w-4 h-4 mr-2" /> Delete
          </DropDownMenuItem>
        </DropDownMenuContent>
      </DropDownMenu>
    </>
  )
 }