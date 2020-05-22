// * Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
//   * Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.
//   * Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.

// Part 1: convert data.dateime string to datetime form format
// loop through the data object and update each datetime
// var newData = data.forEach((sighting) => {
    
//     console.log(sighting);
//     // get entries for each object in the array
//     Object.entries(sighting).forEach(function([key,value]){
//         sighting.datetime="z"});
//     return datetimes;

// });
// console.log(newData);
// set up a function that can be used to alter the date format to match that in the data provided
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

    if (data.filter(sighting => sighting.datetime == searchValue)){
        var filteredData = data.filter(sighting => sighting.datetime == searchValue);
        console.log(filteredData);
    }
    // with filtered data execute build table function
    buildTable(filteredData);
}
// use click with click handler to execute stages
button.on("click", handleClick);