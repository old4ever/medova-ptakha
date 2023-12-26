import NextAuth, { type AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { db } from "~/server/db";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;

// Here we removed the export
const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (!profile?.email) {
        throw new Error("No profile");
      }

      await db.user.upsert({
        where: { email: profile.email },
        create: {
          email: profile.email,
          name: profile.name,
          avatar: profile.image,
        },
        update: { avatar: profile.image },
      });

      return true;
    },
  },
};

// For some reason ESLint doesn't like handler being any type, but if we provide explicit type, we get a NextJS build error
// https://stackoverflow.com/questions/76388994/next-js-13-4-and-nextauth-type-error-authoptions-is-not-assignable-to-type-n
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
