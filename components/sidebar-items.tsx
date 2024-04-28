"use client"

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

type Props={
    label:string;
    iconSrc:string;
    href:string;
}


const SidebarIrem=({label,iconSrc,href}:Props)=>{

    const pathname=usePathname();
    const active=pathname===href

    return(
        <Button variant={active ? "sidebarOutline" :"sidebar"} className="justify-start h-[52px] " asChild>
            <Link href={href}>
                <Image src={iconSrc}  className="mr-2" height={32} width={32} alt={label} />
            {label}
            </Link>
        </Button>
    )




}

export default SidebarIrem;