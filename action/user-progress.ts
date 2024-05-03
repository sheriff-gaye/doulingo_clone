"use server"

import { getCourseById, getUserProgress } from "@/db/queries";
import { auth, currentUser } from "@clerk/nextjs";

export const upsertUserProgress = async (courseId: number) => {

    const { userId } = await auth();
    const user = await currentUser();


    if (!userId || !user) {
        throw new Error("Unauthorized");
    };

    const course = await getCourseById(courseId);

    if (!course) {
        throw new Error("Course Not Found")
    }

    //TODO:
    // if (!course.units.length || !course.units[0].lesson.length) {
    //     throw new Error("Course is Empty");
    // }


    const existingUserProgress=await getUserProgress()




}