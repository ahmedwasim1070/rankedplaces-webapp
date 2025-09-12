// Imports
import { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/prisma/prisma";

//
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({ profile, account }) {
      try {
        const providerUserId = account?.providerAccountId;
        if (!providerUserId || !profile?.email) {
          console.error("No profile found!");
          return false;
        }

        await prisma.users.upsert({
          where: { unique_id: providerUserId },
          update: { name: profile.name ?? "Unkown" },
          create: {
            unique_id: providerUserId,
            email: profile.email,
            name: profile.name ?? "Unkown",
          },
        });

        return true;
      } catch (error) {
        console.error("Sign-in error:", error);
        return false;
      }
    },

    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.unique_id = account.providerAccountId;
        token.guest = false;
      }

      if (token.unique_id && !token.guest) {
        const dbUser = await prisma.users.findUnique({
          where: { unique_id: token.unique_id },
        });
        if (dbUser) {
          token.email = dbUser.email;
          token.name = dbUser.name;
        }
      }

      return token;
    },

    async session({ session, token }) {
      session.user = {
        id: token.unique_id,
        name: token.name || null,
        email: token.email || null,
        guest: token.guest ?? false,
      };
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};
