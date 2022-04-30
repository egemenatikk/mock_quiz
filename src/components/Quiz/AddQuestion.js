import React, { useState } from "react";
import stylesAddQuestion from "./AddQuestion.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

function AddQuestion(props) {
  const [questionText, setQuestionText] = useState("");
  const [alternativeOne, setAlternativeOne] = useState("");
  const [alternativeTwo, setAlternativeTwo] = useState("");
  const [alternativeThree, setAlternativeThree] = useState("");
  const [alternativeFour, setAlternativeFour] = useState("");
  const [alternativeFive, setAlternativeFive] = useState("");
  const [correctAlternative, setCorrectAlternative] = useState("");

  const addQuestionHandler = (event) => {
    event.preventDefault();

    if (
      questionText.length > 0 &&
      alternativeOne.length > 0 &&
      alternativeTwo.length > 0 &&
      alternativeThree.length > 0 &&
      alternativeFour.length > 0 &&
      alternativeFive.length > 0 &&
      correctAlternative.length > 0
    ) {
      const question = {
        questionText: questionText,
        alternativeOne: alternativeOne,
        alternativeTwo: alternativeTwo,
        alternativeThree: alternativeThree,
        alternativeFour: alternativeFour,
        alternativeFive: alternativeFive,
        correctAlternative: correctAlternative,
      };

      props.onAddQuestion(question);
      setQuestionText("");
      setAlternativeOne("");
      setAlternativeTwo("");
      setAlternativeThree("");
      setAlternativeFour("");
      setAlternativeFive("");
      setCorrectAlternative("");
    }
  };

  const questionTextChangeHandler = (event) => {
    setQuestionText(event.target.value);
  };

  const alternativeOneChangeHandler = (event) => {
    setAlternativeOne(event.target.value);
  };

  const alternativeTwoChangeHandler = (event) => {
    setAlternativeTwo(event.target.value);
  };

  const alternativeThreeChangeHandler = (event) => {
    setAlternativeThree(event.target.value);
  };

  const alternativeFourChangeHandler = (event) => {
    setAlternativeFour(event.target.value);
  };

  const alternativeFiveChangeHandler = (event) => {
    setAlternativeFive(event.target.value);
  };

  const correctAlternativeChangeHandler = (event) => {
    setCorrectAlternative(event.target.value);
  };

  return (
    <Card className={stylesAddQuestion.input}>
      <form onSubmit={addQuestionHandler}>
        <label htmlFor="questionText">Question</label>
        <input
          id="questionText"
          type="text"
          value={questionText}
          onChange={questionTextChangeHandler}
        ></input>
        <label htmlFor="alternativeOne">First Alternative</label>
        <input
          id="alternativeOne"
          type="text"
          value={alternativeOne}
          onChange={alternativeOneChangeHandler}
        ></input>
        <label htmlFor="alternativeTwo">Second Alternative</label>
        <input
          id="alternativeTwo"
          type="text"
          value={alternativeTwo}
          onChange={alternativeTwoChangeHandler}
        ></input>
        <label htmlFor="alternativeThree">Third Alternative</label>
        <input
          id="alternativeThree"
          type="text"
          value={alternativeThree}
          onChange={alternativeThreeChangeHandler}
        ></input>
        <label htmlFor="alternativeFour">Fourth Alternative</label>
        <input
          id="alternativeFour"
          type="text"
          value={alternativeFour}
          onChange={alternativeFourChangeHandler}
        ></input>
        <label htmlFor="alternativeFive">Fifth Alternative</label>
        <input
          id="alternativeFive"
          type="text"
          value={alternativeFive}
          onChange={alternativeFiveChangeHandler}
        ></input>
        <label htmlFor="correctAlternative">Correct Alternative</label>
        <input
          id="correctAlternative"
          type="text"
          value={correctAlternative}
          onChange={correctAlternativeChangeHandler}
        ></input>
        <Button type="submit">Add Question</Button>
      </form>
    </Card>
  );
}

export default AddQuestion;
