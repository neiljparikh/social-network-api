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
//get one user
async getOneUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select("-__v")
        .populate("thoughts")
        .populate("friends");

      //if no user is found response 404
      if (!user) {
        return res.status(404).json({ message: "No user found!" });
      }

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // update user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      //if no user is found with that id, return a 404 response
      if (!user) {
        return res
          .status(404)
          .json({ message: "No user found under that id!" });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // delete user
  // /api/users/:userId
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({
        _id: req.params.userId,
      });

      //delete associated thoughts
      await Thought.deleteMany({ _id: { $in: user.thoughts } });

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },






}