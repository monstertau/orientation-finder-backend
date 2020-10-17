const passport = require("passport");
const jwt = require("jsonwebtoken");
const {
  Category,
  CategoryCourse,
  Course,
  Organization,
  UserCategoryPoint,
} = require("../database/models");
const { getMaxCategories } = require("../utils/createTable");
exports.getDetail = (req, res, next) => {
  passport.authenticate("jwt", async (err, user, message) => {
    try {
      if (err || !user) {
        console.log(err);
        return res.status(400).json({
          success: false,
          message: "JWT Authentication Failed.",
        });
      }
      const categoryId = req.query.id;
      // xu ly request response o day
      const category = await Category.findByPk(categoryId);
      if (!category) {
        return res.status(400).json({
          success: false,
          message: "Cant found category in database.",
        });
      }
      const courses = await CategoryCourse.findAll({
        where: {
          CategoryId: category.id,
        },
      });
      let courseResponses = [];
      for (const i in courses) {
        const course = await Course.findByPk(courses[i].CourseId);
        const organization = await Organization.findByPk(course.OrganizationId);
        const courseResponse = {
          courseId: course.id,
          courseName: course.name,
          courseContent: course.content,
          coursePicture: course.picture,
          organizationId: organization.id,
          organizationName: organization.name,
        };
        courseResponses.push(courseResponse);
      }
      const maxPoint = await getMaxCategories(category.id);
      const userPoint = await UserCategoryPoint.findOne({
        where: {
          CategoryId: category.id,
          UserId: user.id,
        },
      }).then((user) => {
        if (!user) {
          return null;
        } else {
          return user.UserPoint;
        }
      });
      console.log(userPoint);
      return res.status(200).json({
        success: true,
        category: {
          point: {
            userPoint: userPoint,
            maxPoint: maxPoint,
          },
          name: category.name,
          intro: category.intro,
          introVideo: category.introVideo,
          salary: JSON.parse(category.salary),
          grades: JSON.parse(category.grades),
          courses: courseResponses,
        },
      });
    } catch (error) {
      next(error);
    }
  })(req, res, next);
};

exports.getRelatedCourse = (req, res, next) => {
  passport.authenticate("jwt", async (err, user, message) => {
    try {
      if (err || !user) {
        console.log(err);
        return res.status(400).json({
          success: false,
          message: "JWT Authentication Failed.",
        });
      }
      const categoryId = req.query.id;
      // xu ly request response o day
      const category = await Category.findByPk(categoryId);
      const courses = await CategoryCourse.findAll({
        where: {
          CategoryId: category.id,
        },
      });
      let courseResponses = [];
      for (const i in courses) {
        const course = await Course.findByPk(courses[i].CourseId);
        const organization = await Organization.findByPk(course.OrganizationId);
        const courseResponse = {
          courseId: course.id,
          courseName: course.name,
          courseContent: course.content,
          coursePicture: course.picture,
          organizationId: organization.id,
          organizationName: organization.name,
        };
        courseResponses.push(courseResponse);
      }
      return res.status(200).json({
        success: true,
        category: category.name,
        courses: courseResponses,
      });
    } catch (error) {
      next(error);
    }
  })(req, res, next);
};

exports.getCategoryIdByName = (req, res, next) => {
  passport.authenticate("jwt", async (err, user, message) => {
    try {
      if (err || !user) {
        console.log(err);
        return res.status(400).json({
          success: false,
          message: "JWT Authentication Failed.",
        });
      }
      const categoryName = req.query.name;
      console.log(categoryName);
      // xu ly request response o day
      const category = await Category.findOne({
        where: {
          name: categoryName,
        },
      });
      if (!category) {
        return res.status(400).json({
          success: false,
          message: "No category found in database.",
        });
      }
      return res.status(200).json({
        success: true,
        categoryId: category.id,
      });
    } catch (error) {
      next(error);
    }
  })(req, res, next);
};
