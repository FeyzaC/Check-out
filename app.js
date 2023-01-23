const taxtRate = 0.18;
const shippingPrice = 20;
const shippingFreePreice = 300;

window.addEventListener("load", () => {
  localStorage.setItem("taxtRate", taxtRate);
  localStorage.setItem("shippingPrice", shippingPrice);
  localStorage.setItem("shippingFreePreice", shippingFreePreice);

  //   sessionStorage.setItem("taxtRate, taxtRate");
  //   sessionStorage.setItem("shippingPrice", shippingPrice);
  //   sessionStorage.setItem("shippingFreePreice", shippingFreePreice);
});

const productsDiv = document.querySelector(".products");

productsDiv.addEventListener("click", (event) => {
  if (event.target.className == "fa-solid fa-minus") {
    if (event.target.parentElement.querySelector(".quantity").innerText > 1) {
      event.target.parentElement.querySelector(".quantity").innerText--;
    } else {
      if (
        confirm(
          `${
            event.target.parentElement.parentElement.querySelector("h2")
              .innerText
          } will be deleted!!!`
        )
      ) {
        event.target.closest(".product").remove();
      }
    }
  } else if (event.target.className == "fa-solid fa-plus") {
    event.target.parentElement.querySelector(".quantity").innerText++;
  } else if (event.target.className == "remove-product") {
    event.target.closest(".product").remove();
  }
  calculateProductPrice(event.target);
  calculateCartPrice();
});

const calculateProductPrice = (btn) => {
  const productInfoDiv = btn.parentElement.parentElement;

  const price = Number(
    productInfoDiv.querySelector(".product-price strong").innerText
  );
  const quantity = Number(productInfoDiv.querySelector(".quantity").innerText);
  const productTotalDiv = productInfoDiv.querySelector(".price");

  productTotalDiv.innerText = price * quantity.toFixed(2);
  const productTotalPricesDiv = document.querySelector(".price");
  const subtotal = [...productTotalPricesDiv].reduce(
    (acc, price) => acc + Number(price.innerText)
  );
  const taxtPrice = subtotal * localStorage.getItem("taxtRate");
  subtotal > 0 && subtotal < localStorage.getItem("shippingFreePrice")
    ? localStorage.getItem("shippingPreice")
    : 0;
  const totalCart = subtotal + taxtPrice + shippingPrice;
};
