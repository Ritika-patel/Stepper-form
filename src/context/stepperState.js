import React, { useState, useRef, useEffect } from "react";
import StepperContext from "./stepperContext";

const StepperState = (props) => {
  //new
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    subPlan: "",
    isLargerStorage: false,
    isCustomizableProfile: false,
    isOnlineService: false,
    price: 0,
  });
  //new

  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    { id: 1, plan: "your info" },
    { id: 2, plan: "Select plan" },
    { id: 3, plan: "add-ons" },
    { id: 4, plan: "summary" },
  ];

  const handleGoBack = (e) => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const [error, setError] = useState(false);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState(" ");
  const [phoneError, setPhoneError] = useState(" ");
  const [planError, setPlanError] = useState("");

  const handleError = () => {
    if (currentStep >= 0 && currentStep < steps.length) {
      if (currentStep === 1) {
        if (credentials.name === "") {
          setNameError("Fill details");
        } else {
          setNameError("");
        }

        if (credentials.email === "") {
          setEmailError("Fill details");
        } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
          setEmailError("Invalid email format");
        } else {
          setEmailError("");
        }

        if (credentials.phone === "") {
          setPhoneError("Fill details");
        } else if (!/^[0-9]{10}$/.test(credentials.phone)) {
          setPhoneError("Invalid ph format");
        } else {
          setPhoneError("");
        }
      } else if (currentStep == 2) {
        if (credentials.plan == "" || credentials.subPlan == "") {
          setPlanError("select plan");
        } else {
          setPlanError("");
        }
      }
    }
  };


  useEffect(() => {
    handleError();
  }, [credentials.name, credentials.email, credentials.phone, credentials.plan]);


  const handleNextStep =  () => {
    if (currentStep === 1) {
      if (nameError === '' && emailError === '' && phoneError === '') {
        setCurrentStep(currentStep + 1);
      }
    } else if (currentStep === 2) {
      if (planError === '') {
        setCurrentStep(currentStep + 1);
      }
    } else {
      setCurrentStep(currentStep + 1);
    }
  };
  



  const handleStep = (x) => {
    if (x == 1) {
      setCurrentStep(x);
    } else if (x == 2) {
      if (nameError == "" && emailError == "" && phoneError == "")
        setCurrentStep(x);
      else alert("complete this step first");
    } else if (x == 3) {
      if (
        nameError !== "" ||
        emailError !== "" ||
        phoneError !== "" ||
        planError !== ""
      )
        alert("complete previous steps");
      else setCurrentStep(x);
    } else if (x == 4) {
      if (
        nameError !== "" ||
        emailError !== "" ||
        phoneError !== "" ||
        planError !== ""
      )
        alert("complete previous steps");
      else setCurrentStep(4);
    }
  };

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
    console.log(credentials);
  };

  // ADD ONS START
  const AddOnsData = [
    {
      id: 1,
      service: "Online service",
      description: "Access to multiplayer game",
      price: 1,
      temp: "isOnlineService",
    },
    {
      id: 2,
      service: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: 2,
      temp: "isLargerStorage",
    },
    {
      id: 3,
      service: "Customizable profile",
      description: "Custom theme on profile",
      price: 2,
      temp: "isCustomizableProfile",
    },
  ];

  // ADD OND END

  // PLAN START
  const [selectedPlanId, setSelectedPlanId] = useState(null);
  const [month, setMonth] = useState(true);

  const Monthplans = [
    {
      id: 1,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
        >
          <g fill="none" fillRule="evenodd">
            <circle cx="20" cy="20" r="20" fill="#FFAF7E" />
            <path
              fill="#FFF"
              fillRule="nonzero"
              d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"
            />
          </g>
        </svg>
      ),
      name: "Arcade",
      Price: 9,
    },
    {
      id: 2,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
        >
          <g fill="none" fillRule="evenodd">
            <circle cx="20" cy="20" r="20" fill="#F9818E" />
            <path
              fill="#FFF"
              fillRule="nonzero"
              d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"
            />
          </g>
        </svg>
      ),
      name: "Advanced",
      Price: 12,
    },
    {
      id: 3,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
        >
          <g fill="none" fillRule="evenodd">
            <circle cx="20" cy="20" r="20" fill="#483EFF" />
            <path
              fill="#FFF"
              fillRule="nonzero"
              d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"
            />
          </g>
        </svg>
      ),
      name: "Pro",
      Price: 15,
    },
  ];
  // PLAN END

  return (
    <StepperContext.Provider
      value={{
        handleStep,
        planError,
        nameError,
        emailError,
        phoneError,
        AddOnsData,
        onChange,
        credentials,
        setCredentials,
        Monthplans,
        selectedPlanId,
        setSelectedPlanId,
        month,
        setMonth,
        steps,
        currentStep,
        setCurrentStep,
        handleGoBack,
        handleNextStep,
      }}
    >
      {props.children}
    </StepperContext.Provider>
  );
};

export default StepperState;
