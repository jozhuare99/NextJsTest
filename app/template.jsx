
import Link from 'next/link';
import { Links } from './component/links';

export default function Template({children}) {
  return (
    <main>
      <h1>template</h1>
      <nav>
       <Links />
      </nav>
      {children}
    </main>
  )
}