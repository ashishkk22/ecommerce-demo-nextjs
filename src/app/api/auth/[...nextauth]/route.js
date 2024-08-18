import NextAuth from "next-auth";
import { options } from "./options";

//TODO: add the Typescript
const handler = NextAuth(options);

export { handler as GET, handler as POST };
