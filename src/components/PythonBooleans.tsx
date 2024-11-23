'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const PythonBooleans = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer((prev) => !prev);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="padding"><strong><u>Python Booleans</u></strong></h2>

          <h3 className="padding">Boolean Values</h3>
          <p>Booleans represent one of two values: True or False.</p>
          <p>You can evaluate any expression in Python, and get one of two answers, True or False.</p>
          <p>When you compare two values, the expression is evaluated and Python returns the Boolean answer:</p>

          <Card className="example-card">
            <h3 className="padding-bottom">Example</h3>

            <div className="w3-code notranslate pythonHigh">
              <span className="pythoncolor" style={{ color: 'black' }}>
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>print</span>
                (
                <span className="pythonnumbercolor" style={{ color: 'red' }}>10</span>
                {' '}
                &gt;&nbsp;
                <span className="pythonnumbercolor" style={{ color: 'red' }}>9</span>
                )
                <br />
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>print</span>
                (
                <span className="pythonnumbercolor" style={{ color: 'red' }}>10</span>
                {' '}
                ==&nbsp;
                <span className="pythonnumbercolor" style={{ color: 'red' }}>9</span>
                )
                <br />
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>print</span>
                (
                <span className="pythonnumbercolor" style={{ color: 'red' }}>10</span>
                {' '}
                &lt;&nbsp;
                <span className="pythonnumbercolor" style={{ color: 'red' }}>9</span>
                )
              </span>
            </div>
          </Card>

          <p>When you run a condition in an if statement, Python returns True or False:</p>

          <Card className="example-card">
            <h3 className="padding-bottom">Example</h3>
            <p>Print a message based on whether the condition is True or False:</p>

            <div className="w3-code notranslate pythonHigh">
              <span className="pythoncolor" style={{ color: 'black' }}>
                a =
                {' '}
                <span className="pythonnumbercolor" style={{ color: 'red' }}>200</span>
                <br />
                b =
                {' '}
                <span className="pythonnumbercolor" style={{ color: 'red' }}>33</span>
                <br />
                <br />
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>if</span>
                {' '}
                b &gt; a:
                <br />
    &nbsp;
                {' '}
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>print</span>
                (
                <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;b is greater than a&quot;</span>
                )
                <br />
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>else</span>
                :
                <br />
    &nbsp;
                {' '}
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>print</span>
                (
                <span className="pythonstringcolor" style={{ color: 'brown' }}>
                  &quot;b is not greater than a&quot;
                </span>
                )
              </span>
              <br />
              <br />
              <span className="pythoncolor" style={{ color: 'green' }}>
                # prints &apos;b is not greater than a&apos;
              </span>
            </div>
          </Card>

          <h3 className="padding">Evaluate Values and Variables</h3>
          <p>The bool() function allows you to evaluate any value, and give you True or False in return,</p>

          <Card className="example-card">
            <h3 className="padding-bottom">Example</h3>
            <p>Evaluate a string and a number:</p>

            <div className="w3-code notranslate pythonHigh">
              <span className="pythoncolor" style={{ color: 'black' }}>
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>print</span>
                (
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>bool</span>
                (
                <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;Hello&quot;</span>
                ))
                <span className="pythoncolor" style={{ color: 'green' }}>
              &nbsp;# True
                </span>
                <br />
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>print</span>
                (
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>bool</span>
                (
                <span className="pythonnumbercolor" style={{ color: 'red' }}>15</span>
                ))
                <span className="pythoncolor" style={{ color: 'green' }}>
              &nbsp;# True
                </span>
              </span>
            </div>
          </Card>

          <Card className="example-card">
            <h3 className="padding-bottom">Example</h3>
            <p>Evaluate two variables:</p>

            <div className="w3-code notranslate pythonHigh">
              <span className="pythoncolor" style={{ color: 'black' }}>
                x =
                {' '}
                <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;Hello&quot;</span>
                <br />
                y =
                {' '}
                <span className="pythonnumbercolor" style={{ color: 'red' }}>15</span>
                <br />
                <br />
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>print</span>
                (
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>bool</span>
                (x))
                <span className="pythoncolor" style={{ color: 'green' }}>
              &nbsp;# True
                </span>
                <br />
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>print</span>
                (
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>bool</span>
                (y))
                <span className="pythoncolor" style={{ color: 'green' }}>
              &nbsp;# True
                </span>
              </span>
            </div>
          </Card>

          <h3 className="padding">Most Values are True</h3>
          <p>Almost any value is evaluated to True if it has some sort of content.</p>
          <p>Any string is True, except empty strings.</p>
          <p>Any number is True, except 0.</p>
          <p>Any list, tuple, set, and dictionary are True, except empty ones.</p>

          <Card className="example-card">
            <h3 className="padding-bottom">Example</h3>
            <p>The following will return True:</p>

            <div className="w3-code notranslate pythonHigh">
              <span className="pythoncolor" style={{ color: 'black' }}>
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>bool</span>
                (
                <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;abc&quot;</span>
                )
                <br />
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>bool</span>
                (
                <span className="pythonnumbercolor" style={{ color: 'red' }}>123</span>
                )
                <br />
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>bool</span>
                ([
                <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;apple&quot;</span>
                ,
                {' '}
                <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;cherry&quot;</span>
                ,
                {' '}
                <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;banana&quot;</span>
                ])
                <br />
              </span>
            </div>
          </Card>

          <h3 className="padding">Some Values are False</h3>
          <p>
            In fact, there are not many values that evaluate to False, except empty values, such as (), [],
            {' '}
            &#123;&#125;, &quot;&quot;, the number 0, and the value None. And of course, the value
            False evaluates to False.
          </p>

          <Card className="example-card">
            <h3 className="padding-bottom">Example</h3>
            <p>The following will return False:</p>

            <div className="w3-code notranslate pythonHigh">
              <span className="pythoncolor" style={{ color: 'black' }}>
                <span className="pythonnumbercolor" style={{ color: 'red' }} />
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>bool</span>
                (
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>False</span>
                )
                <br />
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>bool</span>
                (None)
                <br />
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>bool</span>
                (
                <span className="pythonnumbercolor" style={{ color: 'red' }}>0</span>
                )
                <br />
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>bool</span>
                (
                <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;&quot;</span>
                )
                <br />
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>bool</span>
                (())
                <br />
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>bool</span>
                ([])
                <br />
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>bool</span>
                (
                <span style={{ color: 'red' }}>&#123;&#125;</span>
                )
              </span>
            </div>
          </Card>

          <Card className="understanding-card">
            <h3 className="padding-bottom text-center">Check Your Understanding</h3>
            <h3 className="padding-bottom">Question</h3>
            <p>What will the following code output?</p>

            <div className="w3-code notranslate pythonHigh">
              <span className="pythoncolor" style={{ color: 'black' }}>
                print(
                <span className="pythonnumbercolor" style={{ color: 'blue' }}>5</span>
                {' '}
                &gt;
                {' '}
                <span className="pythonnumbercolor" style={{ color: 'blue' }}>3</span>
                )
                <br />
                print(
                <span className="pythonnumbercolor" style={{ color: 'blue' }}>5</span>
                {' '}
                ==
                {' '}
                <span className="pythonnumbercolor" style={{ color: 'blue' }}>5</span>
                )
                <br />
                print(
                <span className="pythonnumbercolor" style={{ color: 'blue' }}>5</span>
                {' '}
                &lt;
                {' '}
                <span className="pythonnumbercolor" style={{ color: 'blue' }}>3</span>
                )
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
                <span style={{ color: 'green' }}>(c) True, True, False</span>
              </p>
              <p>
                The first comparison evaluates to
                {' '}
                <code>True</code>
                {' '}
                because 5 is greater than 3.
                The second comparison is
                {' '}
                <code>True</code>
                {' '}
                because 5 equals 5.
                The third comparison is
                {' '}
                <code>False</code>
                {' '}
                because 5 is not less than 3.
              </p>
            </Card.Body>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PythonBooleans;
