const array = ['one', 'two', 'three']
const arrayHtml = array.map(function (array) {
    return `<li>${array}</li>`;
  });
document.getElementById("myList").innerHTML = arrayHtml.join();

const array2 = ['A', 'B', 'A']
function gradetopints(grade) {
    let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}

const gpa = grades.map(gradetopints);
const pointsTotal = gpaPoints.reduce(function (total, item) {
  return total + item;
});

const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(function (word) {
  return word.length < 6;
});

const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);