"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
// xmlhttp request
const xmlRequest = new XMLHttpRequest();
xmlRequest.open("GET", "https://restcountries.com/v2/name/croatia");
xmlRequest.send();
xmlRequest.addEventListener("load", function () {
  console.log(this.responseText);
});
