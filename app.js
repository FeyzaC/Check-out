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
      }
    }
  }
});
