import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import User from "@models/user";
import { connectToDB } from "@utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {},
  async signIn({ profile }) {
    try {
      // Serverless > Lambda > dynamodb
      await connectToDB();

      // Check if a user already exists
      // if not, create a new user
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
});
