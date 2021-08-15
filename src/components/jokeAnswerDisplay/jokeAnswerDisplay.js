import React,{useEffect,useState} from 'react'
import './jokeAnswerDisplay.css'

const JokeAnswerDisplay = (props) => {

    const [isClicked, setIsCLicked] = useState(false)
    
    const displayJokeAns = props.jokeAns
    const randomAnsNum = props.jokeNum

    function UpdateClickEvent() {
        // elem.scrollIntoView();
        setIsCLicked(true)
    }

    const LoadDifferent = ()=> {
        window.location.reload()
      }

    return(
        <div id="ansDisplay">
            <button href="#ansText" id="ansbtn" onClick={UpdateClickEvent}>
                Show Answer
            </button>
            {isClicked && <div id="ansText">
                {displayJokeAns[randomAnsNum]}
            <button id="reloadbtn" onClick={LoadDifferent}>
                Keep them coming
            </button>
            </div>}
        </div>
        
    )
}

export default JokeAnswerDisplay;