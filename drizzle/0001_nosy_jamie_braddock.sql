CREATE TYPE "public"."category" AS ENUM('DOG', 'CAT', 'BIRD', 'FISH', 'ACCESSORIES');--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "category" "category" DEFAULT 'DOG';