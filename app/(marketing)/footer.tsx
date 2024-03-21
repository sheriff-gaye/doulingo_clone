import { Button } from "@/components/ui/button"
import Image from "next/image"

export const Footer=()=>{

    return(
        <footer className="hidden  lg:block  h-20  w-full  border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg  mx-auto flex items-center justify-evenly h-full">
                <Button size="lg"  variant="ghost" className="w-full">
                    <Image src="/hr.svg" alt="corotia" height={32} width={40} className="rounded-md mr-4"/>
                    Croatian
                </Button>

                <Button size="lg"  variant="ghost" className="w-full">
                    <Image src="/jp.svg" alt="japan" height={32} width={40} className="rounded-md mr-4"/>
                    Japan
                </Button>

                <Button size="lg"  variant="ghost" className="w-full">
                    <Image src="/it.svg" alt="italy" height={32} width={40} className="rounded-md mr-4"/>
                    Italy
                </Button>

                <Button size="lg"  variant="ghost" className="w-full">
                    <Image src="/fr.svg" alt="france" height={32} width={40} className="rounded-md mr-4"/>
                    France
                </Button>

                <Button size="lg"  variant="ghost" className="w-full">
                    <Image src="/es.svg" alt="spain" height={32} width={40} className="rounded-md mr-4"/>
                    Spain
                </Button>

            </div>
        </footer>

    )
}


