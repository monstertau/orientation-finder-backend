const passport = require("passport");
const { Course, Organization } = require("../database/models");
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
