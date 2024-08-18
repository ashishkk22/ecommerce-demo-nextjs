"use client";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Typography } from "@/components/Typography";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { register } from "@/utils";
import toast from "react-hot-toast";
import { MESSAGES } from "@/types/messages";

const Login = () => {
  const router = useRouter();

  const [userInfo, setUserInfo] = useState({
    password: "",
    email: "",
  });

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await register({
        email: userInfo.email,
        password: userInfo.password,
      });

      router.push("/");
      toast.success(MESSAGES.REGISTER_SUCCESS);
    } catch {
      toast.success(MESSAGES.INTERNAL_ERROR);
    }
  };

  return (
    <div className=" bg-background font-sans text-textPrimary h-full w-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <Typography variant={"h3"} weight={"bold"} className="text-center">
          Sign Up
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
            Sign Up
          </Button>

          <Typography className="text-center mt-3">
            Already have an account?{" "}
            <Typography className="text-primary cursor-pointer" as="span" onClick={() => router.push("/login")}>
              Log in
            </Typography>
          </Typography>
        </form>
      </div>
    </div>
  );
};

export default Login;
