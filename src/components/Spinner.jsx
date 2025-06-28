import React from "react";

const Spinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="w-6 h-6 border-4 border-[#ebdcaa] border-t-[#a78826] rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
