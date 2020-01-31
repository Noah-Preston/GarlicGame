let sliceCountElem = document.getElementById("slice-counter")
let handCountElem = document.getElementById("hand-counter")
let scoopCountElem = document.getElementById("scoop-counter")
let handPriceElem = document.getElementById("hand-price")
let scoopPriceElem = document.getElementById("scoop-price")
let vacPriceElem = document.getElementById("vac-price")
let vacCountElem = document.getElementById("vac-count")
let bakePriceElem = document.getElementById("ezbake-price")
let bakeCountElem = document.getElementById("ezbake-count")
let chefCountElem = document.getElementById("chef-count")
let chefPriceElem = document.getElementById("chef-price")
let showBpsElem = document.getElementById("show-bps")
let showClickElem = document.getElementById("show-click")

let garlicBread = {
  slices: 0,
  multiplier: 0,
  bps: 0
}

let clickUpgrades = {
  anotherHand: {
    price: 50,
    quantity: 0,
    multiplier: 1
  },
  loafScoop: {
    price: 1000,
    quantity: 0,
    multiplier: 15
  },
  breadvac: {
    price: 15000,
    quantity: 0,
    multiplier: 60
  }
}

let autoUpgrades = {
  easyBake: {
    price: 300,
    quantity: 0,
    bps: 5
  },
  italianChef: {
    price: 3000,
    quantity: 0,
    bps: 35
  }
}

function update() {
  sliceCountElem.innerText = garlicBread.slices;
  handCountElem.innerText = clickUpgrades.anotherHand.quantity;
  scoopCountElem.innerText = clickUpgrades.loafScoop.quantity;
  handPriceElem.innerText = clickUpgrades.anotherHand.price;
  scoopPriceElem.innerText = clickUpgrades.loafScoop.price;
  vacPriceElem.innerText = clickUpgrades.breadvac.price;
  vacCountElem.innerText = clickUpgrades.breadvac.quantity;
  bakePriceElem.innerText = autoUpgrades.easyBake.price;
  bakeCountElem.innerText = autoUpgrades.easyBake.quantity;
  chefCountElem.innerText = autoUpgrades.italianChef.quantity;
  chefPriceElem.innerText = autoUpgrades.italianChef.price;
  showBpsElem.innerText = garlicBread.bps;
  showClickElem.innerText = garlicBread.multiplier + 1;
}

function buyHand() {
  if (garlicBread.slices < clickUpgrades.anotherHand.price) {
    return "not enough slices to purchase"
  } else if (garlicBread.slices >= clickUpgrades.anotherHand.price) {
    garlicBread.slices = garlicBread.slices - clickUpgrades.anotherHand.price;
    garlicBread.multiplier = garlicBread.multiplier + clickUpgrades.anotherHand.multiplier;
    clickUpgrades.anotherHand.quantity++;
    handCountElem.innerText = clickUpgrades.anotherHand.quantity;
    clickUpgrades.anotherHand.price = clickUpgrades.anotherHand.price + 50;
    handPriceElem.innerText = clickUpgrades.anotherHand.price;
    update()
  }
}

function buyScoop() {
  if (garlicBread.slices < clickUpgrades.loafScoop.price) {
    return "not enough slices to purchase"
  } else if (garlicBread.slices >= clickUpgrades.loafScoop.price) {
    garlicBread.slices = garlicBread.slices - clickUpgrades.loafScoop.price
    garlicBread.multiplier = garlicBread.multiplier + clickUpgrades.loafScoop.multiplier;
    clickUpgrades.loafScoop.quantity++;
    scoopCountElem.innerText = clickUpgrades.loafScoop.quantity;
    clickUpgrades.loafScoop.price = clickUpgrades.loafScoop.price + 100;
    scoopPriceElem.innerText = clickUpgrades.loafScoop.price;
    update()
  }
}


function buyVac() {
  if (garlicBread.slices < clickUpgrades.breadvac.price) {
    return "not enough slices to purchase"
  } else if (garlicBread.slices >= clickUpgrades.breadvac.price) {
    garlicBread.slices = garlicBread.slices - clickUpgrades.breadvac.price
    garlicBread.multiplier = garlicBread.multiplier + clickUpgrades.breadvac.multiplier;
    clickUpgrades.breadvac.quantity++;
    vacCountElem.innerText = clickUpgrades.breadvac.quantity;
    clickUpgrades.breadvac.price = clickUpgrades.breadvac.price + 5000;
    vacPriceElem.innerText = clickUpgrades.breadvac.price;
    update()
  }
}

function buyBake() {
  if (garlicBread.slices < autoUpgrades.easyBake.price) {
    return "not enough slices to purchase"
  } else if (garlicBread.slices >= autoUpgrades.easyBake.price) {
    garlicBread.slices = garlicBread.slices - autoUpgrades.easyBake.price;
    garlicBread.bps = garlicBread.bps + autoUpgrades.easyBake.bps;
    autoUpgrades.easyBake.quantity++;
    bakeCountElem.innerText = autoUpgrades.easyBake.quantity;
    autoUpgrades.easyBake.price = autoUpgrades.easyBake.price + 75;
    bakePriceElem.innerText = autoUpgrades.easyBake.price;
    update()
  }
}


function buyChef() {
  if (garlicBread.slices < autoUpgrades.italianChef.price) {
    return "not enough slices to purchase"
  } else if (garlicBread.slices >= autoUpgrades.italianChef.price) {
    garlicBread.slices = garlicBread.slices - autoUpgrades.italianChef.price;
    garlicBread.bps = garlicBread.bps + autoUpgrades.italianChef.bps;
    autoUpgrades.italianChef.quantity++;
    chefCountElem.innerText = autoUpgrades.italianChef.quantity;
    autoUpgrades.italianChef.price = autoUpgrades.italianChef.price + 75;
    chefPriceElem.innerText = autoUpgrades.italianChef.price;
    update()
  }
}


function grabBread() {
  garlicBread.slices++;
  garlicBread.slices = garlicBread.slices + garlicBread.multiplier
  sliceCountElem.innerText = garlicBread.slices;
}

function figureBps() {
  garlicBread.slices = garlicBread.slices + garlicBread.bps;
  update();
}

function addBps() {
  setInterval(figureBps, 1000)
}











addBps();
update()