import Link from 'next/link';
import { Button } from 'react-bootstrap';

export default function Home() {
  return (
    <main>
      <div className="container">
        <h1>Quiz App</h1>
        <Link href="/quiz">
          <Button>Start Quiz</Button>
        </Link>
      </div>
    </main>
  );
}
