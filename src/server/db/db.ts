import { drizzle } from "drizzle-orm/node-postgres"
import * as schema from "@/server/db/schema"

export const db = drizzle(
  "postgresql://postgres:kM@onc@E!37N@110.42.192.248:5432/imooc-image-saas",
  { schema }
)
