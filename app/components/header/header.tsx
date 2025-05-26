"use client"
import { Button } from "@/components/ui/button"
import {  MessageCircleMore } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Dancing_Script } from "next/font/google";

import { SiInstagram } from "react-icons/si"


const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "700" });
export const Header = () =>{
    

    return(
        <>
        <header className="bg-pink-100 py-4 px-6 shadow-sm">
            <div className="container 
                max-w-6xl 
                mx-auto flex items-center justify-between"
            >
                {/* Logo */}
                <Link href="/" >
                    <div className="flex items-center gap-2">
                        <Image 
                            src="/logo.svg" 
                            width={100} 
                            height={100} 
                            alt="logo" 
                            className="object-contain" />
                        <span className={`text-heading-sm sm:text-heading-hg font-bold text-pink-800 ${dancingScript.className}`}>
                            Raquel Torres Designer de Unhas
                    </span>
                    </div>
                    
                </Link>
                
                {/* Menu */}
                <div className="hidden sm:flex items-center gap-6">
                    <Link href="https://www.instagram.com/raqueltorresdesigner" target="_blank" rel="noopener noreferrer">
                        <SiInstagram size={`36`} className=" text-purple-500 hover:text-purple-700 transition-colors" />
                    </Link>
                    <Link href="" 
                        target="_blank"
                        rel="noopener noreferrer">
                        <Button className="
                            bg-purple-500 
                            hover:bg-purple-700
                            text-white
                            rounded-full
                            px-5 
                            flex
                            items-center
                            gap-2">
                                <MessageCircleMore className="w-9 h-9" />
                                Agendar Horário
                            </Button>
                    </Link>
                </div>
            </div>
        </header>
    </>
    )
}