'use client';

import { createContext } from "react";
import usePreviewModal from 'hooks/use-preview-modal';

const PreviewModalContext = createContext();


export const ModalContextProvider  = ({children}) => {
const preview = usePreviewModal();
return(
  <PreviewModalContext.Provider value={preview}>
    {children}
  </PreviewModalContext.Provider>
  )
}