const navEl = document.querySelectorAll('ul#categories li.item');

const allNumber = navEl.length;
console.log(`Number of categories: ${allNumber}`);

navEl.forEach(function (item) {
    const headerTextEl = item.firstElementChild.textContent;
    const elementsEl = item.lastElementChild.children.length;
    console.log(`Category: ${headerTextEl}`);
    console.log(`Elements: ${elementsEl}`);
});
