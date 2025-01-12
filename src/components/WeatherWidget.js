import React from "react";

const WeatherWidget = () => {
  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        background: "#ffcccb",
      }}
    >
      {/* 드래그 핸들 */}
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
      <h3>Seoul</h3>
      <p>Sunny</p>
      <p>25°C</p>
    </div>
  );
};

export default WeatherWidget;
