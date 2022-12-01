import { getCategories, getSelectedStoreId } from "./database.js";
import { Items } from "./Items.js"

const categories = getCategories();

export const Categories = () => {
  let html = "";
  for (let category of categories) {
    let categoryId = category.id;
    html += `
    <div class="category-box">
      <h3>${category.name}</h3>
      <div class='items-list'>${Items(categoryId, getSelectedStoreId())}</div>
      
    </div>`;
  }

  return html;
};
