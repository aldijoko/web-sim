import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormControl, TextField } from "@mui/material";

export default function Forget() {
  const navigate = useNavigate();
  const navigateLogin = () => navigate("/");
  const navigateRegis = () => navigate("/register");

  const resetPassword = () => {
    alert("Password berhasil direset");
  };
  return (
    <div className="w-full h-full pt-16 bg-white">
      <div className="w-full flex justify-center items-center py-10">
        <form className="w-1/2 border p-10 rounded-md shadow-lg">
          <p className="text-2xl font-bold">Forgot Password?</p>
          <div className="my-8">
            <FormControl sx={{ width: "100%" }}>
              <TextField
                type="email"
                style={{ marginBottom: 20 }}
                placeholder="Masukkan Email"
              ></TextField>
            </FormControl>
          </div>
          <div className="flex justify-between gap-5 mt-5">
            <button
              className="w-full border rounded-md p-4 bg-orange-400 text-white font-bold text-lg"
              onClick={resetPassword}
            >
              Reset Password
            </button>
            <button
              className="w-full border rounded-md p-4 bg-white text-black font-bold text-lg opacity-50"
              onClick={navigateRegis}
            >
              Buat Akun
            </button>
          </div>
          <div className="mt-3 flex justify-center">
            <p className="text-sm">
              Kembali Login? Silahkan klik{" "}
              <button className="text-red-500" onClick={navigateLogin}>
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
