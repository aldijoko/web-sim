import logo from "./logo.svg";
import "./App.css";
import SubmitButton from "./component/Button/SubmitButton";
import Header from "./containers/Header";
import Home from "./containers/Home";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Register from "./containers/Register";
import Forget from "./containers/Forget";
import Dashboard from "./containers/Dashboard";
import Sidebar from "./component/Sidebar";
import HeaderDashboard from "./component/HeaderDashboard";

function HomeLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

function DashboardLayout() {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget" element={<Forget />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
