import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import type { JWT } from 'next-auth/jwt';
import type { Session, User as NextAuthUser } from 'next-auth';

interface CustomSession extends Session {
  user: {
    id?: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials || {};

        // Hardcoded validation for demo
        if (email === 'admin' && password === '123') {
          return {
            id: '1',
            email: 'admin@example.com',
            name: 'Admin User',
          };
        }

        // Custom error messages based on validation
        if (!email || !password) {
          throw new Error(
            JSON.stringify({
              code: 'MISSING_CREDENTIALS',
              message: 'Email and password are required',
            })
          );
        }

        if (email !== 'admin') {
          throw new Error(
            JSON.stringify({
              code: 'INVALID_EMAIL',
              message: 'Email not found',
            })
          );
        }

        if (password !== '123') {
          throw new Error(
            JSON.stringify({
              code: 'INVALID_PASSWORD',
              message: 'Incorrect password',
            })
          );
        }

        throw new Error(
          JSON.stringify({
            code: 'INVALID_CREDENTIALS',
            message: 'Invalid email or password',
          })
        );
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: NextAuthUser | null }) {
      if (user) {
        token.id = (user as any).id;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      const customSession = session as CustomSession;
      if (token.id && customSession.user) {
        customSession.user.id = token.id as string;
      }
      return customSession;
    },
  },
  pages: {
    signIn: '/auth/login',
  },
});
