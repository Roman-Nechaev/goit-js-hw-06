const navEl = document.querySelectorAll("ul#categories li.item");

const allNumber = navEl.length;
console.log(`Number of categories: ${allNumber}`);

navEl.forEach(function (item) {
  const headerTextEl = item.firstElementChild.textContent;
  const elementsEl = item.lastElementChild;
  const allNumber = elementsEl.querySelectorAll("li");
  console.log(`Category: ${headerTextEl}`);
  console.log(`Elements: ${allNumber.length}`);
});
