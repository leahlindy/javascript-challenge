// * Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
//   * Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.
//   * Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.

// Part 1: convert date from website
function newDate (myDate) {
    
    var dateSplit = myDate.split("-");

    //month-day-year format
    var year = dateSplit[0];
    var month_split = dateSplit[1];
    var day_split = dateSplit[2];

    //split month and day again to remove 0 
    var months = month_split.split("0");
    
    if (months[0] == 0){
        var month = months[1];
    }
    else {
        var month = months;
    }
    
    var days = day_split.split("0")

    if (days[0] == 0){
        var day = days[1];
    }
    else {
        var day = days;
    }
    
    var dateArray = [month, day, year];
    var upDate= dateArray.join("/");
    // return the updated datetime format matching the yyyy-mm-dd of form
    return upDate;
}

newDate("2010-04-02");





// ----- Part 2: Build the table with d3 ------//

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

    // clear the input value
    d3.select("#datetime").node().value = "";
};

// when button is clicked (event triggered) function will be executed 
function handleClick(){
    
    // prevent refresh
    d3.event.preventDefault();

    // Select input from HTML as search value
    var searchValue = d3.select("#datetime").node().value;
    
    var searchValue= newDate(searchValue);
    // filter the data to return the data for the inputed date 
    
    var filteredData = data.filter(sighting => sighting.datetime == searchValue);
    // data.filter should return undefined if searchValue doesn't exist in sighting.datetime
    // conditional check if filtered is undefined
    if ( !filteredData ) {
        // Let the user know to pick another date with an alert message - regular users won't know to look in the console
        // revert to the unfiltered data
        alert("Please select another date");
        buildTable(data);
    } 
    else {
        buildTable(filteredData);
    }
    
}
// use click with click handler to execute stages
button.on("click", handleClick);