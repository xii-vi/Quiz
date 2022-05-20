import { Link } from "react-router-dom"
import { useQuiz } from "../../context/quiz-context"
export const CategoryCard = ({categoryData:data})=>{
    const{quizDispatch} = useQuiz();
return(
    <div className="flex max-w-sm flex-col">
        <div >
            <img className="object-contain" src={`https://source.unsplash.com/random/1920x1080/?${data.categoryName}`} alt="Quiz-category" />
        </div>
        <div className="p-2 pb-4">
            <p className="text-3xl">{data.categoryName}</p>
            <p className="py-2 text-xs">Take this quiz to test your knowledge on {data.categoryName}</p>
            <Link to="rules-page"><button className="rounded-md px-4 py-2 bg-indigo-500 mr-4 text-slate-50" onClick = {() => quizDispatch({type : "PLAY_CLICK", payload : data})}>Play Now</button></Link>
        </div>
    </div>
)
}