import React from "react";
import { Link } from "react-router-dom";

function Women() {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/women">Women</Link></li>
      </ul>

      <h3>Women Items:</h3>

      <ul>
        <li><Link to="/women/grooming">Grooming</Link></li>
        <li><Link to="/women/shirt">Shirt</Link></li>
        <li><Link to="/women/trouser">Trouser</Link></li>
        <li><Link to="/women/jewellery">Jewellery</Link></li>
      </ul>
    </div>
  );
}

export default Women;