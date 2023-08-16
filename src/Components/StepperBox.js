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





// #stepInfo input {  width: 100%;  height: 40px;
//   border-radius: 5px;
//   border: solid 1px rgba(103, 92, 92, 0.628);
// }
// .buttonContainerStepOne {  position: relative;
//   background-color: rgba(0, 255, 51, 0);
//   padding-left: 380px;  padding-top: 73px;}

// .buttonContainerStepTwo {  display: flex;
//   justify-content: space-between;
//   background-color: rgba(0, 255, 51, 0);  padding-top: 75px;
// }
// .buttonContainerStepThree {
//   display: flex;  justify-content: space-between;
//   background-color: rgba(0, 255, 51, 0);  padding-top: 80px;
// }
// .buttonContainerStepFour {  display: flex;
//   justify-content: space-between;
//   background-color: rgba(0, 255, 51, 0);  padding-top: 39px;
// }

// .nextStep {  padding: 15px 20px 15px 20px;
//   width: 120px;  background-color: hsl(213, 96%, 18%);
//   color: white;  border-radius: 5px;
//   border: solid 1px rgba(0, 0, 255, 0);
//   cursor: pointer;  font-size: 16px;
// }
// .nextStep:hover {  background-color: hsla(243, 100%, 62%, 0.423);}

// .addOnButton {  display: flex;  justify-content: space-between;
//   align-items: center;  margin-top: 10px;
//   border: solid 1px hsl(229, 24%, 87%);
//   border-radius: 10px;  height: 80px;  padding: 0px 30px 0px 30px;
// }
// .addOnButton:hover {  border: solid 1px hsl(229, 77%, 52%);}
// .addOnButton p {  margin-top: 2px;  margin-bottom: 2px;
//   margin-left: 20px;  font-weight: bold;
// }

// .addOnButton span {  margin-left: 20px;  font-size: 15px;}

// .regroup {  display: flex;}

// .planMonth {  display: flex;  justify-content: space-between;}

// .planButton {  display: flex;  flex-direction: column;
//   border-radius: 10px;  width: 30%;  height: 200px;
//   border: solid 1px hsl(229, 24%, 87%);
//   background-color: white;  cursor: pointer;
// }

// .planButton:hover {  border: solid 1px hsl(213, 96%, 18%);}

// .planButton img {  margin-top: 14px;  margin-left: 8px;}

// .planButton p {  font-size: 18px;  margin-top: 50px;
//   margin-left: 8px;  margin-bottom: 8px;}

// .planButton span {  margin-left: 8px;  color: hsl(231, 11%, 63%);}

// .free {  cursor: pointer;  margin-left: 8px;  font-size: 12px;}

// #modeTotal {  color: hsl(231, 11%, 63%);}

// .switch {  justify-content: center;  display: flex;
//   width: 100%;  height: 56px;
//   background-color: hsl(217, 100%, 97%);
//   border-radius: 10px;  margin-top: 25px;}

// .check {  display: inline-block;  position: relative;
//   width: 40px;  height: 20px;  cursor: pointer;
//   overflow: hidden;  margin-top: 15px;  margin-left: 10px;
//   margin-right: 10px;}

// .check input {  position: absolute;  top: -30px;
//   left: -30px;  width: 0;  height: 0;}

// .check input + span {  position: absolute;
//   top: 0;  bottom: 0;  left: 0;
//   right: 0;  background: hsl(213, 96%, 18%);
//   border-radius: 20px;}

// .check input:checked + span {  background: hsl(213, 96%, 18%);}

// .check input + span:before {
//   content: "";  display: inline-block;  position: absolute;
//   top: 50%;  left: 4px;  width: 12px;
//   height: 12px;  background: white;  border-radius: 50%;
//   transform: translateY(-50%);  transition: all 0.5s;
// }
// .check input:checked + span:before {  left: 24px;}
// .free {  margin-top: 10px;}

// #planYear {  display: none;  justify-content: space-between;}
// #addonAnnee {  display: none;  flex-direction: column;}
// #addonMois {  flex-direction: column;}

// #resumeYear {  display: none;  flex-direction: column;}

// #resumeMonth {  display: flex;  flex-direction: column;}

// .containerResume {  width: 80%;
//   height: 15x0px;  background-color: hsl(229deg 28% 96%);
//   padding: 1px 30px 10px 20px;  border-radius: 10px;
// }
// .containerResume button {  border: none;
//   background-color: rgba(250, 235, 215, 0);
//   text-decoration: underline;  cursor: pointer;
//   padding-left: 0px;
// }
// .containerResume button:hover {  color: hsl(243, 100%, 62%);}
// .containerResume h4 {  margin-bottom: 0px;}
// .containerResume span {  display: block;  margin-top: 0px;
//   height: 1px;  background-color: hsl(231deg 18% 88%);}

// .flexResume {  display: flex;  justify-content: space-between;}
// .flexResume label {  display: flex;  align-items: center;}
// .flexTotal {  display: flex;  justify-content: space-between;
//   align-items: center;  padding: 0px 0px 0px 0px;
//   margin: 15px 0px 0px 0px;  width: 80%;
//   padding: 1px 20px 10px 20px;  border-radius: 10px;}
// .flexTotal span {  font-size: 20px;  color: hsl(243, 100%, 62%);}

// .stepAddOn input:checked {  color: blue;}

// .goBack {  border: none;  cursor: pointer;
//   background-color: rgba(255, 255, 255, 0);
//   font-size: 16px;  color: hsl(231, 11%, 63%);}

// .dollar {  margin-left: -239px;}
// .underMedia {  flex-direction: column;}
// #errorName {  color: red;  font-size: 12px;}
// #errorNum {  color: red;  font-size: 12px;}
// #errorMail {  color: red;  font-size: 12px;}
// .flexError {  display: flex;  text-align: center;
//   justify-content: space-between;
// }

// .flexError span {  padding-top: 19px;}
