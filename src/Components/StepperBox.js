import React, { useContext } from "react";
import stepperContext from "../context/stepperContext";

const StepperBox = () => {
  const context = useContext(stepperContext);
  const { steps, currentStep, setCurrentStep, handleStep } = context;

  return (
    <div
      id="display"
      className="
      lg:w-[274px] lg:h-[568px]  lg:mx-0 lg:pl-7 
      w-[375px]  bg-[#1e10ba] mx-auto lg:rounded-[10px]" 
    >
      <div className="
      lg:h-[270px] lg:flex-col lg:w-auto lg:mx-0 
      mx-auto w-[180px] h-[130px] mt-10  bg-[rgba(220,20,60,0)] flex justify-between">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-row"
          >
            <div type="button" onClick={()=>handleStep(step.id)}  className={` cursor-pointer  lg:mr-3 flex justify-center items-center w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] rounded-full border border-white ${step.id === currentStep ? 'bg-gray-100 text-black' : 'text-white' }`}>
              <p className=" my-auto mx-auto">{step.id}</p>
            </div>
            <div className="hidden lg:block mt-[1%]">
              <p className="uppercase text-xs text-gray-400">Step {step.id}</p>
              <p className=" uppercase text-[15px] text-white">{step.plan}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepperBox;




