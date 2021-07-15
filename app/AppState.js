
import Plant from "./Models/Plant.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  plant = [
    new Plant('Monstera', 5, 100),
    new Plant('Tree', 1000, 1),
    new Plant('Cactus', 10, 100),
  ]
  money = 1000
  cartTotal = 0
}

// IGNORE THIS
export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
