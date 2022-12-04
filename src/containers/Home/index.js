// import { TextField } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import SubmitButton from "../../component/Button/SubmitButton";
import BackgroundHeader from "../../assets/image/background-image.png";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";

export default function Home() {
  const navigate = useNavigate();
  const navigateTo = () => navigate("/register");
  const navigateForget = () => navigate("/forget");
  const navigateDashboard = () => navigate("/dashboard");
  return (
    <main className="w-full h-full pt-16 ">
      <section
        className=" w-full bg-blue-200"
        style={{ maxHeight: "calc(100vh - 56px)" }}
      >
        <div className="flex w-full h-1/2">
          <div className="w-1/2 flex flex-col justify-center cb-base-container ml-12">
            <h1 className="text-5xl font-semibold leading-[50px] tracking-wider">
              Selamat Datang di Solusi
              <br /> Perangkat Lunak Farmasi
            </h1>
            <p className="text-2xl">Sistem Manajemen Apotek Online</p>
          </div>
          <div className="w-1/2 flex justify-end pt-5">
            <img src={BackgroundHeader} alt="background" className="w-4/5" />
          </div>
        </div>
        <div className="cb-base-container flex flex-col justify-center items-center py-4">
          <p className="font-bold text-xl">
            Silahkan masuk ke dalam akun anda dan kelola apotek anda.
          </p>
          <div className="flex flex-col">
            <FormControl variant="outlined">
              <p className="text-lg font-bold">EMAIL</p>
              <Input
                startAdornment={
                  <InputAdornment position="start">
                    <EmailOutlinedIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl style={{ marginTop: 10 }}>
              <p className="text-lg font-bold">PASSWORD</p>
              <Input
                type="password"
                startAdornment={
                  <InputAdornment position="start">
                    <HttpsOutlinedIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
            <div className="flex justify-between items-center">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked size="small" />}
                  label="Ingat saya"
                />
              </FormGroup>
              <div>
                <button
                  className="text-sm text-red-500"
                  onClick={navigateForget}
                >
                  Lupa Password?
                </button>
              </div>
            </div>
            <SubmitButton onClick={navigateDashboard} />
            <p className="text-sm mt-3">
              Belum registrasi? Silahkan klik{" "}
              <button className="text-red-500" onClick={navigateTo}>
                Daftar
              </button>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
