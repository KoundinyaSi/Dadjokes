import React from 'react'
import "./jokeDisplay.css"

const JokeQuestionDisplay = (props) => {
    const displayJokeQues = props.jokeQues
    const randomQuesNum = props.jokeNum

    return(
        <div id="quesDisplay">
                {displayJokeQues[randomQuesNum]}
        </div>
    )
}

export default JokeQuestionDisplay
