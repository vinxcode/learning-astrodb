import { defineDb, defineTable, column } from 'astro:db';

const User = defineTable({
  columns: {
    userId: column.text(),
    name: column.text(),
    phone: column.text()
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { User }
});
