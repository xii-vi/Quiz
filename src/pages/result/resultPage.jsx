import { Link } from "react-router-dom";
import { useQuiz } from "../../context/quiz-context";
export const ResultPage = ()=>{
    const {quizState} = useQuiz();
    const {questionData,newQuestionData,score,correctOptions} = quizState
    return(
        <>
        <main className="flex flex-col justify-center items-center">
        <p className="text-8xl">Final Score</p>
        <p className={`text-3xl ${score > 10 ? "text-green-600" : "text-red-600"} `}>Your score is : {score}</p>
        {newQuestionData.map((newDataItem, index) => {
        return(
            <>
        <div className="flex flex-col p-4 m-4 w-96">
            <div className="question">
            <p>Question {index + 1} / {newQuestionData.length}</p>
            <p className="text-3xl">
            {newDataItem.newQuestion}
            </p>
        </div>
        <div className="flex flex-col py-3">
            {newDataItem.newOptions &&
                newDataItem.newOptions.map((optionItem) => 
                optionItem.map((newOptionData)=>{
                    return (
                    <button
                    className={`rounded-md px-4 py-2 ${(questionData.map((item) => item.correct_answer).includes(newOptionData)) ? "bg-green-600" : ""}
                    ${correctOptions.includes(newOptionData) ? "bg-red-600" : ""}`}
                    >
                    {newOptionData}
                    </button>
                );
                })                
            )}
        </div>
        </div>
            </>
        )
        })}
        <div className="py-4">
        <Link to = '/'>
            <button className="rounded-md px-4 py-2 bg-indigo-500 text-slate-50">Go To Home</button>
        </Link>
        </div>
        
    </main>
    </>
    )
}