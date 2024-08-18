import CredentialsProvider from "next-auth/providers/credentials";

const baseURL = process.env.NEXT_PUBLIC_HOSTNAME + "login";

//TODO: add the Typescript
export const options = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const requestBody = {
          email: credentials?.email ?? "",
          password: credentials?.password ?? "",
        };

        const res = await fetch(baseURL, {
          method: "POST",
          body: JSON.stringify(requestBody),
          headers: { "Content-Type": "application/json" },
        });

        const resData = await res.json();

        if (resData.status === 400 || resData.status === 401 || resData.status === 403 || resData.status === 500) {
          return null;
        }
        if (resData.status === 200 || resData.status === 201) {
          return resData;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ token }) {
      return token;
    },
  },
  secret: process.env.JWT_SECRET,
};
