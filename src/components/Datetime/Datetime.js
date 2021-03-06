import React from "react";
import "./Datetime.css";
export default function Datetime({ date, time }) {
  return (
    <div className="datetime">
      <time dateTime={`${date} ${time}`}>
        <span>{date}</span>
        <span>{time}</span>
      </time>
    </div>
  );
}
