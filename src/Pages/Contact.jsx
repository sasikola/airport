import React from "react";
import { useSelector } from "react-redux";

function Contact() {
  const value = useSelector((state) => state);
  console.log(value);
  return <div>Contact</div>;
}

export default Contact;
