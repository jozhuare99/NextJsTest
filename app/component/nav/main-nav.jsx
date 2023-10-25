"use client";

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {CN} from "@/lib/utils.js";

export default function MainNav({data}){
  const pathname = usePathname();
  const routes = data.map((r) => ({
    href: `/category/${r.id}`,
    label: r.name,
    active: pathname === `/category/${r.id}`,
  }))

  return (
    <nav className="flex items-center mx-6 space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={CN(
            route.active ? 'text-gray-900' : 'text-gray-500',
            'group inline-flex items-center text-sm font-medium hover:text-gray-900'
          )}>
            {route.label}
          </Link>
      ))}
    </nav>
  )
}