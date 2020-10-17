const fs = require("fs");
const { reduce } = require("lodash");
const db = require("../database/models");
const { QuizCategoryPoint } = require("../database/models");

let table = {};
async function getPointTable() {
  let maxVal = 0;
  const dbQuery = await QuizCategoryPoint.findAll();
  //   console.log(dbQuery);
  dbQuery.forEach((e) => {
    if (table[`${e.CategoryId}`] == undefined) {
      table[`${e.CategoryId}`] = {};
    }
    table[`${e.CategoryId}`][`${e.QuizId}`] = e.points;
  });
  Object.keys(table).forEach((e) => {
    table[e]["max"] = Object.values(table[e]).reduce((maxVal, val) => {
      //   maxVal = maxVal;
      return maxVal + Math.max(...val);
    }, maxVal);
    // console.log(tmp);
  });
  console.log(table);
}

//answer array
async function CalculatePoint(answer) {
  let points = {};
  Object.keys(table).forEach((e) => {
    let catePoint = 0;
    answer.forEach((ans, i) => {
      catePoint += table[e][i + 1][ans - 1];
    });
    points[e] = catePoint;
  });
  return points;
}

async function getMaxCategories(categoryId) {
  return table[categoryId]["max"];
}

module.exports = { getPointTable, CalculatePoint, getMaxCategories };
