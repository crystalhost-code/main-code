const pricingPlansSet1 = [
  {
    title: "Command Block",
    description: "Lorem ipsum dolor sit amet.",
    price: "19.99 PLN",
    image: "dev.png",
    details: [
      { header: "Dysk", detail: "10 GB" },
      { header: "Pamięć RAM", detail: "2 GB" },
      { header: "vCPU", detail: "75%" },
    ],
  },
  {
    title: "Dirt",
    description: "Lorem ipsum dolor sit amet.",
    price: "29.99 PLN",
    image: "dirt.png",
    details: [
      { header: "Pamięć RAM", detail: "4 GB" },
      { header: "Dysk", detail: "15 GB" },
      { header: "vCPU", detail: "100%" },
    ],
  },
  {
    title: "Sand",
    description: "Lorem ipsum dolor sit amet.",
    price: "39.99 PLN",
    image: "sand.png",
    details: [
      { header: "Pamięć RAM", detail: "8 GB" },
      { header: "Dysk", detail: "30 GB" },
      { header: "vCPU", detail: "200%" },
    ],
  },
];

const pricingPlansSet2 = [
  {
    title: "Gold",
    description: "Lorem ipsum dolor sit amet.",
    price: "24.99 PLN",
    image: "gold.png",
    details: [
      { header: "AMD Ryzen 9 5950X", detail: "2vCore" },
      { header: "Pamięć RAM", detail: "2 GB" },
      { header: "Szybkość dysku NVMe", detail: "3 GB" },
    ],
  },
  {
    title: "Amethyst",
    description: "Lorem ipsum dolor sit amet.",
    price: "34.99 PLN",
    image: "amethyst.png",
    details: [
      { header: "AMD Ryzen 9 5950X", detail: "3vCore" },
      { header: "Pamięć RAM", detail: "4 GB" },
      { header: "Szybkość dysku NVMe", detail: "6 GB" },
    ],
  },
  {
    title: "Bedrock",
    description: "Lorem ipsum dolor sit amet.",
    price: "44.99 PLN",
    image: "Bedrock.png",
    details: [
      { header: "AMD Ryzen 9 5950X", detail: "5vCore" },
      { header: "Pamięć RAM", detail: "8 GB" },
      { header: "Szybkość dysku NVMe", detail: "12 GB" },
    ],
  },
];

const pricingContainer = document.querySelector(".pricing-blocks");
const pricingSelect = document.getElementById("pricing-select");

function renderPricingPlans(plans) {
  pricingContainer.innerHTML = "";
  plans.forEach((plan) => {
    const planBlock = document.createElement("div");
    planBlock.classList.add("price-block");

    planBlock.innerHTML = `
                              <h1 class="pricing-header">${
                                plan.title
                              } <img src='../media/${
      plan.image
    }' alt='image' class='pricing-image'></h1>
                              <span class="pricing-desc">${
                                plan.description
                              }</span>
                              <span class="price">${plan.price}</span>
                              <div class="pricing-details">
                                      ${plan.details
                                        .map(
                                          (detail) => `
                                              <div class="pricing-detail-element">
                                                      <span class="pricing-detail-header detail-element">${detail.header}</span>
                                                      <span class="pricing-detail detail-element">${detail.detail}</span>
                                              </div>
                                              <hr />
                                      `
                                        )
                                        .join("")}
                              </div>
                              <button class="pricing-button">Kup teraz</button>
                      `;

    pricingContainer.appendChild(planBlock);
  });
}

// pricingSelect.addEventListener("change", (event) => {
//   const selectedValue = event.target.value;
//   if (selectedValue === "set1") {
//     renderPricingPlans(pricingPlansSet1);
//   } else if (selectedValue === "set2") {
//     renderPricingPlans(pricingPlansSet2);
//   }
// });
const machineName = document.querySelector("#machine-name");
function toggleSwitch(element) {
  element.classList.toggle("active");
  if (element.classList.contains("active")) {
    renderPricingPlans(pricingPlansSet2);
    machineName.style.transition = "opacity 0.3s ease";
    machineName.style.opacity = "0";
    setTimeout(() => {
      machineName.innerHTML = "Maszyna 2";
      machineName.style.opacity = "1";
    }, 200);
  } else {
    renderPricingPlans(pricingPlansSet1);
    machineName.style.transition = "opacity 0.3s ease";
    machineName.style.opacity = "0";
    setTimeout(() => {
      machineName.innerHTML = "Maszyna 1";
      machineName.style.opacity = "1";
    }, 300);
  }
}
// Initial render
renderPricingPlans(pricingPlansSet1);
