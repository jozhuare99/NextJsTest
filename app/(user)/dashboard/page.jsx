'use client';

import { Suspense } from "react";
import PostFeed from '../../component/postFeed';
import Weather from '../../component/weather';
import {useSelectedLayoutSegment} from 'next/navigation';

export default function Page() {

  const loginSegments = useSelectedLayoutSegment('auth');
  return (
    <div>
      <h1>Hello, Dashboard Page!</h1>
      <Suspense fallback={<p>Loading feed...</p>}>
        <PostFeed />
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
        <Weather />
      </Suspense>
      
    </div>
  )
}