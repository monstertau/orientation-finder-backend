const passport = require("passport");
const {
  Course,
  Organization,
  Category,
  CategoryCourse,
} = require("../database/models");
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
      const organizationId = req.query.id;
      // xu ly request response o day
      const organization = await Organization.findByPk(organizationId);
      // TODO: add response when not found id
      if (!organization) {
        return res.status(400).json({
          success: false,
          message: "Cant found organization in database.",
        });
      }
      const courseResponses = [];
      const courses = await Course.findAll({
        where: { OrganizationId: organization.id },
      });
      if (courses) {
        for (const i in courses) {
          const courseResponse = {
            courseId: courses[i].id,
            courseName: courses[i].name,
            courseContent: courses[i].content,
            coursePicture: courses[i].picture,
          };
          courseResponses.push(courseResponse);
        }
      }
      return res.status(200).json({
        success: true,
        organization: {
          id: organization.id,
          name: organization.name,
          phone: organization.phone,
          address: organization.address,
          description: organization.description,
          logo: organization.logo,
          courses: courseResponses,
        },
      });
    } catch (error) {
      next(error);
    }
  })(req, res, next);
};
exports.getAll = (req, res, next) => {
  passport.authenticate("jwt", async (err, user, message) => {
    try {
      if (err || !user) {
        console.log("ngu");
        return res.status(400).json({
          success: false,
          message: "JWT Authentication Failed.",
        });
      }
      // xu ly request response o day
      const organizations = await Organization.findAll();
      console.log("org" + organizations);
      // TODO: add response when not found id
      if (!organizations) {
        return res.status(400).json({
          success: false,
          message: "Cant found organization in database.",
        });
      } else {
        var organizationResponses = [];
        for (const j in organizations) {
          let courseResponses = [];
          const courses = await Course.findAll({
            where: { OrganizationId: organizations[j].id },
          });
          if (courses) {
            for (const i in courses) {
              const courseResponse = {
                courseId: courses[i].id,
                courseName: courses[i].name,
                courseContent: courses[i].content,
                coursePicture: courses[i].picture,
              };
              courseResponses.push(courseResponse);
            }
          }
          const organizationResponse = {
            id: organizations[j].id,
            name: organizations[j].name,
            phone: organizations[j].phone,
            address: organizations[j].address,
            description: organizations[j].description,
            logo: organizations[j].logo,
            courses: courseResponses,
          };
          organizationResponses.push(organizationResponse);
        }
      }

      return res.status(200).json({
        success: true,
        organizations: organizationResponses,
      });
    } catch (error) {
      next(error);
    }
  })(req, res, next);
};

exports.getCourseByCate = (req, res, next) => {
  passport.authenticate("jwt", async (err, user, message) => {
    try {
      if (err || !user) {
        console.log("ngu");
        return res.status(400).json({
          success: false,
          message: "JWT Authentication Failed.",
        });
      }
      // xu ly request response o day
      const categories = await Category.findAll();
      let result = {};
      for (let i = 0; i < categories.length; i++) {
        let category = categories[i];
        const courses = await CategoryCourse.findAll({
          where: {
            CategoryId: category.id,
          },
        });
        let listCourse = [];
        for (const j in courses) {
          const course = await Course.findByPk(courses[j].CourseId);
          const organization = await Organization.findByPk(
            course.OrganizationId
          );
          const courseResponse = {
            courseId: course.id,
            courseName: course.name,
            courseContent: course.content,
            coursePicture: course.picture,
            organizationId: organization.id,
            organizationName: organization.name,
            organizationLogo: organization.logo,
          };
          listCourse.push(courseResponse);
        }
        result[category.name] = listCourse;
      }
      // for()

      return res.status(200).json({
        success: true,
        categories: result,
      });
    } catch (error) {
      next(error);
    }
  })(req, res, next);
};
