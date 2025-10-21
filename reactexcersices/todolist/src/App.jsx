import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: "50px",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#e0f7fa", // light teal background
        color: "#333", // dark text color
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>To-Do List 📝</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          style={{
            padding: "10px",
            fontSize: "16px",
            width: "250px",
            borderRadius: "6px",
            border: "1px solid #999",
          }}
        />
        <button
          onClick={handleAdd}
          style={{
            padding: "10px 20px",
            marginLeft: "10px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>

      <ul
        style={{
          marginTop: "30px",
          listStyle: "none",
          padding: 0,
          width: "300px",
        }}
      >
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{
              background: "#b2ebf2", // slightly darker card background
              color: "#000", // black text
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "6px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            {t}
            <button
              onClick={() => handleDelete(index)}
              style={{
                background: "#d32f2f",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                padding: "5px 10px",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
