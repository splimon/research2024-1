'use client';

import { Row, Col, Container, Card } from 'react-bootstrap';

const PythonVariables = () => (
  <Container>
    <Row>
      <Col>
        <h2 className="padding"><strong><u>Python Variables</u></strong></h2>

        <h3 className="padding">Python Variables</h3>
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
      </Col>
    </Row>
  </Container>
);

export default PythonVariables;
