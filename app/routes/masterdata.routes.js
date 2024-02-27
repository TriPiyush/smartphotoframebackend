// const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
 

  // app.get("/all", controller.allAccess);
  app.get("/states", controller.getMasterDetails);
  // app.get("/user", [authJwt.verifyToken], controller.userBoard);

 
};