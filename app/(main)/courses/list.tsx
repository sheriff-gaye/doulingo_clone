"use client";

import { courses, userProgress } from "@/db/schema";
import Card from "./card";
import { useTransition } from "react";
import { useRouter } from "next/router";

type Props = {
  courses: typeof courses.$inferSelect[];
  activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
};

const List = ({ courses, activeCourseId }: Props) => {
const router =useRouter();
  const [pending , startTranition]=useTransition();

  const onClick=(id:number)=>{
     if (pending) return;

     if(id===activeCourseId){
      return router.push('/learn');
  }
  startTranition(()=>{
     
  })
  }
  return (
    <div className="pt-6  grid grid-cols-2  lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4 ">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={() => {}}
          disabled={false}
          active={course.id === activeCourseId}
        />
      ))}
    </div>
  );
};

export default List;
