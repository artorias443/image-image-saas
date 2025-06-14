import NextAuth, { AuthOptions } from "next-auth"
import GitlabProvider from "next-auth/providers/gitlab"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "@/server/db/db"

export const authOptions: AuthOptions = {
  adapter: DrizzleAdapter(db),
  providers: [
    GitlabProvider({
      clientId:
        "ea1b775cd04ea22663fbc6265ad86587db67d3efb2dd4bafd92e1bd0df30d0e2",
      clientSecret:
        "gloas-8752a271ae978cf191dfeed198f9cd2ef49d50beefeabed6fbb39e2936f9d47c",
    }),
  ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
