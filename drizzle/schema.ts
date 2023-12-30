import { pgTable, integer, varchar, serial } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"



export const customer = pgTable("customer", {
	customerId: integer("customer_id"),
	name: varchar("name", { length: 255 }),
	age: integer("age"),
	address: varchar("address", { length: 255 }),
	productId: integer("product_id"),
});

export const product = pgTable("product", {
	productId: integer("product_id"),
	productName: varchar("product_name", { length: 255 }),
	description: varchar("description", { length: 255 }),
	price: integer("price"),
});

export const persons = pgTable("persons", {
	personid: integer("personid"),
	lastname: varchar("lastname", { length: 255 }),
	firstname: varchar("firstname", { length: 255 }),
	address: varchar("address", { length: 255 }),
	city: varchar("city", { length: 255 }),
});


export const Guestbook=pgTable("GuestBook",{
    id:serial("id").primaryKey(),
    name:varchar("name",{length:255})
});