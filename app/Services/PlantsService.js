import { ProxyState } from "../AppState.js";

class PlantsService {
  buyPlant(item) {
    console.log(item)
    let found = ProxyState.plant.find(p => p.name == item)
    if (ProxyState.money >= found.price)
      found.cartCount++
    ProxyState.cartTotal++
    console.log(ProxyState.cartTotal)
  }
  checkout() {

  }
  getRich() {
    ProxyState.money += 100
  }

}

export const plantsService = new PlantsService()