export const quizReducer = (state,{type, payload}) => {
    switch (type) {
        case "SET_QUESTIONS":
            return {...state, questionData : payload}
        case "PLAY_CLICK":
            return {...state, category : payload.categoryName, categoryValue : payload.value}
        case "NEXT_QUESTION":
            return {...state, currentQue : state.currentQue + 1}
        case "SET_QUESTION_ONE":
            return {...state, currentQue : 0}
        case "SET_SCORE":
            return {...state, score : state.score + 2}
        case "RESULT_DATA":
            return {...state, newQuestionData : [...state.newQuestionData, payload]}
        case "SET_CORRECT_OPTION":
            return {...state, correctOptions : [...state.correctOptions, payload]}
        case "KILL_QUESTION_DATA":
            return {...state, newQuestionData : [], score : 0}
        default:
            break;
    }
}