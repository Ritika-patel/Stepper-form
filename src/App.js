import "./App.css";
import StepperBox from "./Components/StepperBox";
import StepperState from "./context/stepperState";
import Form from "./Components/Form";

function App() {
  return (
    <StepperState>
      <div className="bg-blue-100/40 h-[700px] lg:h-auto  w-[375px] flex flex-col lg:flex-row lg:bg-[#FFFFFF] rounded-[10px] mt-[3%] mx-auto radius-[10px] lg:w-[1000px] lg:drop-shadow-box">
          <StepperBox />
          <div className="
           w-[345px] drop-shadow-box bg-[#FFFFFF] mx-auto relative bottom-[80px] rounded-[10px] 
           lg:rounded-none lg:block lg:bottom-0 lg:bg-none lg:filter-none lg:w-[50%] lg:h-[550px] lg:my-auto " >
          <Form />
          </div>
      </div>
    </StepperState>
  );
}

export default App;
