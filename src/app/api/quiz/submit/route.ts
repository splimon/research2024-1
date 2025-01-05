import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { QuizSubmissionSchema } from '@/lib/validationSchemas';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = await QuizSubmissionSchema.validate(body);
    const { score, correctAnswers, wrongAnswers } = validatedData;

    // Save the validated data to the database
    const quizSubmission = await prisma.quizSubmission.create({
      data: {
        score,
        correctAnswers,
        wrongAnswers,
      },
    });

    return NextResponse.json({ success: true, data: quizSubmission });
  } catch (error: any) {
    console.error('Error handling request:', error);
    return NextResponse.json({ success: false, message: 'Failed to save quiz submission.' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const quizSubmissions = await prisma.quizSubmission.findMany();
    return NextResponse.json({ success: true, data: quizSubmissions });
  } catch (error: any) {
    console.error('Error fetching submissions:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch quiz submissions.' }, { status: 500 });
  }
}
