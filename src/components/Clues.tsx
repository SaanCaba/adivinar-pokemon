import React from "react";
import './Clues.css'

interface Props{
    message: string
}

function Clues({message}:Props) {
  return <span className="message">{message}</span>;
}

export default Clues;
