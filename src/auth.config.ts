import { AuthError, NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

 async function getUser(username, password) {
  try {
    const user = await fetch(
        `${process.env.API_URI}/user/login`, { 
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ username, password }),
        }
    )
    if(user.status == 404) {
      throw new AuthError()
    }

    return user.json();
    
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

interface IUserIsAdmin {
  IsAdmin: boolean
} 

export const authConfig = {
  session: {
    strategy: "jwt"
  },
  providers: [Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ username: z.string(), password: z.string() })
          .safeParse(credentials);


        if (parsedCredentials.success) {
            const { username, password } = parsedCredentials.data;

            const user = await getUser(username, password);
            if (!user) return null;
            
            return user;
        }

        return null;
      },
    }),
  ],

  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnHome = nextUrl.pathname.startsWith('/home');
      const isOnLogin = nextUrl.pathname.startsWith('/login');
      if (isOnHome) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn && isOnLogin) {
        return Response.redirect(new URL('/home', nextUrl));
      }
      return true;
    },

    async session({ session, token }) {
      const tokenUser  = token.user as IUserIsAdmin
      session.user.isAdmin = tokenUser.IsAdmin;
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },

  }, 

  pages: {
    signIn: '/login',
  },

} satisfies NextAuthConfig;


