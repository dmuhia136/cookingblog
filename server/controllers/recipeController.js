require("../models/database");
const Category = require("../models/Category");
const fs = require("fs").promises;
const path = require("path");
// require('../../views/index.js')
/**
 * Get /
 * Homepage
 */
// const filePath = path.join(__dirname, 'views', 'index.ejs');
exports.homepage = async (req, res) => {
  try {
    const limitNumber = 5;

    const categories = await Category.find({}).limit(limitNumber);
    console.log(categories);
    res.render(
      "index",
      { categories: categories },
      { title: "Cooking Blog = Home" }
    );
  } catch (error) {
    console.log(error.message);
    res.json({ status: 500, message: error.message });
    // res.status(500).send({ message: error.message || "Error Occured" });
  }
};

// async function insertDymmyCategoryData(){

//    try {
//         await Category.insertMany([
//             {
//                 "name": "Thai",
//                 "image": "thai-food.jpg",
//             },
//             {
//                 "name": "American",
//                 "image": "american-food.jpg",
//             },
//             {
//                 "name": "Chinese",
//                 "image": "chinese-food.jpg",
//             },
//             {
//                 "name": "Mexican",
//                 "image": "mexican-food.jpg",
//             },
//             {
//                 "name": "Indian",
//                 "image": "indian-food.jpg",
//             },
//             {
//                 "name": "Spanish",
//                 "image": "spanish-food.jpg",
//             },

//         ]);
//    } catch (error) {
//     console.log('err', + error)
//    }
// }

// insertDymmyCategoryData();
