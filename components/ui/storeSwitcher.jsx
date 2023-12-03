'use client';

import { Button } from "@/components/ui/button";
import {Shop,ArrowDownUp,Check,PlusCircle} from "react-bootstrap-icons";
import { CN } from "@/lib/utils";
import { useState } from "react";
import { useStoreModal } from "@/hooks/use-store-modal";
import {useRouter,useParams} from "next/navigation";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "./command";

const { PopOver, PopOverTrigger, PopOverContent } = require("@/components/ui/popover");



const StoreSwitcher = ({className, items}) => {
  const [open, setOpen] = useState(false);
  const storeModal = useStoreModal();
  const router = useRouter();
  const params = useParams();
  
  const currentStore = items.find((item) => item.name === decodeURIComponent(params.storeId));

  // console.log(params.storeId)
  // console.log(currentStore)

  const onStoreSelect = (store) => {
    console.log(store)
    setOpen(false);
    router.push(`/dashboard/${encodeURIComponent(store.name)}`)
  }

  return (
    <PopOver open={open} onOpenChange={setOpen}>
      <PopOverTrigger asChild>
        <Button variant="outline" size="sm" role="combobox" aria-expanded={open} aria-label="Select a store" className={CN("w-[200px] justify-between", className)}>
          <Shop className="w-4 h-4 mr-2"/>
          {currentStore?.name}
          <ArrowDownUp className="w-4 h-4 ml-auto opacity-50 shrink-0" />
        </Button>
      </PopOverTrigger>
      <PopOverContent className="bg-white">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search Store..." />
            <CommandEmpty>No Store Found.</CommandEmpty>
            <CommandGroup heading="Store">
              {
                items.map((store) => (
                  <CommandItem key={store.name+store.id} onSelect={()=>onStoreSelect(store)} className="text-sm">
                    <Shop className="w-4 h-4 mr-2"/>
                    {store.name}
                    <Check className={CN("ml-auto h-4 w-4", currentStore?.name === store.name ? "opacity-100":"opacity-0")} />
                  </CommandItem>
                ))
              }
            </CommandGroup>
          </CommandList>
          <CommandSeparator />
          <CommandList>
            <CommandGroup>
              <CommandItem onSelect={() => { setOpen(false); storeModal.onOpen();} }>
                <PlusCircle className="w-5 h-5 mr-2" />Create Store
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopOverContent>
    </PopOver>
  )
}

export default StoreSwitcher;