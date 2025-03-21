// app/api/otp/route.js
import { db } from "@/lib/db";
import { sendOTPEmail } from "@/utils/email";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();

  // Generate a random OTP (e.g., 6-digit number)
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  await db.verificationToken.create({
    data: {
      email: email,
      otp: otp,
    },
  });

  try {
    // Send OTP via email
    await sendOTPEmail(email, otp);

    return NextResponse.json({ message: "OTP sent successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send OTP" }, { status: 500 });
  }
}
