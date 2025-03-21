import React from "react";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  if (session?.user) redirect("/");
  return <div className="bg-zinc-950 text-white h-screen flex items-center justify-center w-full">{children}</div>;
};

export default layout;
