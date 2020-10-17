"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .bulkInsert("Categories", [
        {
          name: "Artificial Intelligence",
          intro:
            "Artificial intelligence (AI) is wide-ranging branch of computer science concerned with building smart machines capable of performing tasks that typically require human intelligence. AI is an interdisciplinary science with multiple approaches, but advancements in machine learning and deep learning are creating a paradigm shift in virtually every sector of the tech industry.",
          salary: `[ { "name": "VinAI", "position": "Data Scientist, Data Engineer" }, { "name": "Viettel", "position": "AI Engineer, Data Engineer" }, { "name": "Samsung R&D", "position": "AI Engineer, Data Engineer" }, { "name": "FPT Software", "position": "AI Engineer, Data Engineer" }, { "name": "IBM Viet Nam", "position": "AI Engineer, Data Engineer" } ]`,
          grades: `[ { "name": "AI & DS - HUST", "grade": "29.5", "tuitionFeePerYear": 20000000 }, { "name": "Information Technology - UET", "grade": "29.5", "tuitionFeePerYear": 20000000 }, { "name": "Software Engineering - FPT", "grade": "29.5", "tuitionFeePerYear": 20000000 }, { "name": "Information Technology - PTIT", "grade": "29.5", "tuitionFeePerYear": 20000000 }, { "name": "Information Technology - ACT", "grade": "29.5", "tuitionFeePerYear": 20000000 } ]`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Software Engineering",
          intro:
            "Software engineering is the systematic application of engineering approaches to the development of software.Software engineering is a computing discipline.",
          salary: `[ { "name": "Shopee", "position": "Software Engineer,Backend Developer" }, { "name": "Viettel", "position": "Data Engineer, Backend Developer" }, { "name": "Samsung R&D", "position": "Software Engineer,Data Engineer" }, { "name": "FPT Software", "position": "Software Engineer, Devops" }, { "name": "Misa", "position": "Devops,Backend Developer" } ]`,
          grades: `[ { "name": "Global Developer - MindX", "grade": "29.5", "tuitionFeePerYear": 20000000 }, { "name": "Computer Science - HUST", "grade": "29.5", "tuitionFeePerYear": 20000000 }, { "name": "Computer Science - UET", "grade": "29.5", "tuitionFeePerYear": 20000000 }, { "name": "Software Engineering - FPT", "grade": "29.5", "tuitionFeePerYear": 20000000 }, { "name": "Information Technology - PTIT", "grade": "29.5", "tuitionFeePerYear": 20000000 } ]`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cyber Security",
          intro:
            "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users; or interrupting normal business processes",
          salary: `[ { "name": "Viettel", "position": "Network Security Engineer, Malware Engineer" }, { "name": "CMC", "position": "Network Security Engineer, System Security Engineer" }, { "name": "BKAV Group", "position": "Software Engineer,Data Engineer" }, { "name": "VNISA", "position": "Software Engineer, Devops" }, { "name": "VP Bank", "position": "Security Analysis" } ]`,
          grades: `[ { "name": "Cyber Security - HUST", "grade": "29.5", "tuitionFeePerYear": 20000000 }, { "name": "Cyber Security - FPT", "grade": "29.5", "tuitionFeePerYear": 20000000 }, { "name": "Cyber Security - PTIT", "grade": "29.5", "tuitionFeePerYear": 20000000 }, { "name": "Cyber Security - UIT", "grade": "29.5", "tuitionFeePerYear": 20000000 }, { "name": "Cyber Security - HCMUT", "grade": "29.5", "tuitionFeePerYear": 20000000 } ]`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Game Development",
          intro:
            "Game Development is the art of creating games and describes the design, development and release of a game. It may involve concept generation, design, build, test and release. While you create a game, it is important to think about the game mechanics, rewards, player engagement and level design",
          salary: `[ { "name": "VNG", "position": "Game Developer,Game Designer" }, { "name": "GearInc", "position": "Game Developer,Game Designer" }, { "name": "Gameloft", "position": "Game Developer,Game Designer" }, { "name": "Garena", "position": "Game Developer,Game Designer" }, { "name": "VTC", "position": "Game Developer,Game Designer" } ]`,
          grades: `[ { "name": "Computer Science - HUST", "grade": "29.5", "tuitionFeePerYear": 20000000 },{ "name": "Global Developer - MindX", "grade": "29.5", "tuitionFeePerYear": 20000000 }, { "name": "Information Technology - UET", "grade": "29.5", "tuitionFeePerYear": 20000000 }, { "name": "Information Technology - PTIT", "grade": "29.5", "tuitionFeePerYear": 20000000 }, { "name": "Information Technology - ACT", "grade": "29.5", "tuitionFeePerYear": 20000000 } ]`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ])
      .then(() => {
        return queryInterface.bulkInsert("Organizations", [
          {
            id:1,
            name: "MindX",
            phone: "02477705666",
            address: "https://mindx.edu.vn/",
            description: "Trường học công nghệ MindX - Cùng bạn viết tiếp hành trình của ước mơ",
            logo: "https://mindx.edu.vn/images/logo.png",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id:2,
            name: "Techmaster",
            phone: "0382416368",
            address: "https://techmaster.vn/",
            description: "Trường học công nghệ MindX - Cùng bạn viết tiếp hành trình của ước mơ",
            logo: "https://techmaster.vn/resources/image/hoclacoviec.jpg",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id:3,
            name: "Udemy",
            phone: "02477705666",
            address: "https://udemy.com",
            description: "Create an online video course, reach students across the globe, and earn money",
            logo: "https://www.udemy.com/staticx/udemy/images/v6/default-meta-image.png",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id:4,
            name: "Coursera",
            phone: "02477705666",
            address: "https://www.coursera.org/",
            description: "Build skills with courses, certificates, and degrees online from world-class universities and companies",
            logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera.s3.amazonaws.com/media/coursera-logo-square.png?auto=format%2Ccompress&dpr=1",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id:5,
            name: "ColorMe",
            phone: "02435500333",
            address: "https://colorme.vn/",
            description: "ColorME là trung tâm đào tạo thiết kế và nhiếp ảnh dành cho người mới bắt đầu",
            logo: "https://d1j8r0kxyu9tj8.cloudfront.net/images/1580719766cpPVql5A90kPyUz.jpg",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      })
      .then(() => {
        return queryInterface.bulkInsert("Courses", [
          {
            id:1,
            name: "Data For Everyone",
            content: "Nắm vững các kiến thức cơ bản và có cái nhìn tổng quát nhất về việc nghiên cứu dữ liệu",
            picture: "a",
            OrganizationId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id:2,
            name: "Code For Everyone Javascript",
            content: "Làm quen với lập trình căn bản và ngôn ngữ javascript đang phổ biến nhất hiện nay",
            picture: "a",
            OrganizationId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id:3,
            name: "Code Intensive Javascript",
            content: "Code javascript cùng dự án thực tế.",
            picture: "a",
            OrganizationId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id:4,
            name: "Game Basic",
            content: "KHƠI DẬY NIỀM ĐAM MÊ CÔNG NGHỆ VÀ TẠO NÊN MỘT TRÒ CHƠI ĐƠN GIẢN",
            picture: "a",
            OrganizationId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id:5,
            name: "Data For Everyone",
            content: "Nắm vững các kiến thức cơ bản và có cái nhìn tổng quát nhất về việc nghiên cứu dữ liệu",
            picture: "a",
            OrganizationId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id:6,
            name: "Code For Everyone Javascript",
            content: "Làm quen với lập trình căn bản và ngôn ngữ javascript đang phổ biến nhất hiện nay",
            picture: "a",
            OrganizationId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id:7,
            name: "Code Intensive Javascript",
            content: "Code javascript cùng dự án thực tế.",
            picture: "a",
            OrganizationId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id:8,
            name: "Game Basic",
            content: "KHƠI DẬY NIỀM ĐAM MÊ CÔNG NGHỆ VÀ TẠO NÊN MỘT TRÒ CHƠI ĐƠN GIẢN",
            picture: "a",
            OrganizationId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id:9,
            name: "Data For Everyone",
            content: "Nắm vững các kiến thức cơ bản và có cái nhìn tổng quát nhất về việc nghiên cứu dữ liệu",
            picture: "a",
            OrganizationId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id:10,
            name: "Code For Everyone Javascript",
            content: "Làm quen với lập trình căn bản và ngôn ngữ javascript đang phổ biến nhất hiện nay",
            picture: "a",
            OrganizationId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id:11,
            name: "Code Intensive Javascript",
            content: "Code javascript cùng dự án thực tế.",
            picture: "a",
            OrganizationId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id:12,
            name: "Game Basic",
            content: "KHƠI DẬY NIỀM ĐAM MÊ CÔNG NGHỆ VÀ TẠO NÊN MỘT TRÒ CHƠI ĐƠN GIẢN",
            picture: "a",
            OrganizationId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id:13,
            name: "Data For Everyone",
            content: "Nắm vững các kiến thức cơ bản và có cái nhìn tổng quát nhất về việc nghiên cứu dữ liệu",
            picture: "a",
            OrganizationId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id:14,
            name: "Code For Everyone Javascript",
            content: "Làm quen với lập trình căn bản và ngôn ngữ javascript đang phổ biến nhất hiện nay",
            picture: "a",
            OrganizationId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id:15,
            name: "Code Intensive Javascript",
            content: "Code javascript cùng dự án thực tế.",
            picture: "a",
            OrganizationId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id:16,
            name: "Game Basic",
            content: "KHƠI DẬY NIỀM ĐAM MÊ CÔNG NGHỆ VÀ TẠO NÊN MỘT TRÒ CHƠI ĐƠN GIẢN",
            picture: "a",
            OrganizationId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id:17,
            name: "Data For Everyone",
            content: "Nắm vững các kiến thức cơ bản và có cái nhìn tổng quát nhất về việc nghiên cứu dữ liệu",
            picture: "a",
            OrganizationId: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id:18,
            name: "Code For Everyone Javascript",
            content: "Làm quen với lập trình căn bản và ngôn ngữ javascript đang phổ biến nhất hiện nay",
            picture: "a",
            OrganizationId: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id:19,
            name: "Code Intensive Javascript",
            content: "Code javascript cùng dự án thực tế.",
            picture: "a",
            OrganizationId: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id:20,
            name: "Game Basic",
            content: "KHƠI DẬY NIỀM ĐAM MÊ CÔNG NGHỆ VÀ TẠO NÊN MỘT TRÒ CHƠI ĐƠN GIẢN",
            picture: "a",
            OrganizationId: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      })
      .then(() => {
        return queryInterface.bulkInsert("CategoryCourses", [
          {
            CategoryId: 1,
            CourseId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 1,
            CourseId: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 1,
            CourseId: 9,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 1,
            CourseId: 13,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 1,
            CourseId: 17,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 2,
            CourseId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 2,
            CourseId: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 2,
            CourseId: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 2,
            CourseId: 14,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 2,
            CourseId: 18,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 3,
            CourseId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 3,
            CourseId: 7,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 3,
            CourseId: 11,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 3,
            CourseId: 15,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 3,
            CourseId: 19,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 4,
            CourseId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 4,
            CourseId: 8,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 4,
            CourseId: 12,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 4,
            CourseId: 16,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 4,
            CourseId: 20,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface
      .bulkDelete("Categories", null, {})
      .then(() => {
        return queryInterface.bulkDelete("Courses", null, {});
      })
      .then(() => {
        return queryInterface.bulkDelete("Organization", null, {});
      })
      .then(() => {
        return queryInterface.bulkDelete("CategoryCourses", null, {});
      });
  },
};
