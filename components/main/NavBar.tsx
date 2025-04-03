import React from 'react'
import {Socials} from '@/constants' 
import Image from 'next/image'
import Link from 'next/link'
const NavBar = () => {
  return (
    <div className='w-full h-[65px] top-0 shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-[50] px-10'>
         <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="/about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/Dp.jpg"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin rounded-xl hover:rounded-full transition-all duration-300 p-1"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Ayaan Amjad
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#project" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Link href={social.href} target="_blank" rel="noopener noreferrer" key={social.name}>
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
                className="cursor-pointer hover:scale-110 transition-all duration-300"
              width={24}
              height={24}
            />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NavBar