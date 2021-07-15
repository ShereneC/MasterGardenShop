export default class Plant {
  /**
   * 
   * @param {String} name 
   * @param {Number} price 
   * @param {Number} stockCount 
   */
  constructor(name, price, stockCount) {
    this.name = name
    this.price = price
    this.stockCount = stockCount
    this.cartCount = 0
  }

  get Template() {
    return `
<div class="col-md-3 m-2 p-0">
  <div class="bg-primary text-dark rounded">
      <div>
          <img class="plant-img rounded-top"
              src="assets/img/${this.name}.jfif"
              alt="${this.name}">
      </div>
      <div>
          <div class="pl-3">
              <h2>${this.name}</h2>
              <p>Price: $${this.price}</p>
              <p><small>This is a ${this.name} plant</small></p>
          </div>
          <div class="d-flex justify-content-around pb-2">
              <p>In Stock: ${this.stockCount}</p>
              <button type="button" class="btn btn-light" onclick="app.plantsController.buyPlant('${this.name}')" >Add to Cart</button>
          </div>
      </div>
  </div>
</div>`
  }
}