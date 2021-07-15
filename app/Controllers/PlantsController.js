import { ProxyState } from "../AppState.js";
import { plantsService } from "../Services/PlantsService.js";

function _draw() {
  let template = ''
  let plants = ProxyState.plant
  plants.forEach(plant => template += plant.Template)
  document.getElementById('plants').innerHTML = template
  document.getElementById('money').innerText = ProxyState.money.toString()
  document.getElementById('cartTotal').innerText = ProxyState.cartTotal.toString()
}
export default class PlantsController {
  constructor() {
    _draw()
  }
  buyPlant(name) {
    plantsService.buyPlant(name)
    _draw()
  }

  getRich() {
    plantsService.getRich()
    _draw()
  }
}