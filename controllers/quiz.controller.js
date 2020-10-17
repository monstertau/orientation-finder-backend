const validator = require("validator");
const { Quiz, Categories } = require("../database/models");
const jwt = require("jsonwebtoken");
const { json } = require("body-parser");
const passport = require("passport");

exports.getAllQuiz = (req, res, next) => {
  passport.authenticate("jwt", async (err, user, message) => {
    try {
      if (err || !user) {
        console.log(err);
        return res.status(400).json({
          success: false,
          message: "JWT Authentication Failed.",
        });
      }
      // xu ly request response o day
      // TODO: get quiz from db
      const quizResponses = [];
      const quizzes = await Quiz.findAll();
      for (const i in quizzes) {
        const quiz = {
          question: quizzes[i].question,
          answer: quizzes[i].answer,
        };
        quizResponses.push(quiz);
      }

      return res.status(200).json({
        success: true,
        quizzes: quizResponses,
        // TODO: return to fe (quiz list)
      });
    } catch (error) {
      next(error);
    }
  })(req, res, next);
};

// Function: Tinh diem cua ca Quiz
// @Req: point: array point [1,2,3,1,2]
// @Res:

exports.calculatePoint = (req, res, next) => {
  const { answer } = req.body;
  passport.authenticate("jwt", async (err, user, message) => {
    try {
      if (err || !user) {
        console.log(err);
        return res.status(400).json({
          success: false,
          message: "JWT Authentication Failed.",
        });
      }
      //TODO: Validate answer
      let { quizLength, quizData } = await Quiz.findAndCountAll();
      if (quizLength != answer.length) {
        return res.status(400).json({
          success: false,
          message: "Invalid length of Quiz",
        });
      }

      //TODO: Tinh diem
      try {
        let categories = await Categories.findAll();
        let pointPerCat = {};
        categories.forEach((cat, index) => {});
      } catch (e) {
        throw `Error ${e}`;
      }

      //TODO: Tinh diem cua categories
      //TODO: Luu categories list
      //TODO: Lay khoa hoc lien quan toi categories
      return res.status(200).json({
        success: true,
        // TODO: return to fe (categories, Khoa hoc, )
      });
    } catch (error) {
      next(error);
    }
  })(req, res, next);
};
