'use client'

import {usePathname} from 'next/navigation';
import Link from 'next/link';

export function Links(){
  const pathname = usePathname();
  return(
    <ul className='flex flex-row gap-2 px-2 font-bold text-white flex-nowrap bg-red-950'>
      <li>
        <Link className={pathname === '/' ? 'text-cyan-400' : ''} href='/'>Home</Link>
      </li>
      <li>
        <Link className={pathname === '/dashboard' ? 'text-cyan-400' : ''} href='/dashboard'>Dashboard</Link>
      </li>
      <li>
        <Link className={pathname === '/about' ? 'text-cyan-400' : ''} href='/about'>About</Link>
      </li>
      <li>
        <Link className={pathname === '/blog' ? 'text-cyan-400' : ''} href='/blog'>Blog</Link>
      </li>
    </ul>
  )
}