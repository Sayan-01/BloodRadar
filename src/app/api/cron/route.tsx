import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getDonorsNumbers } from "../../../../server/action";

const sendSMS = async (receiver: any, message: any) => {
  console.log("inside smsss", receiver, message);

  const accountSid = process.env.ACCOUNTSID;
  const authToken = process.env.AUTH_TOCKEN;

  const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;

  const headers = {
    Authorization: "Basic " + Buffer.from(`${accountSid}:${authToken}`).toString("base64"),
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const body = new URLSearchParams({
    To: `+91${receiver}`,
    From: "+13179618039",
    Body: message,
  });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: body,
    });

    const data = await response.json();
    console.log("sayan", data);

    if (response.ok) {
      return data;
    } else {
      return { success: false, message: "Error sending message", error: data };
    }
  } catch (error) {
    return { success: false, message: "Request failed", error };
  }
};

export async function GET() {
  try {
    const allNumbers = await getDonorsNumbers();

    for (let number of allNumbers) {
      console.log(number.number)
      await sendSMS(number.number,`Dear User,Your support can save lives! Please consider donating blood through our platform ${process.env.NEXT_URL}`);
    }

    return NextResponse.json({ message: "Emails sent successfully" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error sending emails" }, { status: 500 });
  }
}
