/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Bessley Katsande',
    photo: 'images/placeholder.jpg',
    favouriteFoods: ['Rice', 'Chicken', 'Pizza', 'Beef', 'Fish', 'Noodles', 'Cake'],
    hobbies: ['reading', 'writing','cooking'],
};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
  {
    place: 'Cape Town, SA',
    length: '8 years'
  },
  {
    place: "Zimbabwe",
    length: '7 years'
  },
  {
    place: "Indonesia",
    length: '7 years'
  }, 
);

/* DOM Manipulation - Output */
document.querySelector('#name').textContent = myProfile.name;

/* Name */
/* Photo with attributes */
photo_out = document.getElementById("photo");
photo_out.setAttribute("src", myProfile.photo);
photo_out.width = 240;
photo_out.height = 300;

/* Favorite Foods List*/
foodList = myProfile.favouriteFoods;

for (let i = 0; i < foodList.length; i++) {
    let list = document.createElement('li');
    list.innerText = foodList[i];
    document.querySelector('#favorite-foods').appendChild(list);
}

/* Hobbies List */
hobbiesList = myProfile.hobbies;

for (let i = 0; i < hobbiesList.length; i++) {
    let list = document.createElement('li');
    list.innerText = hobbiesList[i];
    document.querySelector('#hobbies').appendChild(list);
}


/* Places Lived DataList */
let placesOut = "";
place = myProfile.placesLived
place.forEach(countPlaces)

document.getElementById("places-lived").innerHTML = placesOut;

function countPlaces(place) {
    placesOut += "<dt>" + place.place + "</dt>" + "<dd>" + place.timeLived + " years" + "</dt>";
}

