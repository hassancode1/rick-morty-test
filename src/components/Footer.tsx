import React from "react";
import RickLogo from "../assets/logo-rick.svg";

const Footer: React.FC = () => {
  return (
    <div className="flex p-8 gap-[150px] bg-[#FFFFFF]  border-t border-[#D9D9D9]">
      <img alt="logo" src={RickLogo} />
      <div className="space-y-2 text-[#1E1E1E]">
        <p className="font-semibold text-[#1E1E1E]">Resources</p>
        <p className="cursor-pointer hover:text-[#2C2C2C] transition-colors">
          Contact
        </p>
        <p className="cursor-pointer hover:text-[#2C2C2C] transition-colors">
          API Docs
        </p>
      </div>
    </div>
  );
};

export default Footer;
