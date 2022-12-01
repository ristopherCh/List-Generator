import {
  getStores,
  getSelectedStoreId,
  setSelectedStoreId,
  resetListItems,
} from "./database.js";

const stores = getStores();

export const Stores = () => {
  let selectedStoreId = getSelectedStoreId();
  let html =
    "<select id='stores' class='stores'><option selected value='0'>Choose a store</option>";
  for (const store of stores) {
    if (selectedStoreId === store.id) {
      html += `
          <option selected value="${store.id}">${store.name}</option>
          `;
    } else {
      html += `
      <option value="${store.id}">${store.name}</option>
      `;
    }
  }
  html += "</select>";
  return html;
};

document.addEventListener("change", (event) => {
  if (event.target.id === "stores") {
    setSelectedStoreId(parseInt(event.target.value));
    resetListItems();
  }
});

