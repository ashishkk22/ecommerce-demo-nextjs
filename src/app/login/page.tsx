"use client";
import React, { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Typography } from "@/components/Typography";

const Login = () => {
  const router = useRouter();

  const [userInfo, setUserInfo] = useState({
    password: "Demo@123",
    email: "demo@gmail.com",
  });

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      signIn("credentials", {
        email: userInfo.email,
        password: userInfo.password,
        redirect: false,
      });

      router.push("/");
    } catch (err: unknown) {
      console.log(err);
    }
  };

  return (
    <div className=" bg-background font-sans text-textPrimary h-full w-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <Typography variant={"h3"} weight={"bold"} className="text-center">
          Login
        </Typography>
        <form onSubmit={submitHandler}>
          <Input
            label="Email"
            name="email"
            value={userInfo.email}
            onChange={(e) => setUserInfo((prev) => ({ ...prev, email: e.target.value }))}
          />
          <Input
            label="password"
            name="password"
            type="password"
            value={userInfo.password}
            className="mt-4"
            onChange={(e) => setUserInfo((prev) => ({ ...prev, password: e.target.value }))}
          />
          <Button className="mt-6" type="submit">
            Log in
          </Button>
          <Typography className="text-center mt-3">
            Don&apos;t have an account?{" "}
            <Typography className="text-primary cursor-pointer" as="span" onClick={() => router.push("/register")}>
              Register
            </Typography>
          </Typography>
        </form>
      </div>
    </div>
  );
};

export default Login;
