import React from "react";
import "./Icons.css";
export default function Icons({ title, icon }) {
  return (
    <div className="icons">
      <span role="img" aria-label={title}>
        {icon}
      </span>
    </div>
  );
}
