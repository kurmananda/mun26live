import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import connectDB from "../../../lib/mongo";
import crntuser from "../../../models/user";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret:'abcdef'
  ,
  callbacks: {
    // On user sign-in, check if the user exists or create a new user
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { id, name, email } = user;

        try {
          await connectDB();
          const userExists = await crntuser.findOne({ email });

          if (!userExists) {
            // Create a new user if one doesn't already exist
            const res = await fetch("https:muniist.vercel.app/api/contact", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id,
                name,
                email,
              }),
            });

            if (!res.ok) {
              console.log("Error creating user");
              return false;
            }
          }

          return true; // Allow sign-in
        } catch (error) {
          console.log("Sign-in error:", error);
          return false;
        }
      }

      return false; // Disallow sign-in if the provider is not Google
    },


  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
