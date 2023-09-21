/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Bessley Tawanda Katsande';
const currentYear = 2023;
const profilePicture = 'images/placeholder.jpg';


/* Step 3 - Element Variables */
const nameElement =  document.getElementById('name');
const foodElement =  document.getElementById('food');
const yearElement =  document.querySelector('year');
const imageElement =  document.getElementById('image');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
let text = document.getElementById('currentYear').textContent;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', "Placeholder Image");


/* Step 5 - Array */
/*1*/ const food = ['Rice', 'Chicken', 'Pizza', 'Beef', 'Fish', 'Noodles', 'Cake'];

/*2*/ document.querySelector('#food').textContent = food;

/*3*/ const food2 = 'Lasagna';

/*4*/ food.push(food2);

/*5*/ document.querySelector('#food').textContent = food;

/*6*/ food.shift();

/*7*/ document.querySelector('#food').textContent = food;

/*8*/ let popped = food.pop();

/*9*/ document.querySelector('#food').textContent = food;