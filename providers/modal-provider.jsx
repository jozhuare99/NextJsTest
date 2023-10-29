"use client";

import { useEffect, useState } from "react";
import PreviewModal from "../app/component/preview-modal";
import usePreviewModal from "@/hooks/use-preview-modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  const {modal} = usePreviewModal();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if(!isMounted){
    return null;
  }

  return (
    <>
    {
      modal.isOpen && (
        <PreviewModal />
        )
    }
    </>
  )
}

 export default ModalProvider;
