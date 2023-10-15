'use client'

import {usePathname} from 'next/navigation';
import Link from 'next/link';

export function Links(){
  const pathname = usePathname();
  return(
    <ul>
      <li>
        <Link className={pathname === '/' ? 'active' : ''} href='/'>Home</Link>
      </li>
      <li>
        <Link className={pathname === '/dashboard' ? 'active' : ''} href='/dashboard'>Dashboard</Link>
      </li>
      <li>
        <Link className={pathname === '/about' ? 'active' : ''} href='/about'>About</Link>
      </li>
      <li>
        <Link className={pathname === '/blog' ? 'active' : ''} href='/blog'>Blog</Link>
      </li>
    </ul>
  )
}