var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/getUsers", function (req, res, next) {
  /*get users business logic*/
  console.log(req.query.name);
  //res.send("Hello this is an API get request");
  let userList = [
    {
      first_name: "James",
      last_name: "Butterburg",
      address: {
        street: "6649 N Blue Gum St",
        city: "New Orleans",
        state: "LA",
        zip: "70116",
      },
    },
    {
      first_name: "Josephine",
      last_name: "Darakjy",
      address: {
        street: "4 B Blue Ridge Blvd",
        city: "Brighton",
        state: "MI",
        zip: "48116",
      },
    },
    {
      first_name: "Art",
      last_name: "Chemel",
      address: {
        street: "8 W Cerritos Ave #54",
        city: "Bridgeport",
        state: "NJ",
        zip: "08014",
      },
    },
  ];

  //maximum count logic
  let maxCount = req.query.max_count;

  console.log(userList.length);
  if (maxCount) {
  }

  res.json(userList);
});

router.get("/startBuilder", function (req, res, next) {
  res.json({ result: "success" });
});

/*router.post('/getUsers', function(req, res, next) {
});*/

module.exports = router;
