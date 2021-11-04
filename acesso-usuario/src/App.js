import "./App.css";
import { useState } from "react";
import RestrictedPage from "./components/RestrictedPage";

function App() {
  const user = "Igor Basquerotto";

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  function Login() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div className="App">
      <div className="App-header">
        <RestrictedPage
          user={user}
          isLoggedIn={isLoggedIn}
          Login={Login}
        ></RestrictedPage>
      </div>
    </div>
  );
}

export default App;
