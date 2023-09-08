import { useState } from "react";
import "./App.scss";
import Form from "./components/Form/Form";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="form-wrapper">
      <Form />
    </div>
  );
}

export default App;
