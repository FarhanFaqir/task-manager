
const express = require("express");
const ejs = require("ejs");
const path = require("path"); 
const cors = require("cors");
const db = require("./sequelize/models");
const fs = require('fs');

const port = process.env.PORT || 3000;
const app = express();

var corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};
app.use(cors(corsOption));

app.use(express.urlencoded({extended : true  }));
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, 'uploads')));


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get('/hello', (req, res) => { res.send('Hello World')});
app.use("/", require("./routes/index-route"))
app.use("/user", require("./routes/user_route"));
app.use("/user/task", require("./routes/task_route"));

// db.sequelize.sync().catch(err => {
//   throw err
// });

  app.listen(port, function () {
    console.log("Server is running on http://localhost:" + port);
  });


