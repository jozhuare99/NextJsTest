'use client';

import Frame from '../../../../component/frame/Frame';
import Modal from '../../../../component/modal/Modal';
import { Photos } from '../../../../data/interceptionData';

export default function PhotoModal({ params: { id: photoId } }) {
  const photo = Photos.find((p) => p.id.toString() === photoId);
  return (
    <Modal>
      <Frame photo={photo} />
    </Modal>
  )
}