import { fetchData } from "./data.js";

async function  init() {
      const products = await fetchData();
      displayProducts(products);
}

function displayProducts(products) {
      const container = document.getElementById("product-section");

      products.forEach((product) => {
      
            const productDiv = document.createElement("div");
            productDiv.innerHTML = `
            <img src="${product.image}" alt=${product.name}/>
            <p class="categories">${product.categories[0].id}</p>
            <p class="categories">${product.categories[1].id}</p>
            <p class="categories">${product.categories[2].id}</p>
            <h2 class="product-name">${product.name}</h2>
            <p>${product.about}</p>
            `;
            container.appendChild(productDiv);
      });
}

init();
