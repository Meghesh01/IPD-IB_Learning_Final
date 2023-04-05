import React from 'react'
import questions from './QuizData'
import { Link } from 'react-router-dom';

const QuizResult = (props) => {
  return (
    <div className='score-section'>
      <div className="inside1">
        <h2>Completed !</h2>
        <h4>Total Score : {props.score}/50</h4>
        <h4>Your Correct Questions {props.correctAns} out of {questions.length}</h4>
      </div>
      <div className="inside2">
        <button onClick={props.handlePlayAgain}>Play Again</button>
        <Link to="/LevelsPage">
          <button>Complete Quiz 2</button>
        </Link>
      </div>
    </div>
  )
}

export default QuizResult
