// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  const classListSauce = document.querySelector('.sauce').classList
  if (state.whiteSauce) {
    classListSauce.add('sauce-white')
  }
  else {
    classListSauce.remove('sauce-white')
  }
}

function renderGlutenFreeCrust() {
  const classListCrust = document.querySelector('.crust').classList
  if (state.glutenFreeCrust) {
    classListCrust.add('crust-gluten-free')
  }
  else {
    classListCrust.remove('crust-gluten-free')
  }
}

function renderButtons() {
  if (state.pepperoni){
    document.querySelector('.btn.btn-pepperoni').classList.add('active')
  }
  else {
    document.querySelector('.btn.btn-pepperoni').classList.remove('active')
  }
  if (state.mushrooms){
    document.querySelector('.btn.btn-mushrooms').classList.add('active')
  }
  else {
    document.querySelector('.btn.btn-mushrooms').classList.remove('active')
  }
  if (state.greenPeppers){
    document.querySelector('.btn.btn-green-peppers').classList.add('active')
  }
  else {
    document.querySelector('.btn.btn-green-peppers').classList.remove('active')
  }
  if (state.whiteSauce){
    document.querySelector('.btn.btn-sauce').classList.add('active')
  }
  else {
    document.querySelector('.btn.btn-sauce').classList.remove('active')
  }
  if (state.glutenFreeCrust){
    document.querySelector('.btn.btn-crust').classList.add('active')
  }
  else {
    document.querySelector('.btn.btn-crust').classList.remove('active')
  }
}

function renderPrice() {
  const priceList = document.querySelector(".price ul")
  priceList.innerHTML = ""
  let priceTotal = 10

  if (state.pepperoni){
    peppChild = priceList.appendChild(document.createElement('li'))
    peppChild.innerHTML = "$1 pepperoni"
    priceTotal += 1
  }
  if (state.mushrooms){
    mushChild = priceList.appendChild(document.createElement('li'))
    mushChild.innerHTML = "$1 mushrooms"
    priceTotal += 1
  }
  if (state.greenPeppers){
    pepperChild = priceList.appendChild(document.createElement('li'))
    pepperChild.innerHTML = "$1 green peppers"
    priceTotal += 1
  }
  if (state.whiteSauce){
    sauceChild = priceList.appendChild(document.createElement('li'))
    sauceChild.innerHTML = "$3 white sauce"
    priceTotal += 3
  }
  if (state.glutenFreeCrust){
    crustChild = priceList.appendChild(document.createElement('li'))
    crustChild.innerHTML = "$5 gluten-free crust"
    priceTotal += 5
  }
  document.querySelector(".price strong").innerText = `$${priceTotal}`
}

renderEverything();


document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
