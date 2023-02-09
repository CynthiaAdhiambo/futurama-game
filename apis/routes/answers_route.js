const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
      res.status(200).json({
        message: "Handling get requests",
      });

});

router.post("/", (req, res, next) => {
    res.status(201).json({
      message: "Handling post requests",
    });

});

router.get("/:answerId", (req, res, next) => {
    res.status(200).json({
      message: "Handling get details of requests",
    });

});

router.patch("/:answerId", (req, res, next) => {
    res.status(200).json({
      message: "Handling patch requests",
    });

});

router.delete("/:answerId", (req, res, next) => {
    res.status(200).json({
      message: "Handling delete requests",
    });

});

module.exports = router;
