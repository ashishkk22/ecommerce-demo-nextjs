import dbConnect from "@/db/config/dbConnect";
import User from "@/db/models/user";
import bcrypt from "bcrypt";

dbConnect();

//TODO: add the Typescript
export async function GET() {
  const users = await User.find({}).sort({ _id: -1 });

  const data = JSON.stringify(users);
  return new Response(data, {
    status: 200,
  });
}

export async function POST(request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return new Response(
      JSON.stringify({
        success: false,
        status: 400,
        message: "email and password are required",
        data: email,
      }),
    );
  }

  const user = await User.findOne({ email });

  if (!user) {
    return new Response(
      JSON.stringify({
        success: false,
        status: 400,
        message: "Invalid credentials",
      }),
    );
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (isPasswordValid) {
    return new Response(
      JSON.stringify({
        success: true,
        status: 200,
        user: { email: user?.email, id: user?.id },
      }),
    );
  } else {
    return new Response(
      JSON.stringify({
        success: false,
        status: 400,
        message: "Wrong Password",
      }),
    );
  }
}
