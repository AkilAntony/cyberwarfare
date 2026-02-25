import Navbar from "@/components/common/Navbar";
import React from "react";
 

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex relative flex-col min-h-screen">
    <div className="sticky top-0 w-full z-10">
        <Navbar />
    </div>
      <div className="w-full flex-1 mx-auto bg-[#f1f3f4] p-5 rounded-md">
        {children}
      </div>
    </div>
  );
};

export default LayoutWrapper;
