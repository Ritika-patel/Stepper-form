import React, { useState, useContext } from "react";
import stepperContext from "../../context/stepperContext";

const Summary = () => {
  const context = useContext(stepperContext);
  const {
    steps,
    currentStep,
    setCurrentStep,
    onChange,
    credentials,
    setCredentials,
    AddOnsData,
  } = context;
  console.log("this is my credential");
  console.log(credentials);

  const prices = {
    Arcade: 9,
    Advanced: 12,
    Pro: 15,
  };

  const price =
    credentials.plan === "month"
      ? prices[credentials.subPlan]
      : prices[credentials.subPlan] * 10;
  const priceTag = credentials.plan === "month" ? "/mo" : "/yr";

  return (
    <div className="mt-5 h-[450px] lg:h-auto">
      <h1>Finishing up</h1>
      <p className="mt-7 mb-7 text-gray-400">
        Double-check everything looks OK before confirming.
      </p>

      <div className="">
        <div className="p-6 bg-gray-100/70 rounded-[10px]">
          <div id="resumeMonth">
            <div className="flex  justify-between">
              <div>
                <h4 className="font-semibold">
                  {credentials.subPlan} ({credentials.plan}){" "}
                </h4>
                <button
                  onClick={() => setCurrentStep(2)}
                  className="text-sm text-gray-400 underline"
                >
                  Change
                </button>
              </div>
              <div className="font-semibold">
                +${price}
                {priceTag}
              </div>
            </div>

            <hr className="my-4" />

            {credentials.isOnlineService && (
              <div className="flex justify-between mt-3">
                <p className="text-sm text-gray-400">Online service</p>
                <label className="text-sm">+$1/mo</label>
              </div>
            )}

            {credentials.isLargerStorage && (
              <div className="flex justify-between mt-3">
                <p className="text-sm text-gray-400">Larger Storage</p>
                <label className="text-sm">+$2/mo</label>
              </div>
            )}

            {credentials.isCustomizableProfile && (
              <div className="flex justify-between mt-3">
                <p className="text-sm text-gray-400">Customizable profile</p>
                <label className="text-sm">+$2/mo</label>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="m-8 flex justify-between">
        <p className="text-sm text-gray-400">Total (per {credentials.plan})</p>
        <span className="font-semibold text-[#473dff]">
          +${credentials.price}
          {priceTag}
        </span>
      </div>
    </div>
  );
};

export default Summary;
