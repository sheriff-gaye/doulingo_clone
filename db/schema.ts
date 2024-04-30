import { PgTable,serial,text } from "drizzle-orm/pg-core";



export const courses=new PgTable("courses",{
    id:serial("id").primaryKey(),
    title:text("title").notNull(),
    imageSrc:text("image_src").notNull()
})