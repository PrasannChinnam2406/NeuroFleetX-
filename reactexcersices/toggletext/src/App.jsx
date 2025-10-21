import { useState } from "react";

function App() {
  const [show, setShow] = useState(true); // state to toggle

  const handleToggle = () => setShow(!show);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#6501fcff",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Show/Hide Text Toggle</h1>
      <button
        onClick={handleToggle}
        style={{
          padding: "12px 24px",
          fontSize: "18px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        {show ? "Hide" : "Show"} Text
      </button>
      {show && (
        <p style={{ fontSize: "18px", textAlign: "center", maxWidth: "400px" }}>
          This is the text that can be toggled! Click the button above to hide
          or show it.
        </p>
      )}
    </div>
  );
}

export default App;
