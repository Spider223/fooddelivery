const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async (req, res) => {
  await mongoose
    .connect(process.env.db)
    .then(async () => {
      console.log("connected to monogdb atlas.");
      const fetch_menu = await mongoose.connection.db.collection("menus");
      fetch_menu
        .find({})
        .toArray()
        .then((result) => {
          // console.log(result);
          global.menus = result;
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = dbConnect();
