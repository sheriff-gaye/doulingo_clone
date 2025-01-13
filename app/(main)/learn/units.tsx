import { lessons, units } from "@/db/schema";
import UnitsBanner from "./unit-banner";
import LessonButton from "./lesson.button";

interface UnitsProps {
  id: number;
  order: number;
  title: string;
  description: string;
  lessons: (typeof lessons.$inferSelect & {
    completed: boolean;
  })[];
  activeLesson: typeof lessons.$inferSelect & {
    unit: typeof units.$inferSelect;
  } | undefined;
  activeLessonPercentage:number;
}

const Units = ({id,order,title,description,lessons,activeLesson,activeLessonPercentage}:UnitsProps) => {
  return <>
  <UnitsBanner title={title} description={description}/>

  <div className="flex  items-center flex-col relative">
    {
        lessons.map((lesson,index)=>{
            const isCurrent= lesson.id===activeLesson?.id
            const isLocked=!lesson.completed && !isCurrent

            return(
                <LessonButton id={lesson.id} key={lesson.id} totalCount={lessons.length -1 } index={lesson.id} percentage={activeLessonPercentage} current={ isCurrent} locked={isLocked}/>
            )
        })
    }

  </div>
  </>;
};


export default Units