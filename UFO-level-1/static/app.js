// * Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
//   * Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.
//   * Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.
// Get a reference to the table body
var tbody = d3.select("tbody");


// USE D3 for event:
// Assign the data from `data.js` to a variable
var sightings = data;
// Assign search id to button for click event 
var button = d3.select("#search");
// Assign form that selects date entered
var form = d3.select("#inputDate");

// Create event handlers 
button.on("click", buildTable);
// 


// buildTable function event handler 
function buildTable() {
    // prevent refresh
    d3.event.preventDefault();
    
    // first want to return empty table ('refresh' the table each time)
    tbody.text("");
    
    // Select input from HTML
    var searchValue = d3.select("#datetime").node().value;
    console.log(searchValue);
    
    var filteredData = data.filter(sighting => sighting.datetime == searchValue);
    
    // With filtered data use forEach function to create a new row for each entry 
    filteredData.forEach(ufoSighting => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key,value]) => { 
            var cell = row.append("td");
            cell.text(value);
        }); 
    });

    // 
    // clear the input value
    d3.select("#datetime").node().value = "";
};

  
