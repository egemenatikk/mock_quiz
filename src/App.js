import React, { useState } from "react";
import "./App.css";
import AddQuestion from "./components/Quiz/AddQuestion";
import QuestionList from "./components/Quiz/QuestionList";

function App() {
  const [questionList, setQuestionList] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [isNotEmpty, setIsNotEmpty] = useState(false);

  const addNewQuestion = (question) => {
    setQuestionList((prevQuestionList) => [...prevQuestionList, question]);
    setIsNotEmpty(true);
  };

  const selectButtonHandler = (intValue) => {
    setCorrectAnswer((prevState) => prevState + intValue);
  };

  return (
    <div className="background">
      <div>
        <AddQuestion onAddQuestion={addNewQuestion} />
        {isNotEmpty && (
          <QuestionList
            questions={questionList}
            onSelectButton={selectButtonHandler}
          />
        )}
        <div className="score">Your Score: {(correctAnswer / questionList.length) * 100}%</div>
      </div>
    </div>
  );
}

export default App;
