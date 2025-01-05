'use client';

import React, { useState } from 'react';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';

const PythonStrings = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer((prev) => !prev);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="padding"><strong><u>Python Strings</u></strong></h2>

          <h3 className="padding">Strings</h3>
          <p>Strings in python are surrounded by either single quotation marks, or double quotation marks.</p>
          <p>
            &apos;hello&apos; is the same as &quot;hello&quot;.
          </p>
          <p>You can display a string literal with the print() function:</p>

          <Card className="example-card">
            <h3 className="padding-bottom">Example</h3>

            <div className="w3-code notranslate pythonHigh">
              <span className="pythoncolor" style={{ color: 'black' }}>
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>
                  print
                </span>
                (
                <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;Hello&quot;</span>
                )
                <br />
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>
                  print
                </span>
                (
                <span className="pythonstringcolor" style={{ color: 'brown' }}>&apos;Hello&apos;</span>
                )
              </span>
            </div>
          </Card>

          <h3 className="padding">Strings are Arrays</h3>
          <p>
            Like many other popular programming languages, strings in Python are arrays of bytes
            representing unicode characters.
          </p>
          <p>
            However, Python does not have a character data type, a single character is simply
            a string with a length of 1.
          </p>
          <p>
            Square brackets can be used to access elements of the string.
          </p>

          <Card className="example-card">
            <h3 className="padding-bottom">Example</h3>
            <p>Get the character at position 1 (remember that the first character has the position 0):</p>

            <div className="w3-code notranslate pythonHigh">
              <span className="pythoncolor" style={{ color: 'black' }}>
                a =
                {' '}
                <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;Hello, World!&quot;</span>
                <br />
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>print</span>
                (a[
                <span className="pythonnumbercolor" style={{ color: 'red' }}>1</span>
                ])
              </span>
            </div>
          </Card>

          <h3 className="padding">Slicing</h3>
          <p>You can return a range of characters by using the slice syntax.</p>
          <p>
            Specify the start index and the end index, separated by a colon, to return a part of the string.
          </p>

          <Card className="example-card">
            <h3 className="padding-bottom">Example</h3>
            <p>Get the characters from position 2 to position 5 (not included):</p>

            <div className="w3-code notranslate pythonHigh">
              <span className="pythoncolor" style={{ color: 'black' }}>
                b =
                {' '}
                <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;Hello, World!&quot;</span>
                <br />
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>print</span>
                (b[
                <span className="pythonnumbercolor" style={{ color: 'red' }}>2</span>
                :
                <span className="pythonnumbercolor" style={{ color: 'red' }}>5</span>
                ])
                {' '}
                <span style={{ color: 'green' }}># prints &apos;llo&apos;</span>
              </span>
            </div>
          </Card>

          <h3 className="padding">Slice From the Start</h3>
          <p>By leaving out the start index, the range will start at the first character:</p>

          <Card className="example-card">
            <h3 className="padding-bottom">Example</h3>
            <p>Get the characters from the start to position 5 (not included):</p>

            <div className="w3-code notranslate pythonHigh">
              <span className="pythoncolor" style={{ color: 'black' }}>
                b =
                {' '}
                <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;Hello, World!&quot;</span>
                <br />
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>print</span>
                (b[
                :
                <span className="pythonnumbercolor" style={{ color: 'red' }}>5</span>
                ])
                {' '}
                <span style={{ color: 'green' }}># prints &apos;Hello&apos;</span>
              </span>
            </div>
          </Card>

          <h3 className="padding">Slice From the End</h3>
          <p>By leaving out the end index, the range will go to the end:</p>

          <Card className="example-card">
            <h3 className="padding-bottom">Example</h3>
            <p>Get the characters from position 2, and all the way to the end:</p>

            <div className="w3-code notranslate pythonHigh">
              <span className="pythoncolor" style={{ color: 'black' }}>
                b =
                {' '}
                <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;Hello, World!&quot;</span>
                <br />
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>print</span>
                (b[
                <span className="pythonnumbercolor" style={{ color: 'red' }}>2</span>
                :
                ])
                {' '}
                <span style={{ color: 'green' }}># prints &apos;llo, World!&apos;</span>
              </span>
            </div>
          </Card>

          <Card className="understanding-card">
            <h3 className="padding-bottom text-center">Check Your Understanding</h3>
            <h3 className="padding-bottom">Question</h3>
            <p>What will the following code output?</p>

            <div className="w3-code notranslate pythonHigh">
              <span className="pythoncolor" style={{ color: 'black' }}>
                b =
                {' '}
                <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;Hello, World!&quot;</span>
                <br />
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>print</span>
                (b[
                <span className="pythonnumbercolor" style={{ color: 'red' }}>7</span>
                :
                <span className="pythonnumbercolor" style={{ color: 'red' }}>12</span>
                ])
              </span>
            </div>

            <Button className="btn btn-primary mt-3" onClick={toggleAnswer}>
              {showAnswer ? 'Hide Answer' : 'Show Answer'}
            </Button>

            {showAnswer && (
            <Card.Body>
              <p>
                <strong>Answer:</strong>
                {' '}
                <span style={{ color: 'green' }}>&apos;World&apos;</span>
              </p>
              <p>This is because the slice starts at index 7 and ends at index 11, excluding 12.</p>
            </Card.Body>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PythonStrings;
