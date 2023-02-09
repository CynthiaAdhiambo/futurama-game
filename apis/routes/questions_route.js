const express = require("express");
const router = express.Router();

const Question = require("../models/questions_model");

const mongoose = require("mongoose");

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

router.get("/:questionId", (req, res, next) => {
    res.status(200).json({
      message: "Handling get details of requests",
    });

});

router.patch("/:questionId", (req, res, next) => {
    res.status(200).json({
      message: "Handling patch requests",
    });

});

router.delete("/:questionId", (req, res, next) => {
    res.status(200).json({
      message: "Handling delete requests",
    });

});

module.exports = router;
