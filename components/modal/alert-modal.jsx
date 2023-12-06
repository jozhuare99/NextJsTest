"use client";

import { useEffect, useState } from "react";
import { Modal } from "../ui/modal";

export const AlertModal = ({isOpen,onClose,onConfirm,loading}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(()=>{
    setIsMounted(true)
  },[])
  if(!isMounted){
    return null;
  }
  return (
    <Modal title="Are you sure?" description="This action cannot be undone." isOpen={isOpen} onClose={onClose}>
      
    </Modal>
  )
}