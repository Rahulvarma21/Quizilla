import { useEffect, useState } from "react";
import "./Question.css";
import questions from "../questions";
import { useNavigate } from "react-router-dom";

function QuestionBox() {
  // here useState has been used to store and update values
  const [question, setQuestion] = useState(0);
  const [highlight, setHighlight] = useState(false);
  const [theme, setTheme] = useState(true);
  const navigate = useNavigate();
  const [score, setScore] = useState(0);

  // useEffect used for changing theme according to the click
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
  // this function is for changing textcolor when the theme is changed.
  function textColor(color) {
    return {
      color: color ? "black" : "#eceded",
    };
  }
  // onclick function to handle questions, options and updating the score.
  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setQuestion(question + 1);
  };
  const lastIsCorrect = (isCorrect) => {
    console.log(isCorrect, "From last question");
    if (isCorrect === true) {
      setScore(score + 1);
    }
    return navigate(`/Result/${score}`);
  };
  localStorage.setItem("score", score);

  // onclick function for higlight buttons.
  const toggleHighlight = (highlight) => {
    setHighlight(highlight);
  };
  const handleHighlight = () => {
    if (highlight) {
      toggleHighlight(false);
    } else {
      toggleHighlight(true);
    }
  };

  return (
    // header icon and theme changer button
    <div>
      <div className="header">
        <p id="title" style={textColor(theme)}>
          Quizilla
        </p>
        <button id="theme" onClick={themeChange}>
          {theme === true ? "Light" : "Dark"}
        </button>
      </div>
      {/* question and no . of questions */}
      <div className="container">
        <div className="number">
          <h1 id="questionNo">Question: {question + 1} out of 5 </h1>
        </div>
        <div className="questionContainer">
          <p style={{ color: highlight ? "red" : "blue" }} id="question">
            {questions[question].text}
          </p>
        </div>

        {/* options for the questions */}
        <div className="options">
          <button
            onClick={() => {
              if (question === 4) {
                return lastIsCorrect(questions[question].options[0].isCorrect);
              }
              handleClick(questions[question].options[0].isCorrect);
            }}
            id="optionsFont"
          >
            {questions[question].options[0].text}
          </button>
          <button
            onClick={() => {
              if (question === 4) {
                return lastIsCorrect(questions[question].options[1].isCorrect);
              }
              handleClick(questions[question].options[1].isCorrect);
            }}
            id="optionsFont"
          >
            {questions[question].options[1].text}
          </button>
          <button
            onClick={() => {
              if (question === 4) {
                return lastIsCorrect(questions[question].options[2].isCorrect);
              }
              handleClick(questions[question].options[2].isCorrect);
            }}
            id="optionsFont"
          >
            {questions[question].options[2].text}
          </button>
          <button
            onClick={() => {
              if (question === 4) {
                return lastIsCorrect(questions[question].options[3].isCorrect);
              }
              handleClick(questions[question].options[3].isCorrect);
            }}
            id="optionsFont"
          >
            {questions[question].options[3].text}
          </button>
        </div>

        {/* remove highlight and highlight button */}
        <div className="selectionBtns">
          <button onClick={handleHighlight} id="keepBtn">
            Highlight
          </button>
          <button onClick={handleHighlight} id="removeBtn">
            Remove Highlight
          </button>
        </div>
      </div>
    </div>
  );
}
export default QuestionBox;
