import { pgTable, integer, text } from "drizzle-orm/pg-core";

// test table
export const users = pgTable("users", {
  id: integer("id").generatedAlwaysAsIdentity(),
  name: text("name"),
})

// test table
export const inasal = pgTable("inasal", {
  id: integer("id").generatedAlwaysAsIdentity(),
  name: text("name"),
})
