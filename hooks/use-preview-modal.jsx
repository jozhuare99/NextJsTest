'use client';

import { useState } from "react";

const usePreviewModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data,setData] = useState(null);
  const onOpen = (data) => {
    // console.log('triggered') pass
    setIsOpen(true);
    setData(data);
  }

  const onClose = () => {
    setIsOpen(false);
    setData(null);
  }
  
  return {
    isOpen,
    onOpen,
    onClose,
    data
  }

}

export default usePreviewModal;