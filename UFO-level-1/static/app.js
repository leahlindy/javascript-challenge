// * Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

//   * Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

//   * Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.

// Get a reference to the table body
var tbody = d3.select("tbody");

data.forEach(function(sighting) {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key,value]) { 
        var cell = row.append("td");
        cell.text(value);
    }); 
});

// USE D3 for event:
// Assign the data from `data.js` to a descriptive variable
var sightings = data;
// Select the button
var search = d3.select("#search");
// Select the form
var form = d3.select("#inputDate");

// Create event handlers 
search.on("click", runSeach);
// form.on("submit",runSearch);

function runSeach() {
    // prevent refresh
    d3.event.preventDefault();
    
    // Select input from HTML
    var searchElement = d3.select("#inputDate");
  
    // Get the value property of the input element
    // var searchValue = searchElement.node.value();
  
    // console.log(searchValue);
    console.log(sightings);
};