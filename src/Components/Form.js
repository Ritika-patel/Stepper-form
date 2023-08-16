import React, { useContext, useState } from "react";
import stepperContext from "../context/stepperContext";
import YourInfo from "../Components/Pages/YourInfo";
import Plan from "../Components/Pages/Plan";
import AddOns from "../Components/Pages/AddOns";
import Summary from "../Components/Pages/Summary";
import Thanks from "../Components/Pages/Thanks";

const Form = () => {




  const context = useContext(stepperContext);
  const {submitted, setSubmitted, handleSubmit, credentials, currentStep, handleGoBack, handleNextStep } = context;

  let currentStepComponent;
  switch (currentStep) {
    case 1:
      currentStepComponent = <YourInfo />;
      break;
    case 2:
      currentStepComponent = <Plan />;
      break;
    case 3:
      currentStepComponent = <AddOns />;
      break;
    case 4:
      currentStepComponent = <Summary />;
      break;
    default:
      currentStepComponent = null;
  }

  return (
    <div className="w-[345px] px-6 pb-8 lg:p-0 lg:w-auto">
      {submitted ? (
        <Thanks />

      ) : (
        <form className="" onSubmit={handleSubmit}>
          {currentStepComponent}

          <div
            className="
          lg:absolute lg:top-[480px] lg:left-0  lg:w-[520px]
          w-[375px] absolute right-0 top-[550px] left-[-15px]  bg-white p-2 
           flex flex-row justify-between "
          >
            <div>
              {currentStep > 1 && (
                <button
                  type="button"
                  className="text-gray-500 py-[10px]"
                  onClick={handleGoBack}
                >
                  Go Back
                </button>
              )}
            </div>

            <div>
              {currentStep < 4 && (
                <button
                  type="button"
                  className="hover:bg-[hsla(243, 100%, 62%, 0.423)] bg-[#02295a] px-[20px] py-[10px] w-[120px] text-white rounded-[5px] border border-[rgba(0, 0, 255, 0)] pointer text-[16px]"
                  onClick={handleNextStep}
                >
                  Next step
                </button>
              )}

              {currentStep === 4 && (
                <button
                  type="submit"
                  className="hover:bg-[hsla(243, 100%, 62%, 0.423)] bg-[#02295a] px-[20px] py-[10px] w-[120px] text-white rounded-[5px] border border-[rgba(0, 0, 255, 0)] pointer text-[16px]"
                  onClick={handleSubmit}
                >
                  continue
                </button>
              )}
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;
