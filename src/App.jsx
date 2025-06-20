import { useState } from "react";
import Header from "./Components/Header";
import UserInput from "./Components/UserInput";
import Results from "./Components/Results";
function App() {

  const [inputNumbers, setInputNumbers] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
  });

  const inputValid = inputNumbers.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
        setInputNumbers(prevInputNumbers => {
            return {
                ...prevInputNumbers,
                [inputIdentifier]: +newValue
        };
        });
    }
  
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} inputNumbers={inputNumbers} />
      {!inputValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputValid && <Results input={inputNumbers} />}
    </>
    
  );
}

export default App