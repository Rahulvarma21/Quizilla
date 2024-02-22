import { useState, useEffect } from "react";
import "./Result.css";
import { Link, useParams } from "react-router-dom";
function Result() {
  // useEffect used for changing theme according to the click
  const [theme, setTheme] = useState(true);
  useEffect(() => {
    themeChange();
  }, []);
  const themeChange = () => {
    setTheme(!theme);
    if (theme) {
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.backgroundColor = "White";
    }
  };

  // this is for changing textcolor
  function textColor(color) {
    return {
      color: color ? "black" : "#eceded",
    };
  }

  let { local } = useParams();
  return (
    <div>
      <div className="resultHeader">
        <p id="finalTitle" style={textColor(theme)}>
          Quizilla
        </p>
        <button id="themeBtn" onClick={themeChange}>
          {theme === true ? "Light" : "Dark"}
        </button>
      </div>
      <div className="container">
        <div className="resultContainer">
          <h1>Final Results</h1>
          <h2>
            <span>{local}</span> out of 5 correct - ({(local / 5) * 100}%)
          </h2>
          <img
            id="resultImg"
            src="https://i.makeagif.com/media/4-24-2014/inIx1Y.gif"
            alt=""
          />
        </div>
        <div className="play">
          <Link to="/">
            <button id="playBtn">Play Again</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Result;
