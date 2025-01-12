import React, { useState } from "react";

const MemoWidget = () => {
  const [memo, setMemo] = useState("");

  const handleChange = (e) => setMemo(e.target.value);

  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        background: "#c3ddf0",
        height: "85%", // 그리드 높이에 맞춤
      }}
    >
      <div
        className="draggable-handle"
        style={{
          cursor: "move",
          padding: "5px",
          backgroundColor: "#88b4d8",
        }}
      >
        Memo
      </div>
      <textarea
        style={{
          width: "550px",
          height: "50px",
          borderRadius: "5px",
          padding: "5px",
          resize: "none", // 크기 조절 비활성화
        }}
        placeholder="Write your memo here..."
        value={memo}
        onChange={handleChange}
      />
    </div>
  );
};

export default MemoWidget;
