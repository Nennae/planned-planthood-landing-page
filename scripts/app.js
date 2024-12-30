import { fetchData } from "./data.js";

async function  init() {
      const products = await fetchData();
      displayProducts(products);
}

function displayProducts(products) {
      const container = document.getElementById("product-section");

      products.forEach((product) => {
      
            const productDiv = document.createElement("div");
            productDiv.classList.add("product-container")
            productDiv.innerHTML = `
            <img class="product-img" src="${product.image}" alt=${product.name}/>
            <div class="categories">
            <p class="category">${product.categories[0].id}</p>
            <p class="category">${product.categories[1].id}</p>
            <p class="category">${product.categories[2].id}</p>
            </div>
            <h3 class="product-name">${product.name}</h3>
            <p class="about">${product.about}</p>
            <div class="userinfo">
            <p class="date">${product.date}</p>
            <p class="user">${product.user}</p>
            </div>
            `;
            container.appendChild(productDiv);
      });
}

init();
