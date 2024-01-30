const connection = require('../config/connection');
const {Thought, User} = require('../models');
const {getEmail, getRandomThought, getRandomUsername, getRandomReaction} = require('./data')

connection.on("error", (err) => err);

connection.once("open", async () => {
    console.log("connected!");
    // Delete the collections, if they exist
    let userCheck = await connection.db
      .listCollections({ name: "users" })
      .toArray();
    if (userCheck.length) {
      await connection.dropCollection("users");
    }
  
    let thoughtCheck = await connection.db
      .listCollections({ name: "thoughts" })
      .toArray();
    if (thoughtCheck.length) {
      await connection.dropCollection("thoughts");
    }
})