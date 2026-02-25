import React from "react";
import Navbar from "@components/common/Navbar";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex flex-col min-h-screen">
      <Navbar />
      <div className="w-full flex-1 mx-auto bg-[#f1f3f4] p-5 rounded-md">
        {children}
      </div>
    </div>
  );
};

export default LayoutWrapper;
