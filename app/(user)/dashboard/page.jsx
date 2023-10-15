import { Suspense } from "react";
import PostFeed from '../../component/postFeed';
import Weather from '../../component/weather';

export default function Page() {
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