import {Photos} from './data/interceptionData';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  
  return (
  <main className="container p-2 mx-auto">
    <h1 className='m-10 text-4xl font-bold text-center'>Graham</h1>
    <div className="grid grid-cols-1 gap-6 m-10 sm:grid-cols-2 md:grid-cols-3 auto-rows-max">
      {
        Photos.map(({id, imageSrc}) => (
          <Link key={id} href={`/photos/${id}`}>
            <Image alt="" priority={true} src={imageSrc} width={500} height={500}  className='object-cover w-full aspect-square'/>
          </Link>
        ))  
      }
    </div>
  </main>
  )
}