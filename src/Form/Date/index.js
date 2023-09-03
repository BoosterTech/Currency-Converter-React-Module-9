import { useState } from "react";
import { useEffect } from "react";
import "./style.css";

const clockFormat = (date) =>
  date.toLocaleString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  
export const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div className="date">
    Today is 
    {" "}
    {clockFormat(date)}</div>;
};
