/* eslint-disable react/button-has-type */

'use client';

import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import quiz from '../app/data';

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
    } else {
      setSelectedAnswer(false);
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

  // Function to submit quiz results to the backend API
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const finishQuiz = async () => {
    try {
      const response = await fetch('/api/quiz/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: null, // Replace with actual user ID if authentication is implemented
          score: result.score,
          correctAnswers: result.correctAnswers,
          wrongAnswers: result.wrongAnswers,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Quiz results saved:', data);
      } else {
        // Log the status code and error message for better debugging
        const errorData = await response.json();
        console.error('Failed to save quiz results:', errorData);
      }
    } catch (error) {
      console.error('Error submitting quiz results:', error);
    }
  };

  // Call `finishQuiz` when the quiz is finished
  useEffect(() => {
    if (showResult) {
      finishQuiz();
    }
  }, [finishQuiz, showResult]);

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
          <div className="quiz-container" style={{ padding: '2rem', marginBottom: '3rem' }}>
            <h3>{questions[activeQuestion].question}</h3>
            {answers.map((answer, idx) => (
              // eslint-disable-next-line max-len
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
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
              // eslint-disable-next-line react/button-has-type
              <button onClick={nextQuestion} className="btn">
                {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
              </button>
            ) : (
              // eslint-disable-next-line react/button-has-type
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
            <button onClick={() => window.location.reload()}>
              Restart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
