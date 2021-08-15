import React ,{useEffect, useState} from 'react'
import JokeQuestionDisplay from './jokeQuestionDisplay/jokeQuestionDisplay'
import JokeAnswerDisplay from './jokeAnswerDisplay/jokeAnswerDisplay'
import '../styles/global.css'

const App = () => {
  const [jokeQues,updateJokeQues] = useState([]);
  const [jokeAns, updateJokeAns] = useState([]);

  const data = require('./jokeList.json')
  const jokeArray = data.jokes
  
  useEffect(() => {
  
    const jokeQuestions = jokeArray.map((ques) => {
      return ques.question
    })
    const jokeAnswers = jokeArray.map((ans)=> {
      return ans.answer
    })

    updateJokeQues(jokeQuestions)
    updateJokeAns(jokeAnswers)
  },[])

  const randomJoke = Math.floor(Math.random() *jokeArray.length)

  return (
    <div id="wrapper1">
      <div id="wrapper">
        <JokeQuestionDisplay jokeQues = {jokeQues} jokeNum = {randomJoke}/>
        <JokeAnswerDisplay jokeAns = {jokeAns} jokeNum = {randomJoke}/>
      </div>
    </div>
  )
}

export default App