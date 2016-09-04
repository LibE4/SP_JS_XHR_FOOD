var dogFoodRequest = new XMLHttpRequest;
dogFoodRequest.addEventListener("load", getDogFood); //Callback
dogFoodRequest.open("GET", "dogfood.json");
dogFoodRequest.send();

function getDogFood() {
  food = JSON.parse(dogFoodRequest.responseText);
  var currentFood;
  var foodInDOM = "";
	var tableEmt1 =  document.getElementById('dogDataDisplay');
  foodInDOM += "<thead><th><tr>";
    foodInDOM += `<td>Name</td>`;
    foodInDOM += `<td>Type</td>`;
    foodInDOM += `<td>Volume</td>`;
    foodInDOM += `<td></td>`;
    foodInDOM += `<td></td>`;
  foodInDOM += "</tr></th><thead>";
  for (var i = 0; i < food.dog_brands.length; i++) {
    currentFood = food.dog_brands[i];
    foodInDOM += "<tbody><tr>";
      foodInDOM += `<td>${currentFood.name}</td>`;
      foodInDOM += `<td>${currentFood.types[0].type}</td>`;
      foodInDOM += `<td>${currentFood.types[0].volumes[0].name}</td>`;
      foodInDOM += `<td>${currentFood.types[0].volumes[0].price}</td>`;
      foodInDOM += `<td></td>`;
    foodInDOM += "</tr>";
    foodInDOM += "<tr>";
      foodInDOM += `<td></td>`;
      foodInDOM += `<td></td>`;
      foodInDOM += `<td>${currentFood.types[0].volumes[1].name}</td>`;
      foodInDOM += `<td>${currentFood.types[0].volumes[1].price}</td>`;
      foodInDOM += `<td></td>`;
    foodInDOM += "</tr>";
    foodInDOM += "<tr>";
      foodInDOM += `<td></td>`;
      foodInDOM += `<td>${currentFood.types[1].type}</td>`;
      foodInDOM += `<td>${currentFood.types[1].volumes[0].name}</td>`;
      foodInDOM += `<td>${currentFood.types[1].volumes[0].price}</td>`;
      foodInDOM += `<td></td>`;
    foodInDOM += "</tr>";
    foodInDOM += "<tr>";
      foodInDOM += `<td></td>`;
      foodInDOM += `<td></td>`;
      foodInDOM += `<td>${currentFood.types[1].volumes[1].name}</td>`;
      foodInDOM += `<td>${currentFood.types[1].volumes[1].price}</td>`;
      foodInDOM += `<td></td>`;
    foodInDOM += "</tr></tbody>";
  };
  tableEmt1.innerHTML = foodInDOM;
} // end of getDogFood

var catFoodRequest = new XMLHttpRequest;
catFoodRequest.addEventListener("load", getCatFood); //Callback
catFoodRequest.open("GET", "catfood.json");
catFoodRequest.send();

function getCatFood() {
  food = JSON.parse(catFoodRequest.responseText);
  var currentFood =food["cat brands"][0];
  var foodInDOM = "";
  var tableEmt2 =  document.getElementById('catDataDisplay');
  foodInDOM += "<thead><th><tr>";
    foodInDOM += `<td>${currentFood.FIELD1}</td>`;
    foodInDOM += `<td>${currentFood.FIELD2}</td>`;
    foodInDOM += `<td>${currentFood.FIELD3}</td>`;
    foodInDOM += `<td></td>`;
  foodInDOM += "</tr></th><thead>";
  for (var i = 1; i < food["cat brands"].length; i++) {
    currentFood = food["cat brands"][i];
    foodInDOM += "<tbody><tr>";
    foodInDOM += `<td>${currentFood.FIELD1}</td>`;
    foodInDOM += `<td>${currentFood.FIELD2}</td>`;
    foodInDOM += `<td>${currentFood.FIELD3}</td>`;
      foodInDOM += `<td></td>`;
    foodInDOM += "</tr></tbody>";
  };
  tableEmt2.innerHTML = foodInDOM;
} // end of getCatFood
