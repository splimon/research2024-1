import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      console.log('Received data:', req.body); // Debugging the incoming data
      const { userId, score, correctAnswers, wrongAnswers } = req.body;

      const quizSubmission = await prisma.quizSubmission.create({
        data: {
          userId,
          score,
          correctAnswers,
          wrongAnswers,
        },
      });

      console.log('Quiz submission saved:', quizSubmission); // Debugging successful save
      res.status(200).json({ success: true, data: quizSubmission });
    } catch (error) {
      console.error('Error saving quiz submission:', error); // Log the error
      res.status(500).json({ success: false, message: 'Failed to save quiz submission.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
