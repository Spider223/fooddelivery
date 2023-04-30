const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Register = async (req, res) => {
  const { name, email, password, location } = req.body;

  let userCheck = await User.findOne({ name } || { email });
  if (userCheck) {
    return res.status(400).send({ message: "Username or email already exist" });
  }

  bcrypt
    .hash(password, 10)
    .then((hashedPassword) => {
      const user = new User({
        name: name,
        email: email,
        password: hashedPassword,
        location: location,
      });

      user.save().then((result) => {
        res.status(201).send({
          message: "user created successfully",
          result,
        });
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "password was not hashed.",
        Error: err,
      });
    });
};

const Login = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email })
    .then((result) => {
      bcrypt.compare(password, result.password, (err, data) => {
        if (err) {
          throw err;
        }

        const token = jwt.sign(
          {
            id: result._id,
            email: email,
          },
          "RANDOM-TOKEN"
        );

        if (data) {
          return res.status(200).send({
            message: "Login sucess",
            token,
          });
        } else {
          return res.status(401).send({
            message: "invalid credentials",
          });
        }
      });
    })
    .catch((err) => {
      res.status(404).send({
        message: "User doesnot exist.",
        err,
      });
    });
};

module.exports = { Register, Login };
