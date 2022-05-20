import {createContext, useContext, useReducer, useEffect} from 'react'
import axios from 'axios';
import { quizReducer } from '../reducer/quiz-reducer';

const QuizContext = createContext();

const QuizProvider = ({children}) => {
    const [quizState, quizDispatch] = useReducer(quizReducer, {
        questionData : [],
        category : null,
        categoryValue : null,
        image : null,
        currentQue : 0,
        options : [],
        score : 0,
        newQuestionData : [],
        correctOptions : [],
    })
    useEffect(()=>{
        (async() => {
            try{
                fetch(`https://opentdb.com/api.php?amount=10&category=${quizState.categoryValue}&type=multiple`).then(res=>res.json()).then(data=>quizDispatch({type : "SET_QUESTIONS", payload:data.results}))
            } catch(err){
                console.log(err)
            }
        })()
    },[quizState.categoryValue])
    return(
        <QuizContext.Provider value={{quizState, quizDispatch}}>
            {children}
        </QuizContext.Provider>
    )
}

const useQuiz = () => useContext(QuizContext)

export {QuizProvider, useQuiz}