import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, otp } = await request.json();

  if (!email || !otp) return NextResponse.json({ error: "Email & otp not present" }, { status: 400 });

  const validation = await db.verificationToken.findFirst({
    where: {
      email,
    },
  });

  console.log("sayan",validation?.otp);
  

  if (otp === validation?.otp) {
    await db.verificationToken.delete({
      where: {
        email,
      },
    });
    return NextResponse.json({ message: "OTP verified successfully" }, { status: 200 });
  } else {
    return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });
  }
}
