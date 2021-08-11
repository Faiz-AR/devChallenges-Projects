"use strict";
// SET BASE VALUE
let currentBackpackQuantity = 1;
let currentShoesQuantity = 1;
let currentPrice = 148.98;
let shippingPrice = 19.0;

// PRICE TEXT CONTENT
const backpackPrice = document.getElementById("backpack-price").textContent;
const shoesPrice = document.getElementById("shoes-price").textContent;
var totalPrice = document.getElementById("total-price");

// QUANTITY TEXT CONTENT
var backpackQuantityText = document.getElementById("backpack-quantity");
var shoesQuantityText = document.getElementById("shoes-quantity");

// DECREASE AND INCREASE BUTTON ELEMENTS
const backpackDecreaseEl = document.getElementById("backpack-decrease");
const backpackIncreaseEl = document.getElementById("backpack-increase");
const shoesDecreaseEl = document.getElementById("shoes-decrease");
const shoesIncreaseEl = document.getElementById("shoes-increase");

// ADD CLICK LISTNER TO INCREASE AND DECREASE BUTTON ELEMENTS

// BACKPACK BUTTONS
backpackDecreaseEl.addEventListener("click", function () {
  // CHECK IF QUANTITY IS LESS THAN 0
  if (currentBackpackQuantity !== 0) {
    // DECREASE QUANITY BY 1 AND DECREASE TOTAL PRICE BY PRODCUT PRICE
    currentBackpackQuantity -= 1;
    currentPrice -= Number(backpackPrice.substring(1));

    // SETS NEW QUANTITY
    while (backpackQuantityText.firstChild) {
      backpackQuantityText.removeChild(backpackQuantityText.firstChild);
    }
    backpackQuantityText.appendChild(
      document.createTextNode(currentBackpackQuantity)
    );

    // SETS NEW TOTAL PRICE
    while (totalPrice.firstChild) {
      totalPrice.removeChild(totalPrice.firstChild);
    }
    totalPrice.appendChild(
      document.createTextNode(`$${currentPrice.toFixed(2)}`)
    );
  }
});

backpackIncreaseEl.addEventListener("click", function () {
  // INCREASE QUANITY BY 1 AND INCREASE TOTAL PRICE BY PRODCUT PRICE
  currentBackpackQuantity += 1;
  currentPrice += Number(backpackPrice.substring(1));

  // SETS NEW QUANTITY
  while (backpackQuantityText.firstChild) {
    backpackQuantityText.removeChild(backpackQuantityText.firstChild);
  }
  backpackQuantityText.appendChild(
    document.createTextNode(currentBackpackQuantity)
  );

  // SETS NEW TOTAL PRICE
  while (totalPrice.firstChild) {
    totalPrice.removeChild(totalPrice.firstChild);
  }
  totalPrice.appendChild(
    document.createTextNode(`$${currentPrice.toFixed(2)}`)
  );
});

// SHOES BUTTONS
shoesDecreaseEl.addEventListener("click", function () {
  // CHECK IF QUANTITY IS LESS THAN 0
  if (currentShoesQuantity !== 0) {
    // DECREASE QUANITY BY 1 AND DECREASE TOTAL PRICE BY PRODCUT PRICE
    currentShoesQuantity -= 1;
    currentPrice -= Number(shoesPrice.substring(1));

    // SETS NEW QUANTITY
    while (shoesQuantityText.firstChild) {
      shoesQuantityText.removeChild(shoesQuantityText.firstChild);
    }
    shoesQuantityText.appendChild(
      document.createTextNode(currentShoesQuantity)
    );

    // SETS NEW TOTAL PRICE
    while (totalPrice.firstChild) {
      totalPrice.removeChild(totalPrice.firstChild);
    }
    totalPrice.appendChild(
      document.createTextNode(`$${currentPrice.toFixed(2)}`)
    );
  }
});

shoesIncreaseEl.addEventListener("click", function () {
  // INCREASE QUANITY BY 1 AND INCREASE TOTAL PRICE BY PRODCUT PRICE
  currentShoesQuantity += 1;
  currentPrice += Number(shoesPrice.substring(1));

  // SETS NEW QUANTITY
  while (shoesQuantityText.firstChild) {
    shoesQuantityText.removeChild(shoesQuantityText.firstChild);
  }
  shoesQuantityText.appendChild(document.createTextNode(currentShoesQuantity));

  // SETS NEW TOTAL PRICE
  while (totalPrice.firstChild) {
    totalPrice.removeChild(totalPrice.firstChild);
  }
  totalPrice.appendChild(
    document.createTextNode(`$${currentPrice.toFixed(2)}`)
  );
});
