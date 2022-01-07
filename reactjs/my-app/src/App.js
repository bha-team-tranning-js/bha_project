import { useState, useEffect } from "react";

function App() {
  const [employees, setEmployees] = useState("");
  useEffect(() => {}, []);

  return (
    <div className="App">
      <ul></ul>
    </div>
  );
}

export default App;
