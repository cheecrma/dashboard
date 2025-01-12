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
          { i: "weather", x: 0, y: 0, w: 6, h: 3 }, // 날씨 위젯: 3줄 높이
          { i: "clock", x: 6, y: 0, w: 6, h: 1 }, // 시계 위젯: 1줄 높이
          { i: "memo", x: 0, y: 3, w: 12, h: 3 }, // 메모 위젯: 3줄 높이
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
        cols={12} // 그리드 열 수
        rowHeight={50} // 행 높이: 각 위젯의 줄 크기 결정
        width={1200} // 전체 그리드 너비
        isResizable={false} // 크기 조절 비활성화
        draggableHandle=".draggable-handle" // 드래그 핸들
        onLayoutChange={handleLayoutChange} // 레이아웃 변경 시 처리
        compactType={null} // 자동 배치 비활성화
        preventCollision={true} // 충돌 방지
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
