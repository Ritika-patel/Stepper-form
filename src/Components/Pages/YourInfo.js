import React, { useState, useContext } from "react";
import stepperContext from "../../context/stepperContext";
import validator from "validator";
const flexError = "flex text-center space-between my-4";
const SpanflexError = "text-red-600 text-sm absolute mt-4 right-[35px] ";
const Textinput =
  "placeholder:text-gray-500 placeholder:text-sm pl-3 w-full h-[40px] h-[40px] rounded-[5px] border border-black";

const YourInfo = () => {

  const context = useContext(stepperContext);
  const {nameError, emailError, phoneError, onChange, credentials, setCredentials, currentStep, handleGoBack, handleNextStep, handleSubmit } = context;






  return (
    <div className="mt-5 h-[450px] lg:h-auto">
      <h1>Personal Info</h1>
      <p className="mt-7 mb-7  text-gray-400">
        Please provide vour name, email address, and phone number.{" "}
      </p>

      <div>
        <div className={flexError}>
          <p>Name</p>
          <span className={SpanflexError}>{nameError}</span>
        </div>
        <input
          type="text"
          name="name"
          onChange={onChange}
          value={credentials.name}
          className={Textinput}
          placeholder="e.g. Stephen king"
        />
        <div className={flexError}>
          <p>Email Address</p>
          <span className={SpanflexError}>{emailError}</span>
        </div>
        <input
          type="email"
          name="email"
          onChange={onChange}
          value={credentials.email}
          className={Textinput}
          id="infoMail"
          placeholder="e.g. stephenking@lorem.com"
        />
        <div className={flexError}>
          <p>PhoneNumber</p>
          <span className={SpanflexError}>{phoneError}</span>
        </div>
        <input
          type="tel"
          name="phone"
          onChange={onChange}
          value={credentials.phone}
          className={Textinput}
          id="infoNumber"
          placeholder="e.g. 8989898989"
        />
      </div>

    </div>
  );
};

export default YourInfo;
