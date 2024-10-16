// import logo from './logo.svg';
import "./App.css";

import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";

function App() {
  return (
    <div className="App">
      <ClassClick />
      <FunctionClick />
      {/* <Counter></Counter> */}
      {/* <Message></Message> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Tom" heroName="Cat">
        <button>Action</button>
      </Greet>
      <Greet name="Jerry" heroName="Mouse"></Greet> */}
      {/* <Welcome name="Bruce" heroName="Batman"></Welcome>
      <Welcome name="Tom" heroName="Cat"></Welcome>
      <Welcome name="Jerry" heroName="Mouse"></Welcome> */}
      {/* <Hello></Hello> */}
    </div>
  );
}

export default App;
