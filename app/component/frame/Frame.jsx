import Image from 'next/image';

export default function Frame({photo}){
  return (
    <div>
      <Image alt="" priority={true} src={photo.imageSrc} height={600} width={600} className="object-cover w-full col-span-2 aspect-square" />
      <div className="p-4 px-6 bg-white">
        <h3>{photo.name}</h3>
        <p>Taken by {photo.username}</p>
      </div>
    </div>
  )
}