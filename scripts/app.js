import { fetchData } from "./data.js";

async function init() {
  const products = await fetchData();
  displayProducts(products);
}

function displayProducts(products) {
  const container = document.getElementById("product-section");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product-container");
    // below attribute is set to make elements focusable 
    productDiv.setAttribute("tabindex", "0");
    productDiv.innerHTML = `
    <img class="overlay-icon" src="/Assets/icons/icon-seedling-2.svg" alt="seedling icon"/>
            <img class="product-img" src="${product.image}" alt=${
      product.name
    }/>
            <div class="categories">
            <p class="category">${product.categories[0].id}</p>
            <p class="category">${product.categories[1].id}</p>
            <p class="category">${product.categories[2].id}</p>
            ${(() => {
              if (product.categories[3]) {
                return `
                  <p class="category">${product.categories[3].id}</p>
            `;
              } else {
                return ` `;
              }
            })()}
            </div>
            <h3 class="product-name">${product.name}</h3>
            <p class="about">${product.about}</p>
            <div class="user-info">
            <img class="avatars" src="${product.avatar}"/>
            <div>
            <p class="user">${product.user}</p>
            <p class="date">${product.date}</p>
            </div>
            </div>
            `;

    container.appendChild(productDiv);

    // adds focus to all product containers
    productDiv.addEventListener("keyup", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        productDiv.focus();
      }
    });

    function assignColors() {
      const categoryElements = productDiv.getElementsByClassName("category");

      Array.from(categoryElements).forEach((element) => {
        switch (element.innerHTML) {
          case "Tålig":
            element.style.backgroundColor = "hsl(221, 63%, 32%)";
            break;
          case "Grönska":
            element.style.backgroundColor = "hsl(110, 63%, 32%)";
            break;
          case "Blommor":
            element.style.backgroundColor = "hsl(262, 89.70%, 49.60%)";
            break;
          case "Färgstark":
            element.style.backgroundColor = "hsl(303, 55%, 47%)";
            break;
          case "Solälskande":
            element.style.backgroundColor = "hsl(26, 94.60%, 36.10%)";
            break;
          case "Dekorativ":
            element.style.backgroundColor = "hsl(278, 79%, 40%)";
            break;
          case "Ätbart":
            element.style.backgroundColor = "hsl(306, 91.90%, 24.30%)";
            break;
          case "Lättodlat":
            element.style.backgroundColor = "hsl(224, 86%, 58%)";
            break;
          case "Doftande":
            element.style.backgroundColor = "hsl(327, 51%, 47%)";
            break;
          case "Ormbunke":
            element.style.backgroundColor = "hsl(180, 84%, 27%)";
            break;
          case "Kryddor":
            element.style.backgroundColor = "hsl(199, 87.30%, 30.80%)";
            break;
          case "Sallad":
            element.style.backgroundColor = "hsl(224, 86%, 58%)";
            break;
          default:
            element.style.backgroundColor = "gray";
            break;
        }
      });
    }
    assignColors();
  });
}

init();
