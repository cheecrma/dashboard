import React, { useState } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import WeatherWidget from "./components/WeatherWidget";
import ClockWidget from "./components/ClockWidget";
import MemoWidget from "./components/MemoWidget";

const App = () => {
  const getInitialLayout = () => {
    const savedLayout = localStorage.getItem("dashboardLayout");
    return savedLayout
      ? JSON.parse(savedLayout)
      : [
          { i: "weather", x: 0, y: 0, w: 6, h: 2 }, // 날씨 위젯: 6열 너비, 2행 높이
          { i: "clock", x: 6, y: 0, w: 6, h: 1 }, // 시계 위젯: 6열 너비, 1행 높이
          { i: "memo", x: 0, y: 2, w: 12, h: 3 }, // 메모 위젯: 12열 너비, 3행 높이
        ];
  };

  const [layout, setLayout] = useState(getInitialLayout);

  const handleLayoutChange = (newLayout) => {
    setLayout(newLayout);
    localStorage.setItem("dashboardLayout", JSON.stringify(newLayout));
  };

  return (
    <div
      style={{ padding: "20px", backgroundColor: "#f5f5f5", height: "100vh" }}
    >
      <h1>Draggable Dashboard</h1>
      <GridLayout
        className="layout"
        layout={layout}
        cols={12} // 전체 열 수
        rowHeight={50} // 1행의 높이 (픽셀 단위)
        width={1200} // 전체 그리드 너비
        maxRows={6} // 최대 행 수 제한 (6행)
        isResizable={false} // 크기 조절 비활성화
        draggableHandle=".draggable-handle" // 특정 핸들에서만 드래그 가능
        onLayoutChange={handleLayoutChange} // 레이아웃 변경 저장
        compactType="vertical" // 위젯 밀어내기 활성화
        preventCollision={false} // 충돌 허용
      >
        <div key="weather">
          <WeatherWidget />
        </div>
        <div key="clock">
          <ClockWidget />
        </div>
        <div key="memo">
          <MemoWidget />
        </div>
      </GridLayout>
    </div>
  );
};

export default App;
