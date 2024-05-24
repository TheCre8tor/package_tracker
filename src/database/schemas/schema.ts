import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core';

export const UserEntity = pgTable(`users`, {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 255 }).notNull(),
});
