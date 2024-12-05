import React, { useState } from "react";

const Navbar = ({ handleClick }) => {
  return (
    <>
    <div className="buttons">
      <button  onClick={() => handleClick("home")} type="button">
        Home
      </button>
      <button onClick={() => handleClick("history")} type="button">History</button>
      <button onClick={() => handleClick("past work")} type="button">Past work</button>
      <button onClick={() => handleClick("staff")} type="button">Staff</button>
      <button onClick={() => handleClick("contact us")} type="button">Contact us</button>
    </div>
    </>
  );
};

export default Navbar;
