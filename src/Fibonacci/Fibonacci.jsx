import React, { useState } from "react";

function Fibonacci() {
  const [fibonacciResult, setFibonacciResult] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const fibonacci = (x) => {
    let fibSequence = [0, 1];
    for (let i = 2; i < x; i++) {
      fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
    }
    return fibSequence;
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFibonacci = () => {
    const inputNumber = parseInt(inputValue);
    if (!isNaN(inputNumber) && inputNumber > 0) {
      setFibonacciResult(fibonacci(inputNumber));
    } else {
      setFibonacciResult([]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-6 bg-blue-100 rounded-lg shadow-lg text-black">
      <label htmlFor="fibInput" className="font-semibold">
        Enter a number:
      </label>
      <input
        type="number"
        id="fibInput"
        value={inputValue}
        onChange={handleInputChange}
        className="border border-gray-400 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
      />
      <button
        onClick={handleFibonacci}
        className="bg-blue-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 text-white font-bold py-2 px-6 rounded transition duration-300"
      >
        Calculate Fibonacci
      </button>
      {fibonacciResult.length > 0 && (
        <div className="mt-4">
          <p className="font-bold text-xl">Fibonacci Sequence:</p>
          <ul className="list-disc pl-6">
            {fibonacciResult.map((num, index) => (
              <li key={index} className="text-lg">{num}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Fibonacci;
