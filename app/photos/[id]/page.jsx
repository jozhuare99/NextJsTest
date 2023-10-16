import Frame from '../../component/frame/Frame';
import {Photos} from '../../data/interceptionData';

export default function PhotoPage({params: {id}}){
  const photo = Photos?.find(p => {
    return p.id.toString() === id});
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-slate-700">
        <Frame photo={photo} />
      </div>
    </div>
  )
}