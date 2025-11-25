import React from "react";
import Child from "./Child";

const Parent = () => {
  const datas = 20; // number
  const message = "Hello from Parent"; // string

  const user = {
    name: "Kumar",
    village: "Madurai",  // changed key city -> village
  };

  const numbers = [1, 2, 3, 4, 5];

  const products = [
    { id: 1, name: "Boost", price: 10 },
    { id: 2, name: "Coffee", price: 15 },
    { id: 3, name: "Milk", price: 20 },
  ];

  return (
    <>
      <h2>Parent Component</h2>

      <Child
        number={datas}
        message={message}
        person={user}
        items={numbers}
        products={products}
      />
    </>
  );
};

export default Parent;
