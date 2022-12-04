import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { Dougnut } from "../../component/Dougnut";
import { BarChart } from "../../component/BarChart";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Dashboard() {
  return (
    <div className="pt-16 pl-60 w-full">
      <div className="cb-base-container bg-blue-50 py-5 w-full h-full">
        <div className="w-full">
          <h1 className="font-bold text-2xl tracking-wider">Order Statistic</h1>
          <div className="mt-2 grid grid-cols-5 gap-5">
            <div className="w-full flex border rounded-md shadow-md p-3 bg-white">
              <div className="px-2">
                <p className="font-semibold text-base">Total Selling</p>
                <p className="text-3xl mt-2 font-bold">890</p>
              </div>
              <div className="flex flex-col items-center p-3">
                <KeyboardArrowUpOutlinedIcon style={{ color: "blue" }} />
                <p className="text-blue-700 text-xs font-semibold">20.5%</p>
              </div>
            </div>
            <div className="w-full border rounded-md shadow-md p-3 bg-white">
              <div className="px-2">
                <p className="font-semibold text-base">Expired Inventory</p>
                <p className="text-3xl mt-2 font-bold">5</p>
              </div>
            </div>
            <div className="w-full border rounded-md shadow-md p-3 bg-white">
              <p className="font-semibold text-base">Out of stock Inventory</p>
              <p className="text-3xl mt-2 font-bold">12</p>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-4 mt-5 gap-5">
          <div className="col-span-3">
            <div className="w-full h-full border rounded-md shadow-md p-3 bg-white">
              <div className="px-2">
                <div className="w-full flex justify-between">
                  <p className="font-semibold text-2xl">Sales & Purchase</p>
                  <button>
                    <MoreVertOutlinedIcon />
                  </button>
                </div>
                <div className="w-full h-full">
                  <BarChart />
                  <div className="w-full p-5 flex justify-between">
                    <div className="w-full flex flex-col items-center justify-center">
                      <p className="font-bold">Target</p>
                      <div className="flex items-center">
                        <ArrowDropUpIcon
                          fontSize="large"
                          style={{ color: "#00CC66" }}
                        />
                        <p className="text-[#00CC66] text-sm">231</p>
                      </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center">
                      <p className="font-bold">Last Week</p>
                      <div className="flex items-center">
                        <ArrowDropDownIcon
                          fontSize="large"
                          style={{ color: "#FF0000" }}
                        />
                        <p className="text-[#00CC66] text-sm">224</p>
                      </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center">
                      <p className="font-bold">Last Month</p>
                      <div className="flex items-center">
                        <ArrowDropUpIcon
                          fontSize="large"
                          style={{ color: "#00CC66" }}
                        />
                        <p className="text-[#00CC66] text-sm">2132</p>
                      </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center">
                      <p className="font-bold">This Year</p>
                      <div className="flex items-center">
                        <ArrowDropUpIcon
                          fontSize="large"
                          style={{ color: "#00CC66" }}
                        />
                        <p className="text-[#00CC66] text-sm">8123</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-3 col-span-1 gap-5">
            <div className="w-full flex border rounded-md shadow-md p-3 bg-white">
              <div className="flex items-center p-3">
                <AutoGraphOutlinedIcon
                  style={{ color: "blue" }}
                  fontSize="large"
                />
              </div>
              <div className="w-full px-2 flex flex-col items-end">
                <p className="font-semibold text-base">Total Transaksi</p>
                <p className="text-xl mt-2 font-bold">Rp. 80.000.000</p>
              </div>
            </div>
            <div className="w-full flex border rounded-md shadow-md p-3 bg-white">
              <div className="flex items-center p-3">
                <ReceiptOutlinedIcon
                  style={{ color: "blue" }}
                  fontSize="large"
                />
              </div>
              <div className="w-full px-2 flex flex-col items-end">
                <p className="font-semibold text-base">Sales</p>
                <p className="text-3xl mt-2 font-bold">289</p>
              </div>
            </div>
            <div className="flex border rounded-md shadow-md p-3 bg-white">
              <div className="flex items-center p-3">
                <RequestQuoteOutlinedIcon
                  style={{ color: "blue" }}
                  fontSize="large"
                />
              </div>
              <div className="w-full px-2 flex flex-col items-end">
                <p className="font-semibold text-base">Purchase</p>
                <p className="text-3xl mt-2 font-bold">289</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 mt-5 gap-5">
          <div className="w-full border rounded-md shadow-md p-5 bg-white">
            <div className="w-full flex justify-between">
              <p className="font-semibold text-2xl">Inventory</p>
              <button>
                <MoreVertOutlinedIcon />
              </button>
            </div>
            <div className="w-full">
              <div className="w-full flex justify-between mt-5 mb-3">
                <p className="text-lg text-gray-400">New order</p>
                <span className="w-8 flex items-center justify-center py-1 rounded-md bg-blue-300 text-sm">
                  3
                </span>
              </div>
              <div className="w-full flex justify-between items-center my-3">
                <p className="text-lg text-gray-400">Prepare order</p>
                <span className="w-8 flex items-center justify-center py-1 rounded-md bg-blue-300 text-sm">
                  5
                </span>
              </div>
              <div className="w-full flex justify-between my-3">
                <p className="text-lg text-gray-400">Waiting Pickup</p>
                <span className="w-8 flex items-center justify-center py-1 rounded-md bg-blue-300 text-sm">
                  12
                </span>
              </div>
              <div className="w-full flex justify-between my-3">
                <p className="text-lg text-gray-400">Sent</p>
                <span className="w-8 flex items-center justify-center py-1 rounded-md bg-blue-300 text-sm">
                  9
                </span>
              </div>
              <div className="w-full flex justify-between my-3">
                <p className="text-lg text-gray-400">Cancel</p>
                <span className="w-8 flex items-center justify-center py-1 rounded-md bg-blue-300 text-sm">
                  7
                </span>
              </div>
              <div className="w-full flex justify-between my-3">
                <p className="text-lg text-gray-400">Done</p>
                <span className="w-8 flex items-center justify-center py-1 rounded-md bg-blue-300 text-sm">
                  5
                </span>
              </div>
            </div>
          </div>
          <div className="w-full border rounded-md shadow-md p-3 bg-white">
            <p className="font-semibold text-base">Persentase Penjualan Obat</p>
            <div className="w-full flex flex-col">
              <Dougnut />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
