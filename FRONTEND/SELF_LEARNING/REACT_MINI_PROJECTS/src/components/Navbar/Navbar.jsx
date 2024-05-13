import React, { useContext } from "react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { GlobalContext } from "../../contexts/GlobalContext";
const Navbar = () => {
  const { theme, setTheme } = useContext(GlobalContext);
  return (
    <div className="flex items-center justify-between p-2">
      <img src="react-logo.png" className="w-8" alt="Logo" />

      <div className="flex items-center">
        {theme == "dark" ? (
          <div className="cursor-pointer" onClick={() => setTheme("")}>
            <MdDarkMode size={23} />
          </div>
        ) : (
          <div className="cursor-pointer" onClick={() => setTheme("dark")}>
            <MdOutlineLightMode size={23} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
