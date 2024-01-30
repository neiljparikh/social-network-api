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

  //create seed for thoughts
  const thoughts = getRandomThoughts();

  //add them to collection

  //create seed for users
  const allUsernames = getUsers();
  const users = [];
  for (let i = 0; i < allUsernames.length; i++) {
    const username = allUsernames[i];
    const email = getEmail(username);
    users.push({
      username,
      email,
    });
  }


  // insert seed data into collections
  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  //for all the thoughts -> findandupdate user model to add the thought
  for (let i = 0; i < thoughts.length; i++) {
    // console.log(thoughts[i].username);
    await User.findOneAndUpdate(
      { username: thoughts[i].username },
      {
        $addToSet: {
          thoughts: [thoughts[i]],
        },
      }
    );
  }

  for (let i = 0; i < allUsernames.length; i++) {
    // console.log(thoughts[i].username);
    await User.findOneAndUpdate(
      { username: thoughts[i].username },
      {
        $addToSet: {
          friends: getRandomUsername(),
        },
      }
    );
  }