import { db } from '@/config/db';
import type { AuthOptions, NextAuthOptions, User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { UpstashRedisAdapter } from '@auth/upstash-redis-adapter';
import { Adapter } from 'next-auth/adapters';

export const authConfig: AuthOptions = {
  adapter: UpstashRedisAdapter(db) as Adapter,
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      const dbUser = (await db.get(`user:${token.id}`)) as User | null;
      if (!dbUser) {
        token.id = user.id;
        return token;
      }
      return {
        id: dbUser.id,
        email: dbUser.email,
        name: dbUser.name,
        image: dbUser.image,
      };
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.image = token.image as string;
      }
      return session;
    },
    redirect() {
      return '/main';
    },
  },
  pages: {
    signIn: '/signin',
  },
};
