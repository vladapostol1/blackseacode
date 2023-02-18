import React from "react";

const Button = ({ styles, text, type }) => {
  return (
    <button
      type={type}
      className={`py-4 px-6 bg-green-gradient font-poppins font-medium text-[18px] rounded-lg text-primary outline-none ${styles}`}
    >
      {text}
    </button>
  );
};

export default Button;
