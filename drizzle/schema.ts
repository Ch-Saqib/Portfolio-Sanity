import { pgTable, integer, varchar, serial } from "drizzle-orm/pg-core";
import { InferModel, sql } from "drizzle-orm";

export const Guestbook = pgTable("guestbook", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }),
});

export type Guest = InferModel<typeof Guestbook>;
export type NewGuest = InferModel<typeof Guestbook, "insert">;
