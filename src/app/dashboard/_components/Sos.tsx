"use client"; // Mark as a Client Component if using Next.js

import { useState } from "react";
import { findUserAndSendAlert, getBloodGroup } from "../../../../server/action";

const Sos = ({ userId }: { userId: string }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = async () => {
    setIsClicked(true);
    const bloodGroup = await getBloodGroup(userId);
    if (!bloodGroup) return null;
    console.log(bloodGroup);
    
    const data = await findUserAndSendAlert(bloodGroup.bloodGroup || '');
    console.log("SOS Alert Triggered!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        onClick={handleClick}
        className={`flex items-center justify-center
          w-64 h-64 rounded-full
          text-4xl font-bold text-white
          bg-red-500 hover:bg-red-600
          focus:outline-none focus:ring-4 focus:ring-red-300
          shadow-lg hover:shadow-xl
          transition-all duration-200 ease-in-out
          ${isClicked ? "animate-pulse" : ""} // Pulse animation when clicked
        `}
      >
        {isClicked ? "SOS Sent!" : "Alert SOS"}
      </div>
    </div>
  );
};

export default Sos;
