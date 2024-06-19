import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router";
import Loading from "./components/Loading";

function App() {
  return (
    <div className="App">
      <RouterProvider
        router={router}
        fallbackElement={<Loading />}
      ></RouterProvider>
    </div>
  );
}

export default App;
