const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: new Types.ObjectId()
    },

    username: {
        type: String,
        required: true
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
      },


    })






const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => new Date(timestamp)
     
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema],
  },
  {
    //defining the behavior how the database returns data. when it returns JSON it will fetch all fields
    toJSON: {
      getters: true,
    },
    //mongoDB will not generate the standard mongoDB 
    id: true,
  }

  )

 thoughtSchema.virtual('formatCreatedAt').get(function () {
    return this.comments.length;
  }); 

module.exports = thoughtSchema;
