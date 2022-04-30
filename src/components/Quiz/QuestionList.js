import React from "react";
import Question from "./Question";
import stylesQuestionList from "./QuestionList.module.css";
import Card from "../UI/Card";

function QuestionList(props) {
    
    return (
        props.questions&&
        <Card className={stylesQuestionList.questions}>
            <ul>
                {props.questions.map((question,index) => {
                    return (
                        <li key={index}>
                        <Question key={index} question={question} onSelectButton={props.onSelectButton}/>
                    </li>
                    )
                })}
            </ul>
        </Card>
    )
}

export default QuestionList;
