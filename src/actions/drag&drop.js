import React from "react";

export const DraggableItem = ({ item, onDragStart }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", item); // Thiết lập dữ liệu kéo và thả
    onDragStart(item); // Gọi hàm callback khi bắt đầu kéo
  };

  return (
    <div draggable onDragStart={handleDragStart}>
      {item}
    </div>
  );
};

export const DropZone = ({ onDrop, children }) => {
  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain"); // Lấy dữ liệu kéo và thả
    onDrop(data); // Gọi hàm callback khi thả
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div onDrop={handleDrop} onDragOver={handleDragOver}>
      {children}
    </div>
  );
};
