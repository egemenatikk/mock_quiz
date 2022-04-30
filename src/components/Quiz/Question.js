import React, { useState } from "react";
import stylesQuestion from "./Question.module.css";
import Button from "../UI/Button";

function Question(props) {

  const [isAnswered, setIsAnswered] = useState(true);


  const selectFirstAlternativeHandler = () => {
    if(props.question.alternativeOne===props.question.correctAlternative && isAnswered){
      props.onSelectButton(1);
      setIsAnswered(false);
      return;
    }
    setIsAnswered(false);
    props.onSelectButton(0);
  }

  const selectSecondAlternativeHandler = () => {
    if(props.question.alternativeTwo===props.question.correctAlternative && isAnswered){
      props.onSelectButton(1);
      setIsAnswered(false);
      return;
    }
    setIsAnswered(false);
    props.onSelectButton(0);
  }

  const selectThirdAlternativeHandler = () => {
    if(props.question.alternativeThree===props.question.correctAlternative && isAnswered){
      props.onSelectButton(1);
      setIsAnswered(false);
      return;
    }
    setIsAnswered(false);
    props.onSelectButton(0);
  }

  const selectFourthAlternativeHandler = () => {
    if(props.question.alternativeFour===props.question.correctAlternative && isAnswered){
      props.onSelectButton(1);
      setIsAnswered(false);
      return;
    }
    setIsAnswered(false);
    props.onSelectButton(0);
  }

  const selectFifthAlternativeHandler = () => {
    if(props.question.alternativeFive===props.question.correctAlternative && isAnswered){
      props.onSelectButton(1);
      setIsAnswered(false);
      return;
    }
    setIsAnswered(false);
    props.onSelectButton(0);
  }

  return (
      <div>
          <div>{props.question.questionText}</div>
          <Button className={stylesQuestion.questionButton} onClick={selectFirstAlternativeHandler}>{props.question.alternativeOne}</Button>
          <Button className={stylesQuestion.questionButton} onClick={selectSecondAlternativeHandler}>{props.question.alternativeTwo}</Button>
          <Button className={stylesQuestion.questionButton} onClick={selectThirdAlternativeHandler}>{props.question.alternativeThree}</Button>
          <Button className={stylesQuestion.questionButton} onClick={selectFourthAlternativeHandler}>{props.question.alternativeFour}</Button>
          <Button className={stylesQuestion.questionButton} onClick={selectFifthAlternativeHandler}>{props.question.alternativeFive}</Button>
      </div>
      
  )
}

export default Question;
