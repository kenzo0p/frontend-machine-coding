import { useState } from "react";


export default function App() {
  const [points, setPoints] = useState([]);
  const [queue, setQueue] = useState([]);
  //@ts-ignore
  const handleClick = (e) => {
    //@ts-ignore
    setPoints((pointsPreviousState) => [
      ...pointsPreviousState,
      [e.clientX, e.clientY],
    ]);
  };
  const handleUndo = (e) => {
    e?.stopPropagation();
    const lastCircle = points[points.length - 1];
    const newPoints = points.slice(0, points.length - 1);
    setPoints(newPoints);
    setQueue([...queue, lastCircle]);
  };

  const handleRedo = (e) => {
    e?.stopPropagation();
    const firstCircle = queue[0];
    setPoints([...points, firstCircle]);
    setQueue([...queue.splice(1)]);
  };

  return (
    <div
      className="App"
      style={{ width: "100vw", height: "100vh" }}
      onClick={handleClick}
    >
      <button
        onClick={handleUndo}
        disabled={points.length === 0}
        style={{ width: "100px", height: "20px", marginRight: "20px" }}
      >
        {" "}
        Undo{" "}
      </button>
      <button
        disabled={queue.length === 0}
        onClick={handleRedo}
        style={{ width: "100px", height: "20px" }}
      >
        Redo
      </button>
      {points.map((point) => (
        <div
          style={{
            position: "absolute",
            width: "20px",
            height: "20px",
            backgroundColor: "black",
            borderRadius: "100%",
            top: point[1],
            left: point[0],
          }}
        />
      ))}
    </div>
  );
}
