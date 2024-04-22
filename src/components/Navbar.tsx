"use client"
import Link from "next/link";
import Image from "next/image";
import sng from "/public/signature.png";
import { useState, useEffect } from "react";

export default function Navbar()
{
    const [top, setTop] = useState(true)
    
    useEffect(()=>{
        checkScrollEvent();
    }, [])
    
    function checkScrollEvent(){
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
               setTop(false)
            } else {
                setTop(true)
            }
        });
    }
    
    return(
        <nav className={`w-full p-2 bg-['#111'] fixed backdrop-blur-sm z-50 px-10 ${top ? `visible` : `hidden`} text-white h-[60px]`}>
            <div className="flex flex-row justify-between items-center">
            <Link href="/">
                <Image src={sng} alt="signature" width={150}/ >
            </Link>         
            </div>
        </nav>
    );
}