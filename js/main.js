const carDetails = [
  {
    id: 1,
    brand: "Tesla",
    brandImage: "./img/logo3.png",
    model: "Model X",
    image: "./img/featured1.png",
    price: "$98,900",
  },
  {
    id: 2,
    brand: "Tesla",
    brandImage: "./img/logo3.png",
    model: "Model 3",
    image: "./img/featured2.png",
    price: "$45,900",
  },
  {
    id: 3,
    brand: "Audi",
    brandImage: "./img/logo2.png",
    model: "E-tron",
    image: "./img/featured3.png",
    price: "$175,900",
  },
  {
    id: 4,
    brand: "Porsche",
    brandImage: "./img/logo1.png",
    model: "Boxster 987",
    image: "./img/featured4.png",
    price: "$98,900",
  },
  {
    id: 5,
    brand: "Porsche",
    brandImage: "./img/logo1.png",
    model: "Panamera",
    image: "./img/featured5.png",
    price: "$126,900",
  },
];

const brandImages = [
  ...new Set(
    carDetails.map((carDetail) => {
      return carDetail.brandImage;
    })
  ),
];

const app = document.querySelector("#app");
const carCard = document.querySelector("#carCard");
const brandBtn = document.querySelector("#brandBtn");

// Function

const createCarCard = (carDetail) => {
  const div = document.createElement("div");
  div.setAttribute("car-id", carDetail.id);
  div.innerHTML = `
    <div class="card bg-50-black rounded mb-5 me-5 car-animation" style="width: 18rem;">
                                <div class=" card-header">
                                    <h3 class=" text-white">${carDetail.brand}</h3>
                                    <p class=" text-white-50">${carDetail.model}</p>
                                </div>
                                <img src="${carDetail.image}" class="card-img p-3 " alt="...">
                                <div class="card-body pe-0 pb-0">
                                    <div class=" d-flex justify-content-between">
                                        <h4 class=" text-white">${carDetail.price}</h4>
                                        <a href="" class=" btn btn-primary  card-btn-rounded">
                                            <i class="ri-shopping-bag-2-line"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
    `;

  return div;
};

const createBrandBtn = (brandImage) => {
  const btn = document.createElement("button");
  btn.className =
    "btn text-white-50 featured-btn brand rounded me-2 brand-filtered-btn opacity-50";
  btn.setAttribute("brand", brandImage);
  btn.innerHTML = `
    <img src="${brandImage}" class=" w-100 brand" brand="${brandImage}" alt="">
  `;
  return btn;
};

const renderedCarCard = (carDetails) => {
  carCard.innerHTML = null;
  carDetails.forEach((carDetail) => {
    carCard.append(createCarCard(carDetail));
  });
};

const renderedCarCardByBrand = () => {
  const currentBrand = event.target.getAttribute("brand");
  if (currentBrand === "all") {
    renderedCarCard(carDetails);
  } else {
    renderedCarCard(
      carDetails.filter((carDetail) => carDetail.brandImage === currentBrand)
    );
  }

  // remove old active class
  brandBtn
    .querySelector(".active-brand-filtered-btn")
    .classList.remove("active-brand-filtered-btn");

  // add new active class
  if (event.target.classList.contains("featured-btn")) {
    event.target.classList.add("active-brand-filtered-btn");
  } else {
    event.target.parentElement.classList.add("active-brand-filtered-btn");
  }
};

// Process

renderedCarCard(carDetails);

brandImages.forEach((brandImage) => {
  brandBtn.append(createBrandBtn(brandImage));
});

app.addEventListener("click", (event) => {
  // console.log(event.target.parentElement);
  if (event.target.classList.contains("brand")) {
    renderedCarCardByBrand();
  }
});
