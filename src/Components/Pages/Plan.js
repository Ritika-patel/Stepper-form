import React, { useState, useContext } from "react";
import stepperContext from "../../context/stepperContext";





const Plan = () => {
  const SpanflexError = "text-red-600 text-sm h-2 mt-2 ";
  const context = useContext(stepperContext);
  const { planError, onChange, credentials, setCredentials, Monthplans, selectedPlanId, setSelectedPlanId,month, setMonth } = context;
  
  const handleSubPlanSelect = (subPlanName, temp) => {

    let newPrice = 0; // Default price
    if(subPlanName === 'Arcade'){
      newPrice = 9
    }
    else if (subPlanName === 'Advanced') {
      newPrice = 12;
    } else if (subPlanName === 'Pro') {
      newPrice = 15;
    }

    setCredentials(() => ({
      ...credentials,
      subPlan: subPlanName,
      plan: temp,
      price: temp === 'year' ? newPrice*10 : newPrice
    }));
    console.log(credentials)
  };

  const temp = month ? 'month' : 'year'

  return (
    <div className="mt-5 h-[450px] lg:h-auto">
      <h1>SELECT PLAN</h1>
      <p className="mt-4 mb-6  text-gray-400">
        You have the option of monthly or yearly billing.

        <div className={SpanflexError}>{planError}</div>
      </p>

      

      <div className="h-[240px] lg:h-auto flex flex-col lg:flex-row justify-between">
        {Monthplans.map((plan) => (
          <div
          key={plan.id}
          name="subPlan"
          value={credentials.subplan}
          className={`
          lg:flex-col lg:justify-between 
          py-2 px-4 flex flex-row border hover:border-gray-900 border-gray-300 lg:w-[150px] lg:h-[200px] rounded-[10px] 
          ${credentials.subPlan === plan.name ? 'border-gray-900' : ''}`}

          onClick={() => handleSubPlanSelect(plan.name, temp)}

          >
            <div className="flex py-2 lg:py-4">{plan.svg}</div>

            <div className="my-auto ml-4 lg:ml-0 lg:my-0">
              <div className="text-lg">{plan.name}</div>
              <p className="text-sm text-gray-400">
                {month ? plan.Price + "$/mo" : plan.Price*10 + "$/yr"}
              </p>
            </div>
          </div>
        ))}
      </div>


      <div className="mt-6 lg:mt-10 bg-blue-100/50 py-3 px-auto flex justify-center rounded-[10px]">

        <div className="flex justify-between w-[200px]">

        <span className="text-m font-medium">
        <p className={`${!month ? 'text-gray-500' : 'black'}`}>Monthly</p>
      </span>

      <label className="relative inline-flex items-center cursor-pointer">
        <input
          onClick={()=>( setMonth(!month), credentials.subPlan='')}
          type="checkbox"
          name="Plan"
          value={credentials.Plan}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>

      <span className="text-m font-medium">
      <p className={`${month ? 'text-gray-500' : 'black'}`}>Yearly</p>
      </span>
        </div>

      </div>


    </div>
  );
};

export default Plan;
