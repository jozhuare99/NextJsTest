"use client";

import { useEffect, useState } from "react";
import { Button } from "./button";
import {Trash} from "react-bootstrap-icons";
import Image from "next/image";
import {CldUploadWidget} from "next-cloudinary";
import {PlusSquareDotted} from "react-bootstrap-icons";

const ImageUpload = ({disabled, onChange, onRemove, value}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  },[]);
  if(!isMounted){
    null;
  }
  const onUpload = (r) => {
    onChange(r.info.secure.secure_url);  
  }
  if(!isMounted){
    return null;
  }
  // console.log(value)

  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        {
          value &&
            <div className="relative w-[200px] h-[200px] rounded-md overflow-hidden">
              <div className="absolute z-10 top-2 right-2">
                <Button type="button" onClick={() => onRemove(value)} variant="destructive" size="sm">
                  <Trash className="w-4 h-4" />
                </Button>
              </div>
              <Image
                priority
                fill
                sizes="(min-width: 200px) 50vw, 100vw"
                className="object-cover"
                alt="Image"
                src={value}
              />
            </div>
        }

      </div>
      <CldUploadWidget onUpload={onUpload} uploadPreset="t4drjppf">
        {({open}) => {
          const onClick = () => {
            open();
          }
          return (
            <Button type="button" onClick={onclick} disabled={disabled} variant="secondary">
              <PlusSquareDotted className="w-4 h-4 mr-2" /> Upload an Image
            </Button>
          )
        }}

      </CldUploadWidget>
    </div>
  )
}

export {ImageUpload}