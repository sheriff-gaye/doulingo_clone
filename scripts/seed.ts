import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless"
import * as schema from "../db/schema"

const sql = neon(process.env.DATABASE_URL!)


const db = drizzle(sql, { schema });


const main = async () => {
    try {
        console.log("Seeding Database");
        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        await db.delete(schema.units);
        await db.delete(schema.lessons);
        await db.delete(schema.challenges);
        await db.delete(schema.challengeProgress);
        await db.delete(schema.challengeProgress);


        await db.insert(schema.courses).values([
            {
                id: 1,
                title: "Spanish",
                imageSrc: "/es.svg"
            },
            {
                id: 2,
                title: "Italian",
                imageSrc: "/it.svg"
            },
            {
                id: 3,
                title: "Croatian",
                imageSrc: "/hr.svg"
            },
            {
                id: 4,
                title: "French",
                imageSrc: "/fr.svg"
            }
        
        
        
        ]);

        await db.insert(schema.units).values([
            {
                id:1,
                courseId:1, //Spanish
                title:"Unit 1",
                description:"learn the basics of Spanish",
                order:1
            }


        ]);

        await db.insert(schema.lessons).values([
            {
                id:1,
                unitId:1,
                title:"Nouns",
                order:1
            },
            {
                id:2,
                unitId:1,
                title:"Verbs",
                order:2
            },
            {
                id:3,
                unitId:1,
                title:"Adverbs",
                order:3
            },
            {
                id:4,
                unitId:1,
                title:"Adjectives",
                order:4
            }
        ]);


        await db.insert(schema.challenges).values([
            {
                id:1,
                lessonId:1,
                type:"SELECT",
                question:"What is the Spanish word for man?",
                order:1
            },
           
        ]);


        await db.insert(schema.challengesOptions).values([
            {
                id:1,
                challengeId:1,
                imageSrc:"/man.svg",
                correct:true,  
                text:"el hombre",
                audioSrc:"/es_man.mp3"
            },
            {
                id:2,
                challengeId:1,
                imageSrc:"/woman.svg",
                correct:false,  
                text:"la mujer",
                audioSrc:"/es_woman.mp3"
            },
            {
                id:3,
                challengeId:1,
                imageSrc:"/robot.svg",
                correct:false,  
                text:"el robot",
                audioSrc:"/es_robot.mp3"
            }
        ]);


    } catch (error) {
        console.log("Failed to Seed the Database");

    }
}

main();
