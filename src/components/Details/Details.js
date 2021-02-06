import React from "react";
import Datetime from "../Datetime/Datetime";
import Icons from "../Icons/Icons";
import "./Details.css";
export default function Details({ title, content, ...props }) {
  return (
    <li>
      <div className="details">
        <Datetime date={props.date} time={props.time} />
        <article className="content">
          <h2>{title}</h2>
          <div>{content}</div>
        </article>
        <Icons title={title} icon={props.icon} />
      </div>
    </li>
  );
}
