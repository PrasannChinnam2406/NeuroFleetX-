import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // vertical
        alignItems: "center", // horizontal
        height: "100vh", // full viewport height
        width: "100vw", // full viewport width
        backgroundColor: "#69e3eeff",
      }}
    >
      <h1 style={{ marginBottom: "10px" }}>Click Counter App 🧮</h1>
      <h2 style={{ marginBottom: "20px" }}>Count: {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "12px 24px",
          fontSize: "18px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
