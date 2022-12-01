import { getItems } from "./database.js";
import { getCategories, getStoreItems, setListItem } from "./database.js";

const items = getItems();
const categories = getCategories();
const storeItems = getStoreItems();

export const Items = (categoryId, selectedStoreId) => {
  let html = "";
  for (let item of items) {
    let itemId = item.id;
    for (let storeItem of storeItems) {
      if (
        storeItem.storeId === selectedStoreId &&
        storeItem.itemId === itemId &&
        item.categoryId === categoryId
      ) {
        html += `
        <input type='checkbox' id='item--${item.id}' name='item' value='item--${item.id}'"
        <label for='item--${item.id}'>${item.name}</label><br>
        `;
      }
    }
  }

  return html;
};

document.addEventListener("change", (event) => {
  if (event.target.name === "item") {
    // console.log(event.target.value)
    let [, itemId] = event.target.value.split("--");
    itemId = parseInt(itemId);
  }
});