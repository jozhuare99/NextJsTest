import Image from 'next/image';

export default function Frame({photo}){
  return (
    <div className="absolute w-full h-full p-6 mx-auto border">
      <Image alt="" priority={true} src={photo.imageSrc} height={600} width={600} className="object-cover col-span-2 aspect-square" />
      <div className="p-4 px-6 bg-white">
        <h3>{photo.name}</h3>
        <p>Taken by {photo.username}</p>
      </div>
    </div>
  )
}