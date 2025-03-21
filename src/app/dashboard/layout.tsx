// app/dashboard/layout.tsx
import React from "react";
import { auth } from "../../../auth";
import { DonorSidebar } from "./_components/DonorSidebar";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
   const session = await auth();
  return (
    <div className="flex h-screen bg-slate-100">
     
      {
        //@ts-expect-error
      session?.user?.role === "BLOOD_DONER" ? <DonorSidebar/>:  <></>}
      
      <main className="flex-1 overflow-y-auto p-6">{children}</main>
    </div>
  );
}
