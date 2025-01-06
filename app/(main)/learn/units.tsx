import { lessons, units } from "@/db/schema";
import UnitsBanner from "./unit-banner";

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
  </>;
};


export default Units