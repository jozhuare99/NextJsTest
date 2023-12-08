"use client";

import { CN } from "@/lib/utils";
import Link from "next/link";
import {useParams, usePathname} from "next/navigation";
import { forwardRef } from "react";


const MainNav = forwardRef(({className, ...props},ref) => {

  const pathname = usePathname();
  const params = useParams();

// console.log(pathname)
// console.log(`/dashboard/${params.storeId}`)
  const routes = [
    {
      href: `/dashboard/${params.storeId}`,
      label: 'OverView',
      active: pathname === `/dashboard/${params.storeId}`
    },
    {
      href: `/dashboard/${params.storeId}/billboards`,
      label: 'BillBoards',
      active: pathname === `/dashboard/${params.storeId}/billboards`
    },
    {
      href: `/dashboard/${params.storeId}/categories`,
      label: 'Categories',
      active: pathname === `/dashboard/${params.storeId}/categories`
    },
    {
      href: `/dashboard/${params.storeId}/sizes`,
      label: 'Sizes',
      active: pathname === `/dashboard/${params.storeId}/sizes`
    },
    {
      href: `/dashboard/${params.storeId}/colors`,
      label: 'Colors',
      active: pathname === `/dashboard/${params.storeId}/colors`
    },
    {
      href: `/dashboard/${params.storeId}/products`,
      label: 'Products',
      active: pathname === `/dashboard/${params.storeId}/products`
    },
    {
      href: `/dashboard/${params.storeId}/orders`,
      label: 'Orders',
      active: pathname === `/dashboard/${params.storeId}/orders`
    },
    {
      href: `/dashboard/${params.storeId}/settings`,
      label: 'Settings',
      active: pathname === `/dashboard/${params.storeId}/settings`
    }
    
  ]

  const getActive = (i) => routes[i].active ? "text-black font-semibold dark:text-white opacity-100": "text-muted-foreground"
  return (
    <nav ref={ref} className={`flex item-center space-x-4 lg:space-x-6 ${className}`} {...props}>
      {
        routes.map((route,i) => (
          <Link key={route.label} href={route.href} prefetch={true} 
          className={`text-sm font-medium transition-colors text-slate-700 opacity-80 hover:text-primary ${getActive(i)}`}
          >
            {route.label}
          </Link>
        ))
      }
    </nav>
  )
})
MainNav.displayName = "MainNav"

export default MainNav;