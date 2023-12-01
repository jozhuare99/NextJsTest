"use client";

import {v4 as uuidv4} from 'uuid';
import Image from 'next/image';

const imageSlider = () => {
  const imagesToShow = [
    {
      id: uuidv4(),
      img: '/system/loginapp1.svg'
    },
    {
      id: uuidv4(),
      img: '/system/loginapp2.svg'
    },
    {
      id: uuidv4(),
      img: '/system/loginapp3.svg'
    }
  ]

  return (
    <div id="carousel" className="relative justify-center w-full align-middle origin-center">
      <div className="relative flex flex-col flex-wrap items-center h-full overflow-hidden rounded-lg md:h-96">
        {
          imagesToShow.map((image) => (
            <div className="duration-700 ease-in-out" key={image.id}>
              <Image src={image.img} alt="" width={500} height={500} priority className="block aspect-auto  w-full h-fit top-1/2 left-1/2" />
            </div>
            ))
          }
      </div>
      <div className="absolute z-10 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2 rtl:space-x-reverse">
        {
          imagesToShow.map((image) => (
            <button key={image.id} type='button' className="w-3 h-3 rounded-full bg-cyan-600" aria-current="true" aria-label='Slide 1'></button>
          ))
        }
      </div>
    </div>
  )
}

export default imageSlider;