'use client'
import {useCallback, useRef, useEffect } from 'react';
import {useRouter} from 'next/navigation';

export default function Modal({children}){
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back()
  }, [router]);

  const onClick = useCallback(
    (e) => {
      if(e.target === overlay.current || e.target === wrapper.current){
        if(onDismiss) onDismiss()
      }
    }, [onDismiss, overlay, wrapper]
  )

  const onKeyDown = useCallback(
    (e) => {
      if(e.key === 'Escape'){
       onDismiss()
      }
    }, [onDismiss]
  )

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onKeyDown])

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-10 mx-auto bg-black/60" ref={overlay} onClick={onClick}>
      <div className="w-10/12 h-auto" ref={wrapper}>
        {children}
      </div>
    </div>
  )
}