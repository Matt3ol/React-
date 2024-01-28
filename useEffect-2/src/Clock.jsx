import { useState, useEffect } from "react";

export function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <h2>Ora attuale: {currentTime.toLocaleTimeString()}</h2>;
}
