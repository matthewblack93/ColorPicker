import { useState } from "react";

const Color = ({ color, setSelectedColor }) => {
  return <div className={color} onClick={() => setSelectedColor(color)}></div>;
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const colors = ["red", "blue", "green"];

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: {selectedColor}</div>
      </div>
      <div id="colors-list">
        {colors.map((color) => (
          <Color key={color} color={color} setSelectedColor={setSelectedColor} />
        ))}
      </div>
    </div>
  );
};

export default App;
