import "./App.css";
import Counter from "./components/Counter";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile />
      </header>
      <div>
        <Counter />
      </div>
    </div>
  );
}

export default App;
