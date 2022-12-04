import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../FormInput";
import FormRegister from "../FormRegister";
import StepOne from "../StepOne";
import StepTwo from "../StepTwo";

export default function Register() {
  const [page, setPage] = useState(0);

  const navigate = useNavigate();
  const navigateDashboard = () => navigate("/dashboard");

  const nextStep = () => {
    setPage((currPage) => currPage + 1);
  };

  const backStep = () => {
    setPage((currPage) => currPage - 1);
  };

  const submitStep = () => {
    navigateDashboard();
  };

  const formDisplay = () => {
    if (page == 0) {
      return <FormInput nextStep={nextStep} />;
    } else if (page == 1) {
      return <FormRegister backStep={backStep} nextStep={submitStep} />;
    }
  };

  const stepDisplay = () => {
    if (page == 0) {
      return <StepOne />;
    } else if (page == 1) {
      return <StepTwo />;
    }
  };
  return (
    <div className="w-full h-full pt-16 bg-white">
      <div className="w-full flex py-5">
        <div className="w-1/2 h-1/2 p-5">{stepDisplay()}</div>
        <div className="w-1/2 cb-base-container">{formDisplay()}</div>
      </div>
    </div>
  );
}
