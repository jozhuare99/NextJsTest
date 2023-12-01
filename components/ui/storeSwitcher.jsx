'use client';

import { Button } from "@/components/ui/button";
import {Shop} from "react-bootstrap-icons";
import { CN } from "@/lib/utils";
import { useState } from "react";

const { PopOver, PopOverTrigger, PopOverContent } = require("@/components/ui/popover");



const StoreSwitcher = ({className, items = []}) => {
  const [open, setOpen] = useState(false);

  return (
    <PopOver open={open} onOpenChange={setOpen}>
      <PopOverTrigger asChild>
        <Button variant="outline" size="sm" role="combobox" aria-expanded={open} aria-label="Select a store" className={CN("w-[200px] justify-between", className)}>
          <Shop className="w-4 h-4 mr-2"/>
        </Button>
      </PopOverTrigger>
      <PopOverContent >
        <p>content</p>
      </PopOverContent>
    </PopOver>
  )
}

export default StoreSwitcher;