import "./style.css";

async function chooseShop(shopType) {
  if (shopType === "juice") {
    return await import("./juice.js");
  } else if (shopType === "coffee") {
    return await import("./coffee.js");
  }
}

export async function order(e) {
  const shop = e.target.dataset.shop;
  const result = (await chooseShop(shop)).orderSpecialty();
  alert(result);
}

document
  .querySelectorAll("button")
  .forEach((el) => el.addEventListener("click", order));
