import "./App.css";
import FormHandle from "./Components/FormHandle";
import { fields } from "./Constants/enumerations";

function App() {
  return (
    <div className="App">
      
      <FormHandle fields={fields} />
    </div>
  );
}

export default App;
