const { Thought, User } = require('../models')

module.exports = {
//get all user
async getUsers(req, res) {
    try {
        const users = await User.find().populate('thoughts')
        res.json(users);
    } catch (err) {
        res.status(500).json(err);
    }
},

async getOneUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select("-__v")
        .populate("thoughts")
        .populate("friends");

      //if no user is found response 404
      if (!user) {
        return res
          .status(404)
          .json({ message: "no user found under this id!" });
      }

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },





}