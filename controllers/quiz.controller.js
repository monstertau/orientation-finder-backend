const validator = require("validator");
const { Quiz, Category, UserCategoryPoint } = require("../database/models");
const jwt = require("jsonwebtoken");
const { json } = require("body-parser");
const passport = require("passport");
const { CalculatePoint, getMaxCategories } = require("../utils/createTable");

exports.getAllQuiz = async (req, res, next) => {
  try {
    let listQuiz = await Quiz.findAll();
    res.status(200).json({
      success: true,
      listQuiz: listQuiz,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Cannot find Quiz",
    });
    // throw error;
  }
};

// Function: Tinh diem cua ca Quiz
// @Req: point: array point [1,2,3,1,2]
// @Res:

exports.postAnswer = async (req, res, next) => {
  passport.authenticate("jwt", async (err, user, message) => {
    if(err) console.log(err)
    try {
      //TODO: Validate answer
      const { answer } = req.body;
      const lengthQuiz = await Quiz.count();
      console.log(answer);
      if (!Array.isArray(answer) || answer.length !== lengthQuiz) {
        return res.status(500).json({
          success: false,
          message: "Invalid answer!",
        });
      } else {
        let responseResult = {};
        let points = await CalculatePoint(answer);
        for (let i = 0; i < points.length; i++) {
          let point = points[i];
          let cateName = await Category.findOne({
            where: {
              id: point[0],
            },
          });
          // try {
          if (user) {
            console.log("userid",user.id)
            await UserCategoryPoint.upsert({
              CategoryId: parseInt(point[0]),
              UserId: user.id,
              UserPoint: point[1],
            });
          }
          if (i < 3)
            responseResult[cateName.name] = {
              categoryId: point[0],
              point: point[1],
              max: await getMaxCategories(point[0]),
            };
        }
        return res.status(200).json({
          success: true,
          data: responseResult,
        });
      }
    } catch (error) {
      next(error);
    }
  })(req, res, next);
};
