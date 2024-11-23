'use client';

// Add this line

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useRouter } from 'next/navigation';

function Example() {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn-lg" variant="danger" onClick={handleShow}>
        Finish Lesson
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Well Done!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Congratulations on completing the Introduction to Python lesson!
          <br />
          <br />
          <strong>Important Information (Please read carefully):</strong>
          <br />
          <br />
          You are about to take a quiz based on the material covered on this website. Before proceeding,
          please ensure you have thoroughly reviewed this content. Take as much time as you need to revisit
          this material.
          <br />
          <br />
          Once you click on &quot;Begin Quiz,&quot; you will
          {' '}
          <u>not</u>
          {' '}
          be able to return to this page.
          If you feel confident in your understanding, you may proceed to the quiz.
          <br />
          <br />
          Good luck ☺
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() => router.push('/quiz')}>
            Begin Quiz
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
