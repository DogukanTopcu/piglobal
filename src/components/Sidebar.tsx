"use client"
import { User } from '@/models/User.model';
import clsx, { ClassValue } from 'clsx';
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { twMerge } from 'tailwind-merge';


const Sidebar = ({ user } : { user: User } ) => {
    const pathname = usePathname();

    const sidebarLinks = [
        {
          imgURL: "/logo-circular.svg",
          route: "/pi-admin/",
          label: "Home",
        },
        {
          imgURL: "/logo-circular.svg",
          route: "/my-banks",
          label: "My Banks",
        },
        {
          imgURL: "/logo-circular.svg",
          route: "/transaction-history",
          label: "Transaction History",
        },
        {
          imgURL: "/logo-circular.svg",
          route: "/payment-transfer",
          label: "Transfer Funds",
        },
      ];

  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
              <Image 
                src="/logo-circular.svg"
                width={34}
                height={34}
                alt="Horizon logo"
                className="size-[24px] max-xl:size-14"
              />
              <h1 className="sidebar-logo">Horizon</h1>
            </Link>
            
            {
                sidebarLinks.map((item) => {
                    const isActive = pathname == item.route || pathname.startsWith(`${item.route}/`);

                    return (
                        <Link href={item.route} key={item.label}
                          className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
                        >
                          <div className="relative size-6">
                            <Image 
                              src={item.imgURL}
                              alt={item.label}
                              fill
                              className={cn({
                                'brightness-[3] invert-0': isActive
                              })}
                            />
                          </div>
                          <p className={cn("sidebar-label", { "!text-white": isActive })}>
                            {item.label}
                          </p>
                        </Link>
                    )
                })
            }
        </nav>
    </section>
  )
}


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default Sidebar