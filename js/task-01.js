// // const navigatorEl = document.querySelector('#categories')
// // console.log(navigatorEl)

// const navigatorEl = document.querySelector('#categories');
// // console.log(navigatorEl);

// const firstamountEl = navigatorEl.querySelectorAll('h2');
// console.log('Number of categories:', firstamountEl.length); // Number of categories: 3

// const firstNameEl = navigatorEl.querySelector('h2');
// console.log('Category:', firstNameEl.textContent); // Category: Animals

// const firstquantityEl = navigatorEl.querySelectorAll('.item ul');
// console.log('Elements:', firstquantityEl[0].childElementCount); // Elements: 4

// const secondNameEl = navigatorEl.querySelectorAll('h2');
// console.log('Category:', secondNameEl[1].textContent); // Category: Products

// const secondquantityEl = navigatorEl.querySelectorAll('.item ul');
// console.log('Elements:', secondquantityEl[1].childElementCount); // Elements: 3

// const lastNameEl = navigatorEl.querySelectorAll('h2');
// console.log('Category:', lastNameEl[2].textContent); // Category: Technologies

// const lastquantityEl = navigatorEl.querySelectorAll('.item ul');
// console.log('Elements:', lastquantityEl[2].childElementCount); // Elementlast

const navEl = document.querySelectorAll("ul#categories li.item");
const allNumber = navEl.length;
console.log(`Number of categories: ${allNumber}`);

for (let i = 0; i <= allNumber; i += 1) {
  const headerTextEl = navEl[i].firstElementChild.textContent;
  console.log(`Category: ${headerTextEl}`);
}

const elementsEl = navEl[i].lastElementChild;
const allNumber = elementsEl.querySelectorAll("li");
console.log(`Elements: ${allNumber.length}`);
// navEl.forEach((element) => console.log(element.firstElementChild.textContent));

// const nextSib = navEl.children[1];
// console.log(nextSib.textContent);
// firstElementChild

// const lastEl = navEl.lastElementChild;
// console.log(lastEl.textContent);

// const test = navEl.previousSibling;
// console.log(test.textContent);
