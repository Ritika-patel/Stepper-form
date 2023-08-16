import React, { useContext } from "react";
import stepperContext from "../../context/stepperContext";

const AddOns = () => {
  const context = useContext(stepperContext);
  const { UpdateAddOns, onChange, credentials, setCredentials, AddOnsData } = context;


  return (
    <div className="mt-5 h-[450px] lg:h-auto ">
      <h1>Pick add-ons</h1>
      <p className="mt-7 mb-7 text-gray-400">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="flex flex-col justify-between h-[270px]">
        <div className=" flex flex-col justify-between h-[280px]">
          {AddOnsData.map((data) => (
            <div
              key={data.id}
              className={`hover:border-[#473dff] flex p-4 rounded-[10px] border border-gray-300 justify-between items-center ${
                credentials[data.temp] ? 'border-[#473dff] ' : ''
              }`}
              // className={`hover:border-[#473dff] flex p-4 rounded-[10px] border border-gray-300 justify-between items-center`}
            >
              <div className="flex">
                <input
                  type="checkbox"
                  value={data.id}
                  className="accent-[#473dff] mx-3 lg:mx-6"
                  checked={credentials[data.temp]}
                  onChange={() => UpdateAddOns(data.temp)}
                />

                <div className="">
                  <p className="text-sm lg:text-lg font-semibold">
                    {data.service}
                  </p>
                  <span className="text-sm lg:text-[15px] text-gray-400">
                    {data.description}
                  </span>
                </div>
              </div>
              <p className="text-sm lg:text-lg text-[#473dff]">
                +${data.price}/mo
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddOns;
