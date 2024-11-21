'use client';

import { Row, Col, Container, Card } from 'react-bootstrap';

const PythonStrings = () => (
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
      </Col>
    </Row>
  </Container>
);

export default PythonStrings;
