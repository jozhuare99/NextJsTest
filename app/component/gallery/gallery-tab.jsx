import Image from "next/image";
import {Tab} from '@headlessui/react';
import { CN } from "@/lib/utils";

const GalleryTab = ({image}) => {
  return (
    <Tab className="relative flex items-center justify-center rounded-md cursor-pointer aspect-square ng-white">
      {({selected}) => (
        <div>
          <span className="absolute inset-0 w-full h-full overflow-hidden rounded-md aspect-square">
            <Image
              fill
              src={image.src}
              alt=""
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
              priority
              as="img"
            />
          </span>
          <span className={CN('absolute inset-0 rounded-md ring-2 ring-offset-2', 
          selected ? 'ring-black' : 'ring-transparent')} />
        </div>
      )}
    </Tab>
  )
}

export default GalleryTab;