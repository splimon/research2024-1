/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/button-has-type */

'use client';

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import quiz from '../data';

// Define types for the quiz data structure
interface Question {
  question: string;
  answers: string[];
  correctAnswer: string;
}

interface Quiz {
  questions: Question[];
}

const QuizPage = () => {
  // State variables with types
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | string>('');
  const [checked, setChecked] = useState<boolean>(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  // Assuming `quiz` is an object with a `questions` array
  const { questions } = quiz as Quiz; // Cast `quiz` to match the Quiz type
  const { answers, correctAnswer } = questions[activeQuestion];

  // Type the `onAnswerSelected` function arguments
  const onAnswerSelected = (answer: string, idx: number) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log('true');
    } else {
      setSelectedAnswer(false);
      console.log('false');
    }
  };

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) => (selectedAnswer
      ? {
        ...prev,
        score: prev.score + 5,
        correctAnswers: prev.correctAnswers + 1,
      }
      : {
        ...prev,
        wrongAnswers: prev.wrongAnswers + 1,
      }));
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  return (
    <div className="container">
      <h1 className="text-center" style={{ paddingTop: '2rem' }}>Quiz</h1>
      <div>
        <h2 className="text-center">
          Question:
          {' '}
          {activeQuestion + 1}
          <span>
            /
            {questions.length}
          </span>
        </h2>
      </div>
      <div>
        {!showResult ? (
          <div className="quiz-container">
            <h3>{questions[activeQuestion].question}</h3>
            {answers.map((answer, idx) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events
              <li
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
                onClick={() => onAnswerSelected(answer, idx)}
                className={
                  selectedAnswerIndex === idx ? 'li-selected' : 'li-hover'
                }
              >
                <span>{answer}</span>
              </li>
            ))}
            {checked ? (
              <button onClick={nextQuestion} className="btn">
                {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
              </button>
            ) : (
              <button onClick={nextQuestion} disabled className="btn-disabled">
                {' '}
                {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
              </button>
            )}
          </div>
        ) : (
          <div className="quiz-container" style={{ paddingBottom: '2rem' }}>
            <h3>Results</h3>
            <h3>
              Overall: &nbsp;
              {(result.score / 25) * 100}
              %
            </h3>
            <p>
              Total Questions:
              {' '}
              <span>{questions.length}</span>
            </p>
            <p>
              Total Score:
              {' '}
              <span>{result.score}</span>
            </p>
            <p>
              Correct Answers:
              {' '}
              <span>{result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers:
              {' '}
              <span>{result.wrongAnswers}</span>
            </p>
            <button onClick={() => window.location.reload()}>Restart</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
