import React from "react";

export default function ButtonLink(props) {
  console.log(props);
  return (
    <a href={props.href} className={props.className}>
      {props.children}
    </a>
  );
}
