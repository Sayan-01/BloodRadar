"use server";
import { db } from "@/lib/db";
import { sendOTPEmail } from "@/utils/email";
import { auth } from "../auth";

export const IsUserEmailExist = async (email: string) => {
  const response = await db.user.findFirst({
    where: {
      email: email,
    },
  });

  if (response) return true;
  else return false;
};

export const sendCode = async (email: string, otp: string) => {
  await sendOTPEmail(email, otp);
};

export async function continueDetails(data: any) {
  const session = await auth();
  console.log(data);

  try {
    // Save the data to the database using Prisma
    await db.user.update({
      where: {
        email: session?.user?.email as string,
      },
      data: {
        age: data.age,
        gender: data.gender,
        bloodGroup: data.bloodGroup,
        location: data.location,
        lastDonation: data.lastDonation,
        status: data.status,
        number: data.number,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error creating donor:", error);
    return { success: false, error: "Failed to create donor" };
  }
}

export const findUserAndSendAlert = async (bloodGroup: string) => {
  const donersData = await db.user.findMany({
    where: {
      bloodGroup,
      role: "BLOOD_DONER",
    },
  });

  const sendSMS = async (receiver: any, message: any) => {
    console.log('inside smsss', receiver, message);
    
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
      console.log("sayan",data);
      

      if (response.ok) {
        return data;
      } else {
        return { success: false, message: "Error sending message", error: data };
      }
    } catch (error) {
      return { success: false, message: "Request failed", error };
    }
  };

  for (const doner of donersData) {
    console.log(doner.number, `Blood group ${doner.bloodGroup} is urgently required. Please visit ${process.env.NEXT_URL}`);
    
    await sendSMS(doner.number, `Blood group ${doner.bloodGroup} is urgently required. Please visit ${process.env.NEXT_URL}`);
  }
  console.log("ssss", donersData);
};

export const getBloodGroup = async (userId: string) => {
  const bloodGroup = await db.user.findUnique({
    where: { id: userId },
    select: {
      bloodGroup: true,
    },
  });
  if (bloodGroup) return bloodGroup;
};

export const getDonorsNumbers=async()=>{
  const allNumbers= await db.user.findMany({
    where:{
      role:'BLOOD_DONER'
    },
    select:{
      number:true
    }
  })

  return allNumbers
}