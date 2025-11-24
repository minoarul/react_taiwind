import React, { useState } from "react";

const ColorButton = () => {
  const [active, setActive] = useState(false);

  return (
    <>
    <div className="button">
      <button
        onClick={() => setActive(!active)}
        className={`px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300
          ${active ? "bg-purple-600" : "bg-blue-600"}
        `}
      >
        Click Me
      </button>

    </div>
      

    <div className="button1">
<div
        className={`mt-6 w-24 h-24 transition-all duration-300 justify-center items-center
          ${active ? "bg-yellow-400 rounded-full" : "bg-yellow-400 rounded-lg"}
        `}
      ></div>

      <p className="mt-4 text-xl font-bold">
        {active ? "The Button is Active!" : "Click the Button to Activate"}
      </p>
    </div>
      
    </>
  );
};

export default ColorButton;
