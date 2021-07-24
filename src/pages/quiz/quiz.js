import React, { useState, useRef, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Confetti from "react-confetti";

import Pokeball from "../../assets/123.png";

import './quiz.css';

const Quiz = () => {
	const questions = [
		{
			questionText: 'What is the colour of Raichu’s cheeks?',
			answerOptions: [
				{ answerText: 'Yellow', isCorrect: true },
				{ answerText: 'Red', isCorrect: false},
				{ answerText: 'Blue', isCorrect: false },
				{ answerText: 'White', isCorrect: false },
			],
		},
		{
			questionText: 'Which Pokemon researcher in the series is considered to be the best scientist about Pokemon?',
			answerOptions: [
				{ answerText: 'Professor Agatha', isCorrect: false },
				{ answerText: 'Professor Oak', isCorrect: true },
				{ answerText: 'Professor Elm', isCorrect: false },
				{ answerText: 'Professor Ash', isCorrect: false },
			],
		},
		{
			questionText: 'Which electronic device is used to record and provide information about different species of Pokemon?',
			answerOptions: [
				{ answerText: 'Pokemon Encyclopedio', isCorrect: false },
				{ answerText: 'Poke Ball', isCorrect: false },
				{ answerText: 'Pokemon manual', isCorrect: false },
				{ answerText: 'Pokedex', isCorrect: true },
			],
		},
        {
			questionText: 'Which of the following Pokemon seems to have a headache at all times?',
			answerOptions: [
				{ answerText: 'Psyduck', isCorrect: true },
				{ answerText: 'Zapdos', isCorrect: false },
				{ answerText: 'Kangaskhan', isCorrect: false },
				{ answerText: 'Pikachu', isCorrect: true },
			],
		},
		{
			questionText: 'Which is the oldest Pokemon in the game universe?',
			answerOptions: [
				{ answerText: 'Meowth', isCorrect: false },
				{ answerText: 'Rhydon', isCorrect: false },
				{ answerText: 'Arceus', isCorrect: true },
				{ answerText: 'Charizard', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [height] = useState(1200);
  const [width] = useState(1600);
  const [show, setShow] = useState(false);


	  const handleShow = toggle => {
		setShow(toggle);
	  }

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
        <div className="app-contaner">
                     <Link className="link"><h1><img className="Pokeball" src={Pokeball}  alt=""/>PokeDex<img className="Pokeball" src={Pokeball} alt="" /></h1></Link>

		<div className='box'>
			{showScore ? (
                <div onMouseEnter={() => handleShow(true)}
				onMouseLeave={() => handleShow(false)} className="quiz-finish" >
				<div className='score-section'>
					          Congratuations<br/>
					You scored {score} out of {questions.length}
				</div>
                <Link to="/mainpage" ><button>Jump to PokeDex</button></Link>
				<Confetti
          recycle={show}
          numberOfPieces={150}
          width={width}
          height={height}
        />
                </div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
        </div>
	);
}

export default Quiz;