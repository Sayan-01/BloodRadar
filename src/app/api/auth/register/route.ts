import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
// import { User } from "../../../../../Models/user";
import { db } from "@/lib/db";

export const POST = async (req: Request) => {
  const { username, email, password, otp, expires, role } = await req.json();
  let hashPass = await bcrypt.hash(password, 10);
  const newUser = await db.user.create({
    data: {
      name: username,
      email,
      password: hashPass, // Assuming password hashing is done before this step
      varifiedToken: otp, // Ensure field names match Prisma schema
      varifiedTokenExpire: expires,
      isVarified: true,
      role: role,
    },
  });
  if (newUser) {
    return NextResponse.json({ message: "User created successfully" }, { status: 200 });
  } else {
    return NextResponse.json({ message: "User creation failed" }, { status: 500 });
  }
};
