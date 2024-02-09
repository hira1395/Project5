import React from "react";
import { Link } from "react-router-dom";
const Products = (props) => {
  return (
    <div>
      <ul>
        <li>
          {" "}
          <Link to="/products/1"> Product 1 </Link>
        </li>
        <li>
          {" "}
          <Link to="/products/1"> Product 2 </Link>
        </li>
        <li>
          {" "}
          <Link to="/products/1"> Product 3 </Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;
