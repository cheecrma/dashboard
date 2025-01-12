import React from "react";

const WeatherWidget = () => {
  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        background: "#ffcccb",
        height: "85%", // 그리드 높이에 맞춤
      }}
    >
      <div
        className="draggable-handle"
        style={{
          cursor: "move",
          padding: "5px",
          backgroundColor: "#ff8888",
        }}
      >
        Weather
      </div>
      Seoul
    </div>
  );
};

export default WeatherWidget;
