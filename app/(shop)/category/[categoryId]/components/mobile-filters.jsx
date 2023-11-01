"use client";

import {useState} from "react";
import {Plus, X} from "react-bootstrap-icons";
import {Dialog} from "@headlessui/react";
import IconButton from "app/component/ui/icon-button";
import Button from "app/component/buttons/button";
import Filter from "./filter";

const MobileFilters = ({sizes,colors}) => {
  const [open,setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <>
      <Button className="flex items-center gap-x-2 lg:hidden" onClick={onOpen}>
        Filters <Plus size={20}/>
      </Button>
      <Dialog open={open} onClose={onClose} className="relative z-40 lg:hidden" as="div">
        <div className="fixed inset-0 bg-black bg-opacity-25">
          <div className="fixed inset-0 z-40 flex">
            <Dialog.Panel className="relative flex flex-col w-full h-full max-w-xs py-4 pb-6 ml-auto overflow-y-auto bg-white shadow-xl">
              <div className="flex items-center justify-end px-4">
                <IconButton icon={<X size={15} />} onClick={onClose} />
              </div>
              <div className="p-4">
                <Filter valueKey="sizeId" name="Sizes" data={sizes} />
                <Filter valueKey="colorId" name="Colors" data={colors} />
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default MobileFilters;