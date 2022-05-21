import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/authContext";
import { useQuiz } from "../../context/quiz-context"

export const RulesPage=()=>{
    const{quizDispatch}= useQuiz();
    const {authState:{userLogin}} = useAuth();
    const navigate =  useNavigate();
    return(
        <div className="flex flex-col justify-center items-center h-screen xs:px-8">
            <p className="text-4xl">Rules</p>
            <div className="py-4">
                <ul className="list-disc">
                <li>Each right answer scores 2 Points</li>
                <li>Each multiple choice question has only one correct answer</li>
                <li>To win the quiz you need to score more than 70%</li>
                <li>There is no negative marking</li>
                <li>Don't cheat and Have fun.</li>
                </ul>
            </div>
            {userLogin?<Link to="/quiz"><button className="rounded-md px-4 py-2 bg-indigo-500 text-slate-50" onClick = {() => quizDispatch({type : "SET_QUESTION_ONE"})}>Start Quiz</button></Link>:navigate("/login")}
            </div>
    )
}