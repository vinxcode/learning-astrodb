import { defineDb, defineTable, column } from 'astro:db';

const User = defineTable({
  columns: {
    userId: column.text(),
    name: column.text(),
    phone: column.text()
  }
})

const Comment = defineTable({
  columns: {
    user: column.text(),
    content: column.text(),
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { User, Comment }
});
