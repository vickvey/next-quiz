import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function createQuestionsAndAnswers() {
  try {
    // Step 1: Insert questions and their associated options one by one
    const createdQuestions = await Promise.all(
      [
        {
          statement: 'Who is called "The Missile Man of India" ?',
          options: [
            { content: 'Dr. APJ Abdul Kalam' },
            { content: 'Dr. Homi Jahangir Bhabha' },
            { content: 'Dr. Sarvapalli Radhakrishnan' },
            { content: 'Dr. Vikram Sarabhai' },
          ],
        },
        {
          statement: 'What is the capital of India ?',
          options: [
            { content: 'Kanpur' },
            { content: 'Bangalore' },
            { content: 'New Delhi' },
            { content: 'Patna' },
          ],
        },
        {
          statement: "When was India's first Satellite Aryabhatta launched ?",
          options: [
            { content: '1972' },
            { content: '1980' },
            { content: '1978' },
            { content: '1975' },
          ],
        },
      ].map(async question => {
        const createdQuestion = await prisma.question.create({
          data: {
            statement: question.statement,
            options: {
              create: question.options, // Create options along with the question
            },
          },
        })
        return createdQuestion
      }),
    )

    console.log('Questions and Options created successfully!')

    // Step 2: Now you can create answers as you did previously using `createMany`
    const questionsWithOptions = await prisma.question.findMany({
      include: {
        options: true,
      },
    })

    const answerData = [
      {
        questionId: questionsWithOptions[0].id,
        correctOptionId: questionsWithOptions[0].options[0].id, // Assuming 0th option is correct
      },
      {
        questionId: questionsWithOptions[1].id,
        correctOptionId: questionsWithOptions[1].options[2].id, // Assuming 2nd option is correct (New Delhi)
      },
      {
        questionId: questionsWithOptions[2].id,
        correctOptionId: questionsWithOptions[2].options[1].id, // Assuming 1st option is correct (1980)
      },
    ]

    await prisma.answer.createMany({
      data: answerData, // Now passing the answer data directly
    })

    console.log('Answers created successfully!')
  } catch (error) {
    console.error('Error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

createQuestionsAndAnswers()
