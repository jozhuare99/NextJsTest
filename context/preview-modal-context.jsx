'use client';

import { createContext, useContext, useState } from "react";

export const PreviewModalContext = createContext();


export const ModalContextProvider  = ({children}) => {
  const [modal, setModal] = useState({
    isOpen: false,
    data: null
  });

  const openModal = (data) => {
    setModal({
      isOpen: true,
      data
    })
  }
  const closeModal = () => {
    setModal({
      isOpen: false,
      data: null
    })
  }
return(
  <PreviewModalContext.Provider value={{modal,openModal,closeModal}}>
    {children}
  </PreviewModalContext.Provider>
  )
}