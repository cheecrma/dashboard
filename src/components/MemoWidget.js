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
      }}
    >
      {/* 드래그 핸들 */}
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
          width: "100%",
          height: "100px",
          borderRadius: "5px",
          padding: "5px",
        }}
        placeholder="Write your memo here..."
        value={memo}
        onChange={handleChange}
      />
    </div>
  );
};

export default MemoWidget;
