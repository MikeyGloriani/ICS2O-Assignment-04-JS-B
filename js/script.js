// Created by: Mikey Gloriani
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment-04-JS-B/sw.js", {
    scope: "/ICS2O-Assignment-04-JS-B/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  const taxes = 1.13
  const deliveryFee = 20000
  const pasta = parseFloat(document.getElementById("pasta").value)
  const sides = parseFloat(document.getElementById("side").value)
  const delivery = document.getElementById("option").value

  const dishPrice = pasta * taxes
  const dishPriceDelivery = (pasta + deliveryFee) * taxes
  const dishAndSide = (pasta + sides) * taxes
  const pastaComboDelivery = (pasta + sides + deliveryFee) * taxes
  const sidePrice = sides * taxes
  const sidePriceDelivery = (sides + deliveryFee) * taxes

  if (delivery == "no" && sides != "0" && pasta != "0")  {
      document.getElementById("hello-world").innerHTML = "Your total is: $" + dishAndSide.toFixed(2)
    }
    else if (delivery == "no" && sides != "0" && pasta == "0")  {
      document.getElementById("hello-world").innerHTML = "Your total is: $" + sidePrice.toFixed(2)
    }
    else if (delivery == "yes" && sides != "0" && pasta == "0")  {
    document.getElementById("hello-world").innerHTML = "Your total is: $" + sidePriceDelivery.toFixed(2)
    }
    else if (delivery == "no" && sides != "0" && pasta == "0")  {
    document.getElementById("hello-world").innerHTML = "Your total is: $" + dishPrice.toFixed(2)
    }
    else if (delivery == "yes" && sides == "0" && pasta != "0")  {
    document.getElementById("hello-world").innerHTML = "Your total is: $" + dishPriceDelivery.toFixed(2)
    }
    
    else if (delivery == "yes" && sides != "0" && pasta != "0")  {
      document.getElementById("hello-world").innerHTML = "Your total is: $" + pastaComboDelivery.toFixed(2) + " Thanks for spending 20k in delivery fees"
  }
    else {
        document.getElementById("hello-world").innerHTML = "Please buy something I need to feed my wife and kids"
 }
}
