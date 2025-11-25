import React from "react";

const Child = ({ number, message, person, items, products }) => {
  return (
    <div>
      <h3>Child Component Receiving Props</h3>

      <p>Number: {number}</p>
      <p>Message: {message}</p>

      <p>
        User: {person.name} from {person.village}
      </p>

      <p>Items Array:</p>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <p>Products (array of objects):</p>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} – Rs.{p.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Child;
