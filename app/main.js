import PlantsController from "./Controllers/PlantsController.js";

class App {
  plantsController = new PlantsController();
}

window["app"] = new App();
