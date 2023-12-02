
import DashBoardIndex from '@/components/dashboard';
// import { Suspense } from "react";
// import PostFeed from '../../component/postFeed';
// import Weather from '../../component/weather';
// import {useSelectedLayoutSegment} from 'next/navigation';


export default async function Page() {

  // const loginSegments = useSelectedLayoutSegment('auth');

  return (
    <div>
      <DashBoardIndex/>
      {/* <Suspense fallback={<p>Loading feed...</p>}>
        <PostFeed />
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
        <Weather />
      </Suspense> */}
    </div>
  )
}