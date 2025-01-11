const express = require("express");
const router = express.Router();
const routesData = require("../../database/routes.data");
const TestController = require("../../controllers/master_controller/testController");

// MAPING CONTROLLER
const controllers = {
  TestController,
};

routesData.forEach((route) => {
  const [controllerName, methodName] = route.controller.split(".");
  const controller = controllers[controllerName];

  if (controller && typeof controller[methodName] == "function") {
    router[route.method](route.path, controller[methodName]);
  } else {
    console.error(`Controller or method not found: ${route.controller}`);
  }
});

module.exports = router;
