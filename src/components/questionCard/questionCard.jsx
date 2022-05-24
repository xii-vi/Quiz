import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/quiz-context";
import { useEffect, useState } from "react";
export const QuestionCard=()=>{
const navigate = useNavigate();
const [options, setOptions] = useState([]);
const [selected, setSelected] = useState();
const { quizState, quizDispatch } = useQuiz();
const { questionData, currentQue } = quizState;
// useEffect(() => {
//     setSelected();
//     setOptions(
//         shuffleOptions([
//             quizState.correctAns[currentQue],
//         ...quizState.incorrect_answers[currentQue],
//         ])
//     );
// },[currentQue, quizState]);

useEffect(() => {
    setSelected();
    setOptions(
      questionData &&
        shuffleOptions([
            quizState.correctAns[currentQue],
            ...quizState.incorrect_answers[currentQue],
        ])
    );
  },[currentQue, questionData]);

const shuffleOptions = (options) => {
    return options.sort(() => Math.random() - 0.5);
};
const handleCheckClick = (optionItem) => {
    if (
    selected === optionItem &&
    selected === quizState.correctAns[currentQue]
    ) {
    return "bg-green-600";
    } else if (
    selected === optionItem &&
    selected !== quizState.correctAns[currentQue]
    ) {
    return "bg-red-600";
    } else if (optionItem === quizState.correctAns[currentQue]) {
    return "bg-green-600";
    }
};

const handleSelect = (optionItem) => {
    setSelected(optionItem);
    if(optionItem === quizState.correctAns[currentQue]){
        quizDispatch({type:"SET_SCORE"})
    }
    const newData = {newQuestion : quizState.qArr[currentQue], newOptions : [options]}
    quizDispatch({type : "RESULT_DATA", payload : newData})
    const correctOption = optionItem
    quizDispatch({type : "SET_CORRECT_OPTION", payload : correctOption})
};
    return(
        <>
        {questionData.length > 0 ? (
        <div className="flex flex-col p-4 m-4">
            <div className="question">
            <p>Question {currentQue + 1}/{questionData.length}</p>
                <p className="text-3xl">
                {quizState.qArr[currentQue]}
                </p>
            </div>

            <div className="flex flex-col py-3">
                {options &&
                options.map((optionItem) => {
                    return (
                        <button
                        className={`rounded-md px-4 py-2 ${
                            selected && handleCheckClick(optionItem)
                        }`}
                        onClick={() => handleSelect(optionItem)}
                        disabled={selected}
                    >
                    <p className="text-xl font-medium">{optionItem}</p>
                </button>
                );
                })}
            </div>
            <div className="flex py-4">
                <button className="rounded-md px-4 py-2 bg-indigo-500 text-slate-50" onClick={()=>navigate("/")}>
                Quit
                </button>
                {currentQue === 9 ? 
                    <button className="rounded-md px-4 py-2 bg-indigo-500 text-slate-50 ml-auto" onClick={() => {navigate("/result")}}>
                    Submit your Answers
                    </button>:
                    <button
                    className="rounded-md px-4 py-2 bg-indigo-500 text-slate-50 ml-auto"
                    onClick={() => quizDispatch({ type: "NEXT_QUESTION" })}>
                    Next Question
                    </button>
                }
            </div>
        </div>
        ) : (
        <h1>Loading ...</h1>
        )}
    </>
    )
}