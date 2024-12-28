import * as React from "react";
const Phone = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <rect width={40} height={40} fill="#DB4444" rx={20} />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.554 14.24-3.383-3.905c-.39-.45-1.105-.448-1.558.006l-2.782 2.787c-.828.829-1.065 2.06-.586 3.047a29.207 29.207 0 0 0 13.561 13.58c.986.479 2.216.242 3.044-.587l2.808-2.813c.455-.455.456-1.174.002-1.564l-3.92-3.365c-.41-.352-1.047-.306-1.458.106l-1.364 1.366a.462.462 0 0 1-.553.088 14.558 14.558 0 0 1-5.36-5.367.463.463 0 0 1 .088-.554l1.36-1.361c.412-.414.457-1.054.101-1.465v.001Z"
    />
  </svg>
);
export default Phone;
