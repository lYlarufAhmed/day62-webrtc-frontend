import React from 'react'
import {useSocket} from "./use-socket";

function App() {
  const socket = useSocket()
  return (
    <div className="App">
      <h1>Socket</h1>
    </div>
  );
}

export default App;
