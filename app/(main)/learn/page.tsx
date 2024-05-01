import FeedWrapper from "@/components/feed-wrapper"
import StickyWrapper from "@/components/stickey-wrapper"
import Header from "./header"
import UserProgress from "@/components/user-progress"
import { title } from "process"


const LearnPage=()=>{

    return(

        <div className="flex flex-row-reverse gap-[48px] px-6 ">
            <StickyWrapper>
                <UserProgress  activeCourses={{title:"Spanish" , imageSrc:"/es.svg"}}  hearts={5} points={100}  hasActiveSubscription={false}/>
            </StickyWrapper>
            <FeedWrapper>
               <Header title="French"/>
               <div className="space-y-4 ">
               </div>
            </FeedWrapper>
        </div>
        
    )

}

export default LearnPage