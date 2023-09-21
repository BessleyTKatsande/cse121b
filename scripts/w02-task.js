/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Bessley Tawanda Katsande';
const currentYear = 2023;
let profilePicture = 'images/placeholder.jpg';


/* Step 3 - Element Variables */
const nameElement =  document.getElementById('name');
const foodElement =  document.getElementById('food');
const yearElement =  document.querySelector('#year');
const imageElement =  document.getElementById('image');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
let text = document.getElementById('currentYear').textContent;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', Profile image of [Bessley Tawanda Katsande])


/* Step 5 - Array */
let food = ["Rice", "Chicken", "Pizza", "Beef", "Fish", "Noodles", "Cake"];

document.querySelector(#food).innerHTML = food

const food2 =["Oxtail", "Steak", "Pie", "Lasagna", "Ice cream"]



