import { defineConfig } from "drizzle-kit"

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/server/db/schema.ts",
  dbCredentials: {
    host: "110.42.192.248",
    port: 5432,
    user: "postgres",
    password: "kM@onc@E!37N",
    database: "imooc-image-saas",
    ssl: {
      rejectUnauthorized: false
    }
  },
  verbose: true,
  strict: true,
})
