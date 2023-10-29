'use client';

import { useContext } from "react";
import { PreviewModalContext } from "@/context/preview-modal-context";

const usePreviewModal = () => {
  return useContext(PreviewModalContext)
}

export default usePreviewModal;