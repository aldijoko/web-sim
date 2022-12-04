import React from "react";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import {
  FormControl,
  IconButton,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";

export default function FormInput({ nextStep }) {
  const [bidang, setBidang] = React.useState("");
  const handleChange = (event) => {
    setBidang(event.target.value);
  };

  const [provinsi, setProvinsi] = React.useState("");
  const handleChangeProv = (event) => {
    setProvinsi(event.target.value);
  };

  const [kota, setKota] = React.useState("");
  const handleChangeKota = (event) => {
    setKota(event.target.value);
  };

  const [kecamatan, setKecamatan] = React.useState("");
  const handleChangeKec = (event) => {
    setKecamatan(event.target.value);
  };
  return (
    <form className="w-full border rounded-md p-5">
      <p className="font-bold text-xl">Input Data Perusahaan</p>
      <div className="my-2">
        <FormControl sx={{ width: "100%" }}>
          <Select
            style={{ marginBottom: 20 }}
            onChange={handleChange}
            value={bidang}
            displayEmpty
            placeholder="Bidang Usaha*"
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">Bidang Usaha*</MenuItem>
            <MenuItem value="Farmasi">Farmasi</MenuItem>
            <MenuItem value="Kesehatan">Kesehatan</MenuItem>
            <MenuItem value="Obat">Obat</MenuItem>
          </Select>

          <TextField
            style={{ marginBottom: 20 }}
            placeholder="Nama Perusahaan*"
          ></TextField>

          <TextField
            style={{ marginBottom: 20 }}
            placeholder="NPWP Perusahaan*"
          ></TextField>

          <TextField
            style={{ marginBottom: 20 }}
            placeholder="Alamat sesuai NPWP*"
          ></TextField>

          <Select
            style={{ marginBottom: 20 }}
            onChange={handleChangeProv}
            value={provinsi}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">Provinsi</MenuItem>
            <MenuItem value="DKIJakarta">DKI Jakarta</MenuItem>
            <MenuItem value="Jabar">Jawa Barat</MenuItem>
            <MenuItem value="Jateng">Jawa Tengah</MenuItem>
          </Select>
          <Select
            style={{ marginBottom: 20 }}
            onChange={handleChangeKota}
            value={kota}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">Kota / Kabupaten</MenuItem>
            <MenuItem value="Jakarta">Jakarta</MenuItem>
            <MenuItem value="Semarang">Semarang</MenuItem>
            <MenuItem value="Bandung">Bandung</MenuItem>
          </Select>
          <Select
            style={{ marginBottom: 20 }}
            onChange={handleChangeKec}
            value={kecamatan}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">Kecamatan</MenuItem>
            <MenuItem value="Jakbar">Jakarta Barat</MenuItem>
            <MenuItem value="Jaktim">Jakarta Timur</MenuItem>
            <MenuItem value="Jaksel">Jakarta Selatan</MenuItem>
          </Select>

          <TextField
            style={{ marginBottom: 20 }}
            placeholder="Kode Post*"
          ></TextField>
        </FormControl>
      </div>
      <div className="my-5">
        <p className="font-bold text-lg">Upload Kelengkapan Data</p>
        <div className="border rounded-md">
          <div className="w-full flex gap-2 bg-blue-500 p-3 rounded-tr-md rounded-tl-md">
            <DescriptionOutlinedIcon style={{ color: "white" }} />
            <p className="text-white">NIB*</p>
          </div>
          <div className="h-[150px] flex flex-col justify-center items-center">
            <IconButton aria-label="upload picture" component="label">
              <input hidden accept="image/*" type="file" />
              <CloudDownloadOutlinedIcon />
            </IconButton>
            <p>Unggah NIB Valid</p>
          </div>
        </div>
      </div>
      <button
        className="w-full border rounded-md py-2 px-5 bg-orange-400 text-white font-bold"
        onClick={nextStep}
      >
        Selanjutnya
      </button>
    </form>
  );
}
