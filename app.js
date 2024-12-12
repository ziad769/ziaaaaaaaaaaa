const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Hoodie",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/Photoroom-20241211_194330.png",
      },
      {
        code: "lightgray",
        img: "./img/Photoroom-20241211_194404.png",
      },
    ],
  },
  {
    id: 2,
    title: "Short",
    price: 149,
    colors: [
      {
        code: "black",
        img: "./img/Photoroom-20241211_194150.png ",
      },
      {
        code: "lightgray",
        img: "./img/Photoroom-20241211_194101.png",
      },
    ],
  },
  {
    id: 3,
    title: "sneaker",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Bag",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/Photoroom-20241211_194224.png",
      },
      {
        code: "blue",
        img: "./img/Photoroom-20241211_194302.png",
      },
    ],
  },
  {
    id: 5,
    title: "watch",
    price: 99,
    colors: [
      {
        code: "black",
        img:"./img/6.webp",
      },
      {
        code: "gray",
        img: "./img/Apple_Watch_Series_9_GPS_45mm_Starlight.webp",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
