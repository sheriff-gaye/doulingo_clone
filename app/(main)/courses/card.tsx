import { cn } from "@/lib/utils";

type Props={
    id:number;
    title:string;
    imageSrc:string;
    onClick:(id:number)=>void;
    disabled?:boolean;
    active?:boolean;
}



const Card=({id,title,imageSrc,onClick,disabled,active}:Props)=>{

    return(
        <div onClick={()=>onClick(id)} className={cn}>



        </div>
    )
}

export default Card;