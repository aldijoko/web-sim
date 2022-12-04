import React from "react";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import {
  FormControl,
  IconButton,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Checkbox from "../../component/Input/CheckBox";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";

export default function FormRegister({ backStep, nextStep }) {
  return (
    <form className="w-full border rounded-md p-5">
      <p className="font-bold text-xl">Register Akun OLIN</p>
      <div className="my-2">
        <FormControl sx={{ width: "100%" }}>
          <TextField
            style={{ marginBottom: 20 }}
            placeholder="Nama Perusahaan*"
          ></TextField>

          <TextField
            style={{ marginBottom: 20 }}
            type="password"
            autoComplete="current-password"
            placeholder="Kata Sandi*"
          ></TextField>

          <TextField
            style={{ marginBottom: 20 }}
            type="password"
            autoComplete="current-password"
            placeholder="Konfirmasi Kata Sandi*"
          ></TextField>
        </FormControl>
      </div>
      <div className="flex">
        <Checkbox />
        <p className="text-sm mt-2">
          Dengan membuat akun, Anda menyetujui{" "}
          <span className="text-orange-400">
            Ketentuan Penggunaan dan Pemberitahuan Privasi
          </span>{" "}
          Aplikasi OLIN
        </p>
      </div>

      <div className="flex justify-between gap-5 mt-5">
        <button
          className="w-full border rounded-md p-4 bg-white text-black font-bold text-lg opacity-50"
          onClick={backStep}
        >
          Kembali
        </button>
        <button
          className="w-full border rounded-md p-4 bg-orange-400 text-white font-bold text-lg"
          onClick={nextStep}
        >
          Register
        </button>
      </div>
    </form>
  );
}
