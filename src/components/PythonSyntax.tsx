'use client';

import { Row, Col, Container, Card } from 'react-bootstrap';

const PythonSyntax = () => (
  <Container>
    <Row>
      <Col>
        <h2 className="padding"><strong><u>Python Syntax</u></strong></h2>

        <h3 className="padding">Python Indentation</h3>
        <p>
          <strong>Indentation</strong>
          {' '}
          refers to the spaces at the beginning of a code line.
        </p>
        <p>
          Where in other programming languages the indentation in code is for readability only,
          the indentation in Python is very important.
        </p>
        <p>Python uses indentation to indicate a block of code.</p>

        <Card className="example-card">
          <h3 className="padding-bottom">Example</h3>

          <div className="w3-code notranslate pythonHigh ">
            <span className="pythoncolor" style={{ color: 'black' }}>
              <span className="pythonnumbercolor" style={{ color: 'red' }} />
              <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>if </span>
              <span className="pythonnumbercolor" style={{ color: 'red' }}>5</span>
              {' '}
              &gt;
              <span className="pythonnumbercolor" style={{ color: 'red' }}> 2</span>
              :
              <br />
              {' '}
&nbsp;
              <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>print</span>
              (
              <span className="pythonstringcolor" style={{ color: 'brown' }}>
                &quot;Five is greater than two!&quot;
              </span>
              )
              <span className="pythonnumbercolor" style={{ color: 'red' }} />
            </span>
          </div>
        </Card>

        <p>Python will give you an error if you skip the indentation:</p>

        <Card className="example-card-red">
          <h3 className="padding-bottom">Example</h3>
          <p>Syntax Error:</p>
          <div className="w3-code-red notranslate pythonHigh ">
            <span className="pythoncolor" style={{ color: 'black' }}>
              <span className="pythonnumbercolor" style={{ color: 'red' }} />
              <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>if </span>
              <span className="pythonnumbercolor" style={{ color: 'red' }}>5</span>
              {' '}
              &gt;
              <span className="pythonnumbercolor" style={{ color: 'red' }}> 2</span>
              :
              <br />
              <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>print</span>
              (
              <span className="pythonstringcolor" style={{ color: 'brown' }}>
                &quot;Five is greater than two!&quot;
              </span>
              )
              <span className="pythonnumbercolor" style={{ color: 'red' }} />
            </span>
          </div>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default PythonSyntax;
