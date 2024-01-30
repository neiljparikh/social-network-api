const { Schema, Types, model} = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trimmed: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^\S+@\S+\.\S+$/
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: "Thought"
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
  },
  {
    //defining the behavior how the database returns data. when it returns JSON it will fetch all fields
    toJSON: {
      getters: true,
    },
    //mongoDB will not generate the standard mongoDB 
    id: true,
  }
);

const User = model('User', userSchema)

module.exports = User;
