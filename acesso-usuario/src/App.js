import "./App.css";
import { useState } from "react";
import RestrictedPage from "./components/RestrictedPage";

function App() {
  const user = "Igor Basquerotto";

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function Login() {
    setIsLoggedIn(true);
  }

  function Logout() {
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      <div className="App-header">
        <RestrictedPage user={user} isLoggedIn={isLoggedIn}></RestrictedPage>
        <button onClick={Logout}>Logout</button>
        <button onClick={Login}>Login</button>
      </div>
    </div>
  );
}

export default App;
