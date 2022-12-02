import {
  setListItem,
  unsetListItem,
  getListItems,
  getItems,
} from "./database.js";

export const ListItems = (listId) => {
  let html = "<ul>";
  const items = getItems();
  const listItems = getListItems();
  for (let listItem of listItems) {
    for (let item of items) {
      if (listItem.itemId === item.id) {
        if (listId === listItem.listId) {
          html += `<div>${item.name}</div>`;
        }
      }
    }
  }
  html += "</ul>";
  return html;
};

document.addEventListener("change", (event) => {
  if (event.target.name === "item") {
    let [, itemId] = event.target.value.split("--");
    itemId = parseInt(itemId);
    if (event.target.checked) {
      console.log(event.target.value);

      setListItem(itemId);
    } else if (!event.target.checked) {
      unsetListItem(itemId);
      console.log("oh no");
    }
  }
});
