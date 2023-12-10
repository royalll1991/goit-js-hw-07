const categoriesLi = document.getElementById(`categories`);
const numberOfCategories = categoriesLi.querySelectorAll(`.item`).length;  
console.log(`Number of categories:`, numberOfCategories);

const categoriesItem = categoriesLi.querySelectorAll(`.item`);
categoriesItem.forEach (category => {
    const categoryName = category.querySelector(`h2`).textContent;
    const categoryElement = category.querySelectorAll(`ul > li`).length;
    console.log(`Category: ${categoryName}`);
    console.log(`Element: ${categoryElement}`);
})

