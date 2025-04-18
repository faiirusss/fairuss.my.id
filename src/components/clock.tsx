"use client"
import { useState, useEffect } from "react";


const Clock = () => {
  const [time, setTime] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mark component as mounted
    setMounted(true);

    // Initial time set
    updateTime();

    // Update time every second
    const timer = setInterval(updateTime, 1000);

    // Clean up on unmount
    return () => clearInterval(timer);
  }, []);

  function updateTime() {
      const jakartaTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date());
  
      setTime(jakartaTime);
    }
  
    // Return a static placeholder during server-side rendering
    if (!mounted) {
      return <p className="text-sm">Jakarta Time</p>;
    }
  return (
    <p className="text-sm hidden md:block" suppressHydrationWarning>
      {time}
    </p>
  );
};

export default Clock