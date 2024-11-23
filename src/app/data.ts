const quiz = {
  totalQuestions: 5,
  questions: [
    {
      id: 1,
      question: 'What is a correct way to declare a Python variable?',
      answers: ['var x = 5', '#x = 5', '$x = 5', 'x = 5'],
      correctAnswer: 'x = 5',
    },
    {
      id: 2,
      question: 'Which is NOT a legal variable name?',
      answers: ['my-var = 20', 'my_var = 20', 'Myvar = 20', '_myvar = 20'],
      correctAnswer: 'my-var = 20',
    },
    {
      id: 3,
      question: 'What will the following code output?\n\nprint(bool(0))\nprint(bool("Python"))\nprint(bool([]))',
      answers: ['True, False, True', 'False, True, False', 'True, True, True', 'False, False, False'],
      correctAnswer: 'False, True, False',
    },
    {
      id: 4,
      question: 'What will be the result of the following code:\n\nx = \'Welcome\'\nprint(x[3:5])',
      answers: ['lcome', 'come', 'com', 'co'],
      correctAnswer: 'co',
    },
    {
      id: 5,
      question: 'Which of the following statements about Python is TRUE?',
      answers: ['Python can only run on Windows operating systems',
        'Python syntax is complex and difficult to understand',
        'Python can be used to connect to database systems and handle big data',
        'Python requires compiled code before execution'],
      correctAnswer: 'Python can be used to connect to database systems and handle big data',
    },
    {
      id: 6,
      question: 'What is the correct syntax to add the value \'Hello World\', to 3 variables in one statement?',
      answers: [
        'x, y, z = \'Hello World\'',
        'x = y = z = \'Hello World\'',
        'x | y | z = \'Hello World\'',
        'x + y + z = \'Hello World\'',
      ],
      correctAnswer: 'x = y = z = \'Hello World\'',
    },
    {
      id: 7,
      question: 'What is the output of the following code?\nprint("Hello, World!"[1])',
      answers: ['"H"', '"e"', '"Hello"', 'Error'],
      correctAnswer: '"e"',
    },
    {
      id: 8,
      question: 'Which of the following statements demonstrates valid casting?',
      answers: ['x = int("5")', 'x = float("hello")', 'x = str(3.14)', 'x = bool("123")'],
      correctAnswer: 'x = int("5")',
    },
    {
      id: 9,
      question: 'Which character is used to define a Python comment?',
      answers: ["'", '//', '#', '/*'],
      correctAnswer: '#',
    },
    {
      id: 10,
      question: 'What will be the result of the following syntax:\nprint(5 > 3)?',
      answers: ['True', 'False', '5', '3'],
      correctAnswer: 'True',
    },
  ],
};

export default quiz;
