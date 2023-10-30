'use client'

import Modal from '../../../component/modal/Modal';
import {useRouter} from 'next/navigation'

export default function Page(){
  const router = useRouter()
  return (
    <Modal>
      <span onClick={() => router.back()}>Close modal</span>
      <h1>Login</h1>
      <div>
        <button>login</button>
      </div>
    </Modal>
  )
}