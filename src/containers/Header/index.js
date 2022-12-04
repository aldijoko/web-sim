import logo from "../../assets/image/olin-logo.png";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { Button } from "@mui/material";

export default function Header() {
  return (
    <header className="flex items-center bg-white fixed z-50 inset-x-0 top-0 left-0 header w-full shadow-md">
      <nav className="flex justify-between items-center relative cb-base-container h-16">
        <div className="w-16">
          <img src={logo} />
        </div>
        <Button className="flex items-center gap-2">
          <HelpOutlineOutlinedIcon />
          <p>Pusat Bantuan</p>
        </Button>
      </nav>
    </header>
  );
}
