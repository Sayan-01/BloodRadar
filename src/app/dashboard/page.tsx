import React from "react";
import { auth } from "../../../auth";
import DonorPage from "./_components/DonorPage";
import SeekerPage from "./_components/SeekerPage";

const page = async () => {
  const session = await auth();

  //@ts-expect-error
  if (session?.user?.role === "BLOOD_DONER") {
    return <DonorPage/>
    //@ts-expect-error
  } else if (session?.user?.role === "BLOOD_SEEKER") {
    return <SeekerPage userId={session?.user?.id || ''}/>
  } else return null;
};

export default page;
