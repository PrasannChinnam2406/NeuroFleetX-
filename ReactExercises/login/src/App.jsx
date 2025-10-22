import AuthForm from "./AuthForm";

function App() {
  const handleAuth = (data) => {
    console.log("Auth Data:", data);
  };

  return <AuthForm onAuthSubmit={handleAuth} />;
}

export default App;
