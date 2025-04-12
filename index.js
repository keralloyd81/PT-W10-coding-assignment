/**
 * Coding Steps:
Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
A Bootstrap styled table representing your choice of data.
A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.
 */


/*Button on click adds info to table
How do I get info = form the <input> fields and their .value()
Need recipeName, ingredients, category
(Find a way to get the # value)
Get values from the form....when we submit...then append() the info to the table

we need to get values with: getElementById()
    we need ID's on our values
*/

//This code is what will be used for the assignment. Additional code below for added functions---
const formButton = document.getElementById('formSubmit')

formButton.addEventListener('click', (event) => {
    event.preventDefault()
//variables to hold the values of the form
let recipeName = document.getElementById('recipeName').value
let ingredients = document.getElementById('ingredients').value
let category = document.getElementById('category').value

 // Optional manual check (nice to have for older browsers or extra control)
 if (!recipeName || !ingredients || !category) {
    alert("Please fill in all required fields.");
    return;
  }

//create a tr node to append to my form
let newTableRow = document.createElement('tr')


let recipeNameNode = document.createElement('td')
 recipeNameNode.innerHTML = recipeName
 newTableRow.append(recipeNameNode)

let ingredientsNode = document.createElement('td')
 ingredientsNode.innerHTML = ingredients
 newTableRow.append(ingredientsNode)

let categoryNode = document.createElement('td')
 categoryNode.innerHTML = category
 newTableRow.append(categoryNode)

document.getElementById('tBody').appendChild(newTableRow)//append to table body

document.getElementById('recipeName').value = ''
document.getElementById('ingredients').value = ''
document.getElementById('category').value = ''

})

//Using a submit event vs. click is a better approach, since it handles pressing Enter, clicking the button, and respects form validation.
//The code below is not my own-thus the reason I am not including it in the assignment.
/*---Optional Code with the DOMContentLoaded and using submit rather than click to make fields required---
  document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('recipeForm');
  const tbody = document.getElementById('tBody');

  // Set required fields
  document.getElementById('recipeName').required = true;
  document.getElementById('ingredients').required = true;
  document.getElementById('category').required = true;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const recipeName = document.getElementById('recipeName').value.trim();
    const ingredients = document.getElementById('ingredients').value.trim();
    const category = document.getElementById('category').value;

    if (!recipeName || !ingredients || !category) {
      alert("Please fill out all fields.");
      return;
    }

    // Create new row
    const newRow = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = recipeName;
    newRow.appendChild(nameCell);

    const ingredientsCell = document.createElement('td');
    ingredientsCell.textContent = ingredients;
    newRow.appendChild(ingredientsCell);

    const categoryCell = document.createElement('td');
    categoryCell.textContent = category;
    newRow.appendChild(categoryCell);

    tbody.appendChild(newRow);

    form.reset(); // Clear the form fields
  });
});
*/
/**------This code adds the option to save recipes to localStorage-----
  document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('recipeForm');
  const tbody = document.getElementById('tBody');

  // Load any existing recipes from localStorage on page load
  const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
  storedRecipes.forEach(recipe => addRecipeToTable(recipe));

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const recipeName = document.getElementById('recipeName').value.trim();
    const ingredients = document.getElementById('ingredients').value.trim();
    const category = document.getElementById('category').value;

    if (!recipeName || !ingredients || !category) {
      alert("Please fill in all fields.");
      return;
    }

    const recipe = { recipeName, ingredients, category };

    // Add to table
    addRecipeToTable(recipe);

    // Save to localStorage
    storedRecipes.push(recipe);
    localStorage.setItem('recipes', JSON.stringify(storedRecipes));

    form.reset();
  });

  // Reusable function to add a row to the table
  function addRecipeToTable(recipe) {
    const newRow = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = recipe.recipeName;
    newRow.appendChild(nameCell);

    const ingredientsCell = document.createElement('td');
    ingredientsCell.textContent = recipe.ingredients;
    newRow.appendChild(ingredientsCell);

    const categoryCell = document.createElement('td');
    categoryCell.textContent = recipe.category;
    newRow.appendChild(categoryCell);

    tbody.appendChild(newRow);
  }
});
 */

/**Other things to cosider adding:
 * Delete button to every row
 * Edit table rows
 */
 