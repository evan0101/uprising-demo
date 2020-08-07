import React from "react";
const Status = (props: any) => {
  const { online } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M24 24H0V0h24v24z" fill="none" />
      <circle fill={online ? "#55efc4" : "#ff7675"} cx="12" cy="12" r="8" />
    </svg>
  );
};
export default Status;
