import logo from "../../assets/image/olin-logo.png";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Button } from "@mui/material";

export default function HeaderDashboard() {
  return (
    <header className="w-full flex items-center bg-blue-200 fixed top-0 right-0 shadow-md">
      <nav className="w-full flex justify-end items-center relative h-16">
        <Button className="">
          <HelpOutlineOutlinedIcon />
        </Button>
        <Button className="">
          <EmailOutlinedIcon />
        </Button>
        <div className="flex items-center gap-2 pr-5">
          <div className="w-9 h-9 bg-gray-400 rounded-full"></div>
          <div className="font-bold ">
            <p className="text-sm">Roman Dimiri</p>
            <p className="text-xs">Owner</p>
          </div>
        </div>
      </nav>
    </header>
  );
}
