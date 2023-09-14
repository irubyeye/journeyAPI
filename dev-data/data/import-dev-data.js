const dotenv = require("dotenv");
const mongoose = require("mongoose");
const fs = require("fs");
const Tour = require("../../models/tourModel");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Dev script for migration from file to db has started!");
  });

// READING JSON FILE

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, "utf8")
);

// import data into db

async function importData() {
  try {
    await Tour.create(tours);
    console.log("Import successful");
    process.exit();
  } catch (err) {
    console.log(err);
  }
}

// deleting all data from db
async function deleteData() {
  try {
    await Tour.deleteMany();
    console.log("DB dropped!");
    process.exit();
  } catch (err) {
    console.log(err);
  }
}

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
