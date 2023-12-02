"use client";

import { CN } from "@/lib/utils";
import Link from "next/link";
import {useParams, usePathname} from "next/navigation";


const MainNav = ({className, ...props}) => {

  const pathname = usePathname();
  const params = useParams();


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
  return (
    <nav className={CN("flex item-center space-x-4 lg:space-x-6", className)} {...props}>
      {
        routes.map((route) => (
          <Link key={route.href} href={route.href} className={CN(
            "text-sm font-medium transition-colors text-slate-700 opacity-80 hover:text-primary",
            route.active ? "text-black font-semibold dark:text-white opacity-100": "text-muted-foreground"
          )}
          >
            {route.label}
          </Link>
        ))
      }
    </nav>
  )
}

export default MainNav;