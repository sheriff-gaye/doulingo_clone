import { relations } from 'drizzle-orm';
import { pgTable, serial, text, integer } from 'drizzle-orm/pg-core';

export const courses = pgTable("courses", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    imageSrc: text("image_src").notNull(),
});


export const units = pgTable("units", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    courseId: integer("course_id").references(() => courses.id, { onDelete: "cascade" }).notNull(),
    order: integer("order").notNull(),

});


export const unitsRelations = relations(units, ({ many, one }) => ({
    course: one(courses, {
        fields: [units.courseId],
        references: [courses.id]
    }),
    lesson:many(lessons)
}))


export const lessons=pgTable("lessons",{
    id:serial("id").primaryKey(),
    title:text("title").notNull(),
    unitId:integer("unit_id").references(()=>units.id,{onDelete:"cascade"}).notNull(),
    order:integer("order").notNull()
})

export const lessonRelations=relations(lessons,({one ,many})=>({
    units:one(units,{
        fields:[lessons.id],
        references:[units.id]
    })
}));


export const challenges=pgTable("challenges",{
    id:serial("id").primaryKey()
    
})


export const coursesRelation = relations(courses, ({ many }) => ({
    userProgress: many(userProgress),
    units:many(units)
}));

export const userProgress = pgTable("user_progress", {
    userId: text("user_id").primaryKey(),
    userName: text("user_name").notNull().default("User"),
    userImageSrc: text("user_image_src").notNull().default("/mascot.svg"),
    activeCourseId: integer("active_course_id").references(() => courses.id, { onDelete: "cascade" }),
    hearts: integer("hearts").notNull().default(5),
    points: integer("points").notNull().default(0),



})

export const userProgressRelation = relations(userProgress, ({ one }) => ({
    activeCourse: one(courses, {
        fields: [userProgress.activeCourseId],
        references: [courses.id]
    }),
}));

