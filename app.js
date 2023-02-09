const express = require("express");
const app = express();

const morgan = require("morgan"); // Logging package
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const questionsRoutes = require('./apis/routes/questions_route');
const answersRoutes = require('./apis/routes/answers_route');


// Default Logging of server
app.use(morgan("dev"));

// parse body of incoming requests (supports url encoded bodies, json data)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Handling CORS errors by attaching required headers
app.use((req, res, next) => {
  res.header("Access-Control_Allow-Origin", "*");
  res.header(
    "Acces-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Allow-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/questions", questionsRoutes);
app.use("/answers", answersRoutes);

// app.use((req, res, next) => {
//     res.status(200).json({
//         message: 'It Works!'
//     });
// });


// Error Handling for all other routes
app.use((req, res, next) => {
    const error = new Error("Not Found!");
    error.status = 404;
    next(error);
  });
  
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message,
      },
    });
  });

  module.exports = app; // exports the file

