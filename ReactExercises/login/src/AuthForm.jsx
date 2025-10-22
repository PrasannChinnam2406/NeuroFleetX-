import { useState } from "react";

const roles = ["Admin", "Fleet Manager", "Driver", "Customer"];

function AuthForm({ onAuthSubmit }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || (!isLogin && !role)) {
      alert("Please fill all required fields.");
      return;
    }
    onAuthSubmit({ email, password, role, isLogin });
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 15px",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    backgroundColor: "#f5f5f5",
    color: "#333",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#4e54c8",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
    marginBottom: "15px",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100vw",
        margin: 0,
        background: "linear-gradient(to right, #667eea, #764ba2)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "40px 35px",
          borderRadius: "12px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
          width: "360px",
          maxWidth: "90%",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "30px", color: "#4e54c8" }}>
          {isLogin ? "Login" : "Register"}
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            required
          />
          {!isLogin && (
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={inputStyle}
              required
            >
              <option value="">Select Role</option>
              {roles.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          )}
          <button type="submit" style={buttonStyle}>
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <p style={{ fontSize: "14px", color: "#555" }}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            style={{
              color: "#764ba2",
              cursor: "pointer",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default AuthForm;
