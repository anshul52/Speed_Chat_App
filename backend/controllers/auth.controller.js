const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const { generateAccessToken } = require("../utils/token");

// SIGN UP
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
    // Store hash password in your  DB.
    var salt = bcrypt.genSaltSync(10);
    var hashPassword = bcrypt.hashSync(password, salt);

    const newUser = new User({ username, email, password: hashPassword, role });
    await newUser.save();
    const token = generateAccessToken({ username: username });
    res.send({
      status: true,
      res: "User created Successfully !!",
      token,
    });
  } catch (err) {
    console.error(err);
  }
};

// SIGN IN
const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.send({
        status: false,
        res: "Please fill the required field !!",
      });
    }

    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.send({
        status: false,
        res: "User with this email id does not exist !!",
      });
    }

    var Password = bcrypt.compareSync(password, userExist?.password);
    if (!Password) {
      return res.send({
        status: false,
        res: "User password is Invalid !!",
      });
    }
    const token = generateAccessToken({ username: userExist?.username });
    res.send({
      status: true,
      res: "User LogIn Successfully !!",
      userExist,
      token,
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  createUser,
  signIn,
};
