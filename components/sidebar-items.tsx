"use cleint"

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

type Props={
    label:string;
    iconSrc:string;
    href:string;
}


const SidebarIrem=({label,iconSrc,href}:Props)=>{

    const pathname=usePathname();

    return(
        <Button>
            {label}
        </Button>
    )




}

export default SidebarIrem;