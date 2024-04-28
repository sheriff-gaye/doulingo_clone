import FeedWrapper from "@/components/feed-wrapper"
import StickyWrapper from "@/components/stickey-wrapper"
import Header from "./header"


const LearnPage=()=>{

    return(

        <div className="flex flex-row-reverse gap-[48px] px-6 ">

            <StickyWrapper>
                <UserProgress  activeCourses={{}}  hearts={5} points={100}  hasActiveSubscription={false}/>
            </StickyWrapper>
            <FeedWrapper>
               <Header title="French"/>
            </FeedWrapper>
        </div>
        
    )

}

export default LearnPage