import React, { useState, useEffect } from "react";

const ClockWidget = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // 타이머 정리
  }, []);

  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        background: "#d5f4e6",
        height: "85%", // 그리드 높이에 맞춤
      }}
    >
      {/* 드래그 핸들 */}
      <div
        className="draggable-handle"
        style={{
          cursor: "move",
          padding: "5px",
          backgroundColor: "#88e4a6",
        }}
      >
        Clock
      </div>
      <h3>{time.toLocaleTimeString()}</h3>
    </div>
  );
};

export default ClockWidget;
