"use client";

import usePreviewModal from "@/hooks/use-preview-modal";
import Gallery from './gallery';
import Info from './descriptions/gallery-info';
import Modal from './ui/modal';

const PreviewModal = () => {
  // const {isOpen, onOpen, onClose, data} = usePreviewModal()
  const {modal, openModal, closeModal} = usePreviewModal();
  const product = usePreviewModal();

  const  imageData = modal.data.images

  if(!product) {
    return null;
  }



  return (
    <Modal open={modal.isOpen} onClose={closeModal}>
      <div className="grid items-start w-full grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={imageData} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info data={modal.data} />
        </div>
      </div>
    </Modal>
  )

}

export default PreviewModal;