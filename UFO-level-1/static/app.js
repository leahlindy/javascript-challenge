// * Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
//   * Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.
//   * Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.

// Part 1: convert data.dateime string to date time form format





// Part 2: Build the table with d3 //

// Assign search id to button for click event 
var button = d3.select("#search");


// buildTable function  
function buildTable(data) {
    
    // Get a reference to the table body
    var tbody = d3.select("tbody");

    // first want to return empty table ('refresh' the table each time)
    tbody.text("");
    
    // With filtered data use forEach function to create a new row for each entry 
    data.forEach(ufoSighting => {
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

// when button is clicked (event triggered) function will be executed 
function handleClick(){
    
    // prevent refresh
    d3.event.preventDefault();

    // Select input from HTML as search value
    var searchValue = d3.select("#datetime").node().value;
    console.log(searchValue);
    
    // filter the data to return the data for the inputed date 
    var filteredData = data.filter(sighting => sighting.datetime == searchValue);

    // with filtered data execute build table function
    buildTable(filteredData);
}
// use click with click handler to execute stages
button.on("click", handleClick);