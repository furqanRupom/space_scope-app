import type { NextAuthOptions } from "next-auth";
import GoogleProviders from "next-auth/providers/google";
import GithubProviders from "next-auth/providers/github";
import CredentialsProviders from "next-auth/providers/credentials";
import prisma from "@/prisma/client";
import bcrypt from "bcryptjs";

export const options: NextAuthOptions = {
  providers: [
    GoogleProviders({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_KEY as string,
    }),
    GithubProviders({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_KEY as string,
    }),
    CredentialsProviders({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password }: any = credentials;
        try {
          const user = await prisma.user.findUnique({
            where: {
              email: email,
            },
          });
          if (!user) {
            return null;
          }
          const passwordMatched = await bcrypt.compare(password, user.password);
          if (!passwordMatched) {
            return null;
          }
          return user;
        } catch (error: any) {
          console.log(error.message);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    signOut: "/login",
  },
  secret: process.env.NEXT_AUTH_SECRET,
};
