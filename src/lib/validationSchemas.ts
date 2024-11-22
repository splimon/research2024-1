import * as Yup from 'yup';

export const AddStuffSchema = Yup.object({
  name: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
  owner: Yup.string().required(),
});

export const EditStuffSchema = Yup.object({
  id: Yup.number().required(),
  name: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
  owner: Yup.string().required(),
});

export const QuizSubmissionSchema = Yup.object({
  userId: Yup.number().nullable(), // Optional userId
  score: Yup.number().required('Score is required.').min(0, 'Score cannot be negative.'),
  correctAnswers: Yup.number().required('Number of correct answers is required.').min(0),
  wrongAnswers: Yup.number().required('Number of wrong answers is required.').min(0),
});
