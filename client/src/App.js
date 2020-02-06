import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import MainCard from "./Components/MainCard";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainCard />
        <div>Auther: Swapnil Misal</div>
      </div>
    </Provider>
  );
}

export default App;
