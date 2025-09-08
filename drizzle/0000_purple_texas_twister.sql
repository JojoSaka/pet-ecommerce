CREATE TABLE "products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255),
	"description" text,
	"price" numeric(10, 2) DEFAULT '0.00',
	"quantity" integer DEFAULT 0,
	"image" text,
	"created_at" timestamp DEFAULT now()
);
