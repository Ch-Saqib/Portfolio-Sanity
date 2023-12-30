CREATE TABLE IF NOT EXISTS "GuestBook" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "customer" (
	"customer_id" integer,
	"name" varchar(255),
	"age" integer,
	"address" varchar(255),
	"product_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "persons" (
	"personid" integer,
	"lastname" varchar(255),
	"firstname" varchar(255),
	"address" varchar(255),
	"city" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "product" (
	"product_id" integer,
	"product_name" varchar(255),
	"description" varchar(255),
	"price" integer
);
