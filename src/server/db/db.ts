import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "@/server/db/schema"

const queryClient = postgres(
  "postgres://postgres:kM@onc@E!37N@110.42.192.248:5432/imooc-image-saas"
)
export const db = drizzle(queryClient, { schema })
