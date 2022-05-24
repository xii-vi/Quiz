import {createContext, useContext, useReducer, useEffect} from 'react'
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
        qArr:"",
        incorrect_answers:"",
        correctAns:""
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

    const questionArr = quizState.questionData.map(item=>item.question);

    quizState.qArr = (questionArr.map(item=>item.replace(/&quot;/g,'"').replace(/&#039;/g,'`').replace(/&ldquo;/g,'"').replace(/&amp;/g,'&').replace(/&ntilde;/g,'ñ').replace(/&aacute;/g,'á').replace(/&rdquo;/g,'”')))

    quizState.correctAns = quizState.questionData.map(item=>(item.correct_answer).replace(/&quot;/g,'"').replace(/&#039;/g,'`').replace(/&ldquo;/g,'“').replace(/&amp;/g,'&').replace(/&ntilde;/g,'ñ').replace(/&aacute;/g,'á').replace(/&rdquo;/g,'”'))

    const incorrect_answersArr= quizState.questionData.map(item=>(item.incorrect_answers))

    quizState.incorrect_answers = incorrect_answersArr.map(item=>item.map(data=>data.replace(/&quot;/g,'"').replace(/&#039;/g,'`').replace(/&ldquo;/g,'“').replace(/&amp;/g,'&').replace(/&ntilde;/g,'ñ').replace(/&aacute;/g,'á').replace(/&rdquo;/g,'”')))

    return(
        <QuizContext.Provider value={{quizState, quizDispatch}}>
            {children}
        </QuizContext.Provider>
    )
}

const useQuiz = () => useContext(QuizContext)

export {QuizProvider, useQuiz}