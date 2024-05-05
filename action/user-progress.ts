"use server"

import db from "@/db/drizzle";
import { getCourseById, getUserProgress } from "@/db/queries";
import { userProgress } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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

    if(existingUserProgress){
        await db.update(userProgress).set({
        activeCourseId:courseId,
        userName:user.firstName || "User",
        userImageSrc:user.imageUrl || "/mascot"

        });

        revalidatePath('/learn');
        revalidatePath('/courses');
        redirect('/learn')

    }


    await db.insert(userProgress).values({
        userId,
        activeCourseId:courseId,
        userName:user.firstName || "User",
        userImageSrc:user.imageUrl || "/mascot"
    })

    revalidatePath('/learn');
    revalidatePath('/courses');
    redirect('/learn')




}