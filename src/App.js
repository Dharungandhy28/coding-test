import { useState } from "react";
import "./App.css";
import Userlist from "./components/Userlist";
import Filter from "./components/Filter";

function App() {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <h4 className="user">User Management Application</h4>
      <Filter value={search} onChange={handleChange} />
      <Userlist search={search} />
    </div>
  );
}

export default App;
