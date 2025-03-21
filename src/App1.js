import React from "react";

export default function App1(props) {
  return <div style={{ backgroundColor: "yellow" }}>
    {props.name}-{props.age}
    </div>;
}