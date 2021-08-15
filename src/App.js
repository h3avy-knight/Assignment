import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("orange");
  const [textColor, setTextColor] = useState("");

  const handleColor = (e) => {
    setColor(e.target.value);
  };
  const handleTextColor = (e) => {
    setTextColor(e.target.value);
  };
  return (
    <div className="App">
      <nav>
        <div className="left">
          <h2>Edit Post</h2>
          <span>saved</span>
        </div>
        <div className="right">
          <i className="fas fa-trash"></i>
          <span>Undo</span>
        </div>
      </nav>
      <div className="billboard">
        <div className="content">
          <h1>Heading</h1>
          <p style={{ color: textColor }}>
            sub body text <br /> body text
          </p>
          <button style={{ backgroundColor: color }} id="button">
            Book Now
          </button>
        </div>
      </div>
      <div className="tools-area">
        <div className="tools">
          <input type="color" value={color} onChange={handleColor} />
          <input type="color" value={textColor} onChange={handleTextColor} />
          <i class="fas fa-bars"></i>
        </div>
      </div>
      <div className="bottom-area">
        <div className="bottom-left">
          <h3>Change Template +</h3>
        </div>
        <button className="bottom-right">
          Schedule Post <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
export default App;
