import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase";

const handler = NextAuth({
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials): Promise<any> {
        return await signInWithEmailAndPassword(
          auth,
          credentials!.email,
          credentials!.password
        )
          .then((userCredential) => {
            if (userCredential.user) {
              return userCredential.user;
            } else {
              console.log("error");
              return null;
            }
          })
          .catch((error) => {
            console.log(error);
          });
      },
    }),
  ],
});

export { handler as GET, handler as POST };
