
const apiUrl = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query="
let cuisine = ""
let suburb = "newtown"
const apiKey = "AIzaSyCP7aE4l93z0xlByZkAJezFyBoLmB_tVSQ"



// https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+mascot+nsw&key=AIzaSyAG5X8IQiZ0emZyh6rex3ikgZXNI3KH6Bo
// https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?q=mascot+nsw&appid=fd40ccd7b40508e5a2e810c079536a1d

const asianBtn = document.getElementById("asian");
const asianTags = document.getElementById("asianTags");

const southAsianBtn = document.getElementById("southAsian");
const southAsianTags = document.getElementById("southAsianTags");

const europeanBtn = document.getElementById("european");
const europeanTags = document.getElementById("europeanTags");

const middleEasternBtn = document.getElementById("middleEastern");
const middleEasternTags = document.getElementById("middleEasternTags");

const americanBtn = document.getElementById("american");
const americanTags = document.getElementById("americanTags");

const fastFoodBtn = document.getElementById("fastFood");
const fastFoodTags = document.getElementById("fastFoodTags");


  document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener('click', event => {
        asianTags.classList.add("hidden");      
        southAsianTags.classList.add("hidden");
        europeanTags.classList.add("hidden");
        middleEasternBtn.classList.add("hidden");
        americanTags.classList.add("hidden");
        fastFoodTags.classList.add("hidden");
        console.log("hello")
    })
  })

  asianBtn.addEventListener("click", showAsianTags);
  function showAsianTags() {
      asianTags.classList.remove("hidden");
    }

  southAsianBtn.addEventListener("click", showSouthAsianTags);
  function showSouthAsianTags() {
    southAsianTags.classList.remove("hidden");
  }

  europeanBtn.addEventListener("click", showeuropeanTags);
  function showeuropeanTags() {
    europeanTags.classList.remove("hidden");
  }

  middleEasternBtn.addEventListener("click", showmiddleEasternTags);
  function showmiddleEasternTags() {
    middleEasternTags.classList.remove("hidden");
  }

  americanBtn.addEventListener("click", showamericanTags);
  function showamericanTags() {
    americanTags.classList.remove("hidden");
  }

  fastFoodBtn.addEventListener("click", showfastFoodTags);
  function showfastFoodTags() {
    fastFoodTags.classList.remove("hidden");
  }



// const save = document.getElementById("save")
// cuisineSearch.addEventListener("click", (e) => {
//     console.log(foodresults)
//   });

  function cuisineSearch() {
    let cuisine = 
    console.log("cuisine = " + cuisine)

    
  }

  $( document ).ready(function() {
    console.log( "ready!" );
    // runApi()
});

function extractRandomElement(array){
    const count = array.length; // 5

   const randomNum = Math.floor( Math.random() * count );

   return array.splice(randomNum, 1)

}

// On page load
function runApi(){}
      let queryURLFood = apiUrl + "restaurants+in+" + suburb + "+nsw&key=" + apiKey;
      console.log(queryURLFood)
      $.ajax({
        url: queryURLFood,
        method: "GET",
      }).then(function (response) {
        let foodresults = response.results;
        const first = extractRandomElement(foodresults);
        const second = extractRandomElement(foodresults);
        const third = extractRandomElement(foodresults);
        $("#list1").text("test");
        

        console.log(foodresults);
        console.log(first);
        console.log(second);
        console.log(third);
        

        let rest1name = first[0].name;
        let rest2name = second[0].name;
        let rest3name = third[0].name;

        let rest1rating = first[0].rating;
        // let rest1price = first[0].price_level;
        // if (rest1price === 1) {
        //     let rest1dollar = "💲"
        // } else if (rest1price === 2) {
        //     let rest1dollar = "💲💲"
        // } else if (rest1price === 3) {
        //     let rest1dollar = "💲💲💲"
        // } 

                    // response[0].description;
        console.log("name = " + rest1name)
        // console.log("rating = " + rest1rating)
        // console.log("price = " + rest1price)


        // let rest2 = response[2].value;
        // let rest3 = response[3].value;


console.log("hi")
$("#name1").text(rest1name);
$("#info1").text("Rated " + rest1rating);
$("#name2").text(rest2name);
// $("#location2").text("Suburb");
$("#name3").text(rest3name);
// $("#location3").text("Suburb");
})