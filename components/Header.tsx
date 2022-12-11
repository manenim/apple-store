import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {IoIosSearch} from 'react-icons/io'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {AiOutlineUser} from 'react-icons/ai'
import { Search } from '@mui/icons-material'
import { Badge } from '@mui/material'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useSelector } from 'react-redux'
import { selectBasketItems } from '../redux/basketSlice'
import { signIn, signOut, useSession } from "next-auth/react";




const Header = () => {
    const { data: session } = useSession();
    const items = useSelector(selectBasketItems);
  return (
    <header className='sticky top-0 z-30 flex w-full items-center justify-between bg-[#e7ecee] p-4'>
        <div className="flex items-center justify-center md:w-1/5">
            <Link href = "/">
                <div className="relative w-5 cursor-pointer opacity-75 h-10 transition hover:opacity-100">
                    <Image 
                        src = "https://banner2.cleanpng.com/20180204/gbw/kisspng-macintosh-mac-os-x-lion-macos-macbook-operating-sy-apple-logo-5a77a762126b40.8775341115177910740755.jpg" 
                        fill
                        
                          alt="logo"
                          className='object-contain'
                           sizes="(max-width: 768px) 3vw,
              (max-width: 1200px) 3vw,"
                    />
                </div>
            </Link>
        </div>
        <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
            <a href="#" className="headerLink">Product</a>
            <a href="#" className="headerLink">Explore</a>
            <a href="#" className="headerLink">Support</a>
            <a href="#" className="headerLink">Business</a>
        </div>
          <div className='flex items-center justify-center gap-x-4 md:w-1/5'>
              <Search className='headerIcon' />
              <Link href="/checkout">
                  <div className="relative cursor-pointer">
                      <Badge badgeContent={items.length} color="primary">
                          <ShoppingBagOutlinedIcon  color="action" />
                      </Badge>
                      
                  </div>
              </Link>
              {session ? (
                  <Image
            src={
              session.user?.image ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt=""
            className="cursor-pointer rounded-full"
            width={34}
            height={34}
            onClick={() => signOut()}
          />
                  
            ) : (
                  <PersonOutlineOutlinedIcon className = "headerIcon" onClick={() => signIn()} />
            )}

        </div>
    </header>
  )
}

export default Header