'use client';

import React, { useState } from 'react';
import { Row, Col, Container, Button, Card } from 'react-bootstrap';

const PythonIntro = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer((prev) => !prev);
  };

  return (
    <Container id="python-intro">
      <Row>
        <Col>
          <h2 className="padding"><strong><u>Python Introduction</u></strong></h2>

          <h2 className="padding">What is Python?</h2>
          <p>
            Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.
          </p>
          <p>It is used for:</p>
          <ul>
            <li>web development (server-side)</li>
            <li>software development</li>
            <li>mathematics</li>
            <li>system scripting</li>
          </ul>

          <h3 className="padding">What can Python do?</h3>
          <ul>
            <li>Python can be used on a server to create web applications.</li>
            <li>Python can be used alongside software to create workflows.</li>
            <li>Python can connect to database systems. It can also read and modify files.</li>
            <li>Python can be used to handle big data and perform complex mathematics.</li>
            <li>Python can be used for rapid prototyping, or for production-ready software development.</li>
          </ul>

          <h3 className="padding">Why Python?</h3>
          <ul>
            <li>Python works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc).</li>
            <li>Python has a simple syntax similar to the English language.</li>
            <li>
              Python has syntax that allows developers to write programs with fewer
              lines than some other programming languages.
            </li>
            <li>
              Python runs on an interpreter system, meaning that code can be executed as soon as it is
              written. This means that prototyping can be very quick.
            </li>
            <li>Python can be treated in a procedural way, an object-oriented way or a functional way.</li>
          </ul>

          <Card className="understanding-card">
            <h3 className="padding-bottom text-center">Check Your Understanding</h3>
            <h3 className="padding-bottom">Question</h3>

            <div className="white-box">
              <p>Which of the following is NOT a feature or use case of Python mentioned in this section?</p>
              <ul>
                <ul>1. Python can be used for web development on a server.</ul>
                <ul>2. Python has syntax that is similar to the English language, making it easy to learn.</ul>
                <ul>3. Python is a programming language primarily designed for creating mobile applications.</ul>
                <ul>4. Python can handle big data and perform complex mathematics.</ul>
              </ul>
            </div>

            <Button className="btn btn-primary mt-3" onClick={toggleAnswer}>
              {showAnswer ? 'Hide Answer' : 'Show Answer'}
            </Button>

            {showAnswer && (
            <Card.Body>
              <p>
                <strong>Answer:</strong>
                {' '}
                <span style={{ color: 'green' }}>Option 3</span>
              </p>
              <p>
                This is because Python is not specifically highlighted as being primarily for mobile
                application development in the introduction.
              </p>
            </Card.Body>
            )}
          </Card>

        </Col>
      </Row>
    </Container>
  );
};

export default PythonIntro;
