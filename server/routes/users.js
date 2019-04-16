const express = require("express");
const authCheck = require("../middleware/auth-check");
const User = require("../models/User");

const router = new express.Router();

router.get("/all", authCheck, (req, res) => {
  if (!req.user.roles.includes("Admin")) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized!"
    });
  }

  User.find({}).then(users => {
    if (!users) {
      return res.status(404).json({
        success: false,
        message: "Entry does not exists!"
      });
    }
    let response = [];
    users.forEach(user => {
      let userInfo = {
        id: user._id,
        username: user.name,
        email: user.email,
        roles: user.roles
      };
      response.push(userInfo);
    });

    return res.status(200).json(response);
  });
});

router.delete("/delete/:id", authCheck, (req, res) => {
  const id = req.params.id;

  User.findById(id).then(user => {
    if (!user) {
      return res.status(200).json({
        success: false,
        message: "User does not exists!"
      });
    }

    if (!req.user.roles.includes("Admin")) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized!"
      });
    }

    User.findByIdAndDelete(id).then(() => {
      return res.status(200).json({
        success: true,
        message: "User deleted successfully!"
      });
    });
  });
});

module.exports = router;
