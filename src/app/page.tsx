import PythonComments from '@/components/PythonComments';
import PythonIntro from '@/components/PythonIntro';
import PythonStrings from '@/components/PythonStrings';
import PythonSyntax from '@/components/PythonSyntax';
import PythonVariables from '@/components/PythonVariables';
import { Col, Container, Row, Image } from 'react-bootstrap';

/** The Home page. */
const Home = () => (
  <main>
    <Container id="landing-page" className="vh-100 d-flex align-items-center">
      <Row className="align-middle">
        <Col className="col-sm-8 d-flex flex-column justify-content-center align-content-center">
          <h1>Introduction to Python Programming</h1>
          <br />
          <h3>Ready to Learn?</h3>
          <br />
          <a href="#python-intro">
            <button type="button" className="btn btn-primary">Let&apos;s Begin!</button>
          </a>
        </Col>
      </Row>
      <Col>
        <Image
          src="pythongif.gif"
          alt="Python Logo Gif"
          height={500}
        />
      </Col>
    </Container>
    <hr />
    <Container>
      <PythonIntro />
      {' '}
      <br />
    </Container>
    <hr />
    <Container>
      <PythonSyntax />
      {' '}
      <br />
    </Container>
    <hr />
    <Container>
      <PythonComments />
      {' '}
      <br />
    </Container>
    <hr />
    <Container>
      <PythonVariables />
      {' '}
      <br />
    </Container>
    <hr />
    <Container>
      <PythonStrings />
      {' '}
      <br />
    </Container>
    <hr />
  </main>
);

export default Home;
