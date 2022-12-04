import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";

export default function StepOne() {
  return (
    <div className="relative">
      <div className="flex justify-center items-center gap-5">
        <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center">
          <LocationOnOutlinedIcon fontSize="large" style={{ color: "white" }} />
        </div>
        <p className="font-bold text-xl">Pendaftaran Sarana</p>
      </div>
      <div className="h-20 relative">
        <div className="w-1 h-20 left-[34.5%] absolute bg-gray-200"></div>
      </div>
      <div className="flex items-center gap-5 absolute left-[31%]">
        <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center">
          <TaskOutlinedIcon fontSize="large" style={{ color: "white" }} />
        </div>
        <p className="font-bold text-xl text-gray-300">Register</p>
      </div>
    </div>
  );
}
