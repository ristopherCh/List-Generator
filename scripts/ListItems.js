import { setListItem, unsetListItem } from "./database.js";



export const ListItems = () => {
  return ""
}



document.addEventListener("change", (event) => {
  if (event.target.name === "item") {
    let [, itemId] = event.target.value.split('--');
    itemId = parseInt(itemId);
    if (event.target.checked) {
      console.log(event.target.value);
      
      setListItem(itemId)
    } else if (!event.target.checked) {
      unsetListItem(itemId)
      console.log('oh no');
    }
  }
})