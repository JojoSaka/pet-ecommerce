import {
  varchar,
  uuid,
  integer,
  text,
  pgTable,
  timestamp,
  numeric,
  pgEnum,
} from "drizzle-orm/pg-core";

export const CATEGORY_ENUM = pgEnum("category", ["DOG", "CAT", "BIRD", "FISH", "ACCESSORIES"]);

export const products = pgTable("products", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }),
  description: text("description"),
  price: numeric("price", { precision: 10, scale: 2 }).default("0.00"),
  quantity: integer("quantity").default(0),
  image: text("image"),
  category: CATEGORY_ENUM("category").default("DOG"),
  createdAt: timestamp("created_at").defaultNow(),
});