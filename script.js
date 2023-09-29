"use strict";

// element
const conatinerEle = document.querySelector(".container");
const imageEle = document.querySelector(".image");
const categoryEle = document.querySelector(".category");
const priceEle = document.querySelector(".price");
const rateEle = document.querySelector(".rate");

// gv
const url = `https://fakestoreapi.com/products/?limit=5`;

// function
async function fetchData(url) {
  try {
    const data = await fetch(url);
    const result = await data.json();
    console.log(result);

    // array forEach
    for (let i = 0; i < result.length; i++) {
      // create div
      const cardEle = document.createElement("div");
      cardEle.setAttribute("class", "card");
      cardEle.innerHTML = `
        <div class="card-image">
                <img src=${result[i].image} alt="product image" class="image">
            </div>
            <h2 class="category">${result[i].category}</h2>
            <p class="price">$ ${result[i].price}</p>
            <p class="rate">${result[i].rating.rate}</p>
      `;
      conatinerEle.appendChild(cardEle);
    }

    // imageEle.src = result[0].image;
    // categoryEle.innerText = result[0].category;
    // priceEle.innerText = result[0].price;
    // rateEle.innerText = result[0].rating.rate;
  } catch (error) {
    console.log(error);
  }
}

fetchData(url);

// eventlisteners
