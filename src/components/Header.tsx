import React from "react";
import RickLogo from "../assets/logo-rick.svg";
import { useNavigate } from "react-router";

interface HeaderProps {
  showGetStarted?: boolean;
  onGetStartedClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  showGetStarted = true,
  onGetStartedClick,
}) => {
  const navigate = useNavigate();
  return (
    <div className=" border-b border-[#D9D9D9] flex p-8 justify-between items-center bg-white">
      <img alt="logo" src={RickLogo} onClick={() => navigate("/")} />
      {showGetStarted && (
        <button
          className="px-6 py-2 bg-[#E3E3E3] rounded-md transition-all border border-[#767676] hover:bg-[#D3D3D3]"
          onClick={onGetStartedClick}
        >
          Get Started
        </button>
      )}
    </div>
  );
};

export default Header;
