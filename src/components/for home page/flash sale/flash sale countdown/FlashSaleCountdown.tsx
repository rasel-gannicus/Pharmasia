'use client' ;
import Image from "next/image";

// --- using this component to show countdown timer for the left time in flash sale products
import React, { useState, useEffect } from 'react';

interface FlashSaleCountdownProps {
  endTime: string;
}

interface TimeLeft {
  d?: number;
  h?: number;
  m?: number;
  s?: number;
}

const FlashSaleCountdown: React.FC<FlashSaleCountdownProps> = ({ endTime }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = new Date(endTime).getTime() - new Date().getTime();
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        m: Math.floor((difference / 1000 / 60) % 60),
        s: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark the component as client-rendered
    setIsClient(true);

    if (isClient) {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      // Clear interval on component unmount or when endTime changes
      return () => clearInterval(timer);
    }
  }, [endTime, isClient]);

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval as keyof TimeLeft]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval as keyof TimeLeft]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      {isClient && timerComponents.length ? timerComponents : <span>Flash Sale Ended </span>}
    </div>
  );
};

export default FlashSaleCountdown;
