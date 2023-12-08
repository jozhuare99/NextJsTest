"use client"

import { AlertModal } from '@/components/modal/alert-modal';
import {ThreeDots,PencilSquare,Trash} from 'react-bootstrap-icons';
import { Button } from '@/components/ui/button';
import { DropDownMenu, DropDownMenuContent, DropDownMenuItem, DropDownMenuLabel, DropDownMenuTrigger } from '@/components/ui/dropdownMenu';
import {useRouter,useParams} from 'next/navigation';
import { useState } from 'react';
import {toast} from 'react-hot-toast';
 
export const CellAction = ({data}) => {
  const router = useRouter();
  const params = useParams();
  const [open,setOpen] = useState(false);
  const [loading,setLoading] = useState(false);
  // console.log(data);
  const onCopy = (id) => {
    navigator.clipboard.writeText(id);
    toast.success("Billboard ID Copied Completed");
  }
  const onConfirm = async () => {
    try {
      setLoading(true);
      const deleteBillboard = await fetch(`/api/${params.storeId}/billboards/${data.id}`, {method:"DELETE"});
      if(deleteBillboard.ok){
        console.log(deleteBillboard);
        toast.success("Billboard Deleted.")
      } else {
      toast.error("Failed Delete Billboard, Internal Error");
      }
    } catch (error) {
      toast.error("Make sure you removed  all categories  using this billboard first.");
    } finally {
      setOpen(false);
      setLoading(false);
    }
  }
  return (
    <>
      <AlertModal isOpen={open} onClose={()=>setOpen(false)} loading={loading}/>
      <DropDownMenu>
        <DropDownMenuTrigger asChild>
          <Button variant="ghost" className="w-8 h-8 p-0">
            <span className="sr-only">Open Menu</span>
            <ThreeDots className="w-4 h-4"/>
          </Button>
        </DropDownMenuTrigger>
        <DropDownMenuContent className="bg-white" align="end">
          <DropDownMenuLabel>Actions</DropDownMenuLabel>
          <DropDownMenuItem onClick={() => onCopy(data.id)}>
          <svg width="16" height="16"className="w-4 h-4 mr-2" viewBox="0 0 16 16">
            <path d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
          </svg> 
          Copy Id
          </DropDownMenuItem>
          <DropDownMenuItem onClick={()=>router.push(`/dashboard/${params.storeId}/billboards/${data.id}`)}>
            <PencilSquare className="w-4 h-4 mr-2" /> Edit
          </DropDownMenuItem>
          <DropDownMenuItem  onClick={()=>setOpen(true)}>
            <Trash className="w-4 h-4 mr-2" /> Delete
          </DropDownMenuItem>
        </DropDownMenuContent>
      </DropDownMenu>
    </>
  )
}