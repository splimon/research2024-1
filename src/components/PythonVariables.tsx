'use client';

import React, { useState } from 'react';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';

const PythonVariables = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer((prev) => !prev);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="padding"><strong><u>Python Variables</u></strong></h2>

          <h3 className="padding">Python Variables</h3>
          <p>
            A
            <strong> variable</strong>
            {' '}
            is a location in memory that holds one or more values.
          </p>
          <p>In Python, variables are created when you assign a value to it:</p>

          <Card className="example-card">
            <h3 className="padding-bottom">Example</h3>
            <p>Variables in Python:</p>

            <div className="w3-code notranslate pythonHigh">
              <span className="pythoncolor" style={{ color: 'black' }}>
                x =
                {' '}
                <span className="pythonnumbercolor" style={{ color: 'red' }}>5</span>
                <br />
                y =
                {' '}
                <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;John&quot;</span>
                <br />
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>print</span>
                (x)
                <br />
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>print</span>
                (y)
              </span>
            </div>
          </Card>

          <h3 className="padding">Casting</h3>
          <p>If you want to specify the data type of a variable, this can be done with casting.</p>

          <Card className="example-card">
            <h3 className="padding-bottom">Example</h3>

            <div className="w3-code notranslate pythonHigh">
              <span className="pythoncolor" style={{ color: 'black' }}>
                x =
                {' '}
                <span className="pythonnumbercolor" style={{ color: 'red' }} />
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>str</span>
                (
                <span className="pythonnumbercolor" style={{ color: 'red' }}>3</span>
                )&nbsp;&nbsp;&nbsp;
                <span className="commentcolor" style={{ color: 'green' }}># x will be &apos;3&apos;</span>
                <br />
                y =
                {' '}
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>int</span>
                (
                <span className="pythonnumbercolor" style={{ color: 'red' }}>3</span>
                )&nbsp;&nbsp;&nbsp;
                <span className="commentcolor" style={{ color: 'green' }}># y will be 3</span>
                <br />
                z =
                {' '}
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>float</span>
                (
                <span className="pythonnumbercolor" style={{ color: 'red' }}>3</span>
                )&nbsp;
                <span className="commentcolor" style={{ color: 'green' }}># z will be 3.0</span>
              </span>
            </div>
          </Card>

          <h3 className="padding">Case Sensitive</h3>
          <p>Variable names are case-sensitive.</p>

          <Card className="example-card">
            <h3 className="padding-bottom">Example</h3>
            <p>This will create two variables:</p>

            <div className="w3-code notranslate pythonHigh">
              <span className="pythoncolor" style={{ color: 'black' }}>
                <span className="pythonnumbercolor" style={{ color: 'red' }} />
                a =
                {' '}
                <span className="pythonnumbercolor" style={{ color: 'red' }}>4</span>
                <br />
                A =
                {' '}
                <span className="pythonnumbercolor" style={{ color: 'red' }} />
                <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;Sally&quot;</span>
                <br />
                <span className="commentcolor" style={{ color: 'green' }}># A will not overwrite a</span>
              </span>
            </div>
          </Card>

          <h3 className="padding">Variable Names</h3>
          <p>
            A variable can have a short name (like x and y) or a more descriptive name (age, carname, total_volume).
            Rules for Python variables:
          </p>
          <ul>
            <li>A variable name must start with a letter or the underscore character</li>
            <li>A variable name cannot start with a number</li>
            <li>A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )</li>
            <li>Variable names are case-sensitive (age, Age and AGE are three different variables)</li>
            <li>A variable name cannot be any of the Python keywords.</li>
          </ul>

          <Card className="example-card">
            <h3 className="padding-bottom">Example</h3>
            <p>Legal variable names:</p>

            <div className="w3-code notranslate pythonHigh">
              <span className="pythoncolor" style={{ color: 'black' }}>
                myvar =
                {' '}
                <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;John&quot;</span>
                <br />
                my_var =
                {' '}
                <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;John&quot;</span>
                <br />
                _my_var =
                {' '}
                <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;John&quot;</span>
                <br />
                myVar =
                {' '}
                <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;John&quot;</span>
                <br />
                <span className="pythonnumbercolor" style={{ color: 'red' }} />
                MYVAR =
                {' '}
                <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;John&quot;</span>
                <br />
                myvar2 =
                {' '}
                <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;John&quot;</span>
              </span>
            </div>
          </Card>

          <Card className="example-card-red">
            <h3 className="padding-bottom">Example</h3>
            <p>Illegal variable names:</p>
            <div className="w3-example w3-pale-red">
              <div className="w3-code-red notranslate pythonHigh w3-border-red">
                <span className="pythoncolor" style={{ color: 'black' }}>
                  2myvar =
                  {' '}
                  <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;John&quot;</span>
                  <br />
                  my-var =
                  {' '}
                  <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;John&quot;</span>
                  <br />
                  <span className="pythonnumbercolor" style={{ color: 'red' }} />
                  my var =
                  {' '}
                  <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;John&quot;</span>
                </span>
              </div>
            </div>
          </Card>

          <Card className="understanding-card">
            <h3 className="padding-bottom text-center">Check Your Understanding</h3>
            <h3 className="padding-bottom">Question</h3>
            <p>How many variables are defined in the following code, and why?</p>

            <div className="w3-code notranslate pythonHigh">
              <span className="pythoncolor" style={{ color: 'black' }}>
                age =
                {' '}
                <span className="pythonnumbercolor" style={{ color: 'red' }}>25</span>
                <br />
                Age =
                {' '}
                <span className="pythonnumbercolor" style={{ color: 'red' }}>30</span>
                <br />
                AGE =
                {' '}
                <span className="pythonnumbercolor" style={{ color: 'red' }}>35</span>
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
                <span style={{ color: 'green' }}>Three variables</span>
              </p>
              <p>
                This is because Python is case-sensitive, so
                {' '}
                <code>age</code>
                ,
                {' '}
                <code>Age</code>
                , and
                {' '}
                <code>AGE</code>
                {' '}
                are treated as distinct variables.
              </p>
            </Card.Body>
            )}
          </Card>

          <h3 className="padding">Many Values to Multiple Variables</h3>
          <p>Python allows you to assign values to multiple variables in one line:</p>

          <Card className="example-card">
            <h3 className="padding-bottom">Example</h3>
            <p>Python allows you to assign values to multiple variables in one line:</p>
            <div className="w3-code notranslate pythonHigh">
              <span className="pythoncolor" style={{ color: 'black' }}>
                <span className="pythonnumbercolor" style={{ color: 'red' }} />
                x, y, z =
                {' '}
                <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;Orange&quot;</span>
                ,
                {' '}
                <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;Banana&quot;</span>
                ,
                {' '}
                <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;Cherry&quot;</span>
                <br />
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>print</span>
                (x)
                <span className="commentcolor" style={{ color: 'green' }}>
              &nbsp; # prints &apos;Orange&apos;
                </span>
                <br />
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>print</span>
                (y)
                <span className="commentcolor" style={{ color: 'green' }}>
              &nbsp; # prints &apos;Banana&apos;
                </span>
                <br />
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>print</span>
                (z)
                <span className="pythonnumbercolor" style={{ color: 'red' }} />
                <span className="commentcolor" style={{ color: 'green' }}>
              &nbsp; # prints &apos;Cherry&apos;
                </span>
              </span>
            </div>
          </Card>

          <h3 className="padding">One Value to Multiple Variables</h3>
          <p>And you can assign the same value to multiple variables in one line:</p>

          <Card className="example-card">
            <h3 className="padding-bottom">Example</h3>
            <div className="w3-code notranslate pythonHigh">
              <span className="pythoncolor" style={{ color: 'black' }}>
                <span className="pythonnumbercolor" style={{ color: 'red' }} />
                x = y = z =
                {' '}
                <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;Orange&quot;</span>
                <br />
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>print</span>
                (x)
                <span className="commentcolor" style={{ color: 'green' }}>
              &nbsp; # prints &apos;Orange&apos;
                </span>
                <br />
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>print</span>
                (y)
                <span className="commentcolor" style={{ color: 'green' }}>
              &nbsp; # prints &apos;Orange&apos;
                </span>
                <br />
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>print</span>
                (z)
                <span className="pythonnumbercolor" style={{ color: 'red' }} />
                <span className="commentcolor" style={{ color: 'green' }}>
              &nbsp; # prints &apos;Orange&apos;
                </span>
              </span>
            </div>
          </Card>

          <h3 className="padding">Unpack a Collection</h3>
          <p>
            If you have a collection of values in a list, tuple etc.
            Python allows you to extract the values into variables. This is called unpacking.
          </p>
          <Card className="example-card">
            <h3 className="padding-bottom">Example</h3>
            <div className="w3-code notranslate pythonHigh">
              <span className="pythoncolor" style={{ color: 'black' }}>
                fruits = [
                <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;apple&quot;</span>
                ,
                {' '}
                <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;banana&quot;</span>
                ,
                {' '}
                <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;cherry&quot;</span>
                ]
                <br />
                x, y, z = fruits
                <br />
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>print</span>
                (x)
                <br />
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>print</span>
                (y)
                <br />
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>print</span>
                (z)
                <span className="pythonnumbercolor" style={{ color: 'red' }} />
              </span>
            </div>

          </Card>

          <Card className="understanding-card">
            <h3 className="padding-bottom text-center">Check Your Understanding</h3>
            <h3 className="padding-bottom">Question</h3>
            <p>What will happen if the following code is executed?</p>

            <div className="w3-code notranslate pythonHigh">
              <span className="pythoncolor" style={{ color: 'black' }}>
                x, y =
                {' '}
                <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;Orange&quot;</span>
                ,
                {' '}
                <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;Apple&quot;</span>
                ,
                {' '}
                <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;Banana&quot;</span>
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
                <span style={{ color: 'green' }}>An error will occur</span>
              </p>
              <p>
                This is because the number of values on the right side of the assignment
                (three values) does not match the number of variables on the left side
                (two variables). Python requires the number of variables and values
                to match when performing this type of assignment.
              </p>
            </Card.Body>
            )}
          </Card>

        </Col>
      </Row>
    </Container>
  );
};

export default PythonVariables;
