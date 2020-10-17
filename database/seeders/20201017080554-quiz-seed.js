"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .bulkInsert("Quizzes", [
        {
          question:
            "Do you feel you get frustrated easily when dealing with difficult problems?",
          answer: [
            "I embrace new challenges and enjoy them. Otherwise I get bored!",
            "I feel like something is wrong if I don't understand something easily.",
            "I can get a little frustrated, but for the most part, I work through them.",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Do you enjoy working with other people?",
          answer: [
            "I prefer to work alone or with few other people.",
            "I can work in a team or alone; it doesn't matter to me!",
            "I love being a part of a large group or team.",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "How detail-oriented are you?",
          answer: [
            "I'm extremely detail-oriented at all times.",
            "A few things can slip by me, but for the most part, I have it covered.",
            "I try my best, but sometimes I need to play things by ear.",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "If someone gives you a list of 12 items, how well would you remember those items?",
          answer: [
            "I've already created a mnemonic device for this.",
            "I'll remember most of them, but I might forget a few.",
            "Which items?",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "When in school, did you like your math classes?",
          answer: [
            "They were tolerable; not the best, and not the worst.",
            "They were tolerable; not the best, and not the worst.",
            "Math classes, algorithms -- I loved it all.",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "If someone came to you with a question you saw as trivial, how would you react?",
          answer: [
            "I would try to see the problem from their perspective.",
            "I would push the problem to someone else.",
            "I would try to resolve the issue as quickly as possible.",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Think about your room at home. How well organized is it?",
          answer: [
            "It's a complete mess.",
            "Extremely well-organized. Everything has its place.",
            "It could be better, but it could also be worse.",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "How important it is you to see the bigger picture in things?",
          answer: [
            "I always prefer to know exactly what my job is.",
            "It's not that important, but it does help.",
            "I'd prefer to just focus on my own thing.",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "How do you handle emergencies?",
          answer: [
            "I would prefer to preemptively avoid them.",
            "I find them extremely stressful.",
            "I buckle down and get things done.",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "What salary would you be happy with?",
          answer: [
            "$70,000 or more.",
            "$50,000 to $70,000",
            "$30,000 to $50,000",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ])
      .then(() => {
        return queryInterface.bulkInsert("QuizCategoryPoints", [
          {
            CategoryId: 1,
            QuizId: 1,
            points: [1, 2, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 2,
            QuizId: 1,
            points: [3, 2, 1],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 3,
            QuizId: 1,
            points: [2, 1, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 4,
            QuizId: 1,
            points: [1, 2, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 1,
            QuizId: 2,
            points: [1, 2, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 2,
            QuizId: 2,
            points: [3, 2, 1],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 3,
            QuizId: 2,
            points: [2, 1, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 4,
            QuizId: 2,
            points: [1, 2, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 1,
            QuizId: 3,
            points: [1, 2, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 2,
            QuizId: 3,
            points: [3, 2, 1],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 3,
            QuizId: 3,
            points: [2, 1, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 4,
            QuizId: 3,
            points: [1, 2, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 1,
            QuizId: 4,
            points: [1, 2, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 2,
            QuizId: 4,
            points: [3, 2, 1],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 3,
            QuizId: 4,
            points: [2, 1, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 4,
            QuizId: 4,
            points: [1, 2, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 1,
            QuizId: 5,
            points: [1, 2, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 2,
            QuizId: 5,
            points: [3, 2, 1],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 3,
            QuizId: 5,
            points: [2, 1, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 4,
            QuizId: 5,
            points: [1, 2, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 1,
            QuizId: 6,
            points: [1, 2, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 2,
            QuizId: 6,
            points: [3, 2, 1],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 3,
            QuizId: 6,
            points: [2, 1, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 4,
            QuizId: 6,
            points: [1, 2, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 1,
            QuizId: 7,
            points: [1, 2, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 2,
            QuizId: 7,
            points: [3, 2, 1],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 3,
            QuizId: 7,
            points: [2, 1, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 4,
            QuizId: 7,
            points: [1, 2, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 1,
            QuizId: 8,
            points: [1, 2, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 2,
            QuizId: 8,
            points: [3, 2, 1],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 3,
            QuizId: 8,
            points: [2, 1, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 4,
            QuizId: 8,
            points: [1, 2, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 1,
            QuizId: 9,
            points: [1, 2, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 2,
            QuizId: 9,
            points: [3, 2, 1],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 3,
            QuizId: 9,
            points: [2, 1, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 4,
            QuizId: 9,
            points: [1, 2, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 1,
            QuizId: 10,
            points: [1, 2, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 2,
            QuizId: 10,
            points: [3, 2, 1],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 3,
            QuizId: 10,
            points: [2, 1, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 4,
            QuizId: 10,
            points: [1, 2, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Quizzes", null, {}).then(() => {
      return queryInterface.bulkDelete("QuizCategoryPoints", null, {});
    });
  },
};
