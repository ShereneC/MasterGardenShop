import { ProxyState } from "../AppState.js";

class PlantsService {
  buyPlant(item) {
    let found = ProxyState.plant.find(p => p.name == item)
    if (ProxyState.money > ProxyState.cartMoney && ProxyState.money > found.price) {
      found.cartCount++
      ProxyState.cartTotal++
      ProxyState.cartMoney += found.price
    } else {
      window.alert('Insufficient funds')
    }
  }
  checkout() {
    let plants = ProxyState.plant
    plants.forEach(p => {
      ProxyState.money -= p.price * p.cartCount
      p.stockCount -= p.cartCount
      p.cartCount = 0
      ProxyState.cartTotal = 0
    });
  }
  getRich() {
    ProxyState.money += 100
  }
}

export const plantsService = new PlantsService()