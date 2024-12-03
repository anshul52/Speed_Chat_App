const User = require("../models/user.model");

const createUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    if (!username || !email || !password || !role) {
      return res.send({
        status: false,
        res: "Please fill the required field !!",
      });
    }
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.send({
        status: false,
        res: "User with this email id already exist !!",
      });
    }

    const newUser = new User({ username, email, password, role });
    await newUser.save();
    res.send({
      status: true,
      res: "User created Successfully !!",
    });
  } catch (error) {}
};

module.exports = {
  createUser,
};
