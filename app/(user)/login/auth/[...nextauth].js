import { query } from "@/lib/db";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        username: {
          label: "Username",
          type: "text"
        },
        password: {
          label: "Password",
          type: "password"
        },
        authorize: async (credentials) => {
          const users = query("select * from users");
          if(users){
            return Promise.resolve(users)
          } else {
            return Promise.resolve(null)
          }
        }
      }
    })
  ],
  session: {
    jwt: true,
  },
  callbacks: {
    async jwt({token,user}){
      if(user){
        token.id = user.id
      }
      return token;
    },
    async session({session, token}){
      session.user.id = token.id;
      return session;
    }
  }
})