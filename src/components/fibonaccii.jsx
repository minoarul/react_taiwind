import { useState } from "react";

const Fibanocci = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(1);
  const [series, setSeries] = useState([0, 1]);

  const generateNext = () => {
    const next = num1 + num2;
    setNum1(num2);
    setNum2(next);
    setSeries([...series, next]);
  };

  const [numbers, setNumbers] = useState([]);

  const generateNumbers = () => {
    const arr = [];
    for (let i = 1; i <= 30; i++) {
      arr.push(i);
    }
    setNumbers(arr);
  };

  return (
    <>
    
      <div className="p-3 flex flex-col justify-center items-center gap-2">
        <h2>Fibonacci Series</h2>
        <p>{series.join(", ")}</p>

        <button className="bg-black text-white px-4 py-2" onClick={generateNext}>
          Next
        </button>
      </div>

      
      <div className="p-3 flex flex-col justify-center items-center gap-2 mt-2">
        <h2>Numbers 1 to 30</h2>

        <button className="bg-black text-white px-4 py-2" onClick={generateNumbers}>
          Click
        </button>

        <p>{numbers.join(", ")}</p>
      </div>
    </>
  );
};

export default Fibanocci;
